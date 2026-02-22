// app/packages/[destination]/details/[packageId]/page.tsx
import Header from "@/components/layout/Header";
import Footer from "@/components/shared/Footer";
import { destinations } from "@/data/destinations";
import { notFound } from "next/navigation";

import styles from "./package-details.module.css";

import PackageGallery from "@/components/details/PackageGallery";
import PackageHero from "@/components/details/PackageHero";
import PackageOverview from "@/components/details/PackageOverview";
import ShortItinerary from "@/components/details//ShortItinerary";
import HotelsSection from "@/components/details//HotelsSection";
import PackageSidebar from "@/components/details//PackageSidebar";

import { destinationImages } from "@/assets/images";

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
  const destination = destinations.find((d) => d.slug === destinationSlug);

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
  const packagePublicIds = imageBaseNames.map(
    (baseName) => `${destSlug}/${baseName}`,
  );

  return (
    <>
      <Header navItems={[]} supportClassName="isRelative__header" />
      <div className="container">
        <PackageHero
          title={pkg.title}
          destination={destination.title}
          duration={pkg.duration}
          showPopular={false}
        />
      </div>
      <PackageGallery publicIds={packagePublicIds} alt={destination.title} />

      <section className={`container section_white__spacing`}>
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
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
