const initialState = {
  countries: [],
  isLoading: false,
  isError: false,
  theme: 'light',
  searchTerm: '',
  regionFilterValue: '',
  sortValue: '',
  currentPage: 1,
  countriesPerPage: 36,
  selectedCountry: {}, // used for loading data into CountryDetails page
  currentCountries: [],
};

export const rootReducer = function (state = initialState, action) {
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
        countries: action.payload,
      };
    case 'FETCH_COUNTRIES_ERROR':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'SET_THEME_LIGHT':
      return {
        ...state,
        theme: 'light',
      };
    case 'SET_THEME_DARK':
      return {
        ...state,
        theme: 'dark',
      };
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.payload,
      };
    case 'SET_REGION_FILTER_VALUE':
      return {
        ...state,
        regionFilterValue: action.payload,
      };
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.payload,
      };
    case 'SET_COUNTRIES_PER_PAGE':
      return {
        ...state,
        countriesPerPage: action.payload,
      };
    case 'SET_SELECTED_COUNTRY':
      return {
        ...state,
        selectedCountry: action.payload,
      };
    case 'SET_CURRENT_COUNTRIES':
      return {
        ...state,
        currentCountries: action.payload,
      };
    case 'SET_SORT_VALUE':
      return {
        ...state,
        sortValue: action.payload,
      };
    default:
      return state;
  }
};
