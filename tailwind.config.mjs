/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

const plugin = require("tailwindcss/plugin")


export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily:{
				sans: ["'Libre Franklin Variable'", ...defaultTheme.fontFamily.sans]
			},
		},
	},
	plugins: [
		plugin(function({addComponents}) {
			addComponents({
				'.link-light': {
					textDecoration: 'underline',
					color: '#fbbf24', /* AMBER-400 */
					'&:hover': {
						color: '#fcd34d' /* AMBER-300 */
					},
				},
				'.link-dark': {
					textDecoration: 'underline',
					color: '#9a3412', /* ORANGE-800 */
					'&:hover': {
						color: '#c2410c' /* ORANGE-700 */
					},
				}
			})
		})
	],
}
