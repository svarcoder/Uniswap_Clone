import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import iconReducer from "./reducers/icon.reducer";
import walletReducer from "./reducers/wallet.reducer";

const rootReducer = combineReducers({
	wallet: walletReducer,
	icon: iconReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
