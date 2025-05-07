"use client";

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/Button';
import Link from 'next/link';
import { use } from 'react';

// Tipo para a sala mockada
type MockRoom = {
  id: string;
  name: string;
  players: string[];
  status: 'waiting' | 'playing' | 'finished';
  createdAt: string;
};

// Tipo para os parâmetros da rota
type RouteParams = {
  roomId: string;
};

export default function GameRoom({ params }: { params: any }) {
  // Desempacotar params usando React.use() conforme exigido pelo Next.js 15
  const unwrappedParams = use(params) as RouteParams;
  const roomId = unwrappedParams.roomId;
  
  const [room, setRoom] = useState<MockRoom | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [playerName, setPlayerName] = useState('');

  // Carregar dados mockados da sala
  useEffect(() => {
    // Simular pequeno delay de carregamento
    const timer = setTimeout(() => {
      try {
        // Tentar obter dados do localStorage
        const savedRoom = localStorage.getItem('intervallo-current-room');
        const savedPlayerName = localStorage.getItem('intervallo-player-name');
        
        if (savedRoom) {
          const roomData = JSON.parse(savedRoom) as MockRoom;
          setRoom(roomData);
        } else {
          // Se não encontrar dados no localStorage, criar dados mockados
          const mockRoom: MockRoom = {
            id: roomId,
            name: `Sala ${roomId.substring(0, 6)}`,
            players: ['Jogador 1', 'Jogador 2', 'Jogador 3'],
            status: 'waiting',
            createdAt: new Date().toISOString()
          };
          setRoom(mockRoom);
        }

        if (savedPlayerName) {
          setPlayerName(savedPlayerName);
        }

        setLoading(false);
      } catch (err) {
        console.error('Erro ao carregar dados da sala:', err);
        setError('Não foi possível carregar os dados da sala.');
        setLoading(false);
      }
    }, 1000); // Delay de 1 segundo para simular carregamento

    return () => clearTimeout(timer);
  }, [roomId]);

  const handleStartGame = () => {
    if (room) {
      const updatedRoom: MockRoom = { 
        ...room, 
        status: 'playing' 
      };
      localStorage.setItem('intervallo-current-room', JSON.stringify(updatedRoom));
      setRoom(updatedRoom);
    }
  };

  const handleFinishGame = () => {
    if (room) {
      const updatedRoom: MockRoom = { 
        ...room, 
        status: 'finished' 
      };
      localStorage.setItem('intervallo-current-room', JSON.stringify(updatedRoom));
      setRoom(updatedRoom);
    }
  };

  const handlePlayAgain = () => {
    if (room) {
      const updatedRoom: MockRoom = { 
        ...room, 
        status: 'waiting' 
      };
      localStorage.setItem('intervallo-current-room', JSON.stringify(updatedRoom));
      setRoom(updatedRoom);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4 bg-gray-50">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p className="font-medium">{error}</p>
          <Link href="/">
            <Button className="mt-4">
              Voltar para o início
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">{room?.name}</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6 border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Jogadores ({room?.players.length || 0})</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {room?.players.map((playerName, index) => (
            <div key={index} className="bg-gray-100 p-3 rounded-md flex items-center border border-gray-200">
              <div className="w-3 h-3 rounded-full mr-2 bg-green-500"></div>
              <span className="font-medium text-gray-800">{playerName}</span>
              {index === 0 && (
                <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-semibold">
                  Host
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            Status: 
            <span className={`ml-2 ${
              room?.status === 'waiting' ? 'text-yellow-600' : 
              room?.status === 'playing' ? 'text-green-600' : 
              'text-blue-600'
            }`}>
              {room?.status === 'waiting' 
                ? 'Aguardando início' 
                : room?.status === 'playing' 
                ? 'Em andamento' 
                : 'Finalizado'}
            </span>
          </h2>
          <div className="h-1 w-full rounded-full bg-gray-200 overflow-hidden">
            <div 
              className={`h-full ${
                room?.status === 'waiting' ? 'bg-yellow-500 w-1/3' : 
                room?.status === 'playing' ? 'bg-green-500 w-2/3' : 
                'bg-blue-500 w-full'
              }`}>
            </div>
          </div>
        </div>
        
        {room?.status === 'waiting' && (
          <div className="flex justify-center mt-6">
            <Button 
              variant="primary" 
              className="mr-4"
              onClick={handleStartGame}
            >
              Iniciar Jogo
            </Button>
            <Button variant="outline">
              Convidar Amigos
            </Button>
          </div>
        )}
        
        {room?.status === 'playing' && (
          <div className="space-y-6">
            <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
              <p className="font-semibold mb-3 text-green-800 text-lg">Jogo em andamento</p>
              <p className="text-green-700">
                Você está jogando como: <span className="font-bold">{playerName}</span>
              </p>
            </div>
            
            <div className="flex justify-center">
              <Button
                variant="primary"
                onClick={handleFinishGame}
              >
                Finalizar Jogo (simulação)
              </Button>
            </div>
          </div>
        )}
        
        {room?.status === 'finished' && (
          <div className="text-center">
            <div className="bg-blue-50 p-6 rounded-lg mb-6 border border-blue-200">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Resultado Final</h3>
              <div className="space-y-3">
                <p className="text-gray-800">
                  <span className="inline-block w-7 h-7 bg-yellow-400 text-gray-900 rounded-full mr-2 font-bold flex items-center justify-center">1</span>
                  <strong className="text-gray-900">{playerName}</strong> - 120 pontos
                </p>
                <p className="text-gray-800">
                  <span className="inline-block w-7 h-7 bg-gray-300 text-gray-700 rounded-full mr-2 font-bold flex items-center justify-center">2</span>
                  <strong className="text-gray-700">Jogador CPU 1</strong> - 90 pontos
                </p>
                <p className="text-gray-800">
                  <span className="inline-block w-7 h-7 bg-amber-600 text-white rounded-full mr-2 font-bold flex items-center justify-center">3</span>
                  <strong className="text-gray-700">Jogador CPU 2</strong> - 70 pontos
                </p>
              </div>
            </div>
            
            <Button
              onClick={handlePlayAgain}
            >
              Jogar Novamente
            </Button>
          </div>
        )}
      </div>
      
      <div className="mt-8 text-center">
        <Link href="/">
          <Button variant="outline">
            Voltar para o início
          </Button>
        </Link>
      </div>
    </div>
  );
} 