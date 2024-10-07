import { useState } from "react";
import SearchFunctionality from "./SearchFunctionality";
import "./Portfolio1.css";
import EffectImagePortfilio from '../../assets/PorfolioEffect.png'

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterItems = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container PortfolioSection">
      <ul>
        <li 
          onClick={() => filterItems("All")} 
          className={selectedCategory === "All" ? "active" : ""}
        >
          All
        </li>
        <li 
          onClick={() => filterItems("Colors")} 
          className={selectedCategory === "Colors" ? "active" : ""}
        >
          Colors
        </li>
        <li 
          onClick={() => filterItems("Cars")} 
          className={selectedCategory === "Cars" ? "active" : ""}
        >
          Cars
        </li>
        <li 
          onClick={() => filterItems("Flowers")} 
          className={selectedCategory === "Flowers" ? "active" : ""}
        >
          Flowers
        </li>
      </ul>

      <div className="imagesArea">
        {SearchFunctionality.map((item) => {
          if (selectedCategory === "All" || item.category === selectedCategory) {
            return (
              <img key={item.id} src={item.image} alt={item.category} />
            );
          }
          return null;
        })}
      </div>


      <div className="EffectImagePorfolio">
        <img src={EffectImagePortfilio} alt="" />
      </div>
    </div>
  );
};

export default Portfolio;







