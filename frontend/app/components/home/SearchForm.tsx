import styles from "./SearchForm.module.css";
import FormField from "../form/FormField";
import Input from "../form/Input";
import Button from "../form/Button";

import { CalendarIcon } from "./../../assets/icons/icons";

const SearchForm = () => {
  return (
    <form className={styles.search}>
      <FormField label="Location">
        <Input
          type="text"
          placeholder="Enter your destination"
          icon={
            <CalendarIcon
              className={styles.input__icon}
              fill="var(--primary-color)" // Custom fill color
              size={20} // Custom size
            />
          }
        />
      </FormField>

      <FormField label="Date">
        <Input
          type="date"
          icon={
            <CalendarIcon
              className={styles.input__icon}
              fill="var(--primary-color)" // Custom fill color
              size={20} // Custom size
            />
          }
        />
      </FormField>

      <FormField label="Price">
        <Input
          type="number"
          placeholder="Enter your budget"
          icon={
            <CalendarIcon
              className={styles.input__icon}
              fill="var(--primary-color)" // Custom fill color
              size={20} // Custom size
            />
          }
        />
      </FormField>

      <Button
        text="Find My Adventure"
        onClick={() => {}}
        variant="dark"
        type="submit"
      ></Button>
    </form>
  );
};

export default SearchForm;
