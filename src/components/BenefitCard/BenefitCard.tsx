import { ReactNode, HTMLAttributes } from 'react';
import styles from './BenefitCard.module.css';

type Props = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const BenefitCard = ({ children, className, ...rest }: Props) => {
  let benefitCardClassName = `${styles.container} ${className}`;

  return (
    <div className={benefitCardClassName} {...rest}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default BenefitCard;
