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
  className,
  ...rest
}: Props) => {
  let buttonClassName = `${styles.button} ${styles[type]} ${
    large && styles.large
  } ${className}`;

  return (
    <button className={buttonClassName} {...rest}>
      {children}
    </button>
  );
};

export default Button;
