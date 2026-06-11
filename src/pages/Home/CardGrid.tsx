import { useState, useEffect, useRef } from "react";
import { useTheme } from "../../components/ThemeContext";

// images
import rag from "./img/rag.png";
import crypto from "./img/Crypto Dashboard.png";
import health from "./img/Manar_2026-May-12_Report-1.png";
import alanna1 from "./img/alannapic1.png";
import alanna2 from "./img/alannapic2.png";
import alanna3 from "./img/alannapic3.png";
import medad1 from "./img/medad1.png";
import medad2 from "./img/medad2.png";
import medad3 from "./img/medad3.png";
import hmh1 from "./img/hmh1.png";
import hmh2 from "./img/hmh2.png";
import hmh3 from "./img/hmh3.png";
import sales1 from "./img/sales1.png";
import sales2 from "./img/sales2.png";
import sales3 from "./img/sales3.png";
import birds1 from "./img/birdai.png";
import cloak from "./img/video1.png";
import cloak2 from "./img/video2.png";
import turnover1 from "./img/turnover1.png";
import turnover2 from "./img/turnover2.png";
import market1 from "./img/market1.png";
import market2 from "./img/market2.png";
import market3 from "./img/market3.png";
import sqlimg from "./img/sqlimg.png";
import terminal from "./img/terminal.png";
import astro1 from "./img/astro1.png";
import astro2 from "./img/astro2.png";
import astro3 from "./img/astro3.png";

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

  .project-card {
    opacity: 0;
    transform: translateY(30px);
  }

  .project-card.revealed {
    animation: cardFadeIn 0.5s ease forwards;
  }
