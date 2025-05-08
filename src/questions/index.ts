export * from './general-knowledge';
export * from './science';
export * from './history';
export * from './geography';
export * from './entertainment';

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

// Helper function to generate question IDs
function generateQuestionId(category: string, index: number): string {
  return `${category}-${index + 1}`;
}

export const generalKnowledgeQuestions: Question[] = [
  {
    id: generateQuestionId('general', 0),
    question: "Qual é o maior planeta do sistema solar?",
    options: ["Terra", "Júpiter", "Saturno", "Marte"],
    correctAnswer: 1
  },
  {
    id: generateQuestionId('general', 1),
    question: "Quem pintou a Mona Lisa?",
    options: ["Van Gogh", "Leonardo da Vinci", "Picasso", "Michelangelo"],
    correctAnswer: 1
  },
  {
    id: generateQuestionId('general', 2),
    question: "Qual é o elemento químico com símbolo 'O'?",
    options: ["Ouro", "Oxigênio", "Ósmio", "Osmio"],
    correctAnswer: 1
  },
  {
    id: generateQuestionId('general', 3),
    question: "Em que ano começou a Primeira Guerra Mundial?",
    options: ["1914", "1918", "1939", "1945"],
    correctAnswer: 0
  },
  {
    id: generateQuestionId('general', 4),
    question: "Qual é o maior oceano do mundo?",
    options: ["Atlântico", "Índico", "Pacífico", "Ártico"],
    correctAnswer: 2
  },
  {
    id: generateQuestionId('general', 5),
    question: "Quem escreveu 'Dom Casmurro'?",
    options: ["Machado de Assis", "José de Alencar", "Eça de Queirós", "Lima Barreto"],
    correctAnswer: 0
  },
  {
    id: generateQuestionId('general', 6),
    question: "Qual é a capital da França?",
    options: ["Londres", "Berlim", "Paris", "Roma"],
    correctAnswer: 2
  },
  {
    id: generateQuestionId('general', 7),
    question: "Quem foi o primeiro presidente do Brasil?",
    options: ["Getúlio Vargas", "Deodoro da Fonseca", "Prudente de Morais", "Floriano Peixoto"],
    correctAnswer: 1
  },
  {
    id: generateQuestionId('general', 8),
    question: "Qual é o maior deserto do mundo?",
    options: ["Saara", "Gobi", "Antártico", "Atacama"],
    correctAnswer: 0
  },
  {
    id: generateQuestionId('general', 9),
    question: "Quem foi Albert Einstein?",
    options: ["Um pintor", "Um físico", "Um músico", "Um escritor"],
    correctAnswer: 1
  },
  {
    id: generateQuestionId('general', 10),
    question: "Qual é o maior animal terrestre?",
    options: ["Elefante Africano", "Girafa", "Rinoceronte", "Hipopótamo"],
    correctAnswer: 0
  },
  {
    id: generateQuestionId('general', 11),
    question: "Quem escreveu 'Os Lusíadas'?",
    options: ["Fernando Pessoa", "Luís de Camões", "Eça de Queirós", "Almeida Garrett"],
    correctAnswer: 1
  },
  {
    id: generateQuestionId('general', 12),
    question: "Qual é o maior rio do mundo?",
    options: ["Nilo", "Amazonas", "Mississippi", "Yangtze"],
    correctAnswer: 1
  },
  {
    id: generateQuestionId('general', 13),
    question: "Quem foi Marie Curie?",
    options: ["Uma pintora", "Uma física", "Uma escritora", "Uma cantora"],
    correctAnswer: 1
  },
  {
    id: generateQuestionId('general', 14),
    question: "Qual é o maior vulcão ativo do mundo?",
    options: ["Monte Fuji", "Mauna Loa", "Etna", "Vesúvio"],
    correctAnswer: 1
  },
  {
    id: generateQuestionId('general', 15),
    question: "Quem foi William Shakespeare?",
    options: ["Um pintor", "Um músico", "Um dramaturgo", "Um cientista"],
    correctAnswer: 2
  },
  {
    id: generateQuestionId('general', 16),
    question: "Qual é o maior lago do mundo?",
    options: ["Lago Vitória", "Mar Cáspio", "Lago Superior", "Lago Baikal"],
    correctAnswer: 1
  },
  {
    id: generateQuestionId('general', 17),
    question: "Quem foi Charles Darwin?",
    options: ["Um físico", "Um biólogo", "Um químico", "Um matemático"],
    correctAnswer: 1
  },
  {
    id: generateQuestionId('general', 18),
    question: "Qual é o maior canyon do mundo?",
    options: ["Grand Canyon", "Canyon do Colca", "Canyon do Colorado", "Canyon do Fish River"],
    correctAnswer: 0
  },
  {
    id: generateQuestionId('general', 19),
    question: "Quem foi Isaac Newton?",
    options: ["Um pintor", "Um músico", "Um físico", "Um escritor"],
    correctAnswer: 2
  }
];

