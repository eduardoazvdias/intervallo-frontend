import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-md">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-600">Intervallo</h1>
          <p className="mt-2 text-gray-600">
            O jogo de quiz colaborativo em tempo real
          </p>
        </div>

        <div className="space-y-4 mt-8">
          <Link 
            href="/game/new" 
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Criar Nova Sala
          </Link>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">ou</span>
            </div>
          </div>
          
          <div className="mt-6">
            <form className="space-y-4">
              <div>
                <label htmlFor="room-code" className="sr-only">
                  Código da Sala
                </label>
                <input
                  id="room-code"
                  name="roomCode"
                  type="text"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Digite o código da sala"
                />
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Entrar na Sala
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <Link href="/como-jogar" className="text-sm text-blue-600 hover:text-blue-500">
            Como jogar
          </Link>
          <span className="mx-2 text-gray-300">•</span>
          <Link href="/ranking" className="text-sm text-blue-600 hover:text-blue-500">
            Ranking
          </Link>
        </div>
      </div>
    </main>
  );
}
