"use client";

import { useState } from "react";
import AppModal from "@/components/shared/AppModal";
import DateSelectorForm, {
  type DateSelectorValues,
} from "@/components/form/DateSelectorForm";
import EnquiryForm, {
  type EnquiryFormValues,
} from "@/components/form/EnquiryForm";
import FormSubmitted from "@/components/form/FormSubmitted";
import styles from "./TwoStepEnquiryForm.module.css";

export default function TwoStepEnquiryForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDates, setSelectedDates] = useState<DateSelectorValues | null>(
    null,
  );
  const [showSuccess, setShowSuccess] = useState(false);

  // Handle date selection form submission
  const handleDateSubmit = (data: DateSelectorValues) => {
    setSelectedDates(data);
    setIsModalOpen(true);
    setShowSuccess(false); // reset success when opening modal
  };

  // Handle full form submission
  const handleFullSubmit = (data: EnquiryFormValues) => {
    console.log("Complete form data:", data);
    // Here you can make API call
    setShowSuccess(true); // switch to success view
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setShowSuccess(false); // reset success state
  };

  return (
    <>
      {/* Step 1: Date Selection Form */}
      <DateSelectorForm onSubmit={handleDateSubmit} />

      {/* Step 2: Modal with Full Form or Success Message */}
      <AppModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title={showSuccess ? undefined : "Tell us more about your trip"} // hide title on success
        size="medium"
      >
        <div className={styles.modalContent}>
          {!showSuccess && selectedDates && (
            <p className="modal_notification">
              We will get back to you with the best handpicked travel packages
              for:{" "}
              <strong>
                {selectedDates.month.label} {selectedDates.year.label}
              </strong>
            </p>
          )}

          {showSuccess ? (
            <FormSubmitted
              heading="Thank You!"
              subheading="Your enquiry has been submitted successfully. We'll get back to you soon."
            />
          ) : (
            <EnquiryForm
              initialValues={selectedDates || undefined}
              onSubmit={handleFullSubmit}
              showDateFields={false}
              showPersonalFields={true}
              submitButtonText="Submit Enquiry"
              hidePrivacyText={true}
            />
          )}
        </div>
      </AppModal>
    </>
  );
}
