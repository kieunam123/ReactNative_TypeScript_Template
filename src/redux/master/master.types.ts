import {
  IAllReport,
  IAllReportModal,
  ICheckingHistoryDetail,
  ICheckingHistoryItem,
  ICheckingHistoryModel,
  ICheckingModel,
  ICheckingModelNew,
  ICustomerBalance,
  ICustomerDetail,
  ICustomerInfo,
  ICustomerMaster,
  ICustomerTmpInfo,
  IFarmItem,
  IImageChecking,
  IImageModel,
  IImageResponse,
  ILastCheckinResponse,
  ILocation,
  IMasterMenu,
  IMasterResponseCommon,
  IPrice,
  IPriceModel,
  IProductStockDTO,
  IUnit,
  IUserLatLong,
  IUserLatLongModel,
} from '../../apis/types.service';
import {DropdownItemType} from '../../commons/types';


export interface IMasterState {
  userOfficeS: IMasterResponseCommon[];
  userDepartmentS: IMasterResponseCommon[];
  customers: ICustomerInfo[];
  customersTmp: ICustomerTmpInfo[];
  customerModel : ICustomerDetail;
  farmList : IFarmItem[];
  locations: ILocation[];
  saleLocations: ILocation[];
  productsUnit: IMasterResponseCommon[];
  productsDropdownData: DropdownItemType[];
  customerDropdownData: DropdownItemType[];
  locationsDropdownData: DropdownItemType[];
  prices: IPrice[];
  customerBalances: ICustomerBalance[];
  discountTypeDropdownData: DropdownItemType[];
  unitsOfCustomer: IUnit[];
  unitsCustomerDropdownData: DropdownItemType[];
  locationsOfUser: ILocation[];
  userMenus: IMasterMenu[];
  userMenuIds: number[];
  unitsSale: IUnit[];
  isSubmitSuccess: boolean;
  products: IProductStockDTO[];
  currentScreen: string;
  userLocation: IUserLatLong;
  imageResponse: IImageResponse;
  checkingID: number;
  checkoutID: number;
  checkingData: ICheckingHistoryItem[];
  checkingDataDetail: ICheckingHistoryDetail[];
  checkingImg: string;
  isCheckOut: boolean,
  imageID: string;
  customerResponse: ICustomerTmpInfo;
  QRcode: string;
  FarmID: string;
  lastCheckinResponse: ILastCheckinResponse[];
  AllReport: IAllReport[];
}

export interface IDepartmentParams {
  userId: string;
  officeID: number;
}

export enum Types {
  MASTER_FETCHING_CUSTOMERS = 'MASTER_FETCHING_CUSTOMERS',
  MASTER_FETCH_CUSTOMERS_SUCCESS = 'MASTER_FETCH_CUSTOMERS_SUCCESS',

  MASTER_FETCHING_TMP_CUSTOMERS = 'MASTER_FETCHING_TMP_CUSTOMERS',
  MASTER_FETCH_CUSTOMERS_TMP_SUCCESS = 'MASTER_FETCH_CUSTOMERS_TMP_SUCCESS',

  MASTER_UPDATE_CUSTOMER_DROPDOWN_DATA = 'MASTER_UPDATE_CUSTOMER_DROPDOWN_DATA',

  //Create customer
  MASTER_UPDATE_CUSTOMER = 'MASTER_UPDATE_CUSTOMER',
  MASTER_CREATE_CUSTOMER = 'MASTER_CREATE_CUSTOMER',
  MASTER_CREATE_CUSTOMER_SUCCESS = 'MASTER_CREATE_CUSTOMER_SUCCESS',

  MASTER_CHANGE_IS_SUBMIT_STATUS = 'MASTER_CHANGE_IS_SUBMIT_STATUS',

  //Get farm location list
  MASTER_FETCHING_FARMLIST = 'MASTER_FETCHING_FARMLIST',
  MASTER_FETCHING_FARMLIST_SUCCESS = 'MASTER_FETCHING_FARMLIST_SUCCESS',

  //Update farm location
  MASTER_UPDATE_FARM_LOCATION = 'MASTER_UPDATE_FARM_LOCATION',
  MASTER_UPDATE_FARM_LOCATION_SUCCESS = 'MASTER_UPDATE_FARM_LOCATION_SUCCESS',

