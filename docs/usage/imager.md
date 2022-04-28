# Imager

Like the `UrlImage` class, `Imager` can be directly used to generate responsive src URLs.

```typescript
import { Imager } from "@moirei/vue-imager";

const baseUrl = "https://demo.cloudimg.io/v7";
const src = "https://cloudimage.public.airstore.io/demo/tim-patch.jpg";
const defaultOptions = {
  //
};

const imager = new Imager(baseUrl, defaultOptions);

const url = imager.url(src);
```

Can also get urls for devices sizes

```typescript
const urls = imager.urls(src);

const smUrl = urls.sm;
const mdUrl = urls.md;
```

Likewise you can get url for specific size.

```typescript
const smUrl = imager.sizeUrl("sm", src);
```
