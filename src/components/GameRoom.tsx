'use client';

import { useSearchParams } from 'next/navigation';
import { CategorySelection } from '@/components/CategorySelection';
import { Game } from '@/components/Game';

interface GameRoomProps {
  roomId: string;
  initialCategory?: string;
}

export function GameRoom({ roomId, initialCategory }: GameRoomProps) {
  const searchParams = useSearchParams();
  const category = searchParams.get('category') || initialCategory;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-4">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-2xl font-bold text-blue-800 mb-4">
            Sala: {roomId}
          </h1>
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Convidar Amigos
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
                Configurações
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {!category ? (
            <CategorySelection roomId={roomId} />
          ) : (
            <Game category={category} />
          )}
        </div>
      </div>
    </div>
  );
} 