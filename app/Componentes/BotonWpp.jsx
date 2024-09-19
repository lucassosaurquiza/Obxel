"use client";

import { AiOutlineWhatsApp } from 'react-icons/ai'
import MensajeAyuda from './MensajeAyuda'

const BotonWpp = () => {
  return (
    <div className="fixed bottom-5 right-5">
      <a href="https://api.whatsapp.com/send?phone=+543794077764&text=Hola,%20me%20gustaria%20hacer%20una%20consulta">
        <button className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition duration-300 ease-in-out animate-pulse">
          <AiOutlineWhatsApp className="text-4xl" />
        </button>
      </a>
      <MensajeAyuda />
    </div>
  )
}

export default BotonWpp