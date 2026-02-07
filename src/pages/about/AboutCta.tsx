import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function AboutCta() {
  return (
    <main className="py-20">
      <div
        className="w-full flex flex-col justify-center gap-6 relative bg-scroll md:bg-fixed bg-center bg-cover h-[80vh]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1586206670130-4c6d8e646c9a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1473')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="px-4 mx-auto w-full max-w-7xl z-10 space-y-6">
          <p
            className="text-white text-xl md:text-2xl font-bold uppercase"
            data-aos="fade-up"
          >
            ¿Listo para trabajar con nosotros?
          </p>
          <h2
            className="text-white text-2xl md:text-4xl font-bold w-full md:w-2/3 uppercase"
            data-aos="fade-up"
          >
            Contactanos estamos disponibles las 24 horas del día
          </h2>
          <p
            className="text-white text-base md:text-lg w-full md:w-2/3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Reserva una cita con nosotros para que podamos atenderte y resolver tus dudas. Llámanos o envíanos un mensaje. Estamos para ayudarte.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4 mt-10 w-full">
            <Link to="/contacto">
              <button
                className="relative bg-[#f68b21] text-white px-6 md:px-8 py-3 text-base md:text-lg font-semibold flex items-center gap-3 overflow-hidden transition-all duration-500 ease-in-out uppercase group cursor-pointer"
                data-aos="zoom-in"
              >
                <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
                <span className="relative z-10 flex items-center gap-3 group-hover:text-[#f68b21] transition-colors duration-500 uppercase">
                  Contactanos
                  <ArrowRight className="w-5 h-5" />
                </span>
              </button>
            </Link>
            <Link to="/servicios">
              <button
                className="relative bg-[#003d4d] text-white px-6 md:px-8 py-3 text-base md:text-lg font-semibold flex items-center gap-3 overflow-hidden transition-all duration-500 ease-in-out uppercase group cursor-pointer"
                data-aos="zoom-in"
              >
                <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
                <span className="relative z-10 flex items-center gap-3 group-hover:text-[#003d4d] transition-colors duration-500 uppercase">
                  Más detalles
                  <ArrowRight className="w-5 h-5" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
