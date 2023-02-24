import { IBusinessInfo, ICustomerDetail, ICustomerTmpInfo, IFarmItem, IImageResponse, ILastCheckinResponse, IUserLatLong } from '../../apis/types.service';
import {DropdownItemType} from '../../commons/types';
import {removeUnicode} from '../../helpers/UtilitiesHelper';
import {IMasterState, MasterActionsType, Types} from './master.types';
import {currentDate} from './../../configs/initializeVariable';

const customerModel: ICustomerDetail = {
  CUSTOMERID: '',
  CUSTNAME: '',
  ADDRESS: '',
  TEL: '',
  IDCARD: '',
  IDCARDDATE: currentDate,
  ISBUSINESS: '',
  USERCREATE: '',
  CREATEDATE: currentDate,
  ACTIVE: '',
  EMAILADDRESS: '',
  NOTRECEIVEINVOICE: '',
  ACTION_TYPE: '',
  APPROVED_BY: '', 
  APPROVED_DATE: '', 
  ASSET: '', 
  BANK_ACCOUNT: '', 
  BRANCHID: '', 
  BUSINESS_TYPE: '', 
  CAPACITY: '', 
  CHECKIN_ID: '', 
  COMMUNE_ID: '', 
  CREATED_BY: '', 
  CREATED_DATE: currentDate, 
  CUSTIDCARD: '',
  CUSTIDCARDDATE: currentDate,
  CUSTOMER_BUSINESS: '', 
  DISTRICT_ID: '', 
  EDOC_ID: 0, 
  EMAIL: '', 
  IS_APPROVED: '', 
  IS_INSIGNING: '', 
  NAME: '', 
  OTHERS: '',
  OWNER_ADDRESS: '',
  OWNER_NAME: '',
  OWNER_PHONE: '', 
  PHONE_NUMBER: '', 
  PROVINCE_ID: '', 
  SIGN_STATUS: 0,
  STREET_ADDRESS: '', 
  TAX_CODE: '', 
  TMP_CODE: 0, 
  WARRANTY: '',
  ListBranch: [],
  BRANCHIDLIST: ``,
}

const customerResponse: ICustomerTmpInfo = {
  ACTION_TYPE: '',
  ADDRESS: '', 
  APPROVED_BY: '', 
  APPROVED_DATE: '', 
  ASSET: '', 
  BANK_ACCOUNT: '', 
  BRANCHID: '', 
  BUSINESS_TYPE: '', 
  CAPACITY: '', 
  CHECKIN_ID: '', 
  COMMUNE_ID: '', 
  CREATED_BY: '', 
  CREATED_DATE: currentDate, 
  CUSTIDCARD: '',
  CUSTIDCARDDATE: currentDate,
  CUSTOMERID: '', 
  CUSTOMER_BUSINESS: '', 
  DISTRICT_ID: '', 
  EDOC_ID: 0, 
  EMAIL: '', 
  IS_APPROVED: '', 
  IS_INSIGNING: '', 
  NAME: '', 
  OTHERS: '',
  OWNER_ADDRESS: '',
  OWNER_NAME: '',
  OWNER_PHONE: '', 
  PHONE_NUMBER: '', 
  PROVINCE_ID: '', 
  SIGN_STATUS: 0,
  STREET_ADDRESS: '', 
  TAX_CODE: '', 
  TMP_CODE: 0,
  WARRANTY: '',
  label: '',
  value: '',
  keySearch: '',
  ACTIVE: 'N',
  ListBranch: [],
  BRANCHIDLIST: ``,
}

// const farmModel: IFarmItem = {
//   FARMNAME: '',
//   ADDRESS: '',
//   FARMCODE: '',
//   FARMLATITUDE: 0,
//   FARMLONGITUDE: 0,
//   REGION: '',
//   UNITID: '',
//   ACTIVE: 0,
// }

const userLocation: IUserLatLong = {
  latitude: 0,
  longitude: 0
}

const imageResponse: IImageResponse = {
  FileID: 0,
  FileName: '',
}

const initialState: IMasterState = {
  userMenus: [],
  userOfficeS: [],
  userDepartmentS: [],
  customers: [],
  customersTmp: [],
  customerModel: customerModel,
  customerResponse: customerResponse,
  imageResponse: imageResponse,
  customerDropdownData: [],
  locations: [],
  saleLocations: [],
  locationsOfUser: [],
  locationsDropdownData: [],
  productsUnit: [],
  productsDropdownData: [],
  prices: [],
  customerBalances: [],
  discountTypeDropdownData: [
    {
      label: 'Chiết khấu nhập thường',
      value: 0,
      keySearch: 'chiet khau tra sau',
    },
    {
      label: 'Chiết khấu nhận nhánh khác (CNDN)',
      value: 1,
      keySearch: 'cndn'
    }
    // {label: 'Write Off', value: 1, keySearch: 'write off'},
  ],
  unitsCustomerDropdownData: [],
  unitsOfCustomer: [],
  unitsSale: [],
  products: [],
  userMenuIds: [],
  isSubmitSuccess: false,
  currentScreen: '',
  userLocation: userLocation,
  farmList: [],
  checkingID: 0,
  checkoutID: 0,
  checkingData: [],
  checkingDataDetail: [],
  checkingImg: '',
  imageID: '',
  isCheckOut: true,
  QRcode: '',
  FarmID: '',
  lastCheckinResponse: [],
  AllReport: [],
};

