function Button(props) {
  const { children, type, onClick } = props;

  const baseClass = "btn";
  const modifiedClass = type + "__btn";

  return (
    <button className={`${baseClass} ${modifiedClass}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
