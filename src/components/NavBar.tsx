import { Facebook, Instagram, Twitter, Youtube, MapPin, Timer, Mail, Phone, Menu, X } from "lucide-react"
import logoP from "../assets/logoP.png"
import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: "Inicio", href: "/" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Servicios", href: "/servicios" },
    { label: "Contacto", href: "/contacto" },
  ]

  const handleNavigation = (href: string) => {
    navigate(href)
    setIsMenuOpen(false)
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className={`bg-[#f68b21] text-white hidden lg:flex justify-around items-center transition-all duration-300 ease-in-out overflow-hidden uppercase ${isScrolled ? 'max-h-0 p-0 opacity-0' : 'max-h-20 p-3 opacity-100'}`}>
        <div className="flex items-center gap-2 font-bold">
          <MapPin />
          <span>Ubicación: Av. La Victoria, Lima</span>
        </div>
        <div className="border-l border-white h-8"></div>
        <div className="flex items-center gap-2 font-bold">
          <Mail />
          <span>Email: info@grupo-hc.com</span>
        </div>
        <div className="border-l border-white h-8"></div>
        <div className="flex items-center gap-2 font-bold">
          <Timer />
          <span>Atención: Lun - Vie 8:00 - 6:30</span>
        </div>
        <div className="flex items-center gap-3">
          <span>Siguenos en:</span>
          <div className="flex items-center gap-3 font-bold">
            <Facebook className="w-6 h-6 cursor-pointer hover:text-gray-600 transition-all duration-500 ease-in-out" />
            <Instagram className="w-6 h-6 cursor-pointer hover:text-gray-600 transition-all duration-500 ease-in-out" />
            <Twitter className="w-6 h-6 cursor-pointer hover:text-gray-600 transition-all duration-500 ease-in-out" />
            <Youtube className="w-6 h-6 cursor-pointer hover:text-gray-600 transition-all duration-500 ease-in-out" />
          </div>
        </div>
      </div>

      <div className="relative w-full bg-[#00596d] text-white">
        <div className="flex items-center justify-between relative h-20 md:h-24">
          <div
            className="relative bg-[#00596d] h-full flex items-center px-4 md:px-8 pr-8 md:pr-16 logo-clip"
          >
            <Link to="/">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="">
                  <img src={logoP} alt="logo" className="w-32 md:w-52 object-contain" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl md:text-2xl font-bold text-[#f68b21] uppercase">
                    Grupo<span className="text-white">HC</span>
                  </h1>
                  <p className="text-xs text-[#f68b21] font-bold">logistics service</p>
                </div>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex flex-1 justify-center bg-[#c8d8dd] h-full">
            <ul className="flex items-center gap-8 px-4">
              {menuItems.map((item) => (
                <div
                  key={item.label}
                  onClick={() => handleNavigation(item.href)}
                  className="flex items-center gap-1 cursor-pointer hover:text-[#f68b21] transition-colors duration-200 text-[#003d4d] font-semibold relative group"
                >
                  <span className="pb-1 relative">
                    {item.label}
                    <span
                      className="absolute left-0 bottom-0 h-px w-0 group-hover:w-full bg-[#f68b21] transition-all duration-300 ease-in-out rounded"
                      style={{ content: '""', display: "block" }}
                    ></span>
                  </span>
                </div>
              ))}
            </ul>
          </nav>

          <button
            className="md:hidden px-4 z-50 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>

          <div
            className="hidden md:flex relative bg-[#00596d] h-full items-center px-8 pl-16"
            style={{
              clipPath: 'polygon(30px 0, 100% 0, 100% 100%, 0 100%)'
            }}
          >
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="bg-white/10 p-3 rounded-full group-hover:bg-[#f68b21] transition-all duration-500 ease-in-out">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold uppercase">Contacto</span>
                <span className="text-lg font-bold">(+51) 999 888 777</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-[#00596d] shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <ul className="flex flex-col py-4">
            {menuItems.map((item) => (
              <li
                key={item.label}
                className="px-6 py-4 text-white font-semibold cursor-pointer hover:bg-[#f68b21] transition-colors duration-200 border-b border-white/10"
                onClick={() => handleNavigation(item.href)}
              >
                {item.label}
              </li>
            ))}
            <li className="px-6 py-4 text-white border-b border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">(+51) 999 888 777</span>
              </div>
            </li>
            <li className="px-6 py-4">
              <div className="flex items-center gap-4 justify-center">
                <Facebook className="w-6 h-6 cursor-pointer hover:text-[#f68b21] transition-colors" />
                <Instagram className="w-6 h-6 cursor-pointer hover:text-[#f68b21] transition-colors" />
                <Twitter className="w-6 h-6 cursor-pointer hover:text-[#f68b21] transition-colors" />
                <Youtube className="w-6 h-6 cursor-pointer hover:text-[#f68b21] transition-colors" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