export const scienceQuestions: Question[] = [
  {
    id: generateQuestionId('science', 0),
    question: "Qual é a fórmula da água?",
    options: ["CO2", "H2O", "O2", "H2SO4"],
    correctAnswer: 1
  },
  {
    id: generateQuestionId('science', 1),
    question: "Qual é o elemento mais abundante no universo?",
    options: ["Oxigênio", "Hélio", "Hidrogênio", "Carbono"],
    correctAnswer: 2
  },
  {
    id: generateQuestionId('science', 2),
    question: "Qual é a unidade básica da vida?",
    options: ["Átomo", "Molécula", "Célula", "Tecido"],
    correctAnswer: 2
  },
  {
    id: generateQuestionId('science', 3),
    question: "Qual é a velocidade da luz?",
    options: ["299.792 km/s", "199.792 km/s", "399.792 km/s", "499.792 km/s"],
    correctAnswer: 0
  },
  {
    id: generateQuestionId('science', 4),
    question: "Qual é o maior órgão do corpo humano?",
    options: ["Coração", "Cérebro", "Pele", "Fígado"],
    correctAnswer: 2
  },
  {
    id: generateQuestionId('science', 5),
    question: "Qual é o processo pelo qual as plantas produzem seu próprio alimento?",
    options: ["Respiração", "Fotossíntese", "Digestão", "Fermentação"],
    correctAnswer: 1
  },
  {
    id: generateQuestionId('science', 6),
    question: "Qual é o elemento mais duro da natureza?",
    options: ["Ouro", "Diamante", "Ferro", "Platina"],
    correctAnswer: 1
  },
  {
    id: generateQuestionId('science', 7),
    question: "Qual é o maior osso do corpo humano?",
    options: ["Fêmur", "Tíbia", "Úmero", "Crânio"],
    correctAnswer: 0
  },
  {
    id: generateQuestionId('science', 8),
    question: "Qual é o processo de divisão celular?",
    options: ["Mitose", "Meiose", "Ambos", "Nenhum dos dois"],
    correctAnswer: 2
  },
  {
    id: generateQuestionId('science', 9),
    question: "Qual é o pH da água pura?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 2
  },
  {
    id: generateQuestionId('science', 10),
    question: "Qual é o maior planeta do sistema solar?",
    options: ["Terra", "Júpiter", "Saturno", "Netuno"],
    correctAnswer: 1
  },
  {
    id: generateQuestionId('science', 11),
    question: "Qual é o processo de formação de rochas?",
    options: ["Erosão", "Sedimentação", "Ciclo das rochas", "Todas as anteriores"],
    correctAnswer: 3
  },
  {
    id: generateQuestionId('science', 12),
    question: "Qual é o maior músculo do corpo humano?",
    options: ["Bíceps", "Glúteo máximo", "Quadríceps", "Dorsal"],
    correctAnswer: 1
  },
  {
    id: generateQuestionId('science', 13),
    question: "Qual é o processo de formação de fósseis?",
    options: ["Fossilização", "Mineralização", "Petrificação", "Todas as anteriores"],
    correctAnswer: 3
  },
  {
    id: generateQuestionId('science', 14),
    question: "Qual é o maior órgão do sistema digestivo?",
    options: ["Estômago", "Intestino delgado", "Fígado", "Pâncreas"],
    correctAnswer: 1
  },
  {
    id: generateQuestionId('science', 15),
    question: "Qual é o processo de formação de nuvens?",
    options: ["Condensação", "Evaporação", "Precipitação", "Sublimação"],
    correctAnswer: 0
  },
  {
    id: generateQuestionId('science', 16),
    question: "Qual é o maior sistema do corpo humano?",
    options: ["Sistema nervoso", "Sistema circulatório", "Sistema digestivo", "Sistema esquelético"],
    correctAnswer: 3
  },
  {
    id: generateQuestionId('science', 17),
    question: "Qual é o processo de formação de montanhas?",
    options: ["Erosão", "Tectônica de placas", "Vulcanismo", "Todas as anteriores"],
    correctAnswer: 3
  },
  {
    id: generateQuestionId('science', 18),
    question: "Qual é o maior órgão do sistema respiratório?",
    options: ["Traqueia", "Brônquios", "Pulmões", "Diafragma"],
    correctAnswer: 2
  },
  {
    id: generateQuestionId('science', 19),
    question: "Qual é o processo de formação de rochas ígneas?",
    options: ["Solidificação do magma", "Compactação de sedimentos", "Transformação de rochas existentes", "Todas as anteriores"],
    correctAnswer: 0
  }
];

