import { PackagesData } from "@/types/destination";

export const packagesdata: PackagesData[] = [
  {
    id: 1,
    slug: "andaman",
    title: "Andaman",
    description:
      "Turquoise waters, white sandy beaches, and tropical island paradise.",
    heroImage: {
      folder: "andaman",
      alt: "Turquoise waters, white sandy beaches, and tropical island paradise.",
    },
    bestSeason: ["October", "November", "December", "January"],
    tags: ["beach", "honeymoon", "family"],
    packages: [
      {
        packageId: "andaman-4n-5d",
        title: "Andaman Tour Package – 5 Days / 4 Nights",
        duration: "5 Days / 4 Nights",
        popular: true, // ✅ Added
        shortItinerary: [
          {
            day: "1",
            title: "Airport Pick up, Post Rest, Port Blair City Tour",
            location: "Port Blair",
            stay: "Horizon Hues",
            breakfastNextDay: true,
          },
          {
            day: "2",
            title:
              "Sail from Port Blair to Havelock, later visit Radhanagar Beach",
            location: "Port Blair - Havelock Island",
            stay: "Havelock Exotic Beach Resort",
            sightSeeing: "Port Blair - Havelock Island",
            breakfastNextDay: true,
          },
          {
            day: "3",
            title: "Morning at Leisure and Excursion to Kala Patthar Beach",
            location: "Havelock Island",
            stay: "Havelock Exotic Beach Resort ",
            breakfastNextDay: true,
          },
          {
            day: "4",
            title: "Havelock to Port Blair",
            location: "Havelock Island - Port Blair",
            stay: "Horizon Hues",
            breakfastNextDay: true,
          },
          {
            day: "5",
            title: "Return with Dazzling Memories of Scintillating Beaches",
            location: "Port Blair",
          },
        ],
        hotels: [
          {
            location: "Port Blair",
            duration: "2 Nights",
            durationNumber: [1, 4],
            hotelName: "Horizon Hues",
            star: 3,
            category: "Deluxe Category Hotel",
            facilities: ["wifi", "free service", "restaurant", "ac"],
            checkInTime: "11 am",
            checkoutTime: "8 am",
            stayLink: "https://www.hotelhorizonhues.com/",
          },
          {
            location: "Havelock Island",
            duration: "2 Nights",
            durationNumber: [2, 3],
            hotelName: "Havelock Exotic Beach Resort ",
            star: 3,
            category: "Deluxe Category Beach-Resort",
            facilities: ["wifi", "free service", "restaurant", "ac"],
            checkInTime: "11 am",
            checkoutTime: "8.30 am",
            stayLink: "https://www.havelockexoticbeachresort.com/",
          },
        ],
        cruise: [
          {
            day: 2,
            location: "Port Blair - Havelock Island",
            category: "Base Category",
            name: "Premium Category @ Makruzz",
          },
          {
            day: 4,
            location: "Havelock Island - Port Blair",
            category: "Base Category",
            name: "Premium Category @ Makruzz",
          },
        ],
        detailedItinerary: [
          {
            day: "1",
            location: "Port Blair",
            stay: "Port Blair Hotel/Resort",
            title: "Airport Pick up, Post Rest, Port Blair City Tour",
            itineraryPoints: [
              "On arrival at Port Blair, meet and greet our representative and proceed to the hotel to complete check-in formalities. Freshen up and get ready to explore the city.",
            ],
            sightseeingLocation: "Port Blair",
            sightseeingItems: [
              {
                name: "Cellular Jail (National Memorial)",
                detail:
                  "Historic colonial prison known for its significance in India’s freedom struggle.",
              },
              {
                name: "Corbyn’s Cove Beach",
                detail:
                  "A serene coconut-fringed beach ideal for swimming, relaxation, and photography.",
              },
              {
                name: "Sound & Light Show at Cellular Jail",
                detail:
                  "An immersive audio-visual show depicting the heroic story of India’s freedom fighters.",
              },
            ],
            instruction:
              "Return to your hotel in Port Blair for an overnight stay.",
            note: [
              "Any sightseeing will be visited only once during the entire travel even if itis mentioned multiple times in the itinerary. In addition, no alternative sights or compensation will be arranged for the same.",
            ],
            inclusions:
              "City Tour & Aiport and Harbor Transfers - Tickets, Toll, Parking, Fuel and Driver Bata is included",
          },
          {
            day: "2",
            location: "Port Blair",
            stay: "Havelock Island Hotel/Resort",
            title: "Airport Pick up, Post Rest, Port Blair City Tour",
            itineraryPoints: [
              "After breakfast, check outfrom your hotel in Port Blair. If your hotel restaurant is not operational (Usually it is 8AM) early in the morning, you may request a packed breakfast from the hotel in the previous night. Proceed to the harbor to board your cruise to Havelock Island.",
              "The ferry journey from Port Blair to Havelock generally takes 1.5 to 2.5 hours, depending on the cruise type. Upon arrival at Havelock, transfer to your hotel for check-in and relaxation.",
            ],
            sightseeingLocation: "Havelock",
            sightseeingItems: [
              {
                name: "Radhanagar Beach (Beach No. 7)",
                detail:
                  "One of Asia’s finest beaches, known for its soft white sand, turquoise waters, and stunning sunset views. Return to your hotel in Havelock for an overnight stay.",
              },
            ],
            instruction: "Return to the hotel/resort for the relaxation.",
            note: [
              "Any sightseeing will be visited only once during the entire travel even if it is mentioned multiple times in the itinerary. In addition, no alternative sights or compensation will be arranged for the same.",
              "The day assigned for sightseeing may be altered depending on your choice, ferry timings, weather conditions, or logistics. However, once the vehicle arrives at your hotel for sightseeing, the service cannot be cancelled or changed for that day.",
            ],
            inclusions:
              "Beaches & Harbors Havelock - Vehicle, Parking is included",
          },
          {
            day: "3",
            location: "Havelock Island",
            stay: "Havelock Island Hotel/Resort",
            title: "Morning at Leisure and Excursion to Kala Patthar Beach",
            itineraryPoints: [
              "Enjoy a relaxed morning at Havelock Island. Guests interested in adventure activities may choose to engage in water sports like Scuba Diving (At your own cost) – Conducted by certified dive centres for both beginners and experienced divers.",
              "Guests not opting for water sports may enjoy the morning atleisure at the hotel or nearby beaches.",
            ],
            sightseeingLocation: "Havelock",
            sightseeingItems: [
              {
                name: "Kala Paththar Beach",
                detail:
                  "A serene black-rock coastline known for peaceful ambience, turquoise waters, and excellent photo spots. Ideal for a calming sunset experience.",
              },
              {
                name: "Elephant Beach (Optional Excursion If boatticket notincluded in Inclusion Section)",
                detail:
                  "Accessible by speed boat; known for clear waters and vibrant coral reefs. Popular activities include: Snorkeling (5-10 Minute Snorkeling is provided complimentary with Standard Equipment), Sea Walk, Jet Ski, Banana Ride, Glass-Bottom Boat.",
              },
            ],
            instruction: "Return to your hotel in Havelock.",
            note: [
              "Any sightseeing will be visited only once during the entire travel even if it is mentioned multiple times in the itinerary. In addition, no alternative sights or compensation will be arranged for the same.",
              "The day assigned for sightseeing may be altered depending on your choice, ferry timings, weather conditions, or logistics. However, once the vehicle arrives at your hotel for sightseeing, the service cannot be cancelled or changed for that day.",
            ],
            inclusions:
              "Elephant Beach - Boat Ticket and One Visit is included",
          },
          {
            day: "4",
            location: "Havelock Island",
            stay: "Port Blair Hotel/Resort",
            title: "Havelock to Port Blair.",
            itineraryPoints: [
              "Later transfer to Port Blair Jetty. If any sights are remaining, from Day 1, and you have sufficient time, then we would visit the same today.",
            ],
            sightseeingLocation: "",
            sightseeingItems: [],
            instruction: "",
            note: [],
            inclusions: "",
          },
          {
            day: "5",
            location: "Port Blair",
            stay: "",
            title: "Return with Dazzling Memories of Scintillating Beaches",
            itineraryPoints: [
              "After breakfast, check outfrom your hotel in Port Blair. Before departing, ensure that any remaining sightseeing in Port Blair is completed as no sights will be revisited.",
              "Proceed to Port Blair Airport as per your flight timings. Our vehicle will drop you at the airport for your return journey to your hometown, marking the end of your Andaman trip.",
            ],
            sightseeingLocation: "",
            sightseeingItems: [],
            instruction: "",
            note: [
              "Any sightseeing will be visited only once during the entire travel even if itis mentioned multiple times in the itinerary. In addition, no alternative sights or compensation will be arranged for the same.",
            ],
            inclusions: "",
          },
        ],
        tripExclusions: [
          "Any chargeable services utilized in the hotel, and mentioned in the inclusion section.",
          "Gala Dinner (24 Dec, 25 Dec, 31 Dec, 14 Feb, any additional date) is additional until mentioned in the quote.",
          "Christmas Dinner and New Year Dinner are mandatory in most of the hotels.",
          "Any expense which are done for personal entertainment.",
          "Flight Tickets/Train Ticket until unless not specified above.",
          "Camera Charges, and Tip at different sites and restaurants.",
          "Not mentioned specifically above. If something is committed and not mentioned in inclusion, please bring this in our notice ASAP.",
          "City Tour Tickets are included only in Andaman. In any other Indian states, it is not included.",
          "Additional Charges in case of Late Night(Post 8:00 PM) and Early Morning (Pre 6:00 AM) Picks up and Drops. (Not Informed during the itinerary discussions)",
        ],
      },
      {
        packageId: "andaman-5n-6d",
        title: "Andaman Tour Package – 6 Days / 5 Nights",
        duration: "6 Days / 5 Nights",
        popular: false, // ✅ Added
        shortItinerary: [
          {
            day: "1",
            title: "Airport Pick up, Post Rest, Port Blair City Tour",
            location: "Port Blair",
            stay: "Horizon Hues",
            breakfastNextDay: true,
          },
          {
            day: "2",
            title: "Travel to Havelock from Port Blair, Visit to Kala Paththar",
            location: "Port Blair - Havelock Island",
            stay: "Havelock Exotic Beach Resort",
            sightSeeing: "Port Blair - Havelock Island",
            breakfastNextDay: true,
          },
          {
            day: "3",
            title: "Morning at Leisure and Excursion to Kala Patthar Beach",
            location: "Havelock Island",
            stay: "Havelock Exotic Beach Resort",
            breakfastNextDay: true,
          },
          {
            day: "4",
            title: "Travel to Neil Island and Neil Island Sightseeing",
            location: "Havelock Island - Neil Island",
            stay: "Laxmi Continental Resort",
            sightSeeing: "Havelock Island - Neil Island",
            breakfastNextDay: true,
          },
          {
            day: "5",
            title: "Neil Island Sightseeing and Travel to Port Blair",
            location: "Neil Island - Port Blair",
            stay: "Horizon Hues",
            sightSeeing: "Neil Island - Port Blair",
            breakfastNextDay: true,
          },
          {
            day: "6",
            title: "Return with Dazzling Memories of Scintillating Beaches",
            location: "Port Blair",
          },
        ],
        hotels: [
          {
            location: "Port Blair",
            duration: "2 Nights",
            durationNumber: [1, 5],
            hotelName: "Horizon Hues",
            star: 3,
            category: "Deluxe Category Hotel",
            facilities: ["wifi", "free service", "restaurant", "ac"],
            checkInTime: "11 am",
            checkoutTime: "8 am",
            stayLink: "https://www.hotelhorizonhues.com/",
          },
          {
            location: "Havelock Island",
            duration: "2 Nights",
            durationNumber: [2, 3],
            hotelName: "Havelock Exotic Beach Resort",
            star: 3,
            category: "Deluxe Category Beach-Resort",
            facilities: ["wifi", "free service", "restaurant", "ac"],
            checkInTime: "11 am",
            checkoutTime: "8.30 am",
            stayLink: "https://www.havelockexoticbeachresort.com/",
          },
          {
            location: "Neil Island",
            duration: "1 Night",
            durationNumber: [4],
            hotelName: "Laxmi Continental Resort",
            star: 3,
            category: "Standard Category Hotel",
            facilities: ["wifi", "free service", "restaurant", "ac"],
            checkInTime: "10 am",
            checkoutTime: "9 am",
            stayLink: "https://www.laxmicontinentalresort.com/",
          },
        ],
        cruise: [
          {
            day: 2,
            location: "Port Blair - Havelock Island",
            category: "Base Category",
            name: "Premium Category @ Makruzz",
          },
          {
            day: 4,
            location: "Havelock Island - Neil Island",
            category: "Base Category",
            name: "Premium Category @ Makruzz",
          },
          {
            day: 5,
            location: "Neil Island - Port Blair",
            category: "Base Category",
            name: "Premium Category @ Makruzz",
          },
        ],
        detailedItinerary: [
          {
            day: "1",
            location: "Port Blair",
            stay: "Port Blair Hotel/Resort",
            title: "Airport Pick up, Post Rest, Port Blair City Tour",
            itineraryPoints: [
              "On arrival at Port Blair, meet and greet our representative and proceed to the hotel to complete check-in formalities. Freshen up and get ready to explore the city.",
            ],
            sightseeingLocation: "Port Blair",
            sightseeingItems: [
              {
                name: "Cellular Jail (National Memorial)",
                detail:
                  "Historic colonial prison known for its significance in India’s freedom struggle.",
              },
              {
                name: "Corbyn’s Cove Beach",
                detail:
                  "A serene coconut-fringed beach ideal for swimming, relaxation, and photography.",
              },
              {
                name: "Sound & Light Show at Cellular Jail",
                detail:
                  "An immersive audio-visual show depicting the heroic story of India’s freedom fighters.",
              },
            ],
            instruction:
              "Return to your hotel in Port Blair for an overnight stay.",
            note: [
              "Any sightseeing will be visited only once during the entire travel even if it is mentioned multiple times in the itinerary. In addition, no alternative sights or compensation will be arranged for the same.",
            ],
            inclusions:
              "City Tour & Aiport and Harbor Transfers - Tickets, Toll, Parking, Fuel and Driver Bata is included",
          },
          {
            day: "2",
            location: "Port Blair",
            stay: "Havelock Island Hotel/Resort",
            title: "Travel to Havelock from Port Blair, Visit to Kala Paththar",
            itineraryPoints: [
              "After breakfast vehicle shall drop you at Harbor to catch a cruise to Havelock. On arrival proceed to selected hotel.",
              "After lunch, Visit Kala Paththar beach. - Time required - 1-2 hours depending upon your interest.",
            ],
            sightseeingLocation: "Havelock",
            sightseeingItems: [
              {
                name: "Kala Paththar Beach",
                detail:
                  "A serene black-rock coastline known for peaceful ambience, turquoise waters, and excellent photo spots. Ideal for a calming sunset experience.",
              },
            ],
            instruction:
              "Stay here overnight among sandy beach and lush green forest in a comfortable beach resort.",
            note: [],
            inclusions:
              "Beaches & Harbors Havelock - Vehicle, Parking is included",
          },
          {
            day: "3",
            location: "Havelock Island",
            stay: "Havelock Island Hotel/Resort",
            title: "Morning at Leisure and Excursion to Kala Patthar Beach",
            itineraryPoints: [
              "Enjoy a relaxed morning at Havelock Island. Guests interested in adventure activities may choose to engage in water sports like Scuba Diving (At your own cost) – Conducted by certified dive centres for both beginners and experienced divers.",
              "Guests not opting for water sports may enjoy the morning at leisure at the hotel or nearby beaches.",
            ],
            sightseeingLocation: "Havelock",
            sightseeingItems: [
              {
                name: "Kala Paththar Beach",
                detail:
                  "A serene black-rock coastline known for peaceful ambience, turquoise waters, and excellent photo spots. Ideal for a calming sunset experience.",
              },
              {
                name: "Elephant Beach (Optional Excursion If boat ticket not included in Inclusion Section)",
                detail:
                  "Accessible by speed boat; known for clear waters and vibrant coral reefs. Popular activities include: Snorkeling (5-10 Minute Snorkeling is provided complimentary with Standard Equipment), Sea Walk, Jet Ski, Banana Ride, Glass-Bottom Boat.",
              },
            ],
            instruction: "Return to your hotel in Havelock.",
            note: [
              "Any sightseeing will be visited only once during the entire travel even if it is mentioned multiple times in the itinerary. In addition, no alternative sights or compensation will be arranged for the same.",
              "The day assigned for sightseeing may be altered depending on your choice, ferry timings, weather conditions, or logistics. However, once the vehicle arrives at your hotel for sightseeing, the service cannot be cancelled or changed for that day.",
            ],
            inclusions:
              "Elephant Beach - Boat Ticket and One Visit is included",
          },
          {
            day: "4",
            location: "Havelock Island",
            stay: "Neil Island Hotel/Resort",
            title: "Travel to Neil Island and Neil Island Sightseeing",
            itineraryPoints: [
              "After breakfast, check out from your hotel in Havelock Island.",
              "Proceed to the harbour to board your cruise to Neil Island.",
              "On arrival at Neil Island, transfer to your hotel and relax briefly before exploring the island.",
            ],
            sightseeingLocation: "Neil Island",
            sightseeingItems: [],
            instruction:
              "Return to your hotel on Neil Island for an overnight stay.",
            note: [],
            inclusions:
              "Beaches & Harbors Neil - Vehicle, Toll, Parking, Muncipal Tax is included",
          },
          {
            day: "5",
            location: "Neil Island",
            stay: "Port Blair Hotel/Resort",
            title: "Neil Island Sightseeing and Travel to Port Blair",
            itineraryPoints: [
              "Check Out and Leave your luggage at Hotel Reception.",
              "Visit Bharatpur Beach and Natural Bridge.",
              "Take a cruise to return to Port Blair. Post lunch, you can enjoy the shopping at Port Blair.",
            ],
            sightseeingLocation: "Neil Island",
            sightseeingItems: [
              {
                name: "Bharatpur Beach",
                detail:
                  "Known for shallow waters, coral views, and water sports.",
              },
              {
                name: "Natural Bridge (Howrah Bridge)",
                detail:
                  "A naturally formed rock arch, popular for photography; best seen during low tide.",
              },
              {
                name: "Laxmanpur Beach",
                detail:
                  "Quiet beach ideal for sunset viewing and leisurely walks.",
              },
            ],
            instruction: "",
            note: [
              "Any sightseeing will be visited only strictly once during the entire travel even if it is mentioned multiple times in the itinerary. In addition, no alternative sights or compensation will be arranged for the same.",
            ],
            inclusions: "",
          },
          {
            day: "6",
            location: "Port Blair",
            stay: "",
            title: "Return with Dazzling Memories of Scintillating Beaches",
            itineraryPoints: [
              "After breakfast, check out from your hotel in Port Blair.",
              "Proceed to Port Blair Airport as per your flight timings.",
            ],
            sightseeingLocation: "",
            sightseeingItems: [],
            instruction: "",
            note: [
              "Any sightseeing will be visited only once during the entire travel even if it is mentioned multiple times in the itinerary. In addition, no alternative sights or compensation will be arranged for the same.",
            ],
            inclusions: "Airport/Harbour Transfers - Vehicle is included",
          },
        ],
        tripExclusions: [
          "Any chargeable services utilized in the hotel, and mentioned in the inclusion section.",
          "Gala Dinner (24 Dec, 25 Dec, 31 Dec, 14 Feb, any additional date) is additional until mentioned in the quote.",
          "Christmas Dinner and New Year Dinner are mandatory in most of the hotels.",
          "Any expense which are done for personal entertainment.",
          "Flight Tickets/Train Ticket until unless not specified above.",
          "Camera Charges, and Tip at different sites and restaurants.",
          "Not mentioned specifically above. If something is committed and not mentioned in inclusion, please bring this in our notice ASAP.",
          "City Tour Tickets are included only in Andaman. In any other Indian states, it is not included.",
          "Additional Charges in case of Late Night (Post 8:00 PM) and Early Morning (Pre 6:00 AM) Picks up and Drops. (Not Informed during the itinerary discussions)",
        ],
      },
    ],
  },
  {
    id: 2,
    slug: "bali",
    title: "Bali",
    description:
      "Sacred temples, lush landscapes, and unforgettable island culture.",
    heroImage: {
      folder: "bali",
      alt: "Sacred temples, lush landscapes, and unforgettable island culture.",
    },
    bestSeason: ["October", "November", "December", "January"],
    tags: ["beach", "honeymoon", "family"],
    packages: [
      {
        packageId: "bali-4n-5d-east-bali",
        title: "Bali Tour Package – 5 Days / 4 Nights",
        duration: "5 Days / 4 Nights",
        popular: true, // ✅ Added
        shortItinerary: [
          {
            day: "1",
            title: "Pick up & Relax at Kuta Hotel",
            location: "Kuta",
            stay: "Solia Legian Bali Hotel",
            breakfastNextDay: true,
          },
          {
            day: "2",
            title: "East Bali - Tirta Gangga and Lempuyang's Gates of Heaven",
            location: "Kuta",
            stay: "Solia Legian Bali Hotel",
            breakfastNextDay: true,
          },
          {
            day: "3",
            title: "Kuta to Ubud",
            location: "Kuta - Ubud",
            stay: "Alam Puisi Villa",
            breakfastNextDay: true,
          },
          {
            day: "4",
            title: "Leisure at Pool Villa/Hotel",
            location: "Ubud",
            stay: "Alam Puisi Villa",
            breakfastNextDay: true,
          },
          {
            day: "5",
            title: "Drop to Airport from Ubud",
            location: "Ubud - Kuta",
          },
        ],
        hotels: [
          {
            location: "Kuta",
            duration: "2 Nights",
            durationNumber: [1, 2],
            hotelName: "Solia Legian Bali Hotel",
            star: 4,
            category: "Premium Category Hotel",
            facilities: ["wifi", "free service", "restaurant", "pool", "ac"],
            checkInTime: "2 p.m.",
            checkoutTime: "noon",
            stayLink: "https://solialegian.com/",
          },
          {
            location: "Ubud",
            duration: "2 Nights",
            durationNumber: [3, 4],
            hotelName: "Alam Puisi Villa",
            star: 4,
            category: "Deluxe Category Hotel",
            facilities: [
              "wifi",
              "free service",
              "restaurant",
              "ac",
              "private pool",
            ],
            checkInTime: "2 a.m.",
            checkoutTime: "11 a.m.",
            stayLink: "https://alampuisivilla.com/",
          },
        ],
        cruise: [],
        detailedItinerary: [
          {
            day: "1",
            location: "Kuta",
            stay: "Kuta Hotel/Resort",
            title: "Pick up & Relax at Kuta Hotel",
            itineraryPoints: [
              "Welcome to Bali! Upon arrival, enjoy a comfortable transfer to your hotel in Kuta. Check-in, unwind, and soak in the tropical vibes.",
              "Spend the rest of the day at leisure. Explore nearby beaches, shop at local markets, or simply relax by the pool.",
            ],
            sightseeingLocation: "Kuta",
            sightseeingItems: [],
            instruction: "",
            note: [],
            inclusions:
              "Airport Transfer | Kuta - Driver, Parking, Toll, Fuel is included",
          },
          {
            day: "2",
            location: "Kuta",
            stay: "Kuta Hotel/Resort",
            title: "East Bali - Tirta Gangga and Lempuyang's Gates of Heaven",
            itineraryPoints: [
              "After a pick-up from your hotel, you will embark on a journey to Lempuyang Temple, located in the eastern part of Bali.",
              "Known as the Gateway to Heaven, the temple offers magical views of Mount Agung behind it.",
              "Next, visit Tirta Gangga, the former royal water palace in eastern Bali with tiered fountains, lush gardens, and stone sculptures.",
              "Enjoy a delicious buffet lunch (optional, at an extra cost) with panoramic views of Mount Agung, Telaga Waja River, and surrounding rice fields.",
            ],
            sightseeingLocation: "East Bali",
            sightseeingItems: [
              {
                name: "Lempuyang Temple (Gate of Heaven)",
                detail:
                  "Famous for its iconic split gate framing Mount Agung, offering breathtaking photo opportunities.",
              },
              {
                name: "Tirta Gangga Temple",
                detail:
                  "A former royal water palace with fountains, gardens, and clear bathing pools.",
              },
            ],
            instruction: "",
            note: [],
            inclusions:
              "Gate of Heaven (Lempuyang) - Entry Tickets is included, Tirta Gangga Temple - Entry Tickets is included, Private Vehicle 10 Hours - Toll, Parking, Bata, and Fuel is included",
          },
          {
            day: "3",
            location: "Kuta",
            stay: "Ubud Hotel/Resort",
            title: "Kuta to Ubud",
            itineraryPoints: [
              "Leave the lovely beaches of Kuta behind and head towards the cultural heart of Ubud.",
              "Enjoy a scenic drive through Bali’s lush landscapes, passing rice fields, traditional villages, and local markets.",
            ],
            sightseeingLocation: "",
            sightseeingItems: [],
            instruction: "",
            note: [],
            inclusions:
              "Inter Hotel Transfers | Ubud | Kuta - Driver, Toll Tax, Parking, Fuel is included",
          },
          {
            day: "4",
            location: "Ubud",
            stay: "Ubud Hotel/Resort",
            title: "Leisure at Pool Villa/Hotel",
            itineraryPoints: [
              "A stay at a pool villa or luxury hotel in Bali offers an unparalleled experience of relaxation, privacy, and exceptional service.",
              "Spend the day at leisure enjoying the surroundings, pool, and peaceful environment.",
            ],
            sightseeingLocation: "Ubud",
            sightseeingItems: [],
            instruction: "",
            note: [],
            inclusions: "",
          },
          {
            day: "5",
            location: "Ubud",
            stay: "",
            title: "Drop to Airport from Ubud",
            itineraryPoints: [
              "Proceed to the airport from Ubud as per your flight schedule, marking the end of your Bali trip.",
            ],
            sightseeingLocation: "",
            sightseeingItems: [],
            instruction: "",
            note: [],
            inclusions:
              "Airport Transfers | Ubud - Driver, Toll, Parking, Fuel is included",
          },
        ],
        tripExclusions: [
          "Any chargeable services utilized in the hotel, and mentioned in the inclusion section.",
          "Gala Dinner (24 Dec, 25 Dec, 31 Dec, 14 Feb, any additional date) is additional until mentioned in the quote.",
          "Christmas Dinner and New Year Dinner are mandatory in most of the hotels.",
          "Any expense which are done for personal entertainment.",
          "Flight Tickets/Train Ticket until unless not specified above.",
          "Camera Charges, and Tip at different sites and restaurants.",
          "Not mentioned specifically above. If something is committed and not mentioned in inclusion, please bring this in our notice ASAP.",
          "Additional Charges in case of Late Night (Post 8:00 PM) and Early Morning (Pre 6:00 AM) Picks up and Drops. (Not Informed during the itinerary discussions)",
        ],
      },
      {
        packageId: "bali-5n-6d-east-bali-nusa-penida",
        title: "Bali Tour Package – 6 Days / 5 Nights",
        duration: "6 Days / 5 Nights",
        popular: false, // ✅ Added
        shortItinerary: [
          {
            day: "1",
            title: "Pick up & Relax at Kuta Hotel",
            location: "Kuta",
            stay: "Solia Legian Bali Hotel",
            breakfastNextDay: true,
          },
          {
            day: "2",
            title: "Nusa Penida Island Day Trip - West",
            location: "Kuta",
            stay: "Solia Legian Bali Hotel",
            breakfastNextDay: true,
          },
          {
            day: "3",
            title: "East Bali - Tirta Gangga and Lempuyang's Gates of Heaven",
            location: "Kuta",
            stay: "Solia Legian Bali Hotel",
            breakfastNextDay: true,
          },
          {
            day: "4",
            title: "Kuta to Ubud",
            location: "Kuta - Ubud",
            stay: "Alam Puisi Villa",
            breakfastNextDay: true,
          },
          {
            day: "5",
            title: "Leisure at Pool Villa/Hotel",
            location: "Ubud",
            stay: "Alam Puisi Villa",
            breakfastNextDay: true,
          },
          {
            day: "6",
            title: "Drop to Airport from Ubud",
            location: "Ubud - Kuta",
          },
        ],
        hotels: [
          {
            location: "Kuta",
            duration: "3 Nights",
            durationNumber: [1, 2, 3],
            hotelName: "Solia Legian Bali Hotel",
            star: 4,
            category: "Premium Category Hotel",
            facilities: ["wifi", "free service", "restaurant", "pool", "ac"],
            checkInTime: "2 p.m.",
            checkoutTime: "noon",
            stayLink: "https://solialegian.com/",
          },
          {
            location: "Ubud",
            duration: "2 Nights",
            durationNumber: [4, 5],
            hotelName: "Alam Puisi Villa",
            star: 4,
            category: "Deluxe Category Hotel",
            facilities: [
              "wifi",
              "free service",
              "restaurant",
              "ac",
              "private pool",
            ],
            checkInTime: "2 a.m.",
            checkoutTime: "11 a.m.",
            stayLink: "https://alampuisivilla.com/",
          },
        ],
        cruise: [],
        detailedItinerary: [
          {
            day: "1",
            location: "Kuta",
            stay: "Kuta Hotel/Resort",
            title: "Pick up & Relax at Kuta Hotel",
            itineraryPoints: [
              "Welcome to Bali! Upon arrival, enjoy a comfortable transfer to your hotel in Kuta. Check-in, unwind, and soak in the tropical vibes.",
              "Spend the rest of the day at leisure. Explore nearby beaches, shop at local markets, or simply relax by the pool.",
            ],
            sightseeingLocation: "Kuta",
            sightseeingItems: [],
            instruction: "",
            note: [],
            inclusions:
              "Airport Transfer | Kuta - Driver, Parking, Toll, Fuel is included",
          },
          {
            day: "2",
            location: "Kuta",
            stay: "Kuta Hotel/Resort",
            title: "Nusa Penida Island Day Trip - West",
            itineraryPoints: [
              "Discover the breathtaking beauty of West Nusa Penida.",
              "Visit Kelingking Beach, Angel’s Billabong, Broken Beach, and Crystal Bay.",
              "Full Day Nusa Penida Island Trip with Local Lunch (West Tour). Starts at 7:00 am (Duration: 10 hrs).",
            ],
            sightseeingLocation: "Nusa Penida",
            sightseeingItems: [
              {
                name: "Kelingking Beach",
                detail:
                  "Famous for its T-Rex-shaped cliff and turquoise waters.",
              },
              {
                name: "Angel’s Billabong",
                detail: "A natural infinity pool formed by the sea.",
              },
              {
                name: "Broken Beach",
                detail: "Dramatic coastal rock formation with a circular cove.",
              },
              {
                name: "Crystal Bay",
                detail: "Ideal for relaxation and snorkeling.",
              },
            ],
            instruction: "",
            note: [],
            inclusions:
              "Nusa Penida West 1 Day Private Trip Inc Transfers - Boat tickets, Lunch, Transfers, Vehicle is included",
          },
          {
            day: "3",
            location: "Kuta",
            stay: "Kuta Hotel/Resort",
            title: "East Bali - Tirta Gangga and Lempuyang's Gates of Heaven",
            itineraryPoints: [
              "Journey to Lempuyang Temple in eastern Bali, also known as the Gateway to Heaven.",
              "Enjoy scenic drives through rice paddies and mountain landscapes with views of Mount Agung.",
              "Visit Tirta Gangga, the former royal water palace with tiered fountains and lush gardens.",
            ],
            sightseeingLocation: "East Bali",
            sightseeingItems: [
              {
                name: "Lempuyang Temple (Gate of Heaven)",
                detail: "Iconic split gate with Mount Agung in the backdrop.",
              },
              {
                name: "Tirta Gangga Temple",
                detail:
                  "Former royal water palace with fountains and bathing pools.",
              },
            ],
            instruction: "",
            note: [],
            inclusions:
              "Gate of Heaven (Lempuyang) - Entry Tickets is included, Tirta Gangga Temple - Entry Tickets is included, Private Vehicle 10 Hours - Toll, Parking, Bata, and Fuel is included",
          },
          {
            day: "4",
            location: "Kuta",
            stay: "Ubud Hotel/Resort",
            title: "Kuta to Ubud",
            itineraryPoints: [
              "Leave the beaches of Kuta and proceed towards Ubud, the cultural heart of Bali.",
              "Enjoy scenic views of rice fields, traditional villages, and local markets along the way.",
            ],
            sightseeingLocation: "",
            sightseeingItems: [],
            instruction: "",
            note: [],
            inclusions:
              "Inter Hotel Transfers | Ubud | Kuta - Driver, Toll Tax, Parking, Fuel is included",
          },
          {
            day: "5",
            location: "Ubud",
            stay: "Ubud Hotel/Resort",
            title: "Leisure at Pool Villa/Hotel",
            itineraryPoints: [
              "Spend the day at leisure enjoying your pool villa or hotel.",
              "Relax, rejuvenate, and soak in Bali’s natural beauty.",
            ],
            sightseeingLocation: "Ubud",
            sightseeingItems: [],
            instruction: "",
            note: [],
            inclusions: "",
          },
          {
            day: "6",
            location: "Ubud",
            stay: "",
            title: "Drop to Airport from Ubud",
            itineraryPoints: [
              "Proceed to the airport from Ubud as per your flight schedule, marking the end of your Bali trip.",
            ],
            sightseeingLocation: "",
            sightseeingItems: [],
            instruction: "",
            note: [],
            inclusions:
              "Airport Transfers | Ubud - Driver, Toll, Parking, Fuel is included",
          },
        ],
        tripExclusions: [
          "Any chargeable services utilized in the hotel, and mentioned in the inclusion section.",
          "Gala Dinner (24 Dec, 25 Dec, 31 Dec, 14 Feb, any additional date) is additional until mentioned in the quote.",
          "Christmas Dinner and New Year Dinner are mandatory in most of the hotels.",
          "Any expense which are done for personal entertainment.",
          "Flight Tickets/Train Ticket until unless not specified above.",
          "Camera Charges, and Tip at different sites and restaurants.",
          "Not mentioned specifically above. If something is committed and not mentioned in inclusion, please bring this in our notice ASAP.",
          "Additional Charges in case of Late Night (Post 8:00 PM) and Early Morning (Pre 6:00 AM) Picks up and Drops. (Not Informed during the itinerary discussions)",
        ],
      },
    ],
  },
  {
    id: 3,
    slug: "ladakh",
    title: "Leh Ladakh",
    description:
      "Snow-capped mountains, high-altitude adventures, and breathtaking landscapes.",
    heroImage: {
      folder: "ladakh",
      alt: "Snow-capped mountains, high-altitude adventures, and breathtaking landscapes.",
    },
    bestSeason: ["October", "November", "December", "January"],
    tags: ["beach", "honeymoon", "family"],
    packages: [
      {
        packageId: "ladakh-4n-5d",
        title: "Ladakh Tour Package – 5 Days / 4 Nights",
        duration: "5 Days / 4 Nights",
        popular: true, // ✅ Added
        shortItinerary: [
          {
            day: "1",
            title:
              "Arrival at Leh Airport - Scenic Flight Experience and Leisure Time",
            location: "Leh",
            stay: "Utpala Retreat",
            breakfastNextDay: true,
          },
          {
            day: "2",
            title:
              "Journey from Leh to Nubra Valley - Scenic Drive via Khardung La with Diskit Monastery Visit",
            location: "Leh - Nubra Valley",
            stay: "Organic Boutique Inn",
            breakfastNextDay: true,
          },
          {
            day: "3",
            title: "Return Journey from Nubra Valley to Leh",
            location: "Nubra Valley - Leh",
            stay: "Utpala Retreat",
            breakfastNextDay: true,
          },
          {
            day: "4",
            title:
              "Pangong Lake Day Trip from Leh - Scenic Monastery Visits & Stunning Landscapes",
            location: "Leh",
            stay: "Utpala Retreat",
            breakfastNextDay: true,
          },
          {
            day: "5",
            title:
              "Departure from Leh - Conclude Your Himalayan Journey with Lasting Memories",
            location: "Leh",
          },
        ],
        hotels: [
          {
            location: "Leh",
            duration: "3 Nights",
            durationNumber: [1, 3, 4],
            hotelName: "Utpala Retreat",
            star: 3,
            category: "Deluxe Category Hotel",
            facilities: ["free service", "restaurant"],
            checkInTime: "10 a.m.",
            checkoutTime: "9 a.m.",
            stayLink: "https://maps.google.com/",
          },
          {
            location: "Nubra Valley",
            duration: "1 Night",
            durationNumber: [2],
            hotelName: "Organic Boutique Inn",
            star: 3,
            category: "Deluxe Category Resort",
            facilities: ["free service", "restaurant"],
            checkInTime: "noon",
            checkoutTime: "9 a.m.",
            stayLink: "https://maps.google.com/",
          },
        ],
        cruise: [],
        detailedItinerary: [
          {
            day: "1",
            location: "Leh",
            stay: "Leh Hotel",
            title:
              "Arrival at Leh Airport - Scenic Flight Experience and Leisure Time",
            itineraryPoints: [
              "Upon arrival at Leh Airport, enjoy the scenic views of the Himalayan landscape. Meet our representative and transfer to your hotel for check-in.",
              "Rest and acclimatize to the high altitude for the remainder of the day.",
            ],
            sightseeingLocation: "Leh",
            sightseeingItems: [],
            instruction: "Overnight stay at the hotel in Leh.",
            note: [],
            inclusions: "Airport Pickup, Hotel Stay, Dinner",
          },
          {
            day: "2",
            location: "Leh - Nubra Valley",
            stay: "Nubra Valley Hotel",
            title:
              "Journey from Leh to Nubra Valley - Scenic Drive via Khardung La with Diskit Monastery Visit",
            itineraryPoints: [
              "After breakfast, proceed towards Nubra Valley via Khardung La, one of the highest motorable roads in the world.",
              "Visit Diskit Monastery en route and enjoy panoramic valley views.",
            ],
            sightseeingLocation: "Nubra Valley",
            sightseeingItems: [
              {
                name: "Khardung La Pass",
                detail:
                  "One of the highest motorable roads offering breathtaking mountain views.",
              },
              {
                name: "Diskit Monastery",
                detail: "The oldest and largest monastery in Nubra Valley.",
              },
            ],
            instruction: "Overnight stay at the hotel in Nubra Valley.",
            note: [],
            inclusions: "Vehicle, Transfers, Breakfast & Dinner",
          },
          {
            day: "3",
            location: "Nubra Valley - Leh",
            stay: "Leh Hotel",
            title: "Return Journey from Nubra Valley to Leh",
            itineraryPoints: [
              "After breakfast, drive back to Leh enjoying scenic mountain landscapes along the way.",
            ],
            sightseeingLocation: "",
            sightseeingItems: [],
            instruction: "Overnight stay at the hotel in Leh.",
            note: [],
            inclusions: "Vehicle, Transfers, Breakfast & Dinner",
          },
          {
            day: "4",
            location: "Leh",
            stay: "Leh Hotel",
            title:
              "Pangong Lake Day Trip from Leh - Scenic Monastery Visits & Stunning Landscapes",
            itineraryPoints: [
              "Early morning departure for Pangong Lake via Chang La Pass.",
              "Spend time at Pangong Lake, famous for its changing colors and serene surroundings.",
            ],
            sightseeingLocation: "Pangong Lake",
            sightseeingItems: [
              {
                name: "Pangong Lake",
                detail:
                  "A high-altitude lake known for its crystal-clear waters and scenic beauty.",
              },
            ],
            instruction: "Return to Leh by evening.",
            note: [],
            inclusions: "Vehicle, Sightseeing, Breakfast & Dinner",
          },
          {
            day: "5",
            location: "Leh",
            stay: "",
            title:
              "Departure from Leh - Conclude Your Himalayan Journey with Lasting Memories",
            itineraryPoints: [
              "After breakfast, check out from the hotel and transfer to Leh Airport for departure.",
            ],
            sightseeingLocation: "",
            sightseeingItems: [],
            instruction: "",
            note: [],
            inclusions: "",
          },
        ],
        tripExclusions: [
          "Any personal expenses.",
          "Any meals not mentioned in the itinerary.",
          "Camera charges, tips and porter charges.",
          "Flight tickets unless specified.",
          "Any services not mentioned in inclusions.",
        ],
      },
      {
        packageId: "ladakh-5n-6d",
        title: "Leh Ladakh Tour Package – 6 Days / 5 Nights",
        duration: "6 Days / 5 Nights",
        popular: false, // ✅ Added
        shortItinerary: [
          {
            day: "1",
            title:
              "Arrival at Leh Airport - Scenic Flight Experience and Leisure Time",
            location: "Leh",
            stay: "Kangsing Hotel",
            breakfastNextDay: true,
          },
          {
            day: "2",
            title:
              "Excursion to Sham Valley from Leh - Explore Hall of Fame, Spituk Monastery, and Scenic Highlights",
            location: "Leh",
            stay: "Kangsing Hotel",
            breakfastNextDay: true,
          },
          {
            day: "3",
            title:
              "Leh to Nubra Valley - Scenic Drive via Khardung La with Diskit Monastery Visit",
            location: "Leh - Nubra Valley",
            stay: "Organic Boutique Inn",
            breakfastNextDay: true,
          },
          {
            day: "4",
            title:
              "Scenic Drive from Nubra Valley to Pangong Lake - Adventure through Shyok Valley",
            location: "Nubra Valley - Pangong",
            stay: "Royal Foster Cottages",
            breakfastNextDay: true,
          },
          {
            day: "5",
            title:
              "Return from Pangong to Leh - Scenic Drive via Changla Pass with Monument Visits",
            location: "Pangong - Leh",
            stay: "Kangsing Hotel",
            breakfastNextDay: true,
          },
          {
            day: "6",
            title:
              "Departure from Leh - Conclude Your Himalayan Journey with Lasting Memories",
            location: "Leh",
          },
        ],
        hotels: [
          {
            location: "Leh",
            duration: "3 Nights",
            durationNumber: [1, 2, 5],
            hotelName: "Kangsing Hotel",
            star: 3,
            category: "Deluxe Category Hotel",
            facilities: ["free service", "restaurant", "heater"],
            checkInTime: "noon",
            checkoutTime: "noon",
            stayLink: "https://maps.google.com/",
          },
          {
            location: "Nubra Valley",
            duration: "1 Night",
            durationNumber: [3],
            hotelName: "Organic Boutique Inn",
            star: 3,
            category: "Deluxe Category Resort",
            facilities: ["free service", "restaurant"],
            checkInTime: "noon",
            checkoutTime: "9 a.m.",
            stayLink: "https://maps.google.com/",
          },
          {
            location: "Pangong",
            duration: "1 Night",
            durationNumber: [4],
            hotelName: "Royal Foster Cottages",
            star: 3,
            category: "Premium Category Camp",
            facilities: ["restaurant"],
            checkInTime: "noon",
            checkoutTime: "9 a.m.",
            stayLink: "https://maps.google.com/",
          },
        ],
        cruise: [],
        detailedItinerary: [
          {
            day: "1",
            location: "Leh",
            stay: "Leh Hotel/Resort",
            title:
              "Arrival at Leh Airport - Scenic Flight Experience and Leisure Time",
            itineraryPoints: [
              "Upon your arrival at Leh Kushok Bakula Rimpochee Airport, enjoy breathtaking panoramic views of the Himalayas.",
              "Meet the representative and transfer to your hotel. The day is reserved for acclimatization due to high altitude.",
              "In the evening, you may opt for a gentle walk around the hotel vicinity.",
            ],
            sightseeingLocation: "Leh",
            sightseeingItems: [],
            instruction: "Overnight stay at hotel in Leh.",
            note: [],
            inclusions:
              "Inner Line Permit, Pick up at Leh Airport, Leh Market Exploration (Walk Only), Shanti Stupa Viewpoint (Walk Only), Local Cafe Experience (Walk Only)",
          },
          {
            day: "2",
            location: "Leh",
            stay: "Leh Hotel/Resort",
            title:
              "Excursion to Sham Valley from Leh - Explore Hall of Fame, Spituk Monastery, and Scenic Highlights",
            itineraryPoints: [
              "Proceed for a full day excursion to Sham Valley via Srinagar-Leh Highway.",
              "Visit cultural, spiritual, and natural attractions in Sham Valley.",
            ],
            sightseeingLocation: "Sham Valley",
            sightseeingItems: [
              {
                name: "Hall of Fame",
                detail:
                  "A museum commemorating the brave soldiers of the Indian Army and Ladakh culture.",
              },
              {
                name: "Spituk Monastery",
                detail: "Ancient monastery overlooking the Indus River.",
              },
              {
                name: "Magnetic Hill",
                detail:
                  "Optical illusion site where vehicles appear to move uphill.",
              },
              {
                name: "Gurudwara Pathar Sahib",
                detail:
                  "Sacred Sikh pilgrimage site maintained by the Indian Army.",
              },
              {
                name: "Sangam",
                detail: "Confluence of Indus and Zanskar Rivers.",
              },
            ],
            instruction: "Return to hotel in Leh.",
            note: ["Light and Sound Show at Hall of Fame is not included."],
            inclusions:
              "Hall of Fame, Hill, Paththar Sahib, Sangam-Spituk - Vehicle, Toll Tax, Parking, & Municipal Taxes is included",
          },
          {
            day: "3",
            location: "Leh - Nubra Valley",
            stay: "Nubra Valley Hotel/Resort",
            title:
              "Leh to Nubra Valley - Scenic Drive via Khardung La with Diskit Monastery Visit",
            itineraryPoints: [
              "Drive from Leh to Nubra Valley via Khardung La Pass.",
              "Descend into Nubra Valley and explore its unique landscape.",
            ],
            sightseeingLocation: "Nubra Valley",
            sightseeingItems: [
              {
                name: "Khardung La Pass",
                detail: "One of the highest motorable passes in the world.",
              },
              {
                name: "Diskit Monastery",
                detail:
                  "Oldest and largest monastery in Nubra Valley with Maitreya Buddha statue.",
              },
              {
                name: "Hunder Sand Dunes",
                detail:
                  "Cold desert landscape with double-humped Bactrian camels (optional).",
              },
            ],
            instruction: "Overnight stay in Nubra Valley.",
            note: [],
            inclusions:
              "Deskit-Hundoor-Pangong 3 Days - Vehicle, Toll Tax, Parking, & Municipal Taxes is included",
          },
          {
            day: "4",
            location: "Nubra Valley - Pangong",
            stay: "Pangong Hotel/Resort",
            title:
              "Scenic Drive from Nubra Valley to Pangong Lake - Adventure through Shyok Valley",
            itineraryPoints: [
              "Drive from Nubra Valley to Pangong Lake via Shyok Valley route.",
              "Enjoy Pangong Lake views, photography, and relaxation.",
            ],
            sightseeingLocation: "Shyok Valley - Pangong",
            sightseeingItems: [
              {
                name: "Shyok River Valley",
                detail: "Dramatic landscapes following the Shyok River.",
              },
              {
                name: "Agham Village",
                detail: "Picturesque village en route.",
              },
              {
                name: "Tangtse Village",
                detail: "Important halt village before Pangong Lake.",
              },
            ],
            instruction: "Overnight stay near Pangong Lake.",
            note: [
              "If Shyok Route is closed, Warila Route will be used at additional cost.",
            ],
            inclusions:
              "Shyok Route Sightseeing - Vehicle, Toll Tax, Parking, & Municipal Taxes is included",
          },
          {
            day: "5",
            location: "Pangong - Leh",
            stay: "Leh Hotel/Resort",
            title:
              "Return from Pangong to Leh - Scenic Drive via Changla Pass with Monument Visits",
            itineraryPoints: [
              "Drive from Pangong Lake to Leh via Changla Pass.",
              "Visit monasteries and palaces en route.",
            ],
            sightseeingLocation: "Leh Enroute",
            sightseeingItems: [
              {
                name: "Thiksey Monastery",
                detail: "Hilltop monastery resembling Potala Palace.",
              },
              {
                name: "Shey Palace",
                detail: "Former summer capital of Ladakh.",
              },
              {
                name: "Chemrey Monastery",
                detail: "17th-century monastery of Drukpa order.",
              },
            ],
            instruction: "Overnight stay in Leh.",
            note: [],
            inclusions:
              "En Route Thikshey, Shey, 3 Idiot School - Vehicle, Toll Tax, Parking, & Municipal Taxes is included",
          },
          {
            day: "6",
            location: "Leh",
            stay: "",
            title:
              "Departure from Leh - Conclude Your Himalayan Journey with Lasting Memories",
            itineraryPoints: [
              "Transfer to Leh Airport as per flight schedule.",
            ],
            sightseeingLocation: "",
            sightseeingItems: [],
            instruction: "",
            note: [],
            inclusions:
              "Drop at Leh Airport - Vehicle, Toll Tax, Parking, & Municipal Taxes is included",
          },
        ],
        tripExclusions: [
          "Any chargeable services utilized in the hotel, and mentioned in the inclusion section.",
          "Gala Dinner (24 Dec, 25 Dec, 31 Dec, 14 Feb, any additional date) is additional until mentioned in the quote.",
          "Christmas Dinner and New Year Dinner are mandatory in most of the hotels.",
          "Heater Charges/ AC Charges in the vehicle",
          "Emergency evacuation cost",
          "Travel/Medical insurance",
          "Expenses of personal nature",
          "Any permit except Inner Line Permit",
          "Flight Tickets/Train Ticket unless specified",
          "Camera Charges, and Tips",
          "Any service not mentioned above",
        ],
      },
    ],
  },
  {
    id: 4,
    slug: "rajasthan",
    title: "Rajasthan",
    description:
      "Royal palaces, vibrant culture, and timeless desert heritage.",
    heroImage: {
      folder: "rajasthan",
      alt: "Royal palaces, vibrant culture, and timeless desert heritage.",
    },
    bestSeason: ["October", "November", "December", "January"],
    tags: ["beach", "honeymoon", "family"],
    packages: [
      {
        packageId: "rajasthan-4n-5d",
        title: "5 Days/4 Nights Plan for Rajasthan",
        duration: "5 Days / 4 Nights",
        popular: true, // ✅ Added
        shortItinerary: [
          {
            day: "1",
            title: "Pick up from the Jaipur and jaipur sightseeing",
            location: "Jaipur",
            stay: "Click Hotel",
            breakfastNextDay: true,
          },
          {
            day: "2",
            title: "Jaipur Local Sightseeing",
            location: "Jaipur",
            stay: "Click Hotel",
            breakfastNextDay: true,
          },
          {
            day: "3",
            title: "Head to Udaipur Via Ajmer and Pushkar",
            location: "Jaipur - Udaipur",
            stay: "Mukund Vilas",
            breakfastNextDay: true,
          },
          {
            day: "4",
            title: "Udaipur Local Sightseeing",
            location: "Udaipur",
            stay: "Mukund Vilas",
            breakfastNextDay: true,
          },
          {
            day: "5",
            title: "Fly back to your Home town (Ud)",
            location: "Udaipur",
          },
        ],
        hotels: [
          {
            location: "Jaipur",
            duration: "2 Nights",
            durationNumber: [1, 2],
            hotelName: "Click Hotel",
            star: 3,
            category: "Deluxe Category Hotel",
            facilities: ["Free Service", "Restaurant", "AC"],
            checkInTime: "2 p.m.",
            checkoutTime: "noon",
            stayLink: "https://maps.google.com/",
          },
          {
            location: "Udaipur",
            duration: "2 Nights",
            durationNumber: [3, 4],
            hotelName: "Mukund Vilas",
            star: 3,
            category: "Deluxe Category Hotel",
            facilities: ["Free Service", "Restaurant", "AC"],
            checkInTime: "noon",
            checkoutTime: "9 a.m.",
            stayLink: "https://maps.google.com/",
          },
        ],
        cruise: [],
        detailedItinerary: [
          {
            day: "1",
            location: "Jaipur",
            stay: "Jaipur Hotel/Resort",
            title: "Pick up from the Jaipur and jaipur sightseeing",
            itineraryPoints: [
              "Pick up from Jaipur Rly Stn. / Airport. Transfer to hotel and check in.",
              "Afternoon tour of Jaipur.",
              "Visit Hawa Mahal, City Palace, Janter Manter, Albert Hall Museum, and Laxmi Narayan Temple.",
            ],
            sightseeingLocation: "Jaipur",
            sightseeingItems: [
              {
                name: "Hawa Mahal",
                detail:
                  "Palace of Winds known for its stunning lattice windows.",
              },
              {
                name: "City Palace",
                detail: "Royal complex showcasing architecture and artifacts.",
              },
              {
                name: "Jantar Mantar",
                detail: "Astronomical observatory.",
              },
              {
                name: "Albert Hall Museum",
                detail: "Oldest museum of Rajasthan.",
              },
              {
                name: "Laxmi Narayan Temple",
                detail: "Temple dedicated to Lord Vishnu.",
              },
            ],
            instruction: "Overnight Jaipur",
            note: [],
            inclusions: "Jaipur - Vehicle, Parking is included",
          },
          {
            day: "2",
            location: "Jaipur",
            stay: "Jaipur Hotel/Resort",
            title: "Jaipur Local Sightseeing",
            itineraryPoints: [
              "Enjoy a full day exploring the royal heritage and vibrant culture of Jaipur.",
              "Evening free for leisure or optional visit to Chokhi Dhani Resort (Dinner chargeable extra).",
            ],
            sightseeingLocation: "Jaipur",
            sightseeingItems: [
              { name: "Hawa Mahal", detail: "Iconic Palace of Winds." },
              { name: "City Palace", detail: "Grand royal complex." },
              {
                name: "Jantar Mantar",
                detail: "UNESCO-listed astronomical observatory.",
              },
              {
                name: "Albert Hall Museum",
                detail: "Historic art and sculptures.",
              },
              {
                name: "Patrika Gate",
                detail: "Colorful gateway symbolizing Jaipur’s cultural charm.",
              },
              {
                name: "Moti Doongri Temple",
                detail: "Temple dedicated to Lord Ganesha.",
              },
              {
                name: "Amber Fort",
                detail: "Hilltop fort; Elephant Ride at own cost.",
              },
              { name: "Jal Mahal", detail: "Palace in Man Sagar Lake." },
              { name: "Jaigarh Fort", detail: "Known for Jaivana cannon." },
              { name: "Nahargarh Fort", detail: "Panoramic city views." },
            ],
            instruction: "",
            note: [
              "Each sightseeing spot will be covered only once during the itinerary, even if mentioned multiple times.",
            ],
            inclusions: "Jaipur - Vehicle, Parking is included",
          },
          {
            day: "3",
            location: "Jaipur - Udaipur",
            stay: "Udaipur Hotel/Resort",
            title: "Head to Udaipur Via Ajmer and Pushkar",
            itineraryPoints: [
              "After breakfast, check out from hotel in Jaipur.",
              "Explore Ajmer and Pushkar en route to Udaipur.",
              "On arrival in Udaipur by evening, check in to hotel.",
            ],
            sightseeingLocation: "Ajmer & Pushkar",
            sightseeingItems: [
              {
                name: "Ajmer Sharif Dargah",
                detail: "Sufi shrine of Khwaja Moinuddin Chishti.",
              },
              {
                name: "Adhai Din Ka Jhonpra",
                detail: "Historic mosque with Indo-Islamic architecture.",
              },
              {
                name: "Pushkar Lake",
                detail: "Sacred lake surrounded by ghats.",
              },
              {
                name: "Brahma Temple",
                detail: "Temple dedicated to Lord Brahma.",
              },
              {
                name: "Pushkar Market",
                detail: "Market selling handicrafts and textiles.",
              },
            ],
            instruction: "Overnight stay in Udaipur",
            note: [],
            inclusions:
              "Udaipur - Ajmer - Jaipur - Vehicle, Toll, Parking, Muncipal Tax is included",
          },
          {
            day: "4",
            location: "Udaipur",
            stay: "Udaipur Hotel/Resort",
            title: "Udaipur Local Sightseeing",
            itineraryPoints: [
              "Visit City Palace, Pichola Lake, Bagora Ki Haveli, Gangaur Ghat, Saheliyon ki Bari, Fatehsagar Lake, Fish Acquarium, Rope way, & Jagdish ji Temple.",
            ],
            sightseeingLocation: "Udaipur",
            sightseeingItems: [
              { name: "City Palace", detail: "" },
              { name: "Pichola Lake", detail: "" },
              { name: "Bagora Ki Haveli", detail: "" },
              { name: "Gangaur Ghat", detail: "" },
              { name: "Saheliyon ki Bari", detail: "" },
              { name: "Fatehsagar Lake", detail: "" },
              { name: "Fish Acquarium", detail: "" },
              { name: "Rope way", detail: "" },
              { name: "Jagdish ji Temple", detail: "" },
            ],
            instruction: "",
            note: [],
            inclusions: "",
          },
          {
            day: "5",
            location: "Udaipur",
            stay: "",
            title: "Fly back to your Home town (Ud)",
            itineraryPoints: [
              "Post breakfast shopping or remaining sightseeing.",
              "Drop at Udaipur Bus/Railway Station/Airport as per timings.",
            ],
            sightseeingLocation: "Udaipur",
            sightseeingItems: [],
            instruction: "",
            note: [],
            inclusions: "",
          },
        ],
        tripExclusions: [
          "Any chargeable services utilized in the hotel, and mentioned in the inclusion section.",
          "Gala Dinner (24 Dec, 25 Dec, 31 Dec, 14 Feb, any additional date) is additional until mentioned in the quote.",
          "Christmas Dinner and New Year Dinner are mandatory in most of the hotels.",
          "Any expense which are done for personal entertainment.",
          "Flight Tickets/Train Ticket until unless not specified above.",
          "Camera Charges, and Tip at different sites and restaurants.",
          "Not mentioned specifically above.",
          "City Tour Tickets are included only in Andaman. In any other Indian states, it is not included.",
          "Additional Charges in case of Late Night (Post 8:00 PM) and Early Morning (Pre 6:00 AM) Picks up and Drops.",
        ],
      },
      {
        packageId: "rajasthan-5n-6d",
        title: "6 Days/5 Nights Plan for Rajasthan",
        duration: "6 Days / 5 Nights",
        popular: false, // ✅ Added
        shortItinerary: [
          {
            day: "1",
            title: "Pick up from the Jaipur and jaipur sightseeing",
            location: "Jaipur",
            stay: "Click Hotel",
            breakfastNextDay: true,
          },
          {
            day: "2",
            title: "Jaipur Local Sightseeing",
            location: "Jaipur",
            stay: "Click Hotel",
            breakfastNextDay: true,
          },
          {
            day: "3",
            title: "Move Jodhpur via Ajmer and Pushkar (11-12 Hours)",
            location: "Jaipur - Jodhpur",
            stay: "City Square by Keymagics",
            breakfastNextDay: true,
          },
          {
            day: "4",
            title: "Jodhpur to udaipur Via Nathdawara",
            location: "Jodhpur - Udaipur",
            stay: "Mukund Vilas",
            breakfastNextDay: true,
          },
          {
            day: "5",
            title: "Udaipur Local Sightseeing",
            location: "Udaipur",
            stay: "Mukund Vilas",
            breakfastNextDay: true,
          },
          {
            day: "6",
            title: "Fly back to your Home town (Ud)",
            location: "Udaipur",
          },
        ],
        hotels: [
          {
            location: "Jaipur",
            duration: "2 Nights",
            durationNumber: [1, 2],
            hotelName: "Click Hotel",
            star: 3,
            category: "Deluxe Category Hotel",
            facilities: ["Free Service", "Restaurant", "AC"],
            checkInTime: "2 p.m.",
            checkoutTime: "noon",
            stayLink: "https://maps.google.com/",
          },
          {
            location: "Jodhpur",
            duration: "1 Nights",
            durationNumber: [3],
            hotelName: "City Square by Keymagics",
            star: 3,
            category: "Deluxe Category Hotel",
            facilities: ["Free Service", "Restaurant", "AC"],
            checkInTime: "noon",
            checkoutTime: "9 a.m.",
            stayLink: "https://maps.google.com/",
          },
          {
            location: "Udaipur",
            duration: "2 Nights",
            durationNumber: [4, 5],
            hotelName: "Mukund Vilas",
            star: 3,
            category: "Deluxe Category Hotel",
            facilities: ["Free Service", "Restaurant", "AC"],
            checkInTime: "noon",
            checkoutTime: "9 a.m.",
            stayLink: "https://maps.google.com/",
          },
        ],
        cruise: [],
        detailedItinerary: [
          {
            day: "1",
            location: "Jaipur",
            stay: "Jaipur Hotel/Resort",
            title: "Pick up from the Jaipur and jaipur sightseeing",
            itineraryPoints: [
              "Pick up from Jaipur Rly Stn. / Airport. Transfer to hotel and check in.",
              "Afternoon tour of Jaipur.",
              "Visit Hawa Mahal, City Palace, Janter Manter, Albert Hall Museum, and Laxmi Narayan Temple.",
            ],
            sightseeingLocation: "Jaipur",
            sightseeingItems: [],
            instruction: "Overnight Jaipur",
            note: [],
            inclusions: "Jaipur - Vehicle, Parking is included",
          },
          {
            day: "2",
            location: "Jaipur",
            stay: "Jaipur Hotel/Resort",
            title: "Jaipur Local Sightseeing",
            itineraryPoints: [
              "Enjoy a full day exploring the royal heritage and vibrant culture of Jaipur.",
              "Evening free for leisure or optional visit to Chokhi Dhani Resort (Dinner chargeable extra).",
            ],
            sightseeingLocation: "Jaipur",
            sightseeingItems: [],
            instruction: "",
            note: [
              "Each sightseeing spot will be covered only once during the itinerary, even if mentioned multiple times.",
            ],
            inclusions: "Jaipur - Vehicle, Parking is included",
          },
          {
            day: "3",
            location: "Jaipur - Jodhpur",
            stay: "Jodhpur Hotel/Resort",
            title: "Move Jodhpur via Ajmer and Pushkar (11-12 Hours)",
            itineraryPoints: [
              "Check out from the hotel after completing any remaining sightseeing in Jaipur.",
              "Begin your journey toward Jodhpur, visiting the sacred towns of Ajmer and Pushkar en route.",
              "Continue the drive to Jodhpur, also known as the Blue City of Rajasthan.",
            ],
            sightseeingLocation: "Ajmer, Pushkar & Jodhpur",
            sightseeingItems: [
              { name: "Ajmer Sharif Dargah", detail: "" },
              { name: "Pushkar Lake", detail: "" },
              { name: "Brahma Temple", detail: "" },
              { name: "Mehrangarh Fort", detail: "" },
              { name: "Jaswant Thada", detail: "" },
              { name: "Umaid Bhawan Palace Museum", detail: "" },
              { name: "Clock Tower & Sardar Market", detail: "" },
              { name: "Mandore Gardens", detail: "" },
              { name: "Toorji ka Jhalra (Stepwell)", detail: "" },
              { name: "Kaylana Lake", detail: "" },
            ],
            instruction: "Return to your hotel for the rest.",
            note: [],
            inclusions:
              "Jaipur to Jodhpur - Vehicle, Toll, Parking is included",
          },
          {
            day: "4",
            location: "Jodhpur - Udaipur",
            stay: "Udaipur Hotel/Resort",
            title: "Jodhpur to udaipur Via Nathdawara",
            itineraryPoints: [
              "After breakfast, check out from your hotel.",
              "Proceed to cover the remaining sightseeing points in Jodhpur.",
              "Depart for Udaipur.",
            ],
            sightseeingLocation: "Nathdwara",
            sightseeingItems: [
              {
                name: "Nathdwara Temple",
                detail:
                  "A revered Krishna shrine known for its deity Shrinathji.",
              },
            ],
            instruction: "",
            note: [],
            inclusions:
              "Jodhpur - Udaipur - Vehicle, Toll, Parking, Muncipal Tax is included",
          },
          {
            day: "5",
            location: "Udaipur",
            stay: "Udaipur Hotel/Resort",
            title: "Udaipur Local Sightseeing",
            itineraryPoints: [
              "Visit City Palace, Pichola Lake, Bagora Ki Haveli, Gangaur Ghat, Saheliyon ki Bari, Fatehsagar Lake, Fish Acquarium, Rope way, & Jagdish ji Temple.",
            ],
            sightseeingLocation: "Udaipur",
            sightseeingItems: [],
            instruction: "",
            note: [],
            inclusions: "",
          },
          {
            day: "6",
            location: "Udaipur",
            stay: "",
            title: "Fly back to your Home town (Ud)",
            itineraryPoints: [
              "Post breakfast shopping or remaining sightseeing.",
              "Drop at Udaipur Bus/Railway Staion/Airport.",
            ],
            sightseeingLocation: "Udaipur",
            sightseeingItems: [],
            instruction: "",
            note: [],
            inclusions:
              "Udaipur - Ajmer - Jaipur - Vehicle, Toll, Parking, Muncipal Tax is included",
          },
        ],
        tripExclusions: [
          "Any chargeable services utilized in the hotel, and mentioned in the inclusion section.",
          "Gala Dinner (24 Dec, 25 Dec, 31 Dec, 14 Feb, any additional date) is additional until mentioned in the quote.",
          "Christmas Dinner and New Year Dinner are mandatory in most of the hotels.",
          "Any expense which are done for personal entertainment.",
          "Flight Tickets/Train Ticket until unless not specified above.",
          "Camera Charges, and Tip at different sites and restaurants.",
          "Not mentioned specifically above.",
          "City Tour Tickets are included only in Andaman. In any other Indian states, it is not included.",
          "Additional Charges in case of Late Night (Post 8:00 PM) and Early Morning (Pre 6:00 AM) Picks up and Drops.",
        ],
      },
    ],
  },
  {
    id: 5,
    slug: "kerala",
    title: "Kerala",
    description:
      "Lush greenery, tranquil backwaters, and nature’s perfect escape.",
    heroImage: {
      folder: "kerala",
      alt: "Lush greenery, tranquil backwaters, and nature’s perfect escape.",
    },
    bestSeason: ["October", "November", "December", "January"],
    tags: ["beach", "honeymoon", "family"],
    packages: [
      {
        packageId: "kerala-4n-5d",
        title: "Kerala Tour Package – 5 Days / 4 Nights",
        duration: "5 Days / 4 Nights",
        popular: true, // ✅ Added
        shortItinerary: [
          {
            day: "1",
            title: "Arrival at Cochin – Transfer to Munnar",
            location: "Cochin - Munnar",
            stay: "Munnar Hotel/Resort",
            breakfastNextDay: true,
          },
          {
            day: "2",
            title: "Munnar Sightseeing",
            location: "Munnar",
            stay: "Munnar Hotel/Resort",
            breakfastNextDay: true,
          },
          {
            day: "3",
            title: "Munnar to Thekkady",
            location: "Munnar - Thekkady",
            stay: "Thekkady Hotel/Resort",
            breakfastNextDay: true,
          },
          {
            day: "4",
            title: "Thekkady to Alleppey – Houseboat Stay",
            location: "Thekkady - Alleppey",
            stay: "Alleppey Houseboat",
            breakfastNextDay: true,
          },
          {
            day: "5",
            title: "Departure – Transfer to Cochin",
            location: "Alleppey - Cochin",
          },
        ],
        hotels: [
          {
            location: "Munnar",
            duration: "2 Nights",
            durationNumber: [1, 2],
            hotelName: "Munnar Hotel/Resort",
            star: 3,
            category: "Deluxe Category Hotel",
            facilities: ["wifi", "free service", "restaurant", "ac"],
            checkInTime: "12 pm",
            checkoutTime: "11 am",
            stayLink: "https://maps.google.com/",
          },
          {
            location: "Thekkady",
            duration: "1 Night",
            durationNumber: [3],
            hotelName: "Thekkady Hotel/Resort",
            star: 3,
            category: "Deluxe Category Hotel",
            facilities: ["wifi", "free service", "restaurant", "ac"],
            checkInTime: "12 pm",
            checkoutTime: "11 am",
            stayLink: "https://maps.google.com/",
          },
          {
            location: "Alleppey",
            duration: "1 Night",
            durationNumber: [4],
            hotelName: "Alleppey Houseboat",
            star: 3,
            category: "Deluxe Category Houseboat",
            facilities: ["ac", "all meals included"],
            checkInTime: "12 pm",
            checkoutTime: "9 am",
            stayLink: "https://maps.google.com/",
          },
        ],
        cruise: [],
        detailedItinerary: [
          {
            day: "1",
            location: "Cochin - Munnar",
            stay: "Munnar Hotel/Resort",
            title: "Arrival at Cochin – Transfer to Munnar",
            itineraryPoints: [
              "On arrival at Cochin Airport/Railway Station, meet our representative and proceed to Munnar.",
              "Enjoy the scenic drive through lush green hills, waterfalls and tea plantations.",
              "On arrival at Munnar, check-in to your hotel and relax.",
            ],
            sightseeingLocation: "Enroute Munnar",
            sightseeingItems: [
              {
                name: "Cheeyappara Waterfalls",
                detail:
                  "Beautiful cascading waterfalls located on the way to Munnar.",
              },
              {
                name: "Valara Waterfalls",
                detail: "A picturesque waterfall surrounded by dense greenery.",
              },
            ],
            instruction: "Overnight stay at Munnar.",
            note: [],
            inclusions:
              "Airport/Railway Station Transfer and Vehicle for Munnar Transfer",
          },
          {
            day: "2",
            location: "Munnar",
            stay: "Munnar Hotel/Resort",
            title: "Munnar Sightseeing",
            itineraryPoints: [
              "After breakfast, proceed for full day sightseeing of Munnar.",
            ],
            sightseeingLocation: "Munnar",
            sightseeingItems: [
              {
                name: "Eravikulam National Park",
                detail:
                  "Home to the endangered Nilgiri Tahr and offers panoramic views of tea estates.",
              },
              {
                name: "Tea Museum",
                detail:
                  "Learn about the history and processing of tea in Munnar.",
              },
              {
                name: "Mattupetty Dam",
                detail:
                  "Popular picnic spot known for boating and scenic views.",
              },
              {
                name: "Echo Point",
                detail: "Famous for its natural echo phenomenon.",
              },
            ],
            instruction: "Return to hotel for overnight stay.",
            note: [],
            inclusions: "Munnar Sightseeing by Private Vehicle",
          },
          {
            day: "3",
            location: "Munnar - Thekkady",
            stay: "Thekkady Hotel/Resort",
            title: "Munnar to Thekkady",
            itineraryPoints: [
              "After breakfast, check out from hotel and proceed to Thekkady.",
              "On arrival, check-in to hotel and relax.",
            ],
            sightseeingLocation: "Thekkady",
            sightseeingItems: [
              {
                name: "Periyar Wildlife Sanctuary",
                detail:
                  "Famous for its wildlife and boat safari in Periyar Lake (at own cost).",
              },
            ],
            instruction: "Overnight stay at Thekkady.",
            note: [],
            inclusions: "Transfer from Munnar to Thekkady",
          },
          {
            day: "4",
            location: "Thekkady - Alleppey",
            stay: "Alleppey Houseboat",
            title: "Thekkady to Alleppey – Houseboat Stay",
            itineraryPoints: [
              "After breakfast, proceed to Alleppey.",
              "Check-in to houseboat at 12:00 PM and enjoy backwater cruise.",
              "All meals will be served on board.",
            ],
            sightseeingLocation: "Alleppey Backwaters",
            sightseeingItems: [
              {
                name: "Backwater Cruise",
                detail:
                  "Experience serene backwaters, paddy fields and village life from the houseboat.",
              },
            ],
            instruction: "Overnight stay in Houseboat.",
            note: [],
            inclusions: "Houseboat Stay with All Meals",
          },
          {
            day: "5",
            location: "Alleppey - Cochin",
            stay: "",
            title: "Departure – Transfer to Cochin",
            itineraryPoints: [
              "After breakfast, check out from houseboat.",
              "Proceed to Cochin Airport/Railway Station for departure.",
            ],
            sightseeingLocation: "",
            sightseeingItems: [],
            instruction: "",
            note: [],
            inclusions: "",
          },
        ],
        tripExclusions: [
          "Airfare/Train Fare",
          "Personal expenses such as tips, laundry, telephone calls",
          "Any entry tickets, boating charges, safari charges",
          "Any additional sightseeing not mentioned in the itinerary",
          "Anything not mentioned in the inclusions section",
        ],
      },
      {
        packageId: "kerala-5n-6d",
        title: "Kerala Tour Package – 6 Days / 5 Nights",
        duration: "6 Days / 5 Nights",
        popular: false, // ✅ Added
        shortItinerary: [
          {
            day: "1",
            title:
              "Arrival in Kochi – Transfer to Munnar (Approx. 130 km / 4 hrs)",
            location: "Kochi - Munnar",
            stay: "Bellmount Resorts",
            breakfastNextDay: true,
          },
          {
            day: "2",
            title: "Munnar Local Sightseeings",
            location: "Munnar",
            stay: "Bellmount Resorts",
            breakfastNextDay: true,
          },
          {
            day: "3",
            title: "Head to Thekkady and Enjoy the Sights in Thekkady",
            location: "Munnar - Thekkady",
            stay: "Crystals Cove Hotel",
            breakfastNextDay: true,
          },
          {
            day: "4",
            title: "Thekkady Local Sightseeing",
            location: "Thekkady",
            stay: "Crystals Cove Hotel",
            breakfastNextDay: true,
          },
          {
            day: "5",
            title: "Travel to Alleppey for an Houseboat Experience",
            location: "Thekkady - Alleppey",
            stay: "Lake Queen Deluxe houseboats",
            breakfastNextDay: true,
          },
          {
            day: "6",
            title: "Leave Houseboat, and Visit Fort Before Returning home",
            location: "Alleppey - Kochi",
          },
        ],
        hotels: [
          {
            location: "Munnar",
            duration: "2 Nights",
            durationNumber: [1, 2],
            hotelName: "Bellmount Resorts",
            star: 3,
            category: "Deluxe Category Hotel",
            facilities: ["Free Service", "Restaurant"],
            checkInTime: "noon",
            checkoutTime: "9 a.m.",
            stayLink: "https://maps.google.com/",
          },
          {
            location: "Thekkady",
            duration: "2 Nights",
            durationNumber: [3, 4],
            hotelName: "Crystals Cove Hotel",
            star: 3,
            category: "Deluxe Category Hotel",
            facilities: ["Free Service", "Restaurant", "AC"],
            checkInTime: "2 p.m.",
            checkoutTime: "10 a.m.",
            stayLink: "https://maps.google.com/",
          },
          {
            location: "Alleppey",
            duration: "1 Night",
            durationNumber: [5],
            hotelName: "Lake Queen Deluxe houseboats",
            star: 3,
            category: "Deluxe Category Small-Hotel",
            facilities: ["Free Service", "Restaurant", "AC"],
            checkInTime: "12:05 p.m.",
            checkoutTime: "9 a.m.",
            stayLink: "https://maps.google.com/",
          },
        ],
        cruise: [],
        detailedItinerary: [
          {
            day: "1",
            location: "Kochi - Munnar",
            stay: "Munnar Hotel/Resort",
            title:
              "Arrival in Kochi – Transfer to Munnar (Approx. 130 km / 4 hrs)",
            itineraryPoints: [
              "After landing in Kochi, meet and greet our representative at the airport or railway station. Set out on a scenic drive to Munnar, a charming hill station known for its tea plantations, rolling hills, and lush green valleys. Munnar is approximately 130 km away from Kochi Airport, and it would take around 4 hours to reach.",
              "Later, check in to your hotel in Munnar. The rest of the day is free for leisure — you may stroll through the local markets or visit nearby places to soak in the natural beauty of the region.",
            ],
            sightseeingLocation: "En route Munnar",
            sightseeingItems: [
              {
                name: "Valara Waterfalls",
                detail: "A beautiful cascade surrounded by dense forests.",
              },
              {
                name: "Cheyyappara Waterfalls",
                detail:
                  "A seven-step waterfall offering great photo opportunities.",
              },
            ],
            instruction: "",
            note: [],
            inclusions: "Pick Up Kochi Airport - Munnar - Vehicle is included",
          },
          {
            day: "2",
            location: "Munnar",
            stay: "Munnar Hotel/Resort",
            title: "Munnar Local Sightseeings",
            itineraryPoints: [
              "After breakfast at Munnar hotel, we would start the sights of Munnar.",
              "Munnar Sightseeing (You can spread these sights over your stay depending available time. No sights will be visited twice):",
            ],
            sightseeingLocation: "Munnar",
            sightseeingItems: [
              {
                name: "Tea Plantations",
                detail:
                  "Explore the sprawling tea estates and learn about tea processing.",
              },
              {
                name: "Mattupetty Dam",
                detail: "Popular for boating and panoramic views of the hills.",
              },
              {
                name: "Echo Point",
                detail:
                  "Famous for natural echo phenomenon and picturesque surroundings.",
              },
              {
                name: "Attukal Waterfalls",
                detail: "Serene waterfall surrounded by lush greenery.",
              },
              {
                name: "Kundala Lake & Dam",
                detail: "Pedal boating and tranquil scenery.",
              },
              {
                name: "Pothamedu Viewpoint",
                detail:
                  "Scenic viewpoints ideal for photography and short walks.",
              },
              {
                name: "Tea Museum",
                detail: "Learn about tea processing (optional).",
              },
              {
                name: "Kathakali / Punarjani Traditional Village",
                detail:
                  "Cultural performance showcasing Kerala traditions (optional).",
              },
              {
                name: "Rose Garden",
                detail: "Stroll among vibrant flowers and take photos.",
              },
              {
                name: "Spice Garden",
                detail: "Explore Kerala’s aromatic spices and plantations.",
              },
            ],
            instruction: "",
            note: [],
            inclusions: "Munnar Sightseeing - Vehicle, Parking is included",
          },
          {
            day: "3",
            location: "Munnar - Thekkady",
            stay: "Thekkady Hotel/Resort",
            title: "Head to Thekkady and Enjoy the Sights in Thekkady",
            itineraryPoints: [
              "After breakfast, check out from your hotel in Munnar. Complete any remaining sightseeing if not already done. Depart for Thekkady. Munnar is approximately 90 km away from Thekkady, and it would take around 3–4 hours by road.",
              "Upon arrival in Thekkady, check in to your hotel and rest briefly. Later, enjoy the following sightseeing and activities in Thekkady:",
            ],
            sightseeingLocation: "Thekkady",
            sightseeingItems: [
              {
                name: "Spice plantations",
                detail:
                  "Explore Kerala’s aromatic spice gardens and learn about cardamom, pepper, cinnamon, and more.",
              },
              {
                name: "Periyar Wildlife Sanctuary / Periyar National Park",
                detail:
                  "Jungle safari or boat cruise on Periyar Lake to spot elephants, bison, and other wildlife.",
              },
              {
                name: "Periyar Lake Boat Cruise",
                detail:
                  "Scenic boat ride inside the sanctuary, spotting animals and birds along the lake.",
              },
              {
                name: "Spice Garden Tour",
                detail:
                  "Explore local spice gardens to see cultivation and processing.",
              },
              {
                name: "Elephant Rides",
                detail: "Optional elephant-back ride through forest trails.",
              },
              {
                name: "Kumily Market",
                detail: "Explore local handicrafts, spices, and souvenirs.",
              },
              {
                name: "Cultural Shows",
                detail:
                  "Attend Kathakali or Kalaripayattu performances in the evening (ticketed).",
              },
            ],
            instruction: "",
            note: [],
            inclusions:
              "Munnar - Thekkady - Sightseeing - Vehicle, Parking is included",
          },
          {
            day: "4",
            location: "Thekkady",
            stay: "Thekkady Hotel/Resort",
            title: "Thekkady Local Sightseeing",
            itineraryPoints: [
              "After breakfast, set out to explore the scenic beauty and wildlife of Thekkady, one of Kerala’s most captivating destinations known for its dense forests, spice plantations, and adventurous experiences.",
            ],
            sightseeingLocation: "Thekkady",
            sightseeingItems: [
              {
                name: "Periyar Wildlife Sanctuary & Lake Boating",
                detail:
                  "Enjoy a serene boat ride on Periyar Lake and spot elephants, deer, and other wildlife along the banks.",
              },
              {
                name: "Spice Plantation Visit",
                detail:
                  "Learn about the cultivation of Kerala’s famous spices such as cardamom, pepper, and cinnamon.",
              },
              {
                name: "Elephant Junction",
                detail:
                  "Interact with elephants, enjoy elephant rides, feeding, or bathing experiences (optional).",
              },
              {
                name: "Kadathanadan Kalari & Kathakali Centre",
                detail:
                  "Watch traditional Kerala martial arts (Kalaripayattu) and classical dance performances (tickets extra).",
              },
              {
                name: "Chellarkovil Viewpoint",
                detail:
                  "Offers breathtaking views of plains and cascading waterfalls on clear days.",
              },
              {
                name: "Ayurvedic Massage & Shopping",
                detail:
                  "Visit one of the local centers for authentic Kerala Ayurvedic therapies or shop for handmade chocolates and spices.",
              },
            ],
            instruction: "",
            note: [],
            inclusions:
              "Periyar Wildlife Sanctuary & Lake Boating – Included as per itinerary",
          },
          {
            day: "5",
            location: "Thekkady - Alleppey",
            stay: "Alleppey Hotel/Resort",
            title: "Travel to Alleppey for an Houseboat Experience",
            itineraryPoints: [
              "After breakfast, complete any remaining sightseeing in Thekkady such as a spice garden visit, elephant ride, or boating at Periyar Lake (if not done earlier). Later, check out from the hotel and head towards Alleppey for a memorable houseboat experience.",
              "Upon arrival in Alleppey, check in to your private houseboat by 2:00 PM and begin your tranquil cruise through the enchanting backwaters.",
              "Relax in the serenity of the backwaters and enjoy a peaceful overnight stay in the houseboat.",
            ],
            sightseeingLocation: "Alleppey Backwaters",
            sightseeingItems: [
              {
                name: "Cruise through Vembanad Lake and scenic backwater canals",
                detail: "",
              },
              {
                name: "Traditional Kerala meals freshly prepared on board",
                detail: "Lunch, tea/snacks, and dinner.",
              },
              { name: "Sunset view from the open deck", detail: "" },
              {
                name: "Comfortable stay with a private bedroom and attached washroom",
                detail: "",
              },
            ],
            instruction: "",
            note: [
              "The boat remains anchored from 5:30 PM to 8:00 AM as per government rules.",
              "Deluxe Houseboat: AC runs 9:00 PM – 6:00 AM in the bedroom only.",
              "Premium/Luxury Houseboat: AC runs 24×7 (only one unit active at a time).",
            ],
            inclusions:
              "Thekkady Sightseeing - Alleppey - Vehicle, Toll, Parking is included",
          },
          {
            day: "6",
            location: "Alleppey - Kochi",
            stay: "",
            title: "Leave Houseboat, and Visit Fort Before Returning home",
            itineraryPoints: [
              "After the round of magnificent mangrove laden lake, boat would drop you around 9:00, we will route you to Fort Kochin.",
              "Enjoy the various sites in the fort Kochi. Vehicle would drop you at Kochi Airport.",
            ],
            sightseeingLocation: "Fort Kochi",
            sightseeingItems: [],
            instruction: "",
            note: [],
            inclusions:
              "Alleppey - Fort Kochi - Airport - Vehicle, Toll, Parking is included",
          },
        ],
        tripExclusions: [
          "Any chargeable services utilized in the hotel, and mentioned in the inclusion section.",
          "Gala Dinner (24 Dec, 25 Dec, 31 Dec, 14 Feb, any additional date) is additional until mentioned in the quote.",
          "Christmas Dinner and New Year Dinner are mandatory in most of the hotels.",
          "Any expense which are done for personal entertainment.",
          "Flight Tickets/Train Ticket until unless not specified above.",
          "Camera Charges, and Tip at different sites and restaurants.",
          "Not mentioned specifically above. If something is committed and not mentioned in inclusion, please bring this in our notice ASAP.",
          "City Tour Tickets are included only in Andaman. In any other Indian states, it is not included.",
          "Additional Charges in case of Late Night (Post 8:00 PM) and Early Morning (Pre 6:00 AM) Picks up and Drops. (Not Informed during the itinerary discussions)",
        ],
      },
      {
        packageId: "kerala-tour-4n-5d",
        title: "Kerala Tour Package – 5 Days / 4 Nights",
        duration: "5 Days / 4 Nights",
        popular: true, // ✅ Added
        shortItinerary: [
          {
            day: "1",
            title: "Arrival at Cochin & Transfer to Munnar",
            location: "Cochin - Munnar",
            stay: "Munnar Hotel/Resort",
            breakfastNextDay: true,
          },
          {
            day: "2",
            title: "Munnar Sightseeing",
            location: "Munnar",
            stay: "Munnar Hotel/Resort",
            breakfastNextDay: true,
          },
          {
            day: "3",
            title: "Munnar to Thekkady",
            location: "Munnar - Thekkady",
            stay: "Thekkady Hotel/Resort",
            breakfastNextDay: true,
          },
          {
            day: "4",
            title: "Thekkady to Alleppey",
            location: "Thekkady - Alleppey",
            stay: "Alleppey Houseboat/Hotel",
            breakfastNextDay: true,
          },
          {
            day: "5",
            title: "Alleppey to Cochin Departure",
            location: "Alleppey - Cochin",
          },
        ],
        hotels: [
          {
            location: "Munnar",
            duration: "2 Nights",
            durationNumber: [1, 2],
            hotelName: "Munnar Hotel/Resort",
            star: 3,
            category: "Deluxe Category Hotel",
            facilities: ["wifi", "restaurant", "ac"],
            checkInTime: "12 pm",
            checkoutTime: "11 am",
            stayLink: "https://maps.google.com/",
          },
          {
            location: "Thekkady",
            duration: "1 Night",
            durationNumber: [3],
            hotelName: "Thekkady Hotel/Resort",
            star: 3,
            category: "Deluxe Category Hotel",
            facilities: ["wifi", "restaurant", "ac"],
            checkInTime: "12 pm",
            checkoutTime: "11 am",
            stayLink: "https://maps.google.com/",
          },
          {
            location: "Alleppey",
            duration: "1 Night",
            durationNumber: [4],
            hotelName: "Alleppey Houseboat/Hotel",
            star: 3,
            category: "Deluxe Category Houseboat",
            facilities: ["ac", "meals included"],
            checkInTime: "12 pm",
            checkoutTime: "9 am",
            stayLink: "https://maps.google.com/",
          },
        ],
        cruise: [],
        detailedItinerary: [
          {
            day: "1",
            location: "Cochin",
            stay: "Munnar Hotel/Resort",
            title: "Arrival at Cochin & Transfer to Munnar",
            itineraryPoints: [
              "On arrival at Cochin Airport/Railway Station, meet our representative and proceed to Munnar. Enjoy the scenic drive through tea plantations, waterfalls, and spice plantations.",
            ],
            sightseeingLocation: "Enroute Munnar",
            sightseeingItems: [
              {
                name: "Cheeyappara Waterfalls",
                detail:
                  "A beautiful cascading waterfall located on the way to Munnar.",
              },
              {
                name: "Valara Waterfalls",
                detail: "A scenic waterfall surrounded by lush greenery.",
              },
            ],
            instruction: "Check-in at the hotel in Munnar for overnight stay.",
            note: [],
            inclusions: "Transfers & Driver Allowance included",
          },
          {
            day: "2",
            location: "Munnar",
            stay: "Munnar Hotel/Resort",
            title: "Munnar Sightseeing",
            itineraryPoints: [
              "After breakfast, proceed for a full-day sightseeing tour of Munnar.",
            ],
            sightseeingLocation: "Munnar",
            sightseeingItems: [
              {
                name: "Eravikulam National Park",
                detail: "Home to the endangered Nilgiri Tahr.",
              },
              {
                name: "Tea Museum",
                detail: "Learn about tea processing and plantation history.",
              },
              {
                name: "Mattupetty Dam",
                detail: "A popular picnic spot offering boating facilities.",
              },
              {
                name: "Echo Point",
                detail: "Famous for its natural echo phenomenon.",
              },
            ],
            instruction: "Return to hotel for overnight stay.",
            note: [],
            inclusions: "Sightseeing & Vehicle included",
          },
          {
            day: "3",
            location: "Thekkady",
            stay: "Thekkady Hotel/Resort",
            title: "Munnar to Thekkady",
            itineraryPoints: [
              "After breakfast, check out and proceed to Thekkady. On arrival, check-in at the hotel.",
            ],
            sightseeingLocation: "Thekkady",
            sightseeingItems: [
              {
                name: "Periyar Wildlife Sanctuary",
                detail:
                  "Enjoy optional boating and wildlife spotting (at extra cost).",
              },
            ],
            instruction: "Overnight stay at Thekkady.",
            note: [],
            inclusions: "Transfers included",
          },
          {
            day: "4",
            location: "Alleppey",
            stay: "Alleppey Houseboat/Hotel",
            title: "Thekkady to Alleppey",
            itineraryPoints: [
              "After breakfast, proceed to Alleppey. Check-in to houseboat and enjoy backwater cruise experience.",
            ],
            sightseeingLocation: "Alleppey Backwaters",
            sightseeingItems: [
              {
                name: "Houseboat Cruise",
                detail:
                  "Experience Kerala backwaters with traditional houseboat stay including meals.",
              },
            ],
            instruction: "Overnight stay in Houseboat.",
            note: [],
            inclusions: "Houseboat stay with meals included",
          },
          {
            day: "5",
            location: "Cochin",
            stay: "",
            title: "Alleppey to Cochin Departure",
            itineraryPoints: [
              "After breakfast, check out and proceed to Cochin Airport/Railway Station for departure.",
            ],
            sightseeingLocation: "",
            sightseeingItems: [],
            instruction: "",
            note: [],
            inclusions: "",
          },
        ],
        tripExclusions: [
          "Airfare / Train Tickets",
          "Any personal expenses",
          "Entrance fees not mentioned in inclusions",
          "Optional activities & boating charges",
          "Anything not mentioned in inclusions",
        ],
      },
    ],
  },
  {
    id: 6,
    slug: "dubai",
    title: "Dubai",
    description:
      "Luxury skyline, desert adventures, and world-class experiences.",
    heroImage: {
      folder: "dubai",
      alt: "Luxury skyline, desert adventures, and world-class experiences.",
    },
    bestSeason: ["October", "November", "December", "January"],
    tags: ["beach", "honeymoon", "family"],
    packages: [
      {
        packageId: "dubai-5n-6d",
        title: "6 Days/5 Nights Plan for Dubai",
        duration: "6 Days / 5 Nights",
        popular: false, // ✅ Added
        shortItinerary: [
          {
            day: "1",
            title: "Pick Up At DXB INTL Airport By Evening Dhow Cruise Marina",
            location: "Dubai",
            stay: "Admiral Plaza Hotel",
            breakfastNextDay: true,
          },
          {
            day: "2",
            title:
              "Dubai City Tour Followed by At The Top Burj Khalifa 124th Floor (Non Prime Time)",
            location: "Dubai",
            stay: "Admiral Plaza Hotel",
            breakfastNextDay: true,
          },
          {
            day: "3",
            title: "Dubai Frame and Desert Safari",
            location: "Dubai",
            stay: "Admiral Plaza Hotel",
            breakfastNextDay: true,
          },
          {
            day: "4",
            title: "Abu Dhabi BAPS Temple Visit with Ferrari World",
            location: "Dubai",
            stay: "Admiral Plaza Hotel",
            breakfastNextDay: true,
          },
          {
            day: "5",
            title: "Miracle Garden and Global Village",
            location: "Dubai",
            stay: "Admiral Plaza Hotel",
            breakfastNextDay: true,
          },
          {
            day: "6",
            title: "Souvenirs & Goodbyes – Shopping Before Departure",
            location: "Dubai",
          },
        ],
        hotels: [
          {
            location: "Dubai",
            duration: "5 Nights",
            durationNumber: [1, 2, 3, 4, 5],
            hotelName: "Admiral Plaza Hotel",
            star: 3,
            category: "Deluxe Category Hotel",
            facilities: ["Free Service", "Restaurant", "Pool", "Gym", "AC"],
            checkInTime: "2 p.m.",
            checkoutTime: "noon",
            stayLink: "https://www.admiralplazadubai.com/",
          },
        ],
        cruise: [
          {
            day: 1,
            location: "Dubai Marina",
            category: "Dinner Cruise",
            name: "Dhow Cruise Marina",
          },
        ],
        detailedItinerary: [
          {
            day: "1",
            location: "Dubai",
            stay: "Dubai Hotel/Resort",
            title: "Pick Up At DXB INTL Airport By Evening Dhow Cruise Marina",
            itineraryPoints: [
              "Arrive at Dubai International Airport, where our representative will warmly welcome you and transfer you to your hotel for check-in and some rest.",
              "In the evening, embark on a delightful Dhow Cruise at Dubai Marina, where you’ll enjoy stunning views of the city skyline along with a delicious dinner on board.",
            ],
            sightseeingLocation: "Dubai Marina",
            sightseeingItems: [
              {
                name: "Dhow Cruise Marina",
                detail: "Evening cruise with dinner and skyline views.",
              },
            ],
            instruction: "",
            note: [],
            inclusions:
              "Airport Transfer Dubai Airport - Dubai Hotels - Vehicle, Fuel, Toll and Parking is included",
          },
          {
            day: "2",
            location: "Dubai",
            stay: "Dubai Hotel/Resort",
            title:
              "Dubai City Tour Followed by At The Top Burj Khalifa 124th Floor (Non Prime Time)",
            itineraryPoints: [
              "Begin your day with a comfortable pickup from your hotel in Dubai after breakfast and set off on an exciting Dubai City Tour.",
              "Discover iconic landmarks including: Dubai Museum (Al Fahidi Fort) + Dubai Creek (photo stop) + Jumeirah Mosque (drive-by) + Burj Al Arab (photo stop) + Jumeirah Beach + The Palm Jumeirah & Atlantis Hotel (photo stop) + Dubai Marina + Gold & Spice Souks.",
              "Visit Burj Khalifa 124th Floor – At The Top (Non-Prime Time Entry) and enjoy panoramic views of Dubai.",
            ],
            sightseeingLocation: "Dubai",
            sightseeingItems: [
              {
                name: "Dubai Museum (Al Fahidi Fort)",
                detail: "City heritage site.",
              },
              { name: "Dubai Creek", detail: "Photo stop." },
              { name: "Jumeirah Mosque", detail: "Drive-by." },
              { name: "Burj Al Arab", detail: "Photo stop." },
              { name: "Jumeirah Beach", detail: "Beach visit." },
              { name: "Palm Jumeirah & Atlantis Hotel", detail: "Photo stop." },
              { name: "Dubai Marina", detail: "Marina area visit." },
              { name: "Gold & Spice Souks", detail: "Traditional markets." },
              {
                name: "Burj Khalifa 124th Floor",
                detail: "Observation deck visit.",
              },
            ],
            instruction: "",
            note: [],
            inclusions:
              "Dubai City Tour, Desert Safari, Dhow Cruise on Marina with Dinner with Burj Khalifa 124th Non Prime - Tickets, Vehicle, and Dinner is included",
          },
          {
            day: "3",
            location: "Dubai",
            stay: "Dubai Hotel/Resort",
            title: "Dubai Frame and Desert Safari",
            itineraryPoints: [
              "Visit Dubai Frame.",
              "Enjoy Desert Safari experience.",
            ],
            sightseeingLocation: "Dubai",
            sightseeingItems: [
              {
                name: "Dubai Frame",
                detail: "Tickets and transfers included.",
              },
              { name: "Desert Safari", detail: "Desert adventure experience." },
            ],
            instruction: "",
            note: [],
            inclusions: "Dubai Frame - Tickets and Transfers is included",
          },
          {
            day: "4",
            location: "Abu Dhabi",
            stay: "Dubai Hotel/Resort",
            title: "Abu Dhabi BAPS Temple Visit with Ferrari World",
            itineraryPoints: [
              "Proceed for Abu Dhabi full-day tour via Sheikh Zayed Road.",
              "Visit Sheikh Zayed Grand Mosque.",
              "Photo stop at Emirates Palace, Corniche, and Heritage Village.",
              "Visit Ferrari World and enjoy rides including Formula Rossa.",
            ],
            sightseeingLocation: "Abu Dhabi",
            sightseeingItems: [
              {
                name: "Sheikh Zayed Grand Mosque",
                detail: "One of the world’s largest mosques.",
              },
              { name: "Emirates Palace", detail: "Photo stop." },
              { name: "Corniche", detail: "Scenic waterfront." },
              { name: "Heritage Village", detail: "Cultural experience." },
              {
                name: "Ferrari World",
                detail: "Theme park with Formula Rossa.",
              },
            ],
            instruction: "",
            note: [],
            inclusions:
              "Abu Dhabi City Tour With Ferrari World - Tickets and Transfers is included",
          },
          {
            day: "5",
            location: "Dubai",
            stay: "Dubai Hotel/Resort",
            title: "Miracle Garden and Global Village",
            itineraryPoints: ["Visit Miracle Garden.", "Visit Global Village."],
            sightseeingLocation: "Dubai",
            sightseeingItems: [
              { name: "Miracle Garden", detail: "Floral attraction." },
              {
                name: "Global Village",
                detail: "Cultural shopping & entertainment destination.",
              },
            ],
            instruction: "",
            note: [],
            inclusions:
              "Global Village and Miracle Garden - Tickets and Transfers is included",
          },
          {
            day: "6",
            location: "Dubai",
            stay: "",
            title: "Souvenirs & Goodbyes – Shopping Before Departure",
            itineraryPoints: [
              "Enjoy free time for last-minute shopping.",
              "Transfer to Dubai International Airport for departure.",
            ],
            sightseeingLocation: "",
            sightseeingItems: [],
            instruction: "",
            note: [],
            inclusions:
              "Airport Transfer Dubai Airport - Dubai Hotels - Vehicle, Fuel, Toll and Parking is included",
          },
        ],
        tripExclusions: [
          "Dubai Tourism Fee (Tourism Dirham) payable at hotel (Approx. AED 10–20 per room per night).",
          "Any chargeable services utilized in the hotel, and not mentioned in the inclusion section.",
          "Gala Dinner (24 Dec, 25 Dec, 31 Dec, 14 Feb, any additional date) is additional until mentioned in the quote.",
          "Christmas Dinner and New Year Dinner are mandatory in most of the hotels.",
          "International and domestic airfare, unless specifically mentioned.",
          "UAE tourist visa fees and travel insurance, unless specifically mentioned.",
          "TCS (Tax Collected at Source) – mandatory as per Government of India, not included in the package cost.",
          "Meals not mentioned in the itinerary.",
          "Early check-in or late check-out at hotels.",
          "Optional tours and activities.",
          "Personal expenses: Tips, porterage, shopping, laundry, phone calls, beverages, minibar, etc.",
          "Additional transfers beyond the scheduled itinerary.",
          "Peak season or event surcharges, if applicable.",
        ],
      },
      {
        packageId: "dubai-4n-5d-beyond-skyline",
        title: "5 Days/4 Nights Plan for Dubai",
        duration: "5 Days / 4 Nights",
        popular: true, // ✅ Added
        shortItinerary: [
          {
            day: "1",
            title: "Arrival At Dubai - Go for Evening Dhow Cruise",
            location: "Dubai",
            stay: "Admiral Plaza Hotel",
            breakfastNextDay: true,
          },
          {
            day: "2",
            title:
              "Dubai City Tour Followed by At The Top Burj Khalifa 124th Floor (Non Prime Time)",
            location: "Dubai",
            stay: "Admiral Plaza Hotel",
            breakfastNextDay: true,
          },
          {
            day: "3",
            title: "Dubai Frame and Desert Safari",
            location: "Dubai",
            stay: "Admiral Plaza Hotel",
            breakfastNextDay: true,
          },
          {
            day: "4",
            title: "Miracle Garden and Global Village",
            location: "Dubai",
            stay: "Admiral Plaza Hotel",
            breakfastNextDay: true,
          },
          {
            day: "5",
            title: "Souvenirs & Goodbyes – Shopping Before Departure",
            location: "Dubai",
          },
        ],
        hotels: [
          {
            location: "Dubai",
            duration: "4 Nights",
            durationNumber: [1, 2, 3, 4],
            hotelName: "Admiral Plaza Hotel",
            star: 3,
            category: "Deluxe Category Hotel",
            facilities: ["Free Service", "Restaurant", "Pool", "Gym", "AC"],
            checkInTime: "2 p.m.",
            checkoutTime: "noon",
            stayLink: "https://maps.google.com/",
          },
        ],
        cruise: [
          {
            day: 1,
            location: "Dubai Creek",
            category: "Dinner Cruise",
            name: "Dhow Cruise",
          },
        ],
        detailedItinerary: [
          {
            day: "1",
            location: "Dubai",
            stay: "Dubai Hotel/Resort",
            title: "Arrival At Dubai - Go for Evening Dhow Cruise",
            itineraryPoints: [
              "Welcome to Dubai Upon arrival, our representative will warmly greet you at the Airport Arrival Terminal, holding a signage card with your name. You’ll be escorted to your waiting vehicle for a smooth transfer to your hotel.",
              "Experience the Charm of Dubai Creek! Dubai Creek divides the city into Bur Dubai and Deira.",
              "Embark on a traditional dhow cruise with lower (air-conditioned) and upper (open-air) decks.",
              "Enjoy a welcome drink and delicious barbecued dishes while cruising along the creek. Starts at 7:00 pm (Duration: 4 hrs)",
            ],
            sightseeingLocation: "Dubai Creek",
            sightseeingItems: [
              {
                name: "Dhow Cruise",
                detail: "Traditional dhow cruise with dinner and city views.",
              },
            ],
            instruction: "",
            note: [],
            inclusions:
              "Airport Transfer Dubai Airport - Dubai Hotels - Vehicle, Fuel, Toll and Parking is included",
          },
          {
            day: "2",
            location: "Dubai",
            stay: "Dubai Hotel/Resort",
            title:
              "Dubai City Tour Followed by At The Top Burj Khalifa 124th Floor (Non Prime Time)",
            itineraryPoints: [
              "Begin your day with a comfortable pickup from your hotel in Dubai after breakfast and set off on an exciting Dubai City Tour.",
              "Visit: Dubai Museum (Al Fahidi Fort) + Dubai Creek (photo stop) + Jumeirah Mosque (drive-by) + Burj Al Arab (photo stop) + Jumeirah Beach + The Palm Jumeirah & Atlantis Hotel (photo stop) + Dubai Marina + Gold & Spice Souks.",
              "Visit Burj Khalifa 124th Floor – At The Top (Non-Prime Time Entry) and enjoy panoramic skyline views.",
            ],
            sightseeingLocation: "Dubai",
            sightseeingItems: [
              {
                name: "Dubai Museum (Al Fahidi Fort)",
                detail: "Historic museum.",
              },
              { name: "Dubai Creek", detail: "Photo stop." },
              { name: "Jumeirah Mosque", detail: "Drive-by." },
              { name: "Burj Al Arab", detail: "Photo stop." },
              { name: "Jumeirah Beach", detail: "Beach visit." },
              { name: "Palm Jumeirah & Atlantis Hotel", detail: "Photo stop." },
              { name: "Dubai Marina", detail: "Marina visit." },
              { name: "Gold & Spice Souks", detail: "Traditional markets." },
              {
                name: "Burj Khalifa 124th Floor",
                detail: "Observation deck visit.",
              },
            ],
            instruction: "",
            note: [],
            inclusions:
              "Dubai City Tour, Desert Safari, Dhow Cruise on Marina with Dinner with Burj Khalifa 124th Non Prime - Tickets, Vehicle, and Dinner is included",
          },
          {
            day: "3",
            location: "Dubai",
            stay: "Dubai Hotel/Resort",
            title: "Dubai Frame and Desert Safari",
            itineraryPoints: [
              "Visit Dubai Frame.",
              "Enjoy Desert Safari experience with BBQ Dinner.",
            ],
            sightseeingLocation: "Dubai",
            sightseeingItems: [
              {
                name: "Dubai Frame",
                detail: "Tickets and Transfers included.",
              },
              {
                name: "Desert Safari",
                detail: "Desert adventure with BBQ Dinner.",
              },
            ],
            instruction: "",
            note: [],
            inclusions: "Dubai Frame - Tickets and Transfers is included",
          },
          {
            day: "4",
            location: "Dubai",
            stay: "Dubai Hotel/Resort",
            title: "Miracle Garden and Global Village",
            itineraryPoints: ["Visit Miracle Garden.", "Visit Global Village."],
            sightseeingLocation: "Dubai",
            sightseeingItems: [
              { name: "Miracle Garden", detail: "Floral attraction." },
              {
                name: "Global Village",
                detail: "Cultural shopping & entertainment destination.",
              },
            ],
            instruction: "",
            note: [],
            inclusions:
              "Global Village and Miracle Garden - Tickets and Transfers is included",
          },
          {
            day: "5",
            location: "Dubai",
            stay: "",
            title: "Souvenirs & Goodbyes – Shopping Before Departure",
            itineraryPoints: [
              "After breakfast and check-out, enjoy some free time for last-minute shopping.",
              "Transfer to Dubai International Airport for departure.",
            ],
            sightseeingLocation: "",
            sightseeingItems: [],
            instruction: "",
            note: [],
            inclusions:
              "Airport Transfer Dubai Airport - Dubai Hotels - Vehicle, Fuel, Toll and Parking is included",
          },
        ],
        tripExclusions: [
          "Dubai Tourism Fee (Tourism Dirham) payable directly at hotel (Approx. AED 10–20 per room per night).",
          "Any chargeable services utilized in the hotel, and not mentioned in the inclusion section.",
          "Gala Dinner (24 Dec, 25 Dec, 31 Dec, 14 Feb, any additional date) is additional until mentioned in the quote.",
          "Christmas Dinner and New Year Dinner are mandatory in most of the hotels.",
          "International and domestic airfare, unless specifically mentioned.",
          "UAE tourist visa fees and travel insurance, unless specifically mentioned.",
          "TCS (Tax Collected at Source) – mandatory as per Government of India, not included in the package cost.",
          "Meals not mentioned in the itinerary.",
          "Early check-in or late check-out at hotels.",
          "Optional tours and activities.",
          "Personal expenses: Tips, porterage, shopping, laundry, phone calls, beverages, minibar, etc.",
          "Additional transfers beyond the scheduled itinerary.",
          "Peak season or event surcharges, if applicable.",
        ],
      },
      {
        packageId: "dubai-4n-5d-on-a-budget",
        title: "5 Days/4 Nights Plan for Dubai",
        duration: "5 Days / 4 Nights",
        popular: true, // ✅ Added
        shortItinerary: [
          {
            day: "1",
            title: "Pick Up At DXB INTL Airport By Evening Dhow Cruise Marina",
            location: "Dubai",
            stay: "Admiral Plaza Hotel",
            breakfastNextDay: true,
          },
          {
            day: "2",
            title:
              "Dubai City Tour Followed by At The Top Burj Khalifa 124th Floor (Non Prime Time)",
            location: "Dubai",
            stay: "Admiral Plaza Hotel",
            breakfastNextDay: true,
          },
          {
            day: "3",
            title: "Dubai Frame and Desert Safari",
            location: "Dubai",
            stay: "Admiral Plaza Hotel",
            breakfastNextDay: true,
          },
          {
            day: "4",
            title: "Abu Dhabi Day Tour",
            location: "Dubai",
            stay: "Admiral Plaza Hotel",
            breakfastNextDay: true,
          },
          {
            day: "5",
            title: "Souvenirs & Goodbyes – Shopping Before Departure",
            location: "Dubai",
          },
        ],
        hotels: [
          {
            location: "Dubai",
            duration: "4 Nights",
            durationNumber: [1, 2, 3, 4],
            hotelName: "Admiral Plaza Hotel",
            star: 3,
            category: "Deluxe Category Hotel",
            facilities: ["Free Service", "Restaurant", "Pool", "Gym", "AC"],
            checkInTime: "2 p.m.",
            checkoutTime: "noon",
            stayLink: "https://maps.google.com/",
          },
        ],
        cruise: [
          {
            day: 1,
            location: "Dubai Marina",
            category: "Dinner Cruise",
            name: "Dhow Cruise Marina",
          },
        ],
        detailedItinerary: [
          {
            day: "1",
            location: "Dubai",
            stay: "Dubai Hotel/Resort",
            title: "Pick Up At DXB INTL Airport By Evening Dhow Cruise Marina",
            itineraryPoints: [
              "Arrive at Dubai International Airport where our representative will welcome you and transfer you to your hotel for check-in.",
              "In the evening, embark on a delightful Dhow Cruise at Dubai Marina.",
              "Enjoy stunning skyline views along with a delicious dinner on board.",
            ],
            sightseeingLocation: "Dubai Marina",
            sightseeingItems: [
              {
                name: "Dhow Cruise Marina",
                detail:
                  "Dinner cruise with live entertainment and skyline views.",
              },
            ],
            instruction: "",
            note: [],
            inclusions:
              "Airport Transfer Dubai Airport - Dubai Hotels - Vehicle, Fuel, Toll and Parking is included",
          },
          {
            day: "2",
            location: "Dubai",
            stay: "Dubai Hotel/Resort",
            title:
              "Dubai City Tour Followed by At The Top Burj Khalifa 124th Floor (Non Prime Time)",
            itineraryPoints: [
              "After breakfast proceed for Dubai City Tour.",
              "Visit: Dubai Museum (Al Fahidi Fort) + Dubai Creek (photo stop) + Jumeirah Mosque (drive-by) + Burj Al Arab (photo stop) + Jumeirah Beach + Palm Jumeirah & Atlantis Hotel (photo stop) + Dubai Marina + Gold & Spice Souks.",
              "Visit Burj Khalifa 124th Floor – At The Top (Non-Prime Time Entry) and enjoy panoramic skyline views.",
            ],
            sightseeingLocation: "Dubai",
            sightseeingItems: [
              {
                name: "Dubai Museum (Al Fahidi Fort)",
                detail: "Historic museum visit.",
              },
              { name: "Dubai Creek", detail: "Photo stop." },
              { name: "Jumeirah Mosque", detail: "Drive-by." },
              { name: "Burj Al Arab", detail: "Photo stop." },
              { name: "Jumeirah Beach", detail: "Beach visit." },
              { name: "Palm Jumeirah & Atlantis Hotel", detail: "Photo stop." },
              { name: "Dubai Marina", detail: "Marina visit." },
              { name: "Gold & Spice Souks", detail: "Traditional markets." },
              {
                name: "Burj Khalifa 124th Floor",
                detail: "Observation deck visit.",
              },
            ],
            instruction: "",
            note: [],
            inclusions:
              "Dubai City Tour, Burj Khalifa 124th Non Prime - Tickets and Transfers is included",
          },
          {
            day: "3",
            location: "Dubai",
            stay: "Dubai Hotel/Resort",
            title: "Dubai Frame and Desert Safari",
            itineraryPoints: [
              "Visit Dubai Frame and explore panoramic views of Old and New Dubai.",
              "Later proceed for Desert Safari including dune bashing and BBQ Dinner with cultural performances.",
            ],
            sightseeingLocation: "Dubai",
            sightseeingItems: [
              {
                name: "Dubai Frame",
                detail: "Tickets and Transfers included.",
              },
              {
                name: "Desert Safari",
                detail: "Desert adventure with BBQ Dinner.",
              },
            ],
            instruction: "",
            note: [],
            inclusions:
              "Dubai Frame and Desert Safari with BBQ Dinner - Tickets and Transfers is included",
          },
          {
            day: "4",
            location: "Dubai",
            stay: "Dubai Hotel/Resort",
            title: "Abu Dhabi Day Tour",
            itineraryPoints: [
              "After breakfast proceed for full-day Abu Dhabi City Tour.",
              "Visit Sheikh Zayed Grand Mosque.",
              "Visit Louvre Museum (external or as per schedule).",
              "Return to Dubai hotel in the evening.",
            ],
            sightseeingLocation: "Abu Dhabi",
            sightseeingItems: [
              {
                name: "Sheikh Zayed Grand Mosque",
                detail: "Iconic white marble mosque.",
              },
              {
                name: "Louvre Museum Abu Dhabi",
                detail: "Cultural and art museum.",
              },
            ],
            instruction: "",
            note: [],
            inclusions:
              "Abu Dhabi City Tour - Tickets and Transfers is included",
          },
          {
            day: "5",
            location: "Dubai",
            stay: "",
            title: "Souvenirs & Goodbyes – Shopping Before Departure",
            itineraryPoints: [
              "After breakfast and check-out, enjoy free time for shopping.",
              "Transfer to Dubai International Airport for departure.",
            ],
            sightseeingLocation: "",
            sightseeingItems: [],
            instruction: "",
            note: [],
            inclusions:
              "Airport Transfer Dubai Airport - Dubai Hotels - Vehicle, Fuel, Toll and Parking is included",
          },
        ],
        tripExclusions: [
          "Dubai Tourism Fee (Tourism Dirham) payable directly at hotel (Approx. AED 10–20 per room per night).",
          "Any chargeable services utilized in the hotel, and not mentioned in the inclusion section.",
          "Gala Dinner (24 Dec, 25 Dec, 31 Dec, 14 Feb, any additional date) is additional until mentioned in the quote.",
          "Christmas Dinner and New Year Dinner are mandatory in most of the hotels.",
          "International and domestic airfare, unless specifically mentioned.",
          "UAE tourist visa fees and travel insurance, unless specifically mentioned.",
          "TCS (Tax Collected at Source) – mandatory as per Government of India, not included in the package cost.",
          "Meals not mentioned in the itinerary.",
          "Early check-in or late check-out at hotels.",
          "Optional tours and activities.",
          "Personal expenses: Tips, porterage, shopping, laundry, phone calls, beverages, minibar, etc.",
          "Additional transfers beyond the scheduled itinerary.",
          "Peak season or event surcharges, if applicable.",
        ],
      },
      {
        packageId: "dubai-5n-6d-romantic-honeymoon",
        title: "6 Days/5 Nights Plan for Dubai",
        duration: "6 Days / 5 Nights",
        popular: false, // ✅ Added
        shortItinerary: [
          {
            day: "1",
            title: "Pick Up At DXB INTL Airport By Evening Dhow Cruise Marina",
            location: "Dubai",
            stay: "Admiral Plaza Hotel",
            breakfastNextDay: true,
          },
          {
            day: "2",
            title:
              "Dubai City Tour Followed by At The Top Burj Khalifa 124th Floor (Non Prime Time)",
            location: "Dubai",
            stay: "Admiral Plaza Hotel",
            breakfastNextDay: true,
          },
          {
            day: "3",
            title: "Dubai Frame and Desert Safari",
            location: "Dubai",
            stay: "Admiral Plaza Hotel",
            breakfastNextDay: true,
          },
          {
            day: "4",
            title: "Miracle Garden and Global Village",
            location: "Dubai",
            stay: "Admiral Plaza Hotel",
            breakfastNextDay: true,
          },
          {
            day: "5",
            title: "Abu Dhabi BAPS Temple Visit with Ferrari World",
            location: "Dubai",
            stay: "Admiral Plaza Hotel",
            breakfastNextDay: true,
          },
          {
            day: "6",
            title: "Departure with Memories of a Lifetime",
            location: "Dubai",
          },
        ],
        hotels: [
          {
            location: "Dubai",
            duration: "5 Nights",
            durationNumber: [1, 2, 3, 4, 5],
            hotelName: "Admiral Plaza Hotel",
            star: 3,
            category: "Deluxe Category Hotel",
            facilities: ["Free Service", "Restaurant", "Pool", "Gym", "AC"],
            checkInTime: "2 p.m.",
            checkoutTime: "noon",
            stayLink: "https://maps.google.com/",
          },
        ],
        cruise: [
          {
            day: 1,
            location: "Dubai Marina",
            category: "Dinner Cruise",
            name: "Dhow Cruise Marina",
          },
        ],
        detailedItinerary: [
          {
            day: "1",
            location: "Dubai",
            stay: "Dubai Hotel/Resort",
            title: "Pick Up At DXB INTL Airport By Evening Dhow Cruise Marina",
            itineraryPoints: [
              "Arrive at Dubai International Airport and meet our representative for hotel transfer.",
              "Check-in and relax at the hotel.",
              "In the evening enjoy Dhow Cruise Marina with dinner and beautiful skyline views.",
            ],
            sightseeingLocation: "Dubai Marina",
            sightseeingItems: [
              {
                name: "Dhow Cruise Marina",
                detail: "Romantic dinner cruise with skyline views.",
              },
            ],
            instruction: "",
            note: [],
            inclusions:
              "Airport Transfer Dubai Airport - Dubai Hotels - Vehicle, Fuel, Toll and Parking is included. Dhow Marina Cruise - Tickets and Transfers is included",
          },
          {
            day: "2",
            location: "Dubai",
            stay: "Dubai Hotel/Resort",
            title:
              "Dubai City Tour Followed by At The Top Burj Khalifa 124th Floor (Non Prime Time)",
            itineraryPoints: [
              "After breakfast proceed for Dubai City Tour.",
              "Visit: Dubai Museum (Al Fahidi Fort) + Dubai Creek (photo stop) + Jumeirah Mosque (drive-by) + Burj Al Arab (photo stop) + Jumeirah Beach + Palm Jumeirah & Atlantis Hotel (photo stop) + Dubai Marina + Gold & Spice Souks.",
              "Visit Burj Khalifa 124th Floor – At The Top (Non-Prime Time Entry).",
            ],
            sightseeingLocation: "Dubai",
            sightseeingItems: [
              {
                name: "Dubai Museum (Al Fahidi Fort)",
                detail: "Historic museum visit.",
              },
              { name: "Dubai Creek", detail: "Photo stop." },
              { name: "Jumeirah Mosque", detail: "Drive-by." },
              { name: "Burj Al Arab", detail: "Photo stop." },
              { name: "Jumeirah Beach", detail: "Beach visit." },
              { name: "Palm Jumeirah & Atlantis Hotel", detail: "Photo stop." },
              { name: "Dubai Marina", detail: "Marina visit." },
              { name: "Gold & Spice Souks", detail: "Traditional markets." },
              {
                name: "Burj Khalifa 124th Floor",
                detail: "Observation deck visit.",
              },
            ],
            instruction: "",
            note: [],
            inclusions:
              "Dubai City Tour and Burj Khalifa 124th Non Prime - Tickets and Transfers is included",
          },
          {
            day: "3",
            location: "Dubai",
            stay: "Dubai Hotel/Resort",
            title: "Dubai Frame and Desert Safari",
            itineraryPoints: [
              "Visit Dubai Frame.",
              "Enjoy Desert Safari with dune bashing and BBQ Dinner with cultural performances.",
            ],
            sightseeingLocation: "Dubai",
            sightseeingItems: [
              {
                name: "Dubai Frame",
                detail: "Tickets and Transfers included.",
              },
              {
                name: "Desert Safari",
                detail: "Desert adventure with BBQ Dinner.",
              },
            ],
            instruction: "",
            note: [],
            inclusions:
              "Dubai Frame and Desert Safari with BBQ Dinner - Tickets and Transfers is included",
          },
          {
            day: "4",
            location: "Dubai",
            stay: "Dubai Hotel/Resort",
            title: "Miracle Garden and Global Village",
            itineraryPoints: [
              "Visit Miracle Garden.",
              "Visit Global Village for shopping and cultural entertainment.",
            ],
            sightseeingLocation: "Dubai",
            sightseeingItems: [
              { name: "Miracle Garden", detail: "Floral attraction." },
              {
                name: "Global Village",
                detail: "Cultural shopping & entertainment destination.",
              },
            ],
            instruction: "",
            note: [],
            inclusions:
              "Global Village and Miracle Garden - Tickets and Transfers is included",
          },
          {
            day: "5",
            location: "Dubai",
            stay: "Dubai Hotel/Resort",
            title: "Abu Dhabi BAPS Temple Visit with Ferrari World",
            itineraryPoints: [
              "Proceed for full-day Abu Dhabi tour.",
              "Visit Sheikh Zayed Grand Mosque.",
              "Visit BAPS Hindu Temple.",
              "Photo stop at Emirates Palace and Corniche.",
              "Enjoy thrilling rides at Ferrari World.",
              "Return to Dubai hotel in the evening.",
            ],
            sightseeingLocation: "Abu Dhabi",
            sightseeingItems: [
              {
                name: "Sheikh Zayed Grand Mosque",
                detail: "Iconic mosque visit.",
              },
              {
                name: "BAPS Hindu Temple",
                detail: "Spiritual landmark visit.",
              },
              {
                name: "Ferrari World",
                detail: "Theme park with thrilling rides.",
              },
            ],
            instruction: "",
            note: [],
            inclusions:
              "Abu Dhabi City Tour With Ferrari World - Tickets and Transfers is included",
          },
          {
            day: "6",
            location: "Dubai",
            stay: "",
            title: "Departure with Memories of a Lifetime",
            itineraryPoints: [
              "Enjoy breakfast at the hotel.",
              "Free time for relaxation or last-minute shopping.",
              "Private transfer to Dubai International Airport for departure.",
            ],
            sightseeingLocation: "",
            sightseeingItems: [],
            instruction: "",
            note: [],
            inclusions:
              "Airport Transfer Dubai Airport - Dubai Hotels - Vehicle, Fuel, Toll and Parking is included",
          },
        ],
        tripExclusions: [
          "Dubai Tourism Fee (Tourism Dirham) payable directly at hotel (Approx. AED 10–20 per room per night).",
          "Any chargeable services utilized in the hotel, and not mentioned in the inclusion section.",
          "Gala Dinner (24 Dec, 25 Dec, 31 Dec, 14 Feb, any additional date) is additional until mentioned in the quote.",
          "Christmas Dinner and New Year Dinner are mandatory in most of the hotels.",
          "International and domestic airfare, unless specifically mentioned.",
          "UAE tourist visa fees and travel insurance, unless specifically mentioned.",
          "TCS (Tax Collected at Source) – mandatory as per Government of India, not included in the package cost.",
          "Meals not mentioned in the itinerary.",
          "Early check-in or late check-out at hotels.",
          "Optional tours and activities.",
          "Personal expenses: Tips, porterage, shopping, laundry, phone calls, beverages, minibar, etc.",
          "Additional transfers beyond the scheduled itinerary.",
          "Peak season or event surcharges, if applicable.",
        ],
      },
    ],
  },
];
