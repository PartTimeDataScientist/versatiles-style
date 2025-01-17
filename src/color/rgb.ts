import { HSL } from './hsl.js';
import { HSV } from './hsv.js';
import { Color } from './abstract.js';
import { clamp, formatFloat } from './utils.js';

export class RGB extends Color {
	r: number = 0; // between 0 and 255
	g: number = 0;	// between 0 and 255
	b: number = 0;	// between 0 and 255
	a: number = 1;	// between 0 and 1

	constructor(r: number, g: number, b: number, a: number = 1) {
		super();
		this.r = clamp(r, 0, 255);
		this.g = clamp(g, 0, 255);
		this.b = clamp(b, 0, 255);
		this.a = clamp(a, 0, 1);
	}

	clone(): RGB {
		return new RGB(this.r, this.g, this.b, this.a);
	}

	asArray(): number[] {
		return [this.r, this.g, this.b, this.a];
	}

	asString(): string {
		if (this.a === 1) {
			return `rgb(${this.r.toFixed(0)},${this.g.toFixed(0)},${this.b.toFixed(0)})`;
		} else {
			return `rgba(${this.r.toFixed(0)},${this.g.toFixed(0)},${this.b.toFixed(0)},${formatFloat(this.a, 3)})`;
		}
	}

	asHex(): string {
		const r = Math.round(this.r).toString(16).padStart(2, '0');
		const g = Math.round(this.g).toString(16).padStart(2, '0');
		const b = Math.round(this.b).toString(16).padStart(2, '0');

		if (this.a === 1) {
			return `#${r}${g}${b}`.toUpperCase();
		} else {
			const a = Math.round(this.a * 255).toString(16).padStart(2, '0');
			return `#${r}${g}${b}${a}`.toUpperCase();
		}
	}

	asHSL(): HSL {
		const r = this.r / 255;
		const g = this.g / 255;
		const b = this.b / 255;
		const min = Math.min(r, g, b);
		const max = Math.max(r, g, b);
		const delta = max - min;
		let h = 0;
		let s = 0;

		if (max === min) h = 0;
		else if (r === max) h = (g - b) / delta;
		else if (g === max) h = 2 + (b - r) / delta;
		else if (b === max) h = 4 + (r - g) / delta;

		h = Math.min(h * 60, 360);
		if (h < 0) h += 360;

		const l = (min + max) / 2;

		if (max === min) s = 0;
		else if (l <= 0.5) s = delta / (max + min);
		else s = delta / (2 - max - min);

		return new HSL(h, s * 100, l * 100, this.a);
	};

	asHSV(): HSV {
		const r = this.r / 255;
		const g = this.g / 255;
		const b = this.b / 255;
		const v = Math.max(r, g, b);
		const diff = v - Math.min(r, g, b);

		let h = 0;
		let s = 0;
		if (diff !== 0) {
			function diffc(c: number): number {
				return (v - c) / 6 / diff + 1 / 2;
			};

			s = diff / v;
			const rdif = diffc(r);
			const gdif = diffc(g);
			const bdif = diffc(b);

			if (r === v) h = bdif - gdif;
			else if (g === v) h = (1 / 3) + rdif - bdif;
			else if (b === v) h = (2 / 3) + gdif - rdif;

			if (h < 0) h += 1;
			else if (h > 1) h -= 1;
		}

		return new HSV(h * 360, s * 100, v * 100, this.a);
	}

	asRGB(): RGB {
		return this.clone();
	}

	toRGB(): RGB {
		return this;
	}

	static parse(str: string): RGB {
		str = str.toLowerCase().replaceAll(/[^0-9a-z.#,()]/g, '')

		let match;

		match = str.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/);
		if (match) {
			const r = parseInt(match[1], 16);
			const g = parseInt(match[2], 16);
			const b = parseInt(match[3], 16);
			const a = match[4] ? parseInt(match[4], 16) / 255 : 1;
			return new RGB(r, g, b, a);
		}

		match = str.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/);
		if (match) {
			const r = parseInt(match[1], 16) * 17;
			const g = parseInt(match[2], 16) * 17;
			const b = parseInt(match[3], 16) * 17;
			const a = match[4] ? parseInt(match[4], 16) / 15 : 1;
			return new RGB(r, g, b, a);
		}

		str = str.trim().toLowerCase().replaceAll(' ', '');

		match = str.match(/^rgb\((\d+),(\d+),(\d+)\)$/);
		if (match) {
			const r = parseInt(match[1]);
			const g = parseInt(match[2]);
			const b = parseInt(match[3]);
			return new RGB(r, g, b);
		}

		match = str.match(/^rgba\((\d+),(\d+),(\d+),([.\d]+)\)$/);
		if (match) {
			const r = parseInt(match[1]);
			const g = parseInt(match[2]);
			const b = parseInt(match[3]);
			const a = parseFloat(match[4]);
			return new RGB(r, g, b, a);
		}

		throw new Error(`Invalid RGB color string: "${str}"`);
	}


	gamma(value: number): RGB {
		if (value < 1e-3) value = 1e-3;
		if (value > 1e3) value = 1e3;
		this.r = Math.pow(this.r / 255, value) * 255;
		this.g = Math.pow(this.g / 255, value) * 255;
		this.b = Math.pow(this.b / 255, value) * 255;
		return this;
	}

	invert(): RGB {
		this.r = 255 - this.r;
		this.g = 255 - this.g;
		this.b = 255 - this.b;
		return this;
	}

	contrast(value: number): RGB {
		if (value < 0) value = 0;
		if (value > 1e6) value = 1e6;
		this.r = clamp((this.r - 127.5) * value + 127.5, 0, 255);
		this.g = clamp((this.g - 127.5) * value + 127.5, 0, 255);
		this.b = clamp((this.b - 127.5) * value + 127.5, 0, 255);
		return this;
	}

	brightness(value: number): RGB {
		if (value < -1) value = -1;
		if (value > 1) value = 1;
		const a = 1 - Math.abs(value);
		const b = (value < 0) ? 0 : 255 * value;
		this.r = this.r * a + b;
		this.g = this.g * a + b;
		this.b = this.b * a + b;
		return this;
	}

	tint(value: number, tintColor: Color): RGB {
		if (value < 0) value = 0;
		if (value > 1) value = 1;
		const hsv = this.asHSV();
		hsv.h = tintColor.toHSV().h;
		const rgbNew = hsv.toRGB();

		rgbNew.r = this.r * (1 - value) + value * rgbNew.r;
		rgbNew.g = this.g * (1 - value) + value * rgbNew.g;
		rgbNew.b = this.b * (1 - value) + value * rgbNew.b;

		return rgbNew;
	}

	lighten(ratio: number): RGB {
		this.r = clamp(255 - (255 - this.r) * (1 - ratio), 0, 255);
		this.g = clamp(255 - (255 - this.g) * (1 - ratio), 0, 255);
		this.b = clamp(255 - (255 - this.b) * (1 - ratio), 0, 255);
		return this;
	}

	darken(ratio: number): RGB {
		this.r = clamp(this.r * (1 - ratio), 0, 255);
		this.g = clamp(this.g * (1 - ratio), 0, 255);
		this.b = clamp(this.b * (1 - ratio), 0, 255);
		return this;
	}

	fade(value: number): RGB {
		this.a *= 1 - value;
		return this;
	}
}