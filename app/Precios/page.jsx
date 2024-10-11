'use client'

import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { FaHashtag } from "react-icons/fa";
import { BotonContratarDesarrollo } from "../Componentes/BotonContratarDesarrollo";
import { BotonConsultarPlanes } from "../Componentes/BotonConsultarPlanes";
import { BotonVerEjemplo } from "../Componentes/BotonVerEjemplo";

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
            <BotonConsultarPlanes />
          </div>
        </div>
      </section>

      <section className='mx-auto text-center mb-20 bg-gradient-to-r from-blue-950 to-[#0E0F18]'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  py-12'>
          <div className='lg:text-center mb-10'>
            <h2 className='text-base text-[var(--secondary-color)] font-semibold tracking-wide uppercase'>
              Precios
            </h2>
            <p className='mt-2 text-3xl lg:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500'>
              Desarrollo de software
            </p>
            <p className='mt-4 max-w-2xl mx-auto text-xl text-gray-500 lg:mx-auto font-bold'>
              Selecciona la opcion que mejor se adapte a tus necesidades, desde
              una página sencilla hasta un sistema complejo. Si decides
              adquirir la opcion de un diseño junto con el desarrollo del mismo, te
              ofrecemos un precio único.
            </p>
          </div>
          <p className='mt-2 text-3xl lg:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500'>
            Tipos de desarrollos
          </p>
          <p className='mt-4 max-w-2xl mx-auto text-xl text-gray-500 lg:mx-auto font-bold'>
            Nuestros precios se adaptan a las necesidades de cada proyecto, garantizando siempre soluciones personalizadas y ajustadas a tus objetivos.
            Para brindarte mayor claridad, te presentamos a continuación un rango de precios transparente que refleja la calidad y flexibilidad de nuestros servicios.
          </p>
          <div className='mt-10 pb-12  sm:pb-16 '>
            <div className='relative'>
              <div className='absolute inset-0 h-1/2 ' />
              <div className='relative max-w-7xl mx-auto sm:px-6 lg:px-8'>
                <div className='max-w-md mx-auto lg:max-w-5xl lg:grid lg:grid-cols-3 lg:gap-8'>
                  <div className=' shadow-lg shadow-white p-4 mb-10 lg:mb-0 flex flex-col justify-between'>
                    <div>
                      <h2 className='text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-5'>
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
                      <BotonVerEjemplo />
                      <Link
                        target='blank'
                        href='https://api.whatsapp.com/send?phone=+543794077764&text=Hola,%20me%20gustaria%20hacer%20una%20consulta'
                      >
                        <BotonContratarDesarrollo />
                      </Link>
                    </div>
                  </div>

                  <div className=' shadow-lg shadow-white p-4 mb-10 lg:mb-0 flex flex-col justify-between'>
                    <div>
                      <h2 className='text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-5'>
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
                    <BotonVerEjemplo/>
                      <Link
                        target='blank'
                        href='https://api.whatsapp.com/send?phone=+543794077764&text=Hola,%20me%20gustaria%20hacer%20una%20consulta'
                      >
                        <BotonContratarDesarrollo />
                      </Link>
                    </div>
                  </div>

                  <div className=' shadow-lg shadow-white p-4 mb-10  lg:mb-0 flex flex-col justify-between'>
                    <div>
                      <h2 className='text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-5'>
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
                    <BotonVerEjemplo/>
                      <Link
                        target='blank'
                        href='https://api.whatsapp.com/send?phone=+543794077764&text=Hola,%20me%20gustaria%20hacer%20una%20consulta'
                      >
                        <BotonContratarDesarrollo />
                      </Link>
                    </div>
                  </div>

                  <div className=' shadow-lg shadow-white p-4 mb-10  lg:mb-0 flex flex-col justify-between'>
                    <div>
                      <h2 className='text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-5'>
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
                    <BotonVerEjemplo/>
                      <Link
                        target='blank'
                        href='https://api.whatsapp.com/send?phone=+543794077764&text=Hola,%20me%20gustaria%20hacer%20una%20consulta'
                      >
                        <BotonContratarDesarrollo />
                      </Link>
                    </div>
                  </div>


                  <div className=' shadow-lg shadow-white p-4 mb-10  lg:mb-0 flex flex-col justify-between'>
                    <div>
                      <h2 className='text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-5'>
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
                    <BotonVerEjemplo/>
                      <Link
                        target='blank'
                        href='https://api.whatsapp.com/send?phone=+543794077764&text=Hola,%20me%20gustaria%20hacer%20una%20consulta'
                      >
                        <BotonContratarDesarrollo />
                      </Link>
                    </div>
                  </div>

                  <div className=' shadow-lg shadow-white p-4 mb-10 lg:mb-0 flex flex-col justify-between'>
                    <div>
                      <h2 className='text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-5'>
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
                    <BotonVerEjemplo/>
                      <Link
                        target='blank'
                        href='https://api.whatsapp.com/send?phone=+543794077764&text=Hola,%20me%20gustaria%20hacer%20una%20consulta'
                      >
                        <BotonContratarDesarrollo />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-12  text-transparent bg-gradient-to-r from-white to-gray-500  mx-auto text-center mb-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
          <div className='lg:text-center'>
            <h2 className='text-base text-emerald-600 font-semibold tracking-wide uppercase'>
              Precios
            </h2>
            <p className='mt-2 text-3xl lg:text-5xl font-bold tracking-tighter leading-8 bg-clip-text bg-gradient-to-r text-[#0E0F18] sm:text-4xl'>
              Marketing Digital
            </p>
            <p className='mt-4 max-w-2xl mx-auto text-xl text-[#0E0F18] lg:mx-auto font-bold'>
              Una vez que materialices tu visión digital, es fundamental darle
              visibilidad. Descubre nuestros paquetes de marketing diseñados
              para potenciar tu proyecto de manera significativa. ¡Haz que tu
              presencia sea notoria y atrae a nuevos clientes con nuestras
              estrategias especializadas!
            </p>
          </div>
          <div className='mt-10 pb-12  sm:pb-16'>
            <div className='relative'>
              <div className='absolute inset-0 h-1/2 ' />
              <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='max-w-md mx-auto lg:max-w-5xl lg:grid lg:grid-cols-3 lg:gap-8'>
                  <div className=' shadow-lg shadow-[--primary-color] p-4 mb-10 lg:mb-0 flex flex-col justify-between'>
                    <div>
                      <h2 className=' leading-6  bg-clip-text text-transparent bg-gradient-to-r from-[#0e0f1852] to-[#0E0F18] text-3xl font-bold tracking-tighter '>
                        Basico
                      </h2>
                      <p className='mt-2 text-sm text-[#0E0F18] font-bold'>
                        Oferta basica para que pruebes nuestros servicios.
                      </p>
                      <p className='mt-3 text-2xl font-bold text-green-500'>
                        Consultar costo
                      </p>
                      <p className='mt-4 text-sm text-[#0E0F18] font-bold'>
                        Se abona mensualmente.
                      </p>
                    </div>
                    <ul className='mt-6 space-y-4'>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <FaHashtag className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-[#0E0F18] font-bold'>
                          Gestión básica en redes sociales para aumentar visibilidad y engagement.
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <FaHashtag className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-[#0E0F18] font-bold'>
                          Analisis para posicionamiento SEO basico.
                        </p>
                      </li>
                    </ul>
                    <div>
                      <Link
                        target='blank'
                        href='https://api.whatsapp.com/send?phone=+543794077764&text=Hola,%20me%20gustaria%20hacer%20una%20consulta'
                      >
                        <BotonContratarDesarrollo />
                      </Link>
                    </div>
                  </div>

                  <div className=' shadow-lg shadow-[--primary-color] p-4 mb-10 lg:mb-0 flex flex-col justify-between'>
                    <div>
                      <h2 className=' leading-6  bg-clip-text text-transparent bg-gradient-to-r from-[#0e0f1852] to-[#0E0F18] text-3xl font-bold tracking-tighter '>
                        Intermedio
                      </h2>
                      <p className='mt-2 text-sm text-[#0E0F18] font-bold'>
                        Investigacion y evaluacion sobre tu competencia actual
                        para posteriores estrategias de marketing.
                      </p>
                      <p className='mt-3 text-2xl font-bold text-green-500'>
                        Consultar costo
                      </p>
                      <p className='mt-4 text-sm text-[#0E0F18] font-bold'>
                        Se abona mensualmente.
                      </p>
                    </div>
                    <ul className='mt-6 space-y-4'>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <FaHashtag className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-[#0E0F18] font-bold'>
                          Análisis detallado de tu competencia
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <FaHashtag className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-[#0E0F18] font-bold'>
                          Estrategias de marketing adaptadas y en constante evolución
                        </p>
                      </li>
                    </ul>
                    <div>
                      <Link
                        target='blank'
                        href='https://api.whatsapp.com/send?phone=+543794077764&text=Hola,%20me%20gustaria%20hacer%20una%20consulta'
                      >
                        <BotonContratarDesarrollo />
                      </Link>
                    </div>
                  </div>

                  <div className=' shadow-lg shadow-[--primary-color] p-4 mb-10 lg:mb-0 flex flex-col justify-between'>
                    <div>
                      <h2 className=' leading-6  bg-clip-text text-transparent bg-gradient-to-r from-[#0e0f1852] to-[#0E0F18] text-3xl font-bold tracking-tighter '>
                        Avanzado
                      </h2>
                      <p className='mt-2 text-sm text-[#0E0F18] font-bold'>
                        Control total sobre sus redes sociales.
                      </p>
                      <p className='mt-3 text-2xl font-bold text-green-500'>
                        Consultar costo
                      </p>
                      <p className='mt-4 text-sm text-[#0E0F18] font-bold'>
                        Se abona mensualmente.
                      </p>
                    </div>
                    <ul className='mt-6 space-y-4'>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <FaHashtag className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-[#0E0F18] font-bold'>
                          Gestión completa de todas tus plataformas sociales
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <FaHashtag className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-[#0E0F18] font-bold'>
                          Creación y publicación de contenido diseñado a medida para maximizar impacto
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <FaHashtag className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-[#0E0F18] font-bold'>
                          Análisis avanzado de métricas clave y ajustes estratégicos basados en datos
                        </p>
                      </li>
                    </ul>
                    <div>
                      <Link
                        target='blank'
                        href='https://api.whatsapp.com/send?phone=+543794077764&text=Hola,%20me%20gustaria%20hacer%20una%20consulta'
                      >
                        <BotonContratarDesarrollo />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='mx-auto text-center mb-20 bg-gradient-to-r from-blue-950 to-[#0E0F18]'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  py-12'>
          <div className='lg:text-center mb-10'>
            <h2 className='text-base text-[var(--secondary-color)] font-semibold tracking-wide uppercase'>
              Precios
            </h2>
            <p className='mt-2 h-16 text-3xl lg:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500'>
              Diseño Digital
            </p>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 lg:mx-auto font-bold">
              Nuestro enfoque en diseño web está orientado a crear soluciones visuales que reflejen la esencia de tu marca.
              Simplificamos el proceso para que obtengas un sitio web personalizado, funcional y listo para captar clientes desde el primer clic.
            </p>
          </div>
          <div className='mt-10 pb-12  sm:pb-16 '>
            <div className='relative'>
              <div className='absolute inset-0 h-1/2 ' />
              <div className='relative max-w-7xl mx-auto sm:px-6 lg:px-8'>
                <div className='max-w-md mx-auto lg:max-w-5xl lg:grid lg:grid-cols-3 lg:gap-8'>
                  <div className=' shadow-lg shadow-white p-4 mb-10 lg:mb-0 flex flex-col justify-between'>
                    <div>
                      <h2 className='text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-5'>
                        Diseño Visual Básico
                      </h2>
                      <p className='mt-2 text-gray-500 text-sm mb-5' >
                        Empieza con un diseño estético que cubre las bases de tu identidad visual. Ideal para quienes buscan una imagen profesional sencilla.
                      </p>
                      <div className="mb-5">
                        <p className='mt-3 text-2xl text-green-500 font-bold'>
                          Consultar costo
                        </p>
                      </div>
                    </div>
                    <ul className='mt-6 space-y-4'>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <FaCheck className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Diseño de gráficos y elementos visuales básicos
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <FaCheck className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Propuesta de colores y tipografías alineadas con tu marca
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <FaCheck className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Diseño adaptado para redes sociales
                        </p>
                      </li>
                    </ul>
                    <div>
                    <BotonVerEjemplo/>
                      <Link
                        target='blank'
                        href='https://api.whatsapp.com/send?phone=+543794077764&text=Hola,%20me%20gustaria%20hacer%20una%20consulta'
                      >
                        <BotonContratarDesarrollo />
                      </Link>
                    </div>
                  </div>

                  <div className=' shadow-lg shadow-white p-4 mb-10 lg:mb-0 flex flex-col justify-between'>
                    <div>
                      <h2 className='text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-5'>
                        Diseño Gráfico Personalizado
                      </h2>
                      <p className='mt-2 text-gray-500 text-sm'>
                        Eleva tu identidad visual con un diseño más completo y adaptado a las necesidades de tu marca.
                      </p>
                      <div>
                        <p className='mt-3 text-2xl text-green-500 font-bold'>
                          Consultar costo
                        </p>
                      </div>
                    </div>
                    <ul className='mt-6 space-y-4'>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <IoMdAdd className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Creación de un sistema gráfico coherente (logos, paletas de colores, tipografías)
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <IoMdAdd className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Diseño de material promocional digital (banners, anuncios, etc.)
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <IoMdAdd className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Adaptaciones de diseño para múltiples plataformas y formatos (web, redes sociales, presentaciones)
                        </p>
                      </li>
                    </ul>
                    <div>
                    <BotonVerEjemplo/>
                      <Link
                        target='blank'
                        href='https://api.whatsapp.com/send?phone=+543794077764&text=Hola,%20me%20gustaria%20hacer%20una%20consulta'
                      >
                        <BotonContratarDesarrollo />
                      </Link>
                    </div>
                  </div>

                  <div className=' shadow-lg shadow-white p-4 mb-10  lg:mb-0 flex flex-col justify-between'>
                    <div className="mb-5">
                      <h2 className='text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-5'>
                        Diseño Visual Integral y Estratégico
                      </h2>
                      <p className='mt-2 text-gray-500 text-sm'>
                        Transforma la identidad de tu marca con un diseño visual integral, pensado estratégicamente para maximizar tu impacto en todos los canales.
                      </p>
                      <div>
                        <p className='mt-3 text-2xl text-green-500 font-bold'>
                          Consultar costo
                        </p>
                      </div>
                    </div>
                    <ul className='space-y-4'>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <IoMdAdd className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Diseño completo de identidad visual (logos, gráficos, paletas, estilo visual)
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <IoMdAdd className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Material gráfico avanzado para campañas digitales y offline
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <IoMdAdd className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Estrategia visual para asegurar coherencia de marca en todas las plataformas
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <IoMdAdd className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Asesoría continua para optimización de tu imagen visual
                        </p>
                      </li>
                    </ul>
                    <div>
                    <BotonVerEjemplo/>
                      <Link
                        target='blank'
                        href='https://api.whatsapp.com/send?phone=+543794077764&text=Hola,%20me%20gustaria%20hacer%20una%20consulta'
                      >
                        <BotonContratarDesarrollo />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-12  text-transparent bg-gradient-to-r from-white to-gray-500  mx-auto text-center mb-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
          <div className='lg:text-center'>
            <h2 className='text-base text-emerald-600 font-semibold tracking-wide uppercase'>
              Precios
            </h2>
            <p className='mt-2 text-3xl lg:text-5xl font-bold tracking-tighter leading-8 bg-clip-text bg-gradient-to-r text-[#0E0F18] sm:text-4xl'>
              Marca Personal
            </p>
            <p className='mt-4 max-w-2xl mx-auto text-xl text-[#0E0F18] lg:mx-auto font-bold'>
              Si ya cuentas con algun empredimiento online sabras lo importante
              que es tener presencia alli. Por ello te traemos asesoramiento
              sobre tendencias y como se situa tu marca en el mercado.
            </p>
          </div>
          <div className='mt-10 pb-12  sm:pb-16'>
            <div className='relative'>
              <div className='absolute inset-0 h-1/2 ' />
              <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='max-w-md mx-auto lg:max-w-5xl lg:grid lg:grid-cols-3 lg:gap-8'>
                  <div className=' shadow-lg shadow-[--primary-color] p-4 mb-10 lg:mb-0 flex flex-col justify-between'>
                    <div>
                      <h2 className=' leading-6 mb-5 bg-clip-text text-transparent bg-gradient-to-r from-[#0e0f1852] to-[#0E0F18] text-3xl font-bold tracking-tighter '>
                        Identidad Personal
                      </h2>
                      <p className='mt-2 text-sm text-[#0E0F18] font-bold'>
                        Creación de una identidad visual que refleje la personalidad y los valores de una persona, similar al branding de una empresa, pero centrado en individuos.
                      </p>
                      <p className='mt-3 text-2xl font-bold text-green-500'>
                        Consultar costo
                      </p>
                      <p className='mt-4 text-sm text-[#0E0F18] font-bold'>
                        Se abona mensualmente.
                      </p>
                    </div>
                    <ul className='mt-6 space-y-4'>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <FaHashtag className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-[#0E0F18] font-bold'>
                          Diseño de logotipo personal
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <FaHashtag className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-[#0E0F18] font-bold'>
                          Definición de paleta de colores y tipografías
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <FaHashtag className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-[#0E0F18] font-bold'>
                          Manual de estilo visual para su uso en redes sociales, sitios web, y material de presentación
                        </p>
                      </li>
                    </ul>
                    <div>
                      <Link
                        target='blank'
                        href='https://api.whatsapp.com/send?phone=+543794077764&text=Hola,%20me%20gustaria%20hacer%20una%20consulta'
                      >
                        <BotonContratarDesarrollo />
                      </Link>
                    </div>
                  </div>

                  <div className=' shadow-lg shadow-[--primary-color] p-4 mb-10 lg:mb-0 flex flex-col justify-between'>
                    <div>
                      <h2 className=' leading-6  mb-5 bg-clip-text text-transparent bg-gradient-to-r from-[#0e0f1852] to-[#0E0F18] text-3xl font-bold tracking-tighter '>
                        Presentaciones Personales
                      </h2>
                      <p className='mt-2 text-sm text-[#0E0F18] font-bold'>
                        Diseño visual de presentaciones para conferencias, reuniones, o eventos, donde la persona quiera destacar su marca personal.
                      </p>
                      <p className='mt-3 text-2xl font-bold text-green-500'>
                        Consultar costo
                      </p>
                      <p className='mt-4 text-sm text-[#0E0F18] font-bold'>
                        Se abona mensualmente.
                      </p>
                    </div>
                    <ul className='mt-6 space-y-4'>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <FaHashtag className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-[#0E0F18] font-bold'>
                          Diseño de presentaciones a medida, con gráficos y visuales personalizados
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <FaHashtag className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-[#0E0F18] font-bold'>
                          Integración de elementos que refuercen la marca personal (colores, logotipos, etc.)
                        </p>
                      </li>
                    </ul>
                    <div>
                      <Link
                        target='blank'
                        href='https://api.whatsapp.com/send?phone=+543794077764&text=Hola,%20me%20gustaria%20hacer%20una%20consulta'
                      >
                        <BotonContratarDesarrollo />
                      </Link>
                    </div>
                  </div>

                  <div className=' shadow-lg shadow-[--primary-color] p-4 mb-10 lg:mb-0 flex flex-col justify-between'>
                    <div>
                      <h2 className=' leading-6 h-10  bg-clip-text text-transparent bg-gradient-to-r from-[#0e0f1852] to-[#0E0F18] text-3xl font-bold tracking-tighter '>
                        Biografía Digital
                      </h2>
                      <p className='mt-2 text-sm text-[#0E0F18] font-bold'>
                        Diseño de una biografía visual o multimedia que represente de manera impactante la trayectoria y logros del cliente.
                      </p>
                      <p className='mt-3 text-2xl font-bold text-green-500'>
                        Consultar costo
                      </p>
                      <p className='mt-4 text-sm text-[#0E0F18] font-bold'>
                        Se abona mensualmente.
                      </p>
                    </div>
                    <ul className='mt-6 space-y-4'>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <FaHashtag className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-[#0E0F18] font-bold'>
                          Diseño de secciones visuales para biografías personales en sitios web o perfiles sociales
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <FaHashtag className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-[#0E0F18] font-bold'>
                          Creación de gráficos, imágenes, y textos que refuercen la historia personal del cliente
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <FaHashtag className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-[#0E0F18] font-bold'>
                          Integración con portales de networking como LinkedIn
                        </p>
                      </li>
                    </ul>
                    <div>
                      <Link
                        target='blank'
                        href='https://api.whatsapp.com/send?phone=+543794077764&text=Hola,%20me%20gustaria%20hacer%20una%20consulta'
                      >
                        <BotonContratarDesarrollo />
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
