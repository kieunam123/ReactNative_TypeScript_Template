import {DepartmentId} from '../../commons/types';
import {IGlobalState, GlobalActionType, Types} from './global.types';

/**
 * DepId:
 * - 1: Bộ phận kinh doanh heo thịt
 * - 4: Bộ phận điều chuyển heo nội bộ
 * - 5: Bộ phận kho.
 */

const initialState: IGlobalState = {
  sagaFunctions: [],
  currentDrawerScreen: undefined,
  drawerId: 0,
  drawerTitle: '',
  isInternalTransfer: false,
  userParams: {
    unitId: undefined,
    deptId: undefined,
    officeId: undefined,
    regionId: undefined,
    fullName: '',
    userId: '',
    email: '',
    // unitId: '00005',
    // deptId: 99,
    // officeId: 1,
    // regionId: '2',
    // fullName: 'Le Van Vien',
    // userId: 'vien.levan',
    // email: 'vien.levan@japfa.com',
  },
  isLoading: false,
  modalInfo: {
    isOpen: false,
    message: '',
    modalType: 'INFO',
  },
  action: {
    name: '',
    status: false,
  },
  isConnectedInternet: false,
  pdfViewer: {data: ''},
  confirm: {
    title: '',
    isOpen: false,
    accepted: false,
    actionName: '',
  },
};

export default function GlobalReducer(
  state = initialState,
  action: GlobalActionType,
): IGlobalState {
  switch (action.type) {
    case Types.SET_GLOBAL_PARAMETER: {
      return {...state};
    }
    case Types.GLOBAL_OPEN_LOADING_MODAL: {
      const {name} = action.payload;
      const {sagaFunctions} = state;
      sagaFunctions.push(name);
      return {...state, isLoading: true, sagaFunctions};
    }
    case Types.GLOBAL_CLOSE_LOADING_MODAL: {
      const {name} = action.payload;
      const {sagaFunctions} = state;
      if (!name) sagaFunctions.length = 0;
      else {
        const index = sagaFunctions.findIndex((p) => p === name);
        if (index > -1) sagaFunctions.splice(index, 1);
      }
      const isLoading = sagaFunctions.length > 0;
      return {...state, isLoading, sagaFunctions};
    }
    case Types.GLOBAL_OPEN_ERROR_WARNING_INFORMATION_MODAL: {
      const {message, type} = action.payload;
      return {
        ...state,
        isLoading: false,
        modalInfo: {
          isOpen: true,
          message,
          modalType: type,
        },
      };
    }
    case Types.GLOBAL_CLOSE_ERROR_WARNING_INFORMATION_MODAL: {
      return {...state, modalInfo: {...state.modalInfo, isOpen: false}};
    }
    case Types.GLOBAL_SET_ACTION: {
      const {name, status} = action.payload;
      return {...state, action: {name, status}};
    }
    case Types.GLOBAL_CLEAR_ACTION: {
      return {...state, action: {name: null, status: false}};
    }
    case Types.GLOBAL_UPDATE_USER_PARAMS: {
      const {userParams} = action.payload;
      const isInternalTransfer =
        userParams.deptId === DepartmentId.INTERNAL_TRANSFER;
      // userParams.userId = 'tam.nguyenminh99';
      // userParams.email = 'tam.nguyenminh99@japfa.com';
      // userParams.userId = 'viet.vominh';
      // userParams.email = 'viet.vominh@japfa.com';
      return {...state, userParams, isInternalTransfer};
    }
    case Types.GLOBAL_SET_CURRENT_DRAWER_SCREEN: {
      const {drawerName, drawerId, drawerTitle, isInternalTransfer} =
        action.payload;
      return {
        ...state,
        currentDrawerScreen: drawerName,
        drawerId,
        drawerTitle,
        isInternalTransfer,
      };
    }
    case Types.GLOBAL_SET_DATA_PDF_VIEWER_SCREEN: {
      const {data, title} = action.payload;
      return {...state, pdfViewer: {data, title}};
    }
    case Types.GLOBAL_SET_CONFIRM_MODAL: {
      const {title, actionName, payload} = action.payload;
      const {confirm} = state;
      confirm.isOpen = true;
      confirm.accepted = false;
      confirm.title = title;
      confirm.actionName = actionName;
      confirm.payload = payload;
      return {...state, confirm};
    }
    case Types.GLOBAL_CONFIRM_MODAL_ACCEPT_DENY: {
      const {accepted} = action.payload;
      const {confirm} = state;
      confirm.accepted = accepted;
      confirm.isOpen = false;
      confirm.title = '';
      return {...state, confirm};
    }
    default:
      return state;
  }
}
