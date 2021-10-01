const Input = ({ id, name, type, placeholder, isInvalid, children }) => {
  const borderColor = isInvalid ? "form-field has-error" : "form-field";

  return (
    <input
      name={name}
      type={type}
      id={id}
      className={`w-full ${borderColor}`}
      placeholder={placeholder ? placeholder : ""}
      {...children}
    />
  );
};

export default Input;
