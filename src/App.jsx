import { Link, Route, Routes } from "react-router-dom";
import { popularRoute } from "./routers";
import { Fragment } from "react";
import config from "./config";
import { DefaultLayout } from "./layouts";

function App() {
	return (
		<>
			

			<nav>
				<Link to={config.home}>Home</Link>
				<Link to={config.contact}>Contact</Link>
				<Link to={config.upload}>Upload</Link>
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
