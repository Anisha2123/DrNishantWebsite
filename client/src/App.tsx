import { useState } from 'react'
import HeroSection from './components/Hero'
import Services from './components/Services'
import './App.css'
import WhyChoose from './components/WhyChoose'
import DrNishantProfile from './components/DrNishantProfile'
import DoctorProfile from './components/DoctorProdile'
import Navbar from './components/Navbar'
import Footer from "./components/Footer"
import KneeReplacementGuide from './components/KneeReplacementGuide'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <HeroSection/>
      <Services/>
      <WhyChoose />
      {/* <DrNishantProfile /> */}
      <DoctorProfile/>
      <KneeReplacementGuide />
    <Footer />
    </>
  )
}

export default App
