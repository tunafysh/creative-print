import * as React from "react";

interface DotBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export function DotBackgroundDemo(props: DotBackgroundProps) {
  return (
    <div className="h-[50rem] w-full bg-  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {props.children}
    </div>
  );
}
