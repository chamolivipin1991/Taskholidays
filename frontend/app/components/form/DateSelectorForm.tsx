"use client";

import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Select from "react-select";
import { useEffect, useMemo } from "react";
import { getMonthOptions, getYearOptions } from "@/utils/dateOptions";
import Button, { ButtonVariant } from "@/components/form/Button";
import styles from "./DateSelectorForm.module.css";
import { CheckIcon } from "@/assets/icons/icons";

// Define a type for select options with optional isDisabled
type SelectOption = { label: string; value: number; isDisabled?: boolean };

// Static list of all months (always enabled by default)
const ALL_MONTHS: SelectOption[] = Array.from({ length: 12 }, (_, i) => ({
  label: new Date(0, i).toLocaleString("default", { month: "long" }),
  value: i + 1,
}));

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
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<DateSelectorValues>({
    resolver: zodResolver(dateSelectorSchema),
    mode: "onChange",
  });

  const selectedMonth = watch("month");
  const selectedYear = watch("year");

  // Current date for validation
  const now = useMemo(() => new Date(), []);
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1; // months are 0-indexed in JS

  // Generate month options based on selected year
  const monthOptions = useMemo<SelectOption[]>(() => {
    if (!selectedYear) {
      // No year selected → show all months enabled
      return ALL_MONTHS;
    }

    const year = selectedYear.value;
    if (year > currentYear) {
      // Future year – all months enabled
      return ALL_MONTHS;
    } else if (year === currentYear) {
      // Current year – disable months before current month
      return ALL_MONTHS.map((m) => ({
        ...m,
        isDisabled: m.value < currentMonth,
      }));
    } else {
      // Past year – all months disabled (shouldn't happen if yearOptions are correct)
      return ALL_MONTHS.map((m) => ({ ...m, isDisabled: true }));
    }
  }, [selectedYear, currentYear, currentMonth]);

  // Generate year options based on selected month
  const yearOptions = useMemo<SelectOption[]>(() => {
    // Generate only current and next year
    const years: SelectOption[] = [
      { label: currentYear.toString(), value: currentYear },
      { label: (currentYear + 1).toString(), value: currentYear + 1 },
    ];

    if (!selectedMonth) {
      // No month selected → both years are enabled
      return years.map((y) => ({ ...y, isDisabled: false }));
    }

    const month = selectedMonth.value;
    return years.map((y) => {
      if (y.value === currentYear) {
        // Current year: disabled if selected month is before current month
        return { ...y, isDisabled: month < currentMonth };
      } else {
        // Next year: always enabled
        return { ...y, isDisabled: false };
      }
    });
  }, [selectedMonth, currentYear, currentMonth]);

  // Reset month if it becomes invalid after year change
  useEffect(() => {
    if (selectedMonth && selectedYear) {
      const year = selectedYear.value;
      const month = selectedMonth.value;
      if (
        year < currentYear ||
        (year === currentYear && month < currentMonth)
      ) {
        setValue("month", undefined as any, { shouldValidate: true });
      }
    }
  }, [selectedMonth, selectedYear, currentYear, currentMonth, setValue]);

  // Reset year if it becomes invalid after month change
  useEffect(() => {
    if (selectedMonth && selectedYear) {
      const year = selectedYear.value;
      const month = selectedMonth.value;
      if (
        year < currentYear ||
        (year === currentYear && month < currentMonth)
      ) {
        setValue("year", undefined as any, { shouldValidate: true });
      }
    }
  }, [selectedMonth, selectedYear, currentYear, currentMonth, setValue]);

  const isSubmitDisabled = !selectedMonth || !selectedYear || isSubmitting;

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
              options={monthOptions}
              placeholder="Month"
              classNamePrefix="selectMonthYear"
              menuPortalTarget={
                typeof window !== "undefined" ? document.body : null
              }
              menuPosition="fixed"
              isOptionDisabled={(option: SelectOption) => !!option.isDisabled}
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
                  borderColor: errors.month ? "#dc2626" : "#d1d5db",
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
              options={yearOptions}
              placeholder="Year"
              classNamePrefix="selectMonthYear"
              menuPortalTarget={
                typeof window !== "undefined" ? document.body : null
              }
              menuPosition="fixed"
              isOptionDisabled={(option: SelectOption) => !!option.isDisabled}
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
                  borderColor: errors.year ? "#dc2626" : "#d1d5db",
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
          disabled={isSubmitDisabled}
          small={true}
          className={styles.dateSelector__submit}
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
