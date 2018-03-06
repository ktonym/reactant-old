import {combineReducers} from "redux";
/*import user from "./reducers/user";*/
import clients from "./reducers/clients";
import formErrors from "./reducers/formErrors";
import user from "./reducers/user";

export default combineReducers({
    user,
    clients,
    formErrors
});