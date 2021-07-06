import Layout from './components/Layout';
import Container from './components/Container';
import Shorten from './components/Shorten';
import Button from './components/Button';
import styles from './App.module.css';

const App = () => {
  return (
    <div>
      <Layout>
        {/* Showcase */}
        <section className={styles.showcase}>
          <Container>
            <img
              className={styles.showcaseImage}
              src="images/illustration-working.svg"
              alt="Illustration Working"
            />
            <div>
              <h2 className={styles.showcaseIntro}>
                More than just
                <br />
                shorter links
              </h2>
              <p className={styles.showcaseDescription}>
                Build your brand's recognition and get detailed insights on how
                your links are performing.
              </p>
              <Button large>Get Started</Button>
            </div>
          </Container>
        </section>

        {/* Shorten */}
        <Shorten />

        {/* Boost */}
        <div className={styles.boost}>
          <img
            className={styles.boostImage}
            src="./images/bg-boost-desktop.svg"
            alt="bg boost"
          />
          <Container>
            <h4 className={styles.boostText}>Boost your links today</h4>
            <Button large>Get Started</Button>
          </Container>
        </div>
      </Layout>
    </div>
  );
};

export default App;
