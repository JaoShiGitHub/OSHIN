"use client";

import { useEffect, useRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function FadeInWrapper({ children }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scrolled");
          } else {
            entry.target.classList.remove("scrolled"); // replay effect
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="content-scroll content-fade-in w-auto h-auto">
      {children}
    </div>
  );
}

export default FadeInWrapper;
