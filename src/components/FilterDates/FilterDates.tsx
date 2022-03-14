import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { UIVariant } from '../../enums';

export interface FilterDatesProps {
  defaultDateFrom?: string;
  defaultDateTo?: string;
  isDefaultDateFrom: boolean;
  isDefaultDateTo: boolean;
  onChangeDateFrom: () => void;
  onChangeDateTo: () => void;
}

const BTN_DEFAULT_DATE_FROM_ID = 'btnDefaultDateFrom';
const BTN_DEFAULT_DATE_TO_ID = 'btnDefaultDateTo';
const DATE_FORMAT = 'yyyy-MM-dd';

const FilterDates: React.FC<FilterDatesProps> = (props) => {
  const [dateFrom, setDateFrom] = useState<Date>();
  const [dateTo, setDateTo] = useState<Date>();
  const [isDefaultDateFrom, setIsDefaultDateFrom] = useState(props.isDefaultDateFrom);
  const [isDefaultDateTo, setIsDefaultDateTo] = useState(props.isDefaultDateTo);

  useEffect(() => {
    if (isDefaultDateFrom) {
      setDateFrom(props.defaultDateFrom ? new Date(props.defaultDateFrom + 'T00:00:00') : undefined);
    }

    if (isDefaultDateTo) {
      setDateTo(props.defaultDateTo ? new Date(props.defaultDateTo + 'T00:00:00') : undefined);
    }
  }, [isDefaultDateFrom, isDefaultDateTo, props.defaultDateFrom, props.defaultDateTo]);

  function defaultDateHandler(event: React.MouseEvent<HTMLButtonElement>) {
    const btnId = event.currentTarget.id;
    if (btnId === BTN_DEFAULT_DATE_FROM_ID) {
      setDateFrom(props.defaultDateFrom ? new Date(props.defaultDateFrom + 'T00:00:00') : undefined);
      setIsDefaultDateFrom(true);
    } else if (btnId === BTN_DEFAULT_DATE_TO_ID) {
      setDateTo(props.defaultDateTo ? new Date(props.defaultDateTo + 'T00:00:00') : undefined);
      setIsDefaultDateTo(true);
    }
  }

  function onChangeDateFrom(date: Date) {
    setDateFrom(date);

    if (dateTo && date > dateTo) {
      onChangeDateTo(date);
    }
    setIsDefaultDateFrom(false);
  }

  function onChangeDateTo(date: Date) {
    setDateTo(date);
    setIsDefaultDateTo(false);
  }

  return (
    <>
      {/* Date from */}
      <Form.Group className="mt-3">
        <Row>
          <Col xs={6}>
            <Form.Label className="p-0 m-0 text-bold">From</Form.Label>
          </Col>
          <Col xs={6} className="text-end">
            <Button
              variant={UIVariant.OUTLINE_SECONDARY}
              size="sm"
              onClick={defaultDateHandler}
              id={BTN_DEFAULT_DATE_FROM_ID}
            >
              Clear
            </Button>
          </Col>
        </Row>
        <DatePicker
          className="datePicker"
          dateFormat={DATE_FORMAT}
          selected={dateFrom}
          onChange={onChangeDateFrom}
          startDate={dateFrom}
          endDate={dateTo}
          maxDate={new Date()}
          placeholderText="YYYY-MM-DD"
        />
      </Form.Group>

      {/* Date to */}
      <Form.Group className="mt-3">
        <Row>
          <Col xs={6}>
            <Form.Label className="p-0 m-0 text-bold">To</Form.Label>
          </Col>
          <Col xs={6} className="text-end">
            <Button
              variant={UIVariant.OUTLINE_SECONDARY}
              size="sm"
              onClick={defaultDateHandler}
              id={BTN_DEFAULT_DATE_TO_ID}
            >
              Clear
            </Button>
          </Col>
        </Row>
        <DatePicker
          className="datePicker"
          dateFormat={DATE_FORMAT}
          selected={dateTo}
          onChange={onChangeDateTo}
          startDate={dateTo}
          endDate={dateTo}
          minDate={dateFrom}
          maxDate={new Date()}
          placeholderText="YYYY-MM-DD"
        />
      </Form.Group>
    </>
  );
};

export default FilterDates;
