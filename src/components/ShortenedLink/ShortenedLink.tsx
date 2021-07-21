import { useState } from 'react';
import Button from '../Button';
import styles from './ShortenedLink.module.css';

type Props = {
  originalLink: string;
  shortenedLink: string;
};

const ShortenedLink = ({ originalLink, shortenedLink }: Props) => {
  const [shortenedLinkCopied, setShortenedLinkCopied] = useState(false);

  const copyShortenedLink = () => {
    var tempTextarea = document.createElement('textarea');
    document.body.appendChild(tempTextarea);
    tempTextarea.value = shortenedLink;
    tempTextarea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextarea);

    setShortenedLinkCopied(true);
  };

  return (
    <div className={styles.container}>
      <a
        className={styles.originalLink}
        href={originalLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        {originalLink}
      </a>
      <div className={styles.divider} />
      <div className={styles.shortenedLinkContainer}>
        <a
          id="link-to-copy"
          className={styles.shortenedLink}
          href={shortenedLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {shortenedLink}
        </a>
        <Button
          type="square"
          className={`${
            shortenedLinkCopied ? styles.shortenedLinkCopied : undefined
          } ${styles.shortenedLinkButton}`}
          onClick={copyShortenedLink}
        >
          {shortenedLinkCopied ? 'Copied!' : 'Copy'}
        </Button>
      </div>
    </div>
  );
};

export default ShortenedLink;
