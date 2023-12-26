import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Form from "../../components/Form";
import styles from "./Contact.module.css";

//import images
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";

//links socials
const githubProfileUrl = "https://github.com/MuriloSG";
const linkedinProfileUrl = "https://www.linkedin.com/in/murilo-santos-213856245/";

const Contact = () => {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.contact}>
          <div className={styles.contactText}>
            <h2>{"Let's"} Connect</h2>
            <p>
              {"I'm"} currently looking for new opportunities, my inbox is
              always open. Whether you have a question or just want to say hi,{" "}
              {"I'll"} try my best to get back to you!
            </p>
            <div className={styles.icons}>
              <figure>
                <a
                  href={githubProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} alt="github-link" />
                </a>
              </figure>
              <figure>
                <a
                  href={linkedinProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="linkedin-link" />
                </a>
              </figure>
            </div>
          </div>
          <div className={styles.contactForm}>
            <Form />
          </div>
        </section>
      </Container>
      <Footer />
    </>
  );
};
export default Contact;
