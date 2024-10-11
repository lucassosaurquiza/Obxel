import Link from "next/link"

export const BotonVerEjemplo = () => {
  return (
    <Link href='Proyectos'>
    <div className='mt-6 bg-transparent border  hover:scale-105 hover:shadow-lg cursor-pointer transition-all duration-300 ease-in-out transform'>
      <button className='text-white font-bold py-2 text-[20px]'>
        Ver ejemplo
      </button>
    </div>
  </Link>
  )
}
