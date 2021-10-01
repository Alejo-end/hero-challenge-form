const Button = ({ children, type, handleClick, color }) => {
  return (
    <button className={`btn bg-${color}`} type={type} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
