import { SIDE_ICON, WALLET_ICON, WALLET_ICON2 } from "../actions/constants";

const initialState = {
	numIcon: 0,
	numIcon2: 0,
	sideOfIcon: 0,
};

const iconReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case WALLET_ICON:
			return {
				...state,
				numIcon: action.payload,
			};
		case WALLET_ICON2:
			return {
				...state,
				numIcon2: action.payload,
			};
		case SIDE_ICON:
			return {
				...state,
				sideOfIcon: action.payload,
			};

		default:
			return state;
	}
};

export default iconReducer;
