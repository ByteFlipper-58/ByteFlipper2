import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';

const Home = () => {
  const { t, i18n } = useTranslation();
  const featuredProjects = projectsData[i18n.language] || projectsData['en'];
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const heroContentRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const maxMovement = 15; // Максимальное смещение в пикселях

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('featured-projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Эффект следования за мышью
  useEffect(() => {
    const handleMouseMove = (event: { clientX: any; clientY: any; }) => {
      const { clientX, clientY } = event;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      // Вычисляем смещение от центра в процентах (от -1 до 1)
      const moveX = (clientX - windowWidth / 2) / (windowWidth / 2);
      const moveY = (clientY - windowHeight / 2) / (windowHeight / 2);
      
      setMousePosition({ x: moveX, y: moveY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Матричный фон
  useEffect(() => {
    const canvas = canvasRef.current;
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return; // Проверка, чтобы избежать ошибки

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
    
    // Персонажи для отображения (символы в стиле Matrix)
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&*()=+-/\\[]{}><;:~'.split('');
    
    // Количество колонок (зависит от ширины экрана)
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    
    // Массив для отслеживания позиции Y каждой колонки
    const drops = Array.from({ length: columns }, () => 
      Math.floor(Math.random() * canvas.height / fontSize) * -1
    );
    
    // Градиентные цвета
    const startColor = { r: 239, g: 17, b: 111 }; // #ef116f
    const endColor = { r: 254, g: 100, b: 7 };    // #fe6407
    
    // Функция для получения цвета градиента
    const getGradientColor = (position: number) => {
      // position - значение от 0 до 1, где 0 - это левый край, 1 - правый край
      const r = Math.floor(startColor.r + (endColor.r - startColor.r) * position);
      const g = Math.floor(startColor.g + (endColor.g - startColor.g) * position);
      const b = Math.floor(startColor.b + (endColor.b - startColor.b) * position);
      
      return `rgb(${r}, ${g}, ${b})`;
    };
    
    // Функция анимации
    const draw = () => {
      // Полупрозрачный черный фон для создания эффекта затухания
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      for(let i = 0; i < columns; i++) {
        // Получаем символ
        const char = chars[Math.floor(Math.random() * chars.length)];
        
        // Получаем цвет в зависимости от позиции (градиент слева направо)
        const position = i / columns;
        ctx.fillStyle = getGradientColor(position);
        
        // Рисуем символ
        ctx.font = `${fontSize}px monospace`;
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        
        // Когда строка достигает низа экрана, возвращаем ее наверх с вероятностью
        if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        // Двигаем каплю вниз
        drops[i]++;
      }
      
      // Продолжаем анимацию
      animationFrameId = window.requestAnimationFrame(draw);
    };
    
    let animationFrameId: number;
    draw();
    
    // Обработка изменения размера окна
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const newColumns = Math.floor(canvas.width / fontSize);
      
      // Обновляем количество колонок
      if (newColumns > columns) {
        for(let i = columns; i < newColumns; i++) {
          drops[i] = Math.floor(Math.random() * canvas.height / fontSize) * -1;
        }
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    // Очистка
    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section with Matrix */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Matrix Canvas Background */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 z-0"
        />
        
        {/* Hero Content - Убрали фон и тень контейнера */}
        <motion.div
          ref={heroContentRef}
          style={{
            transform: `translate(${mousePosition.x * maxMovement}px, ${mousePosition.y * maxMovement}px)`,
            transition: 'transform 0.2s ease-out'
          }}
          className="relative z-10 text-center px-4 py-8 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
              {t('home.hero.title')}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-light-300 max-w-2xl mx-auto leading-relaxed">
            {t('home.hero.subtitle')}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              onClick={scrollToProjects}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-start to-primary-end text-light-100 px-8 py-4 rounded-full font-medium flex items-center group"
            >
              {t('home.hero.cta')}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-100/50 to-dark-200/50" />
          
          <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 opacity-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-primary-end/20 via-transparent to-transparent" />
            </motion.div>
        </div>
            
            <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto relative">
              
              <motion.div
              variants={itemVariants}
              className="text-center mb-16">
                
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
                  {t('home.about.title')}  
                </h2>
                
                <p className="text-xl text-light-300 leading-relaxed">
                  {/* Разделение по строкам с использованием \n */}
                  {t('home.about.description').split('\n').map((item, index) => (
                  <span key={index}>
                    {item}
                    <br/>
                    </span>
                  ))}
                  </p>
                  </motion.div>
                  </motion.div>
      </section>

      {/* Projects Preview Section */}
      <section id="featured-projects" className="py-32 px-4 bg-dark-200 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-200 to-dark-100" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-start/5 via-transparent to-transparent opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
              {t('home.projects.title')}
            </h2>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                custom={index}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary-start to-primary-end text-light-100 px-8 py-4 rounded-full font-medium inline-flex items-center group"
              >
                {t('home.projects.viewAll')}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;