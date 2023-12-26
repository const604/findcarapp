import React from 'react';
import { Modal } from 'components/Modal/Modal';
import CarDetails from 'components/CarDetails/CarDetails';

export const CarModal = ({ onClose, id }) => {
  return (
    <Modal onClose={onClose}>
      <CarDetails onClose={onClose} id={id} />
    </Modal>
  );
};
