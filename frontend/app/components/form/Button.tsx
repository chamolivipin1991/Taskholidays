import React from "react";
import styles from "./Button.module.css";
import clsx from "clsx";

export type ButtonVariant =
  | "dark"
  | "darkRed"
  | "darkRedEmpty"
  | "activeLine"
  | "darkBordered"
  | "darkBorderedTheme"
  | "darkLine"
  | "simple";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  text: string;
  small?: boolean;
  textInSpan?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const Button = ({
  variant,
  type = "button",
  onClick,
  text,
  className,
  disabled = false,
  small = false,
  textInSpan = false,
  icon,
  iconPosition = "right",
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        styles.button,
        styles[variant],
        small && styles.small,
        className,
      )}
      {...rest}
    >
      {icon && iconPosition === "left" && (
        <span className={styles.button__icon}>{icon}</span>
      )}
      {textInSpan ? <span className={styles.ctaText}>{text}</span> : text}
      {icon && iconPosition === "right" && (
        <span className={styles.button__icon}>{icon}</span>
      )}
    </button>
  );
};

export default Button;
