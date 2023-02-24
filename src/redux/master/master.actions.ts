import {
  ICustomerBalance,
  ICustomerInfo,
  ICustomerDetail,
  ILocation,
  IMasterMenu,
  IMasterResponseCommon,
  IPrice,
  IPriceModel,
  IProductStockDTO,
  IUnit,
  ICustomerTmpInfo,
  ICustomerMaster,
  IUserLatLong,
  IUserLatLongModel,
  IImageChecking,
  IImageResponse,
  IFarmItem,
  ICheckingModel,
  IImageModel,
  ICheckingHistoryModel,
  ICheckingHistoryItem,
  ICheckingHistoryDetail,
  ILastCheckinResponse,
  IAllReport,
  IAllReportModal,
  ICheckingModelNew,
} from '../../apis/types.service';
import {DropdownItemType} from '../../commons/types';
import {AccessTokenObject} from '../../components/microsoftLogin/types';
import {
  IAppStart,
  ICheckPassCodeIsValid,
  ICheckPassCodeStatus,
  IFetchCustomerSuccess,
  IFetchDepartmentSuccess,
  IFetchingCustomer,
  IFetchingDepartment,
  IFetchingLocationByUnits,
  IFetchingOffice,
  IFetchingProductByUnit,
  IFetchLocationByUnitsSuccess,
  IFetchOfficeSuccess,
  IFetchProductsByUnitSuccess,
  IGetAllProducts,
  IGetAllProductsSuccess,
  IGetCustomerBalance,
  IGetCustomerBalanceSuccess,
  IGetLocationByUser,
  IGetLocationByUserSuccess,
  IGetMenuByUser,
  IGetMenuByUserWithoutPass,
  IGetMenuByUserSuccess,
  IGetSaleLocation,
  IGetSaleLocationSuccess,
  IGetSaleUnits,
  IGetSaleUnitsSuccess,
  IGetSwinePrice,
  IGetSwinePriceSuccess,
  IGetUnitOfCustomer,
  IGetUnitOfCustomerSuccess,
  ILoginSuccess,
  ISetupPasscode,
  IUpdateCustomer,
  IUpdateCustomerDropdownData,
  IUpdateLocationDropdownData,
  Types,
  IFetchingTmpCustomer,
  IFetchCustomerTmpSuccess,
  ICreateCustomer,
  ICreateCustomerSuccess,
  IMasterChangeSubmitStatus,
  IPostCustomerToEsigning,
  IUserLocLatLong,
  IUpdateUserLocLatLong,
  IUploadImageToOneDrive,
  IUploadImageToOneDriveSuccess,
  IFetchingFarmLocationList,
  IFetchingFarmLocationListSuccess,
  ICreateNewChecking,
  ICreateNewCheckingSuccess,
  IUploadImageToApi,
  ICreateNewCheckout,
  ICreateNewCheckoutSuccess,
  IDeleteChecking,
  IFetchCheckingHistory,
  IFetchCheckingHistorySucess,
  IFetchHistoryDetail,
  IFetchHistoryDetailSuccess,
  IUpdateCheckingDay,
  IGetCheckingImage,
  IGetCheckingImageSuccess,
  IDeleteCheckOut,
  IUpdateCheckingNote,
  IGenerateQR,
  IGenerateQRSuccess,
  IGetLastCheckinID,
  IGetLastCheckinIDSuccess,
  IFetchAllReport,
  IFetchAllReportSuccess,
  IUpdateFarmLocation,
  ICreateNewCheckingModel,
} from './master.types';

