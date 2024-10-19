import { Home } from "../Pages/Home";
import { About } from "../Pages/About";
import { Shop } from "../Pages/Shop";
import { Project } from "../Pages/Projects";
import { News } from "../Pages/News";

export const NavbarLink = [
  {
    id: 1,
    path: "/",
    name: "Home",
    element: Home,
  },
  {
    id: 2,
    path: "About",
    name: "About",
    element: About,
  },
  {
    id: 3,
    path: "Shop",
    name: "Shop",
    element: Shop,
  },
  {
    id: 4,
    path: "Project",
    name: "Project",
    element: Project,
  },
  {
    id: 5,
    path: "News",
    name: "News",
    element: News,
  },
];
