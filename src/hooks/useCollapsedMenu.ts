import { useState, useEffect } from "react";

export const useCollapsedMenu = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    if (localStorage.getItem("MENU_COLLAPSED")) setCollapsed(true);
  }, []);

  useEffect(() => {
    if (collapsed) {
      localStorage.setItem("MENU_COLLAPSED", "true");
      document.body.classList.add("menuCollapsed");
    } else {
      localStorage.removeItem("MENU_COLLAPSED");
      document.body.classList.remove("menuCollapsed");
    }
  }, [collapsed]);

  return { collapsed, toggleCollapse };
};
