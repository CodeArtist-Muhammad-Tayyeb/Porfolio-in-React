import "./Cards.css";

const Cards = ({ Cardsimages, head2, head3, para }) => {
  return (
      <div className="card">
        <div className="CardImage">
          <img src={Cardsimages} alt="" />
        </div>
        <div className="CardServices">
          <h2>{head2}</h2>
          <h3>{head3}<span> $99</span></h3>
          <p>{para}</p>
        </div>
      </div>
  );
};

export default Cards;
