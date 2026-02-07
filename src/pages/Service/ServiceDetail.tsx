import { useParams } from "react-router-dom"
import PageHero from "@/components/PageHero"
import ContactForm from "@/components/ContactForm"
import { services } from "@/types/services"
import { PhoneCall } from "lucide-react"

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const service = services.find(s => s.slug === slug)

  if (!service) {
    return (
      <main>
        <div className="max-w-7xl mx-auto py-20 text-center">
          <h1 className="text-3xl font-bold text-[#003d4d] mb-4 uppercase">Servicio no encontrado</h1>
          <p className="text-gray-600">El servicio que buscas no existe.</p>
        </div>
      </main>
    )
  }

  return (  
    <main>
      <PageHero
        title={service.title}
        description={`Servicios especializados de ${service.title.toLowerCase()}`}
        imageUrl={service.image}
      />
      
      <section className="max-w-7xl mx-auto py-20 flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/3 relative md:mb-0" data-aos="fade-right">
          <div className="sticky top-8 md:top-44">
            <img
              src="https://images.unsplash.com/photo-1492168732976-2676c584c675?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880"
              alt={service.title}
              className="w-full h-fit md:h-full object-cover"
            />
            <div className="bg-[#f68b21]/90 absolute inset-0"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-5 gap-6 md:gap-10">
              <h2 className="text-2xl font-bold text-center uppercase">Contacta con Nosotros</h2>
              <div className="bg-white p-3 md:p-4 rounded-full">
                <PhoneCall className="w-8 h-8 md:w-10 md:h-10 text-[#f68b21]" />
              </div>
              <p className="text-base font-semibold text-center uppercase">
                ¿Necesitas ayuda? Habla con un experto.
              </p>
              <span className="text-xl md:text-2xl font-bold text-center">(+51) 999 888 777</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3 p-5 md:p-0" data-aos="fade-up">
          <div className="space-y-6">
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-56 md:h-72 object-cover"
            />
            <h2 className="text-2xl font-bold text-[#003d4d] uppercase">{service.title}</h2>
            <p className="text-gray-600">{service.firstDescription}</p>
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
              <img 
                src={service.serviceImage} 
                alt="service-image"
                className="w-full md:w-[300px] lg:w-[400px] h-48 md:h-full object-cover"
              />
              <div className="space-y-2 flex-1">
                <h3 className="text-xl font-bold text-[#003d4d] uppercase">Características</h3>
                <hr className="border-gray-300" />
                <ul className="list-disc list-inside text-gray-600">
                  {service.features?.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-[#003d4d] uppercase">{service.subtitle}</h2>
            <p className="text-gray-600">{service.secondDescription}</p>
          </div>
        </div>
      </section>

      <ContactForm />
    </main>
  )
}
