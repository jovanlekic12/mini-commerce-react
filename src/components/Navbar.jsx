import { Link } from "react-router";
import { selectTotalAmount } from "../feature/cartSlice";
import { useSelector } from "react-redux";
function Navbar() {
  const totalAmount = useSelector(selectTotalAmount);

  return (
    <nav>
      <div className="nav-div">
        <Link to="/" className="home__link">
          <h1 className="title">Mini Commerce</h1>
        </Link>
        <div className="navbar__div">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            ></path>
          </svg>
          <div className="navbar__amount__div">
            <p>{totalAmount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
