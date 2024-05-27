import Contact from "./components/Contact";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import Banner from "./components/Banner";

function App() {
  return (
    <main className="font-bodyFont w-full h-auto bg-bodyColor text-lightText">
      <Navbar />
      <div className="px-4">
        <div className="max-w-screen-xl mx-auto">
          <Banner />
          <Services />
          <Projects />
          <About />
          <Contact />
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default App;
