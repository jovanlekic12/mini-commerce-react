import { useSelector } from "react-redux";
import Navbar from "./navbar";
import SearchBar from "./SearchBar";
import MenuItem from "./MenuItem";
function Home() {
  const { menuItems } = useSelector((store) => store.global);

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
    </main>
  );
}

export default Home;
