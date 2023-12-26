import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from './Page404.module.css'

const Page404 = () => {
  return (
    <>
      <Header />
      <Container>
        <h2 className={styles.titleTwo}>PAGE NOT FOUND</h2>
        <div className={styles.texts}>
          <span className={styles.statusCode}>404</span>
        </div>
      </Container>
      <Footer />
    </>
  );
}
export default Page404;
