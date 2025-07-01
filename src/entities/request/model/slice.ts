import { createSlice } from '@reduxjs/toolkit';
// import { RequestType } from './types.ts';

interface RequestState {
  list?: any;
}

const initialState: RequestState = {
  list: undefined,
};

const requestSlice = createSlice({
  name: 'requests',
  initialState,
  reducers: {
    addRequest(state, action) {
      state.list.push(action.payload);
      localStorage.setItem('requests', JSON.stringify(state.list));
    },
    deleteRequest(state, action) {
      state.list = state.list.filter((r) => r.id !== action.payload);
      localStorage.setItem('requests', JSON.stringify(state.list));
    },
    updateRequest(state, action) {
      state.list = state.list.map((r) =>
        r.id === action.payload.id ? action.payload : r,
      );
      localStorage.setItem('requests', JSON.stringify(state.list));
    },
  },
});

export const { addRequest, deleteRequest, updateRequest } =
  requestSlice.actions;
export default requestSlice.reducer;
