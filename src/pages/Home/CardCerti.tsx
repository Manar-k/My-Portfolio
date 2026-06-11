import { useState, useEffect, useRef } from "react";
import { useTheme } from "../../components/ThemeContext";

// ─── Add your certificate images here ────────────────────────────────────────
import cert1 from "./Certi-imgs/1.jpg"
import cert2 from "./Certi-imgs/2.jpg"
import cert3 from "./Certi-imgs/3.jpg"
import cert4 from "./Certi-imgs/ai-certificate_page-0001.jpg"
import cert5 from "./Certi-imgs/certified user Programmer_page-0001.jpg"
import cert6 from "./Certi-imgs/HCIA-AI Manar Khamees_page-0001.jpg"
import cert7 from "./Certi-imgs/Nanodegree Certificate - Programming for Data Science_page-0001.jpg"

const cardRevealStyle = `
  @keyframes cardFadeIn {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .certi-card {
    opacity: 0;
    transform: translateY(30px);
  }

  .certi-card.revealed {
    animation: cardFadeIn 0.5s ease forwards;
  }
`;

// ─── Types ────────────────────────────────────────────────────────────────────
interface CertiCard {
  id: number;
  title: string;
  image: string;
  link?: string;
}

// ─── Mock Data — replace images with your real imports ───────────────────────
const certiCards: CertiCard[] = [
  {
    id: 1,
    title: "T5 Data Science & AI SDAIA Bootcamp",
    image: cert1,
    link: "",
  },
  {
    id: 2,
    title: "Huawei Certified ICT Associate - AI (HCIA-AI)",
    image: cert6,
    link: "",
  },
  {
    id: 3,
    title: "Programming for Data Science Nanodegree",
    image: cert7,
    link: "",
  },
  {
    id: 4,
    title: "AI Engineer Training Program- SDA",
    image: cert4,
    link: "",
  },
  {
    id: 5,
    title: "Neural Networks and Deep Learning Course",
    image: cert3,
    link: "",
  },
  {
    id: 6,
    title: "Improving Deep Neural Networks Course",
    image: cert2,
    link: "",
  },
  {
    id: 6,
    title: "Unity Certified User: Programmer",
    image: cert5,
    link: "",
  },
];

// ─── Theme ────────────────────────────────────────────────────────────────────
const themes = {
  light: {
    wrapper: { background: "#ffffff" },
    card: {
      background: "#ffffff",
      border: "2px solid #000000",
      boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
    },
    cardHover: { boxShadow: "0 8px 28px rgba(0,0,0,0.14)" },
    title: { color: "#111" },
  },
  dark: {
    wrapper: { background: "#000000" },
    card: {
      background: "#000000",
      border: "2px solid #86FFBD",
      boxShadow: "0 2px 16px rgba(134,255,189,0.10)",
    },
    cardHover: { boxShadow: "0 8px 32px rgba(134,255,189,0.22)" },
    title: { color: "#f0f0f0" },
  },
};

// ─── Styles ───────────────────────────────────────────────────────────────────
const baseStyles: Record<string, React.CSSProperties> = {
  wrapper: {
    minHeight: "100vh",
    padding: "40px 16px 60px",
    fontFamily: "'Poppins', sans-serif",
    boxSizing: "border-box",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
    gap: "24px",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  card: {
    borderRadius: "8px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    cursor: "pointer",
  },
  imageBlock: {
    width: "100%",
    aspectRatio: "4 / 3",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f5f5f5",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  body: {
    padding: "12px 16px 16px",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  title: {
    fontSize: "14px",
    fontWeight: 700,
    margin: 0,
    lineHeight: 1.4,
  },
};

// ─── Card Item ────────────────────────────────────────────────────────────────
function CertiCardItem({
  card,
  index,
  theme,
}: {
  card: CertiCard;
  index: number;
  theme: "light" | "dark";
}) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState(false);
  const t = themes[theme];

  // useEffect(() => {
  //   const el = cardRef.current;
  //   if (!el) return;

  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         el.style.animationDelay = `${index * 80}ms`;
  //         el.classList.add("revealed");
  //         // observer.unobserve(el);
  //       }
  //     },
  //     { threshold: 0.1 }
  //   );

  //   observer.observe(el);
  //   return () => observer.disconnect();
  // }, [index]);
  useEffect(() => {
  const el = cardRef.current;
  if (!el) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        // Reset animation so it can replay
        el.classList.remove("revealed");
        el.style.animationDelay = `${index * 80}ms`;
        // Force reflow so the browser registers the class removal
        void el.offsetWidth;
        el.classList.add("revealed");
      } else {
        el.classList.remove("revealed");
      }
    },
    { threshold: 0.1 }
  );

  observer.observe(el);
  return () => observer.disconnect();
}, [index]);

  const handleClick = () => {
    if (card.link) window.open(card.link, "_blank");
  };

  return (
    <div
      ref={cardRef}
      className="certi-card"
      style={{
        ...baseStyles.card,
        ...t.card,
        transform: hovered ? "translateY(-4px)" : "none",
        boxShadow: hovered ? t.cardHover.boxShadow : t.card.boxShadow,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
    >
      {/* Certificate Image */}
      <div style={baseStyles.imageBlock}>
        {card.image ? (
          <img src={card.image} alt={card.title} style={baseStyles.image} />
        ) : (
          <span style={{ color: "#aaa", fontSize: "12px" }}>No image</span>
        )}
      </div>

      {/* Title */}
      <div style={baseStyles.body}>
        <p style={{ ...baseStyles.title, ...t.title }}>{card.title}</p>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function CardCerti() {
  const { theme } = useTheme();
  const t = themes[theme];

  return (
    <div style={{ ...baseStyles.wrapper, ...t.wrapper }}>
      <style>{cardRevealStyle}</style>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
        *, *::before, *::after {
          font-family: 'Poppins', sans-serif !important;
          box-sizing: border-box;
        }
        @media (max-width: 500px) {
          .certi-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 501px) and (max-width: 800px) {
          .certi-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
      <div className="certi-grid" style={baseStyles.grid}>
        {certiCards.map((card, index) => (
          <CertiCardItem key={card.id} card={card} index={index} theme={theme} />
        ))}
      </div>
    </div>
  );
}
