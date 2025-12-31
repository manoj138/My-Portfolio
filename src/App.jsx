import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

import ContactSection from './components/ContactSection'
import FooterSection from './components/FooterSection'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import ProjectSection from './components/ProjectSection'
import TechstackSection from './components/TechstackSection'
import Tools from './components/Tools';

function App() {

  return (
    <>
<div className="min-h-screen   relative  bg-linear-to-b from-gray-950 via-gray-900 to-gray-950">

      <Navbar/>
      <HeroSection/>
      <ProjectSection/>
      <TechstackSection/>
      <Tools/>
      <ContactSection/>
      <FooterSection/>
  </div>
    </>
  )
}

export default App
