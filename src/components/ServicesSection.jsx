import React, { useState, useEffect, useRef } from 'react'
import { Scissors, Zap, Plus } from 'lucide-react'

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const serviceCategories = [
    {
      id: 1,
      title: "CORTES",
      subtitle: "Estilos clássicos e modernos",
      icon: Scissors,
      options: [
        { name: "Degradê", price: "25,00" },
        { name: "Navalhado", price: "30,00" },
        { name: "Social", price: "20,00" },
        { name: "Infantil (<13 anos)", price: "20,00" }
      ]
    },
    {
      id: 2,
      title: "COMBOS",
      subtitle: "Pacotes completos",
      icon: Zap,
      options: [
        { name: "Degradê & Barba", price: "30,00" },
        { name: "Navalhado & Barba", price: "35,00" },
        { name: "Social & Barba", price: "25,00" }
      ]
    },
    {
      id: 3,
      title: "ADICIONAIS",
      subtitle: "Acabamentos especiais",
      icon: Plus,
      options: [
        { name: "Barba", price: "15,00" },
        { name: "Sobrancelha", price: "10,00" }
      ]
    }
  ]

  return (
    <section 
      ref={sectionRef}
      id="servicos" 
      className="min-h-screen bg-black text-white py-24 scroll-mt-20 relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent" />

      <div className="container mx-auto px-6 lg:px-30 relative z-10">
        
        {/*  Header */}
        <div className="text-center mb-20">
          <div className={`transform transition-all duration-1200 ease-out ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-12 opacity-0'
          }`}>
            
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
              <span className="font-light text-orange-400 tracking-[0.2em] text-sm uppercase">
                Tabela de Valores
              </span>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
            </div>
            
            {/*  title */}
            <h2 className="font-montserrat font-black leading-tight mb-6">
              <span className="block text-4xl md:text-5xl lg:text-6xl text-white mb-2">
                NOSSOS
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl text-orange-500 relative">
                SERVIÇOS
              </span>
            </h2>
            
            {/* Subtitle */}
            <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
              Excelência em cada detalhe. Preços transparentes e serviços de alta qualidade 
              para transformar seu visual com estilo e sofisticação.
            </p>
          </div>
        </div>

        {/* Services  */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {serviceCategories.map((category, index) => (
            <div
              key={category.id}
              className={`group relative bg-gradient-to-br from-white/[0.03] to-white/[0.08] backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-700 hover:transform hover:scale-105 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-12 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${400 + index * 200}ms`
              }}
            >
              {/* effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />
              
              {/* Category header */}
              <div className="text-center mb-8 relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/10 rounded-full mb-6 group-hover:bg-orange-500/20 transition-colors duration-500">
                  <category.icon className="w-8 h-8 text-orange-500" />
                </div>
                
                <h3 className="font-montserrat text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-500">
                  {category.title}
                </h3>
                
                <p className="text-white/50 text-sm font-light tracking-wide">
                  {category.subtitle}
                </p>
              </div>

              {/* Services list */}
              <div className="space-y-4 relative z-10">
                {category.options.map((option, optionIndex) => (
                  <div 
                    key={optionIndex} 
                    className="group/item flex justify-between items-center p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.05] hover:border-orange-500/20 transition-all duration-300"
                  >
                    <span className="text-white/80 font-medium group-hover/item:text-white transition-colors duration-300">
                      {option.name}
                    </span>
                    
                    <div className="flex items-center gap-2">
                      <span className="text-orange-400 font-bold text-lg">
                        R$ {option.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>


              {/*  decorations */}
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-orange-500/20 group-hover:border-orange-500/50 transition-colors duration-500" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-orange-500/20 group-hover:border-orange-500/50 transition-colors duration-500" />
            </div>
          ))}
        </div>

        {/* Professional call-to-action section */}
        <div className={`text-center transform transition-all duration-1000 ease-out ${
          isVisible 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1200ms' }}>
          
        
        </div>
      </div>
    </section>
  )
}