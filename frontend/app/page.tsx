import Header from "@/components/layout/Header";
import Banner from "@/components/home/Banner";
import FeaturedDestinations from "@/components/home/FeaturedDestinations";
import PackagesSection from "@/components/home/PackagesSection";
import TrustSection from "@/components/home/TrustSection";
import Footer from "@/components/shared/Footer";
import FloatingWhatsAppButton from "@/components/shared/FloatingWhatsAppButton";

import { CalendarIcon } from "@/assets/icons/icons";
import Testimonials from "@/components/shared/Testimonials";
import bannerImg from "@/assets/images/home_banner.jpg";

import RequestCallbackModal from "./components/form/RequestCallbackModal";

export default function Home() {
  return (
    <>
      <RequestCallbackModal />
      <Header
        navItems={[
          { text: "Destinations", id: "featuredDestinations" },
          { text: "Packages", id: "packagesSection" },
          { text: "About Us", href: "/about" },
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
      <Testimonials />
      <TrustSection />

      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}
