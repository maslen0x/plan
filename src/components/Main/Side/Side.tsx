import { FC, PropsWithChildren } from 'react';
import styles from './Side.module.scss';

const Side: FC<PropsWithChildren> = ({ children }) => <div className={styles.side}>{children}</div>;

export default Side;
