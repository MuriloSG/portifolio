import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.home}>
          <div className={styles.presentation}>
            <p>
              Hello, {"I'm"}
              <br />
              <span>Murilo Santos</span> <br />
              Back-End developer
            </p>
            <Link to="/about" className={`${styles.btn} ${styles.btn_yellow}`}>
              ABOUT-ME
            </Link>
          </div>

          <figure>
            <img
              className={styles.img_home}
              src="/img-home.svg"
              alt="imagem-home"
            />
          </figure>
        </section>
      </Container>
      <Footer />
    </>
  );
};
export default Home;
