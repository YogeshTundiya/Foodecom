import React from "react";
import "./SellerActivity.css";

function SellerActivity() {
  // Mock data for demonstration
  const activities = [
    {
      id: 1,
      sellerId: "S001",
      activity: "Listed new product: Super Widget",
      timestamp: "2024-07-28 10:00 AM",
    },
    {
      id: 2,
      sellerId: "S002",
      activity: "Updated subscription to Premium",
      timestamp: "2024-07-28 09:30 AM",
    },
    {
      id: 3,
      sellerId: "S001",
      activity: "Processed order #12345",
      timestamp: "2024-07-27 05:00 PM",
    },
  ];

  return (
    <div className="seller-activity-page">
      <h1>Seller Activity</h1>
      <p>This page displays recent activities of sellers.</p>
      <table>
        <thead>
          <tr>
            <th>Activity ID</th>
            <th>Seller ID</th>
            <th>Activity Description</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity) => (
            <tr key={activity.id}>
              <td>{activity.id}</td>
              <td>{activity.sellerId}</td>
              <td>{activity.activity}</td>
              <td>{activity.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SellerActivity;
