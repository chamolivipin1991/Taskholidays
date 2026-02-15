// app/packages/[destination]/details/[packageId]/page.tsx
import Header from "@/components/layout/Header";
import Footer from "@/components/shared/Footer";
import { destinations } from "@/data/destinations";
import { notFound } from "next/navigation";

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

  return (
    <>
      <Header navItems={[]} />
      <div className="container mx-auto px-4 py-8">
        <section className="max-w-6xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {pkg.title}
            </h1>
            <div className="flex flex-wrap gap-4 mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {destination.title}
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                {pkg.duration}
              </span>
              {Math.random() > 0.5 && (
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                  Popular
                </span>
              )}
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Package Overview
                </h2>
                <p className="text-gray-600 mb-6">{destination.description}</p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Short Itinerary
                  </h3>
                  <div className="space-y-4">
                    {pkg.shortItinerary?.map((day) => (
                      <div
                        key={day.day}
                        className="border-l-4 border-blue-500 pl-4 py-2"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-gray-800">
                              Day {day.day}: {day.title}
                            </h4>
                            <p className="text-gray-600 text-sm mt-1">
                              {day.location}
                            </p>
                            {day.stay && (
                              <p className="text-gray-500 text-sm mt-1">
                                Stay: {day.stay}
                              </p>
                            )}
                          </div>
                          {day.breakfastNextDay && (
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                              Breakfast Included
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Detailed Itinerary */}
                {pkg.detailedItinerary && pkg.detailedItinerary.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Detailed Itinerary
                    </h3>
                    <div className="space-y-6">
                      {pkg.detailedItinerary.map((day, index) => (
                        <div key={index} className="border rounded-lg p-5">
                          <h4 className="text-lg font-semibold text-gray-800 mb-3">
                            Day {day.day}: {day.title}
                          </h4>
                          <p className="text-gray-600 mb-2">
                            <span className="font-medium">Location:</span>{" "}
                            {day.location}
                          </p>
                          {day.stay && (
                            <p className="text-gray-600 mb-2">
                              <span className="font-medium">Stay:</span>{" "}
                              {day.stay}
                            </p>
                          )}

                          {day.itineraryPoints &&
                            day.itineraryPoints.length > 0 && (
                              <div className="mb-4">
                                <h5 className="font-medium text-gray-700 mb-2">
                                  Itinerary Points:
                                </h5>
                                <ul className="list-disc pl-5 space-y-1">
                                  {day.itineraryPoints.map((point, idx) => (
                                    <li key={idx} className="text-gray-600">
                                      {point}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                          {day.sightseeingItems &&
                            day.sightseeingItems.length > 0 && (
                              <div className="mb-4">
                                <h5 className="font-medium text-gray-700 mb-2">
                                  Sightseeing:
                                </h5>
                                <ul className="space-y-2">
                                  {day.sightseeingItems.map((item, idx) => (
                                    <li key={idx} className="text-gray-600">
                                      <span className="font-medium">
                                        {item.name}:
                                      </span>{" "}
                                      {item.detail}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                          {day.instruction && (
                            <div className="bg-blue-50 p-3 rounded">
                              <p className="text-blue-700 text-sm">
                                <span className="font-medium">
                                  Instruction:
                                </span>{" "}
                                {day.instruction}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Hotels
                  </h3>
                  <div className="space-y-4">
                    {pkg.hotels?.map((hotel, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-gray-800">
                              {hotel.hotelName}
                            </h4>
                            <p className="text-gray-600 text-sm">
                              {hotel.location}
                            </p>
                            <p className="text-gray-500 text-sm">
                              {hotel.duration} • {hotel.category}
                            </p>
                          </div>
                          <div className="text-yellow-500">
                            {"★".repeat(hotel.star)}
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="flex flex-wrap gap-2">
                            {hotel.facilities?.map((facility, i) => (
                              <span
                                key={i}
                                className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                              >
                                {facility}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="mt-3 text-sm text-gray-600">
                          <p>
                            Check-in: {hotel.checkInTime} • Check-out:{" "}
                            {hotel.checkoutTime}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cruise Information */}
                {pkg.cruise && pkg.cruise.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Cruise Details
                    </h3>
                    <div className="space-y-3">
                      {pkg.cruise.map((cruise, index) => (
                        <div key={index} className="bg-blue-50 p-4 rounded-lg">
                          <p className="font-medium text-gray-800">
                            Day {cruise.day}: {cruise.location}
                          </p>
                          <p className="text-gray-600">
                            {cruise.name} ({cruise.category})
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Trip Exclusions */}
                {pkg.tripExclusions && pkg.tripExclusions.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Trip Exclusions
                    </h3>
                    <ul className="list-disc pl-5 space-y-2">
                      {pkg.tripExclusions.map((exclusion, index) => (
                        <li key={index} className="text-gray-600">
                          {exclusion}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Package Includes
                    </h3>
                    <ul className="space-y-2">
                      {packageIncludes.map((item, index) => (
                        <li key={index} className="flex items-center">
                          <svg
                            className="w-5 h-5 text-green-500 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-6">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 mb-4">
                      Book Now
                    </button>

                    <button className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-4 rounded-lg transition duration-200">
                      Send Enquiry
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Best Season to Visit
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {destination.bestSeason?.map((season, index) => (
                      <span
                        key={index}
                        className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm"
                      >
                        {season}
                      </span>
                    ))}
                  </div>

                  {destination.tags && destination.tags.length > 0 && (
                    <div className="mt-6">
                      <h4 className="text-md font-medium text-gray-800 mb-3">
                        Tags
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {destination.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