  //Get checking history list
  MASTER_FETCH_CHECKING_HISTORY = 'MASTER_FETCH_CHECKING_HISTORY',
  MASTER_FETCH_CHECKING_HISTORY_SUCCESS = 'MASTER_FETCH_CHECKING_HISTORY_SUCCESS',

  //Get All report checking
  MASTER_FETCH_ALL_REPORT = 'MASTER_FETCH_ALL_REPORT',
  MASTER_FETCH_ALL_REPORT_SUCCESS = 'MASTER_FETCH_ALL_REPORT_SUCCESS',

  //Get checking history detail
  MASTER_FETCH_HISTORY_DETAIL = 'MASTER_FETCH_HISTORY_DETAIL',
  MASTER_FETCH_HISTORY_DETAIL_SUCCESS = 'MASTER_FETCH_HISTORY_DETAIL_SUCCESS',

  //Get user location latitude and longitude
  MASTER_GET_USER_LATLONG = 'MASTER_GET_USER_LATLONG',
  MASTER_UPDATE_USER_LATLONG = 'MASTER_UPDATE_USER_LATLONG',

  //Post new user checking
  MASTER_CREATE_CHECKING = 'MASTER_CREATE_CHECKING',
  MASTER_CREATE_CHECKING_SUCCESS = 'MASTER_CREATE_CHECKING_SUCCESS',
  MASTER_CREATE_CHECKOUT = 'MASTER_CREATE_CHECKOUT',
  MASTER_CREATE_CHECKOUT_SUCCESS = 'MASTER_CREATE_CHECKOUT_SUCCESS',
  MASTER_CREATE_CHECKING_MODEL = 'MASTER_CREATE_CHECKING_MODEL',

  //Get last check in ID
  MASTER_GET_LAST_CHECKID = 'MASTER_GET_LAST_CHECKID',
  MASTER_GET_LAST_CHECKID_SUCCESS = 'MASTER_GET_LAST_CHECKID_SUCCESS',

  //Delete new user checking
  MASTER_DELETE_CHECKING = 'MASTER_DELETE_CHECKING',

  //Delete new user check out
  MASTER_DELETE_CHECKOUT = 'MASTER_DELETE_CHECKOUT',

  //Generate QR code
  MASTER_GENERATE_QR = 'MASTER_GENERATE_QR',
  MASTER_GENERATE_QR_SUSCCESS = 'MASTER_GENERATE_QR_SUSCCESS',

  //Update user checking days
  MASTER_UPDATE_CHECKING_DAY = 'MASTER_UPDATE_CHECKING_DAY',

  //Update user checking note
  MASTER_UPDATE_CHECKING_NOTE = 'MASTER_UPDATE_CHECKING_NOTE',

  //Upload iamge to API
  MASTER_UPLOAD_IMAGE_TO_API = 'MASTER_UPLOAD_IMAGE_TO_API',

  //Get Image Checking from OneDrive
  MASTER_GET_CHECKING_IMAGE = 'MASTER_GET_CHECKING_IMAGE',
  MASTER_GET_CHECKING_IMAGE_SUCCESS = 'MASTER_GET_CHECKING_IMAGE_SUCCESS',
  
  //Post customer to esigning
  MASTER_POST_CUSTOMER_TO_ESIGNING = 'MASTER_POST_CUSTOMER_TO_ESIGNING',
  MASTER_POST_CUSTOMER_TO_ESIGNING_SUCCESS = 'MASTER_POST_CUSTOMER_TO_ESIGNING_SUCCESS',

  //Upload image to onedrive
  MASTER_UPLOAD_IMAGE_TO_ONEDRIVE = 'MASTER_UPLOAD_IMAGE_TO_ONEDRIVE',
  MASTER_UPLOAD_IMAGE_TO_ONEDRIVE_SUCCESS = 'MASTER_UPLOAD_IMAGE_TO_ONEDRIVE_SUCCESS',

  MASTER_FETCHING_LOCAL_BY_UNITIDS = 'MASTER_FETCHING_LOCAL_BY_UNITIDS',
  MASTER_FETCH_LOCATION_BY_UNIT_SUCCESS = 'MASTER_FETCH_LOCATION_BY_UNIT_SUCCESS',
  MASTER_UPDATE_LOCATION_DROPDOWN_DATA = 'MASTER_UPDATE_LOCATION_DROPDOWN_DATA',

