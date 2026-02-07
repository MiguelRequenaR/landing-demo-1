import { Truck, ArrowRight, Phone, ListCheck } from "lucide-react"
import { Link } from "react-router-dom"

export default function AboutSection() {
  return (
    <main className="max-w-7xl mx-auto py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto p-4 md:p-20 gap-20">
        <div data-aos="fade-right">
          <div className="relative h-full">
            <img src="https://images.unsplash.com/photo-1565891741441-64926e441838?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1471" alt="about" className="w-full h-full object-cover" />
          </div>
          <div className="bg-[#003d4d] text-white p-5 rounded-lg flex items-center gap-5 w-fit absolute -right-2 -bottom-10 md:-right-10 shadow-lg">
            <div >
              <img src="https://img.icons8.com/?size=48&id=8cINOmIl0XpA&format=png" alt="yearsxp" className="w-10 h-10" />
            </div>
            <div className="flex flex-col text-3xl">
              10+
              <span className="text-lg">
                Años de Experiencia
              </span>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex items-center gap-2" data-aos="fade-up">
            <Truck className="w-6 h-6 text-[#f68b21]" />
            <h2 className="text-lg font-bold text-[#f68b21] uppercase">Sobre nuestra compañia</h2>
          </div>
          <h2 className="text-2xl font-bold text-[#003d4d] uppercase" data-aos="fade-up">Soluciones logísticas que ofrecen excelencia</h2>
          <p className="text-sm md:text-[16px] text-[#003d4d]" data-aos="fade-up" data-aos-delay="100">
            Somos una empresa con más de 10 años de experiencia en el rubro logístico, brindando soluciones integrales de logística y transporte, asegurando entregas seguras, puntuales y eficientes para que su mercancía llegue a destino sin contratiempos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10" data-aos="fade-up">
            <div className="flex items-center gap-2 text-sm md:text-[16px] text-[#003d4d]">
              <ListCheck className="w-6 h-6 text-[#f68b21]" />
              <span className="uppercase">Servicios Nacionales</span>
            </div>
            <div className="flex items-center gap-2 text-sm md:text-[16px] text-[#003d4d]">
              <ListCheck className="w-6 h-6 text-[#f68b21]" />
              <span className="uppercase">Servicios Locales</span>
            </div>
            <div className="flex items-center gap-2 text-sm md:text-[16px] text-[#003d4d]">
              <ListCheck className="w-6 h-6 text-[#f68b21]" />
              <span className="uppercase">Servicios de Carga y Descarga</span>
            </div>
            <div className="flex items-center gap-2 text-sm md:text-[16px] text-[#003d4d]">
              <ListCheck className="w-6 h-6 text-[#f68b21]" />
              <span className="uppercase">Entregas puntuales</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10">
            <Link to="/contacto">
              <button
                className="relative bg-[#f68b21] text-white px-5 py-4 text-sm font-semibold flex items-center gap-3 overflow-hidden transition-all duration-500 ease-in-out group cursor-pointer"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <span className="absolute inset-0 bg-[#003d4d] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>

                <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-500 uppercase">
                  Contactanos
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
    </main>
  )
}
