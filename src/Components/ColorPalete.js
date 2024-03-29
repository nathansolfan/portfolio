import React, { useState } from "react";

const colors = ["#FF5733", "#33FF57", "#3357FF", "#F833FF", "#33FFF8"]; // Predefined colors

export default function ColorPalette() {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleColorChange = (color) => {
    setSelectedColor(color); // Update the selected color
  };

  return (
    <div className="palete-container">
      <h2>Select a Color:</h2>
      {/* Predefined color palette */}
      <div style={{ display: "flex", marginBottom: "20px" }}>
        {colors.map((color) => (
          <div
            key={color}
            onClick={() => handleColorChange(color)}
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: color,
              margin: "5px",
              cursor: "pointer",
              border: selectedColor === color ? "2px solid black" : "none", // Highlight the selected color
            }}
          />
        ))}
      </div>
      {/* Color picker for custom color selection */}
      <label>
        Or pick a custom color:
        <input
          type="color"
          value={selectedColor}
          onChange={(e) => handleColorChange(e.target.value)}
          style={{ marginLeft: "10px" }}
        />
      </label>
      {/* Display the selected color */}
      <div style={{ marginTop: "20px" }}>
        <p>
          Selected Color:{" "}
          <strong style={{ color: selectedColor }}>{selectedColor}</strong>
        </p>
        <div
          style={{
            backgroundColor: selectedColor,
            color: "#fff",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          Preview with your selected color
        </div>
      </div>
    </div>
  );
}
