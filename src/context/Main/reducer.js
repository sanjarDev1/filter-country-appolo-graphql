export const initialState = {
  data: [],
  value: '',
  loading: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'setValue':
      return { ...state, value: action.payload };
    case 'setData':
      return {
        ...state,
        data: action?.payload?.data,
        loading: action?.payload?.loading,
      };
    default:
      return state;
  }
};
