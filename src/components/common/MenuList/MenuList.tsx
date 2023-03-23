import { FC } from 'react';
import { Menu, MenuProps } from 'antd';
import Title from '../Title';
import styles from './MenuList.module.scss';

interface MenuListProps extends MenuProps {
  title: string;
}

const MenuList: FC<MenuListProps> = ({ title, ...props }) => (
  <>
    <Title>{title}</Title>

    <Menu
      className={styles.menu}
      mode="inline"
      {...props}
    />
  </>
);

export default MenuList;
