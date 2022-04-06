import { BrowserRouter } from "react-router-dom";
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
      </BrowserRouter>
    </>
  );
}

export default App;
