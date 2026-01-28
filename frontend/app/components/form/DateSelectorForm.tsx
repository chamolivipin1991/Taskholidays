"use client";

import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Select from "react-select";
import { getMonthOptions, getYearOptions } from "@/utils/dateOptions";
import styles from "./DateSelectorForm.module.css";

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
}

export default function DateSelectorForm({ onSubmit }: DateSelectorFormProps) {
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
            />
          )}
        />

        <button
          type="submit"
          className={styles.dateSelector__submit}
          disabled={isSubmitting}
        >
          GET STARTED
        </button>
      </div>

      <p className={styles.dateSelector__privacy}>✓ 100% Privacy Guaranteed</p>
    </form>
  );
}
