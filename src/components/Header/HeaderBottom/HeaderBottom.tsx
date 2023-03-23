import { FC } from 'react';
import { Col, Row } from 'antd';
import View from './View';
import Navigation from './Navigation';
import styles from './HeaderBottom.module.scss';

const HeaderBottom: FC = () => (
  <Row className={styles.bottom}>
    <Col span={5}>
      <View />
    </Col>

    <Col span={19}>
      <Navigation />
    </Col>
  </Row>
);

export default HeaderBottom;
