# 🧩 Arquivo de Requisitos - Frontend (React)

## ✅ Padrões a seguir
- Framework: **React 18** com **Next.js 14 (App Router)**
- Styling: **Tailwind CSS** com `@tailwind/variants` ou `class-variance-authority`
- Estado global: **Zustand** (ou Redux Toolkit com RTK Query para chamadas REST)
- WebSocket via `WebSocket API` padrão ou wrapper com reconexão automática
- Organização por domínio:
  - `/app` → páginas com loading e error boundaries
  - `/components` → UI reutilizável (com variantes bem definidas)
  - `/features` → lógica e componentes por contexto (ex: quiz, sala, ranking)
  - `/lib` → conexão com WebSocket, helpers, validadores, serviços REST
- Estrutura de tipos global em `/types`
- Validadores com **Zod** ou **Yup**
- ESLint com regras recomendadas + Prettier para formatação

## 🔌 Camadas e responsabilidades
- **components/**: UI puramente visual, desacoplada da lógica de domínio, altamente reutilizável. Componentes devem ser pequenos, focados e usarem variantes para manter consistência visual.
- **features/**: UI + lógica específicas por domínio (quiz, lobby, ranking). Devem conter:
  - `components/` com elementos visuais ligados ao domínio
  - `hooks/` com a lógica do jogo/fluxo da feature
  - `store.ts` com Zustand isolado por feature (evitar um único store global)
  - `utils.ts` com funções auxiliares puras
- **lib/services/**: conexão com API REST (`fetch`, `axios`) organizada por recurso ou domínio (ex: sala, partida).
- **lib/ws.ts**: gerenciador de WebSocket com reconexão automática, envio/recebimento tipado por evento.
- **hooks/**: lógica compartilhada reutilizável entre features (ex: `useCountdown`, `useLocalStorage`).

## 🔒 Segurança no frontend
- Sanitização de entradas de usuário (evitar XSS em respostas/nicknames)
- Validação de dados antes do envio ao backend com Zod/Yup
- Controle de flood/spam com debounce e tempo mínimo entre ações
- Navegação protegida com checagem de sessão/sala ativa
- Revalidação de identidade em reconexão via WebSocket

## ❌ Evitar
- Uso de estados globais desnecessários (ex: nome do jogador em contexto global se já está no local)
- Lógica de tempo real em componentes visuais (deve estar em hooks separados)
- Hooks que misturam múltiplas responsabilidades (UI + estado + socket)
- Estilização via CSS puro ou styled-components (usar Tailwind sempre)
- Proliferação de componentes sem variantes ou sem padronização visual
- Components com mais de 80 linhas ou múltiplos efeitos/lógicas (quebrar em menores)

## 📌 Boas práticas
- Utilizar `useEffect` com deps claras e retorno de cleanup sempre que possível
- Extrair lógica complexa de componentes para hooks reutilizáveis
- Priorizar composição de componentes pequenos em vez de blocos monolíticos
- Separar layout (`Card`, `Section`, `Panel`) de UI conectada a dados
- Criar e manter design tokens e variantes consistentes
- Usar `swr` ou `react-query` para fetch quando necessário, com cache e retry
- Prever acessibilidade: ARIA, labels, navegação por teclado, contraste mínimo

## 🧪 Testes
- `Jest` com `React Testing Library`
- Testar lógica de tempo real e fluxo de rodada (por exemplo, `useSocketGame`)
- Criar mocks para WebSocket, timers e fetch
- Testes devem verificar renderização condicional, interações e efeitos colaterais

## 🚀 Estrutura sugerida
```
/frontend
├── app
│   ├── page.tsx
│   └── game/[roomId]/page.tsx
├── components
├── features
│   ├── quiz
│   │   ├── components
│   │   ├── hooks
│   │   ├── store.ts
│   │   └── utils.ts
│   ├── lobby
│   └── ranking
├── lib
│   ├── ws.ts
│   └── services
├── hooks
├── types
└── styles
```

> O objetivo é manter o código **modular, previsível, testável e fácil de escalar**.
> Cada componente ou hook deve ter **responsabilidade única**, e o design deve ser **consistente e acessível**.
