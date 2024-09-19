import React from "react";
import Link from "next/link";
import { FaHashtag } from "react-icons/fa";
import { IoMegaphoneOutline } from "react-icons/io5";
import { GrAnalytics } from "react-icons/gr";
import { MdOutlineDesignServices } from "react-icons/md";
import { LuSearchCheck } from "react-icons/lu";

const page = () => {
  return (
    <section className='w-full text-white transition-all ease-in-out duration-500'>
      <section className='pt-32 pb-10 md:pt-36 lg:pt-40 xl:pt-44 transition-all ease-in-out duration-500 max-w-7xl mx-auto text-center'>
        <div className='md:flex  px-4 md:px-6 text-center gap-10 md:justify-center'>
          <h1 className='flex text-center items-center justify-center text-3xl lg:text-6xl font-bold tracking-tighter   bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-10'>
            Haz crecer tus redes sociales
          </h1>
          <div className='flex flex-col items-center'>
            <p className='mx-auto max-w-[700px] text-gray-300 text-[20px] text-center mb-4'>
              <bg className='custom-bg'>¡Impulsá tu presencia digital!</bg>
              Ofrecemos planes accesibles, efectivos y adaptados a tus
              necesidades para ayudarte a
              <bg className='custom-bg'>
                destacar y conectar con tu audiencia
              </bg>
              . ¡No esperes más!
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
        <div className='container mx-auto px-4 md:px-6'>
          <div className='space-y-8 text-center bg-[var(--primary-color)] p-6'>
            <h4 className='text-base text-[var(--secondary-color)] font-semibold tracking-wide uppercase'>
              MARKETING
            </h4>
            <h2 className='mt-2 text-3xl leading-8 font-bold tracking-tighter bg-clip-tex sm:text-4xl'>
              Soluciones a medida
            </h2>
            <p className='mt-4 max-w-3xl mx-auto text-xl text-gray-500 lg:mx-auto font-bold'>
              Nuestras soluciones están hechas a medida para impulsar tu
              presencia y resultados. Desde analítica avanzada y estrategias
              publicitarias hasta creación de contenido atractivo y optimización
              SEO.
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center align-middle p-6'>
              <div className='p-6 flex items-center align-center flex-col border hover:shadow-white hover:shadow-md'>
                <GrAnalytics className='h-10 w-10 text-green-500' />
                <h3 className='text-lg leading-6 font-medium'>Analítica</h3>
                <p className='max-w-[200px] mt-2 text-gray-500 text-sm'>
                  Obtén valiosos insights sobre tu audiencia y optimizá tus
                  esfuerzos de marketing.
                </p>
              </div>

              <div className='p-6 flex items-center align-center flex-col border hover:shadow-white hover:shadow-md'>
                <IoMegaphoneOutline className='h-10 w-10 text-green-500' />
                <h3 className='text-lg leading-6 font-medium'>Publicidad</h3>
                <p className='max-w-[200px] mt-2 text-gray-500 text-sm'>
                  Alcanza a tu público objetivo a través de campañas
                  publicitarias estratégicas.
                </p>
              </div>

              <div className='p-6 flex items-center align-center flex-col border hover:shadow-white hover:shadow-md'>
                <MdOutlineDesignServices className='h-10 w-10 text-green-500' />
                <h3 className='text-lg leading-6 font-medium'>
                  Creación de Contenido
                </h3>
                <p className='max-w-[200px] mt-2 text-gray-500 text-sm'>
                  Involucra a tu audiencia con contenido atractivo y de alta
                  calidad.
                </p>
              </div>

              <div className='p-6 flex items-center align-center flex-col border hover:shadow-white hover:shadow-md'>
                <LuSearchCheck className='h-10 w-10 text-green-500' />
                <h3 className='text-lg leading-6 font-medium'>SEO</h3>
                <p className='max-w-[200px] mt-2 text-gray-500 text-sm'>
                  Optimiza tu presencia en línea y genera más tráfico orgánico.
                </p>
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
    </section>
  );
};

export default page;
