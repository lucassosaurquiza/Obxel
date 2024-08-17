import Link from 'next/link'
import React from 'react'

const SeccionMarketing = () => {
  return (
    <section className="bg-primary  ">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="md:text-3xl text-2xl text-gray-300 font-bold text-center">
              Eleva tu marca con nuestra experiencia en márketing
            </h1>
            <p className="text-lg text-center md:text-xl text-primary-foreground">
              Libera todo el potencial de su negocio con nuestras soluciones integrales de márketing. Desde la estrategia hasta la ejecución, te ayudamos a alcanzar nuevas alturas.
            </p>
            <div className="flex justify-center text-center ">
              <Link href='/Plantillas'>
                <button className="font-bold text-white bg-transparent border  border-gray-200 opacity-50 hover:opacity-100 hover:bg-gradient-to-r hover:from-emerald-300 hover:via-emerald-800 hover:to-emerald-500 rounded-md px-4 py-2 transform transition-all duration-500 hover:scale-125">
                  Mas
                </button>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="Marketing-inicio.png"
              width="600"
              height="400"
              alt="Hero Image"
              className="rounded-xl aspect-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SeccionMarketing