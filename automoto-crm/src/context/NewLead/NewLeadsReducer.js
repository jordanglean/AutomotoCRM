const newLeadReducer = (state, action) => {
  switch (action.type) {
    case "GET_NEW_LEADS":
      return {
        ...state,
        newLeads: action.payload,
        isLoading: false,
      };
    case "ADD_NEW_LEAD":
      return {
        ...state,
        newLeads: action.payload,
      };
    case "DELETE_LEAD":
      return {
        ...state,
        newLeads: action.payload,
      };
    case "SET_ITEM_TO_EDIT":
      return {
        ...state,
        editItem: action.payload,
        edit: true,
      };
    case "UPDATE_LEAD":
      return {
        ...state,
        newLeads: action.payload,
      };
    case "CLOSE_LEAD_EDIT":
      return {
        ...state,
        editItem: {},
        edit: false,
      };
    case "SEARCH_LEAD":
      return {
        ...state,
        newLeads: action.payload,
        isLoading: false,
      };
    case "CLEAR_LEAD_SEARCH":
      return {
        ...state,
        isLoading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default newLeadReducer;
