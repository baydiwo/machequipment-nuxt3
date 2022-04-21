module.exports = {
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`
  ],
  theme: {
		fontFamily: {
			sans: 'proxima-nova, sans-serif'
		},
		extend: {
			colors: {
				'me-green': '#1F7339',
				'me-black': '#111827',
				'me-black2': '#1E2830'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
}
