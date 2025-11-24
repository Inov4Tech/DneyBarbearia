import React, { useState, useEffect, useRef } from 'react'
import { Scissors, Zap, Plus, Store, Calendar, DollarSign } from 'lucide-react'

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    // Se já está visível, não faz nada
    if (!sectionRef.current) return

    // Fallback para navegadores que não suportam/intermitentes
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Depois que aparecer uma vez, não precisa mais observar
          observer.disconnect()
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px', // ajuda em telas menores
      }
    )

    observer.observe(sectionRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  const serviceCategories = [
    {
      id: 1,
      title: "CORTES",
      subtitle: "Estilos clássicos e modernos",
      icon: Scissors,
      options: [
        { name: "Degradê", price: "30,00" },
        { name: "Navalhado", price: "35,00" },
        { name: "Social", price: "25,00" },
        { name: "Infantil (<13 anos)", price: "20,00" }
      ]
    },
    {
      id: 2,
      title: "COMBOS",
      subtitle: "Pacotes completos",
      icon: Zap,
      options: [
        { name: "Degradê & Barba", price: "40,00" },
        { name: "Navalhado & Barba", price: "45,00" },
        { name: "Social & Barba", price: "35,00" },
        { name: "Sobrancelha", price: "+5 NO VALOR" }
      ]
    },
    {
      id: 3,
      title: "ADICIONAIS",
      subtitle: "Acabamentos especiais",
      icon: Plus,
      options: [
        { name: "Barba", price: "20,00" },
        { name: "Sobrancelha", price: "10,00" },
        { name: "Pezinho", price: "15,00" }
      ]
    },
    {
      id: 4,
      title: "PRODUTOS",
      subtitle: "Cuidados para o seu estilo",
      icon: Store,
      options: [
        { name: "Minoxidil Kirkland", price: "100,00" },
        { name: "Balm para barba", price: "35,00" },
        { name: "Grooming para cabelo", price: "45,00" },
        { name: "Leave-in para cabelo", price: "45,00" },
        { name: "Pomadas modeladoras", price: "15,00" }
      ]
    },
    {
      id: 5,
      title: "PACOTE MENSAL",
      subtitle: "4x POR MÊS",
      icon: DollarSign,
      options: [
        { name: "CABELO", price: "90" },
        { name: "CABELO E BARBA", price: "120" },
        { name: "NAVALHADO", price: "110" },
        { name: "NAVALHADO E BARBA", price: "150" },
        { name: "SOBRANCELHA", price: "BRINDE!" }
      ]
    },
    {
      id: 6,
      title: "PACOTE SEMANAL",
      subtitle: "2x POR MÊS",
      icon: Calendar,
      options: [
        { name: "CABELO", price: "50" },
        { name: "CABELO E BARBA", price: "70" },
        { name: "NAVALHADO", price: "60" },
        { name: "NAVALHADO E BARBA", price: "80" },
        { name: "SOBRANCELHA", price: "+5 NO VALOR" }
      ]
    }
  ]

  return (
    <section
      ref={sectionRef}
      id="servicos"
      // tirei o min-h-screen e o overflow-hidden para evitar corte em mobile
      className="bg-black text-white py-24 scroll-mt-20 relative"
    >
      {/* fundo sutil */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Gradientes */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
              <span className="font-light text-orange-400 tracking-[0.2em] text-sm uppercase">
                Tabela de Valores
              </span>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
            </div>

            <h2 className="font-montserrat font-black leading-tight mb-6">
              <span className="block text-4xl md:text-5xl lg:text-6xl text-white mb-2">
                NOSSOS
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl text-orange-500">
                SERVIÇOS
              </span>
            </h2>

            <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
              Excelência em cada detalhe. Preços transparentes e serviços de alta qualidade
              para transformar seu visual com estilo e sofisticação.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {serviceCategories.map((category, index) => (
            <div
              key={category.id}
              className={`group relative bg-gradient-to-br from-white/[0.03] to-white/[0.08] backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-700 hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{
                transitionDelay: `${400 + index * 200}ms`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />

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

              <div className="space-y-4 relative z-10">
                {category.options.map((option, optionIndex) => (
                  <div
                    key={optionIndex}
                    className="group/item flex justify-between items-center p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.05] hover:border-orange-500/20 transition-all duration-300"
                  >
                    <span className="text-white/80 font-medium group-hover/item:text-white transition-colors duration-300">
                      {option.name}
                    </span>

                    <span className="text-orange-400 font-bold text-lg">
                      R$ {option.price}
                    </span>
                  </div>
                ))}
              </div>

              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-orange-500/20 group-hover:border-orange-500/50 transition-colors duration-500" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-orange-500/20 group-hover:border-orange-500/50 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
