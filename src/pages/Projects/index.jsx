import styles from "./Project.module.css";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";

const Projects = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const searchRepositories = async () => {
      const response = await fetch(
        "https://api.github.com/users/MuriloSg/repos"
      );

      const data = await response.json();

      //Filter on repositories.
      const filteredRepositories = data.filter((repo) =>
        repo.name.includes("API")
      );

      setRepositories(filteredRepositories);
    };
    searchRepositories();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <div className={styles.projectContainer}>
          <section className={styles.projectTitle}>
            <h2>PROJECTS</h2>
          </section>

          {repositories.length > 0 ? (
            <section className={styles.projectCard}>
              {repositories.map((repo) => (
                <Card
                  key={repo.id}
                  title={repo.name}
                  decription={repo.description}
                  htmlUrl={repo.html_url}
                />
              ))}
            </section>
          ) : (
            <span className={styles.projectLoading}>
              <Loading text="Loading repositories."  textBool={true}/>{" "}
            </span>
          )}
        </div>
      </Container>
      <Footer />
    </>
  );
};
export default Projects;
