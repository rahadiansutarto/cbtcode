"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    text: "KJ allows our team to focus more on strategy and critical decision-making, while routine tasks are streamlined. It has helped improve efficiency and create space for more high-value, creative work.",
    author: "Jessica Lo",
    role: "Vice President, Make Up For Ever (LVMH)",
    image: "/Jessica Lo.png",
  },
  {
    text: "The hard truth is that AI is useless without expert training. Vertical AI agents like Calvinball start with your business context already built in – and that's the real shortcut here.",
    author: "Vikrant Shinde",
    role: "Director, Home Care Unilever",
    image: "/Vikrant.jpg",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="testimonials-container">
      <div className="testimonial-carousel">
        <button
          onClick={goToPrevious}
          className="carousel-arrow carousel-arrow-left"
          aria-label="Previous testimonial"
        >
          ←
        </button>

        <div className="testimonial">
          <p className="testimonial-text">
            {testimonials[currentIndex].text}
          </p>
          <div className="testimonial-footer">
            <Image
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].author}
              width={150}
              height={150}
              className="testimonial-image"
            />
            <div className="testimonial-info">
              <div className="testimonial-author">
                {testimonials[currentIndex].author}
              </div>
              <div className="testimonial-company">
                {testimonials[currentIndex].role}
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={goToNext}
          className="carousel-arrow carousel-arrow-right"
          aria-label="Next testimonial"
        >
          →
        </button>
      </div>

      <div className="carousel-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`carousel-dot ${
              index === currentIndex ? "carousel-dot-active" : ""
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

