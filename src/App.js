import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TopBar from "./components/topBar/TopBar";
import SideBar from "./components/sideBar/sideBar";
import Home from "./components/pages/home/Home";
import UserList from "./components/pages/userlist/UserList";
import User from "./components/pages/user/User";
import NewUser from "./components/pages/newUser/newUser";
import ProductList from "./components/pages/productlist/ProductList";
import Product from "./components/pages/product/Product";
import NewProduct from "./components/pages/newProduct/newProduct";
function App() {
  return (
    <BrowserRouter>
      <div>
        <TopBar />
        <div className="container">
          <SideBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/user/new" element={<NewUser />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/newproduct" element={<NewProduct />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
