import React from "react";

const FeaturedArt = () => {
  // Sample data for featured art pieces
  const featuredArt = [
    {
      type: "Sculpture",
      title: "Art of Elegance",
      description: "A beautiful sculpture created by a local artist.",
      image: "https://images.unsplash.com/photo-1532479255663-1ded0438a701?auto=format&fit=crop&q=80&w=2018&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      type: "Painting",
      title: "Vivid Strokes",
      description:
        "A stunning painting that captures the essence of local culture.",
      image: "https://images.unsplash.com/photo-1517187654069-ba29110a1d9e?auto=format&fit=crop&q=80&w=2073&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      type: "Collectible",
      title: "Cultural Treasures",
      tagline: "Discover the essence of our heritage",
      image:      "https://images.unsplash.com/photo-1698177077434-7a94a56afcb2?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    // Add more featured art pieces as needed
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-[90%] mx-auto">
      {featuredArt.map((art, index) => (
        <div key={index} className="bg-white p-4 rounded shadow">
          {art.image ? (
            <img
              src={art.image}
              alt={art.title}
              className="w-full h-48 object-cover mb-4"
            />
          ) : (
            <div className="w-full h-48 bg-gray-300 mb-4 flex items-center justify-center">
              <h3 className="text-2xl font-semibold">{art.type}</h3>
            </div>
          )}
          <h3 className="text-xl font-semibold">{art.title}</h3>
          {art.description && (
            <p className="text-gray-600">{art.description}</p>
          )}
          {art.tagline && <p className="text-green-500">{art.tagline}</p>}
        </div>
      ))}
    </div>
  );
};


export default FeaturedArt;
