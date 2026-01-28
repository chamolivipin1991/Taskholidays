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
