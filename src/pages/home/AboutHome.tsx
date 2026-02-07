import { Link } from "react-router-dom"
import { ArrowRight, Truck, Phone } from "lucide-react"

export default function AboutHome() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto p-4 md:p-20 gap-10">
      <div data-aos="fade-right">
        <img src="https://images.unsplash.com/photo-1565891741441-64926e441838?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1471" alt="about" className="w-full h-full object-cover" />
      </div>
      <div className="space-y-5">
        <div className="flex items-center gap-2 justify-center md:justify-start" data-aos="fade-up">
          <Truck className="w-6 h-6 text-[#f68b21]" />
          <h2 className="font-semibold text-[#f68b21] uppercase">Sobre nuestra compañia</h2>
        </div>
        <h2 className="text-2xl font-bold text-[#003d4d] text-center md:text-left uppercase" data-aos="fade-up">Soluciones logísticas que ofrecen excelencia</h2>
        <p className="text-sm md:text-[17px] text-[#003d4d]" data-aos="fade-up" data-aos-delay="100">
          Ofrecemos soluciones logísticas de alta calidad, adaptadas a cada cliente. Contactanos para obtener más información.
        </p>
        <div className="flex items-center w-fit gap-5 bg-[#f5f4f9]" data-aos="fade-up" data-aos-delay="200">
          <div className="flex items-center gap-5 pr-5">
            <div className="bg-[#f68b21] w-1 h-28 hidden md:block"></div>
            <div
            className="p-4 md:p-0">
              <h3 className="text-base md:text-[17px] font-bold text-[#003d4d] uppercase">Seguridad Garantizada</h3>
              <p className="text-sm md:text-[15px] text-[#003d4d]">Tu carga está protegida en todo momento, asegurando entregas seguras y confiables.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <Link to="/nosotros">
            <button
              className="relative bg-[#f68b21] text-white px-5 py-4 text-sm font-semibold flex items-center gap-3 overflow-hidden transition-all duration-500 ease-in-out group cursor-pointer"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <span className="absolute inset-0 bg-[#003d4d] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>

              <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-500 uppercase">
                Explorar más
                <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" />
              </span>
            </button>
          </Link>

          <div className="" data-aos="fade-up" data-aos-delay="400">
            <a href="https://wa.me/51987654321?text=Hola%20más%20información">
              <div className="flex items-center gap-3">
                <div className="bg-[#fce6ce] text-[#f68b21] p-3 rounded-full">
                  <Phone className="w-3 h-3" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#f68b21] uppercase">Contactanos</h4>
                  <p className="text-sm font-semibold text-[#003d4d]">(+51) 933 728 244</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
