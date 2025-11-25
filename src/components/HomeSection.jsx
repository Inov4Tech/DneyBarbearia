// src/components/HomeSection.jsx
import React, { useState, useEffect } from 'react'
import Bg from '../assets/img.png'

export default function HomeSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      {/* Cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/50" />
      
      {/* Diagonal accent element */}
      <div className="absolute top-0 right-0 w-1/3 h-full">
        <div className="absolute inset-0 bg-gradient-to-bl from-orange-500/15 via-transparent to-transparent transform skew-x-12 origin-top-right" />
      </div>

      {/* Animated dots pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-orange-500/30 rounded-full transition-all duration-2000 ease-out ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              transitionDelay: `${i * 200 + 1000}ms`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-30">
          <div className="max-w-4xl">
            
            {/* Premium subtitle */}
            <div className={`mb-8 transform transition-all duration-1000 ease-out ${
              isVisible 
                ? 'translate-x-0 opacity-100' 
                : '-translate-x-16 opacity-0'
            }`} style={{ transitionDelay: '400ms' }}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-orange-500" />
                <span className="font-pompiere text-orange-400 text-xl md:text-2xl font-medium tracking-widest uppercase">
                  Mais que um corte
                </span>
              </div>
            </div>

            {/* Hero title */}
            <div className={`mb-10 transform transition-all duration-1400 ease-out ${
              isVisible 
                ? 'translate-x-0 opacity-100' 
                : '-translate-x-20 opacity-0'
            }`} style={{ transitionDelay: '600ms' }}>
              <h1 className="font-montserrat text-white font-black leading-none">
                <span className="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4">
                  TRANSFORMANDO
                </span>
                <span className="block text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4">
                  SEU VISUAL COM
                </span>
                <span className="relative inline-block text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-orange-500">
                  ESTILO
                  {/* Modern underline */}
                  <span className="absolute -bottom-4 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 transform origin-left scale-x-0 animate-expand-width rounded-full" 
                        style={{ animationDelay: '2s' }} />
                  {/* Glow effect */}
                  <span className="absolute inset-0 text-orange-500 animate-pulse-glow" 
                        style={{ animationDelay: '2.8s' }}>
                    ESTILO
                  </span>
                </span>
              </h1>
            </div>

            {/* Description */}
            <div className={`mb-12 max-w-2xl transform transition-all duration-1000 ease-out ${
              isVisible 
                ? 'translate-x-0 opacity-100' 
                : '-translate-x-12 opacity-0'
            }`} style={{ transitionDelay: '1000ms' }}>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed font-light">
                Eleve sua presença com cortes de precisão e estilo contemporâneo. 
                Nossa expertise transforma não apenas seu visual, mas sua confiança.
              </p>
            </div>

            {/* CTA Section */}
            <div className={`flex flex-col sm:flex-row gap-6 items-start transform transition-all duration-1000 ease-out ${
              isVisible 
                ? 'translate-x-0 opacity-100' 
                : '-translate-x-8 opacity-0'
            }`} style={{ transitionDelay: '1200ms' }}>
              
              {/* Primary CTA */}
              <a
                href="https://wa.me/5516992570702"
                className="group relative bg-orange-500 text-white font-bold px-10 py-5 overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25"
              >
                {/* Button background effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
                
                {/* Button text */}
                <span className="relative z-10 tracking-wider text-lg">
                  AGENDAR AGORA
                </span>
                
                {/* Shine effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#servicos"
                className="group relative text-white font-semibold px-10 py-5 border-2 border-white/30 hover:border-white transition-all duration-300 hover:bg-white/10"
              >
                <span className="tracking-wider text-lg">VER PREÇOS</span>
                <span className="ml-3 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Side brand element */}
      <div className={`absolute right-8 lg:right-16 top-1/2 transform -translate-y-1/2 transition-all duration-1500 ease-out ${
        isVisible 
          ? 'translate-x-0 opacity-100' 
          : 'translate-x-12 opacity-0'
      }`} style={{ transitionDelay: '1600ms' }}>
        <div className="writing-mode-vertical text-white/40 font-light tracking-widest text-sm">
          O MELHOR PARA NOSSOS CLIENTES
        </div>
      </div>

      {/* Bottom navigation hint */}
      <div className={`absolute bottom-0 left-0 right-0 pb-8 transform transition-all duration-1000 ease-out ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-8 opacity-0'
      }`} style={{ transitionDelay: '1800ms' }}>
        
        {/* Progress bar */}
        <div className="container mx-auto px-6 lg:px-30 mb-6">
          <div className="w-full h-px bg-white/20">
            <div className="h-full bg-gradient-to-r from-orange-500 to-orange-400 w-0 animate-expand-width" 
                 style={{ animationDelay: '2.5s', animationDuration: '2s' }} />
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes expand-width {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { text-shadow: 0 0 8px rgba(251, 146, 60, 0.6); }
          50% { text-shadow: 0 0 25px rgba(251, 146, 60, 0.9), 0 0 35px rgba(251, 146, 60, 0.7); }
        }
        
        .writing-mode-vertical {
          writing-mode: vertical-lr;
          text-orientation: mixed;
        }
        
        .animate-expand-width { animation: expand-width 1s ease-out forwards; }
        .animate-pulse-glow { animation: pulse-glow 2.5s ease-in-out infinite; }
      `}</style>
    </section>
  )
}