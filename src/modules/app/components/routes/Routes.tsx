import React from "react";
import { Redirect, Switch } from "react-router";
import { Router, Route } from "react-router-dom";
import history from "../history";
import { Paths } from "./types";
import { NotFound } from "./NotFound";
import { StyledRoutesContainer } from "./style";
import Footer from "../footer";
import Navbar from "../navbar";
import MenuBar from "../menu/index";
import { MainContainer } from "../../../../shared/styles/styled";
import Swap from "../swap/swap";

const notFoundRoute: RouteDefinition = {
	path: "*",
	component: NotFound,
	protected: false,
	title: "",
};

export const routes: RouteDefinition[] = [
	{
		path: Paths.root,
		component: MenuBar,
		protected: false,
		redirect: Paths.home,
		title: "Home",
		pathType: 0,
	},
	{
		path: Paths.home,
		component: MenuBar,
		protected: false,
		redirect: Paths.home,
		title: "Home",
		pathType: 0,
	},
	{
		path: Paths.swap,
		component: Swap,
		protected: false,
		redirect: Paths.swap,
		title: "Swap",
		pathType: 0,
	},
].concat(notFoundRoute as any);

export interface RouteDefinition {
	path: string;
	protected?: boolean;
	redirect?: string;
	component?: any;
	routes?: RouteDefinition[];
	title?: string;
	pathType?: number;
}

interface Props {
	// userLoaded: boolean
}
interface RoutesProps {}

function getRouteRenderWithAuth(route: RouteDefinition, i: number) {
	return () => <route.component />;
}

const Routes: React.FC<Props & RoutesProps> = () => {
	const [activeLink, setActiveLink] = React.useState(history.location.pathname);

	return (
		<Router history={history}>
			<StyledRoutesContainer>
				{activeLink !== "/swap" ? <Navbar /> : null}
				<MainContainer>
					<Switch>
						<Redirect exact from='/' to={Paths.home} />
						{routes.map((route, i) => {
							const render = getRouteRenderWithAuth(route, i);
							const rest = { render };
							return <Route key={i} path={route.path} exact {...rest} />;
						})}
					</Switch>
				</MainContainer>
				{activeLink !== "/swap" ? <Footer /> : null}
			</StyledRoutesContainer>
		</Router>
	);
};

export default Routes;
