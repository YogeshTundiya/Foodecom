import React from "react";
import "./Subscriptions.css";

function Subscriptions() {
  // Mock data for subscription plans
  const plans = [
    {
      id: "basic",
      name: "Basic Seller",
      price: "$10/month",
      perks: ["List up to 50 products", "Basic analytics", "Email support"],
    },
    {
      id: "premium",
      name: "Premium Seller",
      price: "$30/month",
      perks: [
        "List unlimited products",
        "Advanced analytics",
        "Priority email support",
        "Featured listings (limited)",
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise Seller",
      price: "$100/month",
      perks: [
        "All Premium features",
        "Dedicated account manager",
        "Customizable storefront",
        "API access",
      ],
    },
  ];

  return (
    <div className="subscriptions-page">
      <h1>Subscription Plans & Pricing</h1>
      <p>Manage seller subscription tiers and their associated perks.</p>
      <div className="plans-container">
        {plans.map((plan) => (
          <div key={plan.id} className={`plan-card plan-${plan.id}`}>
            <h2>{plan.name}</h2>
            <p className="price">{plan.price}</p>
            <h3>Perks:</h3>
            <ul>
              {plan.perks.map((perk, index) => (
                <li key={index}>{perk}</li>
              ))}
            </ul>
            <button>Edit Plan</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Subscriptions;
