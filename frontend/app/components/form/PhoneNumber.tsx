// PhoneNumber.tsx
"use client";

import React from "react";
import { UseFormRegister, FieldError } from "react-hook-form";
import Input from "@/components/form/Input";
import CountryCode from "@/components/form/CountryCode";
import styles from "./PhoneNumber.module.css";

interface PhoneNumberProps {
  label: string;
  register: UseFormRegister<any>;
  isdError?: FieldError;
  phoneError?: FieldError;
  onCountryCodeChange: (option: any) => void;
  isdValue?: any;
}

const PhoneNumber: React.FC<PhoneNumberProps> = ({
  label,
  register,
  isdError,
  phoneError,
  onCountryCodeChange,
  isdValue,
}) => {
  return (
    <>
      <label className="form_label__shared">
        {label} <span className="required_mark">*</span>
      </label>
      <div className={styles.phoneNumber}>
        <div className={styles.phoneNumber__countryCode}>
          <CountryCode
            value={isdValue}
            onChange={onCountryCodeChange}
            placeholder="Code"
          />
          {isdError && <span className="form__error">{isdError.message}</span>}
        </div>
        <div className={styles.phoneNumber__number}>
          <Input
            {...register("phoneNumber")}
            type="tel"
            placeholder="Phone number"
          />
        </div>
      </div>
      {phoneError && <span className="form__error">{phoneError.message}</span>}
    </>
  );
};

export default PhoneNumber;
