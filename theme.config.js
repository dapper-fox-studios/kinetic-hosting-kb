// theme.config.js
export default {
	github: 'https://github.com/dapper-fox-studios/kinetic-hosting-kb', // GitHub link in the navbar
	docsRepositoryBase: 'https://github.com/dapper-fox-studios/kinetic-hosting-kb/tree/main', // base URL for the docs repository
	titleSuffix: ' – Kinetic Hosting',
	nextLinks: true,
	prevLinks: true,
	search: true,
	darkMode: true,
	defaultMenuCollapsed: true,
	footer: true,
	footerText: `MIT ${new Date().getFullYear()} © Dapper Fox Group LLC`,
	logo: (
		<>
			<div>
				<img width="40" height="40" src="/icon.svg" alt="logo" />
			</div>

		</>

	),
	head: (
		<>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="description" content="Kinetic Hosting - Documentation" />
			<meta name="og:title" content="Kinetic Hosting - Documentation" />

			<script
				lang="javascript"
				dangerouslySetInnerHTML={{
					__html: `if (!window.localStorage.getItem("theme_default")) {
      				window.localStorage.setItem("theme", "dark");
      				window.localStorage.setItem("theme_default", "dark");
      				document.documentElement.classList.add("dark");
      				document.documentElement.classList.remove("light");
    				}`,
				}}
			/>;
		</>
	),

}

