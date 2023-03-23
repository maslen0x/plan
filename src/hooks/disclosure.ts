import { useState } from 'react';

export const useDisclosure = () => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);

  const onClose = () => setOpen(false);

  return {
    open,
    onOpen,
    onClose,
    setOpen,
  };
};
