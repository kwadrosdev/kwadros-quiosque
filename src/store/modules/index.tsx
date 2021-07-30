import { combineReducers } from "redux";

import platformReducer from "./platform/reducer";

const rootReducer = combineReducers({
  platform: platformReducer,
 
});

export default rootReducer;
