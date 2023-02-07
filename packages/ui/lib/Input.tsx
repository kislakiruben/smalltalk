interface InputProps {}

export const Input = (props: InputProps) => {
  return (
    <input
      className="border border-slate-300 rounded-full text-xs px-4 py-2 w-full text-slate-700"
      {...props}
    />
  );
};
