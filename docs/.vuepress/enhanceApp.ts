import Vuetify from "vuetify";
import colors from "vuetify/lib/util/colors";
// @ts-ignore
import VueImager from "@moirei/vue-imager";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

export default ({ Vue, options }: any) => {
  Vue.use(Vuetify);

  Vue.use(VueImager, {
    baseUrl: "https://demo.cloudimg.io/v7",
  });

  options.vuetify = new Vuetify({
    treeShake: true,
    themes: {
      light: {
        primary: colors.indigo,
      },
    },
    theme: {
      default: "light",
      disable: false,
      options: {
        customProperties: true,
        cspNonce: undefined,
        minifyTheme: undefined,
        themeCache: undefined,
      },
    },
  });
};
