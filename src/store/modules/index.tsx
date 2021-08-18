import { combineReducers } from "redux";

import platformReducer from "./platform/reducer";
import reviewReducer from "./review/reducer";

const rootReducer = combineReducers({
  platform: platformReducer,
  review: reviewReducer,
 
});

export default rootReducer;
