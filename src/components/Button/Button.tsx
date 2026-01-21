import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";
import styles from "./Button.module.scss";

const variantMap = {
  contained: styles["button--contained"],
  outlined: styles["button--outlined"],
  text: styles["button--text"],
};

type TButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: "contained" | "outlined" | "text";
};

const Button = ({ children, className, variant = "contained", ...props }: TButtonProps) => {
  return (
    <button className={clsx(styles.button, variantMap[variant], className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
