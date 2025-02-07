import React, { useEffect, useState } from "react";

const styles = {
  container: {
    position: "fixed",
    top: "-50vh", // Offset by half the viewport height
    left: "-50vw", // Offset by half the viewport width
    width: "100vw",
    height: "100vh",
    pointerEvents: "none",
    zIndex: 9999,
  },
  heart: {
    position: "absolute",
    fontSize: "20px",
    transform: "translate(-50%, -50%)",
    animation: "float-away 1s ease-out forwards",
  },
  ripple: {
    position: "fixed",
    borderRadius: "50%",
    background: "rgba(255, 192, 203, 0.4)",
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
    animation: "ripple-effect 1s ease-out forwards",
  },
  "@keyframes float-away": {
    "0%": {
      transform: "translate(-50%, -50%) scale(0.5)",
      opacity: 1,
    },
    "100%": {
      transform: "translate(-50%, -150%) scale(1.5)",
      opacity: 0,
    },
  },
  "@keyframes ripple-effect": {
    "0%": {
      width: 0,
      height: 0,
      opacity: 0.5,
    },
    "100%": {
      width: "100px",
      height: "100px",
      opacity: 0,
    },
  },
};

// Add keyframes to document
const addKeyframes = () => {
  const style = document.createElement("style");
  style.textContent = `
    @keyframes float-away {
      0% {
        transform: translate(-50%, -50%) scale(0.5);
        opacity: 1;
      }
      100% {
        transform: translate(-50%, -150%) scale(1.5);
        opacity: 0;
      }
    }
    @keyframes ripple-effect {
      0% {
        width: 0;
        height: 0;
        opacity: 0.5;
      }
      100% {
        width: 100px;
        height: 100px;
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
  return () => document.head.removeChild(style);
};

export function CursorEffects() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const cleanup = addKeyframes();

    const handleMouseMove = (e) => {
      const heart = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };

      setHearts((prev) => [...prev, heart]);

      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== heart.id));
      }, 1000);
    };

    const handleClick = (e) => {
      const ripple = document.createElement("div");
      Object.assign(ripple.style, {
        ...styles.ripple,
        left: `${e.clientX}px`,
        top: `${e.clientY}px`,
      });
      document.body.appendChild(ripple);

      setTimeout(() => ripple.remove(), 1000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    return () => {
      cleanup();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div style={styles.container}>
      {hearts.map((heart) => (
        <div
          key={heart.id}
          style={{
            ...styles.heart,
            left: `${heart.x}px`,
            top: `${heart.y}px`,
          }}
        >
          💖
        </div>
      ))}
    </div>
  );
}
