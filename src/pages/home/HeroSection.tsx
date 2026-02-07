import { Link } from "react-router-dom"
import { ArrowRight, Truck } from "lucide-react"

export default function HeroSection() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470"
          alt="hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="max-w-5xl">
            <div className="flex items-center gap-2 mb-6 uppercase" data-aos="fade-up">
              <Truck className="w-6 h-6 text-[#f68b21]" />
              <span className="text-white text-sm md:text-lg">Nos especializamos en el transporte</span>
            </div>

            <h1 className="text-white text-3xl md:text-7xl font-bold mb-6 uppercase" data-aos="fade-up">
              Experimente la mejor logística & transporte
            </h1>

            <p className="text-white/90 text-sm md:text-lg  mb-8 max-w-2xl uppercase" data-aos="fade-up" data-aos-delay="100">
              Ofrecemos soluciones integrales de logística y transporte, asegurando entregas seguras, puntuales y eficientes para que su mercancía llegue a destino sin contratiempos.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-5">
              <Link to="/contacto">
                <button 
                  className="bg-[#f68b21] text-white px-8 py-2 md:py-4 text-lg font-semibold flex items-center gap-3 overflow-hidden transition-all duration-700 ease-in-out uppercase group cursor-pointer" 
                  data-aos="fade-up" 
                  data-aos-delay="200">
                    <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
                    <span
                      className="relative z-10 flex items-center gap-3 group-hover:text-[#003d4d] transition-colors duration-500 text-sm md:text-lg"
                    >
                      Contactanos
                      <ArrowRight className="w-5 h-5 " />
                    </span>
                </button>
              </Link>
              <Link to="/servicios">
                <button 
                  className="bg-[#003d4d] text-white px-8 py-2 md:py-4 text-lg font-semibold flex items-center gap-3 overflow-hidden transition-all duration-700 ease-in-out uppercase group cursor-pointer" 
                  data-aos="fade-up" 
                  data-aos-delay="200">
                    <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
                    <span
                      className="relative z-10 flex items-center gap-3 group-hover:text-[#003d4d] transition-colors duration-500 text-sm md:text-lg"
                    >
                      Explorar más
                      <ArrowRight className="w-5 h-5 " />
                    </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
