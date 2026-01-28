import styles from "./Input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  wrapperClass?: string;
  register?: any; // For react-hook-form integration
}

const Input = ({ icon, wrapperClass = "", register, ...props }: InputProps) => {
  const inputElement = (
    <input className={styles.input} {...(register || {})} {...props} />
  );

  return (
    <div
      className={`${styles.input__wrapper} ${
        icon ? styles["input__wrapper--with-icon"] : ""
      } ${wrapperClass}`}
    >
      {icon && <span className={styles.input__icon}>{icon}</span>}
      {inputElement}
    </div>
  );
};

export default Input;
