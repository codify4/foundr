import Features from "@/components/LandingPage/Features";
import Footer from "@/components/LandingPage/Footer";
import Hero from "@/components/LandingPage/Hero";
import Pricing from "@/components/LandingPage/Pricing";
import TopNav from "@/components/LandingPage/TopNav";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <TopNav features="features" pricing="pricing" />
      <main className="flex flex-col items-center justify-center w-full">
        <Hero />
        <div className="my-5 w-8/12">
          <Features />
        </div>
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
