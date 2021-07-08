import { useState, FormEvent, ChangeEvent } from 'react';
import Button from '../Button';
import ShortenedLink from '../ShortenedLink';
import styles from './ShortenForm.module.css';

const ShortenForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [isInputTouched, setIsInputTouched] = useState(false);
  const [isInputValid, setIsInputValid] = useState(true);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(inputValue);
  };

  const handleInputChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setIsInputTouched(true);
    setInputValue(value);

    if (value === '') {
      setIsInputValid(false);
    } else {
      setIsInputValid(true);
    }
  };

  return (
    <>
      <form className={styles.shortenerForm} onSubmit={handleSubmit}>
        <img
          className={styles.formImage}
          src="./images/bg-shorten-desktop.svg"
          alt="bg shorten"
        />
        <div className={styles.formInputContainer}>
          <input
            type="url"
            className={`${styles.formInput} ${
              isInputTouched && !isInputValid && styles.formInputInvalid
            }`}
            placeholder="Shorten a link here..."
            onChange={handleInputChange}
            value={inputValue}
            required
          />
          <span
            className={`${styles.formInputErrorMessage} ${
              isInputValid && styles.formInputErrorMessageHidden
            }`}
          >
            Please add a link
          </span>
        </div>
        <Button type="square" large>
          Shorten it!
        </Button>
      </form>
      <ShortenedLink
        originalLink="www.example.com"
        shortenedLink="www.example.com"
      />
    </>
  );
};

export default ShortenForm;
