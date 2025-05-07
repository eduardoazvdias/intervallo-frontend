// Configuração centralizada de WebSocket com reconexão automática
// Permite adicionar e remover listeners por evento

type Listener = (data: any) => void;
type EventMap = Record<string, Listener[]>;

class WebSocketService {
  private socket: WebSocket | null = null;
  private url: string;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;
  private reconnectTimeout = 1000;
  private eventMap: EventMap = {};

  constructor(url: string) {
    this.url = url;
  }

  // Conexão ao WebSocket
  connect(): void {
    if (this.socket) return;
    
    try {
      this.socket = new WebSocket(this.url);
      
      this.socket.onopen = () => {
        console.log('WebSocket connected');
        this.reconnectAttempts = 0;
      };
      
      this.socket.onclose = () => {
        console.log('WebSocket disconnected');
        this.socket = null;
        this.attemptReconnect();
      };
      
      this.socket.onerror = (error) => {
        console.error('WebSocket error:', error);
      };
      
      this.socket.onmessage = (event) => {
        try {
          const { type, data } = JSON.parse(event.data);
          this.dispatchEvent(type, data);
        } catch (error) {
          console.error('Failed to parse WebSocket message:', error);
        }
      };
    } catch (error) {
      console.error('Failed to connect WebSocket:', error);
      this.attemptReconnect();
    }
  }

  // Reconexão em caso de desconexão
  private attemptReconnect(): void {
    if (this.reconnectAttempts >= this.maxReconnectAttempts) {
      console.error('Max reconnect attempts reached');
      return;
    }
    
    this.reconnectAttempts++;
    const timeout = this.reconnectTimeout * Math.pow(2, this.reconnectAttempts - 1);
    
    setTimeout(() => {
      console.log(`Attempting to reconnect (${this.reconnectAttempts}/${this.maxReconnectAttempts})...`);
      this.connect();
    }, timeout);
  }

  // Adicionar listener para um evento
  on(event: string, listener: Listener): void {
    if (!this.eventMap[event]) {
      this.eventMap[event] = [];
    }
    this.eventMap[event].push(listener);
  }

  // Remover listener para um evento
  off(event: string, listener: Listener): void {
    if (!this.eventMap[event]) return;
    this.eventMap[event] = this.eventMap[event].filter(l => l !== listener);
  }

  // Disparar evento para todos os listeners registrados
  private dispatchEvent(event: string, data: any): void {
    if (!this.eventMap[event]) return;
    this.eventMap[event].forEach(listener => listener(data));
  }

  // Enviar mensagem para o servidor
  send(type: string, data: any): void {
    if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
      console.error('WebSocket is not connected');
      return;
    }
    
    try {
      this.socket.send(JSON.stringify({ type, data }));
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  }

  // Desconectar WebSocket
  disconnect(): void {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
  }
}

// Instância singleton para uso em toda a aplicação
export const ws = new WebSocketService(process.env.NEXT_PUBLIC_WS_URL || 'ws://localhost:3001');

export default ws; 