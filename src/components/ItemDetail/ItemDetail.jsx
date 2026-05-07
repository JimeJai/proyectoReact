import { Item } from "../Item/Item";
export const ItemDetail = ({ item }) => {
  return (
    <Item {...item}>
      <button className="btn">Agregar al carrito</button>
    </Item>
  );
};
