import "./NewsCard.css";
import Card from "react-bootstrap/Card";

interface NewsCardProps {
  img: string;
  title: string;
  url: string;
}

export const NewsCard = (props: NewsCardProps) => {
  const redirect = () => {
    window.location.href = props.url.toString();
  };

  return (
    <Card className="d-flex justify-content-center align-items-center card mb-3" onClick={redirect}>
      <Card.Img
        variant="top"
        src={props.img}
        className="text-center mx-auto"
        style={{ width: "100px" }}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};
