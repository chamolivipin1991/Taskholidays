"use client";

import React from "react";
import useEnquiryModal from "@/hooks/useEnquiryModal";
import EnquiryModal from "@/components/form/EnquiryModal";
import Button, { ButtonProps } from "@/components/form/Button";
import { EnquiryFormValues } from "@/components/form/EnquiryForm";

interface PlanTripModalProps extends Omit<ButtonProps, "onClick"> {
  modalTitle?: string;
  initialValues?: Partial<EnquiryFormValues>;
  onFormSubmit: (data: EnquiryFormValues) => void;
  showDateFields?: boolean;
  modalSize?: "small" | "medium" | "large";
  children?: React.ReactElement<{ onClick?: () => void }>;
}

const PlanTripModal: React.FC<PlanTripModalProps> = ({
  modalTitle = "Plan Your Trip",
  initialValues,
  onFormSubmit,
  showDateFields = true,
  modalSize = "medium",
  children,
  ...buttonProps
}) => {
  const modal = useEnquiryModal(initialValues);

  const handleSubmit = (data: EnquiryFormValues) => {
    onFormSubmit(data);
    // Additional logic can be added here
  };

  return (
    <>
      {/* Render button or custom children */}
      {children ? (
        React.cloneElement(children, {
          onClick: modal.open,
        })
      ) : (
        <Button {...buttonProps} onClick={modal.open} />
      )}

      <EnquiryModal
        isOpen={modal.isOpen}
        onClose={modal.close}
        title={modalTitle}
        initialValues={modal.formData}
        onSubmit={handleSubmit}
        showDateFields={showDateFields}
        size={modalSize}
      />
    </>
  );
};

export default PlanTripModal;
