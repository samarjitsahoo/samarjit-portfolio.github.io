import React, { useEffect } from "react";
import "./Preloader.scss";

const Preloader = () => {
  useEffect(() => {
    const preloader = document.getElementById("preloader");
    const handleLoad = () => {
      if (preloader) {
        preloader.style.opacity = "0";
        setTimeout(() => {
          preloader.remove();
        }, 600);
      }
    };
    const timeoutId = setTimeout(() => {
      if (preloader) {
        preloader.style.opacity = "0";
        setTimeout(() => {
          preloader.remove();
        }, 600);
      }
    }, 100);
    window.addEventListener("DOMContentLoaded", handleLoad);
    window.addEventListener("load", handleLoad);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("DOMContentLoaded", handleLoad);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return <div id="preloader"></div>;
};

export default Preloader;
