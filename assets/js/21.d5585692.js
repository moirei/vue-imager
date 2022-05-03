(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{674:function(t,e,v){"use strict";v.r(e);var _=v(71),o=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"v-imager"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#v-imager"}},[t._v("#")]),t._v(" v-imager")]),t._v(" "),v("p",[t._v("The "),v("code",[t._v("v-imager")]),t._v(" component is packed with features for advanced media imaging in responsive frontend. Imaging options can be configured per devide breakpoints to provide a better user experience.")]),t._v(" "),v("p",[t._v("This component supports three main use cases")]),t._v(" "),v("ol",[v("li",[t._v("As HTML "),v("code",[t._v("img")]),t._v(" image. This is the default option.")]),t._v(" "),v("li",[t._v("As HTML "),v("code",[t._v("picture")]),t._v(". This option renders an "),v("code",[t._v("img")]),t._v(" tag inside a "),v("code",[t._v("picture")]),t._v(" tag.")]),t._v(" "),v("li",[t._v("As other HTML tags or component e.g. "),v("code",[t._v("div")]),t._v(". This will render the image as background of the root element.")])]),t._v(" "),v("p",[t._v("Either one of the above uses can be provided via the "),v("code",[t._v("tag")]),t._v(" prop.")]),t._v(" "),v("h2",{attrs:{id:"slots"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#slots"}},[t._v("#")]),t._v(" Slots")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Name")]),t._v(" "),v("th",[t._v("Description")]),t._v(" "),v("th",[t._v("Props")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("default")]),t._v(" "),v("td",[t._v("The default Vue slot. Only available for non "),v("code",[t._v("img")]),t._v(" and "),v("code",[t._v("picture")]),t._v(" tags.")]),t._v(" "),v("td",[v("code",[t._v("{ loading: boolean, intersected: boolean, size: string }")])])])])]),t._v(" "),v("h2",{attrs:{id:"props"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" Props")]),t._v(" "),v("h3",{attrs:{id:"component-props"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#component-props"}},[t._v("#")]),t._v(" Component props")]),t._v(" "),v("p",[t._v("Props "),v("code",[t._v("w")]),t._v(" and "),v("code",[t._v("h")]),t._v(" allow "),v("strong",[t._v("px")]),t._v(", "),v("strong",[t._v("vh")]),t._v(" and "),v("strong",[t._v("vw")]),t._v(" values. All other non-numeric values are ignored. Likewise, "),v("code",[t._v("width")]),t._v(" and "),v("code",[t._v("height")]),t._v(" allow "),v("strong",[t._v("%")]),t._v(", "),v("strong",[t._v("px")]),t._v(", "),v("strong",[t._v("vh")]),t._v(" and "),v("strong",[t._v("vw")]),t._v(" values. "),v("strong",[t._v("%")]),t._v(" values are not applied to imaging options.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Name")]),t._v(" "),v("th",[t._v("Type")]),t._v(" "),v("th",[t._v("Default")]),t._v(" "),v("th",[t._v("Description")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("alt")]),t._v(" "),v("td",[v("code",[t._v("string")])]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Specify an alternate text for the image.")])]),t._v(" "),v("tr",[v("td",[t._v("apply-natural-size")]),t._v(" "),v("td",[v("code",[t._v("boolean")])]),t._v(" "),v("td",[v("code",[t._v("false")])]),t._v(" "),v("td",[t._v("Apply the natural width and height of the image to the root element. Only for non "),v("code",[t._v("img")]),t._v(" and "),v("code",[t._v("picture")]),t._v(" tags.")])]),t._v(" "),v("tr",[v("td",[t._v("base-url")]),t._v(" "),v("td",[v("code",[t._v("string")])]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("The base url to your imaging server.")])]),t._v(" "),v("tr",[v("td",[t._v("breakpoints")]),t._v(" "),v("td",[v("code",[t._v("Object")])]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Configure breakpoints specific to the component.")])]),t._v(" "),v("tr",[v("td",[t._v("class-name")]),t._v(" "),v("td",[v("code",[t._v("string")])]),t._v(" "),v("td",[v("code",[t._v("v-imager")])]),t._v(" "),v("td",[t._v("Configure the CSS class applied to the root element.")])]),t._v(" "),v("tr",[v("td",[t._v("contain")]),t._v(" "),v("td",[v("code",[t._v("boolean")])]),t._v(" "),v("td",[v("code",[t._v("false")])]),t._v(" "),v("td",[t._v("Prevents the background image from being cropped if it doesn’t fit. Only for non "),v("code",[t._v("img")]),t._v(" and "),v("code",[t._v("picture")]),t._v(" tags.")])]),t._v(" "),v("tr",[v("td",[t._v("detached")]),t._v(" "),v("td",[v("code",[t._v("boolean")])]),t._v(" "),v("td",[v("code",[t._v("false")])]),t._v(" "),v("td",[t._v("Will disable imaging and connection to "),v("code",[t._v("base-url")]),t._v(". Useful when not connected to an imaging server.")])]),t._v(" "),v("tr",[v("td",[t._v("eager")]),t._v(" "),v("td",[v("code",[t._v("boolean")])]),t._v(" "),v("td",[v("code",[t._v("false")])]),t._v(" "),v("td",[t._v("Will force the image url to be used. Overrides "),v("code",[t._v("lazy-src")]),t._v(". This is useful if you want the image src to be crawled for SEO.")])]),t._v(" "),v("tr",[v("td",[t._v("h")]),t._v(" "),v("td",[v("code",[t._v("string")]),t._v("|"),v("code",[t._v("number")])]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Sets the height (size) of the image. Use with "),v("code",[t._v("height")]),t._v(" for image height different from component height.")])]),t._v(" "),v("tr",[v("td",[t._v("height")]),t._v(" "),v("td",[v("code",[t._v("string")]),t._v("|"),v("code",[t._v("number")])]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Sets the height for the component and the image.")])]),t._v(" "),v("tr",[v("td",[t._v("lazy")]),t._v(" "),v("td",[v("code",[t._v("boolean")])]),t._v(" "),v("td",[v("code",[t._v("false")])]),t._v(" "),v("td",[t._v("Lazy load the image.")])]),t._v(" "),v("tr",[v("td",[t._v("lazy-src")]),t._v(" "),v("td",[v("code",[t._v("string")])]),t._v(" "),v("td",[t._v("Dummy base64")]),t._v(" "),v("td",[t._v("Something to show while waiting for the main image to load, typically a small base64-encoded thumbnail.")])]),t._v(" "),v("tr",[v("td",[t._v("no-watch")]),t._v(" "),v("td",[v("code",[t._v("boolean")])]),t._v(" "),v("td",[v("code",[t._v("false")])]),t._v(" "),v("td",[t._v("Do not watch the imaging option props ("),v("code",[t._v("grey")]),t._v(", "),v("code",[t._v("grey-md")]),t._v(", etc) for changes.")])]),t._v(" "),v("tr",[v("td",[t._v("options")]),t._v(" "),v("td",[v("code",[t._v("Object")])]),t._v(" "),v("td",[v("code",[t._v("{}")])]),t._v(" "),v("td",[t._v("Configure ths "),v("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API",target:"_blank",rel:"noopener noreferrer"}},[t._v("Intersection Observer"),v("OutboundLink")],1),t._v(" used for lazy loading.")])]),t._v(" "),v("tr",[v("td",[t._v("position")]),t._v(" "),v("td",[v("code",[t._v("string")])]),t._v(" "),v("td",[v("code",[t._v("center center")])]),t._v(" "),v("td",[t._v("Position the background image. Only for non "),v("code",[t._v("img")]),t._v(" and "),v("code",[t._v("picture")]),t._v(" tags.")])]),t._v(" "),v("tr",[v("td",[t._v("sizes")]),t._v(" "),v("td",[v("code",[t._v("string")])]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("For use with srcset, see "),v("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-sizes",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),v("OutboundLink")],1),t._v(".")])]),t._v(" "),v("tr",[v("td",[t._v("src")]),t._v(" "),v("td",[v("code",[t._v("string")])]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("The image src. For "),v("a",{attrs:{href:"https://github.com/moirei/media-library",target:"_blank",rel:"noopener noreferrer"}},[t._v("MOIREI Media Library"),v("OutboundLink")],1),t._v(" servers, this can be the image ID or FQFN.")])]),t._v(" "),v("tr",[v("td",[t._v("tag")]),t._v(" "),v("td",[v("code",[t._v("string")])]),t._v(" "),v("td",[v("code",[t._v("img")])]),t._v(" "),v("td",[t._v("Specify a custom tag used on the root element.")])]),t._v(" "),v("tr",[v("td",[t._v("w")]),t._v(" "),v("td",[v("code",[t._v("string")]),t._v("|"),v("code",[t._v("number")])]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Sets the width (size) of the image. Use with "),v("code",[t._v("width")]),t._v(" for image width different from component width.")])]),t._v(" "),v("tr",[v("td",[t._v("width")]),t._v(" "),v("td",[v("code",[t._v("string")]),t._v("|"),v("code",[t._v("number")])]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Sets the width for the component and the image.")])])])]),t._v(" "),v("h3",{attrs:{id:"imaging-props"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#imaging-props"}},[t._v("#")]),t._v(" Imaging props")]),t._v(" "),v("p",[t._v("All options below may be suffixed with "),v("strong",[t._v("xs")]),t._v(", "),v("strong",[t._v("sm")]),t._v(", "),v("strong",[t._v("md")]),t._v(", "),v("strong",[t._v("lg")]),t._v(" or "),v("strong",[t._v("xl")]),t._v(" to apply to specific screen size. For example, "),v("code",[t._v("blur-xs")]),t._v(". This also applies to "),v("code",[t._v("height")]),t._v(" and "),v("code",[t._v("width")]),t._v(" props above but without support for suffix units.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Name")]),t._v(" "),v("th",[t._v("Type")]),t._v(" "),v("th",[t._v("Description")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("background")]),t._v(" "),v("td",[v("code",[t._v("string")])]),t._v(" "),v("td",[t._v("Set a background colour on the image.")])]),t._v(" "),v("tr",[v("td",[t._v("border")]),t._v(" "),v("td",[v("code",[t._v("string[]")])]),t._v(" "),v("td",[t._v("Set border on the image.")])]),t._v(" "),v("tr",[v("td",[t._v("blur")]),t._v(" "),v("td",[v("code",[t._v("string")]),t._v("|"),v("code",[t._v("number")])]),t._v(" "),v("td",[t._v("Apply blur effect.")])]),t._v(" "),v("tr",[v("td",[t._v("brightness")]),t._v(" "),v("td",[v("code",[t._v("string")]),t._v("|"),v("code",[t._v("number")])]),t._v(" "),v("td",[t._v("Adjust image brightness.")])]),t._v(" "),v("tr",[v("td",[t._v("circle")]),t._v(" "),v("td",[v("code",[t._v("[x, y, coordinates, diameter]")])]),t._v(" "),v("td",[t._v("Draw a circle at given "),v("strong",[t._v("x")]),t._v(", "),v("strong",[t._v("y")]),t._v(", "),v("strong",[t._v("coordinates")]),t._v(" with given "),v("strong",[t._v("diameter")]),t._v(".")])]),t._v(" "),v("tr",[v("td",[t._v("contrast")]),t._v(" "),v("td",[v("code",[t._v("string")]),t._v("|"),v("code",[t._v("number")])]),t._v(" "),v("td",[t._v("Change the color contrast of the current image.")])]),t._v(" "),v("tr",[v("td",[t._v("convert")]),t._v(" "),v("td",[v("code",[t._v("string")])]),t._v(" "),v("td",[t._v("Force a given image compression.")])]),t._v(" "),v("tr",[v("td",[t._v("crop")]),t._v(" "),v("td",[v("code",[t._v("[width, height, x, y]")]),t._v("|"),v("code",[t._v("boolean")])]),t._v(" "),v("td",[t._v("Cut out a part of the current image with optional x, y position coordinates. Set to "),v("code",[t._v("true")]),t._v(" to use "),v("code",[t._v("func")]),t._v(".")])]),t._v(" "),v("tr",[v("td",[t._v("fit")]),t._v(" "),v("td",[v("code",[t._v("[width, height]")]),t._v("|"),v("code",[t._v("boolean")])]),t._v(" "),v("td",[t._v("Combine cropping and resizing to format image in a smart way. Set to "),v("code",[t._v("true")]),t._v(" to use "),v("code",[t._v("func")]),t._v(".")])]),t._v(" "),v("tr",[v("td",[t._v("flip")]),t._v(" "),v("td",[v("code",[t._v("v")]),t._v("|"),v("code",[t._v("h")])]),t._v(" "),v("td",[t._v("Mirror the current image horizontally or vertically by specifying the mode.")])]),t._v(" "),v("tr",[v("td",[t._v("func")]),t._v(" "),v("td",[v("code",[t._v("string")]),t._v("|"),v("code",[t._v("string[]")])]),t._v(" "),v("td",[t._v("Apply a filter function (s) to the image.")])]),t._v(" "),v("tr",[v("td",[t._v("grey")]),t._v(" "),v("td",[v("code",[t._v("boolean")])]),t._v(" "),v("td",[t._v("Turn the current image into a greyscale version.")])]),t._v(" "),v("tr",[v("td",[t._v("height")]),t._v(" "),v("td",[v("code",[t._v("string")]),t._v("|"),v("code",[t._v("number")])]),t._v(" "),v("td",[t._v("Resizes the image to a specified height (in pixels).")])]),t._v(" "),v("tr",[v("td",[t._v("pixelate")]),t._v(" "),v("td",[v("code",[t._v("string")]),t._v("|"),v("code",[t._v("number")])]),t._v(" "),v("td",[t._v("Apply pixelation filter to the current image.")])]),t._v(" "),v("tr",[v("td",[t._v("sharp")]),t._v(" "),v("td",[v("code",[t._v("string")]),t._v("|"),v("code",[t._v("number")])]),t._v(" "),v("td",[t._v("Sharpen current image with an optional amount.")])]),t._v(" "),v("tr",[v("td",[t._v("text")]),t._v(" "),v("td",[v("code",[t._v("[text, x, y]")]),t._v("|"),v("code",[t._v("string")])]),t._v(" "),v("td",[t._v("Write text to the current image at an optional "),v("strong",[t._v("x")]),t._v(", "),v("strong",[t._v("y")]),t._v(" basepoint position.")])]),t._v(" "),v("tr",[v("td",[t._v("width")]),t._v(" "),v("td",[v("code",[t._v("string")]),t._v("|"),v("code",[t._v("number")])]),t._v(" "),v("td",[t._v("Resizes the image to a specified width (in pixels).")])]),t._v(" "),v("tr",[v("td",[t._v("quality")]),t._v(" "),v("td",[v("code",[t._v("number")])]),t._v(" "),v("td",[t._v("Set the image quality.")])])])]),t._v(" "),v("h2",{attrs:{id:"events"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Name")]),t._v(" "),v("th",[t._v("Description")]),t._v(" "),v("th",[t._v("Data")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("intersect")]),t._v(" "),v("td",[t._v("On intersection when lazy loading is enabled.")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("loadstart")]),t._v(" "),v("td",[t._v("When a new image starts to load.")]),t._v(" "),v("td",[v("code",[t._v("{ src: string, size: string }")])])]),t._v(" "),v("tr",[v("td",[t._v("resize")]),t._v(" "),v("td",[t._v("When a resize is occurs.")]),t._v(" "),v("td",[v("code",[t._v("size: string")])])]),t._v(" "),v("tr",[v("td",[t._v("load")]),t._v(" "),v("td",[t._v("When an image is loaded.")]),t._v(" "),v("td",[v("code",[t._v("src: string")])])]),t._v(" "),v("tr",[v("td",[t._v("error")]),t._v(" "),v("td",[t._v("When there is error")]),t._v(" "),v("td",[v("code",[t._v("{ src: string, size: string, error: string/Event }")])])])])])])}),[],!1,null,null,null);e.default=o.exports}}]);