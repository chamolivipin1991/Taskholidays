import demoImage from "@/assets/images/home_banner.jpg";
import { Destination } from "@/types/destination";

export const destinations: Destination[] = [
  {
    id: 1,
    slug: "andaman",
    title: "Andaman",
    description:
      "Pristine beaches, crystal-clear waters, and serene island vibes.",
    heroImage: {
      folder: "andaman",
      file: "andaman_taskholidays_1.jpg",
      alt: "Pristine beaches and blue waters of Andaman Islands",
    },
    bestSeason: ["October", "November", "December", "January"],
    tags: ["beach", "honeymoon", "family"],
    packages: [
      {
        id: 101,
        name: "Andaman Explorer",
        duration: "5 Days / 4 Nights",
        images: ["url1", "url2", "url3"],
        price: 23444,
        popular: true,
        inclusions: ["Hotel", "Breakfast", "Sightseeing", "Transfers"],
        itinerary: [
          {
            day: 1,
            title: "Arrival & Leisure",
            location: "Port Blair",
            hotels: [
              {
                id: 1,
                name: "Sea View Resort",
                location: "Port Blair",
                starRating: 3,
                category: "deluxe",
                facilities: ["WiFi", "Restaurant", "AC"],
                checkInTime: "11:00 AM",
                checkOutTime: "08:00 AM",
                images: ["img1", "img2"],
              },
            ],
          },
          {
            day: 2,
            title: "Havelock Island Tour",
            location: "Havelock",
            hotels: [
              {
                id: 2,
                name: "Beachside Stay",
                location: "Havelock",
                starRating: 3,
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 2,
    slug: "kerala",
    title: "Kerala",
    description:
      "Backwaters, lush greenery, hill stations, and peaceful retreats.",
    heroImage: {
      folder: "kerala",
      file: "kerala_taskholidays_1.jpg",
      alt: "Pristine beaches and blue waters of Andaman Islands",
    },
    tags: ["nature", "relaxation", "family"],
    packages: [
      {
        id: 201,
        name: "Kerala Bliss",
        duration: "6 Days / 5 Nights",
        images: ["url1", "url2"],
        price: 23444,
        popular: false,
        inclusions: ["Houseboat", "Breakfast", "Sightseeing"],
        itinerary: [
          {
            day: 1,
            title: "Arrival at Munnar",
            location: "Munnar",
            hotels: [
              {
                id: 3,
                name: "Hill View Resort",
                location: "Munnar",
                starRating: 4,
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 3,
    slug: "ladakh",
    title: "Ladakh",
    description:
      "High-altitude adventures, monasteries, and breathtaking landscapes.",
    heroImage: {
      folder: "ladakh",
      file: "ladakh_taskholidays_1.jpg",
      alt: "Pristine beaches and blue waters of Andaman Islands",
    },
    tags: ["adventure", "bike-trip", "mountains"],
  },

  {
    id: 4,
    slug: "rajasthan",
    title: "Rajasthan",
    description: "Royal palaces, deserts, forts, and rich cultural heritage.",
    heroImage: {
      folder: "rajasthan",
      file: "rajasthan_taskholidays_1.jpg",
      alt: "Pristine beaches and blue waters of Andaman Islands",
    },
    tags: ["heritage", "culture", "desert"],
  },

  {
    id: 5,
    slug: "bali",
    title: "Bali",
    description: "Tropical beaches, temples, and vibrant nightlife.",
    heroImage: {
      folder: "bali",
      file: "bali_taskholidays_1.jpg",
      alt: "Pristine beaches and blue waters of Andaman Islands",
    },
    tags: ["international", "beach", "honeymoon"],
  },

  {
    id: 6,
    slug: "dubai",
    title: "Dubai",
    description: "Luxury shopping, futuristic skyline, and desert adventures.",
    heroImage: {
      folder: "dubai",
      file: "dubai_taskholidays_1.jpg",
      alt: "Pristine beaches and blue waters of Andaman Islands",
    },
    tags: ["international", "luxury", "city"],
  },
];
