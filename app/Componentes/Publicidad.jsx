import Link from "next/link";


export default function Publicidad() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 mb-5">
      <div className="mt-20 lg:mt-0 px-4 md:px-6 border">
        <div className="space-y-3">
          <h1 className="text-3xl lg:text-6xl font-bold tracking-tighter  flex justify-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-10">Publicidad</h1>
          <h2 className="flex text-center max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            ¿Como puedo hacer publicidad a mi sitio?
          </h2>
          <p className="flex text-center  text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Estrategias específicas para conectar con tus clientes. Ofrecemos planes personalizados que se adaptan a tus necesidades.
            Nos centramos en generar impacto y optimizar resultados. No solo llegamos a tus clientes, los cautivamos para impulsar tu presencia y éxito en línea.
            Elegi nuestra oferta que mas se acomode a tu necesidad.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 border">
          <div>
            <div className="p-4 space-y-3 bg-emerald-900 rounded-2xl">
              <div className="flex justify-between items-center">
                <h3 className="lg:text-4xl font-semibold text-white">Basico</h3>
                <p className="bg-gray-300 p-1 rounded-xl font-bold text-sm">Recomendado</p>
              </div>
              <p className="text-white">Comenza a tener presencia digital con este plan.</p>
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-10">$15.000</div>
              <ul className="space-y-1 text-gray-500 dark:text-gray-400 ">
                <li>1000 posteos</li>
                <li>Orientacion Basica</li>
                <li>Soporte de correo electrónico</li>
              </ul>
              <Link target="blank" href='https://api.whatsapp.com/send?phone=+543794077764&text=Hola,%20me%20gustaria%20hacer%20una%20consulta'>
                <div className="flex justify-center text-center mt-5">
                  <button className="font-bold text-gray-300 hover:text-white max-w-xs bg-transparent border hover:border-none hover:bg-gradient-to-r hover:from-emerald-300 hover:via-emerald-800 hover:to-emerald-500 rounded-md p-2 hover:transition-transform hover:transform hover:scale-105">
                    Contratar Plan
                  </button>
                </div>
              </Link>
            </div>
          </div>
          <div>
            <div className="p-4 space-y-3 bg-emerald-900 rounded-2xl">
              <div className="flex justify-between items-center">
                <h3 className="lg:text-4xl font-semibold text-white">Intermedio</h3>
              </div>
              <p className="text-white">Mayor control de tu presencia digital.</p>
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-10">$30.000</div>
              <ul className="space-y-1 text-gray-500 dark:text-gray-400 ">
                <li>1500 posteos</li>
                <li>Orientación Avanzada</li>
                <li>Soporte Prioritario</li>
              </ul>
              <Link target="blank" href='https://api.whatsapp.com/send?phone=+543794077764&text=Hola,%20me%20gustaria%20hacer%20una%20consulta'>
                <div className="flex justify-center text-center mt-5">
                  <button className="font-bold text-gray-300 hover:text-white max-w-xs bg-transparent border hover:border-none hover:bg-gradient-to-r hover:from-emerald-300 hover:via-emerald-800 hover:to-emerald-500 rounded-md p-2 hover:transition-transform hover:transform hover:scale-105">
                    Contratar Plan
                  </button>
                </div>
              </Link>
            </div>
          </div>
          <div>
            <div className="p-4 space-y-3 bg-emerald-900 rounded-2xl">
              <div className="flex justify-between items-center">
                <h3 className="lg:text-4xl font-semibold text-white">Avanzado</h3>
              </div>
              <p className="text-white">Solución completa y sofisticada para maximizar su presencia digital.</p>
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-10">$50.000</div>
              <ul className="space-y-1 text-gray-500 dark:text-gray-400 ">
                <li>2000 posteos</li>
                <li>Orientación Avanzada</li>
                <li>Soporte Prioritario VIP</li>
              </ul>
              <Link target="blank" href='https://api.whatsapp.com/send?phone=+543794077764&text=Hola,%20me%20gustaria%20hacer%20una%20consulta'>
                <div className="flex justify-center text-center mt-5">
                  <button className="font-bold text-gray-300 hover:text-white max-w-xs bg-transparent border hover:border-none hover:bg-gradient-to-r hover:from-emerald-300 hover:via-emerald-800 hover:to-emerald-500 rounded-md p-2 hover:transition-transform hover:transform hover:scale-105">
                    Contratar Plan
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <Link target="blank" href="https://api.whatsapp.com/send?phone=+543794077764&text=Hola,%20me%20gustaria%20hacer%20una%20consulta">
            <div className="text-white px-10 py-1 mt-6 border hover:bg-white hover:text-black trasition duration-300 ease-in-out hover:cursor-pointer">
              <button className=" font-bold" size="lg">Mas info</button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
