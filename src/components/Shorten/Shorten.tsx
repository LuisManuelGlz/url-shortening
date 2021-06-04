import Container from '../Container';
import ShortenForm from '../ShortenForm';
import styles from './Shorten.module.css';

const Shorten = () => {
  return (
    <section className={styles.shortener}>
      <Container>
        <ShortenForm />
      </Container>
    </section>
  );
};

export default Shorten;
