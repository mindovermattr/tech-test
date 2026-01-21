import clsx from "clsx";
import { cloneElement, isValidElement, type ReactElement } from "react";
import styles from "./GlassCard.module.scss";

type TGlassCardProps = {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const GlassCard = ({ children, className, asChild = false, ...props }: TGlassCardProps) => {
  const glassCardClassName = `${styles["glass-card"]} ${className || ""}`.trim();

  if (asChild) {
    if (isValidElement(children)) {
      const child = children as ReactElement<{ className?: string }>;
      return cloneElement(child, {
        ...props,
        ...child.props,
        className: clsx(glassCardClassName, child.props.className),
      });
    }
    return children;
  }
  return (
    <div className={glassCardClassName} {...props}>
      {children}
    </div>
  );
};
export default GlassCard;
