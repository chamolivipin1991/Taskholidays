import { useState } from "react";
import { EnquiryFormValues } from "@/components/form/EnquiryForm";

export default function useEnquiryModal(
  initialValues?: Partial<EnquiryFormValues>,
) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<
    Partial<EnquiryFormValues> | undefined
  >(initialValues);

  const open = (data?: Partial<EnquiryFormValues>) => {
    if (data) {
      setFormData(data);
    }
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    open,
    close,
    formData,
    setFormData,
  };
}
