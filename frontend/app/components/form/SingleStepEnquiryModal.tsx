"use client";

import { useState } from "react";
import AppModal from "@/components/shared/AppModal";
import EnquiryForm, {
  type EnquiryFormValues,
} from "@/components/form/EnquiryForm";
import Button from "@/components/form/Button";
import styles from "./SingleStepEnquiryModal.module.css";

interface SingleStepEnquiryModalProps {
  buttonText?: string;
  buttonVariant?: "dark";
  className?: string;
}

export default function SingleStepEnquiryModal({
  buttonText = "PLAN MY TRIP",
  buttonVariant = "dark",
  className = "",
}: SingleStepEnquiryModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (data: EnquiryFormValues) => {
    console.log("Form submitted:", data);
    // Handle API call here
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        text={buttonText}
        variant={buttonVariant}
        onClick={() => setIsModalOpen(true)}
        className={className}
      />

      <AppModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Plan Your Perfect Trip"
        size="large"
      >
        <EnquiryForm
          onSubmit={handleSubmit}
          showDateFields={true}
          showPersonalFields={true}
          submitButtonText="Find My Perfect Trip →"
          hidePrivacyText={false}
        />
      </AppModal>
    </>
  );
}
