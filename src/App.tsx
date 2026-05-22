import Navigation from './components/Navigation';
import Produktvorschau from './components/Produktvorschau';
import Funktionsreferenz from './components/Funktionsreferenz';
import DemoBuchung from './components/DemoBuchung';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-fleet-bg text-fleet-text font-sans">
      <Navigation />
      <main id="main-content">
        <Produktvorschau />
        <div id="hero-end" aria-hidden="true" />
        <Funktionsreferenz />
        <DemoBuchung />
      </main>
      <Footer />
    </div>
  );
}

export default App;