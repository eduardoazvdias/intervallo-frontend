import { useState, useEffect } from 'react';

type StorageOptions<T> = {
  serializer?: (value: T) => string;
  deserializer?: (value: string) => T;
};

// Hook para persistir e recuperar dados do localStorage
export function useLocalStorage<T>(
  key: string,
  initialValue: T,
  options: StorageOptions<T> = {}
) {
  const {
    serializer = JSON.stringify,
    deserializer = JSON.parse,
  } = options;
  
  // Função para obter o valor inicial do localStorage ou usar o valor padrão
  const readValue = (): T => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    
    try {
      const item = window.localStorage.getItem(key);
      return item ? deserializer(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  };
  
  // Estado com o valor atual (do localStorage ou o inicial)
  const [storedValue, setStoredValue] = useState<T>(readValue);
  
  // Função para atualizar o valor no estado e no localStorage
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Permitir valor como função (como no useState)
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      // Salvar no estado
      setStoredValue(valueToStore);
      
      // Salvar no localStorage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, serializer(valueToStore));
      }
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  };
  
  // Sincronizar com outros possíveis setters da mesma chave
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.newValue) {
        setStoredValue(deserializer(e.newValue));
      }
    };
    
    // Adicionar listener para evento storage (quando localStorage muda em outras abas)
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [key, deserializer]);
  
  return [storedValue, setValue] as const;
} 