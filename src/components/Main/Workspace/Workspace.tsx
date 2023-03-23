import { FC } from 'react';
import { usePlan, ViewValue } from '@/context/plan';
import two from '@/assets/images/2d.jpg';
import three from '@/assets/images/3d.jpg';
import styles from './Workspace.module.scss';

const images: Record<ViewValue, string> = {
  '2d': two,
  '3d': three,
};

const Workspace: FC = () => {
  const { view } = usePlan();

  const image = images[view];

  return (
    <div className={styles.workspace}>
      <img
        src={image}
        alt={image}
      />
    </div>
  );
};

export default Workspace;
