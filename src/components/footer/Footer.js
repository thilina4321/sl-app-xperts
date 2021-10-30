import classes from "./footer.module.css";
import FaceBook from "@mui/icons-material/Facebook";
import Google from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <div className={classes.dark}>
      <div className={classes.contact_us}>
        <h3>Contact Us</h3>
        <hr />

        <div className={classes.contact__medias}>
          <FaceBook />
          <a href="mailto:dilshanthilina53@gmail.com" target="_blank">
            <Google />
          </a>
        </div>
        <hr />
      </div>
      <div className={classes.copy_right}>
        © sl app-xperts || all right reserved
      </div>
    </div>
  );
};

export default Footer;
