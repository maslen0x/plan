import { FC } from 'react';
import { MenuProps } from 'antd';
import { BgColorsOutlined, FileOutlined } from '@ant-design/icons';
import MenuList from '@/components/common/MenuList';

const items: MenuProps['items'] = [
  {
    key: 'paint',
    label: 'Покраска',
    icon: <BgColorsOutlined />,
  },
  {
    key: 'wallpaper',
    label: 'Обои',
    icon: <FileOutlined />,
  },
  {
    key: 'plaster',
    label: 'Штукатурка',
    icon: <BgColorsOutlined />,
  },
  {
    key: 'putty',
    label: 'Шпатлевка',
    icon: <BgColorsOutlined />,
  },
];

const Walls: FC = () => (
  <MenuList
    title="Отделка стен"
    defaultSelectedKeys={['wallpaper']}
    items={items}
  />
);

export default Walls;
