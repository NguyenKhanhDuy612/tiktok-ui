import { HeaderOnly } from "../components/Layout";

import Home from "../pages/Home/Home"
import Contact from "../pages/Contact/Contact"
import Upload from "../pages/Upload/Upload";

const popularRoute = [
	{ path: "/", component: Home },
	{path: '/contact' , component: Contact },
	{path: '/profile/:nickname' , component: Contact },
	{path: '/upload', component: Upload, layout: HeaderOnly}
];

const privateRoute = [
	{ path: "/popular/movie", component: Home },
	{path: '/contact' , component: Contact }
]

export {popularRoute, privateRoute}