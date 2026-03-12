"use client";

import { useState } from "react";
import AppModal from "@/components/shared/AppModal";
import DateSelectorForm, {
  type DateSelectorValues,
} from "@/components/form/DateSelectorForm";
import EnquiryForm, {
  type EnquiryFormValues,
} from "@/components/form/EnquiryForm";
import styles from "./TwoStepEnquiryForm.module.css";

export default function TwoStepEnquiryForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDates, setSelectedDates] = useState<DateSelectorValues | null>(
    null,
  );

  // Handle date selection form submission
  const handleDateSubmit = (data: DateSelectorValues) => {
    setSelectedDates(data);
    setIsModalOpen(true);
  };

  // Handle full form submission
  const handleFullSubmit = (data: EnquiryFormValues) => {
    console.log("Complete form data:", data);
    // Here you can make API call
    setIsModalOpen(false);
    // Reset form if needed
  };

  return (
    <>
      {/* Step 1: Date Selection Form */}
      <DateSelectorForm onSubmit={handleDateSubmit} />

      {/* Step 2: Modal with Full Form */}
      <AppModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Tell us more about your trip"
        size="medium"
      >
        <div className={styles.modalContent}>
          {selectedDates && (
            <p className="modal_notification">
              We will get back to you with the best handpicked travel packages
              for:{" "}
              <strong>
                {selectedDates.month.label} {selectedDates.year.label}
              </strong>
            </p>
          )}

          <EnquiryForm
            initialValues={selectedDates || undefined}
            onSubmit={handleFullSubmit}
            showDateFields={false}
            showPersonalFields={true}
            submitButtonText="Submit Enquiry"
            hidePrivacyText={true}
          />
        </div>
      </AppModal>
    </>
  );
}
