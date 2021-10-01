const Input = ({ id, name, type, placeholder, isInvalid, children }) => {
  const borderColor = isInvalid
    ? "form-field has-error shadow"
    : "form-field shadow";
  const inputType = type === "text" ? "w-full" : "checkbox";

  return (
    <input
      name={name}
      type={type}
      id={id}
      className={`${borderColor} ${inputType}`}
      placeholder={placeholder ? placeholder : ""}
      {...children}
    />
  );
};

export default Input;
