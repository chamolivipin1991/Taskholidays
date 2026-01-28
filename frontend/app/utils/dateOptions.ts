// utils/dateOptions.ts
export const getMonthOptions = (selectedYear: number | null) => {
  const now = new Date();
  const currentMonth = now.getMonth(); // 0-based
  const currentYear = now.getFullYear();

  return Array.from({ length: 12 }, (_, i) => ({
    label: new Date(0, i).toLocaleString("en-US", { month: "short" }),
    value: i,
    isDisabled: selectedYear === currentYear && i < currentMonth,
  }));
};

export const getYearOptions = (range = 5) => {
  const currentYear = new Date().getFullYear();

  return Array.from({ length: range }, (_, i) => ({
    label: String(currentYear + i),
    value: currentYear + i,
  }));
};
