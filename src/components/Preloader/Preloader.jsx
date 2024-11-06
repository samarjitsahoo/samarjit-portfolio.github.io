// Preloader.js
import React, { useEffect } from "react";
import "./Preloader.scss";

const Preloader = () => {
  useEffect(() => {
    const preloader = document.getElementById("preloader");

    // Function to remove preloader
    const handleLoad = () => {
      if (preloader) {
        preloader.style.opacity = "0";
        setTimeout(() => {
          preloader.remove();
        }, 600); // Match this duration with the transition time in SCSS
      }
    };

    // Timeout to hide preloader in case load event fails
    const timeoutId = setTimeout(() => {
      if (preloader) {
        preloader.style.opacity = "0";
        setTimeout(() => {
          preloader.remove();
        }, 600);
      }
    }, 5000); // Adjust timeout as necessary

    // Add both DOMContentLoaded and load events
    window.addEventListener("DOMContentLoaded", handleLoad);
    window.addEventListener("load", handleLoad);

    // Clean up events and timeout
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("DOMContentLoaded", handleLoad);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return <div id="preloader"></div>;
};

export default Preloader;
