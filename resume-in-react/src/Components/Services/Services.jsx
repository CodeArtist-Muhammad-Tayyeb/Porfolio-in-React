import Cards from "./Cards/Cards";
import "./Services.css";
import services_image1 from "../../assets/services1.png";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import card4 from "../../assets/card4.png";


const Services = () => {
  return (
    <div className="ServicesSection">
      <img src={services_image1} alt="" className="imageOfServices" />

      <div className="cards container">
        <Cards
          Cardsimages={card1}
          head2="Graphic Design"
          head3="Starts from"
          para="n today’s digital world, your website is the first interaction consumers have with your business. Thats why almost 95% percent of a users first impression relates to web design. "
        />
        <Cards
          Cardsimages={card2}
          head2="Graphic Design"
          head3="Starts from"
          para="n today’s digital world, your website is the first interaction consumers have with your business. Thats why almost 95% percent of a users first impression relates to web design. "
        />

        <Cards
          Cardsimages={card3}
          head2="Graphic Design"
          head3="Starts from"
          para="n today’s digital world, your website is the first interaction consumers have with your business. Thats why almost 95% percent of a users first impression relates to web design. "
        />

        <Cards
          Cardsimages={card4}
          head2="Graphic Design"
          head3="Starts from"
          para="n today’s digital world, your website is the first interaction consumers have with your business. Thats why almost 95% percent of a users first impression relates to web design. "
        />
      </div>
    </div>
  );
};

export default Services;