export default function MasterReducers(
  state = initialState,
  action: MasterActionsType,
): IMasterState {
  switch (action.type) {
    case Types.MASTER_CHANGE_IS_SUBMIT_STATUS: {
      const {isResult, screen} = action.payload;
      const strScreen = screen ?? state.currentScreen;
      return {...state, isSubmitSuccess: isResult, currentScreen: strScreen};
    }
    case Types.MASTER_FETCH_OFFICE_BY_USER_SUCCESS: {
      return {...state, userOfficeS: action.payload};
    }
    case Types.MASTER_FETCH_DEPARTMENT_BY_USER_SUCCESS: {
      return {...state, userDepartmentS: action.payload};
    }
    case Types.MASTER_FETCH_CUSTOMERS_SUCCESS: {
      return {...state, customers: action.payload};
    }

    case Types.MASTER_GET_CHECKING_IMAGE_SUCCESS: {
      const {checkingImage, isCheckOut, imageID} = action.payload
      return {
        ...state,
        checkingImg: checkingImage,
        isCheckOut: isCheckOut,
        imageID: imageID,
      }
    }

    case Types.MASTER_CREATE_CUSTOMER_SUCCESS: {
      const {model} = action.payload;
      return {
        ...state,
        customerResponse: model,
      }
    }

    case Types.MASTER_GET_LAST_CHECKID_SUCCESS: {
      return {
        ...state,
        lastCheckinResponse: action.payload,
      }
    }

    case Types.MASTER_UPLOAD_IMAGE_TO_ONEDRIVE_SUCCESS: {
      const {response} = action.payload;
      return {
        ...state,
        imageResponse: response,
      }
    }

    case Types.MASTER_GET_USER_LATLONG: {
      const {location} = action.payload;
      return {
        ...state,
        userLocation: location ,
      }
    }

    case Types.MASTER_GENERATE_QR_SUSCCESS: {
      const {FarmID,QRcode} = action.payload;
      return {
        ...state,
        QRcode: QRcode,
        FarmID: FarmID,
      }
    }

    case Types.MASTER_CREATE_CHECKING_SUCCESS: {
      const {checkingId} = action.payload;
      return {
        ...state,
        checkingID: checkingId,
      }
    }

    case Types.MASTER_CREATE_CHECKOUT_SUCCESS: {
      const {checkoutId} = action.payload;
      return {
        ...state,
        checkoutID: checkoutId,
      }
    }

    case Types.MASTER_FETCH_CUSTOMERS_TMP_SUCCESS: {
      return {...state, customersTmp: action.payload};
    }

    case Types.MASTER_FETCHING_FARMLIST_SUCCESS: {
      const {farmlist} = action.payload
      return {
        ...state,
        farmList: farmlist,
      }
    }

    case Types.MASTER_FETCH_CHECKING_HISTORY_SUCCESS: {
      return {
        ...state,
        checkingData: action.payload,
      };
    }

    case Types.MASTER_FETCH_ALL_REPORT_SUCCESS: {
      return {
        ...state,
        AllReport: action.payload,
      };
    }

    case Types.MASTER_FETCH_HISTORY_DETAIL_SUCCESS: {
      return {
        ...state,
        checkingDataDetail: action.payload,
      }
    }

    case Types.MASTER_UPDATE_CUSTOMER_DROPDOWN_DATA: {
      return {...state, customerDropdownData: action.payload};
    }
    case Types.MASTER_FETCH_LOCATION_BY_UNIT_SUCCESS: {
      return {...state, locations: action.payload};
    }
    case Types.MASTER_GET_SALE_LOCATION_SUCCESS: {
      const {locations} = action.payload;
      return {...state, saleLocations: locations};
    }
    case Types.MASTER_UPDATE_LOCATION_DROPDOWN_DATA: {
      return {...state, locationsDropdownData: action.payload};
    }
    case Types.MASTER_UPDATE_CUSTOMER: {
      return {...state, customerModel: action.payload!}
    }
    case Types.MASTER_FETCH_PRODUCTS_BY_UNIT_SUCCESS: {
      const products = action.payload;
      const dropdownData: DropdownItemType[] = products.map((item) => {
        const dropDownItem: DropdownItemType = {
          label: item.Name,
          value: item.ID,
          keySearch: `${removeUnicode(item.Name)} ${item.ID}`,
        };
        return dropDownItem;
      });
      return {
        ...state,
        productsUnit: products,
        productsDropdownData: dropdownData,
      };
    }
    case Types.MASTER_GET_SWINE_PRICE_BY_CUST_PRODUCT_SUCCESS: {
      return {...state, prices: action.payload};
    }
    case Types.MASTER_GET_CUSTOMER_BALANCES_SUCCESS: {
      return {...state, customerBalances: action.payload};
    }
    case Types.MASTER_GET_UNITS_OF_CUSTOMER_SUCCESS: {
      const {units, unitsDropdownData} = action.payload;
      return {
        ...state,
        unitsOfCustomer: units,
        unitsCustomerDropdownData: unitsDropdownData,
      };
    }
    case Types.MASTER_GET_LOCATIONS_BY_USER_SUCCESS: {
      const {locations} = action.payload;
      return {...state, locationsOfUser: locations};
    }
    case Types.MASTER_GET_MENU_BY_USER_SUCCESS: {
      const {menus, userMenuIds} = action.payload;
      return {...state, userMenus: menus, userMenuIds};
    }
    case Types.MASTER_GET_SALE_UNITS_SUCCESS: {
      const {units} = action.payload;
      return {...state, unitsSale: units};
    }
    case Types.MASTER_GET_ALL_PRODUCTS_SUCCESS: {
      const {products} = action.payload;
      return {...state, products};
    }
    default:
      return state;
  }
}