`;
// ─── Types ────────────────────────────────────────────────────────────────────
interface Card {
  id: number;
  title: string;
  description: string;
  badge: string[];
  image: string;
  thumbnails: string[];
  link: string;
}

// ─── Mock Data ────────────────────────────────────────────────────────────────
const cards: Card[] = [
  {
    id: 13,
    title: "Health Status Data Analysis",
    description:
      "Analyzing the health status of the population of the Kingdom of Saudi Arabia aged 15 and above, identifying the most influential variables, explaining the reasons for the results, linking the numbers together, and preparing an executive summary that highlights the most important findings of the data.",
    badge: ["Data Analysis"],
    image: health,
    thumbnails: [health, health],
    link: "https://datastudio.google.com/reporting/0d32db79-b41b-42e6-82de-8d8ad2da51c2/page/IwxxF",
  },
  {
    id: 2,
    title: "Medad Website",
    description:
      "Medad is a website that promotes the culture of Arabic calligraphy arts. Medad offers AI services, including Font Classification, Arabic OCR (Extract Text from Image), and Change Text Font.",
    badge: ["Website"],
    image: medad1,
    thumbnails: [medad2, medad3],
    link: "https://github.com/Manar-k/T5-Capstone-Project-Medad",
  },
  {
    id: 3,
    title: "Hold My Hand App",
    description:
      "Hold My Hand is an IOS iPad application designed and implemented to help kids with autism express their feelings and learn how to communicate with others through simple story cards, playing audio, and matching images with words game.",
    badge: ["App"],
    image: hmh1,
    thumbnails: [hmh2, hmh3],
    link: "https://github.com/Manar-k/Hold-My-Hand-App",
  },
  {
    id: 4,
    title: "Sales Analysis",
    description:
      "AAL is a popular clothing brand in Australia. To support its growth, the CEO has asked to analyze its data. As a data scientist, I cleaned and prepared the data, analyzed sales trends, and created visualizations to present the findings.",
    badge: ["Data Analysis"],
    image: sales1,
    thumbnails: [sales2, sales3],
    link: "https://github.com/Manar-k/SDAIA-T5-Bootcamp-AI-and-Data-Science/blob/main/3-Applied%20Data%20Science%20with%20Python/Project%201-Sales%20Analysis%20for%20AAL%20Clothing/Group_2%20(1).ipynb",
  },
  {
    id: 5,
    title: "Birds Classification",
    description:
      "I classified birds into 20 categories by training a model using a deep learning CNN.",
    badge: ["AI"],
    image: birds1,
    thumbnails: [birds1, birds1],
    link: "https://github.com/Manar-k/SDAIA-T5-Bootcamp-AI-and-Data-Science/blob/main/5-Deep%20Learning%20Specialisation/Birds_classification.ipynb",
  },
  {
    id: 6,
    title: "Invisibility Cloak",
    description:
      "I created a Harry Potter's invisible cloak using an image processing technique called Color detection and segmentation. By (red) color detection, any object behind the scene will be invisible.",
    badge: ["AI"],
    image: cloak,
    thumbnails: [cloak, cloak2],
    link: "https://github.com/Manar-k",
  },
  {
    id: 7,
    title: "Predicting Employee Turnover",
    description:
      "Portobello Tech is an app innovator focused on predicting employee turnover. As an ML Developer, I checked data quality, conducted exploratory data analysis, implemented clustering, addressed class imbalance using the SMOTE technique, and predicted employee turnover.",
    badge: ["Data Science"],
    image: turnover1,
    thumbnails: [turnover1, turnover2],
    link: "https://github.com/Manar-k/SDAIA-T5-Bootcamp-AI-and-Data-Science/blob/main/4%20-Machine%20Learning/Project1_Employee_Turnover-tryG6-2.ipynb",
  },
  {
    id: 8,
    title: "Marketing Campaigns",
    description:
      "I analyzed marketing campaigns to understand what drives customer acquisition. As a data scientist, I prepared the data, explored it to identify trends, patterns, and relationships among the variables, and conducted hypothesis testing to validate assumptions and insights.",
    badge: ["Data Science"],
    image: market1,
    thumbnails: [market2, market3],
    link: "https://github.com/Manar-k/SDAIA-T5-Bootcamp-AI-and-Data-Science/blob/main/3-Applied%20Data%20Science%20with%20Python/Project%202-Marketing_Campaign/Marketing_Campaign-G6.ipynb",
  },
  {
    id: 9,
    title: "ScienceQtech Employees",
    description:
      "ScienceQtech is a data science startup involved in various projects. The HR department has requested reports on employee details and performance. As a Database Administrator, I analyzed the employee database.",
    badge: ["Data Analysis"],
    image: sqlimg,
    thumbnails: [sqlimg, sqlimg],
    link: "https://github.com/Manar-k/SDAIA-T5-Bootcamp-AI-and-Data-Science/blob/main/1-SQL%20Training/SQL_Course-end_Project1_Manar_Khamis.pdf",
  },
  {
    id: 10,
    title: "Explore US Bikeshare Data",
    description:
      "I analyzed bike-share data from three major U.S. cities to compute descriptive statistics that uncover usage patterns and created an interactive terminal experience to present these statistics by taking input from the user.",
    badge: ["Data Analysis"],
    image: terminal,
    thumbnails: [terminal, terminal],
    link: "https://github.com/Manar-k/Explore-US-Bikeshare-Data",
  },
  {
    id: 11,
    title: "Astro Boy 2d Scene",
    description:
      "I created a 2D scene featuring Astro Boy's face in three expressions: happy, sad, and surprised. and control its movements along the X, Y, and Z axes.",
    badge: ["App"],
    image: astro3,
    thumbnails: [astro1, astro2],
    link: "https://github.com/Manar-k/OpenGL_2d_scene_Astro-Boy",
  },
  {
    id: 12,
    title: "Crypto Overview Data Analysis",
    description:
      "The Crypto Overview Dashboard is built to answer several key questions that any crypto investor or analyst would ask on a daily basis.",
    badge: ["Data Analysis"],
    image: crypto,
    thumbnails: [crypto, crypto],
    link: "https://github.com/Manar-k/",
  },
  {
    id: 1,
    title: "Alanaa Website",
    description:
      "Alanaa is a website designed to help supervisors manage trainee data by enabling them to view, add, modify, and delete information about trainees.",
    badge: ["Website"],
    image: alanna2,
    thumbnails: [alanna1, alanna3],
    link: "https://github.com/Manar-k",
  },
  {
    id: 14,
    title: "Documents RAG Chatbot",
    description:
      "An artificial intelligence system that allows you to upload any PDF file and talk to it — you ask it questions in natural language and it answers you based solely on the content of the document.",
    badge: ["AI"],
    image: rag,
    thumbnails: [rag, rag],
    link: "https://github.com/Manar-k/RAG-Chatbot",
  },
];
// Theme
const themes = {
  light: {
    wrapper: { background: "#ffffff" },
    card: {
      background: "#ffffff",
      border: "2px solid #000000",
      boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
    },
    cardHover: { boxShadow: "0 8px 28px rgba(0,0,0,0.14)" },
    numberTitle: { color: "#111" },
    description: { color: "#666" },
    toggleBtn: { background: "#111", color: "#fff", border: "2px solid #111" },

    button: { background: "#86FFBD", color: "#000", border: "3px solid #000" },
    buttonHover: { background: "#ffffff", color: "#86FFBD" },
  },
  dark: {
    wrapper: { background: "#000000" },
    card: {
      background: "#000000",
      border: "2px solid #86FFBD",
      boxShadow: "0 2px 16px rgba(134,255,189,0.10)",
    },
    cardHover: { boxShadow: "0 8px 32px rgba(134,255,189,0.22)" },
    numberTitle: { color: "#f0f0f0" },
    description: { color: "#aaa" },
    toggleBtn: {
      background: "transparent",
      color: "#86FFBD",
      border: "2px solid #86FFBD",
    },
    button: {
      background: "#000000",
      color: "#86FFBD",
      border: "3px solid #ffffff",
    },
    buttonHover: {
      background: "#86FFBD",
      color: "#000",
      border: "3px solid #000",
    },
  },
};
// ─── Styles (inline – no extra CSS file needed) ───────────────────────────────

const baseStyles: Record<string, React.CSSProperties> = {
  wrapper: {
    minHeight: "100vh",
    padding: "40px 16px 60px",
    fontFamily: "'Noto Sans JP', 'Hiragino Kaku Gothic ProN', sans-serif",
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
    display: "grid",
    gridTemplateColumns: "1fr auto",
    gridTemplateRows: "1fr 1fr",
    height: "180px",
    overflow: "hidden",
  },
  mainImage: {
    gridRow: "1 / 3",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  thumbGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "1fr 1fr",
    gap: "0px",
    width: "90px",
    height: "180px",
  },
  thumb: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  body: {
    padding: "14px 16px 18px",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    gap: "6px",
  },
  numberTitle: {
    fontSize: "15px",
    fontWeight: 700,
    color: "#111",
    lineHeight: 1.3,
    margin: 0,
  },
  badgeRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginTop: "2px",
  },
  badgePick: {
    color: "#333",
    fontSize: "10px",
    fontWeight: 700,
    padding: "2px 7px",
    borderRadius: "4px",
    whiteSpace: "nowrap" as const,
    display: "flex",
    alignItems: "center",
    gap: "4px",
  },
  description: {
    fontSize: "12px",
    color: "#666",
    lineHeight: 1.6,
    flex: 1,
    margin: 0,
  },
  button: {
    marginTop: "12px",
    borderRadius: "6px",
    padding: "11px 0",
    fontSize: "13px",
    fontWeight: 700,
    cursor: "pointer",
    width: "100%",
    letterSpacing: "0.04em",
    transition: "background 0.15s ease",
  },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function Badge({ type }: { type: string[] }) {
  return (
    <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
      {type.map((t) => {
        const style = {
          ...baseStyles.badgePick,
          ...(t === "Website"
            ? { backgroundColor: "#85c283" }
            : t === "App"
              ? { backgroundColor: "#d85c6a" }
              : t === "Data Analysis"
                ? { backgroundColor: "#93bbdd" }
                : t === "AI"
                  ? { backgroundColor: "#bd7cbe" }
                  : t === "Data Science"
                    ? { backgroundColor: "#f5f5a8" }
                    : { backgroundColor: "#d3d3d3" }),
        };

        const icon =
          t === "Website"
            ? "💻"
            : t === "App"
              ? "📱"
              : t === "Data Analysis"
                ? "📊"
                : t === "AI"
                  ? "🤖"
                  : t === "Data Science"
                    ? "🔬"
                    : "🔖"; // fallback

        return (
          <span key={t} style={style}>
            {icon} {t}
          </span>
        );
      })}
    </div>
  );
}

function CardItem({
  card,
  index,
  theme,
}: {
  card: Card;
  index: number;
  theme: "light" | "dark";
}) {
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.animationDelay = `${index * 80}ms`; // ✅ stagger per card
          el.classList.add("revealed");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const cardRef = useRef<HTMLDivElement | null>(null);
  const t = themes[theme];

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
        } else {
          el.classList.remove("revealed");
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  const [hovered, setHovered] = useState(false);
  const goToUrl = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <div
      ref={cardRef}
      className="project-card"
      style={{
        ...baseStyles.card,
        ...t.card,
        transform: hovered ? "translateY(-4px)" : "none",
        boxShadow: hovered ? t.cardHover.boxShadow : t.card.boxShadow,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image block */}
      <div style={baseStyles.imageBlock}>
        <img src={card.image} alt={card.title} style={baseStyles.mainImage} />
        <div style={baseStyles.thumbGrid}>
          {card.thumbnails.map((t, i) => (
            <img key={i} src={t} alt="" style={baseStyles.thumb} />
          ))}
        </div>
      </div>

      {/* Body */}
      <div style={baseStyles.body}>
        <p style={{ ...baseStyles.numberTitle, ...t.numberTitle }}>
          {card.title}
        </p>

        <div style={baseStyles.badgeRow}>
          <Badge type={card.badge} />
        </div>

        <p style={{ ...baseStyles.description, ...t.description }}>
          {card.description}
        </p>

        <button
          style={{ ...baseStyles.button, ...t.button }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background =
              t.buttonHover.background;
            (e.currentTarget as HTMLButtonElement).style.color =
              t.buttonHover.color;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background =
              t.button.background;
            (e.currentTarget as HTMLButtonElement).style.color = t.button.color;
          }}
          onClick={() => goToUrl(card.link)}
        >
          Show Code
        </button>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function CardGrid({ filter }: { filter?: string | null }) {
  const { theme } = useTheme();
  const t = themes[theme];

  const visible = filter
    ? [
        ...cards.filter((c) => c.badge.includes(filter)),
        ...cards.filter((c) => !c.badge.includes(filter)),
      ]
    : cards;

  return (
    <div style={{ ...baseStyles.wrapper, ...t.wrapper }}>
      <style>{cardRevealStyle}</style>
      {/* Responsive grid via CSS-in-JS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;800&display=swap');
        * { box-sizing: border-box; }
        *, *::before, *::after {
              font-family: 'Poppins', sans-serif !important;
      }
        @media (max-width: 500px) {
          .card-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 501px) and (max-width: 800px) {
          .card-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
      <div className="card-grid" style={baseStyles.grid}>
        {visible.map((card, index) => (
          <CardItem key={card.id} card={card} index={index} theme={theme} />
        ))}
      </div>
    </div>
  );
}
