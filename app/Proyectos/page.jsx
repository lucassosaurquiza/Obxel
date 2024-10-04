"use client";
import React from "react";
import Link from "next/link";
import { RiGlobalLine } from "react-icons/ri";
import { TbClock24 } from "react-icons/tb";
import { MdAttachMoney } from "react-icons/md";
import { IoMdHappy } from "react-icons/io";

const page = () => {
  return (
    <>
      <section className='w-full text-white transition-all ease-in-out duration-500'>
        <section className='pt-32 pb-10 md:pt-36 lg:pt-40 xl:pt-44 transition-all ease-in-out duration-500 max-w-7xl mx-auto text-center'>
          <div className='md:flex  px-4 md:px-6 text-center gap-10 md:justify-center'>
            <h1 className='flex text-center items-center justify-center text-3xl lg:text-6xl font-bold tracking-tighter   bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-10'>
              Transformando ideas en realidad
            </h1>
            <div className='flex flex-col items-center'>
              <p className='mx-auto max-w-[700px] text-gray-300 text-[20px] text-center mb-4'>
                Cumplí tus ideas y potenciá tu negocio físico con
                <bg className='custom-bg'> soluciones digitales únicas </bg>
                que conectan con más clientes. ¡Hacé realidad tu proyecto y
                expandí tu alcance hoy mismo!
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
                PROYECTOS
              </h4>
              <h2 className='mt-2 text-3xl leading-8 font-bold tracking-tighter bg-clip-text sm:text-4xl'>
                Impulsá tu crecimiento
              </h2>
              <p className='mt-4 max-w-3xl mx-auto text-xl text-gray-500 lg:mx-auto font-bold'>
                Desde alcanzar un público global y ofrecer disponibilidad 24/7,
                hasta reducir costos y mejorar la experiencia del cliente, cada
                una de estas estrategias te brinda las herramientas necesarias
                para tomar decisiones informadas y escalar rápidamente.
                Aprovecha nuestros servicios y lleva tu empresa al siguiente
                nivel.
              </p>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center align-middle p-6'>
                <div className='h-full p-6 flex items-center align-center flex-col border hover:shadow-white hover:shadow-md'>
                  <RiGlobalLine className='h-10 w-10 text-green-500' />
                  <h3 className='text-lg leading-6 font-medium'>
                    Alcance Global
                  </h3>
                  <p className='max-w-[200px] mt-2 text-gray-500 text-sm'>
                    Llega a clientes en cualquier parte del mundo.
                  </p>
                </div>

                <div className='h-full p-6 flex items-center align-center flex-col border hover:shadow-white hover:shadow-md'>
                  <TbClock24 className='h-10 w-10 text-green-500' />
                  <h3 className='text-lg leading-6 font-medium'>
                    Disponibilidad 24/7
                  </h3>
                  <p className='max-w-[200px] mt-2 text-gray-500 text-sm'>
                    Tu negocio siempre abierto para tus clientes.
                  </p>
                </div>

                <div className='h-full p-6 flex items-center align-center flex-col border hover:shadow-white hover:shadow-md'>
                  <MdAttachMoney className='h-10 w-10 text-green-500' />
                  <h3 className='text-lg leading-6 font-medium'>
                    Menores Costos
                  </h3>
                  <p className='max-w-[200px] mt-2 text-gray-500 text-sm'>
                    Reduce costos operativos con soluciones digitales.
                  </p>
                </div>

                <div className='h-full p-6 flex items-center align-center flex-col border hover:shadow-white hover:shadow-md'>
                  <IoMdHappy className='h-10 w-10 text-green-500' />
                  <h3 className='text-lg leading-6 font-medium'>
                    Mejor Experiencia
                  </h3>
                  <p className='max-w-[200px] mt-2 text-gray-500 text-sm'>
                    Ofrece una experiencia personalizada y ágil.
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
                Proyectos
              </h2>
              <p className='mt-2 text-3xl leading-8 font-bold tracking-tighter bg-clip-text bg-gradient-to-r text-[var(--primary-color)] sm:text-4xl'>
                ¿No sabes como diseñar tu web?
              </p>
              <p className='mt-4 max-w-2xl mx-auto text-xl text-gray-500 lg:mx-auto font-bold'>
                Elegi una, nosotros nos encargamos del resto.
              </p>
            </div>
            <div className='mt-10 pb-12 bg-white sm:pb-16'>
              <div className='relative'>
                <div className='absolute inset-0 h-1/2 bg-white' />
                <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    <Link href='https://www.cuatrocarnes.com/' target='blank'>
                      <div className='group flex flex-col p-4 border hover:border-none border-gray-200 shadow-sm bg-transparent transition-transform hover:scale-105 relative overflow-hidden'>
                        <div className='absolute inset-0 bg-gradient-to-t from-gray-300 via-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                        <h3
                          className='text-2xl  relative mt-4 mx-auto max-w-[700px] bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 md:text-xl/relaxed  group-hover:underline
                              font-bold opacity-100 group-hover:opacity-0 transition-opacity duration-500'
                        >
                          Tienda Online
                        </h3>
                        <img
                          alt='Template 1'
                          className='relative my-10 overflow-hidden rounded-lg object-scale-down object-center w-full'
                          height='200'
                          src='/plantilla-cuatro-carnes.png'
                          width='200'
                        />
                        <p className='relative mb-10 text-gray-300 lg:text-sm text-center font-bold opacity-100 group-hover:opacity-0 transition-opacity duration-500'>
                          "Cuatro carnes"
                        </p>
                      </div>
                    </Link>
                    <Link
                      href='https://landing-venta-de-cursos.vercel.app/'
                      target='blank'
                    >
                      <div className='group flex flex-col p-4 border hover:border-none border-gray-200 shadow-sm bg-transparent transition-transform hover:scale-105 relative overflow-hidden'>
                        <div className='absolute inset-0 bg-gradient-to-t from-pink-300 via-pink-800 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                        <h3
                          className='text-2xl  relative mt-4 mx-auto max-w-[700px] bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 md:text-xl/relaxed  group-hover:underline
                              font-bold opacity-100 group-hover:opacity-0 transition-opacity duration-500'
                        >
                          Web Avanzada
                        </h3>
                        <img
                          alt='Template 1'
                          className='relative my-10 overflow-hidden rounded-lg object-scale-down object-center w-full'
                          height='200'
                          src='/plantilla-landing-cursos.png'
                          width='200'
                        />
                        <p className='relative mb-10 text-gray-300 lg:text-sm text-center font-bold opacity-100 group-hover:opacity-0 transition-opacity duration-500'>
                          "Landing wiht josefina"
                        </p>
                      </div>
                    </Link>
                    <Link
                      href='https://alize-landing-page.vercel.app/'
                      target='blank'
                    >
                      <div className='group flex flex-col p-4 border hover:border-none border-gray-200 shadow-sm bg-transparent transition-transform hover:scale-105 relative overflow-hidden'>
                        <div className='absolute inset-0 bg-gradient-to-t from-red-300 via-red-800 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                        <h3
                          className='text-2xl  relative mt-4 mx-auto max-w-[700px] bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 md:text-xl/relaxed  group-hover:underline
                              font-bold opacity-100 group-hover:opacity-0 transition-opacity duration-500'
                        >
                          Landing con 3 vistas
                        </h3>
                        <img
                          alt='Template 1'
                          className='relative my-10 overflow-hidden rounded-lg object-scale-down object-center w-full'
                          height='200'
                          src='/plantilla-alize-landing.png'
                          width='200'
                        />
                        <p className='relative mb-10 text-gray-300 lg:text-sm text-center font-bold opacity-100 group-hover:opacity-0 transition-opacity duration-500'>
                          "Alize viajes y turismo"
                        </p>
                      </div>
                    </Link>
                    <Link
                      href='https://maquetado-sushi.vercel.app/'
                      target='blank'
                    >
                      <div className='group flex flex-col p-4 border hover:border-none border-gray-200 shadow-sm bg-transparent transition-transform hover:scale-105 relative overflow-hidden'>
                        <div className='absolute inset-0 bg-gradient-to-t from-blue-300 via-blue-800 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                        <h3
                          className='text-2xl  relative mt-4 mx-auto max-w-[700px] bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 md:text-xl/relaxed  group-hover:underline
                              font-bold opacity-100 group-hover:opacity-0 transition-opacity duration-500'
                        >
                          Diseño Web
                        </h3>
                        <img
                          alt='Template 1'
                          className='relative my-10 overflow-hidden rounded-lg object-scale-down object-center w-full'
                          height='200'
                          src='/plantilla-sushi.png'
                          width='200'
                        />
                        <p className='relative mb-10 text-gray-300 lg:text-sm text-center font-bold opacity-100 group-hover:opacity-0 transition-opacity duration-500'>
                          "Sushi"
                        </p>
                      </div>
                    </Link>
                    <Link
                      href='https://esi-dashboard-ten.vercel.app/login'
                      target='blank'
                    >
                      <div className='group flex flex-col p-4 border hover:border-none border-gray-200 shadow-sm bg-transparent transition-transform hover:scale-105 relative overflow-hidden'>
                        <div className='absolute inset-0 bg-gradient-to-t from-gray-800 via-gray-300 to-gray opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                        <h3
                          className='text-2xl  relative mt-4 mx-auto max-w-[700px] bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 md:text-xl/relaxed  group-hover:underline
                              font-bold opacity-100 group-hover:opacity-0 transition-opacity duration-500'
                        >
                          Programa Personalizado
                        </h3>
                        <img
                          alt='Template 1'
                          className='relative my-10 overflow-hidden rounded-lg object-scale-down object-center w-full'
                          height='200'
                          src='/Programa-Institucion-Educativa.png'
                          width='200'
                        />
                        <p className='relative mb-10 text-gray-300 lg:text-sm text-center font-bold opacity-100 group-hover:opacity-0 transition-opacity duration-500'>
                          "New English School"
                        </p>
                      </div>
                    </Link>
                    <Link
                      href='https://www.lacocinadeedu.com.ar/'
                      target='blank'
                    >
                      <div className='group flex flex-col p-4 border hover:border-none border-gray-200 shadow-sm bg-transparent transition-transform hover:scale-105 relative overflow-hidden'>
                        <div className='absolute inset-0 bg-gradient-to-t from-orange-800 via-orange-300 to-gray opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                        <h3
                          className='text-2xl  relative mt-4 mx-auto max-w-[700px] bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 md:text-xl/relaxed  group-hover:underline
                              font-bold opacity-100 group-hover:opacity-0 transition-opacity duration-500'
                        >
                          Landing con 3 vistas
                        </h3>
                        <img
                          alt='Template 1'
                          className='relative my-10 overflow-hidden rounded-lg object-scale-down object-center w-full'
                          height='200'
                          src='/plantilla-edu.png'
                          width='200'
                        />
                        <p className='relative mb-10 text-gray-300 lg:text-sm text-center font-bold opacity-100 group-hover:opacity-0 transition-opacity duration-500'>
                          "La Cocina de Edu"
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>

    // <Mantenimiento />
  );
};

export default page;
