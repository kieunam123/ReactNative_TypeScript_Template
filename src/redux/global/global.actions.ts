import {IUserParams} from '../../commons/types';
import {
  GlobalModalType,
  IAcceptDenyConfirmModal,
  IClearAction,
  ICloseErrorInfoModal,
  ICloseLoadingModalGlobal,
  ILogOut,
  IOpenErrorInfoModal,
  IOpenLoadingModalGlobal,
  IResetAppState,
  ISetAction,
  ISetConfirmData,
  ISetCurrentDrawerScreen,
  ISetDataForPdfViewerScreen,
  IUpdateUserParams,
  Types,
} from './global.types';

const GlobalActions = {
  openLoadingModal: (name: string): IOpenLoadingModalGlobal => {
    return {type: Types.GLOBAL_OPEN_LOADING_MODAL, payload: {name}};
  },
  closeLoadingModal: (name?: string): ICloseLoadingModalGlobal => {
    return {type: Types.GLOBAL_CLOSE_LOADING_MODAL, payload: {name}};
  },
  openErrorInfoModal: (
    message: string,
    type: GlobalModalType = 'INFO',
  ): IOpenErrorInfoModal => {
    return {
      type: Types.GLOBAL_OPEN_ERROR_WARNING_INFORMATION_MODAL,
      payload: {type, message},
    };
  },
  closeErrorInfoModal: (): ICloseErrorInfoModal => {
    return {type: Types.GLOBAL_CLOSE_ERROR_WARNING_INFORMATION_MODAL};
  },
  setAction: (name: string, status = false): ISetAction => {
    return {type: Types.GLOBAL_SET_ACTION, payload: {name, status}};
  },
  clearAction: (): IClearAction => ({type: Types.GLOBAL_CLEAR_ACTION}),
  updateUserParams: (userParams: IUserParams): IUpdateUserParams => ({
    type: Types.GLOBAL_UPDATE_USER_PARAMS,
    payload: {userParams},
  }),
  logOut: (): ILogOut => ({
    type: Types.GLOBAL_LOG_OUT,
    payload: {},
  }),
  resetAppState: (): IResetAppState => ({
    type: Types.GLOBAL_RESET_APP_STATE,
    payload: {},
  }),
  setCurrentDrawer: (
    drawerName: string,
    drawerId: number,
    drawerTitle: string,
    isInternalTransfer: boolean,
  ): ISetCurrentDrawerScreen => {
    return {
      type: Types.GLOBAL_SET_CURRENT_DRAWER_SCREEN,
      payload: {drawerName, drawerId, drawerTitle, isInternalTransfer},
    };
  },
  setDataForPdfViewerScreen: (
    data: string,
    title?: string,
  ): ISetDataForPdfViewerScreen => ({
    type: Types.GLOBAL_SET_DATA_PDF_VIEWER_SCREEN,
    payload: {data, title},
  }),
  setConfirmData: (
    actionName: string,
    title: string,
    payload?: object,
  ): ISetConfirmData => ({
    type: Types.GLOBAL_SET_CONFIRM_MODAL,
    payload: {actionName, title, payload},
  }),
  acceptDenyConfirm: (accepted: boolean): IAcceptDenyConfirmModal => ({
    type: Types.GLOBAL_CONFIRM_MODAL_ACCEPT_DENY,
    payload: {accepted},
  }),
};

export default GlobalActions;
