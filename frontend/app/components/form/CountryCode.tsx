// CountryCode.tsx
"use client";

import React from "react";
import Select from "react-select";
import { countryCodes, defaultCountry } from "@/utils/countrycode";
import styles from "./CountryCode.module.css";

interface CountryCodeProps {
  value?: any;
  onChange: (option: any) => void;
  placeholder?: string;
  label?: string;
}

const CountryCode: React.FC<CountryCodeProps> = ({
  value,
  onChange,
  placeholder = "Code",
  label,
}) => {
  const formatOptionLabel = ({ value, name, emoji }: any) => (
    <div className={styles.option}>
      <span className={styles.option__flag}>{emoji}</span>
      <span className={styles.option__isd}>{value}</span>
      <span className={styles.option__name}>{name}</span>
    </div>
  );

  const customStyles = {
    control: (base: any) => ({
      ...base,
      minHeight: 40,
      borderColor: "#d1d5db",
    }),

    valueContainer: (base: any) => ({
      ...base,
      padding: "0 8px",
      display: "flex",
      alignItems: "center",
    }),

    menu: (base: any) => ({
      ...base,
      width: 260, // increase dropdown width
    }),

    input: () => ({
      display: "none",
    }),

    singleValue: (base: any) => ({
      ...base,
      margin: 0,
      display: "flex",
      alignItems: "center",
    }),

    menuPortal: (base: any) => ({
      ...base,
      zIndex: 9999,
    }),
  };

  return (
    <div className={styles.countryCode}>
      {label && <label className={styles.countryCode__label}>{label}</label>}
      <Select
        classNamePrefix="select"
        options={countryCodes}
        defaultValue={defaultCountry}
        value={value}
        onChange={onChange}
        isSearchable={false}
        placeholder={placeholder}
        formatOptionLabel={formatOptionLabel}
        menuPortalTarget={typeof window !== "undefined" ? document.body : null}
        menuPosition="fixed"
        styles={customStyles}
        components={{
          SingleValue: ({ data }: any) => (
            <div className={styles.singleValue}>
              <span className={styles.singleValue__flag}>{data.emoji}</span>
              <span className={styles.singleValue__isd}>{data.value}</span>
            </div>
          ),
        }}
      />
    </div>
  );
};

export default CountryCode;
