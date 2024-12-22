import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import style from "./Home.module.css";
import avatar from "./img/2d-image.png";
import Title from "../../components/Title/Title";
import Card from "../../components/Card/Card";
// icons
import logo from "./img/manar logo.png";
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
// videos
import medadvid from "./vid/medad.mov";
import salesvid from "./vid/Sales ds.mp4";
import astrovid from "./vid/Astro Boy.mp4";
import bikevid from "./vid/bikeshare.mp4";
import birdvid from "./vid/bird classify.mp4";
import turnovervid from "./vid/turnover data.mp4";
import marketvid from "./vid/market compains.mp4";
import sqlvid from "./vid/sql proj.mp4";
import hmhvid from "./vid/HmH vid.mp4";
import alanaavid from "./vid/Alanaa Website.mp4";
import cloackvid from "./vid/cloack vid.mp4";
// func
import { useRef, useState, useEffect } from "react";
// theme
import { ThemeProvider } from "../../components/ThemeContext";
const Home = () => {
  // theme
  const [themeapply, setThemeapply] = useState<string>("dark");
  const receiveTheme = (thm: string) => {
    setThemeapply(thm);
    setThemeapply((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };
  // card
  const [visibleCard, setVisibleCard] = useState<number>(0);
  const [textColor, setTextColor] = useState<boolean>(false);
  const handleCard = (block: number) => {
    setVisibleCard(block);
    setTextColor(true);
  };
  // vid
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const handleRef = (ref: HTMLVideoElement | null) => {
    videoRef.current = ref; // Update parent ref with child's ref
  };
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [visibleCard]);
  // send email
  const SendEmail = () => {
    const encodedSubject = encodeURIComponent("Hi, I wanna hire you 🎉");
    const mailtoLink = `mailto:manar_khamees@outlook.com?subject=${encodedSubject}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <ThemeProvider>
        <Navbar sendTheme={receiveTheme} />

        <div className="container">
          <div className="row align-items-center" id="home">
            <div className="row-9 mt-5">
              <br />
              <br />
            </div>
            <div className="col-lg col-xs-auto col-md-auto order-md-1 order-1 order-xs-2 d-flex justify-content-center ms-lg-5">
              <div>
                <p className={style.txt1}>
                  Hello👋, My
                  <br /> Name is{" "}
                  <strong className={style.colored}>Manar</strong>.
                </p>
                <p className={style.txt2}>
                  I'm an AI Engineer, Data Scientist, and
                  <br />
                  Creative Web Developer👩‍💻.
                </p>
                <div className={style.linecontainer}>
                  <div className={style.btnsty}>
                    <button
                      id="btn"
                      type="button"
                      value="CONTACT ME"
                      onClick={SendEmail}
                      className={`${style.btn} ${
                        themeapply === "dark" ? style.darkbtn : style.lightbtn
                      }`}
                    >
                      CONTACT ME
                    </button>
                  </div>
                  <div
                    className={`${style.staticline} ${
                      themeapply === "dark"
                        ? style.darkstaticline
                        : style.lightstaticline
                    }`}
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-lg  col-xs-auto col-md-auto order-md-2 order-lg-2 order-xs-1 d-flex justify-content-center">
              <img
                className={`${style.avatar} ${
                  themeapply === "dark" ? style.darkavatar : style.lightavatar
                }`}
                src={avatar}
              />
            </div>
          </div>

          <div className="row align-items-center">
            <div className="row-9">
              <Title text="About" id="about" />
            </div>
            <div className="col-3 col-xs-auto"></div>
            <div className="col-8 col-xs-auto">
              <p className={style.about}>
                My name is Manar Khamees, a recent graduate with a Bachelor’s
                degree in Computer Science from Umm Al Qura University. I have
                experience in AI, data science, and machine learning, gained
                through various boot-camps and training programs. I obtained an
                HCIA—AI certificate from Huawei.
              </p>
              <p className={style.about}>
                My technical skills include Python, SQL, and various data
                analysis and programming tools. I have completed projects
                involving predictive analytics, computer vision, and web
                development.
              </p>

              <p className={style.about}>
                In my free time, I usually paint 🎨, read 📖, participate in
                hackathons 💻🥇, and continuously seek to expand my knowledge in
                the tech field.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="row-9">
              <Title text="Projects" id="Projects" />
            </div>
            <div className="col-3 col-xs-auto">
              <div className="row justify-content-center">
                <div className="col-10">
                  <p className={style.projtitle}>Websites & Apps</p>
                </div>
                <div className="col-10">
                  <p
                    onClick={() => handleCard(1)}
                    className={style.projtxt}
                    style={{
                      cursor: "pointer",
                      color:
                        textColor && visibleCard === 1
                          ? "#86FFBD"
                          : style[themeapply],
                    }}
                  >
                    Medad Website 🖊️
                  </p>
                </div>
                <div className="col-10">
                  <p
                    onClick={() => handleCard(9)}
                    className={style.projtxt}
                    style={{
                      cursor: "pointer",
                      color:
                        textColor && visibleCard === 9
                          ? "#86FFBD"
                          : style[themeapply],
                    }}
                  >
                    Alanaa Website 👥
                  </p>
                </div>
                <div className="col-10">
                  <p
                    onClick={() => handleCard(10)}
                    className={style.projtxt}
                    style={{
                      cursor: "pointer",
                      color:
                        textColor && visibleCard === 10
                          ? "#86FFBD"
                          : style[themeapply],
                    }}
                  >
                    Hold My Hand App 📱
                  </p>
                </div>
                <div className="col-10">
                  <p className={style.projtitle}>AI & DS Projects</p>
                </div>
                <div className="col-10">
                  <p
                    onClick={() => handleCard(2)}
                    className={style.projtxt}
                    style={{
                      cursor: "pointer",
                      color:
                        textColor && visibleCard === 2
                          ? "#86FFBD"
                          : style[themeapply],
                    }}
                  >
                    Sales Analysis Project 📊
                  </p>
                </div>
                <div className="col-10">
                  <p
                    onClick={() => handleCard(5)}
                    className={style.projtxt}
                    style={{
                      cursor: "pointer",
                      color:
                        textColor && visibleCard === 5
                          ? "#86FFBD"
                          : style[themeapply],
                    }}
                  >
                    Birds Classification 🐦
                  </p>
                </div>
                <div className="col-10">
                  <p
                    onClick={() => handleCard(11)}
                    className={style.projtxt}
                    style={{
                      cursor: "pointer",
                      color:
                        textColor && visibleCard === 11
                          ? "#86FFBD"
                          : style[themeapply],
                    }}
                  >
                    Invisibility Cloak 🧙‍♂️
                  </p>
                </div>
                <div className="col-10">
                  <p
                    onClick={() => handleCard(6)}
                    className={style.projtxt}
                    style={{
                      cursor: "pointer",
                      color:
                        textColor && visibleCard === 6
                          ? "#86FFBD"
                          : style[themeapply],
                    }}
                  >
                    Predicting Employee Turnover 📈
                  </p>
                </div>
                <div className="col-10">
                  <p
                    onClick={() => handleCard(7)}
                    className={style.projtxt}
                    style={{
                      cursor: "pointer",
                      color:
                        textColor && visibleCard === 7
                          ? "#86FFBD"
                          : style[themeapply],
                    }}
                  >
                    Marketing Campaigns 🛍️
                  </p>
                </div>
                <div className="col-10">
                  <p
                    onClick={() => handleCard(8)}
                    className={style.projtxt}
                    style={{
                      cursor: "pointer",
                      color:
                        textColor && visibleCard === 8
                          ? "#86FFBD"
                          : style[themeapply],
                    }}
                  >
                    ScienceQtech Employees 🏢
                  </p>
                </div>

                <div className="col-10">
                  <p
                    onClick={() => handleCard(4)}
                    className={style.projtxt}
                    style={{
                      cursor: "pointer",
                      color:
                        textColor && visibleCard === 4
                          ? "#86FFBD"
                          : style[themeapply],
                    }}
                  >
                    Explore US Bikeshare Data 🚲
                  </p>
                </div>
                <div className="col-10">
                  <p className={style.projtitle}>Others</p>
                </div>
                <div className="col-10">
                  <p
                    onClick={() => handleCard(3)}
                    className={style.projtxt}
                    style={{
                      cursor: "pointer",
                      color:
                        textColor && visibleCard === 3
                          ? "#86FFBD"
                          : style[themeapply],
                    }}
                  >
                    Astro Boy 2d Scene 🤖
                  </p>
                </div>
              </div>
            </div>

            <div className="col col-lg-6 col-xs-auto mx-auto">
              {visibleCard === 0 && (
                <div>
                  <div className="col col-xs-auto">
                    <div className="col p-2 p-lg-4 m-3 m-lg-4">
                      <p
                        style={{
                          border:
                            themeapply === "dark"
                              ? "3px solid #86FFBD"
                              : "3px solid #000",
                          padding: "30px",
                          borderRadius: "20px",
                        }}
                      >
                        Click on the project name,
                        <br />
                        please!✨
                        <img
                          src={logo}
                          alt="Home"
                          width={55}
                          height={40}
                          className={style.logostyle}
                        />
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {visibleCard === 9 && (
                <div>
                  <Card
                    title="Alanaa Website 👥"
                    description="Alanaa is a website designed to help supervisors manage trainee
                     data by enabling them to view, add, modify, and delete information 
                     about trainees."
                    video={alanaavid}
                    link="https://github.com/Manar-k"
                    onRef={handleRef}
                  />
                  <div
                    className="row row-cols-3 row-cols-lg-5 g-4 mx-auto g-lg-3"
                    style={{ pointerEvents: "none" }}
                  >
                    <div className="col-xs col-lg-3 m-3">
                      <Button
                        text="HTML"
                        width="112px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={html}
                      />
                    </div>
                    <div className="col-xs col-lg-3 m-3">
                      <Button
                        text="CSS"
                        width="112px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={css}
                      />
                    </div>
                    <div className="col-xs col-lg-3 m-3">
                      <Button
                        text="JAVASCRIPT"
                        width="118px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={jsimg}
                      />
                    </div>
                    <div className="col-xs col-lg-3 m-3">
                      <Button
                        text="PHP"
                        width="112px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={php}
                      />
                    </div>
                    <div className="col-xs col-lg-3 m-3">
                      <Button
                        text="PHPMYADMIN"
                        width="132px"
                        height="31px"
                        display="none"
                        txtsize="12px"
                      />
                    </div>
                  </div>
                </div>
              )}
              {visibleCard === 10 && (
                <div>
                  <Card
                    title="Hold My Hand App 📱"
                    description="Hold My Hand is an IOS iPad application designed and 
                    implemented to help kids with autism express their feelings and 
                    learn how to communicate with others through simple story cards, 
                    playing audio, and matching images with words game."
                    video={hmhvid}
                    link="https://github.com/Manar-k/Hold-My-Hand-App"
                    onRef={handleRef}
                  />
                  <div
                    className="row row-cols-3 row-cols-lg-5 g-4 mx-auto g-lg-3"
                    style={{ pointerEvents: "none" }}
                  >
                    <div className="col-xs col-lg-3 m-3">
                      <Button
                        text="SWIFT"
                        width="112px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={swift}
                      />
                    </div>
                    <div className="col-xs col-lg-3 m-3">
                      <Button
                        text="XCODE"
                        width="112px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={xcode}
                      />
                    </div>
                    <div className="col-xs col-lg-3 m-3">
                      <Button
                        text="FIREBASE"
                        width="112px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={firebase}
                      />
                    </div>
                    <div className="col-xs col-lg-3 m-3">
                      <Button
                        text="ADOBE"
                        width="112px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={adobeI}
                      />
                    </div>
                  </div>
                </div>
              )}
              {visibleCard === 1 && (
                <div>
                  <Card
                    title="Medad Website 🖋️"
                    description="Medad is a website that promotes the culture of Arabic
                    calligraphy arts. Medad offers AI services, including Font
                    Classification, Arabic OCR (Extract Text from Image), and
                    Change Text Font."
                    video={medadvid}
                    link="https://github.com/Manar-k/T5-Capstone-Project-Medad"
                    onRef={handleRef}
                  />
                  <div
                    className="row row-cols-3 row-cols-lg-5 g-4 mx-auto g-lg-3"
                    style={{ pointerEvents: "none" }}
                  >
                    <div className="col-xs col-lg-3 m-3">
                      <Button
                        text="PYTHON"
                        width="112px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={python}
                      />
                    </div>
                    <div className="col-xs col-lg-3 m-3">
                      <Button
                        text="FLASK"
                        width="112px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={flask}
                      />
                    </div>
                    <div className="col-xs col-lg-3 m-3">
                      <Button
                        text="TENSORFLOW"
                        width="124px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={tensor}
                      />
                    </div>
                    <div className="col-xs col-lg-3 m-3 ms-lg-3 ms-4 m-xs-3">
                      <Button
                        text="KERAS"
                        width="112px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={keras}
                      />
                    </div>
                    <div className="col-xs col-lg-3 m-3">
                      <Button
                        text="NUMPY"
                        width="112px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={numpy}
                      />
                    </div>
                    <div className="col-xs col-lg-3 m-3">
                      <Button
                        text="PANDAS"
                        width="112px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={pandas}
                      />
                    </div>
                  </div>
                </div>
              )}
              {/* sales */}
              {visibleCard === 2 && (
                <div>
                  <Card
                    title="Sales Analysis 📊"
                    description="AAL is a popular clothing brand in Australia. 
                    To support its growth, the CEO has asked to analyze its data. 
                    As a data scientist, I cleaned and prepared the data, analyzed sales trends,
                     and created visualizations to present the findings."
                    video={salesvid}
                    link="https://github.com/Manar-k/SDAIA-T5-Bootcamp-AI-and-Data-Science/blob/main/3-Applied%20Data%20Science%20with%20Python/Project%201-Sales%20Analysis%20for%20AAL%20Clothing/Group_2%20(1).ipynb"
                    onRef={handleRef}
                  />
                  <div
                    className="row row-cols-3 row-cols-lg-5 g-4 mx-auto g-lg-3"
                    style={{ pointerEvents: "none" }}
                  >
                    <div className="col-xs col-lg-3 m-3">
                      <Button
                        text="PYTHON"
                        width="112px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={python}
                      />
                    </div>
                    <div className="col-xs col-lg-3 m-3">
                      <Button
                        text="MATPLOTLIB"
                        width="124px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={matplotlib}
                      />
                    </div>
                    <div className="col-xs col-lg-3 m-3">
                      <Button
                        text="NUMPY"
                        width="112px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={numpy}
                      />
                    </div>
                    <div className="col-xs col-lg-3 m-3">
                      <Button
                        text="PANDAS"
                        width="112px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={pandas}
                      />
                    </div>
                  </div>
                </div>
              )}
              {visibleCard === 3 && (
                <div>
                  <Card
                    title="Astro Boy 2d Scene 🤖"
                    description="I created a 2D scene featuring Astro Boy's face in three expressions:
                     happy, sad, and surprised. and control its movements along the X, Y, 
                     and Z axes."
                    video={astrovid}
                    link="https://github.com/Manar-k/OpenGL_2d_scene_Astro-Boy"
                    onRef={handleRef}
                  />
                  <div
                    className="row row-cols-3 row-cols-lg-5 g-4 mx-auto g-lg-3"
                    style={{ pointerEvents: "none" }}
                  >
                    <div className="col-xs col-lg-3 m-3">
                      <Button
                        text="C++"
                        width="112px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={cplus2}
                      />
                    </div>
                    <div className="col-xs col-lg-3 m-3">
                      <Button
                        text="OPENGL"
                        width="112px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={opengl}
                      />
                    </div>
                    <div className="col-xs col-lg-3 m-3">
                      <Button
                        text="VISUAL STUDIO"
                        width="132px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={visual}
                      />
                    </div>
                  </div>
                </div>
              )}
              {visibleCard === 4 && (
                <div>
                  <Card
                    title="Explore US Bikeshare Data 🚲"
                    description="I analyzed bike-share data from three major U.S. cities 
                    to compute descriptive statistics that uncover usage patterns and 
                    created an interactive terminal experience to present these statistics 
                    by taking input from the user."
                    video={bikevid}
                    link="https://github.com/Manar-k/Explore-US-Bikeshare-Data"
                    onRef={handleRef}
                  />
                  <div
                    className="row row-cols-3 row-cols-lg-5 g-4 mx-auto g-lg-3"
                    style={{ pointerEvents: "none" }}
                  >
                    <div className="col-xs col-lg-3 m-3">
                      <Button
                        text="PYTHON"
                        width="112px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={python}
                      />
                    </div>
                    <div className="col-xs col-lg-3 m-3">
                      <Button
                        text="TERMINAL"
                        width="112px"
                        height="31px"
                        display="none"
                        txtsize="12px"
                      />
                    </div>
                  </div>
                </div>
              )}
              {visibleCard === 5 && (
                <div>
                  <Card
                    title="Birds Classification 🐦"
                    description="I classified birds into 20 categories by training a model using a deep learning CNN."
                    video={birdvid}
                    link="https://github.com/Manar-k/SDAIA-T5-Bootcamp-AI-and-Data-Science/blob/main/5-Deep%20Learning%20Specialisation/Birds_classification.ipynb"
                    onRef={handleRef}
                  />
                  <div
                    className="row row-cols-3 row-cols-lg-5 g-4 mx-auto g-lg-3"
                    style={{ pointerEvents: "none" }}
                  >
                    <div className="col-xs col-lg-3 m-3">
                      <Button
                        text="PYTHON"
                        width="112px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={python}
                      />
                    </div>
                    <div className="col-xs col-lg-3 m-3">
                      <Button
                        text="KERAS"
                        width="112px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={keras}
                      />
                    </div>
                    <div className="col-xs col-lg-3 m-3">
                      <Button
                        text="NUMPY"
                        width="112px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={numpy}
                      />
                    </div>
                    <div className="col-xs col-lg-3 m-3">
                      <Button
                        text="MATPLOTLIB"
                        width="124px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={matplotlib}
                      />
                    </div>
                  </div>
                </div>
              )}
              {visibleCard === 6 && (
                <div>
                  <Card
                    title="Predicting Employee Turnover 📈"
                    description="Portobello Tech is an app innovator focused on predicting employee
                     turnover. As an ML Developer, I checked data quality, conducted exploratory 
                     data analysis, implemented clustering, addressed class imbalance using 
                     the SMOTE technique, and predicted employee turnover."
                    video={turnovervid}
                    link="https://github.com/Manar-k/SDAIA-T5-Bootcamp-AI-and-Data-Science/blob/main/4%20-Machine%20Learning/Project1_Employee_Turnover-tryG6-2.ipynb"
                    onRef={handleRef}
                  />
                  <div
                    className="row row-cols-3 row-cols-lg-5 g-4 mx-auto g-lg-3"
                    style={{ pointerEvents: "none" }}
                  >
                    <div className="col-xs col-lg-3 m-3">
                      <Button
                        text="PYTHON"
                        width="112px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={python}
                      />
                    </div>
                    <div className="col-xs col-lg-3 m-3">
                      <Button
                        text="SCIKIT-LEARN"
                        width="124px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={scikit}
                      />
                    </div>
                    <div className="col-xs col-lg-3 m-3">
                      <Button
                        text="PANDAS"
                        width="112px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={pandas}
                      />
                    </div>
                    <div className="col-xs col-lg-3 m-3">
                      <Button
                        text="NUMPY"
                        width="112px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={numpy}
                      />
                    </div>
                    <div className="col-xs col-lg-3 m-3">
                      <Button
                        text="MATPLOTLIB"
                        width="124px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={matplotlib}
                      />
                    </div>
                  </div>
                </div>
              )}
              {visibleCard === 11 && (
                <div>
                  <Card
                    title="Invisibility Cloak 🧙‍♂️"
                    description="I created a Harry Potter's invisible cloak using an image processing technique 
                    called Color detection and segmentation. By (red) color detection, any object behind the 
                    scene will be invisible."
                    video={cloackvid}
                    link="https://github.com/Manar-k"
                    onRef={handleRef}
                  />
                  <div
                    className="row row-cols-3 row-cols-lg-5 g-4 mx-auto g-lg-3"
                    style={{ pointerEvents: "none" }}
                  >
                    <div className="col-xs col-lg-3 m-3">
                      <Button
                        text="PYTHON"
                        width="112px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={python}
                      />
                    </div>
                    <div className="col-xs col-lg-3 m-3">
                      <Button
                        text="OPENCV"
                        width="112px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={opencv}
                      />
                    </div>
                    <div className="col-xs col-lg-3 m-3">
                      <Button
                        text="NUMPY"
                        width="112px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={numpy}
                      />
                    </div>
                  </div>
                </div>
              )}
              {visibleCard === 7 && (
                <div>
                  <Card
                    title="Marketing Campaigns 🛍️"
                    description="I analyzed marketing campaigns to understand what drives customer
                     acquisition. As a data scientist, I prepared the data, explored it to identify
                      trends, patterns, and relationships among the variables, and conducted 
                      hypothesis testing to validate assumptions and insights."
                    video={marketvid}
                    link="https://github.com/Manar-k/SDAIA-T5-Bootcamp-AI-and-Data-Science/blob/main/3-Applied%20Data%20Science%20with%20Python/Project%202-Marketing_Campaign/Marketing_Campaign-G6.ipynb"
                    onRef={handleRef}
                  />
                  <div
                    className="row row-cols-3 row-cols-lg-5 g-4 mx-auto g-lg-3"
                    style={{ pointerEvents: "none" }}
                  >
                    <div className="col-xs col-lg-3 m-3">
                      <Button
                        text="PYTHON"
                        width="112px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={python}
                      />
                    </div>
                    <div className="col-xs col-lg-3 m-3">
                      <Button
                        text="MATPLOTLIB"
                        width="124px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={matplotlib}
                      />
                    </div>
                    <div className="col-xs col-lg-3 m-3">
                      <Button
                        text="NUMPY"
                        width="112px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={numpy}
                      />
                    </div>
                    <div className="col-xs col-lg-3 m-3">
                      <Button
                        text="PANDAS"
                        width="112px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={pandas}
                      />
                    </div>
                  </div>
                </div>
              )}
              {visibleCard === 8 && (
                <div>
                  <Card
                    title="ScienceQtech Employees 🏢"
                    description="ScienceQtech is a data science startup involved in various projects.
                    The HR department has requested reports on employee details and performance. 
                    As a Database Administrator, I analyzed the employee database."
                    video={sqlvid}
                    link="https://github.com/Manar-k/SDAIA-T5-Bootcamp-AI-and-Data-Science/blob/main/1-SQL%20Training/SQL_Course-end_Project1_Manar_Khamis.pdf"
                    onRef={handleRef}
                  />
                  <div
                    className="row row-cols-3 row-cols-lg-5 g-4 mx-auto g-lg-3"
                    style={{ pointerEvents: "none" }}
                  >
                    <div className="col-xs col-lg-3 m-3">
                      <Button
                        text="SQL"
                        width="112px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={sql}
                      />
                    </div>

                    <div className="col-xs col-lg-3 m-3">
                      <Button
                        text="ER DIAGRAM"
                        width="112px"
                        height="31px"
                        display="none"
                        txtsize="12px"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="row">
            <div className="row-9">
              <Title text="Experiences" id="Experiences" />
            </div>

            <div className="row">
              <div className="col-3">
                <div className="row mt-3 d-flex justify-content-center">
                  <div className="col-10 col-xs-auto">
                    <strong className={style.txtdt}>SEP 2023 – DES 2023</strong>
                  </div>
                  <div className="col-1 col-xs-auto">
                    <div
                      className={`${style.dot} ${
                        themeapply === "dark" ? style.darkdot : style.lightdot
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="col-8 col-xs-auto">
                <div className={style.txtexp}>
                  <strong>
                    Trainee at AI & Data Science SDAIA T5 Bootcamp
                    <br />
                    <span className={style.subtxt}>On Site - Riyadh</span>
                  </strong>
                  <br /> <br />
                  Worked on projects that mimic real-world business problems to
                  help apply these concepts Predictive Analytics, Data Mining
                  and Analysis, ML Ops, AI, DL, Computer Vision, NLP, SQL, and
                  Introduction to NoSQL and MongoDB.
                  <div
                    className="row gap-3 mt-2 "
                    style={{ pointerEvents: "none", textAlign: "center" }}
                  >
                    <div className="col-xs col-lg-2">
                      <Button
                        text="PYTHON"
                        width="112px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={python}
                      />
                    </div>
                    <div className="col-xs col-lg-2">
                      <Button
                        text="SQL"
                        width="112px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={sql}
                      />
                    </div>
                    <div className="col-xs col-lg-2">
                      <Button
                        text="PANDAS"
                        width="112px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={pandas}
                      />
                    </div>
                    <div className="col-xs col-lg-2">
                      <Button
                        text="NUMPY"
                        width="112px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={numpy}
                      />
                    </div>
                    <div className="col-xs col-lg-2">
                      <Button
                        text="TENSORFLOW"
                        width="124px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={tensor}
                      />
                    </div>
                    <div className="col-xs col-lg-2">
                      <Button
                        text="KERAS"
                        width="112px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={keras}
                      />
                    </div>
                    <div className="col-xs col-lg-2">
                      <Button
                        text="SCIKIT-LEARN"
                        width="124px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={scikit}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-3">
                <div className="row mt-3 d-flex justify-content-center">
                  <div className="col-10 col-xs-auto">
                    <p>
                      <strong className={style.txtdt2}>
                        MAY 2021 – AUG 2021
                      </strong>
                    </p>
                  </div>
                  <div className="col-1 col-xs-auto">
                    <div
                      className={`${style.dot} ${
                        themeapply === "dark" ? style.darkdot : style.lightdot
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="col-8 col-xs-auto">
                <div className={style.txtexp}>
                  <strong>
                    Trainee at Saudi Digital Academy in Data Science & AI path
                    <br />
                    <span className={style.subtxt}>Online Training</span>
                  </strong>
                  <br /> <br />
                  Hands-on experience with R, Python, Machine Learning, Tableau,
                  Hadoop, Spark; Introduction to Artificial Intelligence, Data
                  Science with Python, Machine Learning, Deep Learning with
                  Keras and Tensorflow, Computer Vision, and NLP.
                  <div
                    className="row gap-3 mt-2"
                    style={{ pointerEvents: "none", textAlign: "center" }}
                  >
                    <div className="col-xs col-lg-2">
                      <Button
                        text="PYTHON"
                        width="112px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={python}
                      />
                    </div>
                    <div className="col-xs col-lg-2">
                      <Button
                        text="R Language"
                        width="112px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={r}
                      />
                    </div>
                    <div className="col-xs col-lg-2">
                      <Button
                        text="TABLEAU"
                        width="112px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={tableau}
                      />
                    </div>

                    <div className="col-xs col-lg-2">
                      <Button
                        text="KERAS"
                        width="112px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={keras}
                      />
                    </div>
                    <div className="col-xs col-lg-2">
                      <Button
                        text="PYTORCH"
                        width="112px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={pytorch}
                      />
                    </div>
                    <div className="col-xs col-lg-2">
                      <Button
                        text="TENSORFLOW"
                        width="124px"
                        height="31px"
                        display="block"
                        txtsize="12px"
                        image={tensor}
                      />
                    </div>
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
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
