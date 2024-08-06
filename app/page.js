'use client'

import Link from "next/link";

import { MdBrandingWatermark } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";
import SeccionPlantillas from "./Componentes/SeccionPlantillas";
import CarrouselTextoVertical from "./Componentes/CarrouselTexto";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Home() {

  const carouselItems = [
    {
      style: {
        color: 'gray',
        fontSize: '40px',
        textAlign: 'center',
        backgroundImage: 'linear-gradient(to right, #fff, #999EA7)',
        WebkitBackgroundClip: 'text', // Propiedad específica para Webkit (Safari y Chrome)
        color: 'transparent', // Hacer el color del texto transparente
        textFillColor: 'transparent', // Propiedad específica para Firefox
        display: 'inline-block', // Permitir que el fondo se aplique solo al texto
      },
      html: '<h1><strong>Avanzado</strong></h1><h1><strong>Intermedio</strong></h1><h1><strong>Basico</strong></h1>'
    },
    // ... otros elementos
  ];

  return (
    <section className="w-full  text-white transition-all ease-in-out duration-500 pt-20 md:pt-24 px-4 ">
      <section className="w-full py-10 md:py-16 xl:py-14 transition-all ease-in-out duration-500 flex  justify-center animate-slideInLeft">
        <div className="md:flex  max-w-7xl gap-10">
          <div className="mb-10 md:mb-0">
            <h1 className="text-3xl font-bold tracking-tighter mb-12 lg:text-4xl bg-gradient-to-r from-emerald-500 via-emerald-300 to-emerald-400 text-transparent bg-clip-text  items-center flex justify-center text-center">
              Digitalizá tu idea y transformala en software
            </h1>
            <p className="text-gray-300 lg:text-xl text-center font-bold mb-12">
              Diseños Web - Landing Page - Web Personalizadas - Web Avanzadas - Tiendas Online - Publicidades - Posicionamiento - Asesoramiento de Marca
            </p>
            <p className="text-3xl text-center mb-12 bg-gradient-to-r from-emerald-500 via-emerald-300 to-emerald-400 text-transparent bg-clip-text font-bold lg:text-4xl">
              Creá, personalizá, posicioná y competí en línea
            </p>
            <div className="flex justify-center text-center ">
              <Link target="blank" href='https://api.whatsapp.com/send?phone=+543794077764&text=Hola,%20me%20gustaria%20hacer%20una%20consulta'>
                <button className="font-bold text-white bg-transparent border  border-gray-200 opacity-50 hover:opacity-100 hover:bg-gradient-to-r hover:from-emerald-300 hover:via-emerald-800 hover:to-emerald-500 rounded-md px-4 py-2 transform transition-all duration-500 hover:scale-125">
                  Hablamos
                </button>
              </Link>
            </div>
          </div>
          <div className=" w-full">
            <h2 className="justify-center text-center flex text-lg font-bold tracking-tighter sm:text-xl xl:text-3xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-5">Ultimo proyecto realizado</h2>
            <div className="">
              <div className="item uno">
                <div>
                  <p className="text-gray-300 md:text-md font-bold justify-center flex mb-5 text-center">Programa Personalizado - "Institucion Educativa - New English School" - 30/07/2024</p>
                </div>
                <div className="">
                  <Link aria-label="Image link to a specified place" href="https://esi-dashboard-ten.vercel.app/login" target="blank">
                    <div className="group">
                      <Image
                        alt="Image Description"
                        className="rounded-md transform transition-all duration-500 ease-in-out group-hover:scale-90  mb-5"
                        src="/Programa-Institucion-Educativa.png"
                        layout="responsive"
                        width="50"
                        height="50"
                      />
                    </div>
                  </Link>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full items-center flex justify-center">
        <div className="md:flex max-w-7xl gap-5 mb-20 ">
          <div className="w-full p-3 rounded-md mb-5 md:mb-0 " style={{ background: 'linear-gradient(to right,#004B3A, #4ED09E )' }}>
            <div className="flex items-center justify-around space-x-4 mb-8">
              <h2 className="md:text-3xl text-2xl text-gray-300 font-bold text-center">
                Conoce nuestros
                <span className="text-[#0E0F18] ml-2 font-bold">precios</span>
              </h2>
              <Link href="/Precios">
                <button className="flex items-center font-bold text-gray-300 hover:text-[#0E0F18] transform transition duration-300 hover:scale-105 gap-2">
                  Ver
                  <FaArrowRightLong />
                </button>
              </Link>
            </div>

            <div className="flex gap-5 mb-5">
              <div className="rounded-md items-center flex p-3 bg-[#0E0F18] h-10 max-w-16">
                <MdBrandingWatermark />
              </div>
              <div>
                <p className="font-bold text-gray-300">
                  +20 personas construyeron su perfil digital con nosotros
                </p>
                <p className="text-gray-300 ">
                  ¿Que estas esperando para digitalizar tu profesion?, le damos soporte gratuito a tu pagina por 6 meses.
                </p>
              </div>
            </div>
            <div className="flex gap-5 mb-5">
              <div className="rounded-md items-center flex p-3 bg-[#0E0F18] h-10 max-w-16">
                <FaDollarSign />
              </div>
              <div>
                <p className="font-bold text-gray-300">
                  Paga una sola vez, tenelo para siempre
                </p>
                <p className="text-gray-300 ">
                  Nuestros precios son súper accesibles. Te ofrecemos la opción de pagarlos en cómodas cuotas, sin intereses.
                </p>
              </div>
            </div>
            <div className="flex gap-5 mb-5">
              <div className="rounded-md items-center flex p-3 bg-[#0E0F18] h-10 max-w-16">
                <FaHeart />
              </div>
              <div>
                <p className="font-bold text-gray-300">
                  Asesoria sobre el estado de tu sitio web.
                </p>
                <p className="text-gray-300 ">
                  Hacemos analisis profundo sobre como se encuentra tu comercio en el mercado digital y en cuanto a su competencia.
                </p>
              </div>
            </div>
            <div className="flex mb-5">
              <div className="md:flex">
                <p className="mr-2 mb-3 md:mb-0 text-gray-300">
                  Contratados por
                </p>
                <div className="flex gap-1">
                  <Link target="blank" href='https://www.lacocinadeedu.com.ar/'>
                    <img className="h-8 w-8 rounded-full transform transition-transform hover:scale-150" src="nuevo-logo.png" alt="" />
                  </Link>
                  <Link target="blank" href='https://landing-venta-de-cursos.vercel.app/'>
                    <img className="h-8 w-8 rounded-full transform transition-transform hover:scale-150" src="josefina.webp" alt="" />
                  </Link>
                  <Link target="blank" href='https://alize-landing-page.vercel.app/'>
                    <img className="h-8 w-8 rounded-full transform transition-transform hover:scale-150" src="alize-white.jpg" alt="" />
                  </Link>
                  <Link target="blank" href='https://www.cuatrocarnes.com/'>
                    <img className="h-8 w-8 rounded-full transform transition-transform hover:scale-150 bg-white" src="cuatro-carnes.svg" alt="" />
                  </Link>
                  <Link target="blank" href='https://esi-dashboard-ten.vercel.app/login'>
                    <img className="h-8 w-8 rounded-full transform transition-transform hover:scale-150 bg-white" src="Logo-Institucion-Educativa.jpg" alt="" />
                  </Link>
                  <Link target="blank" href='https://maquetado-sushi.vercel.app/'>
                    <img className="h-8 w-8 rounded-full transform transition-transform hover:scale-150 bg-white" src="/sushi.png" alt="" />
                  </Link>
                </div>
              </div>
            </div>
            <p className="text-gray-300">
              Mas de 10 empresas confiaron en nosotros. Animate a probar la digitalizacion de tu negocio.
            </p>
          </div>
          <div className=" text-center flex flex-col justify-center bg-[#0E0F18] w-full rounded-md p-3 ">
            <div className=" flex-col justify-center">
              <div className="flex justify-center mb-5">
                <p className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-300 w-28 rounded-md text-gray">
                  Mas pedido!
                </p>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-10">
                Web Avanzada
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl mb-10">
                Nuestra opcion de web avanzada es la mas solicitada por nuestros clientes. Revisa las caracteristicas de esta opcion dando clic al boton.
              </p>
              <div className="flex justify-center text-center ">
                <Link  href='/Plantillas'>
                  <button className="font-bold text-white bg-transparent border  border-gray-200 opacity-50 hover:opacity-100 hover:bg-gradient-to-r hover:from-emerald-300 hover:via-emerald-800 hover:to-emerald-500 rounded-md px-4 py-2 transform transition-all duration-500 hover:scale-125">
                    Ver Caracteristicas
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="items-center flex justify-center">
        <div className="max-w-7xl mb-20">
          <SeccionPlantillas />
        </div>
      </section>
      <section className="w-full justify-center flex">
        <div className="lg:flex max-w-7xl mb-20 gap-5 ">
          <div className=" text-center flex flex-col justify-center w-full mb-10">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-10">
              Analisis de mercado
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-lg mb-10">
              Descubre a fondo el análisis de mercado más crucial para potenciar tu empresa.
              Sumérgete en una exploración detallada de las herramientas de vanguardia, procedimientos avanzados, tecnologías de punta y todo lo relevante en este campo.
              Obtén información actualizada sobre las últimas tendencias y prácticas para asegurar que estás utilizando las mejores estrategias para el crecimiento de tu negocio.
              ¡Eleva tu comprensión del análisis de mercado y posiciona tu empresa en la vanguardia de la competencia!
            </p>
            <Link href='IA'>
              <div className="flex justify-center text-center">
                <button className="font-bold text-gray-300 hover:text-white max-w-xs bg-transparent border hover:border-none hover:bg-gradient-to-r hover:from-emerald-300 hover:via-emerald-800 hover:to-emerald-500 rounded-md p-2 hover:transition-transform hover:transform hover:scale-105">
                  Conocer Mas
                </button>
              </div>
            </Link>
          </div>
          <div className="w-full">
            <main className="flex flex-col items-center justify-center flex-1 w-full">
              <div className="w-full p-3 rounded-md shadow-md bg-[#0E0F18] ">
                <img
                  alt="Blog cover"
                  className="w-full h-64 rounded-md object-cover"
                  height={300}
                  src="/IA.jpg"
                  style={{
                    aspectRatio: "500/300",
                    objectFit: "cover",
                  }}
                  width={500}
                />
                <div className="mt-2">
                  <Link
                    className="text-2xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
                    href="#"
                  >
                    IA y su importancia
                  </Link>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    La inteligencia artificial (IA) representa la cúspide de décadas de avances tecnológicos, transformando la interacción con la información y automatizando procesos complejos.
                    A través del aprendizaje automático...
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <Link className="text-emerald-600 dark:text-emerald-400 hover:underline" href="IA">
                    Leer mas
                  </Link>
                  <div className="flex items-center">
                    <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">Jun 1, 2023</span>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

    </section>
  )
}
