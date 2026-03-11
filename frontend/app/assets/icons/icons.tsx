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

export const QuoteIcon = ({
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
      viewBox="0 0 24 24"
      fill={fill}
      className={className}
      {...props}
    >
      <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z" />
    </svg>
  );
};

export const ProfileIcon = ({
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
      viewBox="0 0 24 24"
      fill={fill}
      className={className}
      {...props}
    >
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  );
};

export const MailIcon = ({
  className,
  fill = "#fff",
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
      <path d="M260-292q-26 0-43-17t-17-43v-388q0-26 17-43t43-17h548q26 0 43 17t17 43v388q0 26-17 43t-43 17H260Zm274-216L228-740v388q0 14 9 23t23 9h548q14 0 23-9t9-23v-388L534-508Zm0-34 296-224q-3-3-6.5-4.5T814-772H254q-5 0-10 2.5t-8 5.5l298 222ZM152-184q-26 0-43-17t-17-43v-344h28v344q0 14 9 23t23 9h570v28H152Zm688-556q0-6-3.5-14.5T830-766q-3-3-6.5-4.5T814-772H254q-5 0-10 2.5t-8 5.5q-3 3-5.5 11t-2.5 13v-32h612v32Z" />
    </svg>
  );
};

export const CallIcon = ({
  className,
  fill = "#fff",
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
      <path d="M764-508q-9-112-87.5-190.5T486-786v-28q62 4 116 29t95 66q41 41 66 95t29 116h-28Zm-160 0q-9-45-41-77.5T486-626v-28q57 8 97 48.5t49 97.5h-28Zm141 336q-94 0-195.5-49.5T359-360q-88-89-137.5-190T172-745q0-18 12-30.5t30-12.5h80q17 0 29.5 10.5T341-750l18 82q3 17-1 30t-14 21l-85 77q26 47 56.5 86.5T380-379q36 36 78 67t93 59l83-85q10-11 21.5-14t26.5-1l68 14q17 4 27.5 17t10.5 30v78q0 18-12.5 30T745-172ZM246-566l80-72q5-4 6.5-11t-.5-13l-18-82q-2-8-7-12t-13-4h-80q-6 0-10 4t-4 10q0 41 12.5 87t33.5 93Zm332 326q41 21 88.5 30.5T746-200q6 0 10-4t4-10v-78q0-8-4-13t-12-7l-68-14q-6-2-10.5-.5T656-320l-78 80ZM246-566Zm332 326Z" />
    </svg>
  );
};

export const ChatIcon = ({
  className,
  fill = "#fff",
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
      <path d="M266-426h268v-28H266v28Zm0-120h428v-28H266v28Zm0-120h428v-28H266v28ZM132-180v-588q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H244L132-180Zm100-140h536q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v520l72-72Zm-72 0v-480 480Z" />
    </svg>
  );
};

export const FacebookIcon = ({
  className,
  fill = "currentColor",
  size = 24,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M16 8h-2a2 2 0 0 0-2 2v10" />
      <line x1="10" y1="14" x2="16" y2="14" />
    </svg>
  );
};

export const XIcon = ({
  className,
  fill = "currentColor",
  size = 24,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
};

export const LinkedInIcon = ({
  className,
  fill = "currentColor",
  size = 24,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="4" ry="4" />
      <path d="M8 11v5" />
      <path d="M8 8v0" />
      <circle cx="8" cy="8" r="0.5" fill="currentColor" />
      <path d="M12 16v-5" />
      <path d="M16 16v-3a2 2 0 0 0-2-2 2 2 0 0 0-2 2" />
    </svg>
  );
};

export const InstagramIcon = ({
  className,
  fill = "currentColor",
  size = 24,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="18" cy="6" r="0.5" fill="currentColor" />
    </svg>
  );
};

export const HotelIcon = ({
  className,
  fill = "currentColor",
  size = 24,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 -960 960 960"
      fill={fill}
      className={className}
      {...props}
    >
      <path d="M92-252v-496h28v348h346v-268h294q44.55 0 76.28 31.72Q868-604.55 868-560v308h-28v-120H120v120H92Z" />
    </svg>
  );
};

export const MealIcon = ({
  className,
  fill = "currentColor",
  size = 24,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 -960 960 960"
      fill={fill}
      className={className}
      {...props}
    >
      <path d="M282-132v-334q-54-14-82-45.5T172-591v-237h28v223h82v-223h28v223h82v-223h28v237q0 48-28 79.5T310-466v334h-28Zm367 0v-347q-54-19-82-63.5T539-653q0-72 36.5-123.5T663-828q52 0 88.5 51.5T788-653q0 67-28.5 111.5T677-479v347h-28Z" />
    </svg>
  );
};

export const CruiseIcon = ({
  className,
  fill = "currentColor",
  size = 24,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 -960 960 960"
      fill={fill}
      className={className}
      {...props}
    >
      <path d="m170-446 244-351v351H170Zm53-28h163v-234L223-474Zm313 28q10-30 20-91.5T566-660q0-69-10-127.5T537-883q56 30 104 75t84 101.5Q761-650 784-584t29 138H536Zm37-28h208q-14-105-67.5-196.5T579-824q7 40 11 83t4 81q0 45-6 93t-15 93ZM360-194q-30 0-61-10t-59-36q-8 8-18 16.5T203-211q-31-24-53-55.5T114-334h732q-14 36-36 67.5T757-211q-9-4-19-12.5T720-240q-28 26-59 36t-61 10q-30 0-61.5-10T480-241q-27 27-58.5 37T360-194Z" />
    </svg>
  );
};

export const SightseeingIcon = ({
  className,
  fill = "currentColor",
  size = 24,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 -960 960 960"
      fill={fill}
      className={className}
      {...props}
    >
      <path d="M480-300q59 0 99.5-40.5T620-440q0-59-40.5-99.5T480-580q-59 0-99.5 40.5T340-440q0 59 40.5 99.5T480-300Zm0-28q-48 0-80-32t-32-80q0-48 32-80t80-32q48 0 80 32t32 80q0 48-32 80t-80 32ZM192-172q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h116l74-80h196l74 80h116q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Z" />
    </svg>
  );
};

export const TransportIcon = ({
  className,
  fill = "currentColor",
  size = 24,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 -960 960 960"
      fill={fill}
      className={className}
      {...props}
    >
      <path d="M204-316.75Q181-339.5 181-372h-76v-308q0-11.55 8.22-19.78Q121.45-708 133-708h512l210 194v142h-60q0 32.5-22.75 55.25T717-294q-32.5 0-55.25-22.75T639-372H337q0 32-23 55t-55 23q-32 0-55-22.75ZM561-530h236L635-680h-74v150Zm-214 0h186v-150H347v150Zm-214 0h186v-150H133v150Z" />
    </svg>
  );
};
