import { defineConfig } from 'vitepress';
import { withMermaid } from "vitepress-plugin-mermaid";
import _ from 'lodash';
import sidebar from './sidebar.json';

// https://vitepress.dev/reference/site-config
export default withMermaid(defineConfig({
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  title: "SAS Code Assessment",
  description: "Documentation",
  base: '/',
  lastUpdated: true,
  themeConfig: {
    logo: {
      light: '/logo.png',
      dark: '/logo.png'
    },
    siteTitle: "SAS Code Assessment Documentation",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Applications', link: '/applications/' },
      { text: 'Tables', link: '/tables/' }
    ],

    sidebar,

    search: {
      provider: 'local'
    }
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en'
    }
  },

  transformPageData(pageData, { siteConfig }) {
    pageData.frontmatter.breadcrumbs = breadcrumbs(siteConfig.userConfig.themeConfig.sidebar)
  }
}));

function breadcrumbs(items, parent=[], map={}) {
  _.forEach(items, item => {
    let link = item.link;
    if (link.endsWith("/")) link += "index.md";
    else link += ".md";
    map[link] = [...parent, { title: item.text }];
    breadcrumbs(item.items, [...parent, { link: item.link, title: item.text }], map);
  });
  return map;
}