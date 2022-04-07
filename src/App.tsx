import { BrowserRouter } from "react-router-dom";
import { Features } from "./components/features";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <HeroSection />
      <Features />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
