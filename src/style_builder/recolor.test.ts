import Color from 'color';
import { getDefaultRecolorFlags, recolorObject } from './recolor.js';


describe('recolor', () => {
	describe('getDefaultRecolorFlags', () => {
		it('should return the default color transformer flags', () => {
			const defaultFlags = getDefaultRecolorFlags();
			expect(defaultFlags).toEqual({
				invertBrightness: false,
				rotate: 0,
				saturate: 0,
				gamma: 1,
				contrast: 1,
				brightness: 0,
				tint: 0,
				tintColor: '#FF0000',
			});
		});
	});

	it('should not alter the colors if no flags are provided', () => {
		const colors = getTestColors();
		recolorObject(colors, {});
		expect(colors).toEqual(getTestColors());
	});

	describe('invert', () => {
		it('should invert colors when invert flag is true', () => {
			const colors = getTestColors();
			recolorObject(colors, { invertBrightness: true });
			expect(colors2string(colors)).toBe('AA550000,00FFAA55,5500FFAA,FFAA55FF');
		});
	});

	describe('rotate', () => {
		it('should rotate colors 120°', () => {
			const colors = getTestColors();
			recolorObject(colors, { rotate: 120 });
			expect(colors2string(colors)).toBe('55FFAA00,AA00FF55,FF5500AA,00AA55FF');
		});

		it('should rotate colors 180°', () => {
			const colors = getTestColors();
			recolorObject(colors, { rotate: 180 });
			expect(colors2string(colors)).toBe('55AAFF00,FF005555,AAFF00AA,0055AAFF');
		});

		it('should rotate colors 240°', () => {
			const colors = getTestColors();
			recolorObject(colors, { rotate: 240 });
			expect(colors2string(colors)).toBe('AA55FF00,FFAA0055,00FF55AA,5500AAFF');
		});
	});

	describe('saturation', () => {
		it('should remove any saturation', () => {
			const colors = getTestColors();
			recolorObject(colors, { saturate: -1.0 });
			expect(colors2string(colors)).toBe('AAAAAA00,80808055,808080AA,555555FF');
		});

		it('should decrease saturation', () => {
			const colors = getTestColors();
			recolorObject(colors, { saturate: -0.5 });
			expect(colors2string(colors)).toBe('D4AA7F00,40BF9555,6A40BFAA,7F552AFF');
		});

		it('should increase saturation', () => {
			const colors = getTestColors();
			recolorObject(colors, { saturate: 0.5 });
			expect(colors2string(colors)).toBe('FFAA2A00,00FFBF55,4000FFAA,D45500FF');
		});

		it('should maximize saturation', () => {
			const colors = getTestColors();
			recolorObject(colors, { saturate: 1.0 });
			expect(colors2string(colors)).toBe('FFAA0000,00FFD455,2B00FFAA,FF5500FF');
		});
	});

	describe('gamma', () => {
		it('should decrease gamma', () => {
			const colors = getTestColors();
			recolorObject(colors, { gamma: 0.5 });
			expect(colors2string(colors)).toBe('FFD09300,00FFD055,9300FFAA,D09300FF');
		});

		it('should increase gamma', () => {
			const colors = getTestColors();
			recolorObject(colors, { gamma: 2 });
			expect(colors2string(colors)).toBe('FF711C00,00FF7155,1C00FFAA,711C00FF');
		});
	});

	describe('contrast', () => {
		it('should remove any contrast', () => {
			const colors = getTestColors();
			recolorObject(colors, { contrast: 0 });
			expect(colors2string(colors)).toBe('80808000,80808055,808080AA,808080FF');
		});

		it('should decrease contrast', () => {
			const colors = getTestColors();
			recolorObject(colors, { contrast: 0.5 });
			expect(colors2string(colors)).toBe('BF956A00,40BF9555,6A40BFAA,956A40FF');
		});

		it('should increase contrast', () => {
			const colors = getTestColors();
			recolorObject(colors, { contrast: 2 });
			expect(colors2string(colors)).toBe('FFD52B00,00FFD555,2B00FFAA,D52B00FF');
		});

		it('should maximize contrast', () => {
			const colors = getTestColors();
			recolorObject(colors, { contrast: Infinity });
			expect(colors2string(colors)).toBe('FFFF0000,00FFFF55,0000FFAA,FF0000FF');
		});

		it('should remove any brightness', () => {
			const colors = getTestColors();
			recolorObject(colors, { brightness: -1 });
			expect(colors2string(colors)).toBe('00000000,00000055,000000AA,000000FF');
		});

		it('should decrease brightness', () => {
			const colors = getTestColors();
			recolorObject(colors, { brightness: -0.5 });
			expect(colors2string(colors)).toBe('80552B00,00805555,2B0080AA,552B00FF');
		});

		it('should increase brightness', () => {
			const colors = getTestColors();
			recolorObject(colors, { brightness: 0.5 });
			expect(colors2string(colors)).toBe('FFD5AA00,80FFD555,AA80FFAA,D5AA80FF');
		});

		it('should maximize brightness', () => {
			const colors = getTestColors();
			recolorObject(colors, { brightness: 1 });
			expect(colors2string(colors)).toBe('FFFFFF00,FFFFFF55,FFFFFFAA,FFFFFFFF');
		});
	});

	describe('tint', () => {
		it('should not tint at all', () => {
			const colors = getTestColors();
			recolorObject(colors, { tint: 0, tintColor: '#F00' });
			expect(colors2string(colors)).toBe('FFAA5500,00FFAA55,5500FFAA,AA5500FF');
		});

		it('should tint a little bit red', () => {
			const colors = getTestColors();
			recolorObject(colors, { tint: 0.5, tintColor: '#F00' });
			expect(colors2string(colors)).toBe('FF805500,80805555,AA0080AA,AA2B00FF');
		});

		it('should tint a little bit yellow', () => {
			const colors = getTestColors();
			recolorObject(colors, { tint: 0.2, tintColor: '#FF0' });
			expect(colors2string(colors)).toBe('FFBB5500,33FF8855,7733CCAA,AA6600FF');
		});

		it('should tint a little bit green', () => {
			const colors = getTestColors();
			recolorObject(colors, { tint: 0.2, tintColor: '#0F0' });
			expect(colors2string(colors)).toBe('DDBB5500,00FF8855,4433CCAA,886600FF');
		});

		it('should tint a little bit blue', () => {
			const colors = getTestColors();
			recolorObject(colors, { tint: 0.2, tintColor: '#00F' });
			expect(colors2string(colors)).toBe('DD997700,00CCBB55,4400FFAA,884422FF');
		});

		it('should tint strongly orange', () => {
			const colors = getTestColors();
			recolorObject(colors, { tint: 0.8, tintColor: '#F80' });
			expect(colors2string(colors)).toBe('FFAF5500,CCA02255,DD6D33AA,AA5A00FF');
		});

		it('should tint a strongly blue', () => {
			const colors = getTestColors();
			recolorObject(colors, { tint: 0.8, tintColor: '#00F' });
			expect(colors2string(colors)).toBe('7766DD00,0033EE55,1100FFAA,221188FF');
		});
	});
});

function getTestColors(): Record<string, Color> {
	return {
		c0: Color('#FFAA5500'),
		c1: Color('#00FFAA55'),
		c2: Color('#5500FFAA'),
		c3: Color('#AA5500FF'),
	};
}

function colors2string(colors: Record<string, Color>): string {
	return [
		colors.c0,
		colors.c1,
		colors.c2,
		colors.c3,
	].map(c => c.hexa().slice(1)).join(',');
}
