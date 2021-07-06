import { ReactNode, HTMLAttributes } from 'react';

import styles from './Button.module.css';

type Props = {
  children?: ReactNode;
  type?: 'pill' | 'square' | 'simple';
  large?: boolean;
} & HTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  type = 'pill',
  large,
  ...rest
}: Props) => {
  let buttonClassName = `${styles.button} ${styles[type]} ${
    large && styles.large
  }`;

  return (
    <button className={buttonClassName} {...rest}>
      {children}
    </button>
  );
};

export default Button;
