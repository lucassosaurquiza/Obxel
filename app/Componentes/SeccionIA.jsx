import Link from 'next/link'
import React from 'react'

export const SeccionAnalisisMercado = () => {
  return (
    <section className="w-full justify-center flex">
      <div className="lg:flex max-w-7xl mb-20 gap-5 ">
        <div className=" text-center flex flex-col justify-center w-full mb-10">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-10">
            Analisis de mercado
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-300 md:text-lg mb-10">
            Descubre a fondo el análisis de mercado más crucial para potenciar tu empresa.
            Sumérgete en una exploración detallada de las herramientas de vanguardia, procedimientos avanzados, tecnologías de punta y todo lo relevante en este campo.
            Obtén información actualizada sobre las últimas tendencias y prácticas para asegurar que estás utilizando las mejores estrategias para el crecimiento de tu negocio.
            ¡Eleva tu comprensión del análisis de mercado y posiciona tu empresa en la vanguardia de la competencia!
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
              <img
                alt="Blog cover"
                className="w-full h-64 rounded-md object-cover"
                height={300}
                src="/IA.jpg"
                style={{
                  aspectRatio: "500/300",
                  objectFit: "cover",
                }}
                width={500}
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
                  <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">Jun 1, 2023</span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  )
}
