// hooks/useEnquiryModal.ts
import { useState } from "react";
import { EnquiryFormValues } from "@/components/form/EnquiryForm";

export const useEnquiryModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [initialValues, setInitialValues] =
    useState<Partial<EnquiryFormValues>>();

  const openEnquiry = (values: Partial<EnquiryFormValues>) => {
    setInitialValues(values);
    setIsOpen(true);
  };

  const closeEnquiry = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    initialValues,
    openEnquiry,
    closeEnquiry,
  };
};
