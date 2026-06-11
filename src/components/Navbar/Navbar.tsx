import style from "./Navbar.module.css";
import logo from "./img/manar logo.png";
import menuIcon from "./img/menu-1.svg";
import { useEffect } from "react";
// light and dark mode
import { useTheme } from "../ThemeContext";

interface Props {
  sendTheme: (thm: string) => void;
  onProjectFilter: (filter: string | null) => void;  // ADD THIS
}

interface Props {
  sendTheme: (thm: string) => void;
}
const Navbar = ({ sendTheme, onProjectFilter }: Props) => {
  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    document.body.className = theme; // Apply the theme class to the body
  }, [theme]);
  const handleClickTheme = () => {
    toggleTheme();
    sendTheme(theme);
  };
  return (
    <div className={style.nav}>
      <ul className={`${style.ul} ${style[theme]}`}>
        <li className={style.li}>
          <a href="#home">
            <span>
              <img src={logo} alt="Home" width={55} height={40} />
            </span>
          </a>
        </li>
        <li className={style.liright}>
          <div className={style.dropdown}>
            <img
              src={menuIcon}
              alt="Home"
              className={`${style.menu} ${style[theme]}`}
            />
            <div className={`${style.dropdowncontent} ${style[theme]}`}>
              <a href="#home" className={`${style.astyle} ${style[theme]}`}>
                Home
              </a>
              <a href="#Skills">Skills</a>
              <a href="#about">About</a>
              <a href="#Certificates">Certificates</a>
              <div style={{ position: "relative", display: "inline-block" }} className={style.projectMenu}>
                <a href="#Projects" className={`${style.astyle} ${style[theme]}`}>
                  Projects
                  </a>
                  <div className={`${style.projectSubmenu} ${style[theme]}`}>
                    {[
                      { label: "All Projects", value: null, color: "#86FFBD" },
                      { label: "🤖 AI", value: "AI", color: "#bd7cbe" },
                      { label: "📊 Data Analysis", value: "Data Analysis", color: "#93bbdd" },
                      { label: "🔬 Data Science", value: "Data Science", color: "#f5c842" },
                      { label: "💻 Website", value: "Website", color: "#85c283" },
                      { label: "📱 App", value: "App", color: "#d85c6a" },
                    ].map((item) => (
                    <a   
                      key={item.label}
                      href="#Projects"
                      onClick={() => onProjectFilter(item.value)}
                      style={{
                        display: "block",
                        padding: "6px 12px",
                        color: item.color,
                        border: `1px solid ${item.color}`,
                        borderRadius: "6px",
                        fontSize: "12px",
                        fontWeight: 700,
                        textDecoration: "none",
                        whiteSpace: "nowrap",
                      }}
                      >
                      {item.label}
                      </a>
                      ))}
              </div>
            </div>
                      
              <a href="#Experiences">Experiences</a>
            </div>
          </div>
        </li>
        <li className={style.liright2}>
          <label className={style.switch}>
            <input type="checkbox" onClick={handleClickTheme} />
            <span className={style.slider}></span>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
