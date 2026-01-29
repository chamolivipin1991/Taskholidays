"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Select from "react-select";
import Input from "@/components/form/Input";
import { getMonthOptions, getYearOptions } from "@/utils/dateOptions";
import styles from "./EnquiryForm.module.css";
import Button from "@/components/form/Button";

// Destination options
export const destinationOptions = [
  { value: "andaman", label: "Andaman" },
  { value: "kerala", label: "Kerala" },
  { value: "ladakh", label: "Ladakh" },
  { value: "rajasthan", label: "Rajasthan" },
  { value: "bali", label: "Bali" },
  { value: "dubai", label: "Dubai" },
];

// Zod schema for all fields
export const enquiryFormSchema = z.object({
  month: z.object({
    label: z.string(),
    value: z.number(),
  }),
  year: z.object({
    label: z.string(),
    value: z.number(),
  }),
  fullName: z
    .string()
    .min(1, "Full name is required")
    .regex(/^[A-Za-z\s]+$/, "Full name should contain only letters and spaces")
    .max(100, "Full name is too long"),
  contactNumber: z
    .string()
    .min(1, "Contact number is required")
    .regex(/^[0-9+\-\s()]+$/, "Invalid phone number format")
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number is too long"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  destination: z.object({
    value: z.string(),
    label: z.string(),
  }),
});

export type EnquiryFormValues = z.infer<typeof enquiryFormSchema>;

interface EnquiryFormProps {
  initialValues?: Partial<EnquiryFormValues>;
  onSubmit: (data: EnquiryFormValues) => void;
  showDateFields?: boolean;
  showPersonalFields?: boolean;
  submitButtonText?: string;
  hidePrivacyText?: boolean;
}

export default function EnquiryForm({
  initialValues,
  onSubmit,
  showDateFields = true,
  showPersonalFields = true,
  submitButtonText = "Submit Enquiry →",
  hidePrivacyText = false,
}: EnquiryFormProps) {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquiryFormSchema),
    defaultValues: {
      fullName: "",
      contactNumber: "",
      email: "",
      ...initialValues,
    },
  });

  const selectedYear = watch("year")?.value ?? null;

  return (
    <form className={styles.enquiryForm} onSubmit={handleSubmit(onSubmit)}>
      {/* Date Fields (Month & Year) */}
      {showDateFields && (
        <>
          <div className={styles.enquiryForm__dateFields}>
            <div className={styles.enquiryForm__field}>
              <Controller
                name="month"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={getMonthOptions(selectedYear)}
                    placeholder="Month"
                    classNamePrefix="selectMonthYear"
                    menuPortalTarget={
                      typeof window !== "undefined" ? document.body : null
                    }
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
                        borderColor: errors.month ? "#dc2626" : "#d1d5db",
                        width: "100%",
                      }),
                      menuPortal: (base) => ({
                        ...base,
                        zIndex: 9999,
                      }),
                    }}
                  />
                )}
              />
              {errors.month && (
                <span className={styles.enquiryForm__error}>
                  Month is required
                </span>
              )}
            </div>

            <div className={styles.enquiryForm__field}>
              <Controller
                name="year"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={getYearOptions()}
                    placeholder="Year"
                    classNamePrefix="selectMonthYear"
                    menuPortalTarget={
                      typeof window !== "undefined" ? document.body : null
                    }
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
                        borderColor: errors.year ? "#dc2626" : "#d1d5db",
                        width: "100%",
                      }),
                      menuPortal: (base) => ({
                        ...base,
                        zIndex: 9999,
                      }),
                    }}
                  />
                )}
              />
              {errors.year && (
                <span className={styles.enquiryForm__error}>
                  Year is required
                </span>
              )}
            </div>
          </div>
        </>
      )}

      {/* Personal Information Fields */}
      {showPersonalFields && (
        <>
          <div className={styles.enquiryForm__fields}>
            {/* Full Name */}
            <div className={styles.enquiryForm__grid}>
              <div className={styles.enquiryForm__field}>
                <label className={styles.enquiryForm__label}>Full Name *</label>
                <Input
                  {...register("fullName")}
                  placeholder="Enter your full name"
                  type="text"
                />
                {errors.fullName && (
                  <span className={styles.enquiryForm__error}>
                    {errors.fullName.message}
                  </span>
                )}
              </div>

              <div className={styles.enquiryForm__field}>
                <label className={styles.enquiryForm__label}>
                  Contact Number *
                </label>
                <Input
                  {...register("contactNumber")}
                  placeholder="e.g., +91 9876543210"
                  type="tel"
                />
                {errors.contactNumber && (
                  <span className={styles.enquiryForm__error}>
                    {errors.contactNumber.message}
                  </span>
                )}
              </div>
            </div>

            <div className={styles.enquiryForm__grid}>
              <div className={styles.enquiryForm__field}>
                <label className={styles.enquiryForm__label}>Email ID *</label>
                <Input
                  {...register("email")}
                  placeholder="e.g., john@example.com"
                  type="email"
                />
                {errors.email && (
                  <span className={styles.enquiryForm__error}>
                    {errors.email.message}
                  </span>
                )}
              </div>

              {/* Destination */}
              <div className={styles.enquiryForm__field}>
                <label className={styles.enquiryForm__label}>
                  Destination *
                </label>
                <Controller
                  name="destination"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={destinationOptions}
                      placeholder="Select a destination"
                      classNamePrefix="select"
                      isSearchable
                      menuPortalTarget={
                        typeof window !== "undefined" ? document.body : null
                      }
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
                          borderColor: errors.destination
                            ? "#dc2626"
                            : "#d1d5db",
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
                  <span className={styles.enquiryForm__error}>
                    Please select a destination
                  </span>
                )}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Submit Button */}
      <div className={styles.enquiryForm__actions}>
        <Button
          type="submit"
          variant="dark"
          text={submitButtonText}
          disabled={isSubmitting}
          className={styles.enquiryForm__submit}
        />

        {!hidePrivacyText && (
          <p className={styles.enquiryForm__privacy}>
            ✓ 100% Privacy Guaranteed
          </p>
        )}
      </div>
    </form>
  );
}
