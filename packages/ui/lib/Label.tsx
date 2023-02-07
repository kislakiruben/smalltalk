interface LabelProps {
  children: React.ReactNode;
}

export const Label = ({ children, ...props }: LabelProps) => (
  <label className="block font-semibold text-sm mb-1" {...props}>
    {children}
  </label>
);
