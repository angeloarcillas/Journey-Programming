import { CartItem } from "./Shopping";

interface Props {
  item: CartItem;
  handleAddToCart: (clicked_item: CartItem) => void;
}

// React.FC: functional component
// (): implicit return
const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <div>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>${item.price}</h3>
    </div>
    <button onClick={() => handleAddToCart(item)}>Add to cart</button>
  </div>
);

export default Item;
