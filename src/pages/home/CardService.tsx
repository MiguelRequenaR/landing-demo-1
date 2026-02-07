import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function CardService() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)

  const services = [
    {
      id: 1,
      icon: "https://img.icons8.com/?size=48&id=z7MXRGNk46kb&format=png",
      title: "Precio Transparante",
      description: "No ocultamos costos adicionales. Ofrecemos precios claros y justos para que no haya sorpresas.",
    },
    {
      id: 2,
      icon: "https://img.icons8.com/?size=48&id=ZH1JWehKJFAC&format=png",
      title: "Entrega Puntual",
      description: "Garantizamos entregas a tiempo, sin demoras, para mantener la satisfacción de nuestros clientes.",
    },
    {
      id: 3,
      icon: "https://img.icons8.com/?size=48&id=m4GWcMQJ427w&format=png",
      title: "Seguridad",
      description: "Garantizamos la seguridad de su mercancía durante el transporte.",
    },
    {
      id: 4,
      icon: "https://img.icons8.com/?size=48&id=xhTZ3SnZx58c&format=png",
      title: "Servicio 24/7",
      description: "Ofrecemos servicio de atención al cliente las 24 horas del día, los 7 días de la semana.",
    },
    {
      id: 5,
      icon: "https://img.icons8.com/?size=48&id=X7M4tgEcvBc1&format=png",
      title: "Traslado de Mercancía",
      description: "Ofrecemos servicio de traslado de mercancía a cualquier parte del mundo.",
    },
    {
      id: 6,
      icon: "https://img.icons8.com/?size=48&id=a4HKMu3T9OJY&format=png",
      title: "Transporte Nacional",
      description: "Ofrecemos servicios de transporte a nivel nacional para que su mercancía llegue a su destino sin problemas.",
    }
  ]

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const maxIndex = Math.max(0, services.length - itemsPerView)
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex)
    }

    const interval = setInterval(() => {
      const maxIndex = Math.max(0, services.length - itemsPerView)
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 4000)

    return () => clearInterval(interval)
  }, [services.length, itemsPerView, currentIndex])

  const maxIndex = Math.max(0, services.length - itemsPerView)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="bg-[#003d4d] py-12">
      <div className="flex items-center mx-4 md:mx-20">
        <div className="mx-auto max-w-7xl w-full relative">
          <button
            onClick={prevSlide}
            className={`absolute ${itemsPerView === 1 ? 'left-2' : 'left-0 md:-left-12'} top-1/2 -translate-y-1/2 md:-mx-3 bg-[#f68b21] text-white p-3 rounded-full shadow-lg hover:bg-[#d97706] transition-all duration-300 z-20 opacity-90 hover:opacity-100 cursor-pointer`}
            aria-label="Slide anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="relative overflow-hidden" data-aos="fade-up">
            <div
              className={`flex transition-transform duration-700 ease-in-out ${itemsPerView === 1 ? '' : 'gap-4'}`}
              style={{
                transform: itemsPerView === 1 
                  ? `translateX(-${currentIndex * 100}%)`
                  : `translateX(calc(-${currentIndex * (100 / itemsPerView)}% - ${currentIndex * (1 / itemsPerView)}rem))`,
              }}
            >
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white p-10 relative group overflow-hidden cursor-pointer shrink-0"
                  style={{
                    width: itemsPerView === 1 ? '100%' : `calc((100% - ${(itemsPerView - 1) * 1}rem) / ${itemsPerView})`,
                  }}
                >
                  <div className="absolute inset-0 bg-[#f68b21] -translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out z-0"></div>
                  <div className="relative z-10 space-y-4">
                    <div className="bg-[#003d4d] p-3 w-fit">
                      <img src={service.icon} alt="icon" className="w-10 h-10" />
                    </div>
                    <h2 className="text-[#004364] font-bold text-lg md:text-xl group-hover:text-white transition-colors duration-500 uppercase">{service.title}</h2>
                    <p className="text-gray-500 text-sm md:text-[16px] group-hover:text-white transition-colors duration-500">{service.description}</p>
                    <div className="bg-[#f68b21] h-0.5 w-[40%] mt-5 group-hover:w-full transition-all duration-500 ease-in-out group-hover:bg-white"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            className={`absolute ${itemsPerView === 1 ? 'right-2' : 'right-0 md:-right-12'} top-1/2 -translate-y-1/2 md:-mx-3 bg-[#f68b21] text-white p-3 rounded-full shadow-lg hover:bg-[#d97706] transition-all duration-300 z-20 opacity-90 hover:opacity-100 cursor-pointer`}
            aria-label="Slide siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center gap-2 mt-8" data-aos="fade-up" data-aos-delay="100">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[#f68b21] w-8'
                    : 'bg-gray-400 w-3 hover:bg-gray-500'
                }`}
                aria-label={`Ir al slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <p className="text-center text-white text-sm pt-10 pb-10 uppercase" data-aos="fade-up" data-aos-delay="200">
        Nuestra lista de servicios no termina aquí. Descubra cómo podemos ayudarle a usted y a su empresa.
        <Link to="/servicios">
          <span className="text-[#f68b21] font-bold cursor-pointer"> Más servicios.</span>
        </Link>
      </p>
    </div>
  )
}
