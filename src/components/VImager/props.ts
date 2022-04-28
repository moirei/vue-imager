import { getComponentProps } from "@/utils";

export default {
  alt: {
    type: String
  },
  applyNaturalSize: {
    type: Boolean,
    default: false
  },
  baseUrl: {
    type: String
  },
  breakpoints: {
    type: Object
  },
  className: {
    type: String,
    default: "v-imager"
  },
  contain: {
    type: Boolean,
    default: false
  },
  detached: {
    type: Boolean,
    default: false
  },
  eager: {
    type: Boolean,
    default: false
  },
  h: { type: [Number, String] },
  height: { type: [Number, String] },
  options: {
    type: Object,
    default: () => ({})
  },
  lazy: {
    type: Boolean,
    default: false
  },
  lazySrc: {
    type: String,
    default:
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
  },
  noWatch: {
    type: Boolean,
    default: false
  },
  position: {
    type: String,
    default: "center center"
  },
  sizes: {
    type: String
  },
  src: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    default: "img"
  },
  w: { type: [Number, String] },
  width: { type: [Number, String] },
  ...getComponentProps()
};
