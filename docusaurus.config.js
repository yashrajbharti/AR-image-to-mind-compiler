/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'AR Annotation',
  tagline: 'web augmented reality - augmented images',
  url: 'https://yashrajbharti.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'yashrajbharti', // Usually your GitHub org/user name.
  projectName: 'self annotations', // Usually your repo name.
  plugins: ['docusaurus-plugin-sass'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
	  routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  scripts: [
    'https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.7.2/min/dropzone.min.js',
    'https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.0.0/dist/mindar-image.prod.js',
  ],
  stylesheets: [
    'https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.7.2/dropzone.min.css'
  ]
};
