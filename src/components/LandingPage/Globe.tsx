import Globe from "@/components/magicui/globe";
import { cn } from "@/lib/utils";

export function GlobeDemo({ className }: { className?: string }) {
  return (
    <div className="h-full bg-white rounded-lg border border-neutral-200 p-6 shadow-xl">
      <Globe className={cn(className, "absolute top-20")} />
    </div>
  );
}
