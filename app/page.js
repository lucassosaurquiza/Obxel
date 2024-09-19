'use client'

import SeccionMarketing from "./Componentes/SeccionMarketing";
import { SeccionInicio } from "./Componentes/SeccionInicio";
import { SeccionPrecios } from "./Componentes/SeccionPrecios";
import { SeccionAnalisisMercado } from "./Componentes/SeccionIA";
import { SeccionTuMarca } from "./Componentes/SeccionTuMarca";
import SeccionProyectos from "./Componentes/SeccionProyectos";

export default function Home() {

  return (
    <section className="w-full  text-white transition-all ease-in-out duration-500 pt-20 md:pt-24  ">
      <SeccionInicio />
      <SeccionPrecios />
      <SeccionMarketing />
      <SeccionTuMarca />
      <SeccionProyectos />
      <SeccionAnalisisMercado />
    </section>
  )
}
