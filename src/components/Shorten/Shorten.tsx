import { ReactNode } from "react";
import Container from "../Container";
import styles from "./Shorten.module.css";

type Props = {
  children: ReactNode;
};

const Shorten = ({ children }: Props) => {
  return (
    <section className={styles.container}>
      <Container>{children}</Container>
    </section>
  );
};

export default Shorten;
