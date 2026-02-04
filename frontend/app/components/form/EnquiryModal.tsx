"use client";

import React from "react";
import AppModal from "@/components/shared/AppModal";
import EnquiryForm, {
  type EnquiryFormValues,
} from "@/components/form/EnquiryForm";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  initialValues?: Partial<EnquiryFormValues>;
  onSubmit: (data: EnquiryFormValues) => void;
  showDateFields?: boolean;
  size?: "small" | "medium" | "large";
}

const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  title = "Plan Your Trip",
  initialValues,
  onSubmit,
  showDateFields = true,
  size = "medium",
}) => {
  const handleFormSubmit = (data: EnquiryFormValues) => {
    onSubmit(data);
    onClose(); // Close modal after submission
  };

  return (
    <AppModal isOpen={isOpen} onClose={onClose} title={title} size={size}>
      <EnquiryForm
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
        showDateFields={showDateFields}
        showPersonalFields={true}
        submitButtonText="Find My Perfect Trip →"
        hidePrivacyText={false}
        isPackageEnquiry={!!initialValues?.packageDuration}
      />
    </AppModal>
  );
};

export default EnquiryModal;
