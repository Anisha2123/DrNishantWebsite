import { useState } from 'react'
import HeroSection from './components/Hero'
import Services from './components/Services'
import './App.css'
import WhyChoose from './components/WhyChoose'
import DoctorProfile from './components/DoctorProdile'
import Navbar from './components/Navbar'
import Footer from "./components/Footer"
import KneeReplacementGuide from './components/KneeReplacementGuide'
// import KneeReplacementGuide from './components/Kneeplacementguide'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <HeroSection/>
      <Services/>
      <WhyChoose />
     
      <DoctorProfile/>
      <KneeReplacementGuide />
      {/* <KneeReplacementguide /> */}
    <Footer />
    </>
  )
}

export default App
