import { Home } from "../Pages/Home";
import { About } from "../Pages/About";
import { Shop } from "../Pages/Shop";
// import { Project } from "../Pages/Projects";
import { News } from "../Pages/News";
import { Team } from "../Pages/Projects";

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
    path: "Team",
    name: "Team",
    element: Team,
  },
  {
    id: 5,
    path: "News",
    name: "News",
    element: News,
  },
];
