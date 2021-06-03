import { ReactNode, HTMLAttributes } from 'react';

import styles from './Button.module.css';

type Props = {
  children?: ReactNode;
  type?: 'pill' | 'square' | 'simple';
} & HTMLAttributes<HTMLButtonElement>;

const Button = ({ children, type = 'pill', ...rest }: Props) => {
  let buttonClassName = `${styles.button} `;

  if (type === 'pill') {
    buttonClassName += styles.pill;
  } else if (type === 'square') {
    buttonClassName += styles.square;
  } else if (type === 'simple') {
    buttonClassName += styles.simple;
  }

  return (
    <button className={buttonClassName} {...rest}>
      {children}
    </button>
  );
};

export default Button;
