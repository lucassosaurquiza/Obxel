import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { FaHashtag } from "react-icons/fa";

const Precios = () => {
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
          <div className='lg:text-center'>
            <h2 className='text-base text-[var(--secondary-color)] font-semibold tracking-wide uppercase'>
              Precios
            </h2>
            <p className='mt-2 text-3xl leading-8 font-bold tracking-tighter bg-clip-tex sm:text-4xl'>
              Desarrollo Web
            </p>
            <p className='mt-4 max-w-2xl mx-auto text-xl text-gray-500 lg:mx-auto font-bold'>
              Selecciona el plan que mejor se adapte a tus necesidades, desde
              una página sencilla hasta un comercio electrónico. Si decides
              adquirir el plan de diseño junto con otro plan de página web, te
              ofrecemos un precio único.
            </p>
          </div>
          <div className='mt-10 pb-12 bg-[var(--primary-color)] sm:pb-16 '>
            <div className='relative'>
              <div className='absolute inset-0 h-1/2 ' />
              <div className='relative max-w-7xl mx-auto sm:px-6 lg:px-8'>
                <div className='max-w-md mx-auto lg:max-w-5xl lg:grid lg:grid-cols-3 lg:gap-8'>
                  <div className='border hover:shadow-lg hover:shadow-white p-4 mb-10 lg:mb-0 flex flex-col justify-between'>
                    <div>
                      <h2 className='text-lg leading-6 font-medium'>
                        Diseño Web
                      </h2>
                      <p className='mt-2 text-gray-500 text-sm'>
                        Diseñamos desde 0 tu sitio web o podes elegir una de
                        nuestras plantillas que más se adapte a lo que buscas,
                        lo tomamos como ejemplo y diseñamos a tu manera.
                      </p>
                      <div>
                        <p className='mt-3 text-2xl text-green-500 font-bold'>
                          USD $500
                        </p>
                        <p className='mt-3 text-2xl text-green-500 font-bold'>
                          ARS $300.000
                        </p>
                      </div>
                      <p className='mt-4 text-sm text-gray-500 dark:text-gray-400'>
                        Gratis para siempre.
                      </p>
                    </div>
                    <ul className='mt-6 space-y-4'>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <FaCheck className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Prototipo y presentacion en figma.
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <FaCheck className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Diseño a medida.
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <FaCheck className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Tiempo estimado de entrega 3 meses.
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
                      <h2 className='text-lg leading-6 font-medium'>
                        Landing Page
                      </h2>
                      <p className='mt-2 text-gray-500 text-sm'>
                        Página de una sola vista. Ideal para perfiles digitales,
                        empresas que estan iniciando, empresas chicas y
                        portafolios.
                      </p>
                      <div>
                        <p className='mt-3 text-2xl text-green-500 font-bold'>
                          USD $100
                        </p>
                        <p className='mt-3 text-2xl text-green-500 font-bold'>
                          ARS $60.000
                        </p>
                      </div>
                      <p className='mt-4 text-sm text-gray-500 dark:text-gray-400'>
                        Soporte gratuito por un año.
                      </p>
                    </div>
                    <ul className='mt-6 space-y-4'>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <FaCheck className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Página de una sola vista.
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
                          Integración con redes sociales más ícono de whatsapp.
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <FaCheck className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Tiempo estimado de entrega 2 semanas.
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
                      <h2 className='text-lg leading-6 font-medium'>
                        Web Personalizada
                      </h2>
                      <p className='mt-2 text-gray-500 text-sm'>
                        Si sos una empresa con experiencia (entre 1 a 3 años de
                        servicio) que quiera ingresar al ámbito tecnológico esta
                        es tu opción.
                      </p>
                      <div>
                        <p className='mt-3 text-2xl text-green-500 font-bold'>
                          USD $300
                        </p>
                        <p className='mt-3 text-2xl text-green-500 font-bold'>
                          ARS $120.000
                        </p>
                      </div>
                      <p className='mt-4 text-sm text-gray-500 dark:text-gray-400'>
                        Lo pagas una sola vez.
                      </p>
                    </div>
                    <ul className='mt-6 space-y-4'>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <FaCheck className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Incluye todo lo de la "Landing Page".
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <IoMdAdd className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          De 1 a 5 páginas navegables.
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
                          Formulario email.
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <IoMdAdd className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Tiempo de entrega estimada 1 mes.
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
                      <h2 className='text-lg leading-6 font-medium'>
                        Web Avanzada
                      </h2>
                      <p className='mt-2 text-gray-500 text-sm'>
                        Empresas grandes (mas de 20 empleados), plataformas con
                        comercio electronico, sitio de comunidades,
                        instituciones educativas, medios de comunicacion y
                        entretenimiento, entre otros. Estas son algunas de las
                        instituciones a las cuales podria interesarle
                      </p>
                      <div>
                        <p className='mt-3 text-2xl text-green-500 font-bold'>
                          USD $600
                        </p>
                        <p className='mt-3 text-2xl text-green-500 font-bold'>
                          ARS $200.000
                        </p>
                      </div>
                      <p className='mt-4 text-sm text-gray-500 dark:text-gray-400'>
                        .
                      </p>
                    </div>
                    <ul className='mt-6 space-y-4'>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <FaCheck className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Incluye todo lo de la "Web Personalizada".
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <IoMdAdd className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          De 1 a 10 páginas navegables.
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
                          Tiempo estimado de entrega 2 meses.
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
                      <h2 className='text-lg leading-6 font-medium'>
                        Tienda Online
                      </h2>
                      <p className='mt-2 text-gray-500 text-sm'>
                        Esta opcion es para ti si sos: emprendedor, empresa
                        fisica con un buen volumen de empleados, profesionales
                        de las distintas areas (artistas, entrenadores,
                        profesionales de la salud, psicologos, consultores,
                        entre otros).
                      </p>
                      <div>
                        <p className='mt-3 text-2xl text-green-500 font-bold'>
                          USD $1000
                        </p>
                        <p className='mt-3 text-2xl text-green-500 font-bold'>
                          ARS $300.000
                        </p>
                      </div>
                      <p className='mt-4 text-sm text-gray-500 dark:text-gray-400'>
                        Vende lo que necesites a traves de la web.
                      </p>
                    </div>
                    <ul className='mt-6 space-y-4'>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <FaCheck className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Incluye todo lo de la "Web Personalizada", menos el
                          tiempo de entrega.
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <IoMdAdd className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Hasta 15 paginas navegables.
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <IoMdAdd className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Panel de Administracion.
                        </p>
                      </li>
                      <li className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <IoMdAdd className='h-6 w-6 text-green-500' />
                        </div>
                        <p className='ml-3 text-left text-gray-500 dark:text-gray-400'>
                          Tiempo estimado de entrega de 3 a 6 meses.
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

export default Precios;