const MasterActions = {
  getCustomers: (): IFetchingCustomer => {
    return {type: Types.MASTER_FETCHING_CUSTOMERS};
  },
  getCustomersTmp: (unitId: string): IFetchingTmpCustomer => {
    return {type: Types.MASTER_FETCHING_TMP_CUSTOMERS, payload: {unitId}};
  },
  getCustomersSuccess: (customers: ICustomerInfo[]): IFetchCustomerSuccess => {
    return {type: Types.MASTER_FETCH_CUSTOMERS_SUCCESS, payload: customers};
  },

  getCustomersTmpSuccess: (customers: ICustomerTmpInfo[]): IFetchCustomerTmpSuccess => {
    return {type: Types.MASTER_FETCH_CUSTOMERS_TMP_SUCCESS, payload: customers};
  },

  updateUserLatLong: (location:IUserLatLongModel): IUpdateUserLocLatLong => {
    return {
      type: Types.MASTER_UPDATE_USER_LATLONG,
      payload: location,
    };
  },

  getUserLatLong: (location: IUserLatLong): IUserLocLatLong => {
    return {
      type: Types.MASTER_GET_USER_LATLONG,
      payload: {location},
    }
  },

  getLastCheckinID: (email: string, farmcode: string): IGetLastCheckinID => {
    return {
      type: Types.MASTER_GET_LAST_CHECKID,
      payload: {email,farmcode}
    }
  },

  getLastCheckinIDSuccess: (model: ILastCheckinResponse[]): IGetLastCheckinIDSuccess => {
    return {
      type: Types.MASTER_GET_LAST_CHECKID_SUCCESS,
      payload: model,
    }
  },

  createNewCheckout: (checkout: ICheckingModel): ICreateNewCheckout => {
    return {
      type: Types.MASTER_CREATE_CHECKOUT,
      payload: checkout,
    };
  },

  createNewCheckoutSuccess: (checkoutId: number): ICreateNewCheckoutSuccess => {
    return {
      type: Types.MASTER_CREATE_CHECKOUT_SUCCESS,
      payload: {checkoutId}
    };
  },

  createNewChecking: (checking: ICheckingModel): ICreateNewChecking => {
    return {
      type: Types.MASTER_CREATE_CHECKING,
      payload: checking,
    };
  },

  createNewCheckingSuccess: (checkingId: number): ICreateNewCheckingSuccess => {
    return {
      type: Types.MASTER_CREATE_CHECKING_SUCCESS,
      payload: {checkingId}
    };
  },

  createNewCheckingModel: (model: ICheckingModelNew): ICreateNewCheckingModel => {
    return {
      type: Types.MASTER_CREATE_CHECKING_MODEL,
      payload: model,
    };
  },

  uploadImageToApi: (imageModel: IImageModel): IUploadImageToApi => {
    return {
      type: Types.MASTER_UPLOAD_IMAGE_TO_API,
      payload: imageModel,
    };
  },

  updateCheckingDay: (checkingId: number, Date_Qty: number): IUpdateCheckingDay => {
    return {
      type: Types.MASTER_UPDATE_CHECKING_DAY,
      payload: {checkingId, Date_Qty}
    };
  },

  updateCheckingNote: (checkingId: number, Note:string): IUpdateCheckingNote => {
    return {
      type: Types.MASTER_UPDATE_CHECKING_NOTE,
      payload: {checkingId, Note}
    };
  },

  deleteChecking: (checkingId: number): IDeleteChecking => {
    return {
      type: Types.MASTER_DELETE_CHECKING,
      payload: {checkingId},
    };
  },

  deleteCheckout: (checkingId: number): IDeleteCheckOut => {
    return {
      type: Types.MASTER_DELETE_CHECKOUT,
      payload: {checkingId},
    };
  },

  generateQR: (FarmID: string, FarmName: string, FARMLONGITUDE: string, FARMLATITUDE: string, unit: string, regionID: string): IGenerateQR => {
    return {
      type: Types.MASTER_GENERATE_QR,
      payload: {FarmID,FarmName,FARMLATITUDE,FARMLONGITUDE,unit,regionID},
    };
  },

  generateQRSuccess: (FarmID: string, QRcode: string): IGenerateQRSuccess => {
    return {
      type: Types.MASTER_GENERATE_QR_SUSCCESS,
      payload: {FarmID,QRcode},
    };
  },

  getCheckingHistory: (model: ICheckingHistoryModel): IFetchCheckingHistory => {
    return {
      type: Types.MASTER_FETCH_CHECKING_HISTORY,
      payload: model,
    };
  },

  getCheckingHistorySuccess: (checkingItem: ICheckingHistoryItem[]): IFetchCheckingHistorySucess => {
    return {
      type: Types.MASTER_FETCH_CHECKING_HISTORY_SUCCESS,
      payload: checkingItem,
    };
  },

  getAllReport: (modal: IAllReportModal): IFetchAllReport => {
    return {
      type: Types.MASTER_FETCH_ALL_REPORT,
      payload: modal,
    };
  },

  getAllReportSuccess: (allReport: IAllReport[]): IFetchAllReportSuccess => {
    return {
      type: Types.MASTER_FETCH_ALL_REPORT_SUCCESS,
      payload: allReport,
    };
  },

  getCheckingHistoryDetail: (model: ICheckingHistoryDetail[]): IFetchHistoryDetail => {
    return {
      type: Types.MASTER_FETCH_HISTORY_DETAIL,
      payload: model,
    };
  },

  getCheckingHistoryDetailSuccess: (checkingDetail: ICheckingHistoryDetail[]): IFetchHistoryDetailSuccess => {
    return {
      type: Types.MASTER_FETCH_HISTORY_DETAIL_SUCCESS,
      payload: checkingDetail,
    };
  },

  getCheckingImage: (imageID: string, isCheckOut: boolean): IGetCheckingImage => {
    return {
      type: Types.MASTER_GET_CHECKING_IMAGE,
      payload: {imageID, isCheckOut}
    };
  },

  getCheckingImageSuccess: (checkingImage: string, isCheckOut: boolean, imageID: string): IGetCheckingImageSuccess => {
    return {
      type: Types.MASTER_GET_CHECKING_IMAGE_SUCCESS,
      payload: {checkingImage, isCheckOut, imageID}
    };
  },

  getFarmListLocation: (regionId: string): IFetchingFarmLocationList => {
    return {type: Types.MASTER_FETCHING_FARMLIST, payload: {regionId}};
  },

  getFarmListLocationSuccess: (farmlist: IFarmItem[] ): IFetchingFarmLocationListSuccess => {
    return {type: Types.MASTER_FETCHING_FARMLIST_SUCCESS, payload: {farmlist}};
  },
  
  updateCustomerDropdownData: (
    data: DropdownItemType[],
  ): IUpdateCustomerDropdownData => ({
    type: Types.MASTER_UPDATE_CUSTOMER_DROPDOWN_DATA,
    payload: data,
  }),

  updateCustomer: (model: ICustomerDetail | null): IUpdateCustomer => {
    return {type: Types.MASTER_UPDATE_CUSTOMER, payload: model};
  },

  updateFarmLocation: (farmcode: string, region: string): IUpdateFarmLocation => {
    return {type: Types.MASTER_UPDATE_FARM_LOCATION, payload: {farmcode,region}}
  },

  createCustomer: (
    model: ICustomerDetail,
    
  ): ICreateCustomer => {
    return {
      type: Types.MASTER_CREATE_CUSTOMER,
      payload: {model},
    };
  },

  postCustomerToEsigning:(header: ICustomerDetail): IPostCustomerToEsigning => {
    return {
      type: Types.MASTER_POST_CUSTOMER_TO_ESIGNING,
      payload: header,
    };
  },

  createCustomerSuccess: (
    model: ICustomerTmpInfo,
    
  ): ICreateCustomerSuccess => {
    return {
      type: Types.MASTER_CREATE_CUSTOMER_SUCCESS,
      payload: {model},
    };
  },

  uploadImageChecking: (image: IImageChecking): IUploadImageToOneDrive => {
    return {
      type: Types.MASTER_UPLOAD_IMAGE_TO_ONEDRIVE,
      payload: image,
    };
  },

  uploadImageCheckingSuccess: (response: IImageResponse): IUploadImageToOneDriveSuccess => {
    return {
      type: Types.MASTER_UPLOAD_IMAGE_TO_ONEDRIVE_SUCCESS,
      payload: {response},
    };
  },

  masterChangeSubmitStatus: (
    isValue: boolean,
    screen: string | undefined,
  ): IMasterChangeSubmitStatus => {
    return {
      type: Types.MASTER_CHANGE_IS_SUBMIT_STATUS,
      payload: {isResult: isValue, screen},
    };
  },


  getLocationByUnits: (unitIDs: string[]): IFetchingLocationByUnits => {
    return {
      type: Types.MASTER_FETCHING_LOCAL_BY_UNITIDS,
      payload: unitIDs,
    };
  },
  updateLocationDropdownData: (
    data: DropdownItemType[],
  ): IUpdateLocationDropdownData => ({
    type: Types.MASTER_UPDATE_LOCATION_DROPDOWN_DATA,
    payload: data,
  }),
  getLocationByUnitsSuccess: (
    locations: ILocation[],
  ): IFetchLocationByUnitsSuccess => {
    return {
      type: Types.MASTER_FETCH_LOCATION_BY_UNIT_SUCCESS,
      payload: locations,
    };
  },
  getOffices: (userId: string): IFetchingOffice => {
    return {type: Types.MASTER_FETCHING_OFFICE_BY_USER, payload: userId};
  },
  getOfficesSuccess: (
    offices: IMasterResponseCommon[],
  ): IFetchOfficeSuccess => {
    return {type: Types.MASTER_FETCH_OFFICE_BY_USER_SUCCESS, payload: offices};
  },
  getDepartments: (userId: string, officeID: number): IFetchingDepartment => {
    return {
      type: Types.MASTER_FETCHING_DEPARTMENT_BY_USER,
      payload: {officeID, userId},
    };
  },
  getDepartmentsSuccess: (
    departments: IMasterResponseCommon[],
  ): IFetchDepartmentSuccess => {
    return {
      type: Types.MASTER_FETCH_DEPARTMENT_BY_USER_SUCCESS,
      payload: departments,
    };
  },
  getProductByUnit: (unitId?: string): IFetchingProductByUnit => {
    return {type: Types.MASTER_FETCHING_PRODUCTS_BY_UNIT, payload: unitId};
  },
  getProductsByUnitSuccess: (
    products: IMasterResponseCommon[],
  ): IFetchProductsByUnitSuccess => {
    return {
      type: Types.MASTER_FETCH_PRODUCTS_BY_UNIT_SUCCESS,
      payload: products,
    };
  },
  
  getSwinePrice: (price: IPriceModel): IGetSwinePrice => {
    return {
      type: Types.MASTER_GET_SWINE_PRICE_BY_CUST_PRODUCT,
      payload: price,
    };
  },
  getSwinePriceSuccess: (prices: IPrice[]): IGetSwinePriceSuccess => {
    return {
      type: Types.MASTER_GET_SWINE_PRICE_BY_CUST_PRODUCT_SUCCESS,
      payload: prices,
    };
  },
  getCustomerBalance: (custId: string, unitId: string): IGetCustomerBalance => {
    return {
      type: Types.MASTER_GET_CUSTOMER_BALANCES,
      payload: {custId, unitId},
    };
  },
  getCustomerBalanceSuccess: (
    balances: ICustomerBalance[],
  ): IGetCustomerBalanceSuccess => ({
    type: Types.MASTER_GET_CUSTOMER_BALANCES_SUCCESS,
    payload: balances,
  }),
  getUnitOfCustomer: (custId: string, units: string[]): IGetUnitOfCustomer => ({
    type: Types.MASTER_GET_UNITS_OF_CUSTOMER,
    payload: {custId, units},
  }),
  getUnitCustomerSuccess: (
    units: IUnit[],
    unitData: DropdownItemType[],
  ): IGetUnitOfCustomerSuccess => ({
    type: Types.MASTER_GET_UNITS_OF_CUSTOMER_SUCCESS,
    payload: {units, unitsDropdownData: unitData},
  }),
  getLocationsByUser: (): IGetLocationByUser => ({
    type: Types.MASTER_GET_LOCATIONS_BY_USER,
    payload: {},
  }),
  getLocationByUserSuccess: (
    locations: ILocation[],
  ): IGetLocationByUserSuccess => ({
    type: Types.MASTER_GET_LOCATIONS_BY_USER_SUCCESS,
    payload: {locations},
  }),
  getMenuByUser: (): IGetMenuByUser => ({
    type: Types.MASTER_GET_MENU_BY_USER,
    payload: {},
  }),

  getMenuByUserWithoutPass:(email: string): IGetMenuByUserWithoutPass => ({
    type: Types.MASTER_GET_MENU_BY_USER_WITHOUT_PASS,
    payload: {email},
  }),

  getMenuByUserSuccess: (
    menus: IMasterMenu[],
    userMenuIds: number[],
  ): IGetMenuByUserSuccess => ({
    type: Types.MASTER_GET_MENU_BY_USER_SUCCESS,
    payload: {menus, userMenuIds},
  }),
  
  appStart: (): IAppStart => ({
    type: Types.MASTER_APP_START,
    payload: {},
  }),
  setupPassCode: (passCode: string): ISetupPasscode => ({
    type: Types.MASTER_SETUP_PASSCODE,
    payload: {passCode},
  }),
  loginSuccess: (
    tokenObj: AccessTokenObject,
    accessToken: string,
  ): ILoginSuccess => ({
    type: Types.MASTER_LOGIN_SUCCESS,
    payload: {tokenObj, accessToken},
  }),
  checkSetupPassCodeStatus: (): ICheckPassCodeStatus => ({
    type: Types.MASTER_CHECK_SETUP_PASSCODE_STATUS,
    payload: {},
  }),
  checkPassCodeIsValid: (passCode: string): ICheckPassCodeIsValid => ({
    type: Types.MASTER_CHECK_POSCODE_IS_VALID,
    payload: {passCode},
  }),
  getSaleLocation: (): IGetSaleLocation => ({
    type: Types.MASTER_GET_SALE_LOCATION,
    payload: {},
  }),
  getSaleLocationSuccess: (
    locations: ILocation[],
  ): IGetSaleLocationSuccess => ({
    type: Types.MASTER_GET_SALE_LOCATION_SUCCESS,
    payload: {locations},
  }),
  getSaleUnits: (custId?: string): IGetSaleUnits => ({
    type: Types.MASTER_GET_SALE_UNITS,
    payload: {custId},
  }),
  getSaleUnitsSuccess: (units: IUnit[]): IGetSaleUnitsSuccess => ({
    type: Types.MASTER_GET_SALE_UNITS_SUCCESS,
    payload: {units},
  }),
  getAllProducts: (): IGetAllProducts => ({
    type: Types.MASTER_GET_ALL_PRODUCTS,
    payload: {},
  }),
  getAllProductsSuccess: (
    products: IProductStockDTO[],
  ): IGetAllProductsSuccess => ({
    type: Types.MASTER_GET_ALL_PRODUCTS_SUCCESS,
    payload: {products},
  }),
};

export default MasterActions;
