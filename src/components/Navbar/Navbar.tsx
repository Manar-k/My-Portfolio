import style from "./Navbar.module.css";
import logo from "./img/manar logo.png";
import menuIcon from "./img/menu-1.svg";
import { useEffect } from "react";
// light and dark mode
import { useTheme } from "../ThemeContext";

interface Props {
  sendTheme: (thm: string) => void;
}
const Navbar = ({ sendTheme }: Props) => {
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
              <a href="#about">About</a>
              <a href="#Projects">Projects</a>
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
