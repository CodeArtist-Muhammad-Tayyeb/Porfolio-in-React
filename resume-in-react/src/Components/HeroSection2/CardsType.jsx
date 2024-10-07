import "./CardsType.css";

const CardsType = ({ image, Head, Description }) => {
  return (
    <div className="heroSection2">
      <img src={image} alt="" />
      <h2>{Head}</h2>
      <p> {Description}</p>
    </div>
  );
};

export default CardsType;
