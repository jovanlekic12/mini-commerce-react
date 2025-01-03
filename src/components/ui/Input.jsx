function Input(props) {
  const { type, onChange, value, className } = props;
  return (
    <input
      value={value}
      type={type}
      onChange={onChange}
      className={className}
    />
  );
}

export default Input;
