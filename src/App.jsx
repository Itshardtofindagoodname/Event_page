import "./App.css";
import Cards from "./layers/Cards";
import Navbar from "./layers/Navbar";
import Footer from "./layers/footer";
import HeroPage from "./layers/heropage";
import InfiniteScroll from "./layers/scroll";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-32">
        <ParallaxProvider>
          <HeroPage />
          <Cards />
        </ParallaxProvider>
        <div className=" scrollable-container">
          <InfiniteScroll />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
