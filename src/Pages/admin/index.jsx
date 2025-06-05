import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./components/AdminLayout";
import DashboardPage from "./pages/DashboardPage";
import SellersPage from "./pages/SellersPage";
import PricingPage from "./pages/PricingPage";
import AnalyticsPage from "./pages/AnalyticsPage";

const AdminPanel = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="sellers" element={<SellersPage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="analytics" element={<AnalyticsPage />} />
        <Route index element={<Navigate to="dashboard" replace />} />
      </Routes>
    </AdminLayout>
  );
};

export default AdminPanel;
