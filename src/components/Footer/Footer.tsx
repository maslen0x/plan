import { FC, PropsWithChildren } from 'react';
import { Row } from 'antd';
import styles from './Footer.module.scss';

const Footer: FC<PropsWithChildren> = ({ children }) => (
  <Row className={styles.footer}>{children}</Row>
);

export default Footer;
