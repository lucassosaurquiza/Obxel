import Link from 'next/link'

const SeccionPlantillas = () => {
  return (
    <section className="w-full">
      <div className="grid gap-4 text-center lg:gap-10">
        <div className="space-y-3 mb-20">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">Plantillas</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-2xl font-bold">
            ¿No sabes como diseñar tu web?
          </p>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Elegi una, nosotros nos encargamos del resto.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-8 lg:gap-12 mb-10">
          <Link href="#">
            <div className="group flex flex-col  p-4 border border-gray-200 shadow-sm  bg-transparent transition-transform hover:scale-105">
              <h3 className="mt-4 mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-sm  group-hover:underline font-bold">Tienda Online</h3>
              <img
                alt="Template 1"
                className="my-10 overflow-hidden rounded-lg object-scale-down  object-center w-full"
                height="200"
                src="/plantilla-cuatro-carnes.png"
                width="200"
              />
              <p className='mb-10 text-gray-300 text-sm xl:text-lg'>
                "Cuatro carnes"
              </p>
              <Link href=''>
                <div className="flex justify-center text-center">
                  <button className="font-bold text-gray-300 hover:text-white max-w-xs bg-transparent border hover:border-none hover:bg-gradient-to-r hover:from-emerald-300 hover:via-emerald-800 hover:to-emerald-500 rounded-md px-5 py-1 hover:transition-transform hover:transform hover:scale-105">
                    Ver
                  </button>
                </div>
              </Link>
            </div>
          </Link>
          <Link href="#">
            <div className="group flex flex-col  p-4 border border-gray-200 shadow-sm bg-transparent transition-transform hover:scale-105">
              <h3 className="mt-4 mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-sm font-bold group-hover:underline">Web Avanzada</h3>
              <img
                alt="Template 2"
                className="my-10 overflow-hidden rounded-lg object-scale-down object-center w-full"
                height="200"
                src="/plantilla-landing-cursos.png"
                width="200"
              />
               <p className='mb-10 text-gray-300 text-sm xl:text-lg'>
                "Learning with josefina"
              </p>
              <Link href=''>
                <div className="flex justify-center text-center">
                  <button className="font-bold text-gray-300 hover:text-white max-w-xs bg-transparent border hover:border-none hover:bg-gradient-to-r hover:from-emerald-300 hover:via-emerald-800 hover:to-emerald-500 rounded-md px-5 py-1 hover:transition-transform hover:transform hover:scale-105">
                    Ver
                  </button>
                </div>
              </Link>
            </div>
          </Link>
          <Link href="#">
            <div className="group flex flex-col  p-4 border border-gray-200 shadow-sm  bg-transparent transition-transform hover:scale-105">
              <h3 className="mt-4 mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-sm  group-hover:underline font-bold">Landing Page</h3>
              <img
                alt="Template 3"
                className="my-10 overflow-hidden rounded-lg object-scale-down  object-center w-full"
                height="200"
                src="/plantilla-alize-landing.png"
                width="200"
              />
               <p className='mb-10 text-gray-300 text-sm xl:text-lg'>
                "Alize Viajes y Turismo"
              </p>
              <Link href=''>
                <div className="flex justify-center text-center">
                  <button className="font-bold text-gray-300 hover:text-white max-w-xs bg-transparent border hover:border-none hover:bg-gradient-to-r hover:from-emerald-300 hover:via-emerald-800 hover:to-emerald-500 rounded-md px-5 py-1 hover:transition-transform hover:transform hover:scale-105">
                    Ver
                  </button>
                </div>
              </Link>
            </div>
          </Link>
          <Link href="#">
            <div className="group flex flex-col  p-4 border border-gray-200 shadow-sm bg-transparent transition-transform hover:scale-105">
              <h3 className="mt-4 mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-sm  group-hover:underline font-bold">Landing Page</h3>
              <img
                alt="Template 4"
                className="my-10 overflow-hidden rounded-lg object-scale-down  object-center w-full"
                height="200"
                src="/plantilla-sushi.png"
                width="200"
              />
               <p className='mb-10 text-gray-300 text-sm xl:text-lg'>
                "Sushi"
              </p>
              <Link href=''>
                <div className="flex justify-center text-center">
                  <button className="font-bold text-gray-300 hover:text-white max-w-xs bg-transparent border hover:border-none hover:bg-gradient-to-r hover:from-emerald-300 hover:via-emerald-800 hover:to-emerald-500 rounded-md px-5 py-1 hover:transition-transform hover:transform hover:scale-105">
                    Ver
                  </button>
                </div>
              </Link>
            </div>
          </Link>
        </div>
        <Link href=''>
          <div className="flex justify-center text-center">
            <button className="font-bold text-gray-300 hover:text-white max-w-xs bg-transparent border hover:border-none hover:bg-gradient-to-r hover:from-emerald-300 hover:via-emerald-800 hover:to-emerald-500 rounded-md px-5 py-1 hover:transition-transform hover:transform hover:scale-105">
              Todas las plantillas
            </button>
          </div>
        </Link>
      </div>
    </section>
  )
}

export default SeccionPlantillas