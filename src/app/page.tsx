import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
    {/* tirei todas as max-w-6xl de tds os components */}
      <div className="m-4 max-w-6xl">
        <Header />
        <Hero />
        <About />
        <Projects />
      </div>
    </>
  )
}
