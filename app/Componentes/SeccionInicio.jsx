import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const SeccionInicio = () => {
  return (
    <section className="w-full py-10 md:py-16 xl:py-14 transition-all ease-in-out duration-500 flex  justify-center animate-slideInLeft">
      <div className="md:flex  max-w-7xl gap-10">
        <div className="mb-10 md:mb-0">
          <h1 className="text-3xl font-bold tracking-tighter mb-12 lg:text-4xl bg-gradient-to-r from-emerald-500 via-emerald-300 to-emerald-400 text-transparent bg-clip-text items-center flex justify-center text-center">
            Digitalizá tu negocio con nosotros...
          </h1>
          <p className="text-gray-300 lg:text-xl text-center font-bold mb-12">
            Diseño Web - Desarrollo de software - Asesoramiento de Marca - Marketing digital - Posicionamiento web
          </p>
          <p className="text-3xl text-center mb-12 bg-gradient-to-r from-emerald-500 via-emerald-300 to-emerald-400 text-transparent bg-clip-text font-bold lg:text-4xl">
            Creá, personalizá, posicioná y competí en línea
          </p>
          <div className="flex justify-center text-center ">
            <Link target="blank" href='https://api.whatsapp.com/send?phone=+543794077764&text=Hola,%20me%20gustaria%20hacer%20una%20consulta'>
              <button className="font-bold text-white bg-transparent border  border-gray-200 opacity-50 hover:opacity-100 hover:bg-gradient-to-r hover:from-emerald-300 hover:via-emerald-800 hover:to-emerald-500 rounded-md px-4 py-2 transform transition-all duration-500 hover:scale-125">
                Hablamos
              </button>
            </Link>
          </div>
        </div>
        <div className=" w-full">
          <h2 className="justify-center text-center flex text-lg font-bold tracking-tighter sm:text-xl xl:text-3xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-5">Ultimo proyecto realizado</h2>
          <div className="">
            <div className="item uno">
              <div>
                <p className="text-gray-300 md:text-md font-bold justify-center flex mb-5 text-center">Programa Personalizado - "Institucion Educativa - New English School" - 30/07/2024</p>
              </div>
              <div className="">
                <Link aria-label="Image link to a specified place" href="https://esi-dashboard-ten.vercel.app/login" target="blank">
                  <div className="group">
                    <Image
                      alt="Image Description"
                      className="rounded-md transform transition-all duration-500 ease-in-out group-hover:scale-90  mb-5"
                      src="/Programa-Institucion-Educativa.png"
                      layout="responsive"
                      width="50"
                      height="50"
                    />
                  </div>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
