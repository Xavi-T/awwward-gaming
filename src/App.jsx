import About from './components/About';
import Features from './components/Features';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Story from './components/Story';
import './index.css';
const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-zinc-600">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
    </main>
  );
};

export default App;
