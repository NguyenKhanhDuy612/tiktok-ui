import Home from "../pages/Home/Home"
import Contact from "../pages/Contact/Contact"

const popularRoute = [
	{ path: "/", component: Home },
	{path: '/contact' , component: Contact },
];

const privateRoute = [
	{ path: "/popular/movie", component: Home },
	{path: '/contact' , component: Contact }
]

export {popularRoute, privateRoute}