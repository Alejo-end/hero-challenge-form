const Button = ({ children, type, handleClick, color }) => {
  const textColor = color === "primary" ? "white" : "black";

  return (
    <button
      className={`btn m-btn bg-${color} `}
      type={type}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
