[**@versatiles/style**](../README.md)

***

[@versatiles/style](../globals.md) / StyleBuilderOptions

# Interface: StyleBuilderOptions

Defined in: [style\_builder/types.ts:9](https://github.com/versatiles-org/versatiles-style/blob/main/src/style_builder/types.ts#L9)

Options for configuring a style builder.

## Properties

### baseUrl?

> `optional` **baseUrl**: `string`

Defined in: [style\_builder/types.ts:14](https://github.com/versatiles-org/versatiles-style/blob/main/src/style_builder/types.ts#L14)

The base URL for loading external resources like tiles, sprites, and fonts.
Default: document.location.origin (in the browser), or 'https://tiles.versatiles.org'

***

### bounds?

> `optional` **bounds**: \[`number`, `number`, `number`, `number`\]

Defined in: [style\_builder/types.ts:20](https://github.com/versatiles-org/versatiles-style/blob/main/src/style_builder/types.ts#L20)

The bounding box for the map, formatted as [sw.lng, sw.lat, ne.lng, ne.lat].
Default: [-180, -85.0511287798066, 180, 85.0511287798066]

***

### colors?

> `optional` **colors**: `Partial`\<[`StyleBuilderColors`](StyleBuilderColors.md)\>

Defined in: [style\_builder/types.ts:56](https://github.com/versatiles-org/versatiles-style/blob/main/src/style_builder/types.ts#L56)

An object specifying overrides for default color values, keyed by the color names.

***

### fonts?

> `optional` **fonts**: `Partial`\<[`StyleBuilderFonts`](../type-aliases/StyleBuilderFonts.md)\>

Defined in: [style\_builder/types.ts:61](https://github.com/versatiles-org/versatiles-style/blob/main/src/style_builder/types.ts#L61)

An object specifying overrides for default font names, keyed by the font names.

***

### glyphs?

> `optional` **glyphs**: `string`

Defined in: [style\_builder/types.ts:26](https://github.com/versatiles-org/versatiles-style/blob/main/src/style_builder/types.ts#L26)

The URL template for loading font glyphs, formatted with '{fontstack}' and '{range}' placeholders.
Default: '/assets/glyphs/{fontstack}/{range}.pbf'

***

### hideLabels?

> `optional` **hideLabels**: `boolean`

Defined in: [style\_builder/types.ts:44](https://github.com/versatiles-org/versatiles-style/blob/main/src/style_builder/types.ts#L44)

If set to true, hides all map labels.
Default: false

***

### language?

> `optional` **language**: [`Language`](../type-aliases/Language.md)

Defined in: [style\_builder/types.ts:51](https://github.com/versatiles-org/versatiles-style/blob/main/src/style_builder/types.ts#L51)

Set the language ('en', 'de') of all map labels.
A null value means that the language of the country in which the label is drawn will be used.
Default: null

***

### recolor?

> `optional` **recolor**: [`RecolorOptions`](RecolorOptions.md)

Defined in: [style\_builder/types.ts:66](https://github.com/versatiles-org/versatiles-style/blob/main/src/style_builder/types.ts#L66)

Options for color adjustments and transformations applied to the entire style.

***

### sprite?

> `optional` **sprite**: `SpriteSpecification`

Defined in: [style\_builder/types.ts:32](https://github.com/versatiles-org/versatiles-style/blob/main/src/style_builder/types.ts#L32)

The URL for loading sprite images and metadata.
Default: [{ id: 'basics', url: '/assets/sprites/basics/sprites' }]

***

### tiles?

> `optional` **tiles**: `string`[]

Defined in: [style\_builder/types.ts:38](https://github.com/versatiles-org/versatiles-style/blob/main/src/style_builder/types.ts#L38)

An array of URL templates for loading map tiles, using '{z}', '{x}', and '{y}' placeholders.
Default: ['/tiles/osm/{z}/{x}/{y}']
