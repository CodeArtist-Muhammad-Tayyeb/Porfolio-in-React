import CardsType from "./CardsType";
import c1 from "../../assets/c1.png";
import c2 from "../../assets/c2.png";
import c3 from "../../assets/c3.png";

const HeroSection2 = () => {
  const heroSection2 = {
    background: "#2B2D33",
    color: "#ffff",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap', // To handle responsiveness
    height: 'auto',   // Adjust height for smaller screens
    paddingTop: '10rem',
  };

  const cardStyle = {
    marginBottom: '2rem', // Adds spacing between cards for smaller screens
    transition: 'transform 0.3s ease-in-out', // Animation effect
  };

  const handleHover = (event) => {
    event.target.style.transform = 'scale(1.1)'; // Scale animation
  };

  const handleMouseLeave = (event) => {
    event.target.style.transform = 'scale(1)';
  };

  return (
    <div style={heroSection2} className="container">
      <div
        style={cardStyle}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <CardsType
          image={c1}
          Head="Pixel Perfect"
          Description="Most common methods for designing websites that work well on desktop is responsive and adaptive design."
        />
      </div>
      <div
        style={cardStyle}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <CardsType
          image={c2}
          Head="High Quality"
          Description="Most common methods for designing websites that work well on desktop is responsive and adaptive design."
        />
      </div>
      <div
        style={cardStyle}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <CardsType
          image={c3}
          Head="Awesome Idea"
          Description="Most common methods for designing websites that work well on desktop is responsive and adaptive design."
        />
      </div>
    </div>
  );
};

export default HeroSection2;
