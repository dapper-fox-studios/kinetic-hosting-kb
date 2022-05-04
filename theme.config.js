// theme.config.js
export default {
	projectLink: 'https://github.com/dapper-fox-studios/kinetic-hosting-kb', // GitHub link in the navbar
	docsRepositoryBase: 'https://github.com/dapper-fox-studios/kinetic-hosting-kb/blob/main', // base URL for the docs repository
	titleSuffix: ' – Kinetic Hosting',
	nextLinks: true,
	prevLinks: true,
	search: true,
	customSearch: null, // customizable, you can use algolia for example
	darkMode: true,
	footer: true,
	footerText: `MIT ${new Date().getFullYear()} © Dapper Fox Group LLC`,
	footerEditLink: `Edit this page on GitHub`,
	logo: (
		<>
			<svg>...</svg>
			<span>Next.js Static Site Generator</span>
		</>
	),
	head: (
		<>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="description" content="Nextra: the next docs builder" />
			<meta name="og:title" content="Nextra: the next docs builder" />
		</>
	),
}