import style from "./Button.module.css";
import { useTheme } from "../ThemeContext";
interface Props {
  text: string;
  onclick?: () => void;
  image?: string;
  width: string;
  height: string;
  display: string;
  txtsize: string;
}
const Button = ({
  text,
  onclick,
  image,
  width,
  height,
  display,
  txtsize,
}: Props) => {
  const btnStyle = {
    width: width,
    height: height,
    fontSize: txtsize,
  };
  const imgStyle = {
    display: display,
  };
  const { theme } = useTheme();
  return (
    <div>
      <button
        type="button"
        onClick={onclick}
        className={`${style.btn} ${
          theme === "dark" ? style.darkbtn : style.lightbtn
        }`}
        style={btnStyle}
      >
        <div style={imgStyle}>
          <img src={image} className={style.icon} />
        </div>
        {text}
      </button>
    </div>
  );
};

export default Button;
