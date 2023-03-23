import { FC, ReactNode } from 'react';
import { Col, Row } from 'antd';
import { BorderOutlined, CodeSandboxOutlined } from '@ant-design/icons';
import { usePlan, ViewValue } from '@/context/plan';
import styles from './View.module.scss';

interface ViewItem {
  key: ViewValue;
  label: string;
  icon: ReactNode;
}

const items: ViewItem[] = [
  {
    key: '2d',
    label: '2D',
    icon: <BorderOutlined />,
  },
  {
    key: '3d',
    label: '3D',
    icon: <CodeSandboxOutlined />,
  },
];

const View: FC = () => {
  const { view, setView } = usePlan();

  return (
    <Row
      className={styles.view}
      align="stretch"
    >
      {items.map((item) => (
        <Col
          key={item.key}
          className={`${styles.item} ${item.key === view && styles.active}`}
          span={12}
          onClick={() => setView(item.key)}
        >
          <span>
            {item.icon} {item.label}
          </span>
        </Col>
      ))}
    </Row>
  );
};

export default View;