export const historyQuestions: Question[] = [
  {
    id: generateQuestionId('history', 0),
    question: "Em que ano o Brasil foi descoberto?",
    options: ["1492", "1500", "1502", "1498"],
    correctAnswer: 1
  },
  {
    id: generateQuestionId('history', 1),
    question: "Quem foi o primeiro imperador do Brasil?",
    options: ["Dom Pedro II", "Dom Pedro I", "Dom João VI", "Dom José I"],
    correctAnswer: 1
  },
  {
    id: generateQuestionId('history', 2),
    question: "Em que ano começou a Segunda Guerra Mundial?",
    options: ["1939", "1941", "1945", "1935"],
    correctAnswer: 0
  },
  {
    id: generateQuestionId('history', 3),
    question: "Quem foi Napoleão Bonaparte?",
    options: ["Um pintor", "Um músico", "Um imperador", "Um escritor"],
    correctAnswer: 2
  },
  {
    id: generateQuestionId('history', 4),
    question: "Em que ano foi a Proclamação da República no Brasil?",
    options: ["1889", "1891", "1888", "1890"],
    correctAnswer: 0
  },
  {
    id: generateQuestionId('history', 5),
    question: "Quem foi Getúlio Vargas?",
    options: ["Um pintor", "Um presidente", "Um músico", "Um escritor"],
    correctAnswer: 1
  },
  {
    id: generateQuestionId('history', 6),
    question: "Em que ano foi a Independência do Brasil?",
    options: ["1820", "1822", "1824", "1826"],
    correctAnswer: 1
  },
  {
    id: generateQuestionId('history', 7),
    question: "Quem foi Tiradentes?",
    options: ["Um pintor", "Um músico", "Um inconfidente", "Um escritor"],
    correctAnswer: 2
  },
  {
    id: generateQuestionId('history', 8),
    question: "Em que ano foi a Abolição da Escravatura no Brasil?",
    options: ["1886", "1888", "1890", "1887"],
    correctAnswer: 1
  },
  {
    id: generateQuestionId('history', 9),
    question: "Quem foi Dom Pedro II?",
    options: ["Um pintor", "Um músico", "Um imperador", "Um escritor"],
    correctAnswer: 2
  },
  {
    id: generateQuestionId('history', 10),
    question: "Em que ano foi a Revolução Francesa?",
    options: ["1789", "1799", "1804", "1815"],
    correctAnswer: 0
  },
  {
    id: generateQuestionId('history', 11),
    question: "Quem foi Juscelino Kubitschek?",
    options: ["Um pintor", "Um presidente", "Um músico", "Um escritor"],
    correctAnswer: 1
  },
  {
    id: generateQuestionId('history', 12),
    question: "Em que ano foi a Primeira Guerra Mundial?",
    options: ["1914-1918", "1918-1922", "1910-1914", "1916-1920"],
    correctAnswer: 0
  },
  {
    id: generateQuestionId('history', 13),
    question: "Quem foi Princesa Isabel?",
    options: ["Uma pintora", "Uma princesa", "Uma cantora", "Uma escritora"],
    correctAnswer: 1
  },
  {
    id: generateQuestionId('history', 14),
    question: "Em que ano foi a Revolução Industrial?",
    options: ["1760", "1789", "1804", "1815"],
    correctAnswer: 0
  },
  {
    id: generateQuestionId('history', 15),
    question: "Quem foi Tancredo Neves?",
    options: ["Um pintor", "Um presidente", "Um músico", "Um escritor"],
    correctAnswer: 1
  },
  {
    id: generateQuestionId('history', 16),
    question: "Em que ano foi a Guerra Fria?",
    options: ["1945-1991", "1950-1990", "1960-1990", "1970-1990"],
    correctAnswer: 0
  },
  {
    id: generateQuestionId('history', 17),
    question: "Quem foi Marechal Deodoro da Fonseca?",
    options: ["Um pintor", "Um presidente", "Um músico", "Um escritor"],
    correctAnswer: 1
  },
  {
    id: generateQuestionId('history', 18),
    question: "Em que ano foi a Revolução Russa?",
    options: ["1917", "1918", "1919", "1920"],
    correctAnswer: 0
  },
  {
    id: generateQuestionId('history', 19),
    question: "Quem foi Dom João VI?",
    options: ["Um pintor", "Um rei", "Um músico", "Um escritor"],
    correctAnswer: 1
  }
];

