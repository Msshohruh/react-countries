import "./Navbar.css";

import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "../hooks/useTheme";

export default function Navbar() {
  const { mode, changeMode } = useTheme();

  const handleClick = () => {
    const newMode = mode === "light" ? "dark" : "light";
    changeMode(newMode);
  };
  return (
    <header className="site-header">
      <div className="container header-container">
        <div className="logo">
          <a href="/" className="logo-text">
            Where in the world?
          </a>
        </div>
        <div
          className="mode-toggle"
          onClick={() => {
            handleClick();
          }}
        >
          {mode === "dark" ? (
            <MdLightMode className="mode-icon" />
          ) : (
            <MdDarkMode className="mode-icon" />
          )}

          <span className="mode-text">
            {mode === "light" ? "Dark Mode" : "Light Mode"}
          </span>
        </div>
      </div>
    </header>
  );
}
