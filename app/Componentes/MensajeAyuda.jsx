'use client';

import { useEffect, useState } from 'react';

const MensajeAyuda = () => {
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  useEffect(() => {
    const mostrarTimeout = setTimeout(() => {
      setMostrarMensaje(true);

      const ocultarTimeout = setTimeout(() => {
        setMostrarMensaje(false);
      }, 5000); 

      return () => clearTimeout(ocultarTimeout);
    }, 5000); 

    return () => clearTimeout(mostrarTimeout);
  }, []); 

  return (
    <div className="fixed bottom-14 right-16">
      <div
        className={`absolute inset-0 bg-[#11E096] opacity-30 rounded-md ${mostrarMensaje ? '' : 'hidden'}`}
      ></div>

      <div
        className={`relative p-2 rounded-md animation duration-300 ease-in-out ${mostrarMensaje ? '' : 'hidden'} text-md font-bold tracking-tighter xl:text-xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500`}
      >
        ¿En qué podemos ayudarte?
      </div>
    </div>
  );
};

export default MensajeAyuda;
