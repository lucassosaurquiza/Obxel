import React, { useEffect, useRef } from 'react';

function VideoPlayer() {
  // Crea referencias separadas para cada video
  const videoRefs = Array.from({ length: 6 }, () => useRef());

  useEffect(() => {
    // Define una función para manejar el evento 'ended' y cambiar al siguiente video
    const handleEnded = (currentIndex) => {
      const nextIndex = (currentIndex + 1) % videoRefs.length;
      const currentVideo = videoRefs[currentIndex].current;
      const nextVideo = videoRefs[nextIndex].current;

      if (currentVideo && nextVideo) {
        currentVideo.currentTime = 0; // Reinicia el tiempo de reproducción
        nextVideo.play(); // Reproduce el siguiente video
      }
    };

    // Agrega el evento 'ended' a cada elemento de video
    videoRefs.forEach((videoRef, index) => {
      const video = videoRef.current;

      if (video) {
        video.addEventListener('ended', () => handleEnded(index));
        video.play(); // Inicia la reproducción de cada video
      }
    });

    // Limpia los eventos al desmontar el componente
    return () => {
      videoRefs.forEach((videoRef) => {
        const video = videoRef.current;
        if (video) {
          video.removeEventListener('ended', () => handleEnded(index));
        }
      });
    };
  }, [videoRefs]);

  // Divide videoRefs en dos arreglos para renderizar en dos columnas
  const videosLeft = videoRefs.slice(0, 3);
  const videosRight = videoRefs.slice(3, 6);

  return (
    <div className=" w-full flex justify-center gap-10 border">
      <div className="">
        {videosLeft.map((videoRef, index) => (
          <video key={index} ref={videoRef} className="rounded-xl md:mb-16  h-28 " src="/video-pixel.mp4" autoPlay muted></video>
        ))}
      </div>
      <div className="mt-10">
        {videosLeft.map((videoRef, index) => (
          <video key={index} ref={videoRef} className="rounded-xl md:mb-16  h-28 " src="/video-pixel.mp4" autoPlay muted></video>
        ))}
      </div>
    </div>
  );
}

export default VideoPlayer;
