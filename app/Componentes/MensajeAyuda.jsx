'use client'

import { useEffect, useState } from "react";

const MensajeAyuda = () => {
  const [mostrarMensaje, setMostrarMensaje] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // Muestra el mensaje después de 5 segundos
    const mostrarTimeout = setTimeout(() => {
      if (isMounted) {
        setMostrarMensaje(true);

        // Oculta el mensaje después de otros 5 segundos
        const ocultarTimeout = setTimeout(() => {
          if (isMounted) {
            setMostrarMensaje(false);
          }
        }, 5000); // 5 segundos para ocultar

        // Limpia los timeouts al desmontar el componente
        return () => {
          clearTimeout(ocultarTimeout);
        };
      }
    }, 5000); // 5 segundos para mostrar

    // Limpia los timeouts al desmontar el componente
    return () => {
      setIsMounted(false);
      clearTimeout(mostrarTimeout);
    };
  }, [isMounted]);

  return (
    <div className="fixed bottom-14 right-16 ">
      {/* Fondo iluminado */}
      <div
        className={`absolute inset-0 bg-[#11E096] opacity-30 rounded-md ${mostrarMensaje ? '' : 'hidden'
          }`}
      ></div>

      {/* Mensaje */}
      <div className={` relative p-2 rounded-md animation duration-300 ease-in-out ${mostrarMensaje ? '' : 'hidden'} text-md font-bold tracking-tighter  xl:text-xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500`}>
        ¿En qué podemos ayudarte?
      </div>
    </div>
  );
};

export default MensajeAyuda;
