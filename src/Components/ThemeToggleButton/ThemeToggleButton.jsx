import React from "react";
import { useTheme } from "../../Context/ThemeContext";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: "transparent",
        border: "none",
        cursor: "pointer",
        fontSize: "1.5rem",
        color: "var(--text-color)", // Use CSS variable for color
        display: "flex",
        alignItems: "center",
        padding: "5px",
      }}
      aria-label={
        theme === "light" ? "Switch to dark mode" : "Switch to light mode"
      }
    >
      {theme === "light" ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
    </button>
  );
};

export default ThemeToggleButton;
