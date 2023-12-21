import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { FaHashtag } from "react-icons/fa";

const Precios = () => {
  return (
    <section className="w-full bg-[#18181B] text-white transition-all ease-in-out duration-500">
      <section className="pt-32 pb-10 md:pt-36 lg:pt-40 xl:pt-44 transition-all ease-in-out duration-500 max-w-7xl mx-auto text-center">
        <div className="md:flex  px-4 md:px-6 text-center gap-10 md:justify-center">

          <h1 className="flex text-center items-center justify-center text-3xl lg:text-6xl font-bold tracking-tighter   bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-10">Transparentes y Competitivos</h1>
          <div>
            <p className="mx-auto max-w-[700px] text-gray-300 lg:text-lg text-center">
              Explora nuestros precios para obtener una visión detallada de nuestras ofertas en desarrollo web.
              Con tarifas competitivas y total transparencia, te brindamos soluciones a medida que se ajustan a tus necesidades y presupuesto.
              Descubre cómo nuestra gama de servicios de desarrollo web combina calidad y asequibilidad.
              Consulta nuestros planes y elige la opción perfecta para impulsar tu presencia en línea con confianza y eficacia.
            </p>
          </div>
        </div>
      </section>
      <section className="  mx-auto text-center mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#0E0F18] py-12">
          <div className="lg:text-center">
            <h2 className="text-base text-emerald-600 font-semibold tracking-wide uppercase">Precios</h2>
            <p className="mt-2 text-3xl leading-8 font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 sm:text-4xl">
              Desarrollo Web
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto font-bold">
              Selecciona el plan que mejor se adapte a tus necesidades, desde una página sencilla hasta un comercio electrónico. Si decides adquirir el plan de diseño junto con otro plan de página web, te ofrecemos un precio único.
            </p>
          </div>
          <div className="mt-10 pb-12 bg-[#0E0F18] sm:pb-16 ">
            <div className="relative">
              <div className="absolute inset-0 h-1/2 " />
              <div className="relative max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="max-w-md mx-auto lg:max-w-5xl lg:grid lg:grid-cols-3 lg:gap-8">
                  <div className="border p-4 mb-10 lg:mb-0">
                    <div>
                      <h2 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Diseño Web</h2>
                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        Diseñamos desde 0 tu sitio web o podes elegir una de nuestras plantillas que mas se adapte a lo que buscas, lo tomamos como ejemplo y diseñamos a tu manera.
                      </p>
                      <div>
                        <p className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">USD $500</p>
                        <p className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">ARS $300.000</p>
                      </div>
                      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">Gratis para siempre.</p>
                      <ul className="mt-6 space-y-4">
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <FaCheck className="h-6 w-6 text-green-500" />
                          </div>
                          <p className="ml-3 text-left text-gray-500 dark:text-gray-400">Prototipo y presentacion en figma.</p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <FaCheck className="h-6 w-6 text-green-500" />
                          </div>
                          <p className="ml-3 text-left text-gray-500 dark:text-gray-400">Diseño a medida.</p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <FaCheck className="h-6 w-6 text-green-500" />
                          </div>
                          <p className="ml-3 text-left text-gray-500 dark:text-gray-400">Tiempo estimado de entrega 3 meses.</p>
                        </li>
                      </ul>
                      <Link href=''>
                        <div className="mt-6 bg-transparent border cursor-pointer">
                          <button className="text-white font-bold py-2" size="lg">Ver ejemplo</button>
                        </div>
                      </Link>
                      <Link target="blank" href="https://api.whatsapp.com/send?phone=+543794077764&text=Hola,%20me%20gustaria%20hacer%20una%20consulta">
                        <div className="mt-3 bg-white cursor-pointer">
                          <button className="text-gray-900 font-bold py-2" size="lg">Contratar</button>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="border p-4 mb-10 lg:mb-0">
                    <div>
                      <h2 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Landing Page</h2>
                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        Pagina de una sola vista. Ideal para perfiles digitales, empresas que estan iniciando, empresas chicas y portafolios.
                      </p>
                      <div>
                        <p className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">USD $100</p>
                        <p className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">ARS $60.000</p>
                      </div>
                      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">Soporte gratuito por un año.</p>
                      <ul className="mt-6 space-y-4">
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <FaCheck className="h-6 w-6 text-green-500" />
                          </div>
                          <p className="ml-3 text-left text-gray-500 dark:text-gray-400">Pagina de una sola vista.</p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <FaCheck className="h-6 w-6 text-green-500" />
                          </div>
                          <p className="ml-3 text-left text-gray-500 dark:text-gray-400">Adaptable para todo tipo de dispositivos.</p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <FaCheck className="h-6 w-6 text-green-500" />
                          </div>
                          <p className="ml-3 text-left text-gray-500 dark:text-gray-400">Integracion con redes sociales mas icono de whatsapp.</p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <FaCheck className="h-6 w-6 text-green-500" />
                          </div>
                          <p className="ml-3 text-left text-gray-500 dark:text-gray-400">Tiempo estimado de entrega 2 semanas.</p>
                        </li>
                      </ul>
                      <Link href=''>
                        <div className="mt-6 bg-transparent border cursor-pointer">
                          <button className="text-white font-bold py-2" size="lg">Ver ejemplo</button>
                        </div>
                      </Link>
                      <Link target="blank" href="https://api.whatsapp.com/send?phone=+543794077764&text=Hola,%20me%20gustaria%20hacer%20una%20consulta">
                        <div className="mt-3 bg-white cursor-pointer">
                          <button className="text-gray-900 font-bold py-2" size="lg">Contratar</button>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="border p-4 mb-10 lg:mb-0">
                    <div>
                      <h2 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Web Personalizada</h2>
                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        Si sos una empresa con experiencia (entre 1 a 3 años de servicio) que quiera ingresar al ambito tecnologico esta es tu opcion.
                      </p>
                      <div>
                        <p className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">USD $300</p>
                        <p className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">ARS $120.000</p>
                      </div>
                      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">Lo pagas una sola vez.</p>
                      <ul className="mt-6 space-y-4">
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <FaCheck className="h-6 w-6 text-green-500" />
                          </div>
                          <p className="ml-3 text-left text-gray-500 dark:text-gray-400">Incluye todo lo de la "Landing Page".</p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <IoMdAdd className="h-6 w-6 text-green-500" />
                          </div>
                          <p className="ml-3 text-left text-gray-500 dark:text-gray-400">De 1 a 5 paginas navegables.</p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <IoMdAdd className="h-6 w-6 text-green-500" />
                          </div>
                          <p className="ml-3 text-left text-gray-500 dark:text-gray-400">Formulario de contacto.</p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <IoMdAdd className="h-6 w-6 text-green-500" />
                          </div>
                          <p className="ml-3 text-left text-gray-500 dark:text-gray-400">Formulario de Email.</p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <IoMdAdd className="h-6 w-6 text-green-500" />
                          </div>
                          <p className="ml-3 text-left text-gray-500 dark:text-gray-400">Tiempo de entrega estimada 1 mes.</p>
                        </li>
                      </ul>
                      <Link href=''>
                        <div className="mt-6 bg-transparent border cursor-pointer">
                          <button className="text-white font-bold py-2" size="lg">Ver ejemplo</button>
                        </div>
                      </Link>
                      <Link target="blank" href="https://api.whatsapp.com/send?phone=+543794077764&text=Hola,%20me%20gustaria%20hacer%20una%20consulta">
                        <div className="mt-3 bg-white cursor-pointer">
                          <button className="text-gray-900 font-bold py-2" size="lg">Contratar</button>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="border p-4 mb-10 lg:mb-0">
                    <div>
                      <h2 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Web Avanzada</h2>
                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        Empresas grandes (mas de 20 empleados), plataformas con comercio electronico, sitio de comunidades, instituciones educativas, medios de comunicacion y entretenimiento, entre otros.
                        Estas son algunas de las instituciones a las cuales podria interesarle
                      </p>
                      <div>
                        <p className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">USD $600</p>
                        <p className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">ARS $200.000</p>
                      </div>
                      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">.</p>
                      <ul className="mt-6 space-y-4">
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <FaCheck className="h-6 w-6 text-green-500" />
                          </div>
                          <p className="ml-3 text-left text-gray-500 dark:text-gray-400">Incluye todo lo de la "Web Personalizada".</p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <IoMdAdd className="h-6 w-6 text-green-500" />
                          </div>
                          <p className="ml-3 text-left text-gray-500 dark:text-gray-400">De 1 a 10 paginas navegables.</p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <IoMdAdd className="h-6 w-6 text-green-500" />
                          </div>
                          <p className="ml-3 text-left text-gray-500 dark:text-gray-400">Sistema de Login.</p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <IoMdAdd className="h-6 w-6 text-green-500" />
                          </div>
                          <p className="ml-3 text-left text-gray-500 dark:text-gray-400">Tiempo estimado de entrega 2 meses.</p>
                        </li>
                      </ul>
                      <Link href=''>
                        <div className="mt-6 bg-transparent border cursor-pointer">
                          <button className="text-white font-bold py-2" size="lg">Ver ejemplo</button>
                        </div>
                      </Link>
                      <Link target="blank" href="https://api.whatsapp.com/send?phone=+543794077764&text=Hola,%20me%20gustaria%20hacer%20una%20consulta">
                        <div className="mt-3 bg-white cursor-pointer">
                          <button className="text-gray-900 font-bold py-2" size="lg">Contratar</button>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="border p-4 mb-10 lg:mb-0">
                    <div>
                      <h2 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Tienda Online</h2>
                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        Esta opcion es para ti si sos: emprendedor, empresa fisica con un buen volumen de empleados, profesionales de las distintas areas (artistas, entrenadores, profesionales de la salud, psicologos, consultores, entre otros).
                      </p>
                      <div>
                        <p className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">USD $1000</p>
                        <p className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">ARS $300.000</p>
                      </div>
                      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">Vende lo que necesites a traves de la web.</p>
                      <ul className="mt-6 space-y-4">
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <FaCheck className="h-6 w-6 text-green-500" />
                          </div>
                          <p className="ml-3 text-left text-gray-500 dark:text-gray-400">Incluye todo lo de la "Web Personalizada", menos el tiempo de entrega.</p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <IoMdAdd className="h-6 w-6 text-green-500" />
                          </div>
                          <p className="ml-3 text-left text-gray-500 dark:text-gray-400">Hasta 15 paginas navegables.</p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <IoMdAdd className="h-6 w-6 text-green-500" />
                          </div>
                          <p className="ml-3 text-left text-gray-500 dark:text-gray-400">Panel de Administracion.</p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <IoMdAdd className="h-6 w-6 text-green-500" />
                          </div>
                          <p className="ml-3 text-left text-gray-500 dark:text-gray-400">Tiempo estimado de entrega de 3 a 6 meses.</p>
                        </li>
                      </ul>
                      <Link href=''>
                        <div className="mt-6 bg-transparent border cursor-pointer">
                          <button className="text-white font-bold py-2" size="lg">Ver ejemplo</button>
                        </div>
                      </Link>
                      <Link target="blank" href="https://api.whatsapp.com/send?phone=+543794077764&text=Hola, me gustaria contratar el paquete de tienda online">
                        <div className="mt-3 bg-white cursor-pointer">
                          <button className="text-gray-900 font-bold py-2" size="lg">Contratar</button>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-white dark:bg-gray-800 max-w-7xl mx-auto text-center mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-emerald-600 font-semibold tracking-wide uppercase">Precios</h2>
            <p className="mt-2 text-3xl leading-8 font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 sm:text-4xl">
              Marketing Digital
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto font-bold">
              Una vez que materialices tu visión digital, es fundamental darle visibilidad.
              Descubre nuestros paquetes de marketing diseñados para potenciar tu proyecto de manera significativa.
              ¡Haz que tu presencia sea notoria y atrae a nuevos clientes con nuestras estrategias especializadas!
            </p>
          </div>
          <div className="mt-10 pb-12 bg-white sm:pb-16 dark:bg-gray-800">
            <div className="relative">
              <div className="absolute inset-0 h-1/2 bg-white dark:bg-gray-800" />
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-md mx-auto lg:max-w-5xl lg:grid lg:grid-cols-3 lg:gap-8">
                  <div>
                    <div className="border p-4 mb-10 lg:mb-0">
                      <h2 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Basico</h2>
                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        Oferta basica para que pruebes nuestros servicios.
                      </p>
                      <p className="mt-3 text-5xl font-bold text-gray-900 dark:text-white">$5.000</p>
                      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">Se abona mensualmente.</p>
                      <ul className="mt-6 space-y-4">
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <FaHashtag className="h-6 w-6 text-green-500" />
                          </div>
                          <p className="ml-3 text-base text-gray-500 dark:text-gray-400">2 dias en la semana, 5 posteos en instagram.</p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <FaHashtag className="h-6 w-6 text-green-500" />
                          </div>
                          <p className="ml-3 text-base text-gray-500 dark:text-gray-400">2 dias en la semana, 5 posteos en facebook.</p>
                        </li>
                      </ul>
                      <Link target="blank" href="https://api.whatsapp.com/send?phone=+543794077764&text=Hola,%20me%20gustaria%20hacer%20una%20consulta">
                        <div className="mt-6 border hover:bg-white hover:text-black trasition duration-300 ease-in-out hover:cursor-pointer">
                          <button className="font-bold" size="lg">Elegir Plan Basico</button>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className="border p-4 mb-10 lg:mb-0">
                      <h2 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Intermedio</h2>
                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        Investigacion y evaluacion sobre tu competencia actual para posteriores estrategias de marketing.
                      </p>
                      <p className="mt-3 text-5xl font-bold text-gray-900 dark:text-white">$10.000</p>
                      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">Se abona mensualmente.</p>
                      <ul className="mt-6 space-y-4">
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <FaHashtag className="h-6 w-6 text-green-500" />
                          </div>
                          <p className="ml-3 text-base text-gray-500 dark:text-gray-400">
                            Investigación continua de mercado y tendencias.
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <FaHashtag className="h-6 w-6 text-green-500" />
                          </div>
                          <p className="ml-3 text-base text-gray-500 dark:text-gray-400">
                            Estrategias personalizadas basadas en análisis competitivo.
                          </p>
                        </li>
                      </ul>
                      <Link target="blank" href="https://api.whatsapp.com/send?phone=+543794077764&text=Hola,%20me%20gustaria%20hacer%20una%20consulta">
                        <div className="mt-6 border hover:bg-white hover:text-black trasition duration-300 ease-in-out hover:cursor-pointer">
                          <button className="font-bold" size="lg">Elegir Plan Intermedio</button>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className="border p-4 mb-10 lg:mb-0">
                      <h2 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Avanzado</h2>
                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        Control total sobre sus redes sociales.
                      </p>
                      <p className="mt-3 text-5xl font-bold text-gray-900 dark:text-white">$15.000</p>
                      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">Se abona mensualmente.</p>
                      <ul className="mt-6 space-y-4">
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <FaHashtag className="h-6 w-6 text-green-500" />
                          </div>
                          <p className="ml-3 text-base text-gray-500 dark:text-gray-400">
                            Contenido estratégico adaptado a tus necesidades.
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <FaHashtag className="h-6 w-6 text-green-500" />
                          </div>
                          <p className="ml-3 text-base text-gray-500 dark:text-gray-400">
                            Analítica avanzada de desempeño en redes sociales.
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <FaHashtag className="h-6 w-6 text-green-500" />
                          </div>
                          <p className="ml-3 text-base text-gray-500 dark:text-gray-400">
                            Soporte prioritario las 24/7.
                          </p>
                        </li>
                      </ul>
                      <Link target="blank" href="https://api.whatsapp.com/send?phone=+543794077764&text=Hola,%20me%20gustaria%20hacer%20una%20consulta">
                        <div className="mt-6 border hover:bg-white hover:text-black trasition duration-300 ease-in-out hover:cursor-pointer">
                          <button className="font-bold" size="lg">Elegir Plan Avanzado</button>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-gray-600 max-w-7xl mx-auto text-center ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-emerald-600 font-semibold tracking-wide uppercase">Precios</h2>
            <p className="mt-2 text-3xl leading-8 font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 sm:text-4xl">
              Marca Personal
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-800 lg:mx-auto font-bold">
              Si ya cuentas con algun empredimiento online sabras lo importante que es tener presencia alli. Por ello te traemos asesoramiento sobre tendencias y como se situa tu marca en el mercado.
            </p>
          </div>
          <div className="mt-10 pb-12  sm:pb-16 ">
            <div className="relative">
              <div className="absolute inset-0 h-1/2 " />
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-md mx-auto lg:max-w-5xl lg:grid lg:grid-cols-3 lg:gap-8">
                  <div>
                    <div className="border p-4 mb-10 lg:mb-0">
                      <h2 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Basico</h2>
                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        Oferta basica para que pruebes nuestros servicios.
                      </p>
                      <p className="mt-3 text-5xl font-bold text-gray-900 dark:text-white">$50.000</p>
                      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">Se abona mensualmente.</p>
                      <ul className="mt-6 space-y-4">
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <FaHashtag className="h-6 w-6 text-green-500" />
                          </div>
                          <p className="ml-3 text-base text-gray-500 dark:text-gray-400">Analisis inicial basico.</p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <FaHashtag className="h-6 w-6 text-green-500" />
                          </div>
                          <p className="ml-3 text-base text-gray-500 dark:text-gray-400">Fundamentos de la Marca Personal.</p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <FaHashtag className="h-6 w-6 text-green-500" />
                          </div>
                          <p className="ml-3 text-base text-gray-500 dark:text-gray-400">Optimización de Perfiles en Redes Sociales.</p>
                        </li>
                      </ul>
                      <Link target="blank" href="https://api.whatsapp.com/send?phone=+543794077764&text=Hola,%20me%20gustaria%20hacer%20una%20consulta">
                        <div className="mt-6 border hover:bg-white hover:text-black trasition duration-300 ease-in-out hover:cursor-pointer">
                          <button className="font-bold" size="lg">Elegir Plan Basico</button>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className="border p-4 mb-10 lg:mb-0">
                      <h2 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Intermedio</h2>
                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        Investigacion y evaluacion sobre tu competencia actual para posteriores estrategias de marca.
                      </p>
                      <p className="mt-3 text-5xl font-bold text-gray-900 dark:text-white">$100.000</p>
                      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">Se abona mensualmente.</p>
                      <ul className="mt-6 space-y-4">
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <FaHashtag className="h-6 w-6 text-green-500" />
                          </div>
                          <p className="ml-3 text-base text-gray-500 dark:text-gray-400">
                            Segmentación de Audiencia
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <FaHashtag className="h-6 w-6 text-green-500" />
                          </div>
                          <p className="ml-3 text-base text-gray-500 dark:text-gray-400">
                            Gestión de Reputación en Línea
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <FaHashtag className="h-6 w-6 text-green-500" />
                          </div>
                          <p className="ml-3 text-base text-gray-500 dark:text-gray-400">
                            Networking Estratégico
                          </p>
                        </li>
                      </ul>
                      <Link target="blank" href="https://api.whatsapp.com/send?phone=+543794077764&text=Hola,%20me%20gustaria%20hacer%20una%20consulta">
                        <div className="mt-6 border hover:bg-white hover:text-black trasition duration-300 ease-in-out hover:cursor-pointer">
                          <button className="font-bold" size="lg">Elegir Plan Intermedio</button>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className="border p-4 mb-10 lg:mb-0">
                      <h2 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Avanzado</h2>
                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        Control total sobre su marca.
                      </p>
                      <p className="mt-3 text-5xl font-bold text-gray-900 dark:text-white">$150.000</p>
                      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">Se abona mensualmente.</p>
                      <ul className="mt-6 space-y-4">
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <FaHashtag className="h-6 w-6 text-green-500" />
                          </div>
                          <p className="ml-3 text-base text-gray-500 dark:text-gray-400">
                            Estrategia de Marca Personal a Largo Plazo
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <FaHashtag className="h-6 w-6 text-green-500" />
                          </div>
                          <p className="ml-3 text-base text-gray-500 dark:text-gray-400">
                            Monetización de la Marca Personal
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <FaHashtag className="h-6 w-6 text-green-500" />
                          </div>
                          <p className="ml-3 text-base text-gray-500 dark:text-gray-400">
                            Mentoría Personalizada
                          </p>
                        </li>
                      </ul>
                      <Link target="blank" href="https://api.whatsapp.com/send?phone=+543794077764&text=Hola,%20me%20gustaria%20hacer%20una%20consulta">
                        <div className="mt-6 border hover:bg-white hover:text-black trasition duration-300 ease-in-out hover:cursor-pointer">
                          <button className="font-bold" size="lg">Elegir Plan Avanzado</button>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Precios