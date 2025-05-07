'use client';

import { useState } from 'react';

interface GameSettingsProps {
  onSave: (settings: { rounds: number; selectedCategories: string[] }) => void;
  onClose: () => void;
}

export const GameSettings = ({ onSave, onClose }: GameSettingsProps) => {
  const [rounds, setRounds] = useState(5);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['general']);

  const categories = [
    { id: 'general', name: 'Conhecimento Geral' },
    { id: 'science', name: 'Ciência' },
    { id: 'history', name: 'História' },
    { id: 'geography', name: 'Geografia' },
    { id: 'entertainment', name: 'Entretenimento' },
  ];

  const handleCategoryToggle = (categoryId: string) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ rounds, selectedCategories });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Configurações do Jogo</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Número de Rodadas
            </label>
            <input
              type="number"
              min="1"
              max="20"
              value={rounds}
              onChange={(e) => setRounds(Number(e.target.value))}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Categorias
            </label>
            <div className="space-y-2">
              {categories.map(category => (
                <label key={category.id} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category.id)}
                    onChange={() => handleCategoryToggle(category.id)}
                    className="mr-2"
                  />
                  {category.name}
                </label>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}; 