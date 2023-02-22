export const initialState = {
  data: '2',
  value: '',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'setValue':
      return { ...state, value: action.payload };

    default:
      return state;
  }
};
