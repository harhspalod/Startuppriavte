const defaultPlanId = "free";
const pricingPlans = [
  {
    id: "free",
    name: "Free",
    description: "Discuss your startup needs with us and explore the right plan.",
    price: "₹0",
    priceIntervalName: "Free",
    stripe_price_id: null,
    features: [
      "Strategy Discussion Call",
      "Understanding Your Startup Needs",
      "Custom Plan Recommendation"
    ]
  },
  {
    id: "pro",
    name: "Growth Plan",
    description: "Essential startup solutions for branding, marketing & lead generation.",
    price: "₹20,000",
    priceIntervalName: "Monthly",
    features: [
      "On-Page SEO & Optimization",
      "Social Media Strategy & Planning",
      "Lead Generation Templates",
      "Branding Essentials",
      "Customer Support"
    ]
  },
  {
    id: "enterprise",
    name: "Scale Plan",
    description: "Comprehensive growth execution with full marketing & sales support.",
    price: "₹50,000",
    priceIntervalName: "Monthly",
    features: [
      "All in  Growth plan",
      "Complete SEO",
      "Full Social Media Management",
      "Paid Advertising & Lead Generation",
      "AI Chatbot & Automation Setup",
      "Offline  & College Marketing "
    ]
  }
];
export {
  defaultPlanId as d,
  pricingPlans as p
};
