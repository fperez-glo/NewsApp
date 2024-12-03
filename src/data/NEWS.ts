import { TOPICS } from './TOPICS';

export const NEWS_DATA = [
  {
    id: '1',
    title: 'Muere un policía del Capitolio herido durante el asalto al Congreso de Estados Unidos',
    excerpt:
      'El agente Brian Sicknick falleció tras enfrentarse a los manifestantes pro-Trump que irrumpieron en el edificio',
    content: `Un agente de la Policía del Capitolio de Estados Unidos, Brian Sicknick, ha fallecido a causa de las heridas sufridas durante el enfrentamiento con los manifestantes pro-Trump que asaltaron el miércoles el edificio del Congreso, según ha informado la propia institución policial.
  
      Sicknick "estaba respondiendo a los disturbios el miércoles 6 de enero en el Capitolio de los Estados Unidos y fue herido mientras se enfrentaba físicamente con los manifestantes", señala el comunicado de la Policía.
  
      El agente regresó a su oficina de división y se desplomó. Fue llevado a un hospital local donde sucumbió a sus heridas. Su muerte será investigada por la División de Homicidios de la Policía Metropolitana.`,
    imageUrl:
      'https://www.infobae.com/resizer/v2/W4DQNJAS4RGR5JVKLSBZUNRSGU.jpg?auth=9c8ec5de9ec0c5af7101a57f54a174f46bb72afb5354bb2baefcad278c9e706a&smart=true&width=350&height=233&quality=85',
    time: '3 h',
    category: 'Internacional',
    author: 'María García',
    tags: TOPICS.filter((topic) => ['Estados Unidos', 'Política', 'Sucesos'].includes(topic.title)),
  },
  {
    id: '2',
    title: 'El virus no da tregua a Alemania y bate récord de fallecidos: 1.200 en 24 horas',
    excerpt: 'El país registra la cifra más alta de muertes por coronavirus desde el inicio de la pandemia',
    content: `Alemania ha registrado un nuevo récord de fallecidos por coronavirus en las últimas 24 horas, con 1.188 muertos, según los datos del Instituto Robert Koch (RKI) de virología actualizados la pasada medianoche.
  
      El máximo anterior se había registrado el pasado 30 de diciembre, con 1.129 fallecidos en un día. El número de positivos confirmados en las últimas 24 horas se situó en 31.849, frente a los 32.552 registrados hace una semana.`,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyLOju4C0HWaJtuySh1CozrufDw4CLaN5LCQ&s',
    time: '5 h',
    category: 'Internacional',
    author: 'Carlos Martínez',
    tags: TOPICS.filter((topic) => ['Alemania', 'Coronavirus', 'Europa'].includes(topic.title)),
  },
  {
    id: '3',
    title: 'EE. UU. registra por primera vez más de 4.000 muertos por coronavirus en un día',
    excerpt: 'El país alcanza un nuevo récord de fallecimientos diarios mientras continúa el proceso de vacunación',
    content: `Estados Unidos registró este jueves más de 4.000 muertos por covid-19 en 24 horas, un nuevo récord, mientras el país continúa con el proceso de vacunación contra el coronavirus.
  
      Según los datos de la Universidad Johns Hopkins, el país contabilizó 4.085 fallecimientos y 274.703 nuevos casos en la última jornada. En total, Estados Unidos suma 365.359 muertes por covid-19 y más de 21,5 millones de contagios desde el inicio de la pandemia.`,
    imageUrl:
      'https://media.cnn.com/api/v1/images/stellar/prod/cnne-943063-topshot-us-health-virus.jpg?q=w_2000,c_fill',
    time: '6 h',
    category: 'Internacional',
    author: 'Ana López',
    tags: TOPICS.filter((topic) => ['Estados Unidos', 'Coronavirus', 'Salud'].includes(topic.title)),
  },
  {
    id: '4',
    title: 'La nueva revolución tecnológica: La inteligencia artificial en 2024',
    excerpt: 'Las empresas tecnológicas apuestan fuerte por el desarrollo de la IA',
    content: `El campo de la inteligencia artificial está experimentando un crecimiento sin precedentes en 2024, con nuevas aplicaciones y desarrollos que prometen transformar múltiples sectores de la sociedad.
  
      Las principales empresas tecnológicas están invirtiendo miles de millones en el desarrollo de nuevos modelos de IA más avanzados y eficientes. Estos avances están teniendo un impacto significativo en campos como la medicina, la educación y el transporte.`,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBLOc9YuCr1Ie1ELWO53rLlbEBArTetnmY3g&s',
    time: '2 h',
    category: 'Tecnología',
    author: 'David Sánchez',
    tags: TOPICS.filter((topic) => ['Tecnología', 'IA', 'Innovación'].includes(topic.title)),
  },
  {
    id: '5',
    title: 'España lidera la transformación digital en Europa',
    excerpt: 'El país se posiciona a la vanguardia en la adopción de nuevas tecnologías',
    content: `España se ha convertido en uno de los países líderes en la transformación digital dentro de la Unión Europea, según un reciente informe de la Comisión Europea.
  
      El estudio destaca el alto nivel de digitalización en la administración pública y el creciente número de empresas que adoptan tecnologías avanzadas como la inteligencia artificial y el blockchain.`,
    imageUrl: 'https://img.redestelecom.es/wp-content/uploads/2024/07/02132828/Digitalizacion-Espana.jpg',
    time: '4 h',
    category: 'España',
    author: 'Laura Martínez',
    tags: TOPICS.filter((topic) => ['España', 'Tecnología', 'Economía'].includes(topic.title)),
  },
  {
    id: '6',
    title: 'Rusia intensifica ataques aéreos en Ucrania mientras las conversaciones de paz fracasan',
    excerpt: 'El conflicto entre Rusia y Ucrania sigue escalando con ataques aéreos en varias ciudades ucranianas.',
    content:
      'Rusia ha intensificado sus ataques aéreos en Ucrania en los últimos días, centrando sus esfuerzos en las ciudades de Járkov y Mariúpol, mientras las conversaciones de paz continúan estancadas. Las autoridades ucranianas reportan un número creciente de víctimas civiles y daños a infraestructuras clave.',
    imageUrl: 'https://media.cnn.com/api/v1/images/stellar/prod/cnne-1350561-2022-09-kharkiv-3.jpg?c=original',
    time: '7 h',
    category: 'Internacional',
    author: 'Pedro Sánchez',
    tags: TOPICS.filter((topic) => ['Rusia', 'Ucrania', 'Conflictos'].includes(topic.title)),
  },
  {
    id: '7',
    title: "China acelera la construcción de la 'Nueva Ruta de la Seda' en África",
    excerpt:
      'El gigante asiático invierte miles de millones en infraestructura para consolidar su presencia en el continente africano.',
    content:
      "China ha acelerado sus inversiones en infraestructura en África, bajo su iniciativa de la 'Nueva Ruta de la Seda'. Los proyectos incluyen la construcción de ferrocarriles, puertos y aeropuertos en varios países africanos, con el objetivo de reforzar su influencia económica y política en la región.",
    imageUrl: 'https://archivo.prensa-latina.cu/wp-content/uploads/2023/06/propuesta-Africa-China.jpg',
    time: '8 h',
    category: 'Internacional',
    author: 'Isabel González',
    tags: TOPICS.filter((topic) => ['China', 'África', 'Economía'].includes(topic.title)),
  },
  {
    id: '8',
    title: 'México anuncia nuevas políticas ambientales para combatir la deforestación',
    excerpt: 'El gobierno mexicano lanza un plan para reducir la tala ilegal y proteger los ecosistemas del país.',
    content:
      'El presidente de México ha anunciado nuevas políticas para combatir la deforestación y la tala ilegal en el país. El plan incluye el fortalecimiento de las leyes ambientales, mayores sanciones para quienes infringen las regulaciones y la promoción de proyectos de reforestación en áreas críticas.',
    imageUrl:
      'https://fandelagua.com/wp-content/uploads/2019/09/19-Causas-de-la-deforestacion-en-Mexico-como-combatirlo.jpg',
    time: '10 h',
    category: 'México',
    author: 'Carlos Hernández',
    tags: TOPICS.filter((topic) => ['México', 'Medio Ambiente', 'Política'].includes(topic.title)),
  },
  {
    id: '9',
    title: 'La inflación en la Eurozona alcanza niveles récord',
    excerpt: 'Los precios siguen subiendo y los analistas temen que la situación empeore en los próximos meses.',
    content:
      'La inflación en la Eurozona ha alcanzado niveles récord en noviembre, impulsada por el aumento de los precios de la energía, alimentos y productos básicos. La situación está afectando el poder adquisitivo de los consumidores, y los economistas predicen que las tasas de inflación seguirán siendo altas en los próximos meses.',
    imageUrl:
      'https://static.euronews.com/articles/stories/07/16/49/90/1200x675_cmsv2_38f5f7ca-7b4d-509a-bfd7-806fe6eddcfb-7164990.jpg',
    time: '6 h',
    category: 'Economía',
    author: 'Julia Pérez',
    tags: TOPICS.filter((topic) => ['Economía', 'Eurozona', 'Inflación'].includes(topic.title)),
  },
  {
    id: '10',
    title: 'La NASA lanza misión para estudiar la atmósfera de Venus',
    excerpt: 'La nueva misión tiene como objetivo entender mejor el clima y la geología del planeta vecino.',
    content:
      'La NASA ha lanzado una misión espacial para estudiar la atmósfera de Venus, con el objetivo de comprender mejor su clima y geología. La misión, llamada VERITAS, proporcionará datos clave sobre la evolución geológica de Venus y su capacidad para albergar vida en el pasado.',
    imageUrl: 'https://science.nasa.gov/wp-content/uploads/2024/11/hotneptune-1280c.jpeg',
    time: '9 h',
    category: 'Ciencia',
    author: 'Eduardo Martín',
    tags: TOPICS.filter((topic) => ['NASA', 'Venus', 'Ciencia'].includes(topic.title)),
  },
];
