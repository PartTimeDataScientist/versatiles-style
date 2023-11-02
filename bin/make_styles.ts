#!/usr/bin/env node
'use strict'

import { existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import * as StyleBakerClasses from '../src/index.js';
import { validateStyleMin } from '@maplibre/maplibre-gl-style-spec';
import { prettyStyleJSON } from '../src/lib/utils.js';
import { StylemakerOptions } from './lib/types.js';

const dirRoot = new URL('../', import.meta.url).pathname;
const dirDst = resolve(dirRoot, 'dist');

let baseUrl = process.argv[2];
if (baseUrl) {
	baseUrl = baseUrl.trim().replace(/\/+$/, '');
	if (!/https?:\/\/[-a-zA-Z0-9@:%._+~#=]+/.test(baseUrl)) {
		console.error(`base URL is malformed: "${baseUrl}"`);
		process.exit();
	}
}

// ensure destination dir exists
if (existsSync(dirDst)) rmSync(dirDst, { recursive: true });
mkdirSync(dirDst, { recursive: true });

// load styles
for (const getStyle of Object.values(StyleBakerClasses)) {
	const styleId = getStyle.id;
	const options = getStyle.options;

	if (baseUrl) {
		options.glyphsUrl = baseUrl + '/assets/fonts/{fontstack}/{range}.pbf';
		options.spriteUrl = baseUrl + '/assets/sprites/sprites';
		options.tilesUrl = [baseUrl + '/tiles/osm/{z}/{x}/{y}'];
	}

	options.language = null;
	produce(styleId, options);

	options.language = 'en';
	produce(styleId + '.en', options);

	options.language = 'de';
	produce(styleId + '.de', options);

	options.hideLabels = true;
	produce(styleId + '.nolabel', options);
}

function produce(name:string, options:StylemakerOptions) {
	const style = getStyle(options);

	// Validate the style and log errors if any	
	const errors = validateStyleMin(style);
	if (errors.length > 0) console.log(errors);

	// write
	writeFileSync(resolve(dirDst, name + '.json'), prettyStyleJSON(style));
	console.log('Saved ' + name);
}
