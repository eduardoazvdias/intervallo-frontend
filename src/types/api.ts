// Tipos para respostas e requisições da API

// Tipo genérico para resposta da API
export type ApiResponse<T> = {
  data: T;
  status: number;
  message?: string;
};

// Tipo genérico para erros da API
export type ApiError = {
  message: string;
  code: string;
  status: number;
  details?: Record<string, any>;
};

// Tipo para autenticação
export type AuthResponse = {
  token: string;
  user: {
    id: string;
    name: string;
    email?: string;
  };
};

// Tipos para operações de salas
export type CreateRoomRequest = {
  name: string;
  maxPlayers?: number;
  gameMode?: string;
  timePerQuestion?: number;
  totalQuestions?: number;
};

export type JoinRoomRequest = {
  playerName: string;
};

// Tipos para websocket
export type WebSocketMessage<T = any> = {
  type: string;
  data: T;
};