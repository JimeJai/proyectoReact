import { Item } from "../Item/Item";
export const ItemDetail = ({ item }) => {
  return (
    <Item {...item}>
      <button className="btn">Quiero sumarme</button>
    </Item>
  );
};
