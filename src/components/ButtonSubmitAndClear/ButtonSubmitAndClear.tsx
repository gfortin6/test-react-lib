import React from 'react';
import { Button } from 'react-bootstrap';
import { UIVariant } from '../../enums/UIVariant';

export interface ButtonSubmitAndClearProps {
  variantSubmit?: string;
  variantClear?: string;
  btnSubmitText: string;
  isFormValid: boolean;
  onClickClear: () => void;
}

const ButtonSubmitAndClear: React.FC<ButtonSubmitAndClearProps> = (props) => {
  function handleFormClear() {
    props.onClickClear();
  }

  return (
    <>
      {/* BUTTON SUBMIT AND CLEAR */}
      <div className="text-end mt-3">
        <Button
          variant={props.variantClear || UIVariant.OUTLINE_SECONDARY}
          type="button"
          onClick={handleFormClear}
          className="me-4"
        >
          Clear
        </Button>
        <Button variant={props.variantSubmit || UIVariant.PRIMARY} type="submit" disabled={!props.isFormValid}>
          {props.btnSubmitText}
        </Button>
      </div>
    </>
  );
};

export default ButtonSubmitAndClear;
