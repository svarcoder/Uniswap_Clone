import styled from "styled-components";
import { colors, screenSizes } from "../styles/theme";
interface ModalBodyProps {
	show: boolean;
}

export const ModelHead = styled.div`
	color: ${colors.black};
	display: flex;
	justify-content: space-between;
	margin-bottom: 10px;

	h2 {
		font-weight: 600;
		font-size: 16px;
		line-height: 25px;
		font-family: SemiBold;
		margin: 0;
		@media (min-width: ${screenSizes.mediaM}px) {
			font-size: 24px;
			line-height: 30px;
		}
	}
`;

export const ModalBody = styled.div<ModalBodyProps>`
	display: ${(props) => (props.show ? "block" : "none")};
	position: fixed;
	z-index: 100;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background: rgba(26, 39, 50, 0.7);
	backdrop-filter: blur(5px);
`;

export const ModalContent = styled.div<any>`
	padding: 20px;
	background-color: ${colors.white};
	display: inline-block;
	margin: 0px auto;
	border: 1px solid white;
	border-radius: 25px;
	overflow: auto;
	// min-width: 280px;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	max-height: 100%;
	// overflow-y: auto;
	::-webkit-scrollbar {
		width: 0 !important;
	}
	overflow: -moz-scrollbars-none;
	-ms-overflow-style: none;
	width: 80%;
	border-radius: 8px;
	@media (min-width: ${screenSizes.mediaL}px) {
		width: 440px;
	}
`;

export const ModalContainerHeading = styled.p`
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 22px;
	color: ${colors.white};
	letter-spacing: 0.1em;
	text-transform: uppercase;
	margin: 0;
`;
export const ModalContainerText = styled.p`
	font-size: 16px;
	margin: 0;
`;
export const Close = styled.img`
	cursor: pointer;
	margin-right: auto;
	@media (min-width: ${screenSizes.mediaM}px) {
		cursor: pointer;
		margin-right: 0;
	}
`;
