import styled from "styled-components";
import { colors, screenSizes } from "../../../../shared/styles/theme";

export const NavContainerWrap = styled.div`
	background: #1a1b1f;
	width: 100%;
	position: fixed;
	z-index: 100000;
	color: #ffffff;
	@media (max-width: ${screenSizes.mediaXL}px) {
		width: 97%;
	}
`;
export const NavContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0px auto;
	padding: 0px 40px;
	text-align: center;
	max-width: 1200px;
	height: 80px;
	top: 0px;
	@media (min-width: ${screenSizes.mediaS}px) {
		flex-direction: row;
		align-items: center;
	}
`;
export const NavLogo = styled.div`
	height: 2em;
	width: 2em;
	cursor: pointer;
	&:hover {
		filter: grayscale(60%);
	}
`;
export const NavLogoImage = styled.div`
	z-index: 100000;
`;
export const NavItem = styled.div`
	display: flex;
	align-items: center;
`;
export const NavItemEl = styled.div`
	margin: 0px 20px;
	font-size: 1rem;
	font-weight: 1000;
	color: #7f8082;
	cursor: pointer;
	&:hover {
		color: white;
	}
	@media (max-width: ${screenSizes.mediaXL}px) {
		display: none;
	}
`;
export const NavLaunchApp = styled(NavItemEl)`
	background-color: #e70270;
	border-radius: 10px;
	padding: 10px 10px;
	color: #d9d9da;
	cursor: pointer;
	a {
		text-decoration: none;
		color: #d9d9da;
	}
	&:hover {
		color: #d9d9da;
	}
`;
