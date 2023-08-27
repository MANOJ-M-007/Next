import React from "react";

const styles = {
    h1: {
      fontSize: "1.5rem",
      fontWeight: 700,
      backgroundImage: "linear-gradient(45deg, #D28500, #0054B5)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",
      marginBottom: "1rem",
      textAlign: "center",
      textTransform: "uppercase",
      letterSpacing: "0.1em",
    },
    h2: {
        fontSize: "1.3rem",
        fontWeight: 600,
        backgroundImage: "linear-gradient(45deg, #B26E6E, #4A5A89)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        marginBottom: "1rem",
        textAlign: "center",
        textTransform: "uppercase",
        // letterSpacing: "0.1em",
        fontFamily: "Roboto, sans-serif", // Add the desired font family

      },
      p:{
        fontFamily: "Caveat, cursive", // Use a handwriting-style font
      }
  };
const Cards = () => {
  return (
    <div className="py-8 px-2">
      <h1 style={styles.h1}>Popular Destinations</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-md p-6 rounded-lg hover:bg-blue-100 transition duration-300">
          <h2 style={styles.h2}>France</h2>
          <p style={styles.p}>Romantic, cultural, historic elegance..</p>
          <button className="mt-4 bg-gray-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
            Learn More
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md p-6 rounded-lg hover:bg-blue-100 transition duration-300">
          <h2 style={styles.h2}>Thailand</h2>
          <p style={styles.p}>vibrant,landscapes, tropical beauty..</p>
          <button className="mt-4 bg-gray-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
            Learn More
          </button>
        </div>
        {/* Card 3 */}
        <div className="bg-white shadow-md p-6 rounded-lg hover:bg-blue-100 transition duration-300">
          <h2 style={styles.h2}>Australia</h2>
          <p style={styles.p}>Diverse landscapes, outdoorsy adventures..</p>
          <button className="mt-4 bg-gray-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
            Learn More
          </button>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-md p-6 rounded-lg hover:bg-blue-100 transition duration-300">
          <h2 style={styles.h2}>Greece</h2>
          <p style={styles.p}>Ancient ruins, Mediterranean charm..</p>
          <button className="mt-4 bg-gray-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
            Learn More
          </button>
        </div>

        {/* ... Repeat for other cards ... */}
      </div>
    </div>
  );
};

export default Cards;
