"use client";

import React, { useState, useEffect } from "react";
const styles = {
  h2: {
    fontSize: "1.5rem",
    fontWeight: 700,
    backgroundImage: "linear-gradient(45deg, #D28500, #FF4FFA)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    marginBottom: "1rem",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    fontFamily: "Your Handwriting Font, cursive", // Replace with your font name
  },
};
const WelcomeSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem("hasSeenWelcome");
    if (!hasSeenWelcome) {
      setIsOpen(true);
      localStorage.setItem("hasSeenWelcome", "true");
    }
    const handleBeforeUnload = () => {
      localStorage.removeItem("hasSeenWelcome");
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white p-8 rounded-lg shadow-lg">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={handleClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {/* Add your welcome content, images, and other elements */}
        <h2 style={styles.h2}>Welcome to Travelers</h2>
        <p className="text-gray-600">
          Discover amazing features and services that we offer. Join us today!
        </p>
        {/* Add images, links, and other content here */}
        <img
          src="/welcome.jpg"
          alt="Welcome Image"
          className="rounded-lg mt-4"
        />
      </div>
    </div>
  );
};

export default WelcomeSection;
