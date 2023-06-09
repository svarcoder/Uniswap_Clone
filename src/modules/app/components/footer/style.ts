import styled from "styled-components";
import { colors, screenSizes } from "../../../../shared/styles/theme";

export const FooterContainerWrap = styled.div`
	background: #191b1f;
	width: 100%;
	z-index: 100000;
	color: #ffffff;
`;
export const FooterContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0px auto;
	padding: 20px 40px;
	text-align: left;
	max-width: 1200px;
	top: 0px;
`;
export const FooterContainerLeft = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	text-align: center;
	@media (max-width: ${screenSizes.mediaXL}px) {
		flex-direction: column;
	}
`;
export const FooterContainerLeftEl = styled.div`
	margin-right: 15px;
	&:hover {
		color: #7f8082;
	}
`;
export const FooterContainerRight = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	text-align: center;
	color: rgb(116, 116, 116);
`;
export const FooterContainerRightEl = styled.div`
	cursor: pointer;
	margin-right: 20px;
	height: 2rem;
	width: 2rem;
	margin-top: 20px;
	text-align: center;
	&:hover {
		color: #7f8082;
	}
`;
