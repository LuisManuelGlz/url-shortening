import { ReactNode } from 'react';
import Container from '../Container';
import styles from './Boost.module.css';

type Props = {
  children: ReactNode;
};

const Boost = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.boostImage}
        src="./images/bg-boost-desktop.svg"
        alt="bg boost"
      />
      <img
        className={styles.boostImageMobile}
        src="./images/bg-boost-mobile.svg"
        alt="bg boost"
      />
      <Container>{children}</Container>
    </div>
  );
};

export default Boost;
