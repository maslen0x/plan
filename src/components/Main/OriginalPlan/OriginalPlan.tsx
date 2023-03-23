import { FC } from 'react';
import { MenuProps } from 'antd';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import MenuList from '@/components/common/MenuList';

const items: MenuProps['items'] = [
  {
    key: 'edit',
    label: 'Редактирование',
    icon: <EditOutlined />,
  },
  {
    key: 'create',
    label: 'Создание комнаты',
    icon: <PlusOutlined />,
  },
  {
    key: 'doors',
    label: 'Дверные проемы',
    icon: <PlusOutlined />,
  },
  {
    key: 'windows',
    label: 'Оконные проемы',
    icon: <PlusOutlined />,
  },
  {
    key: 'layout',
    label: 'Установить планировку',
    icon: <PlusOutlined />,
  },
];

const OriginalPlan: FC = () => (
  <MenuList
    title="Исходный план"
    defaultSelectedKeys={['edit']}
    items={items}
  />
);

export default OriginalPlan;
