import style from "./Title.module.css";

interface Props {
  text: string;
  id: string;
}
const Title = ({ text, id }: Props) => {
  return (
    <>
      <div id={id} />
      <br />
      <br />
      <br />
      <div className={style.header}>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-8">
            <h1 className={style.text}>{text}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Title;
