import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-primary)]">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