  MASTER_GET_SALE_LOCATION = 'MASTER_GET_SALE_LOCATION',
  MASTER_GET_SALE_LOCATION_SUCCESS = 'MASTER_GET_SALE_LOCATION_SUCCESS',

  MASTER_FETCHING_OFFICE_BY_USER = 'MASTER_FETCHING_OFFICE_BY_USER',
  MASTER_FETCH_OFFICE_BY_USER_SUCCESS = 'MASTER_FETCH_OFFICE_BY_USER_SUCCESS',
  MASTER_FETCHING_DEPARTMENT_BY_USER = 'MASTER_FETCHING_DEPARTMENT_BY_USER',
  MASTER_FETCH_DEPARTMENT_BY_USER_SUCCESS = 'MASTER_FETCH_DEPARTMENT_BY_USER_SUCCESS',

  MASTER_FETCHING_PRODUCTS_BY_UNIT = 'MASTER_FETCHING_PRODUCTS_BY_UNIT',
  MASTER_FETCH_PRODUCTS_BY_UNIT_SUCCESS = 'MASTER_FETCH_PRODUCTS_BY_UNIT_SUCCESS',

  MASTER_GET_SWINE_PRICE_BY_CUST_PRODUCT = 'MASTER_GET_SWINE_PRICE_BY_CUST_PRODUCT',
  MASTER_GET_SWINE_PRICE_BY_CUST_PRODUCT_SUCCESS = 'MASTER_GET_SWINE_PRICE_BY_CUST_PRODUCT_SUCCESS',

  MASTER_GET_CUSTOMER_BALANCES = 'MASTER_GET_CUSTOMER_BALANCES',
  MASTER_GET_CUSTOMER_BALANCES_SUCCESS = 'MASTER_GET_CUSTOMER_BALANCES_SUCCESS',

  MASTER_GET_UNITS_OF_CUSTOMER = 'MASTER_GET_UNITS_OF_CUSTOMER',
  MASTER_GET_UNITS_OF_CUSTOMER_SUCCESS = 'MASTER_GET_UNITS_OF_CUSTOMER_SUCCESS',

  MASTER_GET_LOCATIONS_BY_USER = 'MASTER_GET_LOCATIONS_BY_USER',
  MASTER_GET_LOCATIONS_BY_USER_SUCCESS = 'MASTER_GET_LOCATIONS_BY_USER_SUCCESS',

  MASTER_GET_MENU_BY_USER = 'MASTER_GET_MENU_BY_USER',
  MASTER_GET_MENU_BY_USER_SUCCESS = 'MASTER_GET_MENU_BY_USER_SUCCESS',

  MASTER_GET_MENU_BY_USER_WITHOUT_PASS = 'MASTER_GET_MENU_BY_USER_WITHOUT_PASS',

  MASTER_APP_START = 'MASTER_APP_START',
  MASTER_LOGIN_SUCCESS = 'MASTER_LOGIN_SUCCESS',

  MASTER_SETUP_PASSCODE = 'MASTER_SETUP_PASSCODE',
  MASTER_SETUP_PASSCODE_SUCCESS = 'MASTER_SETUP_PASSCODE_SUCCESS',

  MASTER_CHECK_SETUP_PASSCODE_STATUS = 'MASTER_CHECK_SETUP_PASSCODE_STATUS',
  MASTER_CHECK_POSCODE_IS_VALID = 'MASTER_CHECK_POSCODE_IS_VALID',

  MASTER_GET_SALE_UNITS = 'MASTER_GET_SALE_UNITS',
  MASTER_GET_SALE_UNITS_SUCCESS = 'MASTER_GET_SALE_UNITS_SUCCESS',

  MASTER_GET_ALL_PRODUCTS = 'MASTER/GET_ALL_PRODUCT',
  MASTER_GET_ALL_PRODUCTS_SUCCESS = 'MASTER/GET_ALL_PRODUCT_SUCCESS',
}

export interface IAppStart {
  type: Types.MASTER_APP_START;
  payload: {};
}

