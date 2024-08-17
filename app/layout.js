import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './Componentes/Footer'
import BotonWpp from './Componentes/BotonWpp'
import HeaderComponent from './Componentes/HeaderComponent'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Obxel',
  description: 'Desarrollo de Software',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <header>
        <HeaderComponent />
      </header>
      <body className={`${inter.className} bg-cover bg-center bg-no-repeat bg-fixed bg-[url('/fondo-cuadriculado.jpg')] animate-fadeInFromTop`}>{children}
        <BotonWpp />
      </body>
      <Footer />
    </html>
  )
}
