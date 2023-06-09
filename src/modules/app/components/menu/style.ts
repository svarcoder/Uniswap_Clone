import styled from "styled-components";
import { colors, screenSizes } from "../../../../shared/styles/theme";

export const MenuContainerWrap = styled.div`
	background: #191b1f;
	width: 100%;
	z-index: 100000;
	color: #ffffff;
`;
export const MenuContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-end;
	margin: 0px auto;
	padding: 100px 40px;
	/* height: 400px; */
	text-align: left;
	max-width: 1200px;
	top: 0px;
	z-index: 100000;
	background: url("https://uniswap.org/images/glimmer_bg.svg");
`;
export const MenuContainerBackground = styled.div`
	/* position: absolute;
	margin: 10px 0px; */
	background: url("https://uniswap.org/images/unicorn_banner.png");
	background-size: contain;
	background-repeat: no-repeat;
	background-position: 100px 0px;
`;
export const MenuContainerImage = styled.img`
	/* height: 200px;
	width: 1200px;
	object-fit: cover;
	opacity: 0.5;
	z-index: -1;
	margin-left: 100px; */
`;
export const MenuContainerImage2 = styled.img`
	/* height: 400px;
	width: 200px;
	right: 0;
	object-fit: cover;
	opacity: 1;
	margin-left: -900px;
	margin-top: -20px;
	z-index: -1; */
`;
export const MenuTitle = styled.div`
	font-size: 56px;
	font-weight: 600;
	margin-top: 180px;
	span {
		font-weight: 100;
	}
	@media (max-width: ${screenSizes.mediaXL}px) {
		font-size: 26px;
	}
`;
export const MenuDescription = styled.div`
	font-weight: 300;
	font-size: 24px;
`;
export const MenuIcon = styled.div`
	display: flex;
	align-items: center;
	text-align: center;
	cursor: pointer;
	span {
		margin-right: 20px;
		height: 2em;
		width: 2em;
		margin-top: 20px;
		text-align: center;
	}
`;
export const MenuCount = styled.div`
	margin: 0px auto;
	padding: 80px 40px;
	text-align: left;
	max-width: 1200px;
	top: 0px;
	@media (max-width: ${screenSizes.mediaXL}px) {
		display: none;
	}
`;
export const MenuCountAll = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const MenuCountEl = styled.div`
	padding: 0px 50px;
`;
export const MenuCountElTitle = styled.div`
	font-size: 48px;
	font-weight: 700;
`;
export const MenuCountElDescription = styled.div`
	font-size: 14px;
	font-weight: 300;
	text-align: center;
`;
export const MenuEcoSystem = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0px auto;
	padding: 40px 40px;
	text-align: left;
	max-width: 1200px;
	top: 0px;
	@media (max-width: ${screenSizes.mediaM}px) {
		flex-direction: column;
	}
`;
export const MenuEcoSystemLeft = styled.div`
	max-width: 400px;
`;
export const MenuEcoSystemLeftTitle = styled.div`
	font-size: 18px;
	color: #d9d9da;
	font-weight: 400;
	cursor: pointer;
	&:hover {
		color: #7f8082;
	}
`;
export const MenuEcoSystemLeftDescription = styled.div`
	font-size: 32px;
	font-weight: inherit;
	padding: 20px 0px;
	@media (max-width: ${screenSizes.mediaXL}px) {
		font-size: 20px;
	}
`;
export const MenuEcoSystemLeftMiniDescription = styled.div`
	line-height: 140%;
	font-weight: 200;
	font-size: 20px;
	color: rgb(136, 141, 155);
`;
export const MenuEcoSystemRight = styled.div`
	max-width: 600px;
`;
export const MenuEcoSystemRightLogo = styled.div`
	background: url("https://uniswap.org/images/apps.png") 0% 0% / cover no-repeat;
	height: 290px;
	width: 600px;
	border-radius: 15px;
	padding: 10px 20px;
	@media (max-width: ${screenSizes.mediaXL}px) {
		height: 190px;
		width: 400px;
		margin: 25px 0px;
	}
	@media (max-width: ${screenSizes.mediaM}px) {
		height: 200px;
		width: 200px;
	}
`;
export const MenuEcoSystemRightLogoTitle = styled.div`
	font-size: 48px;
	font-weight: 700;
`;
export const MenuEcoSystemRightLogoDescription = styled.div`
	font-size: 20px;
	font-weight: 300;
	margin-bottom: 15px;
`;
export const MenuEcoSystemRightExplore = styled.button`
	padding: 8px 0.85rem;
	text-decoration: none;
	border-radius: 12px;
	display: inline-block;
	box-sizing: border-box;
	cursor: pointer;
	border: 2px solid transparent;
	background-image: linear-gradient(
			rgba(255, 255, 255, 0),
			rgba(255, 255, 255, 0)
		),
		linear-gradient(
			95.5deg,
			rgba(15, 53, 255, 0.3) 12.82%,
			rgba(255, 72, 181, 0.3) 41.96%,
			rgba(15, 53, 255, 0.08) 75.06%,
			rgba(15, 53, 255, 0.11) 107.66%
		);
	background-origin: border-box;
	background-clip: content-box, border-box;
	box-shadow: rgb(53 55 58) 1px 1000px 1px inset;
	opacity: 0.9;
	background-color: rgba(255, 255, 255, 0.1) !important;
	color: white !important;
	width: fit-content !important;
	font-size: 1rem !important;
	font-weight: 400 !important;
	height: fit-content !important;
`;
export const MenuDeveloper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0px auto;
	padding: 80px 40px;
	text-align: left;
	max-width: 1200px;
	top: 0px;
