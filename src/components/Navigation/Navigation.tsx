import Container from '../Container';
import Button from '../Button';
import Modal from 'react-modal';
import Hamburger from 'hamburger-react';
import styles from './Navigation.module.css';
import { useEffect, useState } from 'react';

const Navigation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;
      innerWidth > 992 && setIsModalOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

          <div className={styles.navHamburger}>
            <Hamburger
              size={25}
              color={'#9e9aa7'}
              toggled={isModalOpen}
              toggle={setIsModalOpen}
            />
          </div>
        </div>
        <Modal
          className={styles.navModal}
          overlayClassName={styles.navModalOverlay}
          isOpen={isModalOpen}
          onRequestClose={toggleModal}
          ariaHideApp={false}
          shouldCloseOnOverlayClick={true}
          contentLabel="Nav Modal"
        >
          <div className={styles.modalContainer}>
            <a href="/#" onClick={toggleModal}>
              Features
            </a>
            <a href="/#" onClick={toggleModal}>
              Pricing
            </a>
            <a href="/#" onClick={toggleModal}>
              Resources
            </a>

            <hr className={styles.modalDivider} />

            <a href="/#" onClick={toggleModal}>
              Login
            </a>

            <Button className={styles.modalButton} onClick={toggleModal}>
              Sign Up
            </Button>
          </div>
        </Modal>
      </Container>
    </nav>
  );
};

export default Navigation;
