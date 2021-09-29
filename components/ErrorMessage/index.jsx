const ErrorMessage = ({ id, children }) => {
  return (
    <p id={id} className="error-msg">
      {children}
    </p>
  );
};
export default ErrorMessage;
