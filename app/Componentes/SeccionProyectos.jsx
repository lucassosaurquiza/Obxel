import Link from 'next/link'

const SeccionProyectos = () => {
  return (
    <section className="w-full pb-10">
      <div className="grid gap-4 text-center lg:gap-10 lg:px-8 xl:px-16">
        <div className="space-y-3 mb-10">
          <h2 className="justify-center text-center flex  font-bold tracking-tighter text-3xl xl:text-5xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-8">Proyectos</h2>
          <p className="text-gray-300 lg:text-xl text-center font-bold ">
            ¿No sabes como diseñar tu web?
          </p>
          <p className="text-gray-400 lg:text-xl text-center font-bold ">
            Elegi una, nosotros nos encargamos del resto.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-8 lg:gap-12 mb-10">
          <Link href="https://www.cuatrocarnes.com/" target='blank'>
            <div className="group flex flex-col p-4 border hover:border-none border-gray-200 shadow-sm bg-transparent transition-transform hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-300 via-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-2xl  relative mt-4 mx-auto max-w-[700px] bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 md:text-xl/relaxed  group-hover:underline
               font-bold opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                Tienda Online
              </h3>
              <img
                alt="Template 1"
                className="relative my-10 overflow-hidden rounded-lg object-scale-down object-center w-full"
                height="200"
                src="/plantilla-cuatro-carnes.png"
                width="200"
              />
              <p className="relative mb-10 text-gray-300 lg:text-sm text-center font-bold opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                "Cuatro carnes"
              </p>
            </div>
          </Link>
          <Link href="https://landing-venta-de-cursos.vercel.app/" target='blank'>
            <div className="group flex flex-col p-4 border hover:border-none border-gray-200 shadow-sm bg-transparent transition-transform hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-pink-300 via-pink-800 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-2xl  relative mt-4 mx-auto max-w-[700px] bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 md:text-xl/relaxed  group-hover:underline
               font-bold opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                Web Avanzada
              </h3>
              <img
                alt="Template 1"
                className="relative my-10 overflow-hidden rounded-lg object-scale-down object-center w-full"
                height="200"
                src="/plantilla-landing-cursos.png"
                width="200"
              />
              <p className="relative mb-10 text-gray-300 lg:text-sm text-center font-bold opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                "Landing wiht josefina"
              </p>
            </div>
          </Link>
          <Link href="https://alize-landing-page.vercel.app/" target='blank'>
            <div className="group flex flex-col p-4 border hover:border-none border-gray-200 shadow-sm bg-transparent transition-transform hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-red-300 via-red-800 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-2xl  relative mt-4 mx-auto max-w-[700px] bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 md:text-xl/relaxed  group-hover:underline
               font-bold opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                Landing con 3 vistas
              </h3>
              <img
                alt="Template 1"
                className="relative my-10 overflow-hidden rounded-lg object-scale-down object-center w-full"
                height="200"
                src="/plantilla-alize-landing.png"
                width="200"
              />
              <p className="relative mb-10 text-gray-300 lg:text-sm text-center font-bold opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                "Alize viajes y turismo"
              </p>
            </div>
          </Link>
          <Link href="https://maquetado-sushi.vercel.app/" target='blank'>
            <div className="group flex flex-col p-4 border hover:border-none border-gray-200 shadow-sm bg-transparent transition-transform hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-300 via-blue-800 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-2xl  relative mt-4 mx-auto max-w-[700px] bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 md:text-xl/relaxed  group-hover:underline
               font-bold opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                Diseño Web
              </h3>
              <img
                alt="Template 1"
                className="relative my-10 overflow-hidden rounded-lg object-scale-down object-center w-full"
                height="200"
                src="/plantilla-sushi.png"
                width="200"
              />
              <p className="relative mb-10 text-gray-300 lg:text-sm text-center font-bold opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                "Sushi"
              </p>
            </div>
          </Link>
          <Link href="https://esi-dashboard-ten.vercel.app/login" target='blank'>
            <div className="group flex flex-col p-4 border hover:border-none border-gray-200 shadow-sm bg-transparent transition-transform hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-gray-300 to-gray opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-2xl  relative mt-4 mx-auto max-w-[700px] bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 md:text-xl/relaxed  group-hover:underline
               font-bold opacity-100 group-hover:opacity-0 transition-opacity duration-500">
               Programa Personalizado
              </h3>
              <img
                alt="Template 1"
                className="relative my-10 overflow-hidden rounded-lg object-scale-down object-center w-full"
                height="200"
                src="/Programa-Institucion-Educativa.png"
                width="200"
              />
              <p className="relative mb-10 text-gray-300 lg:text-sm text-center font-bold opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                "New English School"
              </p>
            </div>
          </Link>
          <Link href="https://www.lacocinadeedu.com.ar/" target='blank'>
            <div className="group flex flex-col p-4 border hover:border-none border-gray-200 shadow-sm bg-transparent transition-transform hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-orange-800 via-orange-300 to-gray opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-2xl  relative mt-4 mx-auto max-w-[700px] bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 md:text-xl/relaxed  group-hover:underline
               font-bold opacity-100 group-hover:opacity-0 transition-opacity duration-500">
               Landing con 3 vistas
              </h3>
              <img
                alt="Template 1"
                className="relative my-10 overflow-hidden rounded-lg object-scale-down object-center w-full"
                height="200"
                src="/plantilla-edu.png"
                width="200"
              />
              <p className="relative mb-10 text-gray-300 lg:text-sm text-center font-bold opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                "La Cocina de Edu"
              </p>
            </div>
          </Link>
        </div>

      </div>
    </section>
  )
}

export default SeccionProyectos