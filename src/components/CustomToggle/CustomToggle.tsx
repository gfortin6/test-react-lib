import React, { ReactNode } from 'react';
import { useAccordionButton } from 'react-bootstrap';

export interface CustomToggleProps {
  eventKey: string;
  children: ReactNode;
}

function CustomToggle({ children, eventKey }: CustomToggleProps) {
  const decoratedOnClick = useAccordionButton(eventKey, () => {});

  return <div onClick={decoratedOnClick}>{children}</div>;
}

export default CustomToggle;
