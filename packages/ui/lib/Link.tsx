import cx from "classnames";

interface LinkProps {
  children: React.ReactNode;
  className?: string;
  href: string;
}

export const Link = ({ children, className, ...props }: LinkProps) => (
  <a className={cx("text-purple-700 hover:underline", className)} {...props}>
    {children}
  </a>
);
