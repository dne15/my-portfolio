import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Statement from './components/Statement'


function App() {
  return (
    <div className='bg-white'> 
      <Navbar />
      <Hero />
      <Statement />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App