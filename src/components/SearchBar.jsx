import { useDispatch } from "react-redux";
import { search } from "../feature/globalStateSlice";
import Input from "./ui/Input";

function SearchBar() {
  const dispatch = useDispatch();
  return (
    <div className="search__bar">
      <h1>Search product</h1>
      <Input
        onChange={(event) => dispatch(search(event.target.value))}
        type="text"
        className="search__bar__input"
      />
    </div>
  );
}

export default SearchBar;
