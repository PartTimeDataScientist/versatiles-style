export type { colorful, eclipse, graybeard, neutrino } from './styles/index.js';
import { colorful, eclipse, graybeard, neutrino } from './styles/index.js';
export const styles = {
	colorful,
	eclipse,
	graybeard,
	neutrino,
};

export type { GuessStyleOptions } from './guess_style/index.js';
export type { RGB, HSL, HSV, RandomColorOptions } from './color/index.js';
export type { TileJSONSpecification, TileJSONSpecificationRaster, TileJSONSpecificationVector } from './types/tilejson.js';
export type { VectorLayer } from './types/index.js';
export type { StyleBuilderOptions, StyleBuilderColorStrings, Language, StyleBuilderColorKeys, StyleBuilderFonts } from './style_builder/types.js';
export type { RecolorOptions } from './style_builder/recolor.js';
export type { StyleBuilder } from './style_builder/style_builder.js';

export { guessStyle } from './guess_style/index.js';
export { Color } from './color/index.js';
