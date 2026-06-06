import React, { useEffect, useState } from "react";
import "./App.css";

const AnimatedCounter = ({ value }) => {
  const [currentValue, setCurrentValue] = useState([]);

  useEffect(() => {
    // Convert the value to an array of digits for animation
    const newValue = value.toString().split("");
    setCurrentValue(newValue);
  }, [value]); // Run this effect whenever the value changes

  return (
    <div className="animated-counter">
      {currentValue.map((digit, index) => (
        <div className="digit-container" key={index}>
          <div
            className="digit"
            style={{
              transform: `translateY(-${digit * 100}%)`,
            }}
          >
            {/* Render all possible digits */}
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
