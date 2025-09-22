import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Produtos from "./pages/Produtos";
import Carrinho from "./pages/Carrinho";
import PrivateRoute from "./components/PrivateRoute";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/produtos"
          element={
            <PrivateRoute>
              <Produtos />
            </PrivateRoute>
          }
        />

        <Route
          path="/carrinho"
          element={
            <PrivateRoute>
              <Carrinho />
            </PrivateRoute>
          }
        />
<Route
  path="/checkout"
  element={
    <PrivateRoute>
      <Checkout />
    </PrivateRoute>
  }
/>
 <Route path="/order-success" element={<OrderSuccess />} />

      </Routes>
      
    </>
    
  );
}

export default App;
