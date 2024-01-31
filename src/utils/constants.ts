export interface cards_props {
  id: number;
  image: string;
  title: string;
  categories: string[];
  description: string;
  link: string;
  keywords?: string[];
}

export const cards: cards_props[] = [
  {
    id: 1,
    image: '/assets/images/categories/colors/Color Hunt.webp',
    title: 'Color Hunt',
    categories: ['colores', 'populares'],
    description:
      'Colección de paleta de colores para diseñadores y artistas, cuenta con filtros por popularidad, color, recientes, etc.',
    link: 'https://colorhunt.co/',
    keywords: ['color', 'css'],
  },
  {
    id: 2,
    image: '/assets/images/categories/colors/UI Colors.webp',
    title: 'UI Colors',
    categories: ['colores'],
    description:
      'Generador de paleta de colores para TailwindCSS, cuenta con ejemplos de uso en imágenes, banners, botones, etc.',
    link: 'https://uicolors.app/create',
    keywords: ['color', 'css'],
  },
  {
    id: 3,
    image: '/assets/images/categories/colors/Tints.webp',
    title: 'Tints',
    categories: ['colores'],
    description:
      'Generador de paleta de colores y API para TailwindCSS, donde puedes personalizar el matiz, saturación, luminosidad, etc.',
    link: 'https://www.tints.dev/',
    keywords: ['color', 'css'],
  },
  {
    id: 4,
    image: '/assets/images/categories/colors/Happy Hues.webp',
    title: 'Happy Hues',
    categories: ['colores'],
    description:
      'Colección de paleta de colores, como curiosidad te explica la psicología de cada color para determinar su uso.',
    link: 'https://www.happyhues.co/',
    keywords: ['color', 'css'],
  },
  {
    id: 5,
    image: '/assets/images/categories/colors/Siege Media.webp',
    title: 'Siege Media',
    categories: ['colores'],
    description:
      'Herramienta para calcular fácilmente el radio de contraste entre un color de fondo y un color de texto.',
    link: 'https://www.siegemedia.com/contrast-ratio',
    keywords: ['color', 'contraste', 'css'],
  },
  {
    id: 6,
    image: '/assets/images/categories/colors/Color Review.webp',
    title: 'Happy Hues',
    categories: ['colores'],
    description:
      'Explora y encuentra colores accesibles comparando el contraste entre un color de fondo y un color de texto.',
    link: 'https://color.review/',
    keywords: ['color', 'contraste', 'css'],
  },
  {
    id: 7,
    image: '/assets/images/categories/components/Keep.webp',
    title: 'Keep',
    categories: ['componentes'],
    description:
      'Explora más de 40 componentes de React y elementos interactivos, diseñados con TailwindCSS.',
    link: 'https://react.keepdesign.io/',
    keywords: ['react', 'componente', 'tailwind'],
  },
  {
    id: 8,
    image: '/assets/images/categories/components/Next UI.webp',
    title: 'Next UI',
    categories: ['componentes', 'populares'],
    description:
      'Grupo de componentes modernos de React construidos con TailwindCSS, cuenta con reconocimiento automático de modo claro/oscuro.',
    link: 'https://nextui.org/',
    keywords: ['react', 'componente', 'tailwind', 'javascript'],
  },
  {
    id: 9,
    image: '/assets/images/categories/components/Tremor.webp',
    title: 'Tremor',
    categories: ['componentes'],
    description:
      'Colección de componentes modernos de React construidos con TailwindCSS, enfocados en gráficos y estadísticas.',
    link: 'https://www.tremor.so/components',
    keywords: ['react', 'componente', 'tailwind'],
  },
  {
    id: 10,
    image: '/assets/images/categories/components/Flowbite.webp',
    title: 'Flowbite',
    categories: ['componentes'],
    description:
      'Extensa confección de más de 63 componentes hechos con TailwindCSS para React, Angular, Vue, etc.',
    link: 'https://flowbite.com/#components',
    keywords: ['react', 'componente', 'tailwind', 'angular', 'vue'],
  },
  {
    id: 11,
    image: '/assets/images/categories/components/Wicked Blocks.webp',
    title: 'Wicked Blocks',
    categories: ['componentes'],
    description:
      'Una colección de más de 120 componentes y bloques HTML para TailwindCSS totalmente responsivos.',
    link: 'https://wickedblocks.dev/',
    keywords: ['HTML', 'componente', 'tailwind', 'javascript'],
  },
  {
    id: 12,
    image: '/assets/images/categories/components/Headless UI.webp',
    title: 'Headless UI',
    categories: ['componentes'],
    description:
      'Componentes de interfaz de usuario completamente accesibles para React y Vue, diseñados para integrarse con Tailwind CSS.',
    link: 'https://headlessui.com/',
    keywords: ['react', 'componente', 'tailwind', 'vue', 'javascript'],
  },
  {
    id: 13,
    image: '/assets/images/categories/deploys/Vercel.webp',
    title: 'Vercel',
    categories: ['deploy', 'populares'],
    description:
      'Sube tus proyectos front-end y back-end, los proyectos se actualizan automáticamente al actualizar el repositorio Github enlazado.',
    link: 'https://vercel.com/',
    keywords: ['deploy', 'frontend', 'backend', 'javascript'],
  },
  {
    id: 14,
    image: '/assets/images/categories/deploys/Render.webp',
    title: 'Render',
    categories: ['deploy'],
    description:
      'Sube tus proyectos front-end y back-end, además puedes crear una base de datos gratuita por cuenta.',
    link: 'https://render.com/',
    keywords: ['deploy', 'frontend', 'backend'],
  },
  {
    id: 15,
    image: '/assets/images/categories/deploys/Netlify.webp',
    title: 'Netlify',
    categories: ['deploy'],
    description:
      'Sube tus proyectos front-end, solo arrastra la carpeta raíz de tu proyecto para hacer deploy de forma sencilla.',
    link: 'https://app.netlify.com/drop',
    keywords: ['deploy', 'frontend'],
  },
  {
    id: 16,
    image: '/assets/images/categories/deploys/Fl0.webp',
    title: 'Fl0',
    categories: ['deploy'],
    description:
      'Sube tus proyectos back-end, además puedes crear una base de datos gratuita por cuenta.',
    link: 'https://www.fl0.com/',
    keywords: ['deploy', 'backend'],
  },
  {
    id: 17,
    image: '/assets/images/categories/forms/Formik.webp',
    title: 'Formik',
    categories: ['formularios'],
    description:
      'Construye formularios basados en React eficaces, declarativos, intuitivos y adaptables.',
    link: 'https://formik.org/',
    keywords: ['formulario', 'react', 'javascript'],
  },
  {
    id: 18,
    image: '/assets/images/categories/forms/React Hook Form.webp',
    title: 'React Hook Form',
    categories: ['formularios', 'populares'],
    description:
      'Formularios basados en React eficaces, flexibles y extensibles con validación fácil de usar.',
    link: 'https://react-hook-form.com/',
    keywords: ['formulario', 'react', 'javascript'],
  },
  {
    id: 19,
    image: '/assets/images/categories/forms/Tally.webp',
    title: 'Tally',
    categories: ['formularios'],
    description:
      'Formularios adatables a cualquier entorno, flexibles y extensibles con validación.',
    link: 'https://tally.so/',
    keywords: ['formulario'],
  },
  {
    id: 20,
    image: '/assets/images/categories/fonts/Fontsource.webp',
    title: 'Fontsource',
    categories: ['fuentes', 'populares'],
    description:
      'Colección de más de 1600 fuentes, las cuales pueden ser descargadas o instaladas en tu editor de código favorito.',
    link: 'https://fontsource.org/',
    keywords: ['fuente', 'html', 'css'],
  },
  {
    id: 21,
    image: '/assets/images/categories/fonts/Fontshare.webp',
    title: 'Fontshare',
    categories: ['fuentes'],
    description:
      'Colección de fuentes subidas por la comunidad, incluye una sección para emparejar fuentes.',
    link: 'https://www.fontshare.com/',
    keywords: ['fuente', 'html', 'css'],
  },
  {
    id: 22,
    image: '/assets/images/categories/fonts/Google Fonts.webp',
    title: 'Google Fonts',
    categories: ['fuentes'],
    description:
      'Colección de más de 1500 fuentes, las cuales pueden ser descargadas o instaladas en tu editor de código favorito.',
    link: 'https://fonts.google.com/',
    keywords: ['fuente', 'html', 'css'],
  },
  {
    id: 23,
    image: '/assets/images/categories/fonts/Fontpair.webp',
    title: 'Fontpair',
    categories: ['fuentes'],
    description:
      'Fuentes y combinaciones de fuentes gratuitas para usar en su próximo proyecto de diseño.',
    link: 'https://www.fontpair.co/',
    keywords: ['fuente', 'html', 'css'],
  },
  {
    id: 24,
    image: '/assets/images/categories/icons/Tabler Icons.webp',
    title: 'Tabler Icons',
    categories: ['iconos'],
    description:
      'Más de 4900 iconos en píxeles para diseño web, gratuitos y de código abierto diseñados para hacer que su sitio web o aplicación sea atractivo',
    link: 'https://tabler.io/icons',
    keywords: ['iconos', 'html', 'css'],
  },
  {
    id: 25,
    image: '/assets/images/categories/icons/Font Awesome.webp',
    title: 'Font Awesome',
    categories: ['iconos', 'populares'],
    description:
      'Biblioteca de más de 30,000 iconos y conjunto de herramientas de Internet diseño web, gratuitos y de código abierto.',
    link: 'https://fontawesome.com/search',
    keywords: ['iconos', 'html', 'css'],
  },
  {
    id: 26,
    image: '/assets/images/categories/icons/React Icons.webp',
    title: 'React Icons',
    categories: ['iconos'],
    description:
      'Incluya íconos populares en sus proyectos de React fácilmente, utiliza importaciones de ES6.',
    link: 'https://react-icons.github.io/react-icons/',
    keywords: ['iconos', 'react', 'html', 'css'],
  },
  {
    id: 27,
    image: '/assets/images/categories/icons/Box Icons.webp',
    title: 'Box Icons',
    categories: ['iconos'],
    description:
      'Íconos web de alta calidad de código abierto cuidadosamente elaborados para diseñadores y desarrolladores.',
    link: 'https://boxicons.com/',
    keywords: ['iconos', 'html', 'css'],
  },
  {
    id: 28,
    image: '/assets/images/categories/streamers/Midudev.webp',
    title: 'Midudev',
    categories: ['streamers', 'populares'],
    description:
      'Streamings sobre Desarrollo FullStack con JavaScript. Directos completos y extracto de los mejores momentos.',
    link: 'https://www.youtube.com/@midulive',
    keywords: ['streamers', 'javascript', 'typescript'],
  },
  {
    id: 29,
    image: '/assets/images/categories/streamers/Goncy.webp',
    title: 'Goncy',
    categories: ['streamers'],
    description:
      'Soluciones de desarrollo FullStack, videos y directos sobre simulacros de entrevistas, integraciones, etc.',
    link: 'https://www.youtube.com/@goncypozzo',
    keywords: ['streamers', 'javascript', 'typescript'],
  },
  {
    id: 30,
    image: '/assets/images/categories/streamers/MoureDev.webp',
    title: 'MoureDev',
    categories: ['streamers'],
    description:
      'Tutoriales de programación y desarrollo de software. Aprende a crear aplicaciones Web, Android e iOS con Python, Kotlin, Swift y mucho más...        ',
    link: 'https://www.youtube.com/@mouredev',
    keywords: ['streamers', 'mobile', 'python'],
  },
  {
    id: 31,
    image: '/assets/images/categories/streamers/Hola Mundo.webp',
    title: 'Hola Mundo',
    categories: ['streamers'],
    description:
      'Soluciones de programación y desarrollo de software, enfocado en JavaScript. Aprende a crear aplicaciones Web.',
    link: 'https://www.youtube.com/@HolaMundoDev',
    keywords: ['streamers', 'javascript'],
  },
  {
    id: 32,
    image: '/assets/images/categories/streamers/Programador X.webp',
    title: 'Programador X',
    categories: ['streamers'],
    description:
      'Consejos y tips para desarrolladores web, videos sobre pruebas técnicas, tutoriales, ruta de aprendizaje, etc.',
    link: 'https://www.youtube.com/@ProgramadorX',
    keywords: ['streamers', 'tutorial'],
  },
  {
    id: 33,
    image: '/assets/images/categories/streamers/Fazt.webp',
    title: 'Fazt',
    categories: ['streamers'],
    description:
      'Programación, desarrollo Web y muchos otros temas relacionados al mundo de la informática en general. Desde aprender las bases de un lenguaje de programacion hasta subir tu sitio o aplicación Web.',
    link: 'https://www.youtube.com/@FaztTech',
    keywords: ['streamers', 'tutorial'],
  },
  {
    id: 34,
    image: '/assets/images/categories/streamers/freeCodeCamp.webp',
    title: 'freeCodeCamp',
    categories: ['streamers'],
    description:
      'Aprende a programar gratis. Construye Proyectos. Obtén Certificaciones. freeCodeCamp es una organización sin fines de lucro cuya misión es crear recursos gratis para ayudarte a aprender a programar.',
    link: 'https://www.youtube.com/@freecodecampespanol',
    keywords: ['streamers', 'freeCodeCamp'],
  },
  {
    id: 35,
    image: '/assets/images/categories/streamers/Vida MRR.webp',
    title: 'Vida MRR',
    categories: ['streamers'],
    description:
      'Canal de diseño y desarrollo web, donde puedes encontrar contenido de Javascript, Bootstrap, TailwindCSS, Node.js, PHP y MySQL y más recursos necesarios para ser el mejor desarrollador web.',
    link: 'https://www.youtube.com/@vidamrr',
    keywords: ['streamers', 'javascript', 'tailwind', 'php'],
  },
  {
    id: 36,
    image: '/assets/images/categories/templates/HTML rev.webp',
    title: 'HTML rev',
    categories: ['plantillas'],
    description:
      'Plantillas HTML, Bootstrap y Tailwind gratuitas para sitios web, páginas de destino, próximamente, blogs, portafolios, comercio electrónico y paneles de control.',
    link: 'https://htmlrev.com/?utm_source=public_apis',
    keywords: ['plantillas', 'html', 'css'],
  },
  {
    id: 37,
    image: '/assets/images/categories/templates/Frontendor.webp',
    title: 'Frontendor',
    categories: ['plantillas', 'populares'],
    description:
      'Plantillas y bloques HTML reutilizables para ayudarle a crear páginas de destino hermosas y profesionales de forma rápida y sencilla.',
    link: 'https://frontendor.com/',
    keywords: ['plantillas', 'html', 'css'],
  },
  {
    id: 38,
    image: '/assets/images/categories/templates/Theme Selection.webp',
    title: 'Theme Selection',
    categories: ['plantillas'],
    description:
      'La plantilla de panel de administración gratuita, los temas HTML y los kits U seleccionados, de alta calidad, diseño moderno, profesionales y fáciles de usar crean su aplicación más rápido.',
    link: 'https://themeselection.com/',
    keywords: ['plantillas', 'html', 'css'],
  },
  {
    id: 39,
    image: '/assets/images/categories/templates/Canva.webp',
    title: 'Canva',
    categories: ['plantillas'],
    description:
      'Plataforma de diseño gráfico, utilizada para crear gráficos, presentaciones, carteles, documentos y otro contenido visual para redes sociales.',
    link: 'https://www.canva.com/',
    keywords: ['plantillas', 'html', 'css'],
  },
];
