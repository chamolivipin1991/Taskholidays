"use client";

import React from "react";
import { useEnquiryModal } from "@/hooks/useEnquiryModal";
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
  initialValues = {}, // 👈 default to empty object
  onFormSubmit,
  showDateFields = true,
  modalSize = "medium",
  children,
  ...buttonProps
}) => {
  const modal = useEnquiryModal();

  const handleOpen = () => {
    modal.openEnquiry(initialValues); // now always an object
  };

  const handleSubmit = (data: EnquiryFormValues) => {
    onFormSubmit(data);
    modal.closeEnquiry();
  };

  return (
    <>
      {children ? (
        React.cloneElement(children, {
          onClick: handleOpen,
        })
      ) : (
        <Button {...buttonProps} onClick={handleOpen} />
      )}

      <EnquiryModal
        isOpen={modal.isOpen}
        onClose={modal.closeEnquiry}
        title={modalTitle}
        initialValues={modal.initialValues}
        onSubmit={handleSubmit}
        showDateFields={showDateFields}
        size={modalSize}
      />
    </>
  );
};

export default PlanTripModal;
