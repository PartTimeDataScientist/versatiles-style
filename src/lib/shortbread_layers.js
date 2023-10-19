export default function ({ languageSuffix }) {
	return [

		// background
		{ id: 'background', type: 'background' },

		// ocean
		{ id: 'water-ocean', type: 'fill', layer: 'ocean' },

		// land
		{
			id: 'land-glacier',
			type: 'fill', layer: 'water_polygons',
			filter: ['all', ['==', 'kind', 'glacier']]
		},

		...[
			['commercial', ['commercial', 'retail']],
			['industrial', ['industrial', 'quarry', 'railway']],
			['residential', ['garages', 'residential']],
			['agriculture', ['brownfield', 'farmland', 'farmyard', 'greenfield', 'greenhouse_horticulture', 'orchard', 'plant_nursery', 'vineyard']],
			['waste', ['landfill']],
			['park', ['park', 'village_green', 'recreation_ground']],
			['garden', ['allotments', 'garden']],
			['burial', ['cemetery', 'grave_yard']],
			['leisure', ['miniature_golf', 'playground', 'golf_course']],
			['rock', ['bare_rock', 'scree', 'shingle']],
			['forest', ['forest']],
			['grass', ['grass', 'grassland', 'meadow', 'wet_meadow']],
			['vegetation', ['heath', 'scrub']],
			['sand', ['beach', 'sand']],
			['wetland', ['bog', 'marsh', 'string_bog', 'swamp']],
		].map(([t, v]) => ({
			id: 'land-' + t,
			type: 'fill',
			layer: 'land',
			filter: ['all',
				['in', 'kind', ...v],
			],
		})),

		// water-lines
		...['river', 'canal', 'stream', 'ditch'].map(t => ({
			id: 'water-' + t,
			type: 'line',
			layer: 'water_lines',
			filter: ['all',
				['in', 'kind', t],
				['!=', 'tunnel', true],
				['!=', 'bridge', true],
			]
		})),

		// water polygons
		{
			id: 'water-area',
			type: 'fill', layer: 'water_polygons',
			filter: ['==', 'kind', 'water'],
		},
		{
			id: 'water-area-river',
			type: 'fill', layer: 'water_polygons',
			filter: ['==', 'kind', 'river'],
		},
		{
			id: 'water-area-small',
			type: 'fill', layer: 'water_polygons',
			filter: ['in', 'kind', 'reservoir', 'basin', 'dock'],
		},

		// dam
		{ id: 'water-dam-area', type: 'fill', layer: 'dam_polygons', filter: ['==', 'kind', 'dam'] },
		{ id: 'water-dam', type: 'line', layer: 'dam_lines', filter: ['==', 'kind', 'dam'] },

		// pier
		{ id: 'water-pier-area', type: 'fill', layer: 'pier_polygons', filter: ['in', 'kind', 'pier', 'breakwater', 'groyne'] },
		{ id: 'water-pier', type: 'line', layer: 'pier_lines', filter: ['in', 'kind', 'pier', 'breakwater', 'groyne'] },

		// site
		...['danger_area', 'sports_center', 'university', 'college', 'school', 'hospital', 'prison', 'parking', 'bicycle_parking', 'construction'].map(t => ({
			id: 'site-' + t.replace(/_/g, ''),
			type: 'fill',
			layer: 'sites',
			filter: ['in', 'kind', t],
		})),

		// airport
		{
			id: 'airport-area',
			type: 'fill', layer: 'street_polygons', filter: ['in', 'kind', 'runway', 'taxiway'],
		},
		{
			id: 'airport-taxiway:outline',
			type: 'line', layer: 'streets', filter: ['==', 'kind', 'taxiway'],
		},
		{
			id: 'airport-runway:outline',
			type: 'line', layer: 'streets', filter: ['==', 'kind', 'runway'],
		},
		{
			id: 'airport-taxiway',
			type: 'line', layer: 'streets', filter: ['==', 'kind', 'taxiway'],
		},
		{
			id: 'airport-runway',
			type: 'line', layer: 'streets', filter: ['==', 'kind', 'runway'],
		},

		// building
		{
			id: 'building:outline',
			type: 'fill', layer: 'buildings',
		},
		{
			id: 'building',
			type: 'fill', layer: 'buildings',
		},

		// tunnel-, street-, bridges-bridge
		...['tunnel', 'street', 'bridge'].flatMap(c => {
			// filters
			let filter, prefix, results = [];
			switch (c) {
				case 'tunnel':
					filter = [['==', 'tunnel', true]];
					prefix = 'tunnel-';
					break;
				case 'street':
					filter = [['!=', 'bridge', true], ['!=', 'tunnel', true]];
					prefix = '';
					break;
				case 'bridge':
					filter = [['==', 'bridge', true]];
					prefix = 'bridge-';
					break;
			};

			// bridges, above street, below bridge
			if (c === 'bridge') results.push({
				id: 'bridge',
				type: 'fill',
				layer: 'bridges'
			});

			[':outline', ''].forEach(suffix => {

				// pedestrian zone — no outline
				if (suffix === ':outline') results.push({
					id: prefix + 'street-pedestrian-zone',
					type: 'fill',
					layer: 'street_polygons',
					filter: ['all',
						['==', 'kind', 'pedestrian'],
						...filter,
					],
				});

				// non-car streets
				['footway', 'steps', 'path', 'cycleway'].forEach(t => {
					results.push({
						id: prefix + 'way-' + t.replace(/_/g, '') + suffix,
						type: 'line',
						layer: 'streets',
						filter: ['all',
							['in', 'kind', t],
							...filter,
						],
					});
				});

				// no links
				['track', 'pedestrian', 'service', 'living_street', 'residential', 'unclassified'].forEach(t => {
					results.push({
						id: prefix + 'street-' + t.replace(/_/g, '') + suffix,
						type: 'line',
						layer: 'streets',
						filter: ['all',
							['==', 'kind', t],
							...filter,
							...(t === 'service') ? [['!=', 'service', 'driveway']] : [], // ignore driveways
						],
					});
				});

				// no links, bicycle=designated
				if (suffix === '') ['track', 'pedestrian', 'service', 'living_street', 'residential', 'unclassified'].forEach(t => {
					results.push({
						id: prefix + 'street-' + t.replace(/_/g, '') + '-bicycle',
						type: 'line',
						layer: 'streets',
						filter: ['all',
							['==', 'kind', t],
							['==', 'bicycle', 'designated'],
							...filter,
							...(t === 'service') ? [['!=', 'service', 'driveway']] : [], // ignore driveways
						],
					});
				});

				// links
				['tertiary', 'secondary', 'primary', 'trunk', 'motorway'].forEach(t => {
					results.push({
						id: prefix + 'street-' + t.replace(/_/g, '') + '-link' + suffix,
						type: 'line',
						layer: 'streets',
						filter: ['all',
							['in', 'kind', t],
							['==', 'link', true],
							...filter,
						],
					});
				});

				// main
				['tertiary', 'secondary', 'primary', 'trunk', 'motorway'].forEach(t => {
					results.push({
						id: prefix + 'street-' + t.replace(/_/g, '') + suffix,
						type: 'line',
						layer: 'streets',
						filter: ['all',
							['in', 'kind', t],
							['!=', 'link', true],
							...filter,
						],
					});
				});

			});

			// separate outline for trains
			[':outline', ''].forEach(suffix => {
				// transport
				['rail', 'light_rail', 'subway', 'narrow_gauge', 'tram', 'funicular', 'monorail', 'bus_guideway', 'busway'].reverse().forEach((t) => {
					results.push({
						id: prefix + 'transport-' + t.replace(/_/g, '') + suffix,
						type: 'line',
						layer: 'streets',
						filter: ['all',
							['in', 'kind', t],
							['!has', 'service'],
							...filter,
						],
					});
				});

				if (c === 'street') {
					// aerialway, no bridges, above street evel
					['cable_car', 'gondola', 'goods', 'chair_lift', 'drag_lift', 't-bar', 'j-bar', 'platter', 'rope-tow'].reverse().forEach((t) => {
						results.push({
							id: 'aerialway-' + t.replace(/[_\-]+/g, '') + suffix,
							type: 'line',
							layer: 'aerialways',
							filter: ['all',
								['in', 'kind', t],
								...filter,
							],
						});
					});

					// ferry — only on street level
					results.push({
						id: 'transport-ferry' + suffix,
						type: 'line',
						layer: 'ferries',
					});
				}
			});

			return results;
		}),

		// poi, one layer per type
		...['amenity', 'leisure', 'tourism', 'shop', 'man_made', 'historic', 'emergency', 'highway', 'office'].map(key => ({
			id: 'poi-' + key,

			type: 'symbol',
			layer: 'pois',
			filter: ['!=', key, ''],
		})),

		// boundary
		...[':outline', ''].flatMap(suffix => [
			{
				id: 'boundary-country' + suffix,
				type: 'line',
				layer: 'boundaries',
				filter: ['all',
					['==', 'admin_level', 2],
					['!=', 'maritime', true],
					['!=', 'disputed', true],
					['!=', 'coastline', true],
				],
			},
			{
				id: 'boundary-country-disputed' + suffix,
				type: 'line',
				layer: 'boundaries',
				filter: ['all',
					['==', 'admin_level', 2],
					['==', 'disputed', true],
					['!=', 'maritime', true],
					['!=', 'coastline', true],
				],
			},
			{
				id: 'boundary-country-maritime' + suffix,
				type: 'line',
				layer: 'boundaries',
				filter: ['all',
					['==', 'admin_level', 2],
					['==', 'maritime', true],
					['!=', 'disputed', true],
					['!=', 'coastline', true],
				],
			},
			{
				id: 'boundary-state' + suffix,
				type: 'line',
				layer: 'boundaries',
				filter: ['all',
					['==', 'admin_level', 4],
					['!=', 'maritime', true],
					['!=', 'disputed', true],
					['!=', 'coastline', true],
				],
			}
		]),

		// label-address
		{
			id: 'label-address-housenumber',
			type: 'symbol',
			layer: 'addresses',
			filter: ['has', 'housenumber'],
			layout: { 'text-field': '{housenumber}' },
		},

		// label-motorway
		{
			id: 'label-motorway-exit',
			type: 'symbol',
			layer: 'street_labels_points', // docs say `streets_labels_points`, but layer is actually called `street_labels_points`
			filter: ['==', 'kind', 'motorway_junction'],
			layout: { 'text-field': '{ref}' },
			// FIXME shield
		},
		{
			id: 'label-motorway-shield',
			type: 'symbol',
			layer: 'street_labels',
			filter: ['==', 'kind', 'motorway'],
			layout: { 'text-field': '{ref}' },
			// FIXME shield
		},

		// label-street
		...['pedestrian', 'living_street', 'residential', 'unclassified', 'tertiary', 'secondary', 'primary', 'trunk'].map(t => ({
			id: 'label-street-' + t.replace(/_/g, ''),
			type: 'symbol',
			layer: 'street_labels',
			filter: ['==', 'kind', t],
			layout: { 'text-field': `{name${languageSuffix}}` },
		})),

		// label-place of small places
		...[ /*'locality', 'island', 'farm', 'dwelling',*/ 'neighbourhood', 'quarter', 'suburb', 'hamlet', 'village', 'town'].map(id => ({
			id: 'label-place-' + id.replace(/_/g, ''),
			type: 'symbol',
			layer: 'place_labels',
			filter: ['==', 'kind', id],
			layout: { 'text-field': `{name${languageSuffix}}` },
		})),

		// label-boundary
		{
			id: 'label-boundary-state',
			type: 'symbol',
			layer: 'boundary_labels',
			filter: ['in', 'admin_level', 4, '4'],
			layout: { 'text-field': `{name${languageSuffix}}` },
		},

		// label-place-* of large places
		...['city', 'state_capital', 'capital'].map(id => ({
			id: 'label-place-' + id.replace(/_/g, ''),
			type: 'symbol',
			layer: 'place_labels',
			filter: ['==', 'kind', id],
			layout: { 'text-field': `{name${languageSuffix}}` },
		})),

		{
			id: 'label-boundary-country-small',
			type: 'symbol',
			layer: 'boundary_labels',
			filter: ['all',
				['in', 'admin_level', 2, '2'],
				['<=', 'way_area', 10000000],
			],
			layout: { 'text-field': `{name${languageSuffix}}` },
		},
		{
			id: 'label-boundary-country-medium',
			type: 'symbol',
			layer: 'boundary_labels',
			filter: ['all',
				['in', 'admin_level', 2, '2'],
				['<', 'way_area', 90000000],
				['>', 'way_area', 10000000],
			],
			layout: { 'text-field': `{name${languageSuffix}}` },
		},
		{
			id: 'label-boundary-country-large',
			type: 'symbol',
			layer: 'boundary_labels',
			filter: ['all',
				['in', 'admin_level', 2, '2'],
				['>=', 'way_area', 90000000],
			],
			layout: { 'text-field': `{name${languageSuffix}}` },
		},

		// marking
		{
			id: 'marking-oneway', // streets → oneway
			type: 'symbol',
			layer: 'streets',
			filter: ['all',
				['==', 'oneway', true],
				['in', 'kind', 'trunk', 'primary', 'secondary', 'tertiary', 'unclassified', 'residential', 'living_street']
			],
			layout: {
				'symbol-placement': 'line',
				'symbol-spacing': 175,
				'icon-rotate': 90,
				'icon-rotation-alignment': 'map',
				'icon-padding': 5,
				'symbol-avoid-edges': true,
			}
		},
		{
			id: 'marking-oneway-reverse', // oneway_reverse
			type: 'symbol',
			layer: 'streets',
			filter: ['all',
				['==', 'oneway_reverse', true],
				['in', 'kind', 'trunk', 'primary', 'secondary', 'tertiary', 'unclassified', 'residential', 'living_street']
			],
			layout: {
				'symbol-placement': 'line',
				'symbol-spacing': 75,
				'icon-rotate': -90,
				'icon-rotation-alignment': 'map',
				'icon-padding': 5,
				'symbol-avoid-edges': true,
			}
		},
		{
			id: 'marking-bicycle', // bicycle=designated or kind=cycleway
			type: 'symbol',
			layer: 'streets',
			filter: ['all',
				['==', 'bicycle', 'designated'],
				['==', 'kind', 'cycleway'],
			],
			layout: {
				'symbol-placement': 'line',
				'symbol-spacing': 50,
			}
		},

		// symbol
		{
			id: 'symbol-transit-bus',
			type: 'symbol',
			layer: 'public_transport',
			filter: ['==', 'kind', 'bus_stop'],
			layout: { 'text-field': `{name${languageSuffix}}` },
		},
		{
			id: 'symbol-transit-tram',
			type: 'symbol',
			layer: 'public_transport',
			filter: ['==', 'kind', 'tram_stop'],
			layout: { 'text-field': `{name${languageSuffix}}` },
		},
		{
			id: 'symbol-transit-subway',
			type: 'symbol',
			layer: 'public_transport',
			filter: ['all',
				['in', 'kind', 'station', 'halt'],
				['==', 'station', 'subway'],
			],
			layout: { 'text-field': `{name${languageSuffix}}` },
		},
		{
			id: 'symbol-transit-lightrail',
			type: 'symbol',
			layer: 'public_transport',
			filter: ['all',
				['in', 'kind', 'station', 'halt'],
				['==', 'station', 'light_rail'],
			],
			layout: { 'text-field': `{name${languageSuffix}}` },
		},
		{
			id: 'symbol-transit-station',
			type: 'symbol',
			layer: 'public_transport',
			filter: ['all',
				['in', 'kind', 'station', 'halt'],
				['!in', 'station', 'light_rail', 'subway'],
			],
			layout: { 'text-field': `{name${languageSuffix}}` },
		},
		{
			id: 'symbol-transit-airfield',
			type: 'symbol',
			layer: 'public_transport',
			filter: ['all',
				['==', 'kind', 'aerodrome'],
				['!has', 'iata'],
			],
			layout: { 'text-field': `{name${languageSuffix}}` },
		},
		{
			id: 'symbol-transit-airport',
			type: 'symbol',
			layer: 'public_transport',
			filter: ['all',
				['==', 'kind', 'aerodrome'],
				['has', 'iata'],
			],
			layout: { 'text-field': `{name${languageSuffix}}` },
		}
	].map(l => {
		if (l.layer) {
			l['source-layer'] = l.layer;
			delete l.layer;
		}
		return l;
	});
}