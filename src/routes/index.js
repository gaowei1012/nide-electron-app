import loadable from "@/utils/loadable";

const HomePage = loadable(() => import("@/pages/Home"));
const routes = [
  {
    path: "/home",
    exact: true,
    name: "HomePage",
    component: HomePage,
    auth: [1],
  },
];

export default routes;
