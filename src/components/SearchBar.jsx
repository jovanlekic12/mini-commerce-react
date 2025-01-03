import { useDispatch } from "react-redux";
import { search } from "../feature/globalStateSlice";

function SearchBar() {
  const dispatch = useDispatch();
  return (
    <div className="search__bar">
      <h1>Search product</h1>
      <input
        onChange={(event) => dispatch(search(event.target.value))}
        type="text"
        className="search__bar__input"
      />
    </div>
  );
}

export default SearchBar;
