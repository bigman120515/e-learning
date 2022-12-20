import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function SliderMentors() {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    
  ];
  return (
    <>
      <AliceCarousel mouseTracking items={items} />
    </>
  );
}

export default SliderMentors;
