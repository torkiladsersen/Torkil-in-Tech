/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

const plugin = require("tailwindcss/plugin")
const { addIconSelectors } = require('@iconify/tailwind');


export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily:{
				sans: ["'Libre Franklin Variable'", ...defaultTheme.fontFamily.sans]
			}
		},
	},
	plugins: [
		addIconSelectors(['ph']),
		plugin(function({addComponents}) {
			addComponents({
				'.link-light': {
					textDecoration: 'underline',
					color: '#a3e635', /* LIME-400 */
					'&:hover': {
						color: '#bef264' /* LIME-300 */
					},
				},
				'.link-dark': {
					textDecoration: 'underline',
					color: '#4338ca', /* INDIGO-700 */
					'&:hover': {
						color: '#4f46e5' /* INDIGO-600 */
					},
				},
			})
		})
	],
}
