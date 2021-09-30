const Input = ({ id, name, type, placeholder, isInvalid, register }) => {
  const borderColor = isInvalid ? "form-field .has-error" : "form-field";

  return (
    <input
      name={name}
      type={type}
      id={id}
      className={`shadow-sm rounded-md block w-full sm:text-sm ${borderColor}`}
      placeholder={placeholder ? placeholder : ""}
      {...register}
    />
  );
};

export default Input;
