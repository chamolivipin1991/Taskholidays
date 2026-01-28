import React from "react";
import Select from "react-select";
import { useForm, UseFormRegister, FieldValues } from "react-hook-form";

import { defaultCountry, countryCodes } from "@/utils/countrycode";
import styles from "./CountryCode.module.css";

interface CountryCodeDropdownProps {
  label?: string;
  register: any;
  name: string;
  isMulti: boolean;
  onChange: (selectedOption: any) => void;
  placeholder: string;
  [key: string]: any; // For any additional props
}

const CountryCode: React.FC<CountryCodeDropdownProps> = ({
  label,
  register,
  name,
  isMulti,
  onChange,
  placeholder,
  ...rest
}) => {
  const formatOptionLabel = ({
    value,
    name,
    emoji,
  }: {
    value: string;
    name: string;
    emoji: any;
  }) => (
    <div className={styles.countryCode__option}>
      <span className={styles["countryCode__option-img"]}>{emoji}</span>
      <div className={styles["countryCode__option-isd"]}>{value}</div>
      <div className={styles["countryCode__option-name"]}>{name}</div>
    </div>
  );

  return (
    <div className={styles.countryCode}>
      {label && <label className={styles.countryCode__label}>{label}</label>}
      <Select
        classNamePrefix="taskholidays"
        formatOptionLabel={formatOptionLabel}
        options={countryCodes}
        defaultValue={defaultCountry}
        isMulti={isMulti}
        name={name}
        isSearchable={true}
        onChange={onChange}
        placeholder={placeholder}
        styles={{ menuPortal: (base) => ({ ...base, zIndex: 111 }) }}
        id="long-value-select"
        instanceId="long-value-select"
        menuPortalTarget={
          typeof document !== "undefined" ? document.body : undefined
        }
        {...rest}
      />
    </div>
  );
};

export default CountryCode;
