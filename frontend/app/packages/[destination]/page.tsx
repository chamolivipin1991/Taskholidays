// app/packages/[destination]/page.tsx
import { destinations } from "@/data/destinations";
import { adaptDestinationsToPackages } from "@/utils/adapters/packageAdapter";
import { UIPackage } from "@/types/package";
import SectionTitle from "@/components/shared/SectionTitle";

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
  const dest = destinations.find(
    (d) => d.slug.toLowerCase() === decodedDestination.toLowerCase(),
  );

  if (!dest) {
    return (
      <div style={{ padding: "80px", textAlign: "center" }}>
        <h1>Destination not found</h1>
        <p>The destination "{decodedDestination}" does not exist.</p>
        <p>
          Available destinations: {destinations.map((d) => d.slug).join(", ")}
        </p>
      </div>
    );
  }

  // Convert to packages - pass only the specific destination
  const packages: UIPackage[] = adaptDestinationsToPackages([dest]);

  return (
    <section style={{ padding: "80px" }}>
      <SectionTitle
        heading={`${dest.title} Packages`}
        subheading={`Handpicked travel experiences for ${dest.title}`}
        backgroundText="Packages"
      />

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

      {/* Packages List */}
      <div style={{ display: "grid", gap: "20px" }}>
        {packages.length > 0 ? (
          packages.map((pkg) => (
            <div
              key={pkg.id}
              style={{
                border: "1px solid #ddd",
                padding: "20px",
                borderRadius: "8px",
                backgroundColor: pkg.popular ? "#f9f9ff" : "white",
              }}
            >
              <h2>{pkg.title}</h2>
              <p>{pkg.description}</p>
              <p>
                <strong>Duration:</strong> {pkg.duration}
              </p>
              <p>
                <strong>Location:</strong> {pkg.location}
              </p>
              <p>
                <strong>Price:</strong>{" "}
                {pkg.price ? `₹${pkg.price.toLocaleString()}` : "On Request"}
              </p>

              {pkg.includes && pkg.includes.length > 0 && (
                <div>
                  <strong>Includes:</strong>
                  <ul>
                    {pkg.includes.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {pkg.popular && (
                <span
                  style={{
                    display: "inline-block",
                    backgroundColor: "#ffd700",
                    color: "#333",
                    padding: "4px 8px",
                    borderRadius: "4px",
                    fontSize: "12px",
                    fontWeight: "bold",
                    marginTop: "10px",
                  }}
                >
                  POPULAR
                </span>
              )}
            </div>
          ))
        ) : (
          <div style={{ textAlign: "center", padding: "40px" }}>
            <h3>No packages available for {dest.title}</h3>
            <p>Check back soon or contact us for custom packages.</p>
          </div>
        )}
      </div>
    </section>
  );
}

// Optional: Generate static params for SSG
export async function generateStaticParams() {
  return destinations.map((destination) => ({
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
  const dest = destinations.find(
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
