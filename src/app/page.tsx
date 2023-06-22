import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Copyright from './components/Copyright'

export default function Home() {
  return (
    <>
      <div className="m-4 max-w-7xl">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Footer />
        <Copyright />
      </div>
    </>
  )
}
