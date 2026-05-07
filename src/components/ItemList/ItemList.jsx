import { Item } from "../Item/Item.jsx";
import "./ItemList.css";
import { Link } from "react-router-dom";

export const ItemList = ({ products }) => {
  if (!products.length) {
    return <p>No hay productos</p>;
  }

  return (
    <div className="products-container">
      {/* {products.map((product) => (
        <Item key={product.id} {...product} />
      ))} */}
      {products.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <Item {...product} />
        </Link>
      ))}
    </div>
  );
};

// export const ItemList = ({ products = [] }) => {
//   return (
//     <div>
//       {products.length ? (
//         products.map((product) => (
//           <Item key={product.id} name={product.name} product={product} />
//         ))
//       ) : (
//         <p>No hay productos</p>
//       )}
//     </div>
//   );
// };
// export const ItemList = ({ id, name, price }) => {
//   const data = { id, name, price };
//   console.log(data);

//   return (
//     <ul>
//       {data.length ? (
//         data.map((id, name) => <li key={id}>{name}</li>)
//       ) : (
//         <li>No hay nombres</li>
//       )}
//     </ul>
//   );
// };
