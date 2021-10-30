import logo from "../../assets/logo.jpg";
import classes from "./slider.module.css";
const SliderComp = () => {
  return (
    <div>
      <h1 className={classes.brand}>SL AppXperts</h1>
      <img className={classes.slider} src={logo} />
    </div>
  );
};

export default SliderComp;
