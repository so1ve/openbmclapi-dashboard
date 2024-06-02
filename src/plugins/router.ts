import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = setupLayouts(generatedRoutes);

export const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

// const token = $(useToken());

// watch(() => token, () => {
//   if (!token) {
//     router.push("/login");
//   }
// });

router.beforeEach((from, _to, next) => {
	// if (from.path.startsWith("/dash") && !token) {
	//   next("/login");
	// }
	next();
});
