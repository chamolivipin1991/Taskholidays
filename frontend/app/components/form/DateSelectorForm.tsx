"use client";

import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Select from "react-select";
import { getMonthOptions, getYearOptions } from "@/utils/dateOptions";
import Button, { ButtonVariant } from "@/components/form/Button"; // Import Button component
import styles from "./DateSelectorForm.module.css";
import { CheckIcon } from "@/assets/icons/icons";

// Schema for date selection only
const dateSelectorSchema = z.object({
  month: z.object({
    label: z.string(),
    value: z.number(),
  }),
  year: z.object({
    label: z.string(),
    value: z.number(),
  }),
});

export type DateSelectorValues = z.infer<typeof dateSelectorSchema>;

interface DateSelectorFormProps {
  onSubmit: (data: DateSelectorValues) => void;
  submitButtonVariant?: ButtonVariant;
  submitButtonText?: string;
}

export default function DateSelectorForm({
  onSubmit,
  submitButtonVariant = "dark",
  submitButtonText = "GET STARTED",
}: DateSelectorFormProps) {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<DateSelectorValues>({
    resolver: zodResolver(dateSelectorSchema),
  });

  const selectedYear = watch("year")?.value ?? null;

  return (
    <form className={styles.dateSelector} onSubmit={handleSubmit(onSubmit)}>
      <p className={styles.dateSelector__label}>When do you want to go?</p>

      <div className={styles.dateSelector__fields}>
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

        <Button
          type="submit"
          variant={submitButtonVariant}
          text={submitButtonText}
          disabled={isSubmitting}
          small={true}
          className={styles.dateSelector__submit}
          // Add icon if needed (example with right arrow)
          // icon={<ArrowRight size={20} />}
          // iconPosition="right"
        />
      </div>

      <p className={styles.dateSelector__privacy}>
        <span className={styles.dateSelector__privacy__icon}>
          <CheckIcon fill="var(--color-bg-primary)" size={20} />
        </span>
        100% Privacy Guaranteed
      </p>
    </form>
  );
}
