import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// creamos contexto q se llama cartcontext

const CartContext = createContext();

// CUSTOM HOOK: creamos usecart para usarlo donde quiera (con el if para q sea dentro de un proveedor)

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart debe usarse dentro de un cartProvider");
  }
  return context;
};

//PROVEEDOR: LO VAMOS A PONER EN EL MAIN, ENTRE BROWSER Y APP, TODO LO Q ENCIERRE PUEDE USAR EL CONTEXTO

export const CartProvider = ({ children }) => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  //-------------------------------------------------------------------------------//

  const isInCart = (item) => {
    const inCart = cart.some((element) => element.id === item.id);
    return inCart; //q ahora es un booleano
  };

  //-------AGREGAR AL CARRITO---------------------------------------------------------//

  const addItem = (item) => {
    if (isInCart(item)) {
      //si entra aca es xq ese item en isInCart evalua true => ya existe, sino sigue y lo carga en setCart
      alert("Producto existente");
      return;
    }
    setCart([...cart, item]);
    alert("Producto agregado");
    navigate("/");
  };

  //----ELIMINAR UN ITEM DEL CARRITO---------------------------------------------------------//

  const removeItem = (id) => {
    const updatedCart = cart.filter((element) => element.id !== id);
    setCart(updatedCart);
    alert("producto eliminado");
  };

  //----VACIAR  CARRITO---------------------------------------------------------//

  const clearCart = () => {
    setCart([]);
    alert("Carrito vacio");
  };

  //----TOTAL DE ITEMS EN EL CARRITO (ESTO PARA DESP USARLA EN EL DE PAGAR CREO, ah no no se cuando lo usamos jaja----//

  const getTotalItems = () => {
    return cart.length;
  };

  //----TOTAL A PAGAR---------------------------------------------------------//

  const getCartTotal = () => {
    return cart.reduce((acc, element) => acc + element.price, 0);
  };

  //----CHECKOUT---------------------------------------------------------//

  const checkout = () => {
    alert("Su compra se realizó");
    clearCart();
    navigate("/");
  };

  const values = {
    addItem,
    removeItem,
    clearCart,
    getTotalItems,
    getCartTotal,
    checkout,
  };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
