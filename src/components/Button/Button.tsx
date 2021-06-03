import { ReactNode, HTMLAttributes } from 'react';
import './Button.styles.css';

type Props = {
  children?: ReactNode;
  type?: 'pill' | 'square' | 'simple';
} & HTMLAttributes<HTMLButtonElement>;

const Button = ({ children, type = 'pill', ...rest }: Props) => {
  return (
    <button className={`button ${type}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
