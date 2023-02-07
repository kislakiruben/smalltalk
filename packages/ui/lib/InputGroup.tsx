interface InputGroupProps {
  children: React.ReactNode;
}

export const InputGroup = ({ children }: InputGroupProps) => {
  return <div className="mb-4">{children}</div>;
};
