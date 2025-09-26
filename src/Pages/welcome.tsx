import { useNavigate } from "react-router-dom";

// Importamos las imágenes
import Logo from "../assets/LOGO_DEL_INOCHI.png";
import Nino from "../assets/niño_inochi.png";
import Nina from "../assets/niña_inochi.png";
import Perro from "../assets/PERRO_INOCHI.png";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      {/* Logo */}
      <img
        src={Logo}
        alt="Inochi Logo"
        className="w-40 sm:w-60 md:w-80 lg:w-[400px] mb-6"
      />

      {/* Personajes */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <img
          src={Nina}
          alt="Niña"
          className="w-28 sm:w-36 md:w-44 lg:w-56 h-auto"
        />
        <img
          src={Perro}
          alt="Perro"
          className="w-28 sm:w-36 md:w-44 lg:w-56 h-auto"
        />
        <img
          src={Nino}
          alt="Niño"
          className="w-28 sm:w-36 md:w-44 lg:w-56 h-auto"
        />
      </div>

      {/* Botón */}
      <button
        onClick={() => navigate("/home")}
        className="bg-[#85BF06] hover:bg-[#2D5159] text-white 
                   text-base sm:text-lg md:text-xl lg:text-2xl 
                   font-bold py-2 sm:py-3 md:py-4 
                   px-6 sm:px-8 md:px-10 
                   rounded-full shadow-2xl 
                   transition transform hover:scale-110"
      >
        INGRESAR
      </button>
    </div>
  );
}
