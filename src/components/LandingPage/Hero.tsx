"use client";

import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";
import BlurFade from "../magicui/blur-fade";
import AnimatedButton from "./AnimatedButton";

export default function Hero() {
  return (
    <div className="relative flex h-[800px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
      <BlurFade duration={0.5}>
        <h1 className="flex flex-col items-center justify-center gap-2 w-full z-50 whitespace-pre-wrap text-center text-5xl lg:text-8xl tracking-tighter text-black dark:text-white font-extrabold">
          <span className="flex flex-col lg:flex-row items-center justify-center gap-1 lg:gap-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Share
              </span> 
              <span>
                  your journey and
              </span> 
          </span>
          <span className="flex flex-col lg:flex-row items-center justify-center gap-1 lg:gap-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Connect
              </span> 
              <span>
                  with other founders!
              </span> 
          </span> 
        </h1>
      </BlurFade>
      <BlurFade duration={0.75} className="z-10 mt-5">
        <AnimatedButton text="Get Started" />
      </BlurFade>
      
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:radial-gradient(2000px_circle_at_center,white,transparent)]",
        )}
      />
    </div>
  );
}