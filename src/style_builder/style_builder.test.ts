 
import Color from 'color';
import type { MaplibreStyle } from '../types/maplibre.js';
import type { StyleRules, StyleRulesOptions } from './types.js';
import StyleBuilder from './style_builder.js';

// Mock class for abstract class StyleBuilder
class MockStyleBuilder extends StyleBuilder<MockStyleBuilder> {
	public readonly name = 'mock';

	public defaultFonts = { regular: 'Arial' };

	public defaultColors = { primary: '#FF8800' };

	public negateColors(): void {
		this.transformDefaultColors(color => color.negate());
	}

	protected getStyleRules(opt: StyleRulesOptions<MockStyleBuilder>): StyleRules {
		for (const color of Object.values(opt.colors)) if (!(color instanceof Color)) throw Error();
		for (const font of Object.values(opt.fonts)) if (typeof font !== 'string') throw Error();

		return {
			'water-area': {
				textColor: opt.colors.primary,
				textSize: 12,
				textFont: opt.fonts.regular,
			},
		};
	}
}

describe('StyleBuilder', () => {
	let builder: MockStyleBuilder;

	beforeEach(() => {
		builder = new MockStyleBuilder();
	});

	it('should create an instance of StyleBuilder', () => {
		expect(builder).toBeInstanceOf(StyleBuilder);
	});

	it('should build a MaplibreStyle object', () => {
		const style = builder.build();
		expect(style).toBeDefined();
		expect(style).toHaveProperty('name');
		expect(style).toHaveProperty('layers');
		expect(style).toHaveProperty('glyphs');
		expect(style).toHaveProperty('sprite');
	});

	it('should transform colors correctly', () => {
		const initialColor: string = builder.defaultColors.primary;
		builder.negateColors();
		expect(builder.defaultColors.primary).not.toBe(initialColor);
		expect(builder.defaultColors.primary).toBe(Color(initialColor).negate().hexa());
	});

	it('should create default options', () => {
		expect(builder.getDefaultOptions()).toStrictEqual({
			baseUrl: '',
			colors: { primary: '#FF8800' },
			fonts: { regular: 'Arial' },
			glyphs: '',
			hideLabels: false,
			language: undefined,
			recolor: {
				brightness: 0,
				contrast: 1,
				gamma: 1,
				invertBrightness: false,
				rotate: 0,
				saturate: 0,
				tint: 0,
				tintColor: '#FF0000',
			},
			sprite: '',
			tiles: [],
		});
	});

	describe('build method', () => {
		it('should create a style object', () => {
			const style = builder.build();
			expect(style).toBeDefined();
			expect(style).toHaveProperty('layers');
			expect(style).toHaveProperty('name');
			expect(style).toHaveProperty('glyphs');
			expect(style).toHaveProperty('sprite');
		});

		it('should resolve urls correctly', () => {
			const style: MaplibreStyle = builder.build({ baseUrl: 'https://my.base.url/' });
			expect(style.glyphs).toBe('https://my.base.url/assets/fonts/{fontstack}/{range}.pbf');
			expect(style.sprite).toStrictEqual([{id: 'basics', url: 'https://my.base.url/assets/sprites/basics/sprites'}]);

			const source = style.sources['versatiles-shortbread'];
			expect(source).toHaveProperty('tiles');
			expect(source.tiles[0]).toBe('https://my.base.url/tiles/osm/{z}/{x}/{y}');
		});
	});
});
