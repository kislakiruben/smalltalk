import { forwardRef } from "react";

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {}
type Ref = HTMLInputElement;

export const Input = forwardRef<Ref, InputProps>((props, ref) => (
  <input
    className="border border-slate-300 rounded-full text-sm px-5 py-2 w-full text-slate-700 disabled:text-slate-400"
    ref={ref}
    {...props}
  />
));
