import { FC } from 'react';
import Title from '@/components/common/Title';
import { Tree } from 'antd';
import { DataNode } from 'antd/es/tree';
import styles from './Structure.module.scss';

const treeData: DataNode[] = [
  {
    title: 'Комната 0',
    key: '0',
    children: [
      { title: 'Стена 0', key: '0-0', isLeaf: true },
      { title: 'Стена 1', key: '0-1', isLeaf: true },
      { title: 'Стена 2', key: '0-2', isLeaf: true },
      { title: 'Стена 3', key: '0-3', isLeaf: true },
    ],
  },
  {
    title: 'Комната 1',
    key: '1',
    children: [
      { title: 'Стена 0', key: '1-0', isLeaf: true },
      { title: 'Стена 1', key: '1-1', isLeaf: true },
    ],
  },
];

const Structure: FC = () => (
  <>
    <Title>Структура</Title>

    <div className={styles.structure}>
      <Tree.DirectoryTree
        multiple
        treeData={treeData}
      />
    </div>
  </>
);

export default Structure;
