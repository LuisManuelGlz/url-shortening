import styles from './BenefitImage.module.css';

type Props = {
  src: string;
  alt: string;
};

const BenefitImage = ({ src, alt }: Props) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={src} alt={alt} width="40" />
    </div>
  );
};

export default BenefitImage;
