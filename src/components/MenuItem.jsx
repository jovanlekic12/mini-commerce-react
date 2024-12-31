function MenuItem(props) {
  const { id, name, description, price } = props;

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
          <input type="number" />
        </div>
        <button className="add__btn btn">+Add</button>
      </div>
    </li>
  );
}

export default MenuItem;
