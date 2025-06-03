import React from "react";
import "./Sellers.css";

function Sellers() {
  return (
    <div className="sellers-page">
      <h1>Manage Sellers</h1>
      {/* Placeholder content for sellers management */}
      <p>This page will be used to display and manage seller accounts.</p>
      <table>
        <thead>
          <tr>
            <th>Seller ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Example Row - Replace with dynamic data later */}
          <tr>
            <td>S001</td>
            <td>John Doe</td>
            <td>john.doe@example.com</td>
            <td>Active</td>
            <td>
              <button>View Activity</button>
              <button>Edit</button>
              <button>Suspend</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Sellers;
