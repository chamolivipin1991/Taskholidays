// app/packages/[destination]/details/[packageId]/page.tsx
import Header from "@/components/layout/Header";
import Footer from "@/components/shared/Footer";
import { packagesdata } from "@/data/packages-data";
import { notFound } from "next/navigation";

import styles from "./package-details.module.css";

import PackageGallery from "@/components/details/PackageGallery";
import PackageHero from "@/components/details/PackageHero";
import PackageOverview from "@/components/details/PackageOverview";
import ShortItinerary from "@/components/details//ShortItinerary";
import HotelsSection from "@/components/details//HotelsSection";
import PackageSidebar from "@/components/details//PackageSidebar";

import { destinationImages } from "@/assets/images";
import CruiseIncluded from "@/components/details/CruiseIncluded";
import DetailedItinerary from "@/components/details/DetailedItinerary";
import SlidingModalPanel from "@/components/shared/SlidingModalPanel";
import TermsConditionsData from "@/components/tnc/TermsConditionsData";
import FloatingWhatsAppButton from "@/components/shared/FloatingWhatsAppButton";

interface PackageDetailsPageProps {
  params: Promise<{
    destination: string;
    packageId: string;
  }>;
}

export default async function PackageDetailsPage({
  params,
}: PackageDetailsPageProps) {
  const { destination: destinationSlug, packageId } = await params;

  // Find the destination
  const destination = packagesdata.find((d) => d.slug === destinationSlug);

  if (!destination) {
    notFound();
  }

  // Find the package by packageId
  const pkg = destination.packages?.find((p) => p.packageId === packageId);

  if (!pkg) {
    notFound();
  }

  // Helper to generate includes from package data
  const generateIncludes = () => {
    const includes: string[] = [];

    if (pkg.hotels && pkg.hotels.length > 0) {
      includes.push("Accommodation");
    }

    if (
      pkg.shortItinerary &&
      pkg.shortItinerary.some((day) => day.breakfastNextDay)
    ) {
      includes.push("Breakfast");
    }

    if (pkg.cruise && pkg.cruise.length > 0) {
      includes.push("Cruise Tickets");
    }

    if (pkg.detailedItinerary && pkg.detailedItinerary.length > 0) {
      includes.push("Sightseeing");
    }

    includes.push("Transport");
    return includes;
  };

  const packageIncludes = generateIncludes();

  // Generate a list of public IDs for the destination
  const destSlug = destination.slug;
  const imageBaseNames = destinationImages[destSlug] || [];
  const packageImagePaths = imageBaseNames.map(
    (baseName) => `destinations/${destSlug}/${baseName}`,
  );

  return (
    <>
      <Header navItems={[]} isRelative={true} />
      <div className="container">
        <PackageHero
          title={pkg.title}
          destination={destination.title}
          duration={pkg.duration}
          showPopular={pkg.popular}
        />
      </div>
      <PackageGallery imagePaths={packageImagePaths} alt={destination.title} />

      <section className={`container`}>
        <div className={styles.package_layout}>
          <div className={styles.package_layout__grid}>
            <div>
              <PackageOverview description={destination.description} />
              <ShortItinerary days={pkg.shortItinerary || []} />
              <HotelsSection hotels={pkg.hotels || []} />
            </div>

            <PackageSidebar
              includes={packageIncludes}
              seasons={destination.bestSeason}
              tags={destination.tags}
            />
            {pkg?.cruise?.length ? (
              <CruiseIncluded cruise={pkg.cruise || []} />
            ) : null}

            <DetailedItinerary detailedItinerary={pkg.detailedItinerary} />
          </div>
        </div>
      </section>
      <Footer />
      <SlidingModalPanel
        buttonAriaLabel="Terms and Conditions"
        panelTitle="Terms and Conditions"
        scrollThreshold={40}
      >
        <TermsConditionsData />
      </SlidingModalPanel>
      <FloatingWhatsAppButton />
    </>
  );
}
