import { ReactNode } from 'react';
import Navigation from '../Navigation';

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
