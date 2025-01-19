import { Project } from '../types/project';

export const projectsData: Record<string, Project[]> = {
  en: [
    {
      id: 'task-manager',
      title: 'Task Manager Pro',
      description: 'A beautiful and intuitive task management application with real-time updates and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=1000',
      category: 'Web App',
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
      links: {
        github: 'https://github.com/byteflipper/task-manager',
        live: 'https://task-manager-pro.demo'
      }
    },
    {
      id: 'crypto-tracker',
      title: 'Crypto Price Tracker',
      description: 'Real-time cryptocurrency price tracking with interactive charts and portfolio management.',
      image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=1000',
      category: 'Finance',
      technologies: ['Vue.js', 'Chart.js', 'Firebase'],
      links: {
        github: 'https://github.com/byteflipper/crypto-tracker'
      }
    },
    {
      id: 'ai-image-generator',
      title: 'AI Image Generator',
      description: 'Generate unique images using artificial intelligence and machine learning algorithms.',
      image: 'https://images.unsplash.com/photo-1675271591211-126ad94e495d?auto=format&fit=crop&q=80&w=1000',
      category: 'AI/ML',
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI'],
      links: {
        github: 'https://github.com/byteflipper/ai-image-gen',
        live: 'https://ai-image-gen.demo'
      }
    }
  ],
  ru: [
    {
      id: 'task-manager',
      title: 'Менеджер Задач Pro',
      description: 'Красивое и интуитивно понятное приложение для управления задачами с обновлениями в реальном времени и функциями командного сотрудничества.',
      image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=1000',
      category: 'Web App',
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
      links: {
        github: 'https://github.com/byteflipper/task-manager',
        live: 'https://task-manager-pro.demo'
      }
    },
    {
      id: 'crypto-tracker',
      title: 'Отслеживание Криптовалют',
      description: 'Отслеживание цен криптовалют в реальном времени с интерактивными графиками и управлением портфелем.',
      image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=1000',
      category: 'Finance',
      technologies: ['Vue.js', 'Chart.js', 'Firebase'],
      links: {
        github: 'https://github.com/byteflipper/crypto-tracker'
      }
    },
    {
      id: 'ai-image-generator',
      title: 'ИИ Генератор Изображений',
      description: 'Создание уникальных изображений с использованием искусственного интеллекта и алгоритмов машинного обучения.',
      image: 'https://images.unsplash.com/photo-1675271591211-126ad94e495d?auto=format&fit=crop&q=80&w=1000',
      category: 'AI/ML',
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI'],
      links: {
        github: 'https://github.com/byteflipper/ai-image-gen',
        live: 'https://ai-image-gen.demo'
      }
    }
  ]
};