import { FC } from 'react';
import { Col, Row } from 'antd';
import { NavValue, usePlan } from '@/context/plan';
import Side from './Side';
import Structure from './Structure';
import OriginalPlan from './OriginalPlan';
import Workspace from './Workspace';
import Dismantling from './Dismantling';
import Furniture from './Furniture';
import DoorsAndWindows from './DoorsAndWindows';
import Walls from './Walls';
import History from './History';
import Toggle from './Toggle';
import styles from './Main.module.scss';

const components: Record<NavValue, FC | null> = {
  plan: OriginalPlan,
  dismantling: Dismantling,
  furniture: Furniture,
  doors: DoorsAndWindows,
  walls: Walls,
  materials: null,
};

const Main: FC = () => {
  const { nav } = usePlan();

  const Component = components[nav];

  return (
    <Row className={styles.main}>
      <Col span={5}>
        {Component && (
          <Side>
            <Component />
          </Side>
        )}

        <Side>
          <Structure />
        </Side>
      </Col>

      <Col span={14}>
        <Workspace />
      </Col>

      <Col span={5}>
        <Side>
          <History />
        </Side>

        <Side>
          <Toggle />
        </Side>
      </Col>
    </Row>
  );
};

export default Main;
