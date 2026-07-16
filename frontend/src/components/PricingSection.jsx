import { Check, Star } from "lucide-react";

function PricingSection() {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      description: "Perfect for students and beginners.",
      features: [
        "1 Repository",
        "Basic AI Chat",
        "Repository Upload",
        "Documentation",
      ],
      button: "Get Started",
      featured: false,
    },
    {
      name: "Pro",
      price: "₹499",
      description: "Best for developers and professionals.",
      features: [
        "Unlimited Repositories",
        "Advanced AI Chat",
        "Architecture Analysis",
        "Security Report",
        "Priority Processing",
      ],
      button: "Start Free Trial",
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For teams and organizations.",
      features: [
        "Private Deployment",
        "Team Management",
        "API Access",
        "Dedicated Support",
      ],
      button: "Contact Sales",
      featured: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="bg-[#030712] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        <div className="text-center">

          <h2 className="text-5xl font-bold text-white">
            Pricing
          </h2>

          <p className="mt-4 text-gray-400">
            Choose the plan that fits your development workflow.
          </p>

        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {plans.map((plan) => (

            <div
              key={plan.name}
              className={`rounded-3xl border p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500 ${
                plan.featured
                  ? "border-blue-500 bg-[#111827]"
                  : "border-gray-800 bg-[#111827]"
              }`}
            >

              {plan.featured && (

                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white">

                  <Star size={16} />

                  Most Popular

                </div>

              )}

              <h3 className="text-3xl font-bold text-white">
                {plan.name}
              </h3>

              <div className="mt-6">

                <span className="text-5xl font-bold text-white">
                  {plan.price}
                </span>

                {plan.price !== "Custom" && (

                  <span className="text-gray-400">
                    /month
                  </span>

                )}

              </div>

              <p className="mt-5 text-gray-400">
                {plan.description}
              </p>

              <div className="mt-8 space-y-4">

                {plan.features.map((feature) => (

                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >

                    <Check
                      size={18}
                      className="text-green-400"
                    />

                    <span className="text-gray-300">
                      {feature}
                    </span>

                  </div>

                ))}

              </div>

              <button
                className={`mt-10 w-full rounded-xl py-4 font-semibold transition ${
                  plan.featured
                    ? "bg-blue-600 text-white hover:bg-blue-500"
                    : "border border-gray-700 text-white hover:border-blue-500"
                }`}
              >
                {plan.button}
              </button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default PricingSection;