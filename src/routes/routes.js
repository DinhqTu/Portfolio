import config from '~/config';
import Home from '~/component/Home';
import About from '~/component/About';
import Portfolio from '~/component/Portfolio';
import Contact from '~/component/Contact';
import Blog from '~/component/Blog';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.about, component: About },
    { path: config.routes.portfolio, component: Portfolio },
    { path: config.routes.contact, component: Contact },
    { path: config.routes.blog, component: Blog },
];

// privateRoutes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
