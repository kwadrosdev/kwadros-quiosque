import { combineReducers } from "redux";

import platformReducer from "./platform/reducer";
import reviewReducer from "./review/reducer";
import userReducer from "./user/reducer";

const rootReducer = combineReducers({
  platform: platformReducer,
  review: reviewReducer,
  user: userReducer,
 
});

export default rootReducer;
