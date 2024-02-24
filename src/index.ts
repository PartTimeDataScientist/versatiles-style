import type { MaplibreStyle, StylemakerOptions, StyleGuessOptions } from './lib/types.js';
export type { MaplibreStyle, StylemakerOptions, StyleGuessOptions };

export type { TileJSONSpecification, TileJSONSpecificationRaster, TileJSONSpecificationVector } from './lib/types.js';

import Colorful from './style/colorful.js';
import Graybeard from './style/graybeard.js';
import Neutrino from './style/neutrino.js';

export const styles = {
	colorful: function colorful(options?: StylemakerOptions<Colorful>): MaplibreStyle {
		return new Colorful().build(options);
	},
	graybeard: function graybeard(options?: StylemakerOptions<Graybeard>): MaplibreStyle {
		return new Graybeard().build(options);
	},
	neutrino: function neutrino(options?: StylemakerOptions<Neutrino>): MaplibreStyle {
		return new Neutrino().build(options);
	},
};

export { guessStyle } from './lib/guess_style.js';
