import { dirname, resolve } from "node:path";
import { URL, fileURLToPath } from "node:url";

import I18n from "@intlify/unplugin-vue-i18n/vite";
import Vue from "@vitejs/plugin-vue";
import { FontaineTransform } from "fontaine";
import Unocss from "unocss/vite";
import AutoImport from "unplugin-auto-import/vite";
import VueComponents from "unplugin-vue-components/vite";
import VueMacros from "unplugin-vue-macros/vite";
import { defineConfig } from "vite";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";
import Vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import { ViteWebfontDownload } from "vite-plugin-webfont-dl";

export default defineConfig({
	plugins: [
		VueMacros({
			plugins: {
				vue: Vue({
					template: { transformAssetUrls },
				}),
			},
		}),
		Vuetify({
			autoImport: true,
		}),
		Unocss(),
		VueComponents({
			dts: "./src/components.d.ts",
			directoryAsNamespace: true,
		}),
		AutoImport({
			dts: "./src/auto-imports.d.ts",
			imports: [
				"@vueuse/core",
				"@vueuse/head",
				"vue",
				"pinia",
				"vue-router",
				"vue-i18n",
				{
					"vuetify": ["useDate", "useDisplay", "useGoTo", "useRtl", "useTheme"],
					"vuetify-sonner": ["toast"],
				},
			],
			dirs: ["./src/composables/**", "./src/stores/**"],
			vueTemplate: true,
		}),
		I18n({
			// runtimeOnly: true,
			compositionOnly: true,
			fullInstall: true,
			include: resolve(
				dirname(fileURLToPath(import.meta.url)),
				"./src/locales/**",
			),
		}),
		Pages(),
		Layouts(),
		ViteWebfontDownload([
			"https://fonts.googleapis.com/css2?family=Fira+Code&display=swap",
			"https://fonts.googleapis.com/css2?family=Noto+Serif+SC&display=swap",
		]),
		FontaineTransform.vite({
			fallbacks: [
				"BlinkMacSystemFont",
				"Segoe UI",
				"Helvetica Neue",
				"Arial",
				"Noto Sans",
			],
		}),
	],
	define: { "process.env": {} },
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
		extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"],
	},
	server: {
		port: 3000,
	},
});
