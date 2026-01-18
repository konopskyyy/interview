import Hero from "../../component/Main/Hero";
import Features from "../../component/Main/Features";
import Contact from "../../component/Main/Contact";
import Demo from "../../component/Main/Demo";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function MainPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // Small delay to ensuring rendering
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Features />
      <Demo />
      <Contact />
    </>
  );
}
