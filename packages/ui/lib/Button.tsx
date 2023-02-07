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
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={cx("border rounded-full text-xs font-semibold px-4 py-2", {
        "bg-purple-500 border-purple-700 text-white": primary,
        "opacity-60": disabled,
        "border-purple-500/60": primary && disabled,
      })}
      {...props}
    >
      {children}
    </button>
  );
};