export const geographyQuestions: Question[] = [
  {
    id: generateQuestionId('geography', 0),
    question: "Qual é a capital do Brasil?",
    options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
    correctAnswer: 2
  },
  {
    id: generateQuestionId('geography', 1),
    question: "Qual é o maior país do mundo?",
    options: ["China", "Estados Unidos", "Rússia", "Canadá"],
    correctAnswer: 2
  },
  {
    id: generateQuestionId('geography', 2),
    question: "Qual é o maior oceano do mundo?",
    options: ["Atlântico", "Índico", "Pacífico", "Ártico"],
    correctAnswer: 2
  },
  {
    id: generateQuestionId('geography', 3),
    question: "Qual é o maior deserto do mundo?",
    options: ["Saara", "Gobi", "Antártico", "Atacama"],
    correctAnswer: 0
  },
  {
    id: generateQuestionId('geography', 4),
    question: "Qual é a maior cordilheira do mundo?",
    options: ["Himalaia", "Andes", "Alpes", "Montanhas Rochosas"],
    correctAnswer: 1
  },
  {
    id: generateQuestionId('geography', 5),
    question: "Qual é o maior rio do mundo?",
    options: ["Nilo", "Amazonas", "Mississippi", "Yangtze"],
    correctAnswer: 1
  },
  {
    id: generateQuestionId('geography', 6),
    question: "Qual é o maior lago do mundo?",
    options: ["Lago Vitória", "Mar Cáspio", "Lago Superior", "Lago Baikal"],
    correctAnswer: 1
  },
  {
    id: generateQuestionId('geography', 7),
    question: "Qual é o maior vulcão ativo do mundo?",
    options: ["Monte Fuji", "Mauna Loa", "Etna", "Vesúvio"],
    correctAnswer: 1
  },
  {
    id: generateQuestionId('geography', 8),
    question: "Qual é o maior canyon do mundo?",
    options: ["Grand Canyon", "Canyon do Colca", "Canyon do Colorado", "Canyon do Fish River"],
    correctAnswer: 0
  },
  {
    id: generateQuestionId('geography', 9),
    question: "Qual é o maior arquipélago do mundo?",
    options: ["Filipinas", "Indonésia", "Japão", "Maldivas"],
    correctAnswer: 1
  },
  {
    id: generateQuestionId('geography', 10),
    question: "Qual é o maior delta do mundo?",
    options: ["Delta do Nilo", "Delta do Ganges", "Delta do Amazonas", "Delta do Mekong"],
    correctAnswer: 1
  },
  {
    id: generateQuestionId('geography', 11),
    question: "Qual é o maior golfo do mundo?",
    options: ["Golfo do México", "Golfo Pérsico", "Golfo de Bengala", "Golfo de Aden"],
    correctAnswer: 2
  },
  {
    id: generateQuestionId('geography', 12),
    question: "Qual é o maior estreito do mundo?",
    options: ["Estreito de Gibraltar", "Estreito de Bering", "Estreito de Malaca", "Estreito de Hormuz"],
    correctAnswer: 1
  },
  {
    id: generateQuestionId('geography', 13),
    question: "Qual é o maior planalto do mundo?",
    options: ["Planalto do Tibete", "Planalto do Brasil", "Planalto do Colorado", "Planalto do Deccan"],
    correctAnswer: 0
  },
  {
    id: generateQuestionId('geography', 14),
    question: "Qual é o maior vale do mundo?",
    options: ["Vale do Rift", "Grand Canyon", "Vale da Morte", "Vale do Silício"],
    correctAnswer: 0
  },
  {
    id: generateQuestionId('geography', 15),
    question: "Qual é o maior fiorde do mundo?",
    options: ["Sognefjord", "Geirangerfjord", "Milford Sound", "Tracy Arm"],
    correctAnswer: 0
  },
  {
    id: generateQuestionId('geography', 16),
    question: "Qual é o maior atol do mundo?",
    options: ["Atol de Bikini", "Atol de Kwajalein", "Atol de Aldabra", "Atol de Kiritimati"],
    correctAnswer: 2
  },
  {
    id: generateQuestionId('geography', 17),
    question: "Qual é o maior pântano do mundo?",
    options: ["Pantanal", "Everglades", "Okavango", "Sundarbans"],
    correctAnswer: 0
  },
  {
    id: generateQuestionId('geography', 18),
    question: "Qual é o maior planalto submarino do mundo?",
    options: ["Plataforma Continental", "Plataforma de Chatham", "Plataforma de Campbell", "Plataforma de Kerguelen"],
    correctAnswer: 0
  },
  {
    id: generateQuestionId('geography', 19),
    question: "Qual é o maior canyon submarino do mundo?",
    options: ["Canyon de Monterey", "Canyon de Nazaré", "Canyon de Hudson", "Canyon de Bering"],
    correctAnswer: 1
  }
];

