import { createVuetify } from "vuetify";

import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";

export const vuetify = createVuetify({
	theme: {
		themes: {
			light: {
				colors: {
					primary: "#1867C0",
					secondary: "#5CBBF6",
				},
			},
		},
	},
});
