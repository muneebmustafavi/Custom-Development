import React, { useEffect, useState } from "react";
import "./AnimatedCounter.css";

const AnimatedCounter = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(value); // The value currently displayed

  useEffect(() => {
    if (displayValue < value) {
      // Increment the value gradually to reach the target
      const interval = setInterval(() => {
        setDisplayValue((prev) => {
          const nextValue = Math.min(prev + 1, value); // Increment until it matches the target
          if (nextValue === value) clearInterval(interval); // Stop when reached
          return nextValue;
        });
      }, 50); // Adjust speed of the animation
    }
  }, [value, displayValue]);

  // Convert the display value into an array of digits for animation
  const digits = displayValue.toString().split("");

  return (
    <div className="animated-counter">
      {digits.map((digit, index) => (
        <div className="digit-container" key={index}>
          <div
            className="digit"
            style={{
              transform: `translateY(-${digit * 100}%)`,
            }}
          >
            {Array.from({ length: 10 }, (_, i) => (
              <span key={i}>{i}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedCounter;
