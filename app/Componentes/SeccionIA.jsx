import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const SeccionAnalisisMercado = () => {
  return (
    <section className="w-full justify-center flex px-3" >
      <div className="lg:flex max-w-7xl mb-20 gap-5 ">
        <div className=" text-center flex flex-col justify-center w-full mb-10">
          <h1 className="justify-center text-center flex  font-bold tracking-tighter text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-8">
          Análisis de mercado
          </h1>
          <p className="text-gray-300 lg:text-xl text-center font-bold mb-10">
            En los últimos tiempos, las tendencias han cambiado rápidamente.
            Si quieres mantenerte al día con lo que está sucediendo y descubrir hacia dónde debería dirigirse tu empresa, explora nuestro apartado de análisis de mercado.
            Te proporcionamos información actualizada sobre las últimas tendencias tecnológicas, junto con consejos clave para que tomes decisiones informadas y estratégicas para tu negocio.
          </p>
          <Link href='IA'>
            <div className="flex justify-center text-center">
              <button className="font-bold text-gray-300 hover:text-white max-w-xs bg-transparent border hover:border-none hover:bg-gradient-to-r hover:from-emerald-300 hover:via-emerald-800 hover:to-emerald-500 rounded-md p-2 hover:transition-transform hover:transform hover:scale-105">
                Conocer Mas
              </button>
            </div>
          </Link>
        </div>
        <div className="w-full">
          <main className="flex flex-col items-center justify-center flex-1 w-full">
            <div className="w-full p-3 rounded-md shadow-md bg-[#0E0F18] ">
              <Image
                alt="Image Description"
                className="rounded-md transform transition-all duration-500 ease-in-out group-hover:scale-90 z-0 mb-5"
                src="/IA.jpg"
                layout="responsive"
                width="50"
                height="50"

              />
              <div className="mt-2">
                <Link
                  className="text-2xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
                  href="#"
                >
                  IA y su importancia
                </Link>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  La inteligencia artificial (IA) representa la cúspide de décadas de avances tecnológicos, transformando la interacción con la información y automatizando procesos complejos.
                  A través del aprendizaje automático...
                </p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <Link className="text-emerald-600 dark:text-emerald-400 hover:underline" href="IA">
                  Leer mas
                </Link>
                <div className="flex items-center">
                  <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">Jun 1, 2024</span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  )
}
