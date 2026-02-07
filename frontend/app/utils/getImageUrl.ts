// const CLOUDINARY_BASE = "https://res.cloudinary.com/dyhcnz8ws/image/upload";

// export function resolveDestinationImage(
//   folder: string,
//   file: string,
//   transform = "q_auto,f_auto",
// ) {
//   // Production → Cloudinary
//   if (process.env.NODE_ENV === "production") {
//     return `${CLOUDINARY_BASE}/${transform}/destinations/${folder}/${file}`;
//   }

//   // Localhost → public folder
//   return `/images/destinations/${folder}/${file}`;
// }

const CLOUDINARY_BASE = "https://res.cloudinary.com/dyhcnz8ws/image/upload";

export function resolveDestinationImage(
  folder: string,
  file: string,
  transform = "q_auto,f_auto",
) {
  // Production → Cloudinary
  if (process.env.NODE_ENV === "production") {
    // Return WITHOUT additional transformations when using Next.js Image
    // Let Next.js handle resizing/optimization
    return `${CLOUDINARY_BASE}/${transform}/destinations/${folder}/${file}`;
  }

  // Localhost → public folder
  return `/images/destinations/${folder}/${file}`;
}
