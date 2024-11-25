//import { createWebHistory, createRouter} from "vue-router";
import { createRouter, createWebHashHistory } from "vue-router";
import List from "./components/List.vue";
import Home from "./components/Home.vue";
import Detail from "./components/Detail.vue";
import Author from "./components/Author.vue";
import Comment from "./components/Comment.vue";


const routes = [
  {
    path : "/list",
    component : List,
  },
  {
    path : "/",
    component : Home,
  },
  {
    path : "/detail/:id",
    component : Detail,
    children : [
      {
        path : "author",
        component : Author,
      },
      {
        path : "comment",
        component : Comment,
      },
    ],
  },
  {
    path : "/:anything(.*)",
    component : Home,
  },
];

const router = createRouter({
  //history: createWebHistory(),
  history : createWebHashHistory(),
  routes,
});

export default router; 