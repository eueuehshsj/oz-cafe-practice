import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/cartContext.jsx";
import { MenuProvider } from "./context/menuContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
      <MenuProvider>
        <App />
      </MenuProvider>
    </CartProvider>
  </BrowserRouter>,
);
