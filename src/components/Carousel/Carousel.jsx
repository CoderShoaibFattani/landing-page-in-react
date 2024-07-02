import { useState } from "react";
import styles from "./Carousel.module.css";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "/C1.jpg",
      title: "Discover the world of possible university.",
      subtitle: "Great Quality Cocial life",
    },
    {
      image: "/C2.jpg",
      title: "Discover the world of possible university.",
      subtitle: "Great Quality Cocial life",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className={styles.carousel}>
      <div
        className={styles.carouselInner}
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      >
        <div className={styles.content}>
          <span className={styles.subtitle}>
            {slides[currentSlide].subtitle}
          </span>
          <h1 className={styles.title}>{slides[currentSlide].title}</h1>
          <button className={styles.admissionsBtn}>Admissions</button>
        </div>
      </div>
      <button
        className={styles.carouselControl}
        style={{ left: "10px" }}
        onClick={prevSlide}
      >
        &#8249;
      </button>
      <button
        className={styles.carouselControl}
        style={{ right: "10px" }}
        onClick={nextSlide}
      >
        &#8250;
      </button>
    </div>
  );
};

export default Carousel;
