import Link from 'next/link'
import React from 'react'
import { FaDollarSign, FaHeart } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'
import { MdBrandingWatermark } from 'react-icons/md'

export const SeccionPrecios = () => {
  return (
    <section className="w-full items-center flex justify-center pb-10">
      <div className="md:flex max-w-7xl gap-5 mb-10 p-3">
        <div className="w-full p-1 md:p-5 rounded-md mb-5 md:mb-0 " style={{ background: 'linear-gradient(to right,#004B3A, #4ED09E )' }}>
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
                Contratados por:
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
              <Link href='/Plantillas'>
                <button className="font-bold text-white bg-transparent border  border-gray-200 opacity-50 hover:opacity-100 hover:bg-gradient-to-r hover:from-emerald-300 hover:via-emerald-800 hover:to-emerald-500 rounded-md px-4 py-2 transform transition-all duration-500 hover:scale-125">
                  Ver Caracteristicas
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
