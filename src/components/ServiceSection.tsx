import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@/types/services";

export default function ServiceSection() {

  return (
    <main className="max-w-7xl mx-auto pb-40">
      <div className="flex flex-col items-center justify-center my-10" data-aos="fade-up">
        <span className="text-center text-[#f68b21] font-semibold uppercase">Servicios Logísticos</span>
        <h2 className="text-3xl text-center font-bold text-[#003d4d] mt-2 uppercase">Servicios Logísticos Populares</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-28 md:gap-4">
        {services.map((service) => (
          <div key={service.id} className="relative group cursor-pointer" data-aos="fade-up" data-aos-delay="100">
            <Link to={`/servicios/${service.slug}`}>
              <img src={service.image} alt="service" className="w-full h-full object-cover" />
              <div className="absolute bottom-[-70px] left-1/2 -translate-x-1/2 w-10/12 bg-white p-7 border-l-4 border-[#f68b21] shadow-lg overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-white transition-all duration-500 ease-in-out z-0"></div>
                <div className="absolute inset-0 bg-[#f68b21] -translate-x-full group-hover:translate-x-0 transition-all duration-500 ease-in-out z-10"></div>
                <div className="relative z-20">
                  <div className="flex items-center gap-2">
                    <div className="bg-[#f68b21] h-0.5 w-[15%] group-hover:bg-white transition-colors duration-500"></div>
                    <span className="text-sm font-bold text-[#f68b21] group-hover:text-white transition-colors duration-500 uppercase">{service.subslug}</span>
                  </div>
                  <h3 className="pb-2 text-[17px] text-[#003d4d] group-hover:text-white transition-colors duration-500 uppercase">{service.title}</h3>
                </div>
              </div>
              <div className="absolute -bottom-22 right-5 bg-[#003d4d] text-white w-20 py-3 flex items-center justify-center cursor-pointer group-hover:bg-[#f68b21] transition-all duration-500 ease-in-out">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}
