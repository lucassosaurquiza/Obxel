import Link from "next/link"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const Footer = () => {
  return (
    <>
      <footer className="w-full py-12 bg-[#18181B] transition-all ease-in-out duration-500 text-center flex flex-col justify-center items-center space-y-8">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
          <div className="flex flex-col space-y-2">
            <h2 className=" text-xl lg:text-3xl font-bold tracking-tighter   bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-5">Empresa</h2>
            <Link className="text-sm text-gray-300 hover:underline underline-offset-4" href="Nosotros">
              Nosotros
            </Link>
            <Link className="text-sm text-gray-300 hover:underline underline-offset-4" href="#">
              Careers
            </Link>
            <Link className="text-sm text-gray-300 hover:underline underline-offset-4" href="IA">
              Blog
            </Link>
          </div>
          <div className="flex flex-col space-y-2">
            <h2 className=" text-xl lg:text-3xl font-bold tracking-tighter   bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-5">Recursos</h2>
            <Link className="text-sm text-gray-300 hover:underline underline-offset-4" href="#">
              Documentacion
            </Link>
            <Link className="text-sm text-gray-300 hover:underline underline-offset-4" href="#">
              API Referencia
            </Link>
            <Link className="text-sm text-gray-300 hover:underline underline-offset-4" href="#">
              Guias
            </Link>
          </div>
          <div className="flex flex-col space-y-2">
            <h2 className="text-xl lg:text-3xl font-bold tracking-tighter  bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-5">Soporte</h2>
            <Link className="text-sm text-gray-300 hover:underline underline-offset-4 " href="#">
              FAQ
            </Link>
            <Link className="text-sm text-gray-300 hover:underline underline-offset-4" href="#">
              Contacto
            </Link>
            <Link className="text-sm text-gray-300 hover:underline underline-offset-4" href="#">
              Reportes
            </Link>
          </div>
          <div className="flex flex-col space-y-2">
            <h2 className="text-xl lg:text-3xl font-bold tracking-tighter   bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-5">Redes Sociales</h2>
            <Link className="text-sm text-gray-300 hover:underline underline-offset-4 flex justify-center" href="#">
              <FaFacebookF className="hover:text-blue-600"/>
            </Link>
            <Link className="text-sm text-gray-300 hover:underline underline-offset-4 flex justify-center" href="#">
              <FaInstagram className="hover:text-orange-600" />
            </Link>
            <Link className="text-sm text-gray-300 hover:underline underline-offset-4 flex justify-center" href="#">
              <FaLinkedin className="hover:text-blue-600" />
            </Link>
            <Link className="text-sm text-gray-300 hover:underline underline-offset-4 flex justify-center" href="#">
              <FaXTwitter className="hover:text-gray-500" />
            </Link>
          </div>
        </div>
        <p className="text-sm text-gray-300">© 2023 Obxel. Todos los derechos reservados.</p>
      </footer>
    </>

  )
}

export default Footer