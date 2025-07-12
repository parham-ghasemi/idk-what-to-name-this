import { useEffect, useRef, useState } from "react";
import "./imageCarousel.scss";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const thumbnailRefs = useRef([]);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleScrollUp = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleScrollDown = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const currentRef = thumbnailRefs.current[currentIndex];
    if (currentRef) {
      currentRef.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [currentIndex]);

  const mainImage = images[currentIndex] || "";

  return (
    <div className="thumbs-gallery">
      <div className="thumbs-gallery__main-image-container">
        {mainImage ? (
          <>
            <img
              src="/icons/arrow-circle-left.svg"
              alt="arrow-left"
              className="thumbs-gallery__main-image-container__arrow-left"
              onClick={handlePrev}
            />
            <img
              src={mainImage}
              alt="Main Gallery"
              className="thumbs-gallery__main-image-container__main-image"
            />
            <img
              src="/icons/arrow-circle-right.svg"
              alt="arrow-right"
              className="thumbs-gallery__main-image-container__arrow-right"
              onClick={handleNext}
            />
          </>
        ) : (
          <p>No image selected</p>
        )}
      </div>

      <div className="thumbs-gallery__thumbnails-container">
        <img
          src="/icons/arrow-circle-up.svg"
          alt="arrow-up"
          className="thumbs-gallery__thumbnails-container__arrow-up"
          onClick={handleScrollUp}
        />

        {images.map((image, index) => (
          <div
            key={index}
            ref={(el) => (thumbnailRefs.current[index] = el)}
            className={`thumbs-gallery__thumbnails-container__thumbnail ${
              index === currentIndex
                ? "thumbs-gallery__thumbnails-container__thumbnail--active"
                : ""
            }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="thumbs-gallery__thumbnail-image"
            />
          </div>
        ))}

        <img
          src="/icons/arrow-circle-down.svg"
          alt="arrow-down"
          className="thumbs-gallery__thumbnails-container__arrow-down"
          onClick={handleScrollDown}
        />
      </div>
    </div>
  );
};

export default ImageCarousel;
