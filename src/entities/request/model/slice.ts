import { createSlice } from '@reduxjs/toolkit';
import { type RequestType } from './types.ts';
import {
  loadRequests,
  saveRequests,
} from '../../../shared/lib/storage/localStorageService.ts';

interface RequestState {
  list: RequestType[];
}

const initialState: RequestState = {
  list: loadRequests() || [],
};

const requestSlice = createSlice({
  name: 'requests',
  initialState,
  reducers: {
    addRequest(state, action) {
      state.list.push(action.payload);
      saveRequests(state.list);
    },
    deleteRequest(state, action) {
      state.list = state.list.filter((request) => request.id !== action.payload);
      saveRequests(state.list);
    },
    updateRequest(state, action) {
      state.list = state.list.map((request) =>
        request.id === action.payload.id ? action.payload : request,
      );
      saveRequests(state.list);
    },
  },
});

export const { addRequest, deleteRequest, updateRequest } =
  requestSlice.actions;
export default requestSlice.reducer;
