import { createRouter, createWebHistory } from "vue-router"
import Home from "@/pages/Home.vue"

import NotFound from "@/pages/NotFound.vue"

const routes = [
	{
		path: "/",
		component: Home,
	},

	// { path: "/nodes", component: NodesPage },

	// {
	//     path: "/aPath",
	//     component: PageName,
	//     children: [
	//         {
	//             path: "/aPath/anotherPath",
	//             component: ChildPageName,
	//         },
	//     ],
	// },
	{ path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
]
const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
