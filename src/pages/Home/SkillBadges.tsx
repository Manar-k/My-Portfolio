import python from "./img/python.png";
import r from "./img/R.png";
import tensor from "./img/TensorFlow.png";
import scikit from "./img/scikit-learn.png";
import pandas from "./img/Pandas.png";
import numpy from "./img/NumPy.png";
import keras from "./img/Keras.png";
import sql from "./img/PostgresSQL.png";
import pytorch from "./img/PyTorch.png";
import tableau from "./img/Tableau.png";
import flask from "./img/Flask.png";
import matplotlib from "./img/Matplotlib.png";
import opengl from "./img/OpenGL.png";
import cplus2 from "./img/C++ (CPlusPlus).png";
import visual from "./img/Visual Studio.png";
import css from "./img/CSS3.png";
import jsimg from "./img/JavaScript.png";
import html from "./img/HTML5.png";
import php from "./img/PHP.png";
import firebase from "./img/Firebase.png";
import xcode from "./img/Xcode.png";
import swift from "./img/Swift.png";
import adobeI from "./img/Adobe Illustrator.png";
import opencv from "./img/OpenCV.png";
import { useEffect, useRef } from "react";
const scrollRevealStyle = `
  @keyframes badgeFadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .skill-badge {
    opacity: 0;                        /* hidden by default */
    transform: translateY(20px);
  }

  .skill-badge.revealed {
    animation: badgeFadeIn 0.5s ease forwards;
  }
`;
interface SkillBadgesProps {
  filter?: string[]; // optional — if not passed, shows ALL skills
}

const skills = [
  { label: "Python", icon: python },
  { label: "R", icon: r },
  { label: "TensorFlow", icon: tensor },
  { label: "Scikit-Learn", icon: scikit },
  { label: "Pandas", icon: pandas },
  { label: "NumPy", icon: numpy },
  { label: "Keras", icon: keras },
  { label: "SQL", icon: sql },
  { label: "PyTorch", icon: pytorch },
  { label: "Tableau", icon: tableau },
  { label: "Flask", icon: flask },
  { label: "Matplotlib", icon: matplotlib },
  { label: "OpenGL", icon: opengl },
  { label: "C++", icon: cplus2 },
  { label: "Visual Studio", icon: visual },
  { label: "CSS3", icon: css },
  { label: "JavaScript", icon: jsimg },
  { label: "HTML5", icon: html },
  { label: "PHP", icon: php },
  { label: "Firebase", icon: firebase },
  { label: "Xcode", icon: xcode },
  { label: "Swift", icon: swift },
  { label: "Adobe Illustrator", icon: adobeI },
  { label: "OpenCV", icon: opencv },
];

export default function SkillBadges({ filter }: SkillBadgesProps) {
  const displayed = filter
    ? skills.filter((s) => filter.includes(s.label))
    : skills;
  const badgeRefs = useRef<(HTMLSpanElement | null)[]>([]);
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    badgeRefs.current.forEach((el, i) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // ✅ stagger delay: each badge appears 60ms after the previous
            el.style.animationDelay = `${i * 60}ms`;
            el.classList.add("revealed");
            // observer.unobserve(el);
          } else {
            el.classList.remove("revealed");
          }
        },
        { threshold: 0.1 },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [displayed]);
  return (
    <>
      <style>{scrollRevealStyle}</style>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "12px",
          padding: "24px 16px",
          maxWidth: "800px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {displayed.map((skill, i) => (
          <span
            key={skill.label}
            className="skill-badge"
            ref={(el) => {
              badgeRefs.current[i] = el;
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 16px",
              borderRadius: "999px",
              border: "2px solid #222",
              backgroundColor: "#b2f5c8", // light green from screenshot
              color: "#111",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              cursor: "default",
              userSelect: "none",
              pointerEvents: "none",
            }}
          >
            <img
              src={skill.icon}
              alt={skill.label}
              style={{
                width: "22px",
                height: "22px",
                objectFit: "contain",
              }}
            />
            {skill.label}
          </span>
        ))}
      </div>
    </>
  );
}
