n'use client';

import { useState } from 'react';

interface GameSettingsProps {
  onSave: (settings: { rounds: number; selectedCategories: string[] }) => void;
  onClose: () => void;
}

export const GameSettings = ({ onSave, onClose }: GameSettingsProps) => {
  const categories = [
    { id: 'general', name: 'Conhecimentos Gerais' },
    { id: 'science', name: 'Ciência' },
    { id: 'history', name: 'História' },
    { id: 'geography', name: 'Geografia' },
    { id: 'entertainment', name: 'Entretenimento' }
  ];

  const [selectedCategories, setSelectedCategories] = useState<string[]>(['general']);
  const [rounds, setRounds] = useState(5);

  const handleCategoryToggle = (categoryId: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(categoryId)) {
        // Não permitir remover se for o último selecionado
        if (prev.length === 1) return prev;
        return prev.filter(id => id !== categoryId);
      }
      return [...prev, categoryId];
    });
  };

  const handleSave = () => {
    onSave({ rounds, selectedCategories });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Configurações do Jogo</h2>
        
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Quantidade de Rodadas
          </label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="3"
              max="20"
              value={rounds}
              onChange={(e) => setRounds(Number(e.target.value))}
              className="flex-1"
            />
            <span className="text-gray-900 font-bold w-8 text-center">{rounds}</span>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Categorias
          </label>
          <div className="space-y-2">
            {categories.map(category => (
              <label
                key={category.id}
                className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category.id)}
                  onChange={() => handleCategoryToggle(category.id)}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="text-gray-900">{category.name}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}; 