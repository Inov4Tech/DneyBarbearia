import React, { useState, useEffect, useRef } from 'react'
import { Clock, Calendar, MapPin, Phone, ArrowRight, ChevronRight } from 'lucide-react'

export default function HorarioFuncionamento() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isOpen, setIsOpen] = useState(false)
  const sectionRef = useRef(null)

  const horarios = [
    { dia: 'Segunda‑feira', hora: '08:00 às 18:00', start: 8, end: 18 },
    { dia: 'Terça‑feira', hora: '08:00 às 18:00', start: 8, end: 18 },
    { dia: 'Quarta‑feira', hora: '08:00 às 18:00', start: 8, end: 18 },
    { dia: 'Quinta‑feira', hora: '08:00 às 18:00', start: 8, end: 18 },
    { dia: 'Sexta‑feira', hora: '08:00 às 18:00', start: 8, end: 18 },
    { dia: 'Sábado', hora: '08:00 às 18:00', start: 8, end: 18 },
    { dia: 'Domingo', hora: 'FECHADO', start: null, end: null },
  ]

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

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      setCurrentTime(now)
      
      const today = now.getDay() 
      const currentHour = now.getHours()
      const todaySchedule = horarios[today === 0 ? 6 : today - 1] 
      
      if (todaySchedule.start && todaySchedule.end) {
        setIsOpen(currentHour >= todaySchedule.start && currentHour < todaySchedule.end)
      } else {
        setIsOpen(false)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const getCurrentDay = () => {
    const days = ['Domingo', 'Segunda‑feira', 'Terça‑feira', 'Quarta‑feira', 'Quinta‑feira', 'Sexta‑feira', 'Sábado']
    return days[currentTime.getDay()]
  }

  const formatTime = (date) => {
    return date.toLocaleTimeString('pt-BR', { 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit'
    })
  }

  return (
    <section 
      ref={sectionRef}
      id="horarios" 
      className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white py-24 scroll-mt-20 relative overflow-hidden"
    >
      {/*  background elements */}
      <div className="absolute inset-0 overflow-hidden">
  
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M50 50l25-25v50l-25-25z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }} />
        </div>
        
        {/*  lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
        <div className="absolute bottom-1/3 right-0 w-2/3 h-px bg-gradient-to-l from-orange-500/30 to-transparent" />
        
        {/* Floating elements */}
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-orange-500/20 rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 left-1/5 w-2 h-2 bg-orange-400/30 rounded-full animate-ping" />
      </div>

      <div className="container mx-auto px-6 lg:px-30 relative z-10">
        
        {/*  Header */}
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-1200 ease-out ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
          }`}>
            
            {/* Section badge */}
            <div className="inline-flex items-center gap-3 bg-orange-500/10 border border-orange-500/20 rounded-full px-6 py-3 mb-8">
              <Clock className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 font-medium text-sm tracking-wide uppercase">
                Horários de Funcionamento
              </span>
            </div>
            
            {/* Main title */}
            <h2 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">SEMPRE</span>
              <br />
              <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 bg-clip-text text-transparent">
                DISPONÍVEL
              </span>
            </h2>
            
            <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Funcionamento de segunda a sábado para sua comodidade e conveniência
            </p>
          </div>
        </div>

        {/* Live Status & Time */}
        <div className={`text-center mb-12 transform transition-all duration-1000 ease-out ${
          isVisible 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '400ms' }}>
          
          <div className="inline-block bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-center gap-6">
              
              {/* Status indicator */}
              <div className="flex items-center gap-3">
                <span className={`font-semibold ${isOpen ? 'text-green-400' : 'text-red-400'}`}>
                  {isOpen ? 'ABERTO AGORA' : 'FECHADO'}
                </span>
              </div>
              
              {/* Live time */}
              <div className="flex items-center gap-3 text-orange-400">
                <Clock className="w-5 h-5" />
                <span className="font-mono text-lg font-bold">
                  {formatTime(currentTime)}
                </span>
              </div>
              
              {/* Current day */}
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-orange-400" />
                <span className="font-medium">
                  {getCurrentDay()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Schedule Grid */}
        <div className={`max-w-4xl mx-auto mb-16 transform transition-all duration-1000 ease-out ${
          isVisible 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-12 opacity-0'
        }`} style={{ transitionDelay: '600ms' }}>
          
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
            
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500/10 via-orange-500/5 to-orange-500/10 border-b border-white/10 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white">Horários da Semana</h3>
              </div>
            </div>
            
            {/* Schedule list */}
            <div className="p-6">
              <div className="grid gap-4">
                {horarios.map((item, index) => {
                  const isToday = item.dia === getCurrentDay()
                  const isClosed = item.hora === 'FECHADO'
                  
                  return (
                    <div 
                      key={item.dia}
                      className={`group flex items-center justify-between p-6 rounded-2xl border transition-all duration-300 ${
                        isToday 
                          ? 'bg-orange-500/10 border-orange-500/30 shadow-lg shadow-orange-500/10' 
                          : 'bg-white/[0.02] border-white/10 hover:border-orange-500/20 hover:bg-white/[0.05]'
                      }`}
                      style={{
                        transitionDelay: `${index * 100}ms`
                      }}
                    >
                      <div className="flex items-center gap-4">
                        {isToday && (
                          <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse" />
                        )}
                        <div>
                          <h4 className={`font-semibold text-lg ${
                            isToday ? 'text-orange-400' : 'text-white group-hover:text-orange-300'
                          } transition-colors duration-300`}>
                            {item.dia}
                          </h4>
                          {isToday && (
                            <p className="text-orange-400/70 text-sm font-medium">
                              Hoje
                            </p>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <span className={`font-bold text-xl ${
                          isClosed 
                            ? 'text-red-400' 
                            : isToday 
                              ? 'text-orange-400' 
                              : 'text-white group-hover:text-orange-300'
                        } transition-colors duration-300`}>
                          {item.hora}
                        </span>
                        
                        {!isClosed && (
                          <ChevronRight className={`w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 ${
                            isToday ? 'text-orange-400' : 'text-white'
                          }`} />
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Contact & Actions */}
        <div className={`text-center transform transition-all duration-1000 ease-out ${
          isVisible 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '800ms' }}>
          
          <div className="bg-gradient-to-r from-white/[0.05] to-white/[0.1] backdrop-blur-xl border border-white/20 rounded-3xl p-12 max-w-4xl mx-auto relative overflow-hidden">
            
            {/* Background decoration */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500/5 via-transparent to-orange-500/10 rounded-3xl" />
            </div>
            
            <div className="relative z-10">
              <h3 className="font-montserrat text-3xl md:text-4xl font-bold text-white mb-6">
                Agende seu horário
              </h3>
              
              <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                Entre em contato conosco para garantir seu horário e transformar seu visual com qualidade profissional
              </p>

              {/* Contact info grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="flex items-center justify-center gap-4 p-6 bg-white/[0.03] border border-white/10 rounded-2xl">
                  <div className="p-3 bg-orange-500/20 rounded-xl">
                    <Phone className="w-6 h-6 text-orange-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-white/60 text-sm">Telefone</p>
                    <p className="text-white font-semibold text-lg">(16) 99257-0702</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-4 p-6 bg-white/[0.03] border border-white/10 rounded-2xl">
                  <div className="p-3 bg-orange-500/20 rounded-xl">
                    <MapPin className="w-6 h-6 text-orange-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-white/60 text-sm">Localização</p>
                    <p className="text-white font-semibold text-lg">Av. Dona Tereza, 1444</p>
                    <p className="text-white/50 text-sm">Esquina com a Rua Eduardo Silva</p>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:(16)99257-0702"
                  className="group bg-orange-500 text-white font-bold px-10 py-4 rounded-xl overflow-hidden relative transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25"
                >
                  <span className="absolute inset-0 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <Phone className="w-5 h-5" />
                    LIGAR AGORA
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}