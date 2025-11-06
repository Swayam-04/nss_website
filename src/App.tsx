import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Gallery from './components/Gallery';
// SuccessStories removed per request
import Footer from './components/Footer';

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Programs />
          <Gallery />
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
