import { CheckIcon, ChevronRightIcon } from "lucide-react";

import { AnimatedSubscribeButton } from "@/components/magicui/animated-subscribe-button";

export default function AnimatedButton({text}: {text: string}) {
  return (
    <AnimatedSubscribeButton
      buttonColor="#050C9C"
      buttonTextColor="#ffffff"
      subscribeStatus={false}
      initialText={
        <span className="group inline-flex items-center">
          {text}{" "}
          <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      }
      changeText={
        <span className="group inline-flex items-center justify-center border-primary">
          <CheckIcon className="mr-2 h-4 w-4" />
          Let's goo!
        </span>
      }
    />
  );
}