export const entertainmentQuestions: Question[] = [
  {
    id: generateQuestionId('entertainment', 0),
    question: "Quem interpretou o papel de Jack em Titanic?",
    options: ["Brad Pitt", "Leonardo DiCaprio", "Tom Cruise", "Johnny Depp"],
    correctAnswer: 1
  },
  {
    id: generateQuestionId('entertainment', 1),
    question: "Qual é o filme mais premiado do Oscar?",
    options: ["Titanic", "Ben-Hur", "La La Land", "O Senhor dos Anéis"],
    correctAnswer: 1
  },
  {
    id: generateQuestionId('entertainment', 2),
    question: "Quem é o criador da série Game of Thrones?",
    options: ["J.K. Rowling", "George R.R. Martin", "Stephen King", "J.R.R. Tolkien"],
    correctAnswer: 1
  },
  {
    id: generateQuestionId('entertainment', 3),
    question: "Qual é o jogo mais vendido de todos os tempos?",
    options: ["Minecraft", "Tetris", "GTA V", "Wii Sports"],
    correctAnswer: 0
  },
  {
    id: generateQuestionId('entertainment', 4),
    question: "Quem é o criador da Marvel Comics?",
    options: ["Stan Lee", "Jack Kirby", "Steve Ditko", "Bob Kane"],
    correctAnswer: 0
  },
  {
    id: generateQuestionId('entertainment', 5),
    question: "Qual é a música mais vendida de todos os tempos?",
    options: ["Thriller", "White Christmas", "Candle in the Wind", "We Are the World"],
    correctAnswer: 1
  },
  {
    id: generateQuestionId('entertainment', 6),
    question: "Quem é o criador da série Harry Potter?",
    options: ["J.K. Rowling", "Stephen King", "George R.R. Martin", "J.R.R. Tolkien"],
    correctAnswer: 0
  },
  {
    id: generateQuestionId('entertainment', 7),
    question: "Qual é o filme mais caro já produzido?",
    options: ["Avatar", "Avengers: Endgame", "Pirates of the Caribbean", "Star Wars: The Force Awakens"],
    correctAnswer: 1
  },
  {
    id: generateQuestionId('entertainment', 8),
    question: "Quem é o criador da série The Simpsons?",
    options: ["Matt Groening", "Seth MacFarlane", "Trey Parker", "Matt Stone"],
    correctAnswer: 0
  },
  {
    id: generateQuestionId('entertainment', 9),
    question: "Qual é o álbum mais vendido de todos os tempos?",
    options: ["Thriller", "Back in Black", "The Dark Side of the Moon", "Their Greatest Hits"],
    correctAnswer: 0
  },
  {
    id: generateQuestionId('entertainment', 10),
    question: "Quem é o criador da série Breaking Bad?",
    options: ["Vince Gilligan", "David Chase", "David Simon", "Matthew Weiner"],
    correctAnswer: 0
  },
  {
    id: generateQuestionId('entertainment', 11),
    question: "Qual é o jogo mais jogado do mundo?",
    options: ["Minecraft", "Fortnite", "League of Legends", "PUBG"],
    correctAnswer: 2
  },
  {
    id: generateQuestionId('entertainment', 12),
    question: "Quem é o criador da série The Office?",
    options: ["Ricky Gervais", "Greg Daniels", "Michael Schur", "Steve Carell"],
    correctAnswer: 0
  },
  {
    id: generateQuestionId('entertainment', 13),
    question: "Qual é o filme mais assistido de todos os tempos?",
    options: ["Avatar", "Titanic", "Avengers: Endgame", "Star Wars: The Force Awakens"],
    correctAnswer: 1
  },
  {
    id: generateQuestionId('entertainment', 14),
    question: "Quem é o criador da série Friends?",
    options: ["David Crane", "Marta Kauffman", "Ambos", "Nenhum dos dois"],
    correctAnswer: 2
  },
  {
    id: generateQuestionId('entertainment', 15),
    question: "Qual é o canal mais inscrito do YouTube?",
    options: ["PewDiePie", "T-Series", "Cocomelon", "MrBeast"],
    correctAnswer: 1
  },
  {
    id: generateQuestionId('entertainment', 16),
    question: "Quem é o criador da série Stranger Things?",
    options: ["Matt Duffer", "Ross Duffer", "Ambos", "Nenhum dos dois"],
    correctAnswer: 2
  },
  {
    id: generateQuestionId('entertainment', 17),
    question: "Qual é o filme mais antigo já produzido?",
    options: ["Roundhay Garden Scene", "The Great Train Robbery", "A Trip to the Moon", "The Birth of a Nation"],
    correctAnswer: 0
  },
  {
    id: generateQuestionId('entertainment', 18),
    question: "Quem é o criador da série The Walking Dead?",
    options: ["Robert Kirkman", "Frank Darabont", "Glen Mazzara", "Scott Gimple"],
    correctAnswer: 0
  },
  {
    id: generateQuestionId('entertainment', 19),
    question: "Qual é o jogo mais antigo do mundo?",
    options: ["Senet", "Go", "Mancala", "Royal Game of Ur"],
    correctAnswer: 0
  }
]; 