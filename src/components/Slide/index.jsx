import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Slide.module.css";
import { EffectCards, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// Import Images
import cImage from "../../assets/C.svg";
import expressImage from "../../assets/express.js.svg";
import gitImage from "../../assets/git.svg";
import githubImage from "../../assets/github.svg";
import javaImage from "../../assets/java.svg";
import mongoDbImage from "../../assets/mongo.db.svg";
import nodeJsImage from "../../assets/node.js.svg";
import postgresqlImage from "../../assets/postgresql.svg";
import sqlImage from "../../assets/sql.svg";
import typescriptImage from "../../assets/typescript.svg";
import javascript from "../../assets/javascript.svg";
import react from "../../assets/react.svg";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";

const Slide = () => {
  const data = [
    {
      id: "1",
      image: cImage,
      title: "C Language",
    },
    {
      id: "2",
      image: javaImage,
      title: "Java",
    },
    {
      id: "3",
      image: javascript,
      title: "JavaScript",
    },
    {
      id: "4",
      image: html,
      title: "HTML",
    },
    {
      id: "5",
      image: css,
      title: "CSS",
    },
    {
      id: "6",
      image: react,
      title: "React",
    },
    {
      id: "7",
      image: nodeJsImage,
      title: "Node.js",
    },
    {
      id: "8",
      image: expressImage,
      title: "Express",
    },
    {
      id: "9",
      image: typescriptImage,
      title: "TypeScript",
    },
    {
      id: "10",
      image: mongoDbImage,
      title: "MongoDB",
    },
    {
      id: "11",
      image: postgresqlImage,
      title: "PostgreSQL",
    },
    {
      id: "12",
      image: sqlImage,
      title: "SQL",
    },
    {
      id: "13",
      image: gitImage,
      title: "Git",
    },
    {
      id: "14",
      image: githubImage,
      title: "GitHub",
    },
  ];

  return (
    <>
      <div className={styles.slide}>
        <Swiper
          effect="cards"
          grabCursor={true}
          centeredSlides={true}
          modules={[EffectCards, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className={styles.myswiper}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id} className={styles.swiperSlide}>
              <div className={styles.card}>
                <figure className={styles.cicle}>
                  <img src={item.image} alt="" className={styles.img} />
                </figure>
                <section className={styles.text}>
                  <h2 className={styles.title}>{item.title}</h2>
                </section>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
export default Slide;
