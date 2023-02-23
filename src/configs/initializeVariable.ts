import {DropdownItemType} from '../commons/types';
import {getCurrentDate, getCurrentDateToString} from '../helpers/DatetimeHelpers';
export const currentDate = getCurrentDate();
export const FROM_DATE = getCurrentDateToString();
export const TO_DATE = getCurrentDateToString();

export const GetMonthDropdown = (isDesc = false): DropdownItemType[] => {
  const results: DropdownItemType[] = [];
  for (let i = 1; i < 13; i += 1) {
    results.push({value: i, label: `Tháng ${i}`, keySearch: `thang ${i}`});
  }
  if (isDesc) results.reverse();
  return results;
};

export const GetYearDropdown = (
  isDesc = false,
  qty = 20,
): DropdownItemType[] => {
  const results: DropdownItemType[] = [];
  const currentYear = new Date().getFullYear();
  const endYear = currentYear - (qty + 1);
  for (let year = currentYear; year > endYear; year -= 1) {
    results.push({
      value: year,
      label: `Năm ${year}`,
      keySearch: `nam ${year}`,
    });
  }

  if (isDesc) results.reverse();
  return results;
};
