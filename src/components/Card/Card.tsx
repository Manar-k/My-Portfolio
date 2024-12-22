import style from "./Card.module.css";
import { useRef, useEffect } from "react";
import { useTheme } from "../ThemeContext";
interface Props {
  title: string;
  description: string;
  video: string;
  link: string;
  onRef: (ref: HTMLVideoElement | null) => void; // Prop to receive ref callback
}
const Card = ({ title, description, video, link, onRef }: Props) => {
  const { theme } = useTheme();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    onRef(videoRef.current); // Pass the ref to the parent when the component mounts
    return () => {
      onRef(null); // Clean up on unmount
    };
  }, [onRef]);
  const goToUrl = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <>
      <div className="col col-xs-auto">
        <div
          className="card col p-2 p-lg-4 m-3 m-lg-4"
          style={{
            border:
              theme === "dark" ? "3px solid #86FFBD" : "3px solid #000000",
            borderRadius: "5%",
            maxWidth: "450px",
            background: theme === "dark" ? "#23233E" : "#ffffff",
          }}
        >
          <h5
            className="card-title"
            style={{ color: theme === "dark" ? "#ffffff" : "#000000" }}
          >
            {title}
          </h5>
          <video
            ref={videoRef}
            width="100%"
            loop
            muted
            style={{ display: "block" }}
            className={style.vidstyle}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="card-body">
            <p className={style.txtstyle}>{description}</p>
            <button
              type="button"
              value="Show Code"
              onClick={() => goToUrl(link)}
              className={`${style.btn} ${
                theme === "dark" ? style.darkbtn : style.lightbtn
              }`}
            >
              Show Code
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
