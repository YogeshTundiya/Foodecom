import React from "react";
import Sidebar from "./Sidebar";
import "../admin.css"; // Import the admin-specific CSS
// import AdminHeader from './AdminHeader'; // Optional: if you have a specific admin header

const AdminLayout = ({ children }) => {
  return (
    <div
      className="admin-panel-container"
      style={{
        backgroundColor: "var(--background-color)",
        color: "var(--text-color)",
      }}
    >
      <Sidebar />
      <main className="admin-main-content">
        {/* <AdminHeader /> */}
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
