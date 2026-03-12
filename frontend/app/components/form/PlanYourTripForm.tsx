"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Select from "react-select";
import styles from "./PlanYourTripForm.module.css";
import Input from "@/components/form/Input";

// Define the Zod schema
const planTripSchema = z.object({
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

// Define TypeScript type from the schema
type PlanTripFormValues = z.infer<typeof planTripSchema>;

// Destination options for react-select
const destinationOptions = [
  { value: "andaman", label: "Andaman" },
  { value: "kerala", label: "Kerala" },
  { value: "ladakh", label: "Ladakh" },
  { value: "rajasthan", label: "Rajasthan" },
  { value: "bali", label: "Bali" },
  { value: "dubai", label: "Dubai" },
];

export default function PlanYourTripForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<PlanTripFormValues>({
    resolver: zodResolver(planTripSchema),
    defaultValues: {
      fullName: "",
      contactNumber: "",
      email: "",
    },
  });

  const onSubmit = (data: PlanTripFormValues) => {
    console.log("Validated Form Data:", {
      ...data,
      destination: data.destination.value, // Extract just the value if needed
    });
    // You can also keep the full object: { label: "Andaman", value: "andaman" }
  };

  return (
    <form className={styles["trip-form"]} onSubmit={handleSubmit(onSubmit)}>
      {/* Full Name */}
      <div className={styles["trip-form__field"]}>
        <label className={styles["trip-form__label"]}>Full Name *</label>
        <Input
          {...register("fullName")}
          placeholder="Enter your full name (letters only)"
          type="text"
        />
        {errors.fullName && (
          <span className="form__error">{errors.fullName.message}</span>
        )}
      </div>

      {/* Grid for Contact Number and Email */}
      <div className={styles["trip-form__grid"]}>
        <div className={styles["trip-form__field"]}>
          <label className={styles["trip-form__label"]}>Contact Number *</label>
          <Input
            {...register("contactNumber")}
            placeholder="e.g., +91 9876543210"
            type="tel"
          />
          {errors.contactNumber && (
            <span className="form__error">{errors.contactNumber.message}</span>
          )}
        </div>

        <div className={styles["trip-form__field"]}>
          <label className={styles["trip-form__label"]}>Email ID *</label>
          <Input
            {...register("email")}
            placeholder="e.g., john@example.com"
            type="email"
          />
          {errors.email && (
            <span className="form__error">{errors.email.message}</span>
          )}
        </div>
      </div>

      {/* Destination - React Select */}
      <div className={styles["trip-form__field"]}>
        <label className={styles["trip-form__label"]}>Destination *</label>
        <Controller
          name="destination"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={destinationOptions}
              placeholder="Select a destination"
              className={styles["trip-form__select"]}
              classNamePrefix="select"
              isSearchable
              styles={{
                control: (base) => ({
                  ...base,
                  padding: "2px",
                  borderColor: errors.destination ? "#dc2626" : "#d1d5db",
                  "&:hover": {
                    borderColor: errors.destination ? "#dc2626" : "#9ca3af",
                  },
                }),
              }}
            />
          )}
        />
        {errors.destination && (
          <span className="form__error">Please select a destination</span>
        )}
      </div>

      <button type="submit" className={styles["trip-form__submit"]}>
        Find My Perfect Trip →
      </button>
    </form>
  );
}
