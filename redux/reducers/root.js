import genericReducer from "./generic";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  generic_data: genericReducer,
});

export default rootReducer;
