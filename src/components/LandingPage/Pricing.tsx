import PricingCard from "./PricingCard";
import { PRICING } from "@/constants/pricing";
 
export default function Pricing() {
  return (
    <section id="pricing" className="flex flex-col items-center justify-center my-32">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Very Simple Pricing</h1>
      <p className="text-lg mb-10">Pay once and never worry about it again.</p>
      
      <div className="flex flex-col items-center justify-center lg:grid grid-cols-1 lg:grid-cols-3 w-full max-w-6xl gap-5">
        {PRICING.map((pricing, index) => (
          <PricingCard 
            key={index}
            title={pricing.title} 
            price={pricing.price} 
            features={pricing.features} 
            recommended={index === 1}
          />
        ))}
      </div>
    </section>
  );
}