import "./Title2.css";
import title2_image1 from "../../assets/Services.png";




const Title = ({ head2, head1, para }) => {
  return (
    <div className="title2">
      <div className="title2Image1">
        <img src={title2_image1} alt="" />
      </div>

      <div className="title2Details">
        <h2>{head2}</h2>
        <h1>{head1}</h1>
        <p>{para}</p>
      </div>

     
    </div>
  );
};

export default Title;
