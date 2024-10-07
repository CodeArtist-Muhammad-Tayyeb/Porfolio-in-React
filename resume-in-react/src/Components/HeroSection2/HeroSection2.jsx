import CardsType from "./CardsType";
import c1 from "../../assets/c1.png";
import c2 from "../../assets/c2.png";
import c3 from "../../assets/c3.png";

const HeroSection2 = () => {
  const heroSection2 = {
    background: "#2B2D33",
    color: "#ffff",
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'space-evenly',
    height: '35rem',
    paddingTop: '10rem',
  };

  return (
    <div style={heroSection2} className="container">
      <CardsType
        image={c1}
        Head="Pixel Perfect"
        Description="Most common methods for designing websites that work 
        well on desktop is responsive and adaptive design."
      />
      <CardsType
        image={c2}
        Head="High Quality"
        Description="Most common methods for designing websites that work 
        well on desktop is responsive and adaptive design."
      />
      <CardsType
        image={c3}
        Head="Awesome Idea"
        Description="Most common methods for designing websites that work
        well on desktop is responsive and adaptive design."
      />
      
    </div>
  );
};

export default HeroSection2;
