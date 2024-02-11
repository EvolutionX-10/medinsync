'use client'
import React, { useRef, useState, useLayoutEffect, useCallback } from "react";
import ResizeObserver from "resize-observer-polyfill";
import { motion, useViewportScroll, useTransform, useSpring } from "framer-motion";
import Landing1 from "./landing1";
import Landing2 from "./landing2";
import Landing3 from "./landing3";
import Navbar from "@/components/Navbar";

const SmoothScroll = () => {
  const scrollRef = useRef(null);
  const ghostRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [viewportW, setViewportW] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("horizontal");

  useLayoutEffect(() => {
    scrollRef && setScrollRange(scrollRef.current.scrollWidth);
  }, [scrollRef]);

  const onResize = useCallback(entries => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width);
    }
  }, []);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(entries => onResize(entries));
    resizeObserver.observe(ghostRef.current);
    return () => resizeObserver.disconnect();
  }, [onResize]);

  const { scrollY, scrollYProgress } = useViewportScroll();
  const transform = useTransform(scrollYProgress, [0, 1], [0, -scrollRange + viewportW]);
  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const spring = useSpring(transform, physics);

  const handleScrollDirection = () => {
    if (scrollDirection === "horizontal" && scrollY.get() > scrollRange) {
      setScrollDirection("vertical");
    }
  };

  return (
    <>
      <Navbar />
      <div className="scroll-container" onScroll={handleScrollDirection}>
        <motion.section
          ref={scrollRef}
          style={{ x: scrollDirection === "horizontal" ? spring : 0 }}
          className="thumbnails-container"
        >
          <div className="thumbnails h-screen">
            <Landing1 />
            <Landing2 />
            <Landing3 />
            {/* <Landing4 /> */}
          </div>
        </motion.section>
      </div>
      <div ref={ghostRef} style={{ height: scrollRange }} className="ghost" />
    </>
  );
};

export default SmoothScroll;