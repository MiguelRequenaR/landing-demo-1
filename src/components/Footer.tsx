import logoP from "../assets/logoP.png"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer
      className="w-full bg-cover bg-center text-white pt-20 pb-10 relative"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470')",
      }}
    >
      <div className="absolute inset-0 bg-black/80 pointer-events-none z-0"></div>
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 px-6">
        <div data-aos="fade-up">
          <div className="flex items-center gap-3">
            <img src={logoP} alt="logo" className="w-28 object-contain" />
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-[#f68b21] uppercase">
                Grupo<span className="text-white">HC</span>
              </h1>
              <p className="text-xs text-[#f68b21] font-bold">logistics service</p>
            </div>
          </div>
          <p className="text-gray-300 text-sm md:text-[16px]">
            Empresa dedicada a ofrecer soluciones logísticas de alta calidad.
          </p>
          <div>
            <div className="flex items-center gap-3">
              <div className="bg-[#f68b21] w-1 h-8 my-5"></div>
              <div>
                <span className="text-sm font-bold uppercase">Redes sociales:</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Facebook className="w-6 h-6 cursor-pointer hover:text-[#f68b21] transition-all duration-500 ease-in-out" />
              <Instagram className="w-6 h-6 cursor-pointer hover:text-[#f68b21] transition-all duration-500 ease-in-out" />
              <Twitter className="w-6 h-6 cursor-pointer hover:text-[#f68b21] transition-all duration-500 ease-in-out" />
              <Youtube className="w-6 h-6 cursor-pointer hover:text-[#f68b21] transition-all duration-500 ease-in-out" />
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="100">
          <h3 className="font-bold text-xl mb-4 uppercase">Servicios</h3>
          <ul className="space-y-2 text-gray-200 text-sm md:text-[16px]">
            <li>Transporte terrestre</li>
            <li>Almacenamiento</li>
            <li>Logística internacional</li>
            <li>Seguros de carga</li>
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <h3 className="font-bold text-xl mb-4 uppercase">Páginas</h3>
          <ul className="space-y-2 text-gray-200 text-sm md:text-[16px]">
            <li className="hover:text-[#f68b21] transition-all duration-500 ease-in-out"><Link to="/">Inicio</Link></li>
            <li className="hover:text-[#f68b21] transition-all duration-500 ease-in-out"><Link to="/nosotros">Nosotros</Link></li>
            <li className="hover:text-[#f68b21] transition-all duration-500 ease-in-out"><Link to="/servicios">Servicios</Link></li>
            <li className="hover:text-[#f68b21] transition-all duration-500 ease-in-out"><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <h3 className="font-bold text-xl mb-4 uppercase">Contacto</h3>
          <ul className="space-y-2 text-gray-200 text-sm md:text-[16px]">
            <li>Email: info@grupo-hc.com</li>
            <li>Teléfono: (+51) 999 888 777</li>
            <li>Av. La Victoria, Lima</li>
            <li>Lun-Vie: 8:00 - 18:00</li>
          </ul>
        </div>
      </div>
      <div className="w-[80%] mx-auto my-10 relative z-10">
        <div className="border-t-2 border-dashed border-white"></div>
      </div>
      <div className="flex flex-col relative z-10 mt-12 text-center text-gray-200 text-sm opacity-75">
        © {new Date().getFullYear()} Grupo HC. Todos los derechos reservados.
        <span>Desarrollado por <a href="https://www.groblestudio.com/" target="_blank" className="text-[#f68b21] hover:text-white transition-all duration-500 ease-in-out font-bold">Grobles Studio.</a></span>
      </div>
    </footer>
  )
}

