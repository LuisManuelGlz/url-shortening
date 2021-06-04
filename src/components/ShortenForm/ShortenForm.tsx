import React from 'react';
import Button from '../Button';
import styles from './ShortenForm.module.css';

const ShortenForm = () => {
  return (
    <form className={styles.shortenerForm}>
      <img
        className={styles.formImage}
        src="./images/bg-shorten-desktop.svg"
        alt="bg shorten"
      />
      <input
        type="text"
        className={styles.formInput}
        placeholder="Shorten a link here..."
      />
      <Button type="square" large className={styles.formButton}>
        Shorten it!
      </Button>
    </form>
  );
};

export default ShortenForm;
