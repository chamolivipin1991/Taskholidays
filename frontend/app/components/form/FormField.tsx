import styles from "./FormField.module.css";

interface FormFieldProps {
  label: string;
  children: React.ReactNode;
}

const FormField = ({ label, children }: FormFieldProps) => {
  return (
    <div className={styles.field}>
      <label className={styles.field__label}>{label}</label>
      {children}
    </div>
  );
};

export default FormField;
