/// <reference types="vite/client" />
/// <reference types="@intlify/unplugin-vue-i18n/messages" />
/// <reference types="vite-plugin-pages/client" />
/// <reference types="vite-plugin-vue-layouts/client" />
/// <reference types="unplugin-vue-macros/macros-global" />

declare module "*.vue" {
	import type { DefineComponent } from "vue";

	const component: DefineComponent<{}, {}, any>;
	export default component;
}
