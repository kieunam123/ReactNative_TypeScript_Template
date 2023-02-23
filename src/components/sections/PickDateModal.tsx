import React, {useState, useImperativeHandle, Ref} from 'react';
import Column from './Column';
import Row from './Row';
import {Button, DateRowWithoutFormik, ModalCommon} from '../commons';
import {FROM_DATE, TO_DATE} from './../../configs/initializeVariable';
import {convertMmDdYyyyToDate} from './../../helpers/DatetimeHelpers';
import {Colors} from './../../configs';

export interface IPickDateProps {
  onOpen?: () => void;
  onAccept?: (fromDate: string, toDate: string) => void;
  title?: string;
}

const PickDateModal = React.forwardRef(
  ({title, onAccept}: IPickDateProps, ref: Ref<IPickDateProps>) => {

    const [fromDate, setFromDate] = useState<string>(() => FROM_DATE);
    const [toDate, setToDate] = useState<string>(() => TO_DATE);

    const [preFromDate, setPreFromDate] = useState<string>(() => FROM_DATE);
    const [preToDate, setPreToDate] = useState<string>(() => TO_DATE);

    const [isOpenFilterModal, setOpenFilterModal] = useState<boolean>(false);

    const onOpen = () => {
      setPreFromDate(fromDate);
      setPreToDate(toDate);
      setOpenFilterModal(true);
    };

    useImperativeHandle(ref, () => ({
      onOpen,
    }));

    return (
      <ModalCommon
        title="Chọn thời gian"
        isVisible={isOpenFilterModal}
        onClose={() => {
          setOpenFilterModal(false);
          setFromDate(preFromDate);
          setToDate(preToDate);
        }}>
        <Row>
          <Column>
            <DateRowWithoutFormik
              label="Từ ngày"
              date={convertMmDdYyyyToDate(fromDate)}
              type="date"
              onDateChange={(date) => {
                setFromDate(date);
              }}
            />
          </Column>
          <Column>
            <DateRowWithoutFormik
              label="Đến ngày"
              date={convertMmDdYyyyToDate(toDate)}
              type="date"
              onDateChange={(date) => {
                setToDate(date);
              }}
            />
          </Column>
        </Row>
        <Row>
          <Column>
            <Button
              title="Thiết lập"
              color={Colors.WHITE}
              radius={5}
              onPress={() => {
                setOpenFilterModal(false);
                return onAccept && onAccept(fromDate, toDate);
              }}
            />
          </Column>
        </Row>
      </ModalCommon>
    );
  },
);

export default PickDateModal;
