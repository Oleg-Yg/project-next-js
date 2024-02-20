"use client";

import React, { useState } from "react";
import { images } from "@/components/Fake3d/fake3d.data";

const Fake3d = () => {
  const [index, setIndex] = useState(0);

  const handleMouseEvent = (event: any) => {
    let x = event.nativeEvent.offsetX;
    const mousePosition = Math.ceil(x / (500 / (images.length - 1)));
    if (mousePosition != index) setIndex(mousePosition);
  };

  return (
    <div>
      {images.map((image) => (
        <img
          key={image}
          src={image}
          alt={"hare"}
          hidden={images[index] !== image}
          style={{ width: 500 }}
          onMouseMove={handleMouseEvent}
        />
      ))}
    </div>
  );
};

export default Fake3d;
