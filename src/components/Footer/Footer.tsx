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

          <div className={styles.footerDivider} />

          <div>
            <h5 className={styles.footerListTitle}>Features</h5>
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
            <h5 className={styles.footerListTitle}>Resources</h5>
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
            <h5 className={styles.footerListTitle}>Company</h5>
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

          <div className={styles.footerSocialList}>
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
        <div className={styles.attribution}>
          Challenge by{' '}
          <a
            href="https://www.frontendmentor.io/solutions/url-shortening-api-landing-page-react-and-typescript-Hg17fAVCI"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{' '}
          <a
            href="https://github.com/LuisManuelGlz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Luis Manuel González
          </a>
          .
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
