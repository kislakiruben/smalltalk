interface LabelProps extends React.ComponentPropsWithoutRef<"label"> {
  children: React.ReactNode;
}

export const Label = ({ children, ...props }: LabelProps) => (
  <label
    className="block font-semibold text-sm text-slate-600 mb-1 cursor-pointer"
    {...props}
  >
    {children}
  </label>
);
