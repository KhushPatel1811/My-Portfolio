import { useEffect, useState } from "react";

export const useScrollSpy = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // logic here
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return active;
}