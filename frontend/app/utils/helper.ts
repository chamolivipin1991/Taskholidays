import { PhoneNumberUtil } from "google-libphonenumber";

export const handleScrollToSection = ({
  sectionId,
  topSpace = 50,
}: {
  sectionId: string;
  topSpace?: number;
}) => {
  const sectionElement: any =
    typeof document !== "undefined" && document?.getElementById(sectionId);

  if (sectionElement) {
    const offset = sectionElement.offsetTop - topSpace;
    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  }
};

export const sendDataToGoogleSheet = ({
  path,
  params,
}: {
  path: string;
  params: Record<string, string>;
}) => {
  const formData = new FormData();
  Object.keys(params).map((key) => {
    formData.append(key, params[key]);
  });
  fetch(path, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: formData,
  });
};

interface ValidatePhoneNumberParams {
  phone: string;
  countryCode: string; // ISO 3166-1 alpha-2 country code (e.g., 'IN', 'US')
}

/**
 * Validates a phone number using the libphonenumber library.
 * @param params - Object containing phone number and country code.
 * @returns `true` if the phone number is valid, `false` otherwise (or on error).
 */
export const validatePhoneNumber = ({
  phone,
  countryCode,
}: ValidatePhoneNumberParams): boolean => {
  const phoneUtil = PhoneNumberUtil.getInstance();
  try {
    const number = phoneUtil.parseAndKeepRawInput(phone, countryCode);
    return phoneUtil.isValidNumber(number);
  } catch (error) {
    // Log the error if needed, but return false to indicate invalid number
    console.error("Phone number validation error:", error);
    return false;
  }
};
