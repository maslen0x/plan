import { useDisclosure } from '@/hooks/disclosure';
import { Button, Modal } from 'antd';
import { FC } from 'react';

const Doors: FC = () => {
  const { open, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        block
        onClick={onOpen}
      >
        Выбрать двери
      </Button>

      <Modal
        title="Двери"
        open={open}
        width={1150}
        footer={null}
        onCancel={onClose}
      />
    </>
  );
};

export default Doors;
