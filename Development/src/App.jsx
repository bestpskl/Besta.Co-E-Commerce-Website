import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import SingleProduct from "./pages/SingleProduct";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ShoppingCart from "./pages/ShoppingCart";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/productlist/:id" element={<SingleProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
