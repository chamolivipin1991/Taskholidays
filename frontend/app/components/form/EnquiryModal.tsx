"use client";

import React, { useState, useEffect } from "react";
import AppModal from "@/components/shared/AppModal";
import EnquiryForm, {
  type EnquiryFormValues,
} from "@/components/form/EnquiryForm";
import FormSubmitted from "@/components/form/FormSubmitted";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  initialValues?: Partial<EnquiryFormValues>;
  onSubmit: (data: EnquiryFormValues) => void;
  showDateFields?: boolean;
  size?: "small" | "medium" | "large";
  successHeading?: string;
  successSubheading?: string;
}

const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  title = "Plan Your Trip",
  initialValues,
  onSubmit,
  showDateFields = true,
  size = "medium",
  successHeading,
  successSubheading,
}) => {
  const [showSuccess, setShowSuccess] = useState(false);

  // Reset success state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setShowSuccess(false);
    }
  }, [isOpen]);

  const handleFormSubmit = (data: EnquiryFormValues) => {
    onSubmit(data);
    setShowSuccess(true); // switch to success view
  };

  const handleSuccessClose = () => {
    onClose(); // close the modal
  };

  return (
    <AppModal isOpen={isOpen} onClose={onClose} title={title} size={size}>
      {showSuccess ? (
        <FormSubmitted
          heading={successHeading}
          subheading={successSubheading}
        />
      ) : (
        <EnquiryForm
          initialValues={initialValues}
          onSubmit={handleFormSubmit}
          showDateFields={showDateFields}
          showPersonalFields={true}
          submitButtonText="Find My Perfect Trip →"
          hidePrivacyText={false}
          isPackageEnquiry={!!initialValues?.packageDuration}
        />
      )}
    </AppModal>
  );
};

export default EnquiryModal;
