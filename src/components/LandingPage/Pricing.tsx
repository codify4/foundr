import PricingCard from "./PricingCard";
import { PRICING } from "@/constants/pricing";
 
export default function Pricing() {
  return (
    <section id="pricing" className="flex flex-col items-center justify-center my-32">
      <h1 className="text-5xl font-bold mb-4">Very Simple Pricing</h1>
      <p className="text-lg mb-10">Pay once and never worry about it again.</p>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {PRICING.map((pricing) => (
          <PricingCard key={pricing.title} title={pricing.title} price={pricing.price} features={pricing.features} />
        ))}
      </div>
    </section>
  );
}