import Link from 'next/link'
import React from 'react'
import { IoLogoDesignernews } from 'react-icons/io';
import { TbBrandCashapp } from "react-icons/tb";
import { PiStrategy } from "react-icons/pi";
import { RiSeoLine } from "react-icons/ri";
import { FcStatistics } from "react-icons/fc";
import { FaPersonChalkboard } from 'react-icons/fa6';

export const SeccionTuMarca = () => {
  return (
    <section className="w-full  md:py-24 lg:py-24 pb-10 flex justify-center bg-gray-400">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="mb-10 justify-center text-center flex  font-bold tracking-tighter text-3xl xl:text-5xl/none bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-500">Consejos de marca</h2>
            <p className=" text-gray-300 lg:text-xl text-center font-bold ">
              Obtenga asesoramiento de expertos sobre cómo construir una marca sólida para su negocio
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="grid gap-1">
            <div className="flex items-center gap-4 mb-5 justify-center">
              <TbBrandCashapp className='h-10 w-10 text-4xl text-[#69E1B2]' />
              <h3 className="font-bold tracking-tighter text-2xl xl:text-3xl/none bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-500">Identidad de Marca</h3>
            </div>
            <p className="text-gray-300 lg:text-xl text-center font-bold ">
              Desarrollar una identidad de marca fuerte y memorable para destacarse en el mercado.
            </p>
          </div>
          <div className="grid gap-1">
            <div className="flex items-center gap-4 mb-5 justify-center">
              <FaPersonChalkboard className='h-10 w-10 text-4xl text-[#69E1B2]' />
              <h3 className="font-bold tracking-tighter text-2xl xl:text-3xl/none bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-500">Publico Objetivo</h3>
            </div>
            <p className="text-gray-300 lg:text-xl text-center font-bold ">
              Identifique su público objetivo y cree una marca que resuene con ellos.
            </p>
          </div>
          <div className="grid gap-1">
            <div className="flex items-center gap-4  mb-5 justify-center">
              <IoLogoDesignernews className='h-10 w-10 text-4xl text-[#69E1B2]' />
              <h3 className="font-bold tracking-tighter text-2xl xl:text-3xl/none bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-500">Diseño Visual</h3>
            </div>
            <p className="text-gray-300 lg:text-xl text-center font-bold ">
              Cree una marca visualmente atractiva con elementos de diseño consistentes.
            </p>
          </div>
          <div className="grid gap-1">
            <div className="flex items-center gap-4  mb-5 justify-center">
              <PiStrategy className='h-10 w-10 text-4xl text-[#69E1B2]' />
              <h3 className="font-bold tracking-tighter text-2xl xl:text-3xl/none bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-500">Estrategia de Marketing</h3>
            </div>
            <p className="text-gray-300 lg:text-xl text-center font-bold ">
              Desarrollar una estrategia de marketing integral para promocionar eficazmente su marca.
            </p>
          </div>
          <div className="grid gap-1">
            <div className="flex items-center gap-4 mb-5 justify-center">
              <RiSeoLine className='h-10 w-10 text-4xl text-[#69E1B2]' />
              <h3 className="font-bold tracking-tighter text-2xl xl:text-3xl/none bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-500">Posicionamiento de marca</h3>
            </div>
            <p className="text-gray-300 lg:text-xl text-center font-bold ">
              Posiciona tu marca de manera única en el mercado para diferenciarte de la competencia.
            </p>
          </div>
          <div className="grid gap-1">
            <div className="flex items-center gap-4 mb-5 justify-center">
              <FcStatistics className='h-10 w-10 text-4xl text-[#69E1B2]' />
              <h3 className="font-bold tracking-tighter text-2xl xl:text-3xl/none bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-500">Crecimiento de la marca</h3>
            </div>
            <p className="text-gray-300 lg:text-xl text-center font-bold ">Desarrolla estrategias para hacer crecer y escalar tu marca a lo largo del tiempo.
            </p>
          </div>
        </div>
        <div className="flex justify-center text-center">
          <Link href='/Plantillas'>
            <button className="mt-3 mb-10 font-bold text-gray bg-transparent border  border-gray-200 opacity-50 hover:opacity-100 hover:bg-gradient-to-r hover:from-emerald-300 hover:via-emerald-800 hover:to-emerald-500 rounded-md px-4 py-2 transform transition-all duration-500 hover:scale-125">
              Ver Caracteristicas
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
