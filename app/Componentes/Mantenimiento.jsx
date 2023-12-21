import Link from "next/link"


export default function Mantenimiento() {
  return (
    <section>
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#18181B] py-40">
        <div className="w-full max-w-md mx-auto space-y-8">
          <img
            alt="Logo"
            className="aspect-[1/1] overflow-hidden rounded-lg object-contain object-center mx-auto"
            height="300"
            src="/mantenimiento.png"
            width="300"
          />
          <h2 className="text-4xl font-bold tracking-tighter text-center sm:text-5xl md:text-6xl text-gray-800 dark:text-gray-200">
          Sitio en mantenimiento
          </h2>
          <p className="mx-auto text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-center">
          Nuestro sitio web se encuentra actualmente en mantenimiento programado. Deberíamos regresar en breve. Gracias por su paciencia.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <div className="flex flex-col items-center">
              <div className="text-5xl font-semibold dark:text-gray-300">12</div>
              <div className="text-gray-500 dark:text-gray-400">Hours</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-5xl font-semibold dark:text-gray-300">34</div>
              <div className="text-gray-500 dark:text-gray-400">Minutes</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-5xl font-semibold dark:text-gray-300">56</div>
              <div className="text-gray-500 dark:text-gray-400">Seconds</div>
            </div>
          </div>
          <Link
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-900 hover:bg-gray-800 focus:shadow-outline focus:outline-none"
            href="/"
          >
            Regresar
          </Link>
        </div>
      </div>
    </section>
  )
}