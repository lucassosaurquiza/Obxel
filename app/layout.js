import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './Componentes/Footer'
import BotonWpp from './Componentes/BotonWpp'
import HeaderComponent from './Componentes/HeaderComponent'
import Head from 'next/head'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Obxel",
  description: "Desarrollo de Software",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={`${inter.className} bg-cover bg-center bg-no-repeat bg-fixed bg-[url('/fondo-cuadriculado.jpg')] animate-fadeInFromTop`}>
        <HeaderComponent />
        {children}
        <BotonWpp />
        <Footer />
      </body>
    </html>
  );
}
