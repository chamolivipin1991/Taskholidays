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

export function resolveDestinationImage(folder: string, file: string) {
  // Always Cloudinary public ID
  return `destinations/${folder}/${file}`;
}
