# v-imager

The `v-imager` component is packed with features for advanced media imaging in responsive frontend. Imaging options can be configured per devide breakpoints to provide a better user experience.

This component supports three main use cases

1. As HTML `img` image. This is the default option.
2. As HTML `picture`. This option renders an `img` tag inside a `picture` tag.
3. As other HTML tags or component e.g. `div`. This will render the image as background of the root element.

Either one of the above uses can be provided via the `tag` prop.

## Slots

| Name    | Description                                                            | Props                                                      |
| ------- | ---------------------------------------------------------------------- | ---------------------------------------------------------- |
| default | The default Vue slot. Only available for non `img` and `picture` tags. | `{ loading: boolean, intersected: boolean, size: string }` |

## Props

### Component props

Props `w` and `h` allow **px**, **vh** and **vw** values. All other non-numeric values are ignored. Likewise, `width` and `height` allow **%**, **px**, **vh** and **vw** values. **%** values are not applied to imaging options.

| Name               | Type               | Default         | Description                                                                                                                              |
| ------------------ | ------------------ | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| alt                | `string`           |                 | Specify an alternate text for the image.                                                                                                 |
| apply-natural-size | `boolean`          | `false`         | Apply the natural width and height of the image to the root element. Only for non `img` and `picture` tags.                              |
| base-url           | `string`           |                 | The base url to your imaging server.                                                                                                     |
| breakpoints        | `Object`           |                 | Configure breakpoints specific to the component.                                                                                         |
| class-name         | `string`           | `v-imager`      | Configure the CSS class applied to the root element.                                                                                     |
| contain            | `boolean`          | `false`         | Prevents the background image from being cropped if it doesn’t fit. Only for non `img` and `picture` tags.                               |
| detached           | `boolean`          | `false`         | Will disable imaging and connection to `base-url`. Useful when not connected to an imaging server.                                       |
| eager              | `boolean`          | `false`         | Will force the image url to be used. Overrides `lazy-src`. This is useful if you want the image src to be crawled for SEO.               |
| h                  | `string`\|`number` |                 | Sets the height (size) of the image. Use with `height` for image height different from component height.                                 |
| height             | `string`\|`number` |                 | Sets the height for the component and the image.                                                                                         |
| lazy               | `boolean`          | `false`         | Lazy load the image.                                                                                                                     |
| lazy-src           | `string`           | Dummy base64    | Something to show while waiting for the main image to load, typically a small base64-encoded thumbnail.                                  |
| no-watch           | `boolean`          | `false`         | Do not watch the imaging option props (`grey`, `grey-md`, etc) for changes.                                                              |
| options            | `Object`           | `{}`            | Configure ths [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) used for lazy loading. |
| position           | `string`           | `center center` | Position the background image. Only for non `img` and `picture` tags.                                                                    |
| sizes              | `string`           |                 | For use with srcset, see [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-sizes).                                |
| src                | `string`           |                 | The image src. For [MOIREI Media Library](https://github.com/moirei/media-library) servers, this can be the image ID or FQFN.            |
| tag                | `string`           | `img`           | Specify a custom tag used on the root element.                                                                                           |
| w                  | `string`\|`number` |                 | Sets the width (size) of the image. Use with `width` for image width different from component width.                                     |
| width              | `string`\|`number` |                 | Sets the width for the component and the image.                                                                                          |

### Imaging props

All options below may be suffixed with **xs**, **sm**, **md**, **lg** or **xl** to apply to specific screen size. For example, `blur-xs`. This also applies to `height` and `width` props above but without support for suffix units.

| Name       | Type                               | Description                                                                                               |
| ---------- | ---------------------------------- | --------------------------------------------------------------------------------------------------------- |
| background | `string`                           | Set a background colour on the image.                                                                     |
| border     | `string[]`                         | Set border on the image.                                                                                  |
| blur       | `string`\|`number`                 | Apply blur effect.                                                                                        |
| brightness | `string`\|`number`                 | Adjust image brightness.                                                                                  |
| circle     | `[x, y, coordinates, diameter]`    | Draw a circle at given **x**, **y**, **coordinates** with given **diameter**.                             |
| contrast   | `string`\|`number`                 | Change the color contrast of the current image.                                                           |
| convert    | `string`                           | Force a given image compression.                                                                          |
| crop       | `[width, height, x, y]`\|`boolean` | Cut out a part of the current image with optional x, y position coordinates. Set to `true` to use `func`. |
| fit        | `[width, height]`\|`boolean`       | Combine cropping and resizing to format image in a smart way. Set to `true` to use `func`.                |
| flip       | `v`\|`h`                           | Mirror the current image horizontally or vertically by specifying the mode.                               |
| func       | `string`\|`string[]`               | Apply a filter function (s) to the image.                                                                 |
| grey       | `boolean`                          | Turn the current image into a greyscale version.                                                          |
| height     | `string`\|`number`                 | Resizes the image to a specified height (in pixels).                                                      |
| pixelate   | `string`\|`number`                 | Apply pixelation filter to the current image.                                                             |
| sharp      | `string`\|`number`                 | Sharpen current image with an optional amount.                                                            |
| text       | `[text, x, y]`\|`string`           | Write text to the current image at an optional **x**, **y** basepoint position.                           |
| width      | `string`\|`number`                 | Resizes the image to a specified width (in pixels).                                                       |
| quality    | `number`                           | Set the image quality.                                                                                    |

## Events

| Name      | Description                                   | Data                                                 |
| --------- | --------------------------------------------- | ---------------------------------------------------- |
| intersect | On intersection when lazy loading is enabled. |                                                      |
| loadstart | When a new image starts to load.              | `{ src: string, size: string }`                      |
| resize    | When a resize is occurs.                      | `size: string`                                       |
| load      | When an image is loaded.                      | `src: string`                                        |
| error     | When there is error                           | `{ src: string, size: string, error: string/Event }` |
