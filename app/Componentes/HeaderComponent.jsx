'use client';

import Link from "next/link"
import NavBar from "./NavegacionComponente";

const HeaderComponent = () => {



  return (

    <>
      <header className="animate-fadeInFromTop z-10 relative">
        <div className="bg-gradient bg-gradient-to-r from-emerald-300 via-emerald-800 to-emerald-500 md:flex justify-center  items-center hidden">
          <h2 id="title1" className="text-white font-bold text-xs flex justify-center  items-center">Diseños Web -  Paginas de una y varias vistas - Programas Personalizados - Web Avanzadas - Tiendas Online - Publicidades - Posicionamiento</h2>
        </div>
        <div className="fixed top-0 left-0 right-0 flex justify-around items-center pb-4 pt-4 md:pt-12 bg-[#18181B] bg-opacity-10 backdrop-blur-[5px] border-y border-gray-600">
          <Link href='/'>
            <div className="items-center gap-2 hidden md:flex">
              <div className="bg-[#11E096] shadow px-2"> &nbsp;</div>
              <h1 className="text-3xl text-white font-bold tracking-widest">Obxel</h1>
            </div>
            <div className="bg-[#11E096] p-1 md:hidden">
              <p className="text-white font-bold text-3xl">OX</p>
            </div>
          </Link>
          <NavBar />
        </div>
      </header>
    </>
  )
}

export default HeaderComponent