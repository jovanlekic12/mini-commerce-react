import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCartItem } from "../feature/cartSlice";
function MenuItem(props) {
  const [amount, setAmount] = useState(1);
  const { id, name, description, price } = props;
  const dispatch = useDispatch();
  return (
    <li className="menu__list__item">
      <div className="item__div">
        <h1>{name}</h1>
        <p>{description}</p>
        <p>{price}$</p>
      </div>
      <div className="item__div__quantity">
        <div className="amount__div">
          <h2>Amount</h2>
          <input
            type="number"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>
        <button
          className="add__btn btn"
          onClick={() => dispatch(addCartItem({ props, amount }))}
        >
          +Add
        </button>
      </div>
    </li>
  );
}

export default MenuItem;
