// app/packages/[destination]/page.tsx
import { packagesdata } from "@/data/packages-data";
import { adaptDestinationsToPackages } from "@/utils/adapters/packageAdapter";
import { UIPackage } from "@/types/package";

import Footer from "@/components/shared/Footer";
import Header from "@/components/layout/Header";
import ListingBanner from "@/components/listing/ListingBanner";
import PackageList from "@/components/listing/PackageList";
import FloatingWhatsAppButton from "@/components/shared/FloatingWhatsAppButton";

interface PackageListPageProps {
  params: Promise<{
    destination: string;
  }>;
}

export default async function PackageListPage({
  params,
}: PackageListPageProps) {
  // Await the params promise
  const { destination } = await params;

  // URL decode if needed (handles spaces and special characters)
  const decodedDestination = decodeURIComponent(destination);

  // Find destination data - use lowercase for case-insensitive matching
  const dest = packagesdata.find(
    (d) => d.slug.toLowerCase() === decodedDestination.toLowerCase(),
  );

  if (!dest) {
    return (
      <div style={{ padding: "80px", textAlign: "center" }}>
        <h1>Destination not found</h1>
        <p>The destination "{decodedDestination}" does not exist.</p>
        <p>
          Available destinations: {packagesdata.map((d) => d.slug).join(", ")}
        </p>
      </div>
    );
  }

  // Convert to packages - pass only the specific destination
  const packages: UIPackage[] = adaptDestinationsToPackages([dest]);

  return (
    <>
      <Header navItems={[]} />
      <ListingBanner dest={dest} />
      <section className={`container section_white__spacing`}>
        {/* Destination Info */}
        <div style={{ marginBottom: "40px" }}>
          <p>
            <strong>Description:</strong> {dest.description}
          </p>
          {dest.bestSeason && (
            <p>
              <strong>Best Season:</strong> {dest.bestSeason.join(", ")}
            </p>
          )}
          {dest.tags && (
            <p>
              <strong>Tags:</strong> {dest.tags.join(", ")}
            </p>
          )}
        </div>
        <PackageList packages={packages} destinationTitle={dest.title} />
      </section>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}

// Optional: Generate static params for SSG
export async function generateStaticParams() {
  return packagesdata.map((destination) => ({
    destination: destination.slug,
  }));
}

// Optional: Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ destination: string }>;
}) {
  const { destination } = await params;
  const decodedDestination = decodeURIComponent(destination);
  const dest = packagesdata.find(
    (d) => d.slug.toLowerCase() === decodedDestination.toLowerCase(),
  );

  if (!dest) {
    return {
      title: "Destination Not Found",
    };
  }

  return {
    title: `${dest.title} Travel Packages | Your Company`,
    description: dest.description,
  };
}
