import { useState, useEffect } from 'react'
import { FaInstagram, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../assets/logo.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  
  useEffect(() => {
    setIsLoaded(true)
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Horários', href: '#horarios' },
  ]
  
  const socialItems = [
    {
      label: 'Instagram',
      href: 'https://instagram.com/seuPerfil',
      icon: <FaInstagram size={27} className="inline-block" />,
    },
    {
      label: 'WhatsApp',
      href: 'https://wa.me/5511999999999',
      icon: <FaWhatsapp size={27} className="inline-block" />,
    },
  ]

  return (
    <header className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-gray-200/20 text-gray-900' 
        : 'bg-[#141414] border-gray-800/50 text-white'
    }`}>
      <div className="flex items-center justify-between w-full px-15 py-3">
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Logo"
            className={`h-22 w-auto transform transition-all duration-800 ${
              isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          />
        </div>

        <nav className="hidden md:flex space-x-8 text-lg">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative pb-1 transition-all duration-300 transform ${
                isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'
              } ${
                isScrolled 
                  ? 'text-gray-700 hover:text-orange-600' 
                  : 'text-white hover:text-orange-400'
              } before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-gradient-to-r before:from-orange-400 before:to-orange-600 hover:before:w-full before:transition-all before:duration-300 hover:scale-105`}
              style={{
                transitionDelay: isLoaded ? `${index * 150}ms` : '0ms'
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-4">
            {socialItems.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center space-x-2 transition-all duration-300 transform ${
                  isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                } ${
                  isScrolled 
                    ? 'text-gray-600 hover:text-orange-600' 
                    : 'text-white hover:text-orange-400'
                }`}
                style={{
                  transitionDelay: isLoaded ? `${(index + 3) * 150}ms` : '0ms'
                }}
              >
                <div className={`p-2 rounded-full  ${
                  isScrolled 
                }`}>
                  {social.icon}
                </div>
                <span className="text-sm font-medium">{social.label}</span>
              </a>
            ))}
          </div>

          <button
            className={`md:hidden focus:outline-none p-2 rounded-lg transition-all duration-300 transform ${
              isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            } ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-gray-800'
            }`}
            style={{
              transitionDelay: isLoaded ? '600ms' : '0ms'
            }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative w-6 h-6">
              <FaBars 
                size={24} 
                className={`absolute inset-0 transition-all duration-300 transform ${
                  isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                }`} 
              />
              <FaTimes 
                size={24} 
                className={`absolute inset-0 transition-all duration-300 transform ${
                  isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                }`} 
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className={`px-6 py-6 space-y-1 border-t ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md text-gray-900 border-gray-200/20' 
            : 'bg-black/90 backdrop-blur-sm text-white border-gray-800/50'
        }`}>
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className={`block py-3 px-4 rounded-lg transition-all duration-300 transform ${
                isOpen ? 'translate-x-0 opacity-100' : '-translate-x-5 opacity-0'
              } hover:translate-x-2 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-orange-600 hover:bg-orange-50' 
                  : 'text-white hover:text-orange-400 hover:bg-gray-800/50'
              }`}
              style={{
                transitionDelay: isOpen ? `${index * 100}ms` : '0ms'
              }}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          
          <div className={`pt-4 mt-4 space-y-1 border-t ${
            isScrolled ? 'border-gray-200/50' : 'border-gray-800/50'
          }`}>
            {socialItems.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-3 py-3 px-4 rounded-lg transition-all duration-300 transform ${
                  isOpen ? 'translate-x-0 opacity-100' : '-translate-x-5 opacity-0'
                } hover:translate-x-2 ${
                  isScrolled 
                    ? 'text-gray-600 hover:text-orange-600 hover:bg-orange-50' 
                    : 'text-white hover:text-orange-400 hover:bg-gray-800/50'
                }`}
                style={{
                  transitionDelay: isOpen ? `${(index + navItems.length) * 100}ms` : '0ms'
                }}
                onClick={() => setIsOpen(false)}
              >
                <div className="p-1 rounded-full">
                  {social.icon}
                </div>
                <span className="font-medium">{social.label}</span>
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}