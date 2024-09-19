'use client'

import { useEffect, useState, useRef } from 'react';

const CarrouselTextoVertical = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalDuration = 5000;
  const carouselContainerRef = useRef(null);

  const restartCarousel = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  useEffect(() => {
    const intervalId = setInterval(restartCarousel, intervalDuration);

    // Reiniciar inmediatamente al cargar el componente
    restartCarousel();

    // Reiniciar inmediatamente después de cada ciclo de animación
    const container = carouselContainerRef.current;
    if (container) {
      container.addEventListener('animationiteration', restartCarousel);
    }

    return () => {
      clearInterval(intervalId);

      // Verificar si container existe antes de intentar quitar el event listener
      if (container) {
        container.removeEventListener('animationiteration', restartCarousel);
      }
    };
  }, [items]);

  const translateValue = -currentIndex * 100 + '%';

  return (
    <div className="relative h-40 flex justify-center overflow-hidden mb-10">
      {/* Fondo estático */}
      <div className="absolute inset-0 bg-static-fondo"></div>

      {/* Carrusel */}
      <div
        ref={carouselContainerRef}
        className="flex flex-col h-full"
        style={{
          animation: `carousel-animation ${intervalDuration / 1000}s linear infinite`,
          transform: `translateY(${translateValue})`
        }}
      >
        {items.map((item, index) => (
          <div key={index} className="h-40 bg-transparent p-4" style={item.style}>
            <div dangerouslySetInnerHTML={{ __html: item.html }} />
          </div>
        ))}
      </div>

      {/* Estilos */}
      <style jsx>{`
        @keyframes carousel-animation {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default CarrouselTextoVertical;