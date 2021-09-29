const Button = ({ children, type, handleClick }) => {
  return (
    <button className="btn" type={type} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
