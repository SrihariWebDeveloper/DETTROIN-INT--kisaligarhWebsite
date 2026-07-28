import React, { useState, useEffect, useRef } from "react";

export const CountUp = ({ value, duration = 2000, className = "" }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  // Parse numeric component and suffix from values like "6,000+", "60+", "100%"
  const match = typeof value === "string" ? value.match(/^([0-9,.]+)(.*)$/) : null;
  
  const targetNum = match ? parseFloat(match[1].replace(/,/g, "")) : null;
  const suffix = match ? match[2] : "";
  const hasComma = match ? match[1].includes(",") : false;

  useEffect(() => {
    if (targetNum === null || isNaN(targetNum)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime = null;

          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            
            // Cubic ease-out curve for natural counter slowdown
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(easeProgress * targetNum);
            
            setCount(currentVal);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(targetNum);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.15 }
    );

    const currentElem = elementRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, [targetNum, duration, hasAnimated]);

  if (targetNum === null || isNaN(targetNum)) {
    return <span className={className}>{value}</span>;
  }

  const formattedValue = hasComma 
    ? count.toLocaleString("en-US") 
    : count;

  return (
    <span ref={elementRef} className={className}>
      {hasAnimated ? formattedValue : 0}{suffix}
    </span>
  );
};
