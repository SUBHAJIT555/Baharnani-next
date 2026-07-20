import { AnimatedFooter } from "@/components/ui/animated-footer";

export default function FooterAnimatedPrelude() {
  return (
    <div className="w-full overflow-hidden bg-canvas -mt-4">
      <div className="mx-auto max-w-7xl overflow-hidden border-x border-hairline">
        <AnimatedFooter
          headingLines={["Baharnani"]}
          leftImage="/animated-footer/hand-left.jpg"
          rightImage="/animated-footer/hand-right.jpg"
          className="h-[min(42vh,460px)] min-h-70"
        />
      </div>
    </div>
  );
}
