export const PROJECTS = [
  {
    id: 'pro-2',
    title: 'MarvelMusicMatch',
    description: 'Aplicación web que permite buscar un superhéroe de Marvel y generar automáticamente una playlist de Spotify basada en su personalidad, habilidades y características. Integra múltiples APIs y lógica de recomendación.',
    category: 'Full Stack Project',
    techIds: ['react', 'vite', 'typescript', 'node', 'express', 'mongodb', 'javascript'],
    features: [
      'Integración con API de Marvel',
      'Integración con API de Spotify',
      'Generación dinámica de playlists',
      'UI interactiva con búsqueda en tiempo real'
    ],
    link: 'https://marvelmusicmatch.app',
    repo: 'https://github.com/ricardoerazo/marvel-music-match'
  },
  {
    id: 'pro-3',
    title: 'Relationship Timeline App',
    description: 'Aplicación móvil desarrollada con React Native que muestra una línea de tiempo de una relación, combinando fotos personales con canciones de una playlist de Spotify.',
    category: 'Mobile App',
    techIds: ['react', 'typescript', 'tailwind'],
    features: [
      'Visualización tipo timeline',
      'Integración con Spotify',
      'Galería de imágenes',
      'Experiencia emocional personalizada'
    ],
    link: 'https://relationship-app-demo.com',
    repo: 'https://github.com/ricardoerazo/relationship-timeline'
  },
  {
    id: 'pro-4',
    title: 'Spotify Photo Sync',
    description: 'Aplicación web que conecta Google Photos con Spotify para mostrar imágenes relacionadas con canciones en reproducción, creando una experiencia visual-musical.',
    category: 'Experimental Project',
    techIds: ['react', 'node', 'express', 'mongodb', 'javascript', 'html', 'css'],
    features: [
      'Integración con Google Photos API',
      'Sincronización con Spotify',
      'Matching de imágenes y música',
      'Visualización en tiempo real'
    ],
    link: 'https://spotify-photo-sync.app',
    repo: 'https://github.com/ricardoerazo/spotify-photo-sync'
  }
];