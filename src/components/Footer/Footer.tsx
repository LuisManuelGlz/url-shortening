import Container from '../Container';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <Container>
        <div className={styles.footerContainer}>
          <div>
            <a href="/#" className={styles.brand}>
              Shortly
            </a>
          </div>

          <div />

          <div>
            <h5>Features</h5>
            <a className={styles.footerLink} href="/#">
              Link Shortening
            </a>
            <a className={styles.footerLink} href="/#">
              Branded Links
            </a>
            <a className={styles.footerLink} href="/#">
              Analytics
            </a>
          </div>

          <div>
            <h5>Resources</h5>
            <a className={styles.footerLink} href="/#">
              Blog
            </a>
            <a className={styles.footerLink} href="/#">
              Developers
            </a>
            <a className={styles.footerLink} href="/#">
              Support
            </a>
          </div>

          <div>
            <h5>Company</h5>
            <a className={styles.footerLink} href="/#">
              About
            </a>
            <a className={styles.footerLink} href="/#">
              Our Team
            </a>
            <a className={styles.footerLink} href="/#">
              Careers
            </a>
            <a className={styles.footerLink} href="/#">
              Contact
            </a>
          </div>

          <div>
            <a className={styles.footerSocialLink} href="/#">
              <img src="./images/icon-facebook.svg" alt="Icon facebook" />
            </a>

            <a className={styles.footerSocialLink} href="/#">
              <img src="./images/icon-twitter.svg" alt="Icon twitter" />
            </a>

            <a className={styles.footerSocialLink} href="/#">
              <img src="./images/icon-pinterest.svg" alt="Icon pinterest" />
            </a>

            <a className={styles.footerSocialLink} href="/#">
              <img src="./images/icon-instagram.svg" alt="Icon instagram" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
