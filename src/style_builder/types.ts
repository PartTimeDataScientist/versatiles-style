import type { Color } from '../color/index';
import type { RecolorOptions } from './recolor';
import { SpriteSpecification } from '@maplibre/maplibre-gl-style-spec';

/** Represents language suffixes used in map styles. */
export type Language = 'de' | 'en' | null;

/** Options for configuring a style builder. */
export interface StyleBuilderOptions {
	/**
	 * The base URL for loading external resources like tiles, sprites, and fonts.
	 * Default: document.location.origin (in the browser), or 'https://tiles.versatiles.org'
	 */
	baseUrl?: string;

	/**
	 * The URL template for loading font glyphs, formatted with '{fontstack}' and '{range}' placeholders.
	 * Default: '/assets/glyphs/{fontstack}/{range}.pbf'
	 */
	glyphs?: string;

	/**
	 * The URL for loading sprite images and metadata.
	 * Default: [{ id: 'basics', url: '/assets/sprites/basics/sprites' }]
	 */
	sprite?: SpriteSpecification;

	/**
	 * An array of URL templates for loading map tiles, using '{z}', '{x}', and '{y}' placeholders.
	 * Default: ['/tiles/osm/{z}/{x}/{y}']
	 */
	tiles?: string[];

	/**
	 * If set to true, hides all map labels.
	 * Default: false
	 */
	hideLabels?: boolean;

	/**
	 * Set the language ('en', 'de') of all map labels.
	 * A null value means that the language of the country in which the label is drawn will be used.
	 * Default: null
	 */
	language?: Language;

	/**
	 * An object specifying overrides for default color values, keyed by the color names.
	 */
	colors?: Partial<StyleBuilderColorStrings>;

	/**
	 * An object specifying overrides for default font names, keyed by the font names.
	 */
	fonts?: Partial<StyleBuilderFonts>;

	/**
	 * Options for color adjustments and transformations applied to the entire style.
	 */
	recolor?: RecolorOptions;
}

/** Defines the keys for color properties in a style builder. */
export type StyleBuilderColorKeys = 'agriculture' | 'boundary' | 'building' | 'buildingbg' | 'burial' | 'commercial' | 'construction' | 'cycle' | 'danger' | 'disputed' | 'education' | 'foot' | 'glacier' | 'grass' | 'hospital' | 'industrial' | 'label' | 'labelHalo' | 'land' | 'leisure' | 'motorway' | 'motorwaybg' | 'park' | 'parking' | 'poi' | 'prison' | 'rail' | 'residential' | 'rock' | 'sand' | 'shield' | 'street' | 'streetbg' | 'subway' | 'symbol' | 'trunk' | 'trunkbg' | 'waste' | 'water' | 'wetland' | 'wood';

/** Defines the keys for font properties in a style builder. */
export type StyleBuilderFontKeys = 'regular' | 'bold';

/** Records string values for color properties in a style builder. */
export type StyleBuilderColorStrings = { [key in StyleBuilderColorKeys]: string };

/** Records Color objects for color properties in a style builder. */
export type StyleBuilderColors = { [key in StyleBuilderColorKeys]: Color };

/** Records string values for font properties in a style builder. */
export type StyleBuilderFonts = { [key in StyleBuilderFontKeys]: string };

/** Defines options for style rules in a style builder. */
export interface StyleRulesOptions {
	/**
	 * The set of colors used in the style builder.
	 */
	colors: StyleBuilderColors;

	/**
	 * The set of fonts used in the style builder.
	 */
	fonts: StyleBuilderFonts;

	/**
	 * The language used for map labels.
	 */
	language: Language;
}

/** Defines the value type for a style rule. */
export type StyleRuleValue = boolean | number | object | string;

/** Defines the structure of a style rule, which is a record of properties to style values. */
export type StyleRule = Record<string, StyleRuleValue | undefined>;

/** Defines the structure of style rules, which is a record of selectors to style rules. */
export type StyleRules = Record<string, StyleRule | undefined>;
