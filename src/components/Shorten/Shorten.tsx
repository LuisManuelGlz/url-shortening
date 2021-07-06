import Container from '../Container';
import ShortenForm from '../ShortenForm';
import BenefitImage from '../BenefitImage';
import styles from './Shorten.module.css';
import BenefitCard from '../BenefitCard';

const Shorten = () => {
  return (
    <section className={styles.shortener}>
      <Container>
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
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
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
      </Container>
    </section>
  );
};

export default Shorten;
