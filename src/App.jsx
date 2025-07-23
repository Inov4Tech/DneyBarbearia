import Navbar from "./components/Navbar"
import HomeSection from "./components/HomeSection"
import ServicesSection from "./components/ServicesSection"
import HorarioFuncionamento from './components/HorarioFuncionamento'

function App() {
  return (
    <>
      <Navbar />

      <main className="pt-5">
        <HomeSection />

        <ServicesSection />

         <HorarioFuncionamento />
      </main>
    </>
  )
}

export default App
