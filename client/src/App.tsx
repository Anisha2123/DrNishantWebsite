import { useState } from 'react'
import HeroSection from './components/Hero'
import Services from './components/Services'
import './App.css'
import WhyChoose from './components/WhyChoose'
import DoctorProfile from './components/DoctorProdile'
import Navbar from './components/Navbar'
import Footer from "./components/Footer"
import KneeReplacementGuide from './components/KneeReplacementGuide'
import MISSOStickyModal from './components/MISSOStickyModal'
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
      <MISSOStickyModal />
    <Footer />
    </>
  )
}

export default App
