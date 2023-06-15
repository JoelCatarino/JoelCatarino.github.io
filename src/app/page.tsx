import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <div className="m-4">
        <Header />
        <Hero />
        <About />
        <Projects />
      </div>
    </>
  )
}
