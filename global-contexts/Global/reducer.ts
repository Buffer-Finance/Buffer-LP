export interface iGlobalState {
  isDarkMode: boolean;
}

const defaultState: iGlobalState = {
  isDarkMode: true,
};
type GlobalActions = {
  type: "UPDATE_IS_DARK_MODE";
  payload: boolean;
};

const reducer = (state: iGlobalState, action: GlobalActions): iGlobalState => {
  switch (action.type) {
    case "UPDATE_IS_DARK_MODE":
      return {
        ...state,
        isDarkMode: action.payload,
      };
    default:
      throw new Error("Invalid Action.");
  }
};
export type { GlobalActions };
export { defaultState };
export default reducer;
