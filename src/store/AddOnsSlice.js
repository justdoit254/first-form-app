import {createSlice} from '@reduxjs/toolkit';

const addOnsSlice = createSlice({
  name: 'addOns',
  initialState: {
    onlineServices: false,
    largeStorage: false,
    customizableProfile: false,
  },
  reducers: {
    changeOnlineServices(state, action) {
      // Payload will bring true/false as parameter
      // false === unselected ; true === selected
      state.onlineServices = action.payload;

      // Below code for trying to get it done with one function
      // const name = action.payload.name
      // state.name = action.payload.value
    },
    changeLargeStorage(state, action) {
      // Payload will bring true/false as parameter
      // false === unselected ; true === selected
      state.largeStorage = action.payload;
    },
    changeCustomizableProfile(state, action) {
      // Payload will bring true/false as parameter
      // false === unselected ; true === selected
      state.customizableProfile = action.payload;
    },
  },
});

export const {
  changeOnlineServices,
  changeLargeStorage,
  changeCustomizableProfile,
} = addOnsSlice.actions;
export const addOnsReducer = addOnsSlice.reducer;
