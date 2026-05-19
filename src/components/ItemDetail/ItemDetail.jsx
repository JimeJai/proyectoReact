import { useCart } from "../../context/CartContext";
import { Item } from "../Item/Item";
export const ItemDetail = ({ item }) => {
  const { addItem } = useCart();
  //funcion flecha en el onclick para evitar autoinvocacion
  return (
    <Item {...item}>
      <button className="btn" onClick={() => addItem(item)}>
        Quiero sumarme
      </button>
    </Item>
  );
};
