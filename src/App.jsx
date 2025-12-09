import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Works";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />

      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
