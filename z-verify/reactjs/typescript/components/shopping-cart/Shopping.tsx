import { useQuery } from "react-query";
import { useState } from "react";

import Item from './Item'
// import { Wrapper, StyledButton} from './../shopping.styles'

export interface CartItem  {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  price: number;
  amount: number;
};

const getProducts = async (): Promise<CartItem[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();

const Shopping = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItem[]);

  const { data, isLoading, error } = useQuery<CartItem[]>(
    "products",
    getProducts
  );

  const getTotalItems = (items: CartItem[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);
  const handleAddToCart = (clicked_item: CartItem) => null;
  const handleRemoveFromCart = () => null;


  if (isLoading) return <p>Loading</p>;

  if (error) return <p>Something went wrong...</p>


  return (
    <div>
      <Drawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <div>
        <div onClick={() => setCartOpen(true)}></div>
        <Badge contents={getTotalItems(cartItems)} />

        { data?.map(item => (
          <div key={item.id}>
            <Item item={item} handle_add_to_cart={handleAddToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};


function Drawer({open, onClose}) {
  return <div className={`${open} ? 'block':'hidden'`} onClick={onClose}>Cart Goes here</div>
}

function Badge({contents}) {
  return (
    contents.map(content => {

    })
  );
}
export default Shopping;
