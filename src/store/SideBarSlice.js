import {createSlice} from '@reduxjs/toolkit';

const sideBarSlice = createSlice({
  name: 'sideBar',
  initialState: {
    yourInfo: true,
    selectPlan: false,
    addOns: false,
    summary: false,
    completed: false,
  },
  reducers: {
    styleYourInfo(state, action) {
      state.yourInfo = action.payload;
    },
    styleSelectPlan(state, action) {
      state.selectPlan = action.payload;
    },
    styleAddOns(state, action) {
      state.addOns = action.payload;
    },
    styleSummary(state, action) {
      state.summary = action.payload;
    },
    styleCompleted(state, action) {
      state.completed = action.payload;
    },
  },
});

export const {
  styleYourInfo,
  styleSelectPlan,
  styleAddOns,
  styleSummary,
  styleCompleted,
} = sideBarSlice.actions;
export const sideBarReducer = sideBarSlice.reducer;
