import Link from 'next/link'
import React from 'react'

const SeccionMarketing = () => {
  return (
    <section className="w-full pb-10 pb-10xl:py-14 transition-all ease-in-out duration-500 flex  justify-center animate-slideInLeft">
      <div className="md:flex  max-w-7xl gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div className="space-y-6">
            <h1 className="mb-10 justify-center text-center flex  font-bold tracking-tighter text-2xl xl:text-5xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              Eleva tu marca con nuestra experiencia en márketing
            </h1>
            <p className="text-gray-300 lg:text-xl text-center font-bold mb-12">
              Libera todo el potencial de tu negocio con nuestras soluciones integrales de márketing. Desde la estrategia hasta la ejecución, te ayudamos a alcanzar nuevas alturas.
            </p>
            <div className="flex justify-center text-center ">
              <Link href='/Plantillas'>
                <button className="font-bold text-white bg-transparent border  border-gray-200 opacity-50 hover:opacity-100 hover:bg-gradient-to-r hover:from-emerald-300 hover:via-emerald-800 hover:to-emerald-500 rounded-md px-4 py-2 transform transition-all duration-500 hover:scale-125">
                  Mas
                </button>
              </Link>
            </div>
          </div>
          <div className=" flex justify-center items-center">
            <img
              src="estrategias-de-marketing.jpg"
              width="600"
              height="400"
              alt="Hero Image"
              className="rounded-xl aspect-auto object-cover transition duration-300 ease-in-out animate-pulse"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SeccionMarketing