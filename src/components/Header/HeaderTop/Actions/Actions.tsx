import { FC } from 'react';
import { Dropdown, MenuProps, Space } from 'antd';
import {
  FolderOpenOutlined,
  SaveOutlined,
  DownloadOutlined,
  UploadOutlined,
  UndoOutlined,
  RedoOutlined,
} from '@ant-design/icons';
import styles from './Actions.module.scss';

interface DropdownItem {
  label: string;
  items: MenuProps['items'];
}

const items: DropdownItem[] = [
  {
    label: 'Файл',
    items: [
      {
        key: 0,
        label: 'Открыть',
        icon: <FolderOpenOutlined />,
      },
      {
        key: 1,
        label: 'Сохранить',
        icon: <SaveOutlined />,
      },
      {
        key: 2,
        label: 'Экспорт',
        icon: <DownloadOutlined />,
      },
      {
        key: 3,
        label: 'Импорт',
        icon: <UploadOutlined />,
      },
    ],
  },
  {
    label: 'Действия',
    items: [
      {
        key: 0,
        label: 'Отменить',
        icon: <UndoOutlined />,
      },
      {
        key: 1,
        label: 'Повторить',
        icon: <RedoOutlined />,
      },
    ],
  },
];

const Actions: FC = () => (
  <Space size="large">
    {items.map(({ label, items }) => (
      <Dropdown
        key={label}
        menu={{ items }}
        trigger={['click']}
        dropdownRender={(menu) => <div className={styles.dropdown}>{menu}</div>}
      >
        <span className={styles.item}>{label}</span>
      </Dropdown>
    ))}
  </Space>
);

export default Actions;
