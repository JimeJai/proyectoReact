import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { CartList } from "./CartList";
import { CartSummary } from "./CartSummary";

// decide que componente monta y muestra, dependiendo que haya en el carrito.
export const CartView = () => {
  const { cart } = useCart();

  return (
    <section className="cart-container">
      <h1>Tus Actividades</h1>
      {cart.length ? (
        <>
          <CartList />
          <CartSummary />
        </>
      ) : (
        <>
          <p>No hay actividades</p>
          <Link to={"/"} className="btn">
            Volverrrrrrrrrrrrrr
          </Link>
        </>
      )}
    </section>
  );
};
