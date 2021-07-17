import Layout from "./components/Layout";
import Container from "./components/Container";
import Shorten from "./components/Shorten";
import Button from "./components/Button";
import ShortenForm from "./components/ShortenForm";
import BenefitImage from "./components/BenefitImage";
import BenefitCard from "./components/BenefitCard";
import styles from "./App.module.css";
import Boost from "./components/Boost";

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
        <Shorten>
          <ShortenForm />

          <h3 className={styles.shortenerHeaderTitle}>Advanced Statistics</h3>
          <p className={styles.shortenerHeaderDescription}>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>

          <div className={styles.benefitsContainer}>
            <div className={styles.horizontalLine} />
            <BenefitCard>
              <BenefitImage
                src="./images/icon-brand-recognition.svg"
                alt="Brand Recognition"
              />
              <h4>Brand Recognition</h4>
              <p>
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </BenefitCard>

            <BenefitCard className={styles.secondBenefitCard}>
              <BenefitImage
                src="./images/icon-detailed-records.svg"
                alt="Detailed Records"
              />

              <h4>Detailed Records</h4>
              <p>
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </BenefitCard>

            <BenefitCard className={styles.thirdBenefitCard}>
              <BenefitImage
                src="./images/icon-fully-customizable.svg"
                alt="Fully Customizable"
              />
              <h4>Fully Customizable</h4>
              <p>
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </BenefitCard>
          </div>
        </Shorten>

        {/* Boost */}
        <Boost>
          <h4 className={styles.boostText}>Boost your links today</h4>
          <Button large>Get Started</Button>
        </Boost>
      </Layout>
    </div>
  );
};

export default App;
