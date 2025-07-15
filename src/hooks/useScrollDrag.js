import { useEffect, useRef } from "react";

export const useScrollDrag = () => {
  const scrollRef = useRef();
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleMouseDown = (e) => {
      isDownRef.current = true;
      el.classList.add("time-selector-modal__dates-container--grabbing");
      startXRef.current = e.pageX - el.offsetLeft;
      scrollLeftRef.current = el.scrollLeft;
    };

    const handleMouseUp = () => {
      isDownRef.current = false;
      el.classList.remove("time-selector-modal__dates-container--grabbing");
    };

    const handleMouseLeave = () => {
      isDownRef.current = false;
      el.classList.remove("time-selector-modal__dates-container--grabbing");
    };

    const handleMouseMove = (e) => {
      if (!isDownRef.current) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startXRef.current) * 2;
      el.scrollLeft = scrollLeftRef.current - walk;
    };

    el.addEventListener("mousedown", handleMouseDown);
    el.addEventListener("mouseleave", handleMouseLeave);
    el.addEventListener("mouseup", handleMouseUp);
    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousedown", handleMouseDown);
      el.removeEventListener("mouseleave", handleMouseLeave);
      el.removeEventListener("mouseup", handleMouseUp);
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return scrollRef;
};
