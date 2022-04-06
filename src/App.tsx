import { BrowserRouter } from "react-router-dom";
import { Features } from "./components/features";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Navbar />
        <HeroSection />
        <Features />
      </BrowserRouter>
    </>
  );
}

export default App;
