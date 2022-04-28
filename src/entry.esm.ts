import { PluginObject } from "vue";
import * as components from "@/components/index";
import { Imager } from "./Imager";
import { ImagerConfig } from "types/imager";
import { mergeDeep, getUrl } from "./utils";
import { defaultBreakpoints } from "./constants";

interface VueImagerPlugin extends PluginObject<Partial<ImagerConfig>> {
  installed?: boolean;
}

const VuePlugin: VueImagerPlugin = {
  install(app, options) {
    if (this.installed) return;
    this.installed = true;

    const config: ImagerConfig = mergeDeep(
      {
        baseUrl: "/media/img",
        as: "imager",
        responsive: {},
        breakpoints: defaultBreakpoints,
        interpreter: getUrl
      },
      options || {}
    );

    const imager = new Imager(
      config.baseUrl,
      config.responsive,
      config.interpreter
    );

    app.prototype.$imagerConfig = config;
    app.prototype["$" + config.as] = imager;

    Object.entries(components).forEach(([componentName, component]) => {
      app.component(componentName, component);
    });
  }
};

export default VuePlugin;

export { VuePlugin };

export * from "@/components/index";
export * from "@/Imager";
export * from "@/UrlImage";
export * from "@/utils";
