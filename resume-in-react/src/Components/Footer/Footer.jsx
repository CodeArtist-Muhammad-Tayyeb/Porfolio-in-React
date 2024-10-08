import "./Footer.css";
import phone from "../../assets/phoneicon.png";
import email from "../../assets/emailIcon.png";
import location from "../../assets/locationIcon.png";

const Footer = () => {
  return (
    <>
      <div className="footer container">
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.3085264808583!2d71.42716787507294!3d33.984608221299766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d917bec203a951%3A0x8df105a794401775!2sKhyber%20Pakhtunkhwa%20Information%20Technology%20Board%20(KPITB)!5e0!3m2!1sen!2s!4v1728377230657!5m2!1sen!2s"
          width="400"
          height="300"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
        ></iframe> */}

        <ul className="ContactFormList container">
          <li>
            <img src={phone} alt="" /> +92300-9152517
          </li>
          <li>
            <img src={email} alt="" />
            <a href=""> sahibshahsadiq@gmail.com</a>
          </li>
          <li>
            <img src={location} alt="" /> Peshawar, Pakistan
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
