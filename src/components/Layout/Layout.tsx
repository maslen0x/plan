import { FC, PropsWithChildren } from 'react';
import styles from './Layout.module.scss';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <div className={styles.layout}>{children}</div>
);

export default Layout;
