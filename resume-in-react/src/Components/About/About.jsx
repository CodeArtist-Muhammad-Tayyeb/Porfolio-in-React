import "./About.css";
import about_1 from "../../assets/about-1.jpg";
import about_2 from "../../assets/about-2.png";
import about_3 from "../../assets/about-3.png";

const About = () => {
  return (
    <div className="aboutSection">
      <div className="AboutLeftSide">
        <img src={about_1} alt="" id="image1" />
        <img src={about_2} alt="" id="effectimage" />
        <div className="twoDivsAbout">
          <div className="oneAbout">
            <h1 id="Number1">18</h1>
            <p>Years of Success</p>
          </div>
          <div className="twoAbout">
            <h1 id="Number2">9K</h1>
            <p>Years of Success</p>
          </div>
        </div>
      </div>

      <div className="AboutRightSide">
        <h2>I'm a Designer</h2>
        <h1>I Can Design Anything You Want</h1>
        <p>
          Hello there! I'm a web designer, and I'm very passionate and dedicated
          to my work. With 20 years experience as a professional web developer,
          I have acquired the skills and knowledge necessary to make your
          project a success. I enjoy every step of the design process, from
          discussion and collaboration.
        </p>
        <button>Hire Me</button>
        <img src={about_3} alt="" />
      </div>
    </div>
  );
};

export default About;
