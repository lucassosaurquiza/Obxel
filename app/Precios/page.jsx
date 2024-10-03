'use client'

import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { FaHashtag } from "react-icons/fa";

const page = () => {
  return (
    <section className='w-full text-white transition-all ease-in-out duration-500'>
      <section className='pt-32 pb-10 md:pt-36 lg:pt-40 xl:pt-44 transition-all ease-in-out duration-500 max-w-7xl mx-auto text-center'>
        <div className='md:flex  px-4 md:px-6 text-center gap-10 md:justify-center'>
          <h1 className='flex text-center items-center justify-center text-3xl lg:text-6xl font-bold tracking-tighter   bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-10'>
            Transparentes y Competitivos
          </h1>
          <div className='flex flex-col items-center'>
            <p className='mx-auto max-w-[700px] text-gray-300 text-[20px] text-center mb-4'>
              Con <bg className='custom-bg'>tarifas competitivas</bg> y <bg className='custom-bg'>total transparencia</bg>,
              te brindamos soluciones a medida que se ajustan a tus necesidades
              y presupuesto.
            </p>
            <Link
              target='blank'
              href='https://api.whatsapp.com/send?phone=+543794077764&text=Hola,%20me%20gustaria%20hacer%20una%20consulta'
            >
              <div className='flex items-center justify-center mt-3 h-16 px-4 bg-[--secondary-color] cursor-pointer hover:bg-[--secondary-color-light] active:bg-[--secondary-color-dark]'>
                <button className='font-bold py-2 text-[20px] text-center lg:text-3xl'>
                  Consultá nuestros planes
                </button>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className='mx-auto text-center mb-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[var(--primary-color)] py-12'>
          <div className='lg:text-center mb-10'>
            <h2 className='text-base text-[var(--secondary-color)] font-semibold tracking-wide uppercase'>
              Precios
            </h2>
            <p className='mt-2 text-3xl leading-8 font-bold tracking-tighter bg-clip-tex sm:text-4xl'>
              Desarrollo de software
            </p>
            <p className='mt-4 max-w-2xl mx-auto text-xl text-gray-500 lg:mx-auto font-bold'>
              Selecciona la opcion que mejor se adapte a tus necesidades, desde
              una página sencilla hasta un sistema complejo. Si decides
              adquirir la opcion de un diseño junto con el desarrollo del mismo, te
              ofrecemos un precio único.
            </p>
          </div>
          <p className='mt-2 text-3xl leading-8 font-bold tracking-tighter bg-clip-tex sm:text-4xl'>
            Tipos de desarrollos
          </p>
          <p className='mt-4 max-w-2xl mx-auto text-xl text-gray-500 lg:mx-auto font-bold'>
            Nuestros precios se adaptan a las necesidades de cada proyecto, garantizando siempre soluciones personalizadas y ajustadas a tus objetivos.
            Para brindarte mayor claridad, te presentamos a continuación un rango de precios transparente que refleja la calidad y flexibilidad de nuestros servicios.
          </p>
          <div className='mt-10 pb-12 bg-[var(--primary-color)] sm:pb-16 '>
            <div className='relative'>
              <div className='absolute inset-0 h-1/2 ' />
              <div className='relative max-w-7xl mx-auto sm:px-6 lg:px-8'>
                <div className='max-w-md mx-auto lg:max-w-5xl lg:grid lg:grid-cols-3 lg:gap-8'>
                  <div className='border hover:shadow-lg hover:shadow-white p-4 mb-10 lg:mb-0 flex flex-col justify-between'>
                    <div>
                      <h2 className='text-3xl font-medium mb-5'>
                        Pagina Web Simple
                      </h2>
                      <p className='mt-2 text-gray-500 text-sm mb-5' >
                        Pagina de una sola vista, ideal para perfiles digitales,
                        empresas que estan iniciando, blogs y
                        portafolios.
                      </p>
                      <div className="mb-5">
                        <p className='mt-3 text-2xl text-green-500 font-bold'>
                          Desde $300 USD
                        </p>
                        <p className='mt-3 text-2xl text-green-500 font-bold'>
                          Hasta $1000 USD
                        </p>
                      </div>
                      <p className='mb-5 text-sm text-gray-500 dark:text-gray-400 '>
                        Mantenimiento gratuito por 3 meses
                      </p>
                    </div>
                    <ul className='mt-6 space-y-4'>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <FaCheck className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Una sola vista.
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <FaCheck className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Adaptable para todo tipo de dispositivos.
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <FaCheck className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Integración con redes sociales y whatsapp.
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <FaCheck className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Hasta 5 imagenes y 2 videos.
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <FaCheck className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Tiempo estimado de entrega 1 mes.
                        </p>
                      </li>
                    </ul>
                    <div>
                      <Link href=''>
                        <div className='mt-6 bg-transparent border cursor-pointer'>
                          <button className='text-white font-bold py-2 text-[20px]'>
                            Ver ejemplo
                          </button>
                        </div>
                      </Link>
                      <Link
                        target='blank'
                        href='https://api.whatsapp.com/send?phone=+543794077764&text=Hola,%20me%20gustaria%20hacer%20una%20consulta'
                      >
                        <div className='mt-3 h-16 flex justify-center bg-green-500 hover:bg-green-300 active:bg-green-800 cursor-pointer'>
                          <button className='font-bold py-2 text-[20px]'>
                            Contratar
                          </button>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className='border hover:shadow-lg hover:shadow-white p-4 mb-10 lg:mb-0 flex flex-col justify-between'>
                    <div>
                      <h2 className='text-3xl font-medium mb-5'>
                        Pagina Web Avanzada
                      </h2>
                      <p className='mt-2 text-gray-500 text-sm'>
                        Pagina de 3 a 10 vistas o mas con posibilidad a sub-pestañas de acceso.
                        Si empezaste con tu emprendimiento, ofreces varios servicios o sos una empresa
                        chica/mediana esta opcion es la que te conviene.
                      </p>
                      <div>
                        <p className='mt-3 text-2xl text-green-500 font-bold'>
                          Desde $1500 USD
                        </p>
                        <p className='mt-3 text-2xl text-green-500 font-bold'>
                          Hasta $8000 USD
                        </p>
                      </div>
                      <p className='mt-4 text-sm text-gray-500 dark:text-gray-400'>
                        Mantenimiento gratuito por 5 meses
                      </p>
                    </div>
                    <ul className='mt-6 space-y-4'>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <IoMdAdd className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          De 3 a 10 vistas.
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <IoMdAdd className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Boton de menu para navegar entre vistas.
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <IoMdAdd className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Formulario de contacto.
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <IoMdAdd className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Envio de correos.
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <IoMdAdd className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Caracteristicas personalizadas.
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <IoMdAdd className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Tiempo de entrega estimada, entre 2 a 6 meses.
                        </p>
                      </li>
                    </ul>
                    <div>
                      <Link href=''>
                        <div className='mt-6 bg-transparent border cursor-pointer'>
                          <button className='text-white font-bold py-2 text-[20px]'>
                            Ver ejemplo
                          </button>
                        </div>
                      </Link>
                      <Link
                        target='blank'
                        href='https://api.whatsapp.com/send?phone=+543794077764&text=Hola,%20me%20gustaria%20hacer%20una%20consulta'
                      >
                        <div className='mt-3 h-16 flex justify-center bg-green-500 hover:bg-green-300 active:bg-green-800 cursor-pointer'>
                          <button className='font-bold py-2 text-[20px]'>
                            Contratar
                          </button>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className='border hover:shadow-lg hover:shadow-white p-4  lg:mb-0 flex flex-col justify-between'>
                    <div>
                      <h2 className='text-3xl font-medium mb-5'>
                        Aplicaciones moviles Android/IOS
                      </h2>
                      <p className='mt-2 text-gray-500 text-sm'>
                        Si buscas llevar tu negocio al siguiente nivel y conectar directamente con tus clientes desde sus dispositivos móviles,
                        ya sea para ofrecer servicios, mejorar la experiencia del usuario o expandir tu presencia digital, esta es tu opcion.
                      </p>
                      <div>
                        <p className='mt-3 text-2xl text-green-500 font-bold'>
                          Desde $3000 USD
                        </p>
                        <p className='mt-3 text-2xl text-green-500 font-bold'>
                          Hasta $10000 USD
                        </p>
                      </div>
                      <p className='mt-4 text-sm text-gray-500 dark:text-gray-400'>
                        Mantenimiento gratuito por 6 meses
                      </p>
                    </div>
                    <ul className='space-y-4'>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <IoMdAdd className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Seccion de carrito de compra.
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <IoMdAdd className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Sistema de administracion para los productos.
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <IoMdAdd className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Sistema de Login.
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <IoMdAdd className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Tiempo estimado de entrega a definir.
                        </p>
                      </li>
                    </ul>
                    <div>
                      <Link href=''>
                        <div className='mt-6 bg-transparent border cursor-pointer'>
                          <button className='text-white font-bold py-2 text-[20px]'>
                            Ver ejemplo
                          </button>
                        </div>
                      </Link>
                      <Link
                        target='blank'
                        href='https://api.whatsapp.com/send?phone=+543794077764&text=Hola,%20me%20gustaria%20hacer%20una%20consulta'
                      >
                        <div className='mt-3 h-16 flex justify-center bg-green-500 hover:bg-green-300 active:bg-green-800 cursor-pointer'>
                          <button className='font-bold py-2 text-[20px]'>
                            Contratar
                          </button>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className='border hover:shadow-lg hover:shadow-white p-4  lg:mb-0 flex flex-col justify-between'>
                    <div>
                      <h2 className='text-3xl font-medium mb-5'>
                        Aplicaciones de escritorio
                      </h2>
                      <p className='mt-2 text-gray-500 text-sm'>
                        Si ya tenes tu emprendimiento y queres aumentar tus ganancias
                        o inclusive facilitarlas, necesitas un comercio electronico.
                      </p>
                      <div>
                        <p className='mt-3 text-2xl text-green-500 font-bold'>
                          Consultar costo
                        </p>
                      </div>
                      <p className='mt-4 text-sm text-gray-500 dark:text-gray-400'>
                        Mantenimiento gratuito por 6 meses
                      </p>
                    </div>
                    <ul className='space-y-4'>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <IoMdAdd className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Seccion de carrito de compra.
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <IoMdAdd className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Sistema de administracion para los productos.
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <IoMdAdd className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Sistema de Login.
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <IoMdAdd className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Tiempo estimado de entrega a definir.
                        </p>
                      </li>
                    </ul>
                    <div>
                      <Link href=''>
                        <div className='mt-6 bg-transparent border cursor-pointer'>
                          <button className='text-white font-bold py-2 text-[20px]'>
                            Ver ejemplo
                          </button>
                        </div>
                      </Link>
                      <Link
                        target='blank'
                        href='https://api.whatsapp.com/send?phone=+543794077764&text=Hola,%20me%20gustaria%20hacer%20una%20consulta'
                      >
                        <div className='mt-3 h-16 flex justify-center bg-green-500 hover:bg-green-300 active:bg-green-800 cursor-pointer'>
                          <button className='font-bold py-2 text-[20px]'>
                            Contratar
                          </button>
                        </div>
                      </Link>
                    </div>
                  </div>


                  <div className='border hover:shadow-lg hover:shadow-white p-4  lg:mb-0 flex flex-col justify-between'>
                    <div>
                      <h2 className='text-3xl font-medium mb-5'>
                        Comercio electronico
                      </h2>
                      <p className='mt-2 text-gray-500 text-sm'>
                        Si ya tenes tu emprendimiento y queres aumentar tus ganancias
                        o inclusive facilitarlas, necesitas un comercio electronico.
                      </p>
                      <div>
                        <p className='mt-3 text-2xl text-green-500 font-bold'>
                          Consultar costo
                        </p>
                      </div>
                      <p className='mt-4 text-sm text-gray-500 dark:text-gray-400'>
                        Mantenimiento gratuito por 6 meses
                      </p>
                    </div>
                    <ul className='space-y-4'>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <IoMdAdd className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Seccion de carrito de compra.
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <IoMdAdd className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Sistema de administracion para los productos.
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <IoMdAdd className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Sistema de Login.
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <IoMdAdd className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Tiempo estimado de entrega a definir.
                        </p>
                      </li>
                    </ul>
                    <div>
                      <Link href=''>
                        <div className='mt-6 bg-transparent border cursor-pointer'>
                          <button className='text-white font-bold py-2 text-[20px]'>
                            Ver ejemplo
                          </button>
                        </div>
                      </Link>
                      <Link
                        target='blank'
                        href='https://api.whatsapp.com/send?phone=+543794077764&text=Hola,%20me%20gustaria%20hacer%20una%20consulta'
                      >
                        <div className='mt-3 h-16 flex justify-center bg-green-500 hover:bg-green-300 active:bg-green-800 cursor-pointer'>
                          <button className='font-bold py-2 text-[20px]'>
                            Contratar
                          </button>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className='border hover:shadow-lg hover:shadow-white p-4 mb-10 lg:mb-0 flex flex-col justify-between'>
                    <div>
                      <h2 className='text-3xl font-medium mb-5'>
                        Software personalizado
                      </h2>
                      <p className='mt-2 text-gray-500 text-sm'>
                        Sabemos que a veces necesitas algo único que te diferncie del resto.
                        Si buscas una solución específica para tu emprendimiento, esta es la opción correcta.
                      </p>
                      <div>
                        <p className='mt-3 text-2xl text-green-500 font-bold'>
                          Consultar costo
                        </p>
                      </div>
                      <p className='mt-4 text-sm text-gray-500 dark:text-gray-400'>
                        Mantenimiento gratuito por 5 meses.
                      </p>
                    </div>
                    <ul className='mt-6 space-y-4'>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <IoMdAdd className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Desarrollo a medida.
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <IoMdAdd className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Investigacion minima de mercado.
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <IoMdAdd className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Capacitacion a ti o tu equipo sobre el funcionamiento.
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <IoMdAdd className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Integracion a otros sistemas.
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <IoMdAdd className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Tiempo estimado de entrega a definir.
                        </p>
                      </li>
                    </ul>
                    <div>
                      <Link href=''>
                        <div className='mt-6 bg-transparent border cursor-pointer'>
                          <button className='text-white font-bold py-2 text-[20px]'>
                            Ver ejemplo
                          </button>
                        </div>
                      </Link>
                      <Link
                        target='blank'
                        href='https://api.whatsapp.com/send?phone=+543794077764&text=Hola,%20me%20gustaria%20hacer%20una%20consulta'
                      >
                        <div className='mt-3 h-16 flex justify-center bg-green-500 hover:bg-green-300 active:bg-green-800 cursor-pointer'>
                          <button className='font-bold py-2 text-[20px]'>
                            Contratar
                          </button>
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
      <section className='py-12 bg-[var(--tertiary-color)] max-w-7xl mx-auto text-center mb-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='lg:text-center'>
            <h2 className='text-base text-emerald-600 font-semibold tracking-wide uppercase'>
              Precios
            </h2>
            <p className='mt-2 text-3xl leading-8 font-bold tracking-tighter bg-clip-text bg-gradient-to-r text-[var(--primary-color)] sm:text-4xl'>
              Marketing Digital
            </p>
            <p className='mt-4 max-w-2xl mx-auto text-xl text-gray-500 lg:mx-auto font-bold'>
              Una vez que materialices tu visión digital, es fundamental darle
              visibilidad. Descubre nuestros paquetes de marketing diseñados
              para potenciar tu proyecto de manera significativa. ¡Haz que tu
              presencia sea notoria y atrae a nuevos clientes con nuestras
              estrategias especializadas!
            </p>
          </div>
          <div className='mt-10 pb-12 bg-white sm:pb-16'>
            <div className='relative'>
              <div className='absolute inset-0 h-1/2 bg-white' />
              <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='max-w-md mx-auto lg:max-w-5xl lg:grid lg:grid-cols-3 lg:gap-8'>
                  <div className='border border-[var(--primary-color)] hover:shadow-lg hover:shadow-[--primary-color] p-4 mb-10 lg:mb-0 flex flex-col justify-between'>
                    <div>
                      <h2 className='text-lg leading-6 font-medium text-[var(--primary-color)]'>
                        Basico
                      </h2>
                      <p className='mt-2 text-sm text-gray-500'>
                        Oferta basica para que pruebes nuestros servicios.
                      </p>
                      <p className='mt-3 text-5xl font-bold text-green-500'>
                        $5.000
                      </p>
                      <p className='mt-4 text-sm text-gray-500'>
                        Se abona mensualmente.
                      </p>
                    </div>
                    <ul className='mt-6 space-y-4'>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <FaHashtag className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500'>
                          2 dias en la semana, 5 posteos en instagram.
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <FaHashtag className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500'>
                          2 dias en la semana, 5 posteos en facebook.
                        </p>
                      </li>
                    </ul>
                    <div>
                      <Link
                        target='blank'
                        href='https://api.whatsapp.com/send?phone=+543794077764&text=Hola,%20me%20gustaria%20hacer%20una%20consulta'
                      >
                        <div className='mt-3 h-16 flex justify-center bg-green-500 hover:bg-green-300 active:bg-green-800 cursor-pointer'>
                          <button className='font-bold py-2 text-[20px] text-[var(--primary-color)]'>
                            Contratar
                          </button>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className='border border-[var(--primary-color)] hover:shadow-lg hover:shadow-[--primary-color] p-4 mb-10 lg:mb-0 flex flex-col justify-between'>
                    <div>
                      <h2 className='text-lg leading-6 font-medium text-[var(--primary-color)]'>
                        Intermedio
                      </h2>
                      <p className='mt-2 text-sm text-gray-500'>
                        Investigacion y evaluacion sobre tu competencia actual
                        para posteriores estrategias de marketing.
                      </p>
                      <p className='mt-3 text-5xl font-bold text-green-500'>
                        $10.000
                      </p>
                      <p className='mt-4 text-sm text-gray-500'>
                        Se abona mensualmente.
                      </p>
                    </div>
                    <ul className='mt-6 space-y-4'>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <FaHashtag className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500'>
                          Investigación continua de mercado y tendencias.
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <FaHashtag className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500'>
                          Estrategias personalizadas basadas en análisis
                          competitivo.
                        </p>
                      </li>
                    </ul>
                    <div>
                      <Link
                        target='blank'
                        href='https://api.whatsapp.com/send?phone=+543794077764&text=Hola,%20me%20gustaria%20hacer%20una%20consulta'
                      >
                        <div className='mt-3 h-16 flex justify-center bg-green-500 hover:bg-green-300 active:bg-green-800 cursor-pointer'>
                          <button className='font-bold py-2 text-[20px] text-[var(--primary-color)]'>
                            Contratar
                          </button>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className='border border-[var(--primary-color)] hover:shadow-lg hover:shadow-[--primary-color] p-4 mb-10 lg:mb-0 flex flex-col justify-between'>
                    <div>
                      <h2 className='text-lg leading-6 font-medium text-[var(--primary-color)]'>
                        Avanzado
                      </h2>
                      <p className='mt-2 text-sm text-gray-500'>
                        Control total sobre sus redes sociales.
                      </p>
                      <p className='mt-3 text-5xl font-bold text-green-500'>
                        $15.000
                      </p>
                      <p className='mt-4 text-sm text-gray-500'>
                        Se abona mensualmente.
                      </p>
                    </div>
                    <ul className='mt-6 space-y-4'>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <FaHashtag className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500'>
                          Contenido estratégico adaptado a tus necesidades.
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <FaHashtag className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500'>
                          Analítica avanzada de desempeño en redes sociales.
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <FaHashtag className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500'>
                          Soporte prioritario las 24/7.
                        </p>
                      </li>
                    </ul>
                    <div>
                      <Link
                        target='blank'
                        href='https://api.whatsapp.com/send?phone=+543794077764&text=Hola,%20me%20gustaria%20hacer%20una%20consulta'
                      >
                        <div className='mt-3 h-16 flex justify-center bg-green-500 hover:bg-green-300 active:bg-green-800 cursor-pointer'>
                          <button className='font-bold py-2 text-[20px] text-[var(--primary-color)]'>
                            Contratar
                          </button>
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

      <section className='py-12 mb-20 bg-[var(--primary-color)] max-w-7xl mx-auto text-center '>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='lg:text-center'>
            <h2 className='text-base text-emerald-600 font-semibold tracking-wide uppercase'>
              Precios
            </h2>
            <p className='mt-2 text-3xl leading-8 font-bold tracking-tighter bg-clip-text text-[var(--tertiary-color)] bg-gradient-to-r sm:text-4xl'>
              Marca Personal
            </p>
            <p className='mt-4 max-w-2xl mx-auto text-xl text-gray-500 lg:mx-auto font-bold'>
              Si ya cuentas con algun empredimiento online sabras lo importante
              que es tener presencia alli. Por ello te traemos asesoramiento
              sobre tendencias y como se situa tu marca en el mercado.
            </p>
          </div>
          <div className='mt-10 pb-12  sm:pb-16 '>
            <div className='relative'>
              <div className='absolute inset-0 h-1/2 ' />
              <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='max-w-md mx-auto lg:max-w-5xl lg:grid lg:grid-cols-3 lg:gap-8'>
                  <div className='border hover:shadow-lg hover:shadow-white p-4 mb-10 lg:mb-0 flex flex-col justify-between'>
                    <div>
                      <h2 className='text-lg leading-6 font-medium text-[var(--tertiary-color)]'>
                        Basico
                      </h2>
                      <p className='mt-2 text-sm text-gray-500'>
                        Oferta basica para que pruebes nuestros servicios.
                      </p>
                      <p className='mt-3 text-green-500 text-5xl font-bold '>
                        $50.000
                      </p>
                      <p className='mt-4 text-sm text-gray-500'>
                        Se abona mensualmente.
                      </p>
                    </div>
                    <ul className='mt-6 space-y-4'>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <FaHashtag className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-base text-gray-500'>
                          Analisis inicial basico.
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <FaHashtag className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500'>
                          Fundamentos de la Marca Personal.
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <FaHashtag className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500'>
                          Optimización de Perfiles en Redes Sociales.
                        </p>
                      </li>
                    </ul>
                    <div>
                      <Link
                        target='blank'
                        href='https://api.whatsapp.com/send?phone=+543794077764&text=Hola,%20me%20gustaria%20hacer%20una%20consulta'
                      >
                        <div className='mt-3 h-16 flex justify-center bg-green-500 hover:bg-green-300 active:bg-green-800 cursor-pointer'>
                          <button className='font-bold py-2 text-[20px]'>
                            Contratar
                          </button>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className='border hover:shadow-lg hover:shadow-white p-4 mb-10 lg:mb-0 flex flex-col justify-between'>
                    <div>
                      <h2 className='text-lg leading-6 font-medium text-[var(--tertiary-color)]'>
                        Intermedio
                      </h2>
                      <p className='mt-2 text-sm text-gray-500'>
                        Investigacion y evaluacion sobre tu competencia actual
                        para posteriores estrategias de marca.
                      </p>
                      <p className='mt-3 text-green-500 text-5xl font-bold '>
                        $100.000
                      </p>
                      <p className='mt-4 text-sm text-gray-500'>
                        Se abona mensualmente.
                      </p>
                    </div>
                    <ul className='mt-6 space-y-4'>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <FaHashtag className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-base text-gray-500'>
                          Segmentación de Audiencia.
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <FaHashtag className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500'>
                          Gestión de Reputación en Línea.
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <FaHashtag className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500'>
                          Networking Estratégico.
                        </p>
                      </li>
                    </ul>
                    <div>
                      <Link
                        target='blank'
                        href='https://api.whatsapp.com/send?phone=+543794077764&text=Hola,%20me%20gustaria%20hacer%20una%20consulta'
                      >
                        <div className='mt-3 h-16 flex justify-center bg-green-500 hover:bg-green-300 active:bg-green-800 cursor-pointer'>
                          <button className='font-bold py-2 text-[20px]'>
                            Contratar
                          </button>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className='border hover:shadow-lg hover:shadow-white p-4 mb-10 lg:mb-0 flex flex-col justify-between'>
                    <div>
                      <h2 className='text-lg leading-6 font-medium text-[var(--tertiary-color)]'>
                        Avanzado
                      </h2>
                      <p className='mt-2 text-sm text-gray-500'>
                        Control total sobre su marca.
                      </p>
                      <p className='mt-3 text-green-500 text-5xl font-bold '>
                        $150.000
                      </p>
                      <p className='mt-4 text-sm text-gray-500'>
                        Se abona mensualmente.
                      </p>
                    </div>
                    <ul className='mt-6 space-y-4'>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <FaHashtag className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-base text-gray-500'>
                          Estrategia de Marca Personal a Largo Plazo.
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <FaHashtag className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500'>
                          Monetización de la Marca Personal.
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <FaHashtag className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500'>
                          Mentoría Personalizada.
                        </p>
                      </li>
                    </ul>
                    <div>
                      <Link
                        target='blank'
                        href='https://api.whatsapp.com/send?phone=+543794077764&text=Hola,%20me%20gustaria%20hacer%20una%20consulta'
                      >
                        <div className='mt-3 h-16 flex justify-center bg-green-500 hover:bg-green-300 active:bg-green-800 cursor-pointer'>
                          <button className='font-bold py-2 text-[20px]'>
                            Contratar
                          </button>
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
  );
};

export default page;
