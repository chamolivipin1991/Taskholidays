"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Select from "react-select";
import Input from "@/components/form/Input";
import { getMonthOptions, getYearOptions } from "@/utils/dateOptions";
import { CheckIcon } from "@/assets/icons/icons";
import Button from "@/components/form/Button";
import PhoneNumber from "./PhoneNumber";
import { countryCodes, defaultCountry } from "@/utils/countrycode";
import styles from "./EnquiryForm.module.css";

export const destinationOptions = [
  { value: "andaman", label: "Andaman" },
  { value: "kerala", label: "Kerala" },
  { value: "ladakh", label: "Ladakh" },
  { value: "rajasthan", label: "Rajasthan" },
  { value: "bali", label: "Bali" },
  { value: "dubai", label: "Dubai" },
];

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScoom94uvndvGCcBHqN27XAmh4zJDJedvlD9A0XPX6TQ1ZObA/formResponse";
const FIELD_IDS = {
  month: "entry.2062927004",
  year: "entry.620996789",
  fullName: "entry.1481996221",
  phoneNumber: "entry.1544969566",
  email: "entry.664913777",
  destination: "entry.1460319458",
  packageDuration: "entry.2061665803",
};

export const enquiryFormSchema = z.object({
  month: z.object({ label: z.string(), value: z.number() }).optional(),
  year: z.object({ label: z.string(), value: z.number() }).optional(),
  fullName: z
    .string()
    .min(1, "Full name is required")
    .regex(/^[A-Za-z\s]+$/, "Only letters and spaces allowed")
    .max(100),
  isd: z.string().min(1, "Country code is required"),
  phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15)
    .regex(/^\d+$/, "Phone number must contain only digits"),
  email: z.string().email("Invalid email address"),
  destination: z.object({ value: z.string(), label: z.string() }).optional(),
  packageDuration: z
    .object({ value: z.string(), label: z.string() })
    .optional(),
});

export type EnquiryFormValues = z.infer<typeof enquiryFormSchema>;

interface EnquiryFormProps {
  initialValues?: Partial<EnquiryFormValues>;
  onSubmit: (data: EnquiryFormValues) => void;
  showDateFields?: boolean;
  showPersonalFields?: boolean;
  submitButtonText?: string;
  hidePrivacyText?: boolean;
  isPackageEnquiry?: boolean;
}

export default function EnquiryForm({
  initialValues,
  onSubmit,
  showDateFields = true,
  showPersonalFields = true,
  submitButtonText = "Submit Enquiry →",
  hidePrivacyText = false,
  isPackageEnquiry = false,
}: EnquiryFormProps) {
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquiryFormSchema),
    defaultValues: {
      fullName: "",
      isd: "+91",
      phoneNumber: "",
      email: "",
      ...initialValues,
    },
  });

  const selectedYear = watch("year")?.value ?? null;
  const currentIsd = watch("isd");
  const selectedCountry =
    countryCodes.find((c) => c.value === currentIsd) || defaultCountry;

  const sendToGoogleSheet = async (data: EnquiryFormValues) => {
    const formData = new URLSearchParams();
    formData.append(FIELD_IDS.month, data.month?.label ?? "");
    formData.append(FIELD_IDS.year, data.year?.label ?? "");
    formData.append(FIELD_IDS.fullName, data.fullName);
    formData.append(FIELD_IDS.phoneNumber, `${data.isd}${data.phoneNumber}`);
    formData.append(FIELD_IDS.email, data.email);
    formData.append(FIELD_IDS.destination, data.destination?.label ?? "");
    formData.append(
      FIELD_IDS.packageDuration,
      data.packageDuration?.label ?? "",
    );

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

  const onFormSubmit = async (data: EnquiryFormValues) => {
    await sendToGoogleSheet(data);
    onSubmit(data); // parent will switch to success view
  };

  return (
    <form className={styles.enquiryForm} onSubmit={handleSubmit(onFormSubmit)}>
      {showDateFields && (
        <div className={styles.enquiryForm__dateFields}>
          <div className={styles.enquiryForm__field}>
            <label className="form_label__shared">
              Month <span className="required_mark">*</span>
            </label>
            <Controller
              name="month"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={getMonthOptions(selectedYear)}
                  placeholder="Month"
                  classNamePrefix="selectMonthYear"
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
                      borderColor: errors.month ? "#dc2626" : "#d1d5db",
                      width: "100%",
                    }),
                    menuPortal: (base) => ({ ...base, zIndex: 9999 }),
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
            <label className="form_label__shared">
              Year <span className="required_mark">*</span>
            </label>
            <Controller
              name="year"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={getYearOptions()}
                  placeholder="Year"
                  classNamePrefix="selectMonthYear"
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
                      borderColor: errors.year ? "#dc2626" : "#d1d5db",
                      width: "100%",
                    }),
                    menuPortal: (base) => ({ ...base, zIndex: 9999 }),
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
      )}

      {showPersonalFields && (
        <div className={styles.enquiryForm__fields}>
          <div className={styles.enquiryForm__field}>
            <label className="form_label__shared">
              Full Name <span className="required_mark">*</span>
            </label>
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
            <PhoneNumber
              label="Contact Number"
              register={register}
              isdError={errors.isd}
              phoneError={errors.phoneNumber}
              onCountryCodeChange={(option) => setValue("isd", option.value)}
              isdValue={selectedCountry}
            />
          </div>

          <div className={styles.enquiryForm__field}>
            <label className="form_label__shared">
              Email ID <span className="required_mark">*</span>
            </label>
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

          <div className={styles.enquiryForm__packageInfo}>
            {isPackageEnquiry ? (
              <>
                {/* Destination (prefilled) */}
                <div className={styles.enquiryForm__field}>
                  <label className="form_label__shared">Destination</label>
                  <Input
                    value={initialValues?.destination?.label || ""}
                    disabled
                  />
                </div>

                {/* Package Duration (prefilled) */}
                <div className={styles.enquiryForm__field}>
                  <label className="form_label__shared">Package Duration</label>
                  <Input
                    value={initialValues?.packageDuration?.label || ""}
                    disabled
                  />
                </div>
              </>
            ) : (
              <div className={styles.enquiryForm__field}>
                <label className="form_label__shared">Destination *</label>

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
                          borderColor: errors.destination
                            ? "#dc2626"
                            : "#d1d5db",
                        }),
                        menuPortal: (base) => ({ ...base, zIndex: 9999 }),
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
            )}
          </div>
        </div>
      )}

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
            <span className={styles.enquiryForm__privacyIcon}>
              <CheckIcon fill="var(--color-text-primary)" size={20} />
            </span>
            100% Privacy Guaranteed
          </p>
        )}
      </div>
    </form>
  );
}
