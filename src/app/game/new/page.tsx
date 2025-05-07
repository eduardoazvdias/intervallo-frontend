"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/Button';

export default function NewGameRoom() {
  const router = useRouter();
  const [roomName, setRoomName] = useState('');
  const [playerName, setPlayerName] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState('');

  const handleCreateRoom = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!roomName.trim() || !playerName.trim()) {
      setError('Preencha todos os campos');
      return;
    }
    
    setIsCreating(true);
    
    try {
      // Simular pequeno delay como se estivesse fazendo chamada à API
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Gerar ID fictício para a sala
      const mockRoomId = `sala-${Date.now().toString(36)}`;
      
      // Armazenar dados no localStorage para usar na página da sala
      localStorage.setItem('intervallo-current-room', JSON.stringify({
        id: mockRoomId,
        name: roomName,
        players: [playerName, 'Jogador CPU 1', 'Jogador CPU 2'],
        status: 'waiting',
        createdAt: new Date().toISOString()
      }));
      
      // Armazenar nome do jogador para uso posterior
      localStorage.setItem('intervallo-player-name', playerName);
      
      // Redirecionar para a página da sala
      router.push(`/game/${mockRoomId}`);
    } catch (err) {
      console.error('Erro ao simular criação de sala:', err);
      setError('Não foi possível criar a sala. Tente novamente.');
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-md">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-blue-600">Criar Nova Sala</h1>
          <p className="mt-2 text-gray-600">
            Configure sua sala de jogo Intervallo
          </p>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        <form onSubmit={handleCreateRoom} className="space-y-6">
          <div>
            <label htmlFor="room-name" className="block text-sm font-medium text-gray-700">
              Nome da Sala
            </label>
            <input
              id="room-name"
              name="roomName"
              type="text"
              required
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
              className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ex: Sala dos Amigos"
            />
          </div>
          
          <div>
            <label htmlFor="player-name" className="block text-sm font-medium text-gray-700">
              Seu Nome
            </label>
            <input
              id="player-name"
              name="playerName"
              type="text"
              required
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Como você quer ser chamado?"
            />
          </div>
          
          <div className="pt-4">
            <Button
              type="submit"
              disabled={isCreating}
              variant="primary"
              className="w-full"
            >
              {isCreating ? 'Criando...' : 'Criar e Entrar'}
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
} 