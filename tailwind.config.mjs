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
				},
				'.bg-link-light': {
					backgroundColor: '#fbbf24', /* AMBER-400 */
					'&:hover': {
						backgroundColor: '#fcd34d' /* AMBER-300 */
					},
				},
				'.bg-link-dark': {
					backgroundColor: '#9a3412', /* ORANGE-800 */
					'&:hover': {
						backgroundColor: '#c2410c' /* ORANGE-700 */
					},
				},
				'.border-link-light': {
					borderColor: '#fbbf24', /* AMBER-400 */
					'&:hover': {
						borderColor: '#fcd34d' /* AMBER-300 */
					},
				},
				'.border-link-dark': {
					borderColor: '#9a3412', /* ORANGE-800 */
					'&:hover': {
						borderColor: '#c2410c' /* ORANGE-700 */
					},
				}
			})
		})
	],
}
