import { presetRemToPx } from "@unocss/preset-rem-to-px";
import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetUno,
	transformerDirectives,
	transformerVariantGroup,
} from "unocss";

export default defineConfig({
	presets: [
		presetUno(),
		presetIcons({
			scale: 1.2,
			extraProperties: {
				"display": "inline-block",
				"height": "1.4em",
				"width": "1.4em",
				"vertical-align": "text-bottom",
			},
		}),
		presetAttributify(),
		presetRemToPx(),
	],
	transformers: [transformerDirectives(), transformerVariantGroup()],
});
