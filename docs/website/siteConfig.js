/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/Heap-Chrome-Extension/img/docusaurus.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Heap Analytics Debugger' /* title for your website */,
  tagline: 'A chrome extension to ensure your heap data gets fired',
  url: 'https://ericsonmichaelj.github.io' /* your website url */,
  baseUrl: '/Heap-Chrome-Extension/' /* base url for your project */,
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'Heap-Chrome-Extension',
  organizationName: 'ericsonmichaelj',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'doc1', label: 'Docs'},
    {doc: 'doc4', label: 'AP'},
    {page: 'help', label: 'Help'},
    {blog: true, label: 'Blog'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/analytics.png',
  footerIcon: 'img/analytics.png',
  favicon: 'img/analytics.png',

  /* colors for website */
  // #EF8726
  // #EE6C4A
  colors: {
    primaryColor: '#EF8726',
    secondaryColor: '#EE6C4A',
  },

  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: ['https://buttons.github.io/buttons.js'],

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  /* Open Graph and Twitter card images */
  ogImage: 'Heap-Chrome-Extension/img/docusaurus.png',
  twitterImage: 'Heap-Chrome-Extension/img/docusaurus.png',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
    repoUrl: 'https://github.com/ericsonmichaelj/Heap-Chrome-Extension',
};

module.exports = siteConfig;
