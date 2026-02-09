import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
