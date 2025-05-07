// Serviço específico para operações relacionadas às salas de jogo
import api from './api';

// Tipos para os parâmetros e respostas
type CreateRoomParams = {
  name: string;
  maxPlayers?: number;
  gameMode?: string;
};

type JoinRoomParams = {
  roomId: string;
  playerName: string;
};

type Room = {
  id: string;
  name: string;
  players: string[];
  status: 'waiting' | 'playing' | 'finished';
  createdAt: string;
};

// Serviço de salas para chamadas à API
export const roomService = {
  // Criar uma nova sala
  createRoom: (params: CreateRoomParams) => 
    api.post<Room>('rooms', params),
  
  // Entrar em uma sala existente
  joinRoom: (params: JoinRoomParams) => 
    api.post<Room>(`rooms/${params.roomId}/join`, { playerName: params.playerName }),
  
  // Listar salas disponíveis
  listRooms: () => 
    api.get<Room[]>('rooms'),
  
  // Obter detalhes de uma sala específica
  getRoom: (roomId: string) => 
    api.get<Room>(`rooms/${roomId}`),
  
  // Sair de uma sala
  leaveRoom: (roomId: string) => 
    api.post<void>(`rooms/${roomId}/leave`, {}),
};

export default roomService; 