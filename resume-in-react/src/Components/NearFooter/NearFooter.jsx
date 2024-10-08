import "./NearFooter.css";
import phone from "../../assets/phoneicon.png";
import email from "../../assets/emailIcon.png";
import location from "../../assets/locationIcon.png";

const Footer = () => {
  return (
    <>
      <ul className="ContactFormList container">
        <li>
          <img src={phone} alt="" /> +92300-9152517
        </li>
        <li>
          <img src={email} alt="" />
          <a href="mailto:sahibshahsadiq@gmail.com"> sahibshahsadiq@gmail.com</a>
        </li>
        <li>
          <img src={location} alt="" /> Peshawar, Pakistan
        </li>
      </ul>
    </>
  );
};

export default Footer;
