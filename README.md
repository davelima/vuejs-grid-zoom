# VueJS GridZoom

VueJS 3 GridZoom wrapper for [codrops/GridZoom](https://github.com/codrops/GridZoom/)

This component adds a few features like color-filled, HTML and component cells.

:warning: Disclaimer :warning:
I'm not the author of the original script.
I've created this wrapper so it can be easily implemented on Vue.js files.

## Using
1. Add `import {GridZoom} from 'vuejs-grid-zoom'` and `@import 'vuejs-grid-zoom/dist/style.css';` to your .vue file;
2. Create the cell mapping. You can check out an example below on how to do that

## Sample:
```vuejs
<script setup lang="ts">
import {GridZoom} from 'vuejs-grid-zoom'
import {OtherComponent} from 'other-component'

const cells = [
  {
    type: 'image',
    position: 'c1-r1',
    padded: true,
    title: 'Title goes here',
    text: '<p>HTML for the internal content goes here</p>',
    link: '#',
    linkText: 'Click here',
    image: 'https://placehold.co/450x275'
  },
  {
    type: 'image',
    position: 'c3-r2',
    padded: true,
    title: 'Another title',
    text: '<p>HTML for the internal content goes here</p>',
    link: '#',
    linkText: 'Click here',
    image: 'https://placehold.co/450x275'
  },
  {
    type: 'html',
    position: 'c4-r2',
    html: "<h1>HTML type cell</h1>"
  },
  {
    type: 'image',
    position: 'c2-r3',
    padded: true,
    title: 'Title goes here',
    text: '<p>HTML for the internal content goes here</p>',
    link: '#',
    linkText: 'Click here',
    image: 'https://placehold.co/450x275'
  },
  {
    type: 'filled',
    position: 'c3-r3',
    padded: true,
    color: '#32BFE5'
  },
  {
    type: 'image',
    position: 'c3-r4',
    padded: true,
    title: 'Title goes here',
    text: '<p>HTML for the internal content goes here</p>',
    link: '#',
    linkText: 'Click here',
    image: 'https://placehold.co/450x275'
  },
  {
    type: 'filled',
    position: 'c3-r5',
    color: '#2B85F8',
    padded: true
  },
  {
    type: 'image',
    position: 'c2-r5',
    padded: true,
    title: 'Title goes here',
    text: '<p>HTML for the internal content goes here</p>',
    link: '#',
    linkText: 'Click here',
    image: 'https://placehold.co/450x275'
  },
]
</script>

<template>
<GridZoom :cells="cells"/>
</template>

<style>
@import 'vuejs-grid-zoom/dist/style.css';
</style>
```

### Cell options
| Option         | Type      | Required                  | Details                                                                                                      |
|----------------|-----------|---------------------------|--------------------------------------------------------------------------------------------------------------|
| type           | string    | yes                       | Can be "image", "component", "html", "filled"                                                                |
| position       | string    | yes                       | Position class for the cell ("c" means column, "r" means row"). e.g. "c3-r2" means third column, second  row |
| title          | string    | no                        | Title to be shown on the cell details                                                                        |
| text           | string    | no                        | Text (HTML) to be shown on the cell details                                                                  |
| link           | string    | no                        | Link to the cell details button                                                                              |
| linkText       | string    | no                        | Text to the "link" option                                                                                    |
| padded         | boolean   | no                        | Whether to add the "padded" class on this cell. This adds a predefined padding value if used                 |
| image          | string    | if "type" === "image"     | Cell image                                                                                                   |
| component      | reference | if "type" === "component" | Component to be rendered on the cell                                                                         |
| componentProps | object    | no                        | Properties to be passed to component if "type" === "component"                                               |
| color          | string    | if "type" === "filled"    | Cell color                                                                                                   |
| html           | string    | if "type" === "html"      | HTML to be rendered on the cell                                                                              |


### Important
This component supports grids up to 4x5.
If you need bigger grids, you can extend it creating classes for the extra cells, like this:
```css
.grid__cell-c2-r6 { // column 2, row 6
    grid-column: 4;
    grid-row: 6;
}
```

---

This component uses the [GSAP library](https://github.com/greensock/GSAP), which is free for most use cases, but there is cases when you'll need a business license.
You can see [details here](https://gsap.com/licensing/)
