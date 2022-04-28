# Introduction

`vue-imager` is a Vue library for displaying rich media images. Designed with [MOIREI Media Library](https://github.com/moirei/media-library) in mind but compatible [cloudimage.io](https://www.cloudimage.io/) and similar dynamic imaging servers.

## Features

- Multiple use cases: `img`, `picture` and background images on any element tag.
- Responsive imaging for various devices
- Reactive imaging
- Lazy loading for both `img` and bacground images
- Custom interpreter: the final generated url from imaging options may be manipulated for customised use cases

## Plugin Options

| Name        | Type            | Default        | Description                                                                          |
| ----------- | --------------- | -------------- | ------------------------------------------------------------------------------------ |
| as          | `string`        | `"imager"`     | Name the inject `Imager` instance.                                                   |
| baseUrl     | `string`        | `"/media/img"` | Specify the base url to your imaging server.                                         |
| breakpoints | `Breakpoints`   |                | Sets the breakpoints for device sizes                                                |
| interpreter | `Interpreter`   |                | The function that translates imaging options into a url compatibel with your server. |
| responsive  | `ImagerOptions` |                | Provides a global option for imaging.                                                |

## Sizes

Imager device sizes and breakpoints.

| Name        | Code   | Type                   |
| ----------- | ------ | ---------------------- |
| Extra small | **xs** | Small to large phone   |
| Small       | **sm** | Small to medium tablet |
| Medium      | **md** | Large tablet to laptop |
| Large       | **lg** | Desktop                |
| Extra large | **xl** | 4k and ultra-wide      |
