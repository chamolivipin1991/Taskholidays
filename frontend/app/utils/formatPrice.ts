// utils/formatPrice.ts
export const formatPrice = (price?: number): string => {
  if (!price) return "On Request";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
};
