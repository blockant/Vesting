import { combineReducers } from "redux";
import metamask from "./metamask";
import vesting from "./vesting"
export default combineReducers({
    metamask,
    vesting
});
