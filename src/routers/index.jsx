import { HeaderOnly } from "../components/Layout";

import Home from "../pages/Home/Home"
import Contact from "../pages/Contact/Contact"
import Upload from "../pages/Upload/Upload";
import routesConfig from "../config/routes";

const popularRoute = [
	{ path: routesConfig.home, component: Home },
	{path: routesConfig.contact , component: Contact },
	{path: routesConfig.profile , component: Contact },
	{path: routesConfig.upload, component: Upload, layout: HeaderOnly}
];

const privateRoute = [
	{ path: "/popular/movie", component: Home },
	{path: routesConfig.contact , component: Contact }
]

export {popularRoute, privateRoute}