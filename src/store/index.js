import {configureStore} from '@reduxjs/toolkit';
import {
  changeName,
  changeEmail,
  changePhone,
  changeIsYourInfoValid,
  yourInfoReducer,
} from './YourInfoSlice';
import {changeFreq, changePlan, selectPlanReducer} from './SelectPlanSlice';
import {
  changeOnlineServices,
  changeLargeStorage,
  changeCustomizableProfile,
  addOnsReducer,
} from './AddOnsSlice';
import {
  styleYourInfo,
  styleSelectPlan,
  styleAddOns,
  styleSummary,
  styleCompleted,
  sideBarReducer,
} from './SideBarSlice';

const store = configureStore({
  reducer: {
    yourInfo: yourInfoReducer,
    selectPlan: selectPlanReducer,
    addOns: addOnsReducer,
    sideBar: sideBarReducer,
  },
});

export {
  store,
  changeName,
  changeEmail,
  changePhone,
  changeIsYourInfoValid,
  yourInfoReducer,
  changeFreq,
  changePlan,
  selectPlanReducer,
  changeOnlineServices,
  changeLargeStorage,
  changeCustomizableProfile,
  addOnsReducer,
  styleYourInfo,
  styleSelectPlan,
  styleAddOns,
  styleSummary,
  styleCompleted,
  sideBarReducer,
};
