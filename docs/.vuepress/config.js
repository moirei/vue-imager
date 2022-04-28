const path = require("path");
const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");

module.exports = {
  title: "Vue Imager",
  description:
    "A Vue library for dynamically displaying images from image servers. Compatible with Cloudimage.io",
  base: "/vue-imager/",
  theme: "vt",
  themeConfig: {
    enableDarkMode: true,
    logo: "/logo.png",
    repo: "moirei/vue-imager",
    repoLabel: "Github",
    docsRepo: "moirei/vue-imager",
    docsDir: "docs",
    docsBranch: "master",
    sidebar: [
      {
        title: "Introduction",
        path: "introduction",
      },
      {
        title: "Getting Started",
        path: "getting-started",
      },
      {
        title: "Use Cases",
        // path: "/usage/",
        children: [
          "/usage/image",
          "/usage/background-image",
          // "/usage/container",
          "/usage/lazy-loading",
          "/usage/loading-animation",
          "/usage/url-image",
          "/usage/imager",
          "/usage/responsive-imaging",
        ],
      },
      {
        title: "Customize",
        path: "customize",
      },
      {
        title: "Components API",
        children: ["/components/v-imager"],
      },
    ],
    nav: [
      { text: "v-imager", link: "/components/v-imager" },
      {
        text: "Laravel Media Library",
        link: "https://github.com/moirei/media-library",
        target: "_self",
        // rel: false,
      },
    ],
  },
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    // ['link', { rel: 'manifest', href: '/manifest.json' }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: "/icons/apple-touch-icon-152x152.png" },
    ],
    // ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/icons/msapplication-icon-144x144.png",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
  ],
  plugins: [
    "@vuepress/register-components",
    "@vuepress/active-header-links",
    "@vuepress/pwa",
    "seo",
    "vuepress-plugin-typescript",
    {
      tsLoaderOptions: {
        transpileOnly: true,
        // configFile: "tsconfig.json",
        configFile: path.resolve("./tsconfig.json"),
      },
      // ...tsConfig,
    },
  ],
  configureWebpack: {
    resolve: {
      alias: {
        "@": "/src/",
        "@moirei/vue-imager": "/dist/vue-imager.esm",
      },
    },
  },
  chainWebpack(config, isServer) {
    // use vuetify-loader to load all vuetify components
    config.plugin("vuetify").use(VuetifyLoaderPlugin);

    // overwrite loader options
    for (const lang of ["sass", "scss"]) {
      for (const name of ["modules", "normal"]) {
        const rule = config.module.rule(lang).oneOf(name);
        rule.uses.delete("sass-loader");

        rule
          .use("sass-loader")
          .loader("sass-loader")
          .options({
            implementation: require("sass"),
          });
      }
    }
  },
};
