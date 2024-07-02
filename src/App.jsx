import Aboveheader from "./components/Aboveheader/Aboveheader";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import Cards from "./components/Cards/Cards";
import Welcome from "./components/Welcome/Welcome";

const App = () => {
  return (
    <>
      <Aboveheader />
      <Header />
      <Carousel />
      <Cards />
      <Welcome />
    </>
  );
};

export default App;
