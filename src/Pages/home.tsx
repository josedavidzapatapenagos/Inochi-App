import TextType from "../components/TextType";
import CircularGallery from "../components/CircularGallery";
import Navbar from "../components/Navbar";

//imagenes que se utilizaron
import perro1 from "../assets/perro_1.jpg";
import perro2 from "../assets/perro_2.png";
import perro3 from "../assets/perro_3.jpeg";
import perro4 from "../assets/perro_4.jpg";
import chica_2 from "../assets/chica_2.png";
import perro_2 from "../assets/perro2.png";
import sattva from "../assets/sattva.jpg";
import karuna from "../assets/karuna.jpg";
import dharma from "../assets/dharma.jpg";
import santosha from "../assets/santosha.jpg";
import contacto2 from "../assets/contacto2.png";

type CarouselItem = {
  image: string;
  text: string;
};
;
// Crea un array de ítems con tus imágenes y texto
const items: CarouselItem[] = [
  {
    image: perro1,
    text: " "
  },
  {
    image: perro2,
    text: " "
  },
  {
    image: perro3,
    text: " "
  },
  {
    image: perro4,
    text: " "
  },
];
export default function Home() {
  return (
       <div className="min-h-screen bg-[#334c58]">
      {/* Navbar */}
      <Navbar />
      {/* Contenido principal */}
      <div id= "inicio"className="p-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          <TextType
            text="Bienvenido a Inochi"
            className="text-[#000000]"
          />
        </h1>
        <p className="text-4xl  md:text-6xl font-bold mt-4 text-gray-600">
          <TextType
            text="Promovemos el bienestar integral y un futuro sostenible para personas,empresas y comunidades"
            className="text-[#000000]"
          />
        </p>
      </div>
       {/* Sección  Carrusel */}
      <div className="mt-10 h-[500px] w-full">
        <CircularGallery items={items} />
      </div>

      {/* sesion nosotros*/}
    <div id="nosotros" className="p-10 bg-[#334c58] min-h-screen">
  <h2 className="text-4xl font-bold text-center text-white">Nosotros</h2>
  {/* Cards */}
  <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {/* Card 1 */}
    <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 text-center">
      <h3 className="text-2xl font-bold text-[#2D5159]">Misión</h3>
      <p className="mt-3 text-gray-600">
        Promover el bienestar integral de las personas, las empresas y las comunidades, a través de programas y 
        servicios innovadores que fomenten la salud mental, el desarrollo personal, la conexión con la naturaleza, 
        el sentido de propósito y la espiritualidad. Buscamos construir un mundo más saludable, equilibrado y armonioso.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 text-center">
      <h3 className="text-2xl font-bold text-[#2D5159]">Visión</h3>
      <p className="mt-3 text-gray-600">
      Ser una organización líder y referente en la promoción del bienestar integral, 
      reconocida por su excelencia, su compromiso social y su impacto positivo en la vida de las personas, 
      las empresas y el medio ambiente. Aspiramos a ser un faro de esperanza y transformación, 
      que inspire a individuos y comunidades a vivir con propósito, cultivar su bienestar emocional y 
      contribuir a un futuro sostenible y en armonía con la naturaleza.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 text-center">
      <h3 className="text-2xl font-bold text-[#2D5159]">Valores</h3>
      <p className="mt-3 text-gray-600">
      <ul> Humanización</ul>
<ul>La Compasión</ul>
<ul>Respeto por la vida en todas sus formas</ul>
      </p>
    </div>

    {/* Card 4 */}
    <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 text-center">
      <h3 className="text-2xl font-bold text-[#2D5159]">Ejes Transversales que rigen nuestras acciones</h3>
      <p className="mt-3 text-gray-600">
      <ol>Salud Mental</ol>
      <ol>Comunidad</ol>
      <ol>Naturaleza</ol>
      <ol>Espiritualidad</ol>

      </p>
    </div>
  </div>
</div>
{/* Cards */}
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 place-items-center -mt-45">
  <img
    src={chica_2}
    alt="Foto equipo Inochi"
    className="w-32 h-auto"
  />
</div>
{/* Sesión Enfoque Estratégico */}
<div id="estrategias" className="p-10 bg-[#334c58] min-h-screen flex flex-col lg:flex-row items-center gap-10">
  {/* Textos */}
  <div className="flex-1 text-center lg:text-left">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
      Enfoque estratégico
    </h2>
    <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed">
      Inochi se enfoca en consolidar su posicionamiento como referente en bienestar integral. 
      Nuestros objetivos y metas para los próximos tres años están diseñados para ser alcanzables, 
      realistas y medibles, impulsando un crecimiento sostenible basado en la calidad y el impacto 
      significativo de nuestras acciones.
    </p>

    {/* Cards */}
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-md hover:shadow-lg transition text-center">
        <h3 className="text-xl md:text-2xl font-bold text-[#2D5159]">
          Expandir el Alcance de Programas Innovadores
        </h3>
        <p className="mt-3 text-gray-600 text-sm md:text-base">
          Incrementar en un 15% el número de participantes en programas y servicios innovadores de salud mental durante los próximos tres años, garantizando un acceso equitativo y de calidad.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-md hover:shadow-lg transition text-center">
        <h3 className="text-xl md:text-2xl font-bold text-[#2D5159]">
          Fortalecer la Conexión con la Naturaleza
        </h3>
        <p className="mt-3 text-gray-600 text-sm md:text-base">
          Desarrollar actividades que promuevan una relación respetuosa y activa con el entorno natural, contribuyendo a la sostenibilidad y el bienestar colectivo.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-md hover:shadow-lg transition text-center">
        <h3 className="text-xl md:text-2xl font-bold text-[#2D5159]">
          Impulsar el Desarrollo Personal y Comunitario
        </h3>
        <p className="mt-3 text-gray-600 text-sm md:text-base">
          Fomentar programas que fortalezcan el sentido de propósito, el crecimiento emocional y la construcción de comunidades resilientes.
        </p>
      </div>
    </div>
  </div>

  {/* Imagen a la derecha */}
  <div className="flex-1 flex justify-center lg:justify-end">
    <img
      src={perro_2}
      alt="Enfoque estratégico"
      className="w-64 md:w-80 h-auto object-contain"
    />
  </div>
</div>
{/* sesion valores y riquezas*/}
<h2 className="text-4xl font-bold text-center text-white">Valores y Riquezas </h2>
<div id="valores"className="bg-[#334c58] py-16 px-10 text-white">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
    {/* Promesa de valor */}
    <div className="p-6 bg-white/10 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold border-b-4 border-[#85BF06] inline-block pb-2">
        Promesa de valor
      </h2>
      <p className="mt-4 text-gray-200 leading-relaxed">
        En Inochi, estamos enfocados en el bienestar integral, ofrecemos soluciones innovadoras 
        que promueven la salud mental, conexión con la naturaleza, propósito y espiritualidad, 
        impulsando así un futuro más saludable, equilibrado y en armonía para las personas y sus comunidades.
      </p>
    </div>

    {/* riquezas*/}
    <div className="p-6 bg-white/10 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold border-b-4 border-[#85BF06] inline-block pb-2">
        Huella Fundación Inochi
      </h2>
      <p className="mt-4 text-gray-200 leading-relaxed">
        Nuestra riqueza: El talento Humano.  
        En Inochi, nuestra mayor riqueza reside en la calidad de nuestro equipo de profesionales. 
        Contamos con un talento multidisciplinario que incluye expertos en pedagogía, psicología, 
        trabajo social, profesionales en salud mental y terapeutas en terapias de tercera generación. 
        Su pasión y compromiso son el motor que nos permite ofrecer intervenciones.
      </p>
    </div>

  </div>
</div>

{/* Programas */}
<section id="programas" className="p-10 bg-[#334c58] text-white">
  <h2 className="text-4xl font-bold text-center">Nuestros Programas</h2>
  <p className="mt-2 text-center text-lg text-gray-300">
    Nuestros programas responden al principio institucional de TRANSFORMACIÓN CON PROPÓSITO.
    Cada uno está diseñado para fomentar el bienestar integral a través de actividades significativas.
  </p>

  <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {/* Card 1 */}
    <div className="relative rounded-2xl overflow-hidden shadow-lg group">
      <img
        src={sattva}
        alt="Sattva"
        className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
      />
      <div className="absolute inset-0  flex flex-col justify-center items-center text-center p-4">
        <h3 className="text-5xl font-bold text-white">Sattva</h3>
        <p className="mt-2 text-sm text-gray-200">
          Programa encargado de las acciones psicosociales, psicoeducativas, psicoterapéuticas,
          que promueven la salud mental y bienestar emocional.
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="relative rounded-2xl overflow-hidden shadow-lg group">
      <img
        src={karuna}
        alt="Karuna"
        className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
      />
      <div className="absolute inset-0  flex flex-col justify-center items-center text-center p-4">
        <h3 className="text-5xl font-bold text-white">Karuna</h3>
        <p className="mt-2 text-sm text-gray-200">
          Programas educativos desde la compasión y la relación con animales y medio ambiente.
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="relative rounded-2xl overflow-hidden shadow-lg group">
      <img
        src={dharma}
        alt="Dharma"
        className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
      />
      <div className="absolute inset-0  flex flex-col justify-center items-center text-center p-4">
        <h3 className="text-5xl font-bold text-white">Dharma</h3>
        <p className="mt-2 text-sm text-gray-200">
          Programa transversal basado en el servicio, sostenibilidad y apoyo logístico.
        </p>
      </div>
    </div>

    {/* Card 4 */}
    <div className="relative rounded-2xl overflow-hidden shadow-lg group">
      <img
        src={santosha}
        alt="Santosha"
        className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
      />
      <div className="absolute inset-0  flex flex-col justify-center items-center text-center p-4">
        <h3 className="text-5xl font-bold text-white">Santosha</h3>
        <p className="mt-2 text-sm text-gray-200">
          Sistemas de información y control de calidad relacionados con producción de datos.
        </p>
      </div>
    </div>
  </div>
</section>
{/* Contacto */}
<section id="contacto" className="bg-[#334c58] py-16 px-6">
  <div className="max-w-4xl mx-auto text-center text-white">
    <h2 className="text-4xl font-bold mb-8">Contacto</h2>

    {/* Datos de contacto */}
    <div className="space-y-4 text-lg">
      <p><span className="font-semibold">Razón Social:</span> FUNDACIÓN INOCHI</p>
      <p><span className="font-semibold">NIT:</span> 901627164-1</p>
      <p><span className="font-semibold">Domicilio:</span> Envigado, Antioquia, Colombia</p>
      <p>
        <span className="font-semibold">Correo Electrónico:</span>{" "}
        <a 
          href="mailto:inochifundacion@gmail.com" 
          className="text-[#85BF06] hover:underline"
        >
          inochifundacion@gmail.com
        </a>
      </p>
    </div>

    {/* Botón WhatsApp */}
    <div className="mt-10">
      <a
        href="https://wa.me/3162292756" 
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20b954] text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path d="M20.52 3.48A11.91 11.91 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.15 1.6 5.96L0 24l6.3-1.64A11.95 11.95 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.2-3.48-8.52zM12 22c-1.87 0-3.67-.5-5.25-1.44l-.38-.22-3.74.97 1-3.65-.24-.38A9.92 9.92 0 012 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm5.34-7.5c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.9 1.13-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.45-.86-.76-1.44-1.7-1.61-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49-.16-.01-.36-.01-.55-.01s-.51.07-.77.36c-.26.29-1.02 1-1.02 2.43s1.04 2.82 1.18 3.01c.15.19 2.05 3.14 4.96 4.4.69.3 1.22.48 1.64.61.69.22 1.31.19 1.8.11.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34z" />
        </svg>
        Nos ecantara atenderte
      </a>
    </div>
  </div>
</section>
{/*foto de contacto 2*/}
<div className="-mt-155 flex justify-center pr-150">
  <img
    src={contacto2}
    alt="Foto equipo Inochi"
    className="w-50 h-auto"
  />
</div>

</div>
    
    
);
}