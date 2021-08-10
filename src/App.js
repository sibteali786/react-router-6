import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import ProductDetails from "./ProductDetails";
import ProductHome from "./ProductHome";
function NotFound() {
  return (
    <div>
      <h1>Not Found</h1>
    </div>
  );
}

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome</h1>
      <div>
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link>
        <br />
        <Link to="/product">Product</Link>
        <br />
        <Link to="/product/mobile">Mobile</Link>
        <br />
        <Link to="/product/laptop">Laptop</Link>
        {<br />}
        <button
          onClick={() => {
            navigate("/about");
          }}
        ></button>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="product" element={<Product />}>
          <Route path="/" element={<ProductHome />}></Route>
          <Route path=":productId" element={<ProductDetails />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
