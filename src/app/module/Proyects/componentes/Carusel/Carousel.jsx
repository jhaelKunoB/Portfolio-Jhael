import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./embla.css"; // CSS separado para clases

const EmblaCarousel = ({ slides = [] }) => {

const [emblaRef, emblaApi] = useEmblaCarousel({
  loop: true,
  align: "start",
});

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((src, index) => (
            <div className="embla__slide" key={index}>
              <img className="w-full max-h-[35vh] sm:max-h-[50vh] object-contain rounded-md" src={src} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <button className="embla__button" onClick={scrollPrev} aria-label="Previous slide">
          <svg className="embla__button__icon" viewBox="0 0 24 24">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </button>
        <button className="embla__button" onClick={scrollNext} aria-label="Next slide">
          <svg className="embla__button__icon" viewBox="0 0 24 24">
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </button>
      </div>


    </div>
  );
};

export default EmblaCarousel;
