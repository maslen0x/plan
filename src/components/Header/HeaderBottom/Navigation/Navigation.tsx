import { FC } from 'react';
import { Tabs } from 'antd';
import { NavValue, usePlan } from '@/context/plan';
import styles from './Navigation.module.scss';

interface NavigationItem {
  key: NavValue;
  label: string;
}

const items: NavigationItem[] = [
  {
    key: 'plan',
    label: 'Исходный план',
  },
  {
    key: 'dismantling',
    label: 'Демонтаж',
  },
  {
    key: 'furniture',
    label: 'Мебель',
  },
  {
    key: 'doors',
    label: 'Двери и окна',
  },
  {
    key: 'walls',
    label: 'Отделка стен',
  },
  {
    key: 'materials',
    label: 'Раскладка материала',
  },
];

const Navigation: FC = () => {
  const { nav, setNav } = usePlan();

  const onChange = (key: string) => setNav(key as NavValue);

  return (
    <Tabs
      className={styles.navigation}
      activeKey={nav}
      items={items}
      onChange={onChange}
    />
  );
};

export default Navigation;
