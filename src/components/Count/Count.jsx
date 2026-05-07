import { useState } from "react";
import "./Count.css";

export const Count = () => {
  const [contador, setContador] = useState(0);

  const increment = () => {
    setContador(contador + 1);
  };

  const decrement = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };
  return (
    <div className="count-container">
      <button className="count-boton" onClick={decrement}>
        {" "}
        -{" "}
      </button>
      <p>Seleccion: {contador}</p>
      <button className="count-boton" onClick={increment}>
        {" "}
        +{" "}
      </button>
    </div>
  );
};
