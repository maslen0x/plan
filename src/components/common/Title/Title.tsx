import { FC, PropsWithChildren } from 'react';
import styles from './Title.module.scss';

const Title: FC<PropsWithChildren> = ({ children }) => <h3 className={styles.title}>{children}</h3>;

export default Title;
