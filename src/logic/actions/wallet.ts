import {
	GET_BALANCE,
	LOGIN,
	WALLET_CONNECT_CHECK,
	SET_CHAINID,
	WALLET_BALANCE,
	WALLET_ICON,
	WALLET_ICON2,
	SIDE_ICON,
} from "./constants";
import wallet from "../../utils/wallet";

export const getLPBalance = (amount: any) => {
	return {
		type: GET_BALANCE,
		lp_Balance: amount,
	};
};

export const Login = (userAddress: String) => {
	return {
		type: LOGIN,
		address: userAddress,
	};
};

export const walletConnectCheck = (value: any) => {
	return {
		type: WALLET_CONNECT_CHECK,
		value: value,
	};
};
export const setChainIdValue = (val: any) => {
	return {
		type: SET_CHAINID,
		value: val,
	};
};
export const getWalletBalance = (balance: String) => {
	return {
		type: WALLET_BALANCE,
		balance: balance,
	};
};

export const getBalance = (address: any) => async (dispatch: any) => {
	if (address) {
		const balance = await wallet.web3.eth.getBalance(address);
		dispatch(getWalletBalance(balance));
		dispatch(getLPBalance(address));
	}
};

export const getWalletIcon = (Icon: Number) => {
	return {
		type: WALLET_ICON,
		payload: Icon,
	};
};
export const getWalletIcon2 = (Icon: Number) => {
	return {
		type: WALLET_ICON2,
		payload: Icon,
	};
};
export const getSideIcon = (Side: Number) => {
	return {
		type: SIDE_ICON,
		payload: Side,
	};
};
