import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <div
      className="w-full flex flex-col justify-center gap-6 py-30 mb-30 relative bg-scroll md:bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1565891741441-64926e441838?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1471')"
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-2xl md:text-4xl text-center font-bold text-white uppercase" data-aos="fade-up">¿Estás buscando el mejor servicio de transporte y logística?</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-10">
          <Link to="/contacto">
            <button className="relative bg-[#f68b21] text-white px-8 py-3 text-lg font-semibold flex items-center gap-3 overflow-hidden transition-all duration-500 ease-in-out uppercase group cursor-pointer" data-aos="zoom-in" data-aos-delay="100">
              <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
              <span className="relative z-10 flex items-center gap-3 group-hover:text-[#f68b21] transition-colors duration-500 uppercase">
                Contactanos
                <ArrowRight className="w-5 h-5 " />
              </span>
            </button>
          </Link>
          <Link to="/servicios">
            <button className="relative bg-[#003d4d] text-white px-8 py-3 text-lg font-semibold flex items-center gap-3 overflow-hidden transition-all duration-500 ease-in-out uppercase group cursor-pointer" data-aos="zoom-in" data-aos-delay="200">
              <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
              <span className="relative z-10 flex items-center gap-3 group-hover:text-[#003d4d] transition-colors duration-500 uppercase">
                Más detalles
                <ArrowRight className="w-5 h-5 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row bottom-[-200px] bg-white relative z-20 shadow-lg" data-aos="fade-up">
        <div className="w-full md:w-2/3 p-6 md:p-10 space-y-5">
          <h3 className="text-2xl font-bold text-[#003d4d] uppercase">Servicios que protegen tu negocio</h3>
          <p className="text-sm md:text-[16px] text-gray-500">
            ¿No estas seguro de que servicio necesitas? Contactanos y te asesoraremos. Te acompañamos en cada etapa del servicio, estamos listos para colaborar contigo.
          </p>
          <div className="flex w-full">
            <input
              type="text"
              placeholder="Escribe tu consulta aquí..."
              className="flex-1 p-2 rounded-l-md border border-gray-100 outline-none"
              style={{ borderRight: "none" }}
            />
            <button className="bg-[#f68b21] text-white px-4 py-2 rounded-r-md font-bold text-lg uppercase rounded-l-none border-none outline-none cursor-pointer hover:bg-[#003d4d] transition-all duration-500 ease-in-out">
              Enviar
            </button>
          </div>

        </div>
        <div className="w-full md:w-1/3 h-48 md:h-auto">
          <img
            src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470"
            alt="cta"
            className="w-full h-full object-cover rounded-b-md md:rounded-none md:rounded-r-md"
          />
        </div>
      </div>
    </div>
  )
}
