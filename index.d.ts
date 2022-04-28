import { Imager } from "@/Imager";
import { ImagerConfig } from "types/imager";
import { PluginFunction } from "vue";

declare module "vue/types/vue" {
  interface Vue {
    $imager: Imager;
  }
  interface VueConstructor {
    imager: Imager;
  }
}

declare class VueImager {
  static install: PluginFunction<ImagerConfig>;
}

export default VueImager;
