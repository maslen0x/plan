import { useDisclosure } from '@/hooks/disclosure';
import { Button, Modal } from 'antd';
import { FC } from 'react';

const Windows: FC = () => {
  const { open, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        block
        onClick={onOpen}
      >
        Выбрать окна
      </Button>

      <Modal
        title="Окна"
        open={open}
        width={1150}
        footer={null}
        onCancel={onClose}
      />
    </>
  );
};

export default Windows;
