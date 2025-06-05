import React from "react";
import { NavLink } from "react-router-dom";
import {
  MdDashboard,
  MdPeople,
  MdAttachMoney,
  MdAnalytics,
} from "react-icons/md";
import ThemeToggleButton from "../../../Components/ThemeToggleButton/ThemeToggleButton";

const Sidebar = () => {
  const navLinks = [
    { name: "Dashboard", path: "/admin/dashboard", icon: <MdDashboard /> },
    { name: "Sellers", path: "/admin/sellers", icon: <MdPeople /> },
    { name: "Pricing", path: "/admin/pricing", icon: <MdAttachMoney /> },
    { name: "Analytics", path: "/admin/analytics", icon: <MdAnalytics /> },
  ];

  return (
    <div
      className="admin-sidebar"
      style={{
        backgroundColor: "var(--navbar-bg)",
        color: "var(--text-color)",
      }}
    >
      <nav>
        <ul>
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                {link.icon} {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div
        style={{ padding: "20px", borderTop: "1px solid var(--border-color)" }}
      >
        <ThemeToggleButton />
      </div>
    </div>
  );
};

export default Sidebar;
