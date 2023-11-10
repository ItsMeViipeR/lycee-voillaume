"use client";

import { CSSProperties, useCallback, useEffect, useRef, useState } from "react";

type Slide = {
  url: string;
};

export const Slideshow = ({
  slides,
  parentWidth,
}: {
  slides: Slide[];
  parentWidth: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout>();

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;

    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setInterval(() => {
      goToNext();
    }, 2000);

    return () => clearTimeout(timerRef.current!);
  }, [goToNext]);

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

  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
  };

  const dotStyle = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
  };

  const slidesContainerStyles: CSSProperties = {
    display: "flex",
    height: "100%",
    transition: "transform ease-out 1s",
  };

  const slidesContainerOverflowStyles: CSSProperties = {
    overflow: "hidden",
    height: "100%",
  };

  const getSlideStylesWithBackground = (slideIndex: number) => ({
    ...slideStyles,
    backgroudImage: `url(${slides[slideIndex].url})`,
    width: `${parentWidth}px`,
  });

  const getSlidesContainerStylesWithWidth = () => ({
    ...slidesContainerStyles,
    width: parentWidth * slides.length,
    transform: `translateX(-${currentIndex * parentWidth}px)`,
  });

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;

    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
      <div style={sliderStyles}>
        <div style={leftArrowStyles} onClick={() => goToPrevious()}>
          ❰
        </div>
        <div style={rightArrowStyles} onClick={() => goToNext()}>
          ❱
        </div>
        <div style={slidesContainerOverflowStyles}>
          <div style={getSlidesContainerStylesWithWidth()}>
            {slides.map((_, slideIndex) => (
              <div
                key={slideIndex}
                style={getSlideStylesWithBackground(slideIndex)}
              ></div>
            ))}
          </div>
        </div>
        <div style={dotsContainerStyles}>
          {slides.map((slide, slideIndex) => (
            <div
              style={dotStyle}
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            >
              {slideIndex === currentIndex ? "●" : "○"}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
