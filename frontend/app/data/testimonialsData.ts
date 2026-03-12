export interface Testimonial {
  rating: number;
  message: string;
  name: string;
  role: string;
  avatar: string;
}

export const testimonialsData: Testimonial[] = [
  {
    rating: 5,
    message: "Beautiful trip great experience with task holidays",
    name: "Munna Kumar",
    role: "Travel Enthusiast, India",
    avatar: "/images/reviews/munnakumar.png",
  },
  {
    rating: 5,
    message:
      "We planned trip from task and service was outstanding. Highly recommend",
    name: "Prakash Saini",
    role: "Travel Enthusiast, India",
    avatar: "",
  },
  {
    rating: 5,
    message: "Best tour planner highly recommend @thank team Task Holidays",
    name: "Mahesh Lamba",
    role: "Travel Enthusiast, India",
    avatar: "",
  },
  {
    rating: 5,
    message:
      "Fantastic service, seamless travel, unforgettable family adventure!",
    name: "Adv Lokesh Nahar",
    role: "Travel Enthusiast, India",
    avatar: "",
  },
];
