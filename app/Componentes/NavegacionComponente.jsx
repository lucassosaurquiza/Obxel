'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation';
import BotonHamburguesa from "./BotonHamburguesa";


const NavBar = () => {

    const pathname = usePathname();

    const links = [
        {
            href: "/", label: "Inicio"
        },
        {
            href: "/Precios", label: "Precios"
        },
        {
            href: "/Marketing", label: "Marketing"
        },
        {
            href: "/Marca", label: "Marca"
        },
        {
            href: "/Proyectos", label: "Proyectos"
        },
        {
            href: "/Analisis de mercado", label: "Analisis de mercado"
        },
        {
            href: "/Nosotros", label: "Nosotros"
        }
    ];

    return (
        <>
            <nav className="md:flex gap-4">
                <div className="lg:flex gap-4 hidden">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm text-white font-medium underline-offset-4 transition duration-300 ease-in-out ${pathname === link.href ? "text-emerald-300 underline" : ""
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
                <div className="flex lg:hidden">
                    <BotonHamburguesa />
                </div>
            </nav>
        </>
    )

}

export default NavBar;