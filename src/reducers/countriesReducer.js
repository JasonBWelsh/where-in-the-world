export const countriesReducer = function (state, action) {
  console.log('DRD `countriesReducer` log action:::', action);
  switch (action.type) {
    case 'FETCH_COUNTRIES_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'FETCH_COUNTRIES_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case 'FETCH_COUNTRIES_ERROR':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