export interface IFetchingCustomer {
  type: Types.MASTER_FETCHING_CUSTOMERS;
}

export interface IFetchingTmpCustomer {
  type: Types.MASTER_FETCHING_TMP_CUSTOMERS;
  payload: {unitId: string};
}

export interface IFetchCustomerSuccess {
  type: Types.MASTER_FETCH_CUSTOMERS_SUCCESS;
  payload: ICustomerInfo[];
}

export interface IFetchCustomerTmpSuccess {
  type: Types.MASTER_FETCH_CUSTOMERS_TMP_SUCCESS;
  payload: ICustomerTmpInfo[];
}

export interface IUpdateCustomerDropdownData {
  type: Types.MASTER_UPDATE_CUSTOMER_DROPDOWN_DATA;
  payload: DropdownItemType[];
}

export interface IUpdateCustomer {
  type: Types.MASTER_UPDATE_CUSTOMER;
  payload: ICustomerDetail | null;
}

export interface ICreateCustomer {
  type: Types.MASTER_CREATE_CUSTOMER;
  payload: {model: ICustomerDetail};
}

export interface IUpdateFarmLocation {
  type: Types.MASTER_UPDATE_FARM_LOCATION;
  payload: {farmcode: string, region: string}
}

export interface IFetchCheckingHistory {
  type: Types.MASTER_FETCH_CHECKING_HISTORY;
  payload: ICheckingHistoryModel;
}

export interface IFetchCheckingHistorySucess {
  type: Types.MASTER_FETCH_CHECKING_HISTORY_SUCCESS;
  payload: ICheckingHistoryItem[];
}

export interface IFetchAllReport {
  type: Types.MASTER_FETCH_ALL_REPORT;
  payload: IAllReportModal;
}

export interface IFetchAllReportSuccess {
  type: Types.MASTER_FETCH_ALL_REPORT_SUCCESS;
  payload: IAllReport[]
}

export interface IFetchHistoryDetail {
  type: Types.MASTER_FETCH_HISTORY_DETAIL;
  payload: ICheckingHistoryDetail[];
}

export interface IFetchHistoryDetailSuccess {
  type: Types.MASTER_FETCH_HISTORY_DETAIL_SUCCESS;
  payload: ICheckingHistoryDetail[];
}

export interface IFetchingFarmLocationList {
  type: Types.MASTER_FETCHING_FARMLIST;
  payload: {regionId: string};
}

export interface IGetCheckingImage {
  type: Types.MASTER_GET_CHECKING_IMAGE;
  payload: {imageID: string, isCheckOut: boolean};
}

export interface IGetCheckingImageSuccess {
  type: Types.MASTER_GET_CHECKING_IMAGE_SUCCESS;
  payload: {checkingImage: string, isCheckOut: boolean, imageID: string}
}

export interface IFetchingFarmLocationListSuccess {
  type: Types.MASTER_FETCHING_FARMLIST_SUCCESS;
  payload: {farmlist : IFarmItem[]};
}

export interface IUserLocLatLong {
  type: Types.MASTER_GET_USER_LATLONG;
  payload: {location : IUserLatLong};
}

export interface IUpdateUserLocLatLong {
  type: Types.MASTER_UPDATE_USER_LATLONG;
  payload: IUserLatLongModel;
}

export interface IGetLastCheckinID {
  type: Types.MASTER_GET_LAST_CHECKID;
  payload: {email: string, farmcode: string}
}

export interface IGetLastCheckinIDSuccess {
  type: Types.MASTER_GET_LAST_CHECKID_SUCCESS;
  payload: ILastCheckinResponse[];
}

export interface ICreateNewChecking {
  type: Types.MASTER_CREATE_CHECKING;
  payload: ICheckingModel;
}

export interface ICreateNewCheckingModel {
  type: Types.MASTER_CREATE_CHECKING_MODEL;
  payload: ICheckingModelNew;
}

export interface ICreateNewCheckout {
  type: Types.MASTER_CREATE_CHECKOUT;
  payload: ICheckingModel;
}

export interface IDeleteChecking {
  type: Types.MASTER_DELETE_CHECKING;
  payload: {checkingId: number};
}

export interface IDeleteCheckOut {
  type: Types.MASTER_DELETE_CHECKOUT;
  payload: {checkingId: number};
}