`;
export const MenuDeveloperTitle = styled.div`
	font-size: 18px;
	font-weight: 400;
	cursor: pointer;
	&:hover {
		color: #7f8082;
	}
`;
export const MenuDeveloperRest = styled.div`
	display: grid;
	grid-template-columns: 1fr auto;
	grid-template-rows: auto auto;
	row-gap: 32px;
	padding: 10px 0px;
	@media (max-width: ${screenSizes.mediaXL}px) {
		display: flex;
		flex-direction: column;
	}
`;
export const MenuDeveloperElLeft = styled.div`
	display: grid;
	grid-template-rows: 1fr auto;
	gap: 16px;
	height: 100%;
`;
export const MenuDeveloperEl1Right = styled.div`
	max-width: 375px;
	background-color: rgba(255, 255, 255, 0.02);
	border: 1px solid rgba(255, 255, 255, 0.19);
	padding: 2rem;
	border-radius: 24px;
	box-shadow: rgb(0 0 0 / 2%) 0px 0px 1px, rgb(0 0 0 / 2%) 0px 4px 8px,
		rgb(0 0 0 / 2%) 0px 16px 24px, rgb(0 0 0 / 2%) 0px 24px 32px;
`;
export const MenuDeveloperEl1 = styled.div`
	mix-blend-mode: lighten;
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	width: 700px;
	height: 300px;
	background: url("https://uniswap.org/images/developer.png") 0% 0% / cover
		no-repeat;
	background-repeat: no-repeat;
	border-radius: 15px;
	border: 1px solid rgba(255, 255, 255, 0.19);
	padding: 20px 20px;
	@media (max-width: ${screenSizes.mediaM}px) {
		width: 370px;
		height: 300px;
	}
	@media (max-width: ${screenSizes.mediaXL}px) {
		width: 250px;
	}
	@media (max-width: ${screenSizes.mediaS}px) {
		width: 180px;
		height: 400px;
	}
`;
export const MenuDeveloperEl1Rest = styled.div`
	display: flex;
	max-width: 740px;
	gap: 16px;
	@media (max-width: ${screenSizes.mediaM}px) {
		flex-direction: column;
		max-width: 400px;
	}
`;
export const MenuDeveloperEl1Title = styled.div`
	font-size: 32px;
	font-weight: inherit;
`;
export const MenuDeveloperEl1Description = styled.div`
	font-size: 20px;
	color: rgb(135, 141, 155);
	font-size: 16px;
	font-weight: 300;
	padding: 20px 0px;
`;
export const MenuDeveloperEl1Explore = styled.button`
	padding: 8px 0.85rem;
	text-decoration: none;
	border-radius: 12px;
	display: inline-block;
	box-sizing: border-box;
	cursor: pointer;
	border: 2px solid transparent;
	background-image: linear-gradient(
			rgba(255, 255, 255, 0),
			rgba(255, 255, 255, 0)
		),
		linear-gradient(
			95.5deg,
			rgba(15, 53, 255, 0.3) 12.82%,
			rgba(255, 72, 181, 0.3) 41.96%,
			rgba(15, 53, 255, 0.08) 75.06%,
			rgba(15, 53, 255, 0.11) 107.66%
		);
	background-origin: border-box;
	background-clip: content-box, border-box;
	box-shadow: rgb(53 55 58) 1px 1000px 1px inset;
	opacity: 0.9;
	background-color: rgba(255, 255, 255, 0.1) !important;
	color: white !important;
	width: fit-content !important;
	font-size: 1rem !important;
	font-weight: 400 !important;
	height: fit-content !important;
`;
export const MenuDeveloperEl2 = styled.div``;
export const MenuDeveloperEl2Logo = styled.img``;
export const MenuDeveloperEl2Description = styled.div`
	font-size: 20px;
	color: rgb(135, 141, 155);
	margin: 10px 0px;
	font-weight: 300;
`;
export const MenuDeveloperEl2Title = styled.div`
	line-height: 125%;
	font-weight: 400;
	font-size: 20px;
	text-align: left;
