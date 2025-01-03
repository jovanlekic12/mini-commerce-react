import { useSelector } from "react-redux";
import Button from "./ui/Button";
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
        {menuItems.map((item) => {
          return <MenuItem {...item} key={item.id}></MenuItem>;
        })}
      </ul>
      <Button onClick={() => navigate("cart")} type="primary">
        Go to your cart
      </Button>
      <div className="total__price__div">
        <h1>Total Price:</h1>
        <p>{totalPrice.toFixed(2)}$</p>
      </div>
    </main>
  );
}

export default Home;
