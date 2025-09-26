import { useState } from "react";
import { Menu, X } from "lucide-react"; // iconos
import Logo from "../assets/LOGO_DEL_INOCHI.png";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
     <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#inicio">
          <img 
            src={Logo} 
            alt="Inochi Logo" 
            className="h-12 w-auto" // ajusta tamaño del logo
          />
        </a>

        {/* Botón hamburguesa (móvil) */}
        <button
          className="lg:hidden text-[#2D5159]"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Links en escritorio */}
        <ul className="hidden lg:flex gap-6 font-semibold text-[#2D5159]">
          <li><a href="#inicio" className="hover:text-[#85BF06]">Inicio</a></li>
          <li><a href="#nosotros" className="hover:text-[#85BF06]">Nosotros</a></li>
          <li><a href="#estrategias" className="hover:text-[#85BF06]">Estrategias</a></li>
          <li><a href="#valores" className="hover:text-[#85BF06]">Valores</a></li>
          <li><a href="#programas" className="hover:text-[#85BF06]">Programas</a></li>
          <li><a href="#contacto" className="hover:text-[#85BF06]">Contacto</a></li>
        </ul>
      </div>

      {/* Menú desplegable en móvil */}
      {open && (
        <ul className="lg:hidden bg-white px-6 py-4 space-y-4 font-semibold text-[#2D5159]">
          <li><a href="#inicio" onClick={() => setOpen(false)}>Inicio</a></li>
          <li><a href="#nosotros" onClick={() => setOpen(false)}>Nosotros</a></li>
          <li><a href="#estrategias" onClick={() => setOpen(false)}>Estrategias</a></li>
          <li><a href="#valores" onClick={() => setOpen(false)}>Valores</a></li>
          <li><a href="#programas" onClick={() => setOpen(false)}>Programas</a></li>
          <li><a href="#contacto" onClick={() => setOpen(false)}>Contacto</a></li>
        </ul>
      )}
    </nav>
  );
}
