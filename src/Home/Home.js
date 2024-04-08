import React, { useState, useRef, useEffect } from "react";

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  // Function to start the dragging process
  const startDrag = (e) => {
    setIsDragging(true);
    e.preventDefault(); // Prevent default action (like text selection)
  };

  const stopDrag = () => {
    setIsDragging(false);
  };

  // Function to handle dragging
  const handleDrag = (e) => {
    if (!isDragging) return;

    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const dragX = Math.min(
      Math.max(0, e.clientX - containerRect.left),
      containerRect.width
    );
    const dragY = Math.min(
      Math.max(0, e.clientY - containerRect.top),
      containerRect.height
    );

    setPosition({
      x: (dragX / containerRect.width) * 100,
      y: (dragY / containerRect.height) * 100,
    });
  };

  // Calculate the background color based on the horizontal position of the draggable circle
  const getBackgroundColor = () => {
    const startColor = { r: 200, g: 100, b: 45 }; // Pink
    const endColor = { r: 135, g: 206, b: 235 }; // Sky Blue
    const ratio = position.x / 100; // Use the horizontal position (x) to determine the color

    const r = Math.round(startColor.r + (endColor.r - startColor.r) * ratio);
    const g = Math.round(startColor.g + (endColor.g - startColor.g) * ratio);
    const b = Math.round(startColor.b + (endColor.b - startColor.b) * ratio);

    return `rgb(${r}, ${g}, ${b})`;
  };

  // Attach the event listeners for mouse move and mouse up
  useEffect(() => {
    const handleMouseMove = (e) => handleDrag(e);
    const handleMouseUp = () => stopDrag();

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]); // Re-run the effect only if isDragging changes

  return (
    <div>
      <div
        ref={containerRef}
        className="home-container"
        style={{ backgroundColor: getBackgroundColor(), position: "relative" }}
      >
        <h1 className="home-title">What is to know about me?</h1>
        <p className="home-paragraph">
          I have a strong foundation in front-end and back-end development, with
          a keen eye for creating responsive and visually appealing web designs.
          My journey in the world of web development are hosted on GitHub. One
          of my primary areas of focus is building web applications using React
          progressing to NextJS and integrating them with robust databases,
          particularly MongoDB or Postman Also PHP using MySQL which acts
          similar to MongoDB. This allows me to create dynamic, data-driven
          solutions that meet the unique needs of businesses and users alike.
        </p>
        {/* Draggable circle */}
        <div
          className="draggable-circle"
          style={{
            left: `${position.x}%`,
            top: `${position.y}%`,
            cursor: isDragging ? "grabbing" : "grab", // Changes cursor based on drag state
          }}
          onMouseDown={startDrag}
        />
        <div style={{ height: "100px" }}>{/* Additional content */}</div>
      </div>
      <div className="cube-container">
        <div className="cube">
          <div className="front-side"></div>
          <div className="back-side"></div>
          <div className="right-side"></div>
          <div className="left-side"></div>
          <div className="top-side"></div>
          <div className="bottom-side"></div>
        </div>
      </div>
    </div>
  );
}
