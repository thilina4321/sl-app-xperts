import AboutUs from "./components/about_us/AboutUs";
import Menu from "./components/menu/Menu";
import SliderComp from "./components/slider/Slider";
import WhyWe from "./components/why_we/why_we";

const App = () => {
  return (
    <div>
      <div style={{ height: "30px", backgroundColor: "black" }}> </div>
      <Menu />
      <SliderComp />
      <AboutUs />
      <WhyWe />
    </div>
  );
};

export default App;
