import Link from "next/link"

export const BotonConsultarPlanes = () => {
  return (
    <Link
    target='blank'
    href='https://api.whatsapp.com/send?phone=+543794077764&text=Hola,%20me%20gustaria%20hacer%20una%20consulta'
  >
    <div className='flex items-center justify-center mt-3 h-16 px-4 bg-[--secondary-color]  hover:bg-[--secondary-color-light] active:bg-[--secondary-color-dark] cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
      <button className='font-bold py-2 text-[20px] text-center lg:text-3xl'>
        Consultá nuestros planes
      </button>
    </div>
  </Link>
  )
}
