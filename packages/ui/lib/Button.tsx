type ButtonProps = {
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button type="button">{children}</button>;
};

export default Button;
