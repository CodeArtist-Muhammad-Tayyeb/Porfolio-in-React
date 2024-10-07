import "./Title1.css";
import title_image from "../../assets/title.png";

const Title = ({ head2, head1, para }) => {
  return (
    <div className="title">
      <div className="titleImage">
        <img src={title_image} alt="" />
      </div>
      <div className="titleDetails">
        <h2>{head2}</h2>
        <h1>{head1}</h1>
        <p>{para}</p>
      </div>
    </div>
  );
};

export default Title;
