import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./About.module.css";
import Container from "../../components/Container";
import Slide from "../../components/Slide";
import AboutMe from "../../components/AboutMe";

const About = () => {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.about}>
          <div className={styles.aboutContent}>
            <AboutMe className={styles.textAbout } />
            <div className={styles.slideContainer}>
              <Slide />
            </div>
          </div>
        </section>
      </Container>
      <Footer />
    </>
  );
};
export default About;
