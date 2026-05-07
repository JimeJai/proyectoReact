import "./Item.css";

export const Item = ({ id, name, price, description, image, children }) => {
  return (
    <article className="tarjeta">
      {/* <p>{id}</p> */}
      <img className="card-img" src={image} alt="" />
      <h3>{name}</h3>

      <p>${price}</p>
      <p>{description}</p>
      {children}
    </article>
  );
};
