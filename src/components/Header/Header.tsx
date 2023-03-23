import { FC } from 'react';
import HeaderBottom from './HeaderBottom';
import HeaderTop from './HeaderTop';

const Header: FC = () => {
  return (
    <div>
      <HeaderTop />
      <HeaderBottom />
    </div>
  );
};

export default Header;
