import "./Portfolio2.css";
import Portfolio2 from "../../assets/Portfolio2.jpg";

const Porfolio2 = () => {
  return (
    <div className="container Portfolio2Section">
      <div className="leftSidePortfolio2">
        <div>
          <h2>Design is Life</h2>
          <h1>I Develop Skills Regularly to Keep Me Update</h1>
          <p>
            Most common methods for designing websites that work well on desktop
            is responsive and adaptive design
          </p>
        </div>

        <ul className="progressBar">
          <li className="bar1">
            <span>illustrator</span>
            <span>85%</span>
          </li>
          <li id="bar">
            <span id="bar-1"></span>
          </li>
          <li className="bar2">
            <span>photoshop</span>
            <span>95%</span>
          </li>
          <li id="bar">
            <span id="bar-2"></span>
          </li>
          <li className="bar3">
            <span>figma</span>
            <span>75%</span>
          </li>
          <li id="bar">
            <span id="bar-3"></span>
          </li>
        </ul>
      </div>

      <div className="rightSidePortfolio2">
        <img src={Portfolio2} alt="" />
      </div>
    </div>
  );
};

export default Porfolio2;
