import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Count } from "./components/Count/Count";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Item } from "./components/Item/Item";
import { Route, Routes } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartView } from "./components/Cart/CartView";
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer";
import { ProductSuccess } from "./components/adminComponents/ProductSuccess";

function App() {
  return (
    <>
      <Header />
      <main>
        {/* <h1>Nuestros Productos</h1> */}
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<CartView />} />
          <Route path="/admin" element={<ProductFormContainer />} />
          <Route path="/success/:id" element={<ProductSuccess />} />
        </Routes>
        {/* <Count /> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
