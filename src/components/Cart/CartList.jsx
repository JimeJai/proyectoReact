import { useCart } from "../../context/CartContext";
import { CartItem } from "./CartItem";

export const CartList = () => {
  const { cart } = useCart();

  return (
    <>
      <div className="cart-items-conttainer">
        {cart.map((element) => (
          <CartItem key={element.id} item={element} />
        ))}
      </div>
    </>
  );
};
