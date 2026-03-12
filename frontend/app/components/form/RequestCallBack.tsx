"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import PhoneNumber from "@/components/form/PhoneNumber";
import Button from "@/components/form/Button";
import { destinationOptions } from "@/components/form/EnquiryForm";
import { countryCodes, defaultCountry } from "@/utils/countrycode";

import styles from "./RequestCallBack.module.css";

const requestCallbackSchema = z.object({
  isd: z.string().min(1, "Country code is required"),
  phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15)
    .regex(/^\d+$/, "Phone number must contain only digits"),
  destination: z.object({
    value: z.string(),
    label: z.string(),
  }),
});

type RequestCallBackValues = z.infer<typeof requestCallbackSchema>;

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/1JW6iy9K2h3n3hdgmDwPTPnL9i97ANR7ndyKEweZ4-hI/formResponse";
const FIELD_IDS = {
  phoneNumber: "entry.650046756",
  destination: "entry.902063439",
};

interface RequestCallBackProps {
  onSuccess?: () => void;
}

const RequestCallBack: React.FC<RequestCallBackProps> = ({ onSuccess }) => {
  const {
    register,
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RequestCallBackValues>({
    resolver: zodResolver(requestCallbackSchema),
    defaultValues: {
      isd: "+91",
      phoneNumber: "",
    },
  });

  const currentIsd = watch("isd");
  const selectedCountry =
    countryCodes.find((c) => c.value === currentIsd) || defaultCountry;

  const sendToGoogleSheet = async (data: RequestCallBackValues) => {
    const formData = new URLSearchParams();
    formData.append(FIELD_IDS.phoneNumber, `${data.isd}${data.phoneNumber}`);
    formData.append(FIELD_IDS.destination, data.destination.label);

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });
    } catch (error) {
      console.error("Google Sheets submission failed:", error);
    }
  };

  const onSubmit = async (data: RequestCallBackValues) => {
    await sendToGoogleSheet(data);
    console.log("Callback request:", data);
    onSuccess?.(); // notify parent of success
  };

  return (
    <form className={styles.requestCallback} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.requestCallback__field}>
        <PhoneNumber
          label="Phone Number"
          register={register}
          isdError={errors.isd}
          phoneError={errors.phoneNumber}
          onCountryCodeChange={(option) => setValue("isd", option.value)}
          isdValue={selectedCountry}
        />
      </div>

      <div className={styles.requestCallback__field}>
        <label className="form_label__shared">
          Destination <span className="required_mark">*</span>
        </label>

        <Controller
          name="destination"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={destinationOptions}
              placeholder="Select destination"
              classNamePrefix="select"
              isSearchable
              menuPortalTarget={document.body}
              menuPosition="fixed"
              styles={{
                container: (base) => ({
                  ...base,
                  width: "100%",
                  textAlign: "left",
                  fontSize: "14px",
                }),
                control: (base) => ({
                  ...base,
                  width: "100%",
                  borderColor: errors.destination ? "#dc2626" : "#d1d5db",
                }),
                menuPortal: (base) => ({
                  ...base,
                  zIndex: 9999,
                }),
              }}
            />
          )}
        />

        {errors.destination && (
          <span className="input_error">Please select a destination</span>
        )}
      </div>

      <div className={styles.requestCallback__actions}>
        <Button
          type="submit"
          variant="dark"
          text="Request Callback"
          disabled={isSubmitting}
        />
      </div>
    </form>
  );
};

export default RequestCallBack;
