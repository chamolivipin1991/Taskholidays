import React from "react";
import CountryCode from "@/components/form/CountryCode";
import Input from "@/components/form/Input"; // Changed from TextInput to Input
import { useForm } from "react-hook-form";
import styles from "./PhoneNumber.module.css"; // Create this CSS module

interface SelectedOption {
  value: string;
  label: string;
}

interface PhoneNumberInputProps {
  label: string;
  onCountryCodeChange: (selectedOption: any) => void;
  register: any;
  error: any;
  numberRegName?: string;
  hideError?: boolean;
}

const PhoneNumber: React.FC<PhoneNumberInputProps> = ({
  label,
  onCountryCodeChange,
  register,
  error,
  numberRegName = "phone_number",
  hideError = false,
}) => {
  return (
    <div
      className={`${styles.phoneNumber} ${
        error?.message ? styles["phoneNumber--error"] : ""
      }`}
    >
      <label className={styles.phoneNumber__label}>{label}</label>

      <div className={styles.phoneNumber__wrapper}>
        <div className={styles.phoneNumber__countryCode}>
          <CountryCode
            label=""
            register={register("isd", { required: true })}
            isMulti={false}
            name="countryCode"
            placeholder="Country Code"
            onChange={(selectedOption) => onCountryCodeChange(selectedOption)}
          />
        </div>

        <div className={styles.phoneNumber__input}>
          <Input
            type="tel"
            placeholder="Phone number"
            wrapperClass={styles["phoneNumber__input-field"]}
            {...register(numberRegName, {
              required: "Phone number is required",
              pattern: {
                value: /^[6-9]\d{9}$/,
                message:
                  "Please enter a valid 10-digit phone number starting with 6-9",
              },
              maxLength: {
                value: 10,
                message: "Phone number cannot exceed 10 digits",
              },
            })}
          />
        </div>
      </div>

      {!hideError && error?.message && (
        <p className={styles.phoneNumber__error}>{error.message}</p>
      )}
    </div>
  );
};

export default PhoneNumber;