export interface IGenerateQR {
  type: Types.MASTER_GENERATE_QR;
  payload: {FarmID: string, FarmName: string, FARMLONGITUDE: string, FARMLATITUDE: string, unit: string, regionID: string};
}

export interface IGenerateQRSuccess {
  type: Types.MASTER_GENERATE_QR_SUSCCESS;
  payload: {FarmID: string,QRcode: string};
}

export interface IUpdateCheckingDay {
  type: Types.MASTER_UPDATE_CHECKING_DAY;
  payload: {checkingId : number, Date_Qty: number };
}

export interface IUpdateCheckingNote {
  type: Types.MASTER_UPDATE_CHECKING_NOTE;
  payload: {checkingId: number, Note: string};
}

export interface IUploadImageToApi {
  type: Types.MASTER_UPLOAD_IMAGE_TO_API;
  payload: IImageModel;
}

export interface ICreateNewCheckingSuccess {
  type: Types.MASTER_CREATE_CHECKING_SUCCESS;
  payload: {checkingId: number};
}

export interface ICreateNewCheckoutSuccess {
  type: Types.MASTER_CREATE_CHECKOUT_SUCCESS;
  payload: {checkoutId: number};
}

export interface ICreateCustomerSuccess {
  type: Types.MASTER_CREATE_CUSTOMER_SUCCESS;
  payload: {model: ICustomerTmpInfo};
}

export interface IPostCustomerToEsigning {
  type: Types.MASTER_POST_CUSTOMER_TO_ESIGNING;
  payload: ICustomerDetail;
}

export interface IUploadImageToOneDrive {
  type: Types.MASTER_UPLOAD_IMAGE_TO_ONEDRIVE;
  payload: IImageChecking;
}

export interface IUploadImageToOneDriveSuccess {
  type: Types.MASTER_UPLOAD_IMAGE_TO_ONEDRIVE_SUCCESS;
  payload: {response: IImageResponse};
}

//

export interface IMasterChangeSubmitStatus {
  type: Types.MASTER_CHANGE_IS_SUBMIT_STATUS;
  payload: {isResult: boolean; screen: string | undefined};
}


export interface IFetchingLocationByUnits {
  type: Types.MASTER_FETCHING_LOCAL_BY_UNITIDS;
  payload: string[];
}

export interface IUpdateLocationDropdownData {
  type: Types.MASTER_UPDATE_LOCATION_DROPDOWN_DATA;
  payload: DropdownItemType[];
}

export interface IFetchLocationByUnitsSuccess {
  type: Types.MASTER_FETCH_LOCATION_BY_UNIT_SUCCESS;
  payload: ILocation[];
}

export interface IFetchingOffice {
  type: Types.MASTER_FETCHING_OFFICE_BY_USER;
  payload: string;
}

export interface IFetchOfficeSuccess {
  type: Types.MASTER_FETCH_OFFICE_BY_USER_SUCCESS;
  payload: IMasterResponseCommon[];
}

export interface IFetchingDepartment {
  type: Types.MASTER_FETCHING_DEPARTMENT_BY_USER;
  payload: IDepartmentParams;
}

export interface IFetchDepartmentSuccess {
  type: Types.MASTER_FETCH_DEPARTMENT_BY_USER_SUCCESS;
  payload: IMasterResponseCommon[];
}

export interface IFetchingProductByUnit {
  type: Types.MASTER_FETCHING_PRODUCTS_BY_UNIT;
  payload?: string;
}

export interface IFetchProductsByUnitSuccess {
  type: Types.MASTER_FETCH_PRODUCTS_BY_UNIT_SUCCESS;
  payload: IMasterResponseCommon[];
}

export interface IGetSwinePrice {
  type: Types.MASTER_GET_SWINE_PRICE_BY_CUST_PRODUCT;
  payload: IPriceModel;
}

export interface IGetSwinePriceSuccess {
  type: Types.MASTER_GET_SWINE_PRICE_BY_CUST_PRODUCT_SUCCESS;
  payload: IPrice[];
}

export interface IGetCustomerBalance {
  type: Types.MASTER_GET_CUSTOMER_BALANCES;
  payload: {custId: string; unitId: string};
}

