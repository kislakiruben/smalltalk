import cx from "classnames";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
  disabled?: boolean;
  primary?: boolean;
}

export const Button = ({
  children,
  className,
  disabled,
  primary,
  ...props
}: ButtonProps) => (
  <button
    className={cx(
      "border rounded-full text-sm font-semibold px-5 py-2",
      {
        "opacity-60": disabled,
        "hover:enabled:bg-slate-100/50": !disabled && !primary,
        "bg-purple-500 border-purple-600 text-white": primary,
        "hover:bg-purple-600": primary && !disabled,
        "border-purple-500/60": primary && disabled,
      },
      className
    )}
    {...props}
  >
    {children}
  </button>
);
