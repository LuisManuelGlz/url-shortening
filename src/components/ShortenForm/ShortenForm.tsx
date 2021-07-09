import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { shortenLink } from '../../api/bitlyAPI';
import Button from '../Button';
import ShortenedLink from '../ShortenedLink';
import styles from './ShortenForm.module.css';

const ShortenForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [isInputTouched, setIsInputTouched] = useState(false);
  const [isInputValid, setIsInputValid] = useState(true);
  const [shortenedLinks, setShortenedLinks] = useState<any[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsInputValid(true);

    shortenLink(inputValue)
      .then((response) => response.json())
      .then(({ link, errors }) => {
        if (errors) {
          setIsInputValid(false);
        } else {
          setInputValue('');
          const shortenedLinkInfo = {
            originalLink: inputValue,
            shortenedLink: link,
          };

          setShortenedLinks((oldShortenedLinks: any) => [
            shortenedLinkInfo,
            ...oldShortenedLinks,
          ]);

          localStorage.setItem(
            'shortenedLinks',
            JSON.stringify([shortenedLinkInfo, ...shortenedLinks])
          );
        }
      });
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

  useEffect(() => {
    const shortenedLinksString = localStorage.getItem('shortenedLinks');
    if (shortenedLinksString) {
      setShortenedLinks(JSON.parse(shortenedLinksString));
    }
  }, []);

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
      {shortenedLinks.map(({ originalLink, shortenedLink }, index) => (
        <ShortenedLink
          key={index}
          originalLink={originalLink}
          shortenedLink={shortenedLink}
        />
      ))}
    </>
  );
};

export default ShortenForm;
