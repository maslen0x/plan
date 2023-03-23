import { FC } from 'react';
import { Tree } from 'antd';
import { DataNode } from 'antd/es/tree';
import Title from '@/components/common/Title';

const treeData: DataNode[] = [
  {
    title: 'Диваны и кресла',
    key: '0',
    children: [{ title: 'Диваны и кресла', key: '0-0', isLeaf: true }],
  },
];

const Furniture: FC = () => (
  <>
    <Title>Мебель</Title>
    <Tree.DirectoryTree
      multiple
      treeData={treeData}
    />
  </>
);

export default Furniture;
