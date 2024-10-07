import "./HeroSection1.css";
import avator from "../../assets/avatar.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/TwitterX.png";
import linkedin from "../../assets/Linkedin.png";
import php from "../../assets/PHP.png";

const Hero = () => {
  return (
    <div className="hero container">
     

      <div className="leftSide">
        <h2>Hello, I'm</h2>
        <h1>Sahib Shah</h1>
        <h4>
          A <span id="span1">Web Developer</span> From{" "}
          <span id="span2">Pakistan</span>
        </h4>
        <p>
          I’m a web developer from Pakistan with 5+ years of experience in PHP,
          Laravel, and RESTful API development, passionate and dedicated to my work.
        </p>

        <div className="heroSection-button-list">
          <button className="about-btn">About Me</button>
          <ul className="list">
            <li>
              <img src={facebook} alt="Facebook" />
            </li>
            <li>
              <img src={twitter} alt="Twitter" />
            </li>
            <li>
              <img src={linkedin} alt="LinkedIn" />
            </li>
          </ul>
        </div>
      </div>

      <div className="rightSide">
        <img src={avator} alt="Avatar" />
        <div className="AnimationImages">
          <img src={php} alt="PHP Image 1" className="image1" />
          <img src={php} alt="PHP Image 2" className="image2" />
          <img src={php} alt="PHP Image 3" className="image3" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
