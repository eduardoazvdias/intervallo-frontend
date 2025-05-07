'use client';

import { useRouter } from 'next/navigation';

const categories = [
  { id: 'general', name: 'Conhecimentos Gerais' },
  { id: 'science', name: 'Ciência' },
  { id: 'history', name: 'História' },
  { id: 'geography', name: 'Geografia' },
  { id: 'entertainment', name: 'Entretenimento' },
];

interface CategorySelectionProps {
  roomId: string;
}

export const CategorySelection = ({ roomId }: CategorySelectionProps) => {
  const router = useRouter();

  const handleCategorySelect = (categoryId: string) => {
    router.push(`/game/${roomId}?category=${categoryId}`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Escolha uma Categoria</h2>
        <p className="text-gray-600 mt-2">Selecione o tema para o jogo</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategorySelect(category.id)}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow text-left"
          >
            <h3 className="text-xl font-semibold text-gray-900">
              {category.name}
            </h3>
          </button>
        ))}
      </div>
    </div>
  );
}; 