import { LIST_USERS_INIT, LIST_USERS_SUCCESS, LIST_USERS_ERROR } from "./types";
const initialStore = {
  // Lista de Usuarios
  data: [],
  error: null,
  success: null,
  loading: false,
};

export const usersReducer = (prevState = initialStore, action) => {
  switch (action.type) {
    case LIST_USERS_INIT:
      return {...prevState,
        loading: true,
      };
    case LIST_USERS_SUCCESS:
      return {...prevState, 
        data: action.payload,
        error: false,
        success: true,
        loading: false,
      };
    case LIST_USERS_ERROR:
      return {...prevState,
        error: action.payload,
        success: false,
        loading: false,
      };
    default:
      return prevState;
  }
};
