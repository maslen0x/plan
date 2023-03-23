import { FC } from 'react';
import { MenuProps } from 'antd';
import { FileOutlined } from '@ant-design/icons';
import MenuList from '@/components/common/MenuList';

const items: MenuProps['items'] = [
  {
    key: 'creation',
    label: 'Создание плана',
    icon: <FileOutlined />,
  },
];

const History: FC = () => (
  <MenuList
    title="История"
    defaultSelectedKeys={['creation']}
    items={items}
  />
);

export default History;
