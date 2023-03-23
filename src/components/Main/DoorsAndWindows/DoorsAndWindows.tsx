import { FC } from 'react';
import { Space } from 'antd';
import Title from '@/components/common/Title';
import styles from './DoorsAndWindows.module.scss';
import Doors from './Doors';
import Windows from './Windows';

const DoorsAndWindows: FC = () => (
  <>
    <Title>Двери и окна</Title>

    <Space
      className={styles.buttons}
      direction="vertical"
      size="middle"
    >
      <Doors />

      <Windows />
    </Space>
  </>
);

export default DoorsAndWindows;