`;
export const MenuDeveloperEl2Explore = styled.button`
	padding: 8px 0.85rem;
	text-decoration: none;
	border-radius: 12px;
	display: inline-block;
	box-sizing: border-box;
	cursor: pointer;
	border: 2px solid transparent;
	background-image: linear-gradient(
			rgba(255, 255, 255, 0),
			rgba(255, 255, 255, 0)
		),
		linear-gradient(
			95.5deg,
			rgba(15, 53, 255, 0.3) 12.82%,
			rgba(255, 72, 181, 0.3) 41.96%,
			rgba(15, 53, 255, 0.08) 75.06%,
			rgba(15, 53, 255, 0.11) 107.66%
		);
	background-origin: border-box;
	background-clip: content-box, border-box;
	box-shadow: rgb(53 55 58) 1px 1000px 1px inset;
	opacity: 0.9;
	background-color: rgba(255, 255, 255, 0.1) !important;
	color: white !important;
	width: fit-content !important;
	font-size: 1rem !important;
	font-weight: 400 !important;
	height: fit-content !important;
`;
export const MenuDeveloperEl3 = styled.div`
	border-radius: 15px;
	border: 1px solid rgba(255, 255, 255, 0.19);
	height: 100%;
	width: 100%;
`;
export const MenuDeveloperElTitle = styled.div`
	display: flex;
	justify-content: space-between;
	font-weight: 400;
	font-size: 20px;
	padding: 12px;
	cursor: pointer;
	&:hover {
		color: #7f8082;
	}
`;
export const MenuDeveloperEl4 = styled.div`
	border-radius: 15px;
	border: 1px solid rgba(255, 255, 255, 0.19);
	height: 100%;
	width: 100%;
`;
export const MenuProtocol = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0px auto;
	padding: 40px 40px;
	text-align: left;
	max-width: 1200px;
	top: 0px;
`;
export const MenuProtocolTitle = styled.div`
	font-size: 18px;
	font-weight: 400;
	cursor: pointer;
	&:hover {
		color: #7f8082;
	}
`;
export const MenuProtocolRest = styled.div`
	display: grid;
	grid-template-columns: 1fr auto;
	column-gap: 2rem;
	row-gap: 1rem;
	padding: 10px 0px;
	@media (max-width: ${screenSizes.mediaM}px) {
		display: flex;
		flex-direction: column;
	}
`;
export const MenuProtocolEl1 = styled.div`
	grid-row-start: 1;
	grid-row-end: 4;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 500px;
	height: 320px;
	background: url("https://uniswap.org/images/horse-card.png");
	background-repeat: no-repeat;
	background-size: cover;
	border-radius: 15px;
	border: 1px solid rgba(255, 255, 255, 0.19);
	padding: 20px 20px;
	@media (max-width: ${screenSizes.mediaM}px) {
		width: 250px;
	}
	@media (max-width: ${screenSizes.mediaS}px) {
		width: 180px;
	}
`;
export const MenuProtocolEl1Title = styled.div`
	font-size: 32px;
	font-weight: inherit;
	color: white;
	&:hover {
		color: #7f8082;
	}
	@media (max-width: ${screenSizes.mediaXL}px) {
		font-size: 15px;
	}
`;
export const MenuProtocolEl1Description = styled.div`
	opacity: 0.8;
	font-size: 20px;
	color: rgb(135, 141, 155);
	font-weight: 300;
	margin: 1.5rem 0rem;
`;
export const MenuProtocolEl1Explore = styled.button`
	padding: 8px 0.85rem;
	text-decoration: none;
	border-radius: 12px;
	display: inline-block;
	box-sizing: border-box;
	cursor: pointer;
	border: 2px solid transparent;
	background-image: linear-gradient(
			rgba(255, 255, 255, 0),
			rgba(255, 255, 255, 0)
		),
		linear-gradient(
			95.5deg,
			rgba(15, 53, 255, 0.3) 12.82%,
			rgba(255, 72, 181, 0.3) 41.96%,
			rgba(15, 53, 255, 0.08) 75.06%,
			rgba(15, 53, 255, 0.11) 107.66%
		);
	background-origin: border-box;
	background-clip: content-box, border-box;
	box-shadow: rgb(53 55 58) 1px 1000px 1px inset;
	opacity: 0.9;
	background-color: rgba(255, 255, 255, 0.1) !important;
	color: white !important;
	width: fit-content !important;
	font-size: 1rem !important;
	font-weight: 400 !important;
	height: fit-content !important;
`;
export const MenuProtocolEl2 = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: #1e1f23;
	border-radius: 15px;
	border: 1px solid rgba(255, 255, 255, 0.19);
	padding: 10px 20px;
	cursor: pointer;
	&:hover {
		color: #7f8082;
	}
	@media (max-width: ${screenSizes.mediaM}px) {
		max-width: 500px;
	}
`;
export const MenuProtocolElTitle = styled.div`
	line-height: 125%;
	font-weight: 400;
	font-size: 20px;
	text-align: left;
`;
export const MenuProtocolElDescription = styled.div`
	text-align: left;
	margin: 10px 0px;
	opacity: 0.6;
	font-size: 16px;
	font-weight: 400;
`;
export const MenuProtocolEl3 = styled(MenuProtocolEl2)``;
export const MenuProtocolEl4 = styled(MenuProtocolEl2)``;
