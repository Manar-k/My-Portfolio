import style from "./Footer.module.css";
import email from "./img/email-svg.svg";
import github from "./img/github-mark.svg";
import linkedin from "./img/linkedin.png";
import dlinkedin from "./img/linkedin-app-white-icon.png";
import dgithub from "./img/github-mark-white.svg";
import { useTheme } from "../ThemeContext";
const Footer = () => {
  const { theme } = useTheme();
  return (
    <div className={style.divfooter}>
      <footer className={style.footer}>
        <a href="https://www.linkedin.com/in/manar-khamees/" target="_blank">
          <img
            className={style.icon}
            src={theme === "dark" ? dlinkedin : linkedin}
            width={25}
            height={25}
          />
        </a>
        <a href="https://github.com/Manar-k" target="_blank">
          <img
            className={style.icon}
            src={theme === "dark" ? dgithub : github}
            width={25}
            height={25}
          />
        </a>
        <a href="mailto:manar_khamees@outlook.com" target="_blank">
          <img
            className={`${style.email} ${
              theme === "dark" ? style.darkemail : style.lightemail
            }`}
            src={email}
            width={25}
            height={25}
          />
        </a>
      </footer>
    </div>
  );
};

export default Footer;
