import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { UIVariant } from '../../enums';
import '../../styles/component/filter-dates.scss';

export interface FilterDatesProps {
  defaultDateFrom?: string;
  defaultDateTo?: string;
  isDefaultDateFrom: boolean;
  isDefaultDateTo: boolean;
  dateFromErrorMessage?: string;
  dateToErrorMessage?: string;
  onChangeDateFrom: (date: string | undefined) => void;
  onChangeDateTo: (date: string | undefined) => void;
  onChangeDefaultDateFrom: (isDefaultDateFrom: boolean) => void;
  onChangeDefaultDateTo: (isDefaultDateTo: boolean) => void;
}

const BTN_DEFAULT_DATE_FROM_ID = 'btnDefaultDateFrom';
const BTN_DEFAULT_DATE_TO_ID = 'btnDefaultDateTo';
const DATE_FORMAT = 'yyyy-MM-dd';

const FilterDates: React.FC<FilterDatesProps> = (props) => {
  const [dateFrom, setDateFrom] = useState<Date>();
  const [dateTo, setDateTo] = useState<Date>();

  const defaultDateFrom = props.defaultDateFrom ? new Date(props.defaultDateFrom + 'T00:00:00') : undefined;
  const defaultDateTo = props.defaultDateTo ? new Date(props.defaultDateTo + 'T00:00:00') : undefined;

  useEffect(() => {
    if (props.isDefaultDateFrom) {
      setDateFrom(defaultDateFrom);
      props.onChangeDateFrom(defaultDateFrom?.toISOString());
    }
    if (props.isDefaultDateTo) {
      setDateTo(defaultDateTo);
      props.onChangeDateTo(defaultDateTo?.toISOString());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.isDefaultDateFrom, props.isDefaultDateTo]);

  function defaultDateHandler(event: React.MouseEvent<HTMLButtonElement>) {
    const btnId = event.currentTarget.id;
    if (btnId === BTN_DEFAULT_DATE_FROM_ID) {
      setDateFrom(defaultDateFrom);
      props.onChangeDefaultDateFrom(true);
      props.onChangeDateFrom(defaultDateFrom?.toISOString());
    } else if (btnId === BTN_DEFAULT_DATE_TO_ID) {
      setDateTo(defaultDateTo);
      props.onChangeDefaultDateTo(true);
      props.onChangeDateTo(defaultDateTo?.toISOString());
    }
  }

  function handleChangeDateFrom(date: Date) {
    setDateFrom(date);

    if (dateTo && date > dateTo) {
      handleChangeDateTo(date);
    }
    props.onChangeDefaultDateFrom(false);
    props.onChangeDateFrom(date.toISOString());
  }

  function handleChangeDateTo(date: Date) {
    setDateTo(date);
    props.onChangeDefaultDateTo(false);
    props.onChangeDateTo(date.toISOString());
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
          onChange={handleChangeDateFrom}
          startDate={dateFrom}
          endDate={dateTo}
          maxDate={new Date()}
          placeholderText="YYYY-MM-DD"
        />
        {props.dateFromErrorMessage && <p className="dropdown-error-message">{props.dateFromErrorMessage}</p>}
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
          onChange={handleChangeDateTo}
          startDate={dateTo}
          endDate={dateTo}
          minDate={dateFrom}
          maxDate={new Date()}
          placeholderText="YYYY-MM-DD"
        />
        {props.dateToErrorMessage && <p className="dropdown-error-message">{props.dateToErrorMessage}</p>}
      </Form.Group>
    </>
  );
};

export default FilterDates;
