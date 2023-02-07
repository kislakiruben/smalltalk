import cx from "classnames";

interface ButtonProps {
  disabled?: boolean;
  primary?: boolean;
  children: React.ReactNode;
}

export const Button = ({
  children,
  disabled,
  primary,
  ...props
}: ButtonProps) => (
  <button
    type="button"
    className={cx("border rounded-full text-sm font-semibold px-5 py-2", {
      "opacity-60": disabled,
      "hover:enabled:bg-slate-100/50": !disabled && !primary,
      "bg-purple-500 border-purple-600 text-white": primary,
      "hover:bg-purple-600": primary && !disabled,
      "border-purple-500/60": primary && disabled,
    })}
    {...props}
  >
    {children}
  </button>
);
