"use client";

import { CSSProperties, useEffect, useRef, useState } from "react";

type Slide = {
  url: string;
};

export const Slideshow = ({ slides }: { slides: Slide[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles: CSSProperties = {
    height: "100%",
    position: "relative",
  };

  const slideStyles: CSSProperties = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const leftArrowStyles: CSSProperties = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };

  const rightArrowStyles: CSSProperties = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };

  const timerRef = useRef(null);

  useEffect(() => {
    // @ts-ignore
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 2000);
  });

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;

    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;

    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div style={leftArrowStyles} onClick={() => goToPrevious()}>
        ❰
      </div>
      <div style={sliderStyles}>
        <div style={slideStyles}></div>
      </div>
      <div style={rightArrowStyles} onClick={() => goToNext()}>
        ❱
      </div>
    </>
  );
};
