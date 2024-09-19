"use client";

import { useEffect, useRef } from "react";
import { Animation } from "../js/BoucingBox";
import styles from '../styles/BoucingBox.module.css';

const BouncingBox = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    const adjustCanvasSize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        if (ctx) {
          new Animation(canvas, ctx);
        }
      }
    };

    adjustCanvasSize();
    window.addEventListener("resize", adjustCanvasSize);

    return () => {
      window.removeEventListener("resize", adjustCanvasSize);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvasBoucingBox} />;
};

export default BouncingBox;
