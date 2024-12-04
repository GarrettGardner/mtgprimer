import { useState, useEffect } from "react";

export const useLocalToggle = (key: string, bodyClass: string) => {
  const [toggle, setToggle] = useState(false);

  const toggleToggle = () => {
    if (localStorage.getItem(key)) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, "true");
    }
    window.dispatchEvent(new Event("storage"));
  };

  useEffect(() => {
    const updateStorage = () => {
      const isInStorage = !!localStorage.getItem(key);
      setToggle(isInStorage);
      if (isInStorage) {
        document.body.classList.add(bodyClass);
      } else {
        document.body.classList.remove(bodyClass);
      }
    };

    updateStorage();
    window.addEventListener("storage", updateStorage);

    return () => window.removeEventListener("storage", updateStorage);
  }, []);

  return [toggle, toggleToggle] as const;
};
