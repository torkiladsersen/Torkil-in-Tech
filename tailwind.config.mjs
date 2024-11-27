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
		addIconSelectors(['ph'])
	],
}
