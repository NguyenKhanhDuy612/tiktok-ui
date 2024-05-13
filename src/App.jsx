import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import { popularRoute } from "./routers";
import { DefaultLayout, HeaderOnly } from "./components/Layout";
import { Fragment } from "react";
import routesConfig from "./config/routes";

function App() {
	return (
		<>
			

			<nav>
				<Link to={routesConfig.home}>Home</Link>
				<Link to={routesConfig.contact}>Contact</Link>
				<Link to={routesConfig.upload}>Upload</Link>
			</nav>
			<Routes>
				{/* popular */}
				{popularRoute.map((route, index) => {
					const Page = route.component;
					// const Layout = route.layout === null ? Fragment : DefaultLayout;
					let Layout = DefaultLayout;
					if (route.layout) {
						Layout = route.layout;
					}else if(route.layout === null){
						Layout = Fragment;
					}
					return (
						<Route
							key={index}
							path={route.path}
							element={
								<Layout>
									<Page />
								</Layout>
							}
						></Route>
					);
				})}

				{/* private */}
			</Routes>
		</>
	);
}

export default App;
