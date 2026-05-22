import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import style from "./Home.module.css";
import avatar from "./img/2d-image.png";
import Title from "../../components/Title/Title";
import CardGrid from "./CardGrid";
import SkillBadges from "./SkillBadges";
import { useState } from "react";
import { ThemeProvider } from "../../components/ThemeContext";

const Home = () => {
  const [themeapply, setThemeapply] = useState<string>("dark");
  const receiveTheme = (thm: string) => {
    setThemeapply(thm);
    setThemeapply((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const SendEmail = () => {
    const encodedSubject = encodeURIComponent("Hi, I wanna hire you 🎉");
    const mailtoLink = `mailto:manar_khamees@outlook.com?subject=${encodedSubject}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      {/* ✅ CHANGED: Added global style block for font + mobile fixes */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap');

        * { box-sizing: border-box; }

        body {
          font-family: 'Poppins', sans-serif !important;
        }

        .hero-row {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 24px;
          padding: 40px 16px 0;
        }

        .hero-text {
          flex: 1 1 280px;
          min-width: 260px;
        }

        .hero-image {
          flex: 1 1 240px;
          display: flex;
          justify-content: center;
        }

        .section-block {
          padding: 24px 16px;    /* was relying on Bootstrap row spacing which caused big gaps */
          max-width: 1100px;
          margin: 0 auto;
        }

        /* CHANGED: Experience row mobile layout */
        .exp-row {
          display: flex;
          flex-direction: row;
          gap: 16px;
          margin-bottom: 32px;
          flex-wrap: wrap;
        }

        .exp-date {
          min-width: 140px;
          flex: 0 0 140px;
        }

        .exp-content {
          flex: 1 1 260px;
        }

        /* CHANGED: Font sizes responsive for mobile */
        .hero-title {
          font-size: clamp(1.8rem, 5vw, 3rem);   /* scales between phone and laptop */
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 12px;
          font-family: 'Poppins', sans-serif;
        }

        .hero-subtitle {
          font-size: clamp(0.85rem, 2.5vw, 1rem);
          color: #555;
          margin-bottom: 20px;
          font-family: 'Poppins', sans-serif;
        }

        .about-text {
          font-size: clamp(0.85rem, 2vw, 1rem);
          line-height: 1.8;
          font-family: 'Poppins', sans-serif;
          padding: 0px 0px 0px 16px;
        }

        .exp-text {
          font-size: clamp(0.8rem, 2vw, 0.95rem);
          line-height: 1.7;
          font-family: 'Poppins', sans-serif;
        }

        .date-text {
          font-size: clamp(0.7rem, 1.8vw, 0.85rem);
          font-weight: 700;
          font-family: 'Poppins', sans-serif;
        }

        @media (max-width: 600px) {
          .hero-row {
            flex-direction: column-reverse;   /* image on top on mobile */
            padding: 24px 16px 0;
          }
          .exp-date {
            flex: 0 0 100%;
            min-width: unset;
          }
          .exp-row {
            flex-direction: column;
          }
        }
      `}</style>

      <ThemeProvider>
        <Navbar sendTheme={receiveTheme} />

        <div
          style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 16px" }}
        >
          <div className="hero-row" id="home" style={{ marginTop: "70px" }}>
            <div className="hero-text">
              <p className="hero-title">
                Hello👋, My
                <br />
                Name is <strong className={style.colored}>Manar</strong>.
              </p>
              <p className="hero-subtitle">
                I'm an AI Engineer, Data Scientist, and Creative Web Developer
                👩‍💻.
              </p>
              <div className={style.btnsty}>
                <button
                  id="btn"
                  type="button"
                  onClick={SendEmail}
                  className={`${style.btn} ${
                    themeapply === "dark" ? style.darkbtn : style.lightbtn
                  }`}
                >
                  CONTACT ME
                </button>
              </div>
            </div>

            <div className="hero-image">
              <img
                className={`${style.avatar} ${
                  themeapply === "dark" ? style.darkavatar : style.lightavatar
                }`}
                src={avatar}
                alt="Manar avatar"
                style={{ maxWidth: "280px", width: "100%" }}
              />
            </div>
          </div>

          <div className="section-block" id="Skills">
            <Title text="Skills" id="Skills" />
            <SkillBadges />
          </div>

          <div className="section-block" id="about">
            <Title text="About" id="about" />
            <p className="about-text">
              I’m Manar Khamees, a Computer Science graduate from Umm Al Qura
              University with a strong passion for Artificial Intelligence, Data
              Science, and Machine Learning. Through intensive bootcamps,
              hands-on training programs, and self-driven learning, I’ve built
              practical experience in developing intelligent solutions and
              data-driven applications. I also earned the Huawei certification,
              strengthening my foundation in AI technologies and concepts.
            </p>
            <p className="about-text">
              My technical skill set includes Python, SQL, data analysis,
              machine learning, and web development tools. I’ve worked on
              projects involving predictive analytics, computer vision, and
              AI-powered applications, where I enjoy transforming data into
              meaningful insights and impactful solutions.
            </p>
            <p className="about-text">
              Beyond technology, I’m a curious and creative person who enjoys
              painting 🎨, reading 📖, and participating in hackathons 💻🥇. I’m
              always eager to learn new technologies, challenge myself, and grow
              as a developer and problem-solver.
            </p>
          </div>

          {/* ── Projects ── */}
          <div className="section-block" id="Projects">
            <Title text="Projects" id="Projects" />
            <CardGrid />
          </div>

          {/* ── Experiences ── */}
          <div className="section-block" id="Experiences">
            <Title text="Experiences" id="Experiences" />

            {/* Experience 1 */}
            <div className="exp-row">
              <div className="exp-date">
                <strong className="date-text">SEP 2023 – DEC 2023</strong>
              </div>
              <div className="exp-content">
                <p className="exp-text">
                  <strong>
                    Trainee at AI & Data Science SDAIA T5 Bootcamp
                    <br />
                    <span className={style.subtxt}>On Site - Riyadh</span>
                  </strong>
                </p>
                <p className="exp-text">
                  Worked on projects that mimic real-world business problems to
                  help apply these concepts: Predictive Analytics, Data Mining
                  and Analysis, ML Ops, AI, DL, Computer Vision, NLP, SQL, and
                  Introduction to NoSQL and MongoDB.
                </p>
                <SkillBadges
                  filter={[
                    "Python",
                    "SQL",
                    "Scikit-Learn",
                    "Pandas",
                    "NumPy",
                    "TensorFlow",
                    "Keras",
                  ]}
                />
              </div>
            </div>

            {/* Experience 2 */}
            <div className="exp-row">
              <div className="exp-date">
                <strong className="date-text">MAY 2021 – AUG 2021</strong>
              </div>
              <div className="exp-content">
                <p className="exp-text">
                  <strong>
                    Trainee at Saudi Digital Academy in Data Science & AI path
                    <br />
                    <span className={style.subtxt}>Online Training</span>
                  </strong>
                </p>
                <p className="exp-text">
                  Hands-on experience with R, Python, Machine Learning, Tableau,
                  Hadoop, Spark; Introduction to Artificial Intelligence, Data
                  Science with Python, Machine Learning, Deep Learning with
                  Keras and TensorFlow, Computer Vision, and NLP.
                </p>
                <SkillBadges
                  filter={[
                    "Python",
                    "TensorFlow",
                    "Keras",
                    "R",
                    "Tableau",
                    "PyTorch",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Home;
