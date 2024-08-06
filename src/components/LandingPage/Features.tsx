import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import AnimatedBeamOutput from "./AnimatedBeam";
import { CalendarCheck, ChartLine, CircleDot, Link, LinkIcon, ProjectorIcon } from "lucide-react";
import { AnimatedListDemo } from "./AnimatedList";
import { Calendar } from "../ui/calendar";
import Globe from "../magicui/globe";
import { ChartDemo } from "./DemoChart";

const features = [
  {
    Icon: ProjectorIcon,
    name: "Share your project",
    description: "Give brief info on past projects",
    href: "/",
    background: <AnimatedListDemo className="absolute h-[300px] w-[400px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105"/>,
    className: "col-span-1 row-span-1 h-[350px]"
  },
  {
    Icon: LinkIcon,
    name: "Link your socials",
    description: "Embed your socials link in the page for others to see.",
    href: "/",
    background: <AnimatedBeamOutput className="absolute -right-2 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105"/>,
    className: "col-span-2 row-span-1",
  },
  {
    Icon: CalendarCheck,
    name: "Activity Graphs",
    description: "Connect your GitHub contributions graph or a custom X posts graph.",
    className: "col-span-2 row-span-1",
    href: "#",
    background: (
      <Calendar
        mode="single"
        selected={new Date(2022, 4, 11, 0, 0, 0)}
        className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
      />
    ),
  },
  {
    Icon: ChartLine,
    name: "Analytics",
    description:
      "Get insights about what happens on your page with page views, clicks, and more.", 
    href: "/",
    background: <ChartDemo className="absolute h-[300px] w-[400px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105"/>,
    className: "col-span-1 row-span-1",
  },
];

export default async function Features() {
  return (
    <BentoGrid className="grid-rows-1 lg:grid-rows-3 ">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
