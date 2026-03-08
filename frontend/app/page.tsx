import Header from "@/components/layout/Header";
import Banner from "@/components/home/Banner";
import FeaturedDestinations from "@/components/home/FeaturedDestinations";
import PackagesSection from "@/components/home/PackagesSection";
import TrustSection from "@/components/home/TrustSection";
import Footer from "@/components/shared/Footer";

import { CalendarIcon } from "@/assets/icons/icons";
import Testimonials from "@/components/shared/Testimonials";
import bannerImg from "@/assets/images/home_banner.jpg";

const travelInsurance = "/icons/travel_insurance.png";
const customeSupport = "/icons/customer_support.png";
const easyBooking = "/icons/easy_booking.png";
const travelPackage = "/icons/travel_package.png";
const trustUsImg = "/images/tourist-presenting-trust.png";

export default function Home() {
  return (
    <>
      <Header
        navItems={[
          { text: "Destinations", id: "featuredDestinations" },
          { text: "Packages", id: "packagesSection" },
          // { text: "Tours", href: "/tours" },
          // { text: "Blog", href: "/blog", variant: "darkBordered" },
        ]}
      />
      <Banner />
      <div id="featuredDestinations">
        <FeaturedDestinations />
      </div>
      <div id="packagesSection">
        <PackagesSection />
      </div>
      <TrustSection
        trustItems={[
          {
            id: 1,
            title: "Expertly Curated Packages",
            description:
              "Carefully designed itineraries tailored to your preferences.",
            icon: travelPackage,
          },
          {
            id: 2,
            title: "24/7 Customer Support",
            description: "We’re here to assist you anytime, anywhere.",
            icon: customeSupport,
          },
          {
            id: 3,
            title: "Hassle-Free Booking",
            description: "Easy and secure booking process.",
            icon: easyBooking,
          },
          {
            id: 4,
            title: "Travel Insurance Included",
            description: "Comprehensive coverage for peace of mind.",
            icon: travelInsurance,
          },
        ]}
        centerImage={{
          src: trustUsImg,
          alt: "Traveler exploring destination",
        }}
      />
      <Testimonials
        items={[
          {
            id: 1,
            rating: 5,
            message:
              "Unforgettable trip! Excellent service and amazing destinations!",
            name: "Sophia L",
            role: "Adventure Enthusiast, London",
            avatar: bannerImg,
          },
          {
            id: 2,
            rating: 5,
            message:
              "Fantastic service, seamless travel, unforgettable family adventure!",
            name: "Anna P",
            role: "Family Traveler, Australia",
            avatar: bannerImg,
          },
          {
            id: 3,
            rating: 5,
            message:
              "Unforgettable trip! Excellent service and amazing destinations!",
            name: "Sophia L",
            role: "Adventure Enthusiast, London",
            avatar: bannerImg,
          },
          {
            id: 4,
            rating: 5,
            message:
              "Fantastic service, seamless travel, unforgettable family adventure!",
            name: "Anna P",
            role: "Family Traveler, Australia",
            avatar: bannerImg,
          },
        ]}
      />
      <Footer />
    </>
  );
}
