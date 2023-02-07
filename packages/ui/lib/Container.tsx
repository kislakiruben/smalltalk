interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return <div className="px-6 w-full max-w-screen-xl mx-auto">{children}</div>;
};
