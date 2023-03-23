import { FC } from 'react';
import { Col, Row } from 'antd';
import Actions from './Actions';
import styles from './HeaderTop.module.scss';

const HeaderTop: FC = () => (
  <Row
    className={styles.top}
    align="middle"
  >
    <Col span={5}>Логотип</Col>

    <Col span={19}>
      <Actions />
    </Col>
  </Row>
);

export default HeaderTop;
