import React, { useEffect, useRef } from "react";

const Starfield = () => {
  const canvasRef = useRef(null);
  const starArrayRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Ensure canvas is available
    const ctx = canvas.getContext("2d");

    const setCanvasSize = () => {
      if (!canvas) return; // Ensure canvas is available
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener("resize", setCanvasSize);
    setCanvasSize();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  const Star = function (x, y, width, speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.speed = speed;
    this.color = "#fff";

    this.draw = (ctx) => {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.width);
    };

    this.update = (ctx) => {
      if (this.x + this.width > window.innerWidth) {
        this.x = 0;
      }
      this.x += this.speed;
      this.draw(ctx);
    };
  };

  const stars = {
    nearStar: {
      width: 3,
      speed: 0.2,
    },
    midStar: {
      width: 2,
      speed: 0.1,
    },
    farStar: {
      width: 1,
      speed: 0.025,
    },
  };

  const init = () => {
    starArrayRef.current = [];
    const starArray = starArrayRef.current;

    for (let i = 0; i < 50; ++i) {
      const x = Math.random() * (window.innerWidth - stars.nearStar.width);
      const y = Math.random() * (window.innerHeight - stars.nearStar.width);
      starArray.push(
        new Star(x, y, stars.nearStar.width, stars.nearStar.speed)
      );
    }

    for (let i = 0; i < 100; ++i) {
      const x = Math.random() * (window.innerWidth - stars.midStar.width);
      const y = Math.random() * (window.innerHeight - stars.midStar.width);
      starArray.push(new Star(x, y, stars.midStar.width, stars.midStar.speed));
    }

    for (let i = 0; i < 350; ++i) {
      const x = Math.random() * (window.innerWidth - stars.farStar.width);
      const y = Math.random() * (window.innerHeight - stars.farStar.width);
      starArray.push(new Star(x, y, stars.farStar.width, stars.farStar.speed));
    }
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Ensure canvas is available
    const ctx = canvas.getContext("2d");
    if (!ctx) return; // Ensure context is available
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    const starArray = starArrayRef.current;
    starArray.forEach((star) => star.update(ctx));

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    init();
    animate();
  }, []);

  return <canvas ref={canvasRef} className="background_canvas" />;
};

export default Starfield;
