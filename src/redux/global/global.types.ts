import {IUserParams} from '../../commons/types';

export type GlobalModalType = 'ERROR' | 'INFO' | 'WARNING';

export interface IGlobalState {
  sagaFunctions: string[];
  isInternalTransfer: boolean;
  action: {
    name: string | null;
    status: boolean;
  };
  userParams: IUserParams;
  isLoading: boolean;
  modalInfo: {
    isOpen: boolean;
    message: string;
    modalType: GlobalModalType;
  };
  isConnectedInternet: boolean;
  currentDrawerScreen?: string;
  drawerId: number;
  drawerTitle: string;
  pdfViewer: {
    data?: string;
    title?: string;
  };
  confirm: {
    isOpen: boolean;
    title: string;
    accepted: boolean;
    actionName: string;
    payload?: object;
  };
}

export enum Types {
  GLOBAL_SET_ACTION = 'GLOBAL_SET_ACTION',
  GLOBAL_CLEAR_ACTION = 'GLOBAL_CLEAR_ACTION',
  SET_GLOBAL_PARAMETER = 'SET_GLOBAL_PARAMETER',
  GLOBAL_OPEN_LOADING_MODAL = 'GLOBAL_OPEN_LOADING_MODAL',
  GLOBAL_CLOSE_LOADING_MODAL = 'GLOBAL_CLOSE_LOADING_MODAL',

  GLOBAL_OPEN_ERROR_WARNING_INFORMATION_MODAL = 'GLOBAL_OPEN_ERROR_WARNING_INFORMATION_MODAL',
  GLOBAL_CLOSE_ERROR_WARNING_INFORMATION_MODAL = 'GLOBAL_CLOSE_ERROR_WARNING_INFORMATION_MODAL',

  GLOBAL_UPDATE_USER_PARAMS = 'GLOBAL_UPDATE_USER_PARAMS',

  GLOBAL_LOG_OUT = 'GLOBAL_LOG_OUT',
  GLOBAL_RESET_APP_STATE = 'GLOBAL_RESET_APP_STATE',

  GLOBAL_SET_CURRENT_DRAWER_SCREEN = 'GLOBAL_SET_CURRENT_DRAWER_SCREEN',
  GLOBAL_SET_DATA_PDF_VIEWER_SCREEN = 'GLOBAL_SET_DATA_PDF_VIEWER_SCREEN',

  GLOBAL_SET_CONFIRM_MODAL = 'GLOBAL_SET_CONFIRM_MODAL',
  GLOBAL_CONFIRM_MODAL_ACCEPT_DENY = 'GLOBAL_CONFIRM_MODAL_ACCEPT_DENY',
}

export interface ISetGlobalParameter {
  type: Types.SET_GLOBAL_PARAMETER;
  payload: IGlobalState;
}

export interface IOpenLoadingModalGlobal {
  type: Types.GLOBAL_OPEN_LOADING_MODAL;
  payload: {name: string};
}

export interface ICloseLoadingModalGlobal {
  type: Types.GLOBAL_CLOSE_LOADING_MODAL;
  payload: {name?: string};
}

export interface IOpenErrorInfoModal {
  type: Types.GLOBAL_OPEN_ERROR_WARNING_INFORMATION_MODAL;
  payload: {
    message: string;
    type: GlobalModalType;
  };
}

export interface ICloseErrorInfoModal {
  type: Types.GLOBAL_CLOSE_ERROR_WARNING_INFORMATION_MODAL;
}

export interface ISetAction {
  type: Types.GLOBAL_SET_ACTION;
  payload: {name: string; status: boolean};
}

export interface IClearAction {
  type: Types.GLOBAL_CLEAR_ACTION;
}

export interface IUpdateUserParams {
  type: Types.GLOBAL_UPDATE_USER_PARAMS;
  payload: {userParams: IUserParams};
}

export interface ILogOut {
  type: Types.GLOBAL_LOG_OUT;
  payload: {};
}

export interface IResetAppState {
  type: Types.GLOBAL_RESET_APP_STATE;
  payload: {};
}

export interface ISetCurrentDrawerScreen {
  type: Types.GLOBAL_SET_CURRENT_DRAWER_SCREEN;
  payload: {
    drawerName: string;
    drawerId: number;
    drawerTitle: string;
    isInternalTransfer: boolean;
  };
}

export interface ISetDataForPdfViewerScreen {
  type: Types.GLOBAL_SET_DATA_PDF_VIEWER_SCREEN;
  payload: {data?: string; title?: string};
}

export interface ISetConfirmData {
  type: Types.GLOBAL_SET_CONFIRM_MODAL;
  payload: {title: string; actionName: string; payload?: object};
}

export interface IAcceptDenyConfirmModal {
  type: Types.GLOBAL_CONFIRM_MODAL_ACCEPT_DENY;
  payload: {accepted: boolean};
}

export type GlobalActionType =
  | ISetGlobalParameter
  | IOpenLoadingModalGlobal
  | ICloseLoadingModalGlobal
  | IOpenErrorInfoModal
  | ICloseErrorInfoModal
  | ISetAction
  | IClearAction
  | IUpdateUserParams
  | ISetCurrentDrawerScreen
  | ISetDataForPdfViewerScreen
  | ISetConfirmData
  | IAcceptDenyConfirmModal;
