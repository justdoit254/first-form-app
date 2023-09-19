import {createSlice} from '@reduxjs/toolkit';

const selectPlanSlice = createSlice({
  name: 'selectPlan',
  initialState: {
    freq: false,
    plan: '',
  },
  reducers: {
    changeFreq(state, action) {
      // Payload will bring true/false as parameter
      // false === monthly ; true === yearly
      state.freq = action.payload;
    },
    changePlan(state, action) {
      // Payload will bring plan name as parameter
      state.plan = action.payload;
    },
  },
});

export const {changeFreq, changePlan} = selectPlanSlice.actions;
export const selectPlanReducer = selectPlanSlice.reducer;
