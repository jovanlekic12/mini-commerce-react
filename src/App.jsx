import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Cart from "./components/Cart";
function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
