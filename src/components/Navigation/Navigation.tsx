import Container from '../Container';
import Button from '../Button';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <Container>
        <div className={styles.navContainer}>
          <a href="/#" className={styles.navBrand}>
            Shortly
          </a>
          <div className={styles.navItemsContainer}>
            <ul className={styles.navList}>
              <li>
                <a href="/#" className={styles.navLink}>
                  Features
                </a>
              </li>
              <li>
                <a href="/#" className={styles.navLink}>
                  Pricing
                </a>
              </li>
              <li>
                <a href="/#" className={styles.navLink}>
                  Resources
                </a>
              </li>
            </ul>

            <div className={styles.navButtons}>
              <Button type="simple">Login</Button>
              <Button>Sign Up</Button>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navigation;
