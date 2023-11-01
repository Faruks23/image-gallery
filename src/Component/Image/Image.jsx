// Image.js
import React from "react";

function Image({ image, isSelected, handleImageSelection }) {
  return (
    <img
      src={image.src}
      alt={image.alt}
      className={`w-full h-auto ${
        isSelected ? "border-4 border-blue-500" : ""
      }`}
      onClick={() => handleImageSelection(image.id)}
    />
  );
}

export default Image;
