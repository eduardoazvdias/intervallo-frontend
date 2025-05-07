// Cliente base para requisições à API

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

type RequestOptions = {
  method?: string;
  headers?: Record<string, string>;
  body?: any;
};

// Função para realizar requisições HTTP genéricas
async function fetchApi<T>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> {
  const { method = 'GET', headers = {}, body } = options;
  
  const requestHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    ...headers,
  };
  
  const config: RequestInit = {
    method,
    headers: requestHeaders,
    body: body ? JSON.stringify(body) : undefined,
    credentials: 'include',
  };
  
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, config);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `API request failed with status ${response.status}`);
    }
    
    // Para endpoints que não retornam JSON
    if (response.status === 204) {
      return {} as T;
    }
    
    return await response.json();
  } catch (error) {
    console.error(`API request failed: ${endpoint}`, error);
    throw error;
  }
}

// Métodos HTTP comuns
export const api = {
  get: <T>(endpoint: string, headers?: Record<string, string>) => 
    fetchApi<T>(endpoint, { method: 'GET', headers }),
    
  post: <T>(endpoint: string, body: any, headers?: Record<string, string>) => 
    fetchApi<T>(endpoint, { method: 'POST', body, headers }),
    
  put: <T>(endpoint: string, body: any, headers?: Record<string, string>) => 
    fetchApi<T>(endpoint, { method: 'PUT', body, headers }),
    
  patch: <T>(endpoint: string, body: any, headers?: Record<string, string>) => 
    fetchApi<T>(endpoint, { method: 'PATCH', body, headers }),
    
  delete: <T>(endpoint: string, headers?: Record<string, string>) => 
    fetchApi<T>(endpoint, { method: 'DELETE', headers }),
};

export default api; 