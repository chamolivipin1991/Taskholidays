import { SVGProps } from "react";

// Define props interface with all common SVG props
export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const CalendarIcon = ({
  className,
  fill = "#e3e3e3", // Default value
  size = 24, // Default size (makes more sense than "48px")
  ...props // Capture all other SVG props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={typeof size === "number" ? `${size}px` : size}
      width={typeof size === "number" ? `${size}px` : size}
      viewBox="0 -960 960 960"
      fill={fill}
      className={className}
      {...props}
    >
      <path d="M310.51-398.46q-15.03 0-25.08-10.19-10.04-10.19-10.04-24.84 0-15.03 9.99-25.08 9.99-10.04 24.84-10.04 14.84 0 25.08 9.99 10.24 9.99 10.24 24.84 0 14.84-10.19 25.08-10.19 10.24-24.84 10.24Zm171.99 0q-14.65 0-24.75-10.19t-10.1-24.84q0-15.03 10.09-25.08 10.08-10.04 24.63-10.04 14.55 0 25 9.99 10.44 9.99 10.44 25.03 0 14.65-10.33 24.89-10.32 10.24-24.98 10.24Zm166.48 0q-14.65 0-24.89-10.19t-10.24-24.84q0-15.03 10.18-25.08 10.19-10.04 24.84-10.04t24.89 9.99Q684-448.63 684-433.59q0 14.65-10.19 24.89-10.18 10.24-24.83 10.24ZM198.83-103.08q-22.6 0-39.33-16.73-16.73-16.73-16.73-39.33v-576.95q0-22.6 16.73-39.33 16.73-16.73 39.42-16.73h75.39v-70h48.84v70h315.23v-70h47.7v70h75q22.69 0 39.42 16.73t16.73 39.33v576.95q0 22.6-16.73 39.33-16.73 16.73-39.33 16.73H198.83Zm.09-43.84h562.16q4.61 0 8.46-3.85 3.84-3.85 3.84-8.46v-395.15H186.62v395.15q0 4.61 3.84 8.46 3.85 3.85 8.46 3.85Zm-12.3-451.31h586.76V-736q0-4.61-3.84-8.46-3.85-3.85-8.46-3.85H198.92q-4.61 0-8.46 3.85-3.84 3.85-3.84 8.46v137.77Zm0 0v-150.08 150.08Z" />
    </svg>
  );
};

// Example of another icon with the same pattern
export const ArrowIcon = ({
  className,
  fill = "#e3e3e3",
  size = 24,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={typeof size === "number" ? `${size}px` : size}
      width={typeof size === "number" ? `${size}px` : size}
      viewBox="0 -960 960 960"
      fill={fill}
      className={className}
      {...props}
    >
      <path d="m552.61-257.31-31.38-30.88 171.85-171.85h-510v-43.84h510L520.62-676.35 552-706.54l224.92 224.92-224.31 224.31Z" />
    </svg>
  );
};

export const CheckIcon = ({
  className,
  fill = "#e3e3e3",
  size = 24,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={typeof size === "number" ? `${size}px` : size}
      width={typeof size === "number" ? `${size}px` : size}
      viewBox="0 -960 960 960"
      fill={fill}
      className={className}
      {...props}
    >
      <path d="M378-246 154-470l43-43 181 181 384-384 43 43-427 427Z" />
    </svg>
  );
};

export const BurgerMenuIcon = ({
  className,
  fill = "#e3e3e3",
  size = 24,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={typeof size === "number" ? `${size}px` : size}
      width={typeof size === "number" ? `${size}px` : size}
      viewBox="0 -960 960 960"
      fill={fill}
      className={className}
      {...props}
    >
      <path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
    </svg>
  );
};

export const CloseIcon = ({
  className,
  fill = "#e3e3e3",
  size = 24,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={typeof size === "number" ? `${size}px` : size}
      width={typeof size === "number" ? `${size}px` : size}
      viewBox="0 -960 960 960"
      fill={fill}
      className={className}
      {...props}
    >
      <path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
    </svg>
  );
};

export const AppDotsIcon = ({
  className,
  fill = "#e3e3e3",
  size = 24,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={typeof size === "number" ? `${size}px` : size}
      width={typeof size === "number" ? `${size}px` : size}
      viewBox="0 -960 960 960"
      fill={fill}
      className={className}
      {...props}
    >
      <path d="M210.5-210.4Q200-220.8 200-235.9t10.4-25.6q10.4-10.5 25.5-10.5t25.6 10.4q10.5 10.4 10.5 25.5t-10.4 25.6Q251.2-200 236.1-200t-25.6-10.4Zm244.25 0q-10.25-10.4-10.25-25.5t10.15-25.6Q464.8-272 479.9-272t25.85 10.4q10.75 10.4 10.75 25.5t-10.65 25.6Q495.2-200 480.1-200t-25.35-10.4Zm243.75 0Q688-220.8 688-235.9t10.4-25.6q10.4-10.5 25.5-10.5t25.6 10.4q10.5 10.4 10.5 25.5t-10.4 25.6Q739.2-200 724.1-200t-25.6-10.4Zm-488-244.25Q200-464.8 200-479.9t10.4-25.85q10.4-10.75 25.5-10.75t25.6 10.65Q272-495.2 272-480.1t-10.4 25.35q-10.4 10.25-25.5 10.25t-25.6-10.15Zm244.25 0Q444.5-464.8 444.5-479.9t10.15-25.85q10.15-10.75 25.25-10.75t25.85 10.65q10.75 10.65 10.75 25.75t-10.65 25.35Q495.2-444.5 480.1-444.5t-25.35-10.15Zm243.75 0Q688-464.8 688-479.9t10.4-25.85q10.4-10.75 25.5-10.75t25.6 10.65Q760-495.2 760-480.1t-10.4 25.35q-10.4 10.25-25.5 10.25t-25.6-10.15Zm-488-243.75Q200-708.8 200-723.9t10.4-25.6q10.4-10.5 25.5-10.5t25.6 10.4q10.5 10.4 10.5 25.5t-10.4 25.6Q251.2-688 236.1-688t-25.6-10.4Zm244.25 0q-10.25-10.4-10.25-25.5t10.15-25.6Q464.8-760 479.9-760t25.85 10.4q10.75 10.4 10.75 25.5t-10.65 25.6Q495.2-688 480.1-688t-25.35-10.4Zm243.75 0Q688-708.8 688-723.9t10.4-25.6q10.4-10.5 25.5-10.5t25.6 10.4q10.5 10.4 10.5 25.5t-10.4 25.6Q739.2-688 724.1-688t-25.6-10.4Z" />
    </svg>
  );
};

export const LocationIcon = ({
  className,
  fill = "#e3e3e3",
  size = 24,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={typeof size === "number" ? `${size}px` : size}
      width={typeof size === "number" ? `${size}px` : size}
      viewBox="0 -960 960 960"
      fill={fill}
      className={className}
      {...props}
    >
      <path d="M521.75-512.5Q539-529.5 539-554t-17.25-41.75Q504.5-613 480-613t-41.5 17.25q-17 17.25-17 41.75t17 41.5q17 17 41.5 17t41.75-17ZM480-170.5q109-94 175.75-197.75T722.5-546.5q0-109-68.5-180.5t-174-71.5q-105.5 0-174 71.5t-68.5 180.5q0 74.5 66.75 178.25T480-170.5Zm0 34.5Q347-256.5 279.5-359.75T212-546.5q0-117.5 77-197T480-823q114 0 191 79.5t77 197q0 83.5-67.5 186.75T480-136Zm0-418Z" />
    </svg>
  );
};

export const StayIcon = ({
  className,
  fill = "#e3e3e3",
  size = 24,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={typeof size === "number" ? `${size}px` : size}
      width={typeof size === "number" ? `${size}px` : size}
      viewBox="0 -960 960 960"
      fill={fill}
      className={className}
      {...props}
    >
      <path d="M97-256v-488h25.5v343h345v-263.5h290.73q43.32 0 74.05 30.61Q863-603.29 863-559.5V-256h-25.5v-119.5h-715V-256H97Zm133.75-252.9Q210-529.79 210-559.65q0-29.85 20.9-50.6Q251.79-631 281.65-631q29.85 0 50.6 20.9Q353-589.21 353-559.35q0 29.85-20.9 50.6Q311.21-488 281.35-488q-29.85 0-50.6-20.9ZM493-401h344.5v-158.76q0-32.74-23.39-55.99T757.88-639H493v238ZM314-527q13.5-13.5 13.5-32.5T314-592q-13.5-13.5-32.5-13.5T249-592q-13.5 13.5-13.5 32.5T249-527q13.5 13.5 32.5 13.5T314-527Zm-32.5-32.5ZM493-639v238-238Z" />
    </svg>
  );
};

export const TermsIcon = ({
  className,
  fill = "#e3e3e3",
  size = 24,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={typeof size === "number" ? `${size}px` : size}
      width={typeof size === "number" ? `${size}px` : size}
      viewBox="0 -960 960 960"
      fill={fill}
      className={className}
      {...props}
    >
      <path d="M242.5-137q-27.54 0-46.52-18.63Q177-174.25 177-202v-108.5h115V-823h491v621q0 27.75-18.98 46.37Q745.04-137 717.5-137h-475Zm475-25.5q17 0 28.5-11.36 11.5-11.35 11.5-28.14v-595.5h-440v487H678v108.56q0 16.51 11.36 27.98 11.35 11.46 28.14 11.46ZM380-637v-25.5h315v25.5H380Zm0 108v-25.5h315v25.5H380ZM242.7-162.5h409.8V-285h-450v83q0 16.79 11.56 28.14 11.56 11.36 28.64 11.36Zm-.18 0H202.5h450-409.98Z" />
    </svg>
  );
};
