import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { UIVariant } from '../../enums/UIVariant';
import ButtonWithModal from '../ButtonWithModal/ButtonWithModal';

export interface CardWithSubProps {
  title?: string;
  subTitle?: string;
  isDeletable: boolean;
  onDelete: () => void;
  btnCssClass?: string;
}

const CardWithSub: React.FC<CardWithSubProps> = (props) => {
  return (
    <Card className="mb-2">
      <Card.Header>
        <Row>
          <Col className="align-self-center">
            {props.title && <Card.Title>{props.title}</Card.Title>}
            {props.subTitle && <Card.Subtitle>{props.subTitle}</Card.Subtitle>}
          </Col>
          <Col className={`text-end align-self-center ${props.btnCssClass}`}>
            {props.isDeletable && (
              <ButtonWithModal
                variant={UIVariant.SECONDARY}
                buttonText="X"
                modalTitle="Delete"
                modalText={`Are you sure that you want to delete - ${props.title}?`}
                confirmButtonText="OK"
                onConfirm={props.onDelete}
              />
            )}
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>{props.children}</Card.Body>
    </Card>
  );
};
export default CardWithSub;
