// app/packages/[destination]/[duration]/page.tsx
import { destinations } from "@/data/destinations";
import { adaptDestinationsToPackages } from "@/utils/adapters/packageAdapter";
import { notFound } from "next/navigation";

interface PackageDetailsPageProps {
  params: Promise<{
    destination: string;
    duration: string;
  }>;
}

export default async function PackageDetailsPage({
  params,
}: PackageDetailsPageProps) {
  // Await the params promise
  const { destination: destinationSlug, duration: durationSlug } = await params;

  // Adapt destinations to packages (flat list)
  const allPackages = adaptDestinationsToPackages(destinations);

  // Find the package that matches the slug and durationSlug
  const pkg = allPackages.find(
    (p) =>
      p.destinationSlug === destinationSlug && p.durationSlug === durationSlug,
  );

  if (!pkg) {
    // If no package is found, show 404
    notFound();
  }

  return (
    <section style={{ padding: "80px" }}>
      <h1>{pkg.title}</h1>
      <p>
        <strong>Destination:</strong> {pkg.location}
      </p>
      <p>
        <strong>Duration:</strong> {pkg.duration}
      </p>
      <p>
        <strong>Description:</strong> {pkg.description}
      </p>

      <div style={{ marginTop: "20px" }}>
        <strong>Includes:</strong>
        <ul>
          {pkg.includes.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <p>
        <strong>Price:</strong>{" "}
        {pkg.price
          ? new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "INR",
              maximumFractionDigits: 0,
            }).format(pkg.price)
          : "On Request"}
      </p>

      {pkg.popular && <p style={{ color: "red" }}>Popular Package!</p>}
    </section>
  );
}
