import {createSlice} from '@reduxjs/toolkit';

const yourInfoSlice = createSlice({
  name: 'yourInfo',
  initialState: {
    name: '',
    email: '',
    phone: '',
    isYourInfoValid: false,
  },
  reducers: {
    changeName(state, action) {
      // Payload will bring the name as parameter
      state.name = action.payload;
    },
    changeEmail(state, action) {
      // Payload will bring the email as parameter
      state.email = action.payload;
    },
    changePhone(state, action) {
      // Payload will bring the phone as parameter
      state.phone = action.payload;
    },
    changeIsYourInfoValid(state, action) {
      // false == not valid [will not allow to move to next step]
      // true == valid [can move to next step]
    },
  },
});

export const {changeName, changeEmail, changePhone, changeIsYourInfoValid} =
  yourInfoSlice.actions;
export const yourInfoReducer = yourInfoSlice.reducer;
