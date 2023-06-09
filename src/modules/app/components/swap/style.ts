import styled from "styled-components";
import { colors, screenSizes } from "../../../../shared/styles/theme";

// interface Props {
// 	onPress: any;
//   }

export const SwapContainerWrap = styled.div`
	background: #f7eff5;
	width: 100%;
	height: 100%;
	position: fixed;
	z-index: 100000;
	color: #160000;
`;
export const SwapNavbar = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0px auto;
	padding: 20px 0px;
	text-align: center;
	max-width: 1200px;
	top: 0px;
`;
export const SwapNavbarLogo = styled.div`
	height: 30px;
	width: 30px;

	cursor: pointer;
	&:hover {
		filter: grayscale(60%);
	}
	@media (max-width: ${screenSizes.mediaM}px) {
		position: absolute;
	}
`;
export const SwapNavbarItem = styled.div`
	display: flex;
	flex-direction: row;
	border: 1px solid white;
	border-radius: 15px;
	background: #ffffff;
	padding: 10px;
	margin-left: 200px;
	@media (max-width: ${screenSizes.mediaM}px) {
		display: none;
	}
`;
export const SwapNavbarItemFooter = styled.div`
	display: flex;
	flex-direction: row;
	border: 1px solid white;
	border-radius: 15px;
	background: #ffffff;
	padding: 10px;
	margin-left: 20px;
	width: 250px;
	@media (min-width: ${screenSizes.mediaM}px) {
		display: none;
	}
`;
export const SwapNavbarItemFooterWrap = styled.div`
	display: flex;
	justify-content: center;
`;

export const SwapNavbarItemEl = styled.div`
	padding: 0px 10px;
	cursor: pointer;
	font-size: 1rem;
	font-weight: 500;
	color: rgb(86, 90, 105);
	span {
		color: rgb(0, 0, 0);
		background: #edeef2;
		padding: 10px;
		border-radius: 15px;
		margin-left: -15px;
		font-size: 1rem;
		font-weight: 600;
	}
`;
export const SwapNavbarItem2 = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-self: flex-end;
	@media (max-width: ${screenSizes.mediaM}px) {
		margin-left: 50px;
	}
`;
export const SwapNavbarItem2El = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: rgb(247, 248, 250);
	border: 1px solid rgb(247, 248, 250);
	border-radius: 15px;
	color: rgb(0, 0, 0);
	cursor: pointer;
	padding: 8px;
	font-size: 1rem;
	font-weight: 500;
	margin-left: 5px;

	span {
		margin-left: 5px;
		img {
			height: 1.2rem;
			width: 1.2rem;
			margin-top: 5px;
		}
	}
`;
export const SwapNavbarItem2ElWallet = styled(SwapNavbarItem2El)`
	background-color: rgb(253, 234, 241);
	border: 1px solid rgb(253, 234, 241);
	&:hover {
		border: 1px solid rgb(246, 221, 232);
	}
`;

export const SwapNavbarItem2ElOptionEl = styled.div`
	position: absolute;
	max-width: 196px;
	max-height: 350px;
	overflow: auto;
	background-color: rgb(247, 248, 250);
	box-shadow: rgb(0 0 0 / 1%) 0px 0px 1px, rgb(0 0 0 / 4%) 0px 4px 8px,
		rgb(0 0 0 / 4%) 0px 16px 24px, rgb(0 0 0 / 1%) 0px 24px 32px;
	border: 1px solid rgb(255, 255, 255);
	border-radius: 12px;
	padding: 0.5rem;
	display: flex;
	flex-direction: column;
	font-size: 16px;
	top: 3rem;
	z-index: 100;
	right: 0rem;
	display: none;
`;

export const SwapNavbarItem2ElOption = styled(SwapNavbarItem2El)`
	position: relative;
	&:target ${SwapNavbarItem2ElOptionEl} {
		display: block;
	}
`;

export const SwapNavbarItem2ElOptionElChild = styled.div`
	display: flex;
	justify-content: space-between;
	cursor: pointer;
	font-weight: 500;
	font-size: 16px;
	color: rgb(86, 90, 105);
	align-items: center;
	padding: 0.3rem;
`;

export const SwapBody = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0px auto;
	padding: 20px 0px;
	text-align: center;
	max-width: 1200px;
	top: 0px;
`;
export const SwapBodyCard = styled.div`
	height: 290px;
	width: 450px;
	border: 1px solid #ffffff;
	background-color: #ffffff;
	border-radius: 15px;
	padding: 20px;
	margin: 40px;
	@media (max-width: ${screenSizes.mediaS}px) {
		height: 290px;
		width: 250px;
	}
`;
export const SwapBodyCardHeader = styled.div`
	display: flex;
	justify-content: space-between;
	span {
		color: rgb(0, 0, 0);
		margin: 0px;
		font-weight: 500;
		font-size: 16px;
	}
`;
export const SwapBodyCardBody = styled.div`
	display: flex;
	justify-content: space-between;
	border-radius: 20px;
	border: 1px solid rgb(237, 238, 242);
	background-color: rgb(247, 248, 250);
	padding: 20px 20px;
	margin: 0px 0px;
`;
export const SwapBodyCardSelect = styled.button`
	visibility: visible;
	-webkit-box-align: center;
	align-items: center;
	font-size: 24px;
	font-weight: 500;
	background-color: rgb(255, 255, 255);
	color: rgb(0, 0, 0);
	border-radius: 16px;
	box-shadow: rgb(0 0 0 / 8%) 0px 6px 10px;
	outline: none;
	cursor: pointer;
	user-select: none;
	border: none;
	height: 2.4rem;
	width: 120px;
	padding: 0px 8px;
	-webkit-box-pack: justify;
	justify-content: space-between;
	margin-right: 12px;
`;
export const SwapBodyCardSelectOption = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 5px;
	align-items: center;
	span {
		margin: 0px 0.25rem;
		font-size: 18px;
		img {
			height: 1rem;
			width: 1rem;
		}
	}
`;
export const SwapBodyCardInput = styled.input`
	width: 280px;
	font-size: 24px;
	font-weight: 800;
	border: none;
	outline: none;
	text-align: right;
	background-color: rgb(247, 248, 250);
	@media (max-width: ${screenSizes.mediaS}px) {
		width: 80px;
	}
`;
export const SwapBodyCardButton = styled.button`
	background-color: rgb(253, 234, 241);
	color: rgb(213, 0, 102);
	font-size: 16px;
	font-weight: 500;
	padding: 16px;
	width: 100%;
	font-weight: 500;
	text-align: center;
	border-radius: 20px;
	outline: none;
	border: 1px solid transparent;
	text-decoration: none;
	display: flex;
	-webkit-box-pack: center;
	justify-content: center;
	flex-wrap: nowrap;
	-webkit-box-align: center;
	align-items: center;
	cursor: pointer;
	position: relative;
	z-index: 1;
	will-change: transform;
	transition: transform 450ms ease 0s;
	transform: perspective(1px) translateZ(0px);
	margin-top: 20px;
`;
export const SwapBodyCardBodyArrow = styled.div`
	padding: 4px;
	border-radius: 12px;
	height: 20px;
	width: 20px;
	position: relative;
	margin-top: -14px;
	margin-bottom: -14px;
	left: calc(50% - 16px);
	background-color: rgb(247, 248, 250);
	border: 4px solid rgb(255, 255, 255);
	z-index: 2;
`;
