import { useSelector } from "react-redux";
import Navbar from "./navbar";
import SearchBar from "./SearchBar";
import MenuItem from "./MenuItem";
import { useNavigate } from "react-router";
import { selectTotalPrice } from "../feature/cartSlice";
function Home() {
  const navigate = useNavigate();
  const { menuItems } = useSelector((store) => store.global);
  const totalPrice = useSelector(selectTotalPrice);
  return (
    <main className="main__container">
      <Navbar></Navbar>
      <SearchBar></SearchBar>
      <ul className="menu__list">
        {menuItems &&
          menuItems.map((item) => {
            return <MenuItem {...item} key={item.id}></MenuItem>;
          })}
      </ul>
      <button onClick={() => navigate("cart")} className="btn primary__btn">
        Go to your cart
      </button>
      <div className="total__price__div">
        <h1>Total Price:</h1>
        <p>{totalPrice.toFixed(2)}$</p>
      </div>
    </main>
  );
}

export default Home;