export interface IGetCustomerBalanceSuccess {
  type: Types.MASTER_GET_CUSTOMER_BALANCES_SUCCESS;
  payload: ICustomerBalance[];
}

export interface IGetUnitOfCustomer {
  type: Types.MASTER_GET_UNITS_OF_CUSTOMER;
  payload: {custId: string; units: string[]};
}

export interface IGetUnitOfCustomerSuccess {
  type: Types.MASTER_GET_UNITS_OF_CUSTOMER_SUCCESS;
  payload: {units: IUnit[]; unitsDropdownData: DropdownItemType[]};
}

export interface IGetLocationByUser {
  type: Types.MASTER_GET_LOCATIONS_BY_USER;
  payload: {};
}

export interface IGetLocationByUserSuccess {
  type: Types.MASTER_GET_LOCATIONS_BY_USER_SUCCESS;
  payload: {locations: ILocation[]};
}

export interface IGetMenuByUser {
  type: Types.MASTER_GET_MENU_BY_USER;
  payload: {};
}

export interface IGetMenuByUserWithoutPass {
  type: Types.MASTER_GET_MENU_BY_USER_WITHOUT_PASS;
  payload : {email : string};
}

export interface IGetMenuByUserSuccess {
  type: Types.MASTER_GET_MENU_BY_USER_SUCCESS;
  payload: {menus: IMasterMenu[]; userMenuIds: number[]};
}

export interface ISetupPasscode {
  type: Types.MASTER_SETUP_PASSCODE;
  payload: {passCode: string};
}

// export interface ILoginSuccess {
//   type: Types.MASTER_LOGIN_SUCCESS;
//   payload: {
//     tokenObj: AccessTokenObject;
//     accessToken: string;
//   };
// }

export interface ICheckPassCodeStatus {
  type: Types.MASTER_CHECK_SETUP_PASSCODE_STATUS;
  payload: {};
}

export interface ICheckPassCodeIsValid {
  type: Types.MASTER_CHECK_POSCODE_IS_VALID;
  payload: {passCode: string};
}

export interface IGetSaleLocation {
  type: Types.MASTER_GET_SALE_LOCATION;
  payload: {};
}

export interface IGetSaleLocationSuccess {
  type: Types.MASTER_GET_SALE_LOCATION_SUCCESS;
  payload: {locations: ILocation[]};
}

export interface IGetSaleUnits {
  type: Types.MASTER_GET_SALE_UNITS;
  payload: {custId?: string};
}

export interface IGetSaleUnitsSuccess {
  type: Types.MASTER_GET_SALE_UNITS_SUCCESS;
  payload: {units: IUnit[]};
}

export interface IGetAllProducts {
  type: Types.MASTER_GET_ALL_PRODUCTS;
  payload: {};
}

export interface IGetAllProductsSuccess {
  type: Types.MASTER_GET_ALL_PRODUCTS_SUCCESS;
  payload: {products: IProductStockDTO[]};
}

export type MasterActionsType =
  | IFetchCustomerSuccess
  | IFetchCustomerTmpSuccess
  | IFetchingFarmLocationListSuccess
  | IGetLastCheckinIDSuccess
  | IGetCheckingImageSuccess
  | IFetchHistoryDetailSuccess
  | IFetchCheckingHistorySucess
  | IFetchAllReportSuccess
  | IUploadImageToOneDriveSuccess
  | IMasterChangeSubmitStatus
  | IFetchingLocationByUnits
  | IFetchLocationByUnitsSuccess
  | IFetchOfficeSuccess
  | IFetchDepartmentSuccess
  | IFetchProductsByUnitSuccess
  | IGetSwinePriceSuccess
  | IGetCustomerBalanceSuccess
  | IUpdateCustomerDropdownData
  | IUpdateCustomer
  | ICreateCustomerSuccess
  | ICreateNewCheckingSuccess
  | IGenerateQRSuccess
  | ICreateNewCheckoutSuccess
  | IUpdateLocationDropdownData
  | IGetUnitOfCustomerSuccess
  | IGetLocationByUserSuccess
  | IGetMenuByUserSuccess
  | IGetSaleLocationSuccess
  | IGetSaleUnitsSuccess
  | IUserLocLatLong
  | IGetAllProductsSuccess;
