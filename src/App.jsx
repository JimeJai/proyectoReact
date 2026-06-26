import "./App.css";
import { Count } from "./components/Count/Count";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Item } from "./components/Item/Item";
import { Navigate, Route, Routes } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartView } from "./components/Cart/CartView";
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer";
import { ProductSuccess } from "./components/adminComponents/ProductSuccess";
import { PublicLayouts } from "./layouts/PublicLayouts";
import { AdminLayout } from "./layouts/AdminLayouts";
import { Dashboard } from "./components/adminComponents/Dashboard/Dashboard";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { Login } from "./components/Login/Login";

function App() {
  return (
    <>
      {/* <h1>Nuestros Productos</h1> */}
      <Routes>
        <Route element={<PublicLayouts />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<CartView />} />
        </Route>
        <Route path="/admin/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to={"dashboard"} />} />

          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products/new" element={<ProductFormContainer />} />
          <Route path="products/success/:id" element={<ProductSuccess />} />
        </Route>
      </Routes>
      {/* <Count /> */}
    </>
  );
}

export default App;
