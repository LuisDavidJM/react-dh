import Button from "./Button";
import CardStyles from "../Styles/Card.module.css";
import Counter from "./Counter";
import { Link } from "react-router-dom";

const Card = ({ recipe, cart, setCart }) => {
  const { id, image, title, pricePerServing } = recipe;
  return (
    <div className={CardStyles.cardContainer}>
      <img src={image} alt="" className={CardStyles.cardImg} />
      <h3>{title}</h3>
      <h4>${pricePerServing}</h4>
      <Counter />
      <Button onClick={() => setCart([...cart, recipe])}>🛒</Button>
      <Link to={"/detail/" + id}>
        <Button>Ver detalle</Button>
      </Link>
    </div>
  );
};

export default Card;
