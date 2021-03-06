import React, { ReactNode, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { UIVariant } from '../../enums/UIVariant';
import '../../styles/component/button.scss';

export interface ButtonWithModalProps {
  className?: string;
  variant?: string;
  disabled?: boolean;
  buttonText: ReactNode | string;
  modalTitle: string;
  modalText: string;
  closeButtonText?: string;
  confirmButtonText: string;
  onConfirm: () => void;
}

const ButtonWithModal: React.FC<ButtonWithModalProps> = (props) => {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(true);
  }

  function handleCloseButton() {
    setShow(false);
  }

  function handleConfirmButton() {
    setShow(false);
    props.onConfirm();
  }

  return (
    <>
      <Button
        className={props.className}
        variant={props.variant || UIVariant.PRIMARY}
        onClick={handleShow}
        disabled={props.disabled}
      >
        {props.buttonText}
      </Button>
      <Modal show={show} onHide={handleCloseButton}>
        <Modal.Header closeButton>
          <Modal.Title>{props.modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.modalText}</Modal.Body>
        <Modal.Footer>
          <Button variant={UIVariant.SECONDARY} onClick={handleCloseButton}>
            {props.closeButtonText === undefined ? 'Close' : props.closeButtonText}
          </Button>
          <Button variant={UIVariant.PRIMARY} onClick={handleConfirmButton}>
            {props.confirmButtonText}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ButtonWithModal;
