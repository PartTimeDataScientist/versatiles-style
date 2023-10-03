
export default class Graybeard extends ShortbreadStyle {
	constructor() {
		this
			.addFont('regular', "Noto Sans Regular")
			.addFont('bold', "Noto Sans Bold")

			.addColor('land', "#f2f2f2")
			.addColor('water', "#d9d9d9")
			.addColor('glacier', "#ffffff")
			.addColor('wood', "#787878")
			.addColor('grass', "#f9f9f9")
			.addColor('park', "#f9f9f9")
			.addColor('street', "#ffffff")
			.addColor('streetbg', "#cccccc")
			.addColor('motorway', "#d4d4d4")
			.addColor('motorwaybg', "#b0b0b0")
			.addColor('trunk', "#e4e4e4")
			.addColor('trunkbg', "#b0b0b0")
			.addColor('building', "#dbdbdb")
			.addColor('boundary', "#b8b8b8")
			.addColor('disputed', "#c4c4c4")
			.addColor('residential', "#e6e6e633")
			.addColor('commercial', "#e6e6e633")
			.addColor('industrial', "#e6e6e633")
			.addColor('foot', "#f5f5f5")
			.addColor('label', "#3b3b3b")
			.addColor('labelHalo', "#ffffffcc")
			.addColor('agriculture', "#f9f9f9")
			.addColor('rail', "#bababa")
			.addColor('subway', "#b8b8b8")
			.addColor('cycle', "#f7f7f7")
			.addColor('waste', "#f9f9f9")
			.addColor('burial', "#f9f9f9")
			.addColor('sand', "#f2f2f2")
			.addColor('rock', "#e3e3e3")
			.addColor('leisure', "#e6e6e633")
			.addColor('wetland', "#f9f9f9")
			.addColor('danger', "#808080")
			.addColor('prison', "#e6e6e633")
			.addColor('parking', "#e6e6e633")
			.addColor('construction', "#e6e6e633")
			.addColor('education', "#e6e6e633") // 10% opacity in style
			.addColor('hospital', "#e6e6e633") // 10% opacity in style

	}
	generate() {
		let getColor = this.getColor;
		let getFont = this.getFont;
		return {

			// background
			"background": {
				color: getColor('land'),
			},

			// boundary
			"boundary-{country,state}:outline": {
				color: getColor('land', { lighten: 0.1 }),
				lineBlur: 1,
				lineCap: "round",
				lineJoin: "round",
			},
			"boundary-{country,state}": {
				color: getColor('boundary'),
				lineCap: "round",
				lineJoin: "round",
			},
			"boundary-country{-disputed,}:outline": {
				size: { 2: 0, 3: 2, 10: 8, },
				opacity: 0.75,
				color: getColor('land', { lighten: 0.05 }),
			},
			"boundary-country{-disputed,}": {
				size: { 2: 0, 3: 1, 10: 4, },
			},
			"boundary-country-disputed": {
				color: getColor('disputed'),
				lineDasharray: [2, 1],
				lineCap: "square",
			},
			"boundary-state:outline": {
				size: { 7: 0, 8: 2, 10: 4, },
				opacity: 0.75,
			},
			"boundary-state": {
				size: { 7: 0, 8: 1, 10: 2, },
			},

			// water

			"water-*": {
				color: getColor('water'),
				lineCap: "round",
				lineJoin: "round",
			},
			"water-area": {
				opacity: { 4: 0, 6: 1 },
			},
			"water-area-*": {
				opacity: { 4: 0, 6: 1 },
			},
			"water-{pier,dam}-area": {
				color: getColor('land'),
				opacity: { 12: 0, 13: 1 },
			},
			"water-river": {
				lineWidth: { 9: 0, 10: 3, 15: 5, 17: 9, 18: 20, 20: 60 },
			},
			"water-canal": {
				lineWidth: { 9: 0, 10: 2, 15: 4, 17: 8, 18: 17, 20: 50 },
			},
			"water-stream": {
				lineWidth: { 13: 0, 14: 1, 15: 2, 17: 6, 18: 12, 20: 30 },
			},
			"water-ditch": {
				lineWidth: { 14: 0, 15: 1, 17: 4, 18: 8, 20: 20 },
			},

			// land

			"land-*": {
				color: getColor('land'),
			},
			"land-glacier": {
				color: getColor('glacier'),
			},
			"land-forest": {
				color: getColor('wood'),
				opacity: { 7: 0, 8: 0.1 },
			},
			"land-grass": {
				color: getColor('grass'),
				opacity: { 11: 0, 12: 1 },
			},
			"land-{park,garden,vegetation}": {
				color: getColor('park'),
				opacity: { 11: 0, 12: 1 },
			},
			"land-agriculture": {
				color: getColor('agriculture'),
				opacity: { 10: 0, 11: 1 },
			},
			"land-residential": {
				color: getColor('residential'),
				opacity: { 10: 0, 11: 1 },
			},
			"land-commercial": {
				color: getColor('commercial'),
				opacity: { 10: 0, 11: 1 },
			},
			"land-industrial": {
				color: getColor('industrial'),
				opacity: { 10: 0, 11: 1 },
			},
			"land-waste": {
				color: getColor('waste'),
				opacity: { 10: 0, 11: 1 },
			},
			"land-burial": {
				color: getColor('burial'),
				opacity: { 13: 0, 14: 1 },
			},
			"land-leisure": {
				color: getColor('leisure'),
			},
			"land-rock": {
				color: getColor('rock'),
			},
			"land-sand": {
				color: getColor('sand'),
			},
			"land-wetland": {
				color: getColor('wetland'),
			},

			// site

			"site-dangerarea": {
				color: getColor('danger'),
				fillOutlineColor: getColor('danger'),
				opacity: 0.3,
				icon: "pattern-dark-warning-12",
			},
			"site-hospital": {
				color: getColor('hospital'),
				opacity: 0.1,
			},
			"site-prison": {
				color: getColor('prison'),
				icon: "pattern-dark-striped-12",
				opacity: 0.1,
			},
			"site-construction": {
				color: getColor('construction'),
				icon: "pattern-dark-hatched-thin-12",
				opacity: 0.1,
			},
			"site-{university,college,school}": {
				color: getColor('education'),
				opacity: 0.1,
			},
			"site-{bicycleparking,parking}": {
				color: getColor('parking'),
			},

			// building

			"building:outline": {
				color: getColor('building'),
				opacity: { 14: 0, 15: 1 },
			},

			// airport
			"airport-area": {
				color: getColor('street'),
				opacity: 0.5,
			},
			"airport-{runway,taxiway}:outline": {
				color: getColor('streetbg'),
				lineJoin: "round",
			},
			"airport-{runway,taxiway}": {
				color: getColor('street'),
				lineJoin: "round",
			},
			"airport-runway:outline": {
				size: { 11: 0, 12: 6, 13: 9, 14: 16, 15: 24, 16: 40, 17: 100, 18: 160, 20: 300 },
			},
			"airport-runway": {
				size: { 11: 0, 12: 5, 13: 8, 14: 14, 15: 22, 16: 38, 17: 98, 18: 158, 20: 298 },
				opacity: { 11: 0, 12: 1 },
			},
			"airport-taxiway:outline": {
				size: { 13: 0, 14: 2, 15: 10, 16: 14, 18: 20, 20: 40 },
			},
			"airport-taxiway": {
				size: { 13: 0, 14: 1, 15: 8, 16: 12, 18: 18, 20: 36 },
				opacity: { 13: 0, 14: 1 },
			},

			// street

			// colors and joins
			"{tunnel-,bridge-,}street-*:outline": {
				color: getColor('streetbg'),
				lineJoin: "round",
			},
			"{tunnel-,bridge-,}street-*": {
				color: getColor('street'),
				lineJoin: "round",
			},
			"tunnel-street-*:outline": {
				color: getColor('street', { darken: 0.13 }),
			},
			"tunnel-street-*": {
				color: getColor('street', { darken: 0.03 }),
			},
			"bridge-street-*:outline": {
				color: getColor('street', { darken: 0.15 }),
			},

			// streets and ways, line caps
			"{tunnel-,}{street,way}-*": {
				lineCap: "round",
			},
			"{tunnel-,}{street,way}-*:outline": {
				lineCap: "round",
			},
			"bridge-{street,way}-*": {
				lineCap: "butt",
			},
			"bridge-{street,way}-*:outline": {
				lineCap: "butt",
			},

			// special color: motorway
			"{bridge-,}street-motorway{-link,}:outline": {
				color: getColor('motorwaybg'),
			},
			"{bridge-,}street-motorway{-link,}": {
				color: getColor('motorway'),
			},
			"{bridge-,}street-{trunk,primary,secondary}{-link,}:outline": {
				color: getColor('trunkbg'),
			},
			"{bridge-,}street-{trunk,primary,secondary}{-link,}": {
				color: getColor('trunk'),
			},
			"tunnel-street-motorway{-link,}:outline": {
				color: getColor('motorwaybg', { lighten: 0.05 }),
				lineDasharray: [1, 0.3],
			},
			"tunnel-street-motorway{-link,}": {
				color: getColor('motorway', { lighten: 0.1 }),
				lineCap: "butt",
			},
			"tunnel-street-{trunk,primary,secondary}{-link,}:outline": {
				color: getColor('trunkbg', { lighten: 0.05 }),
				lineDasharray: [1, 0.3],
			},
			"tunnel-street-{trunk,primary,secondary}{-link,}": {
				color: getColor('trunk', { lighten: 0.1 }),
				lineCap: "butt",
			},

			// motorway
			"{bridge-street,tunnel-street,street}-motorway:outline": {
				size: { 5: 0, 6: 2, 10: 5, 14: 5, 16: 14, 18: 38, 19: 84, 20: 168 },
			},
			"{bridge-street,tunnel-street,street}-motorway": {
				size: { 5: 0, 6: 1, 10: 4, 14: 4, 16: 12, 18: 36, 19: 80, 20: 160 },
				opacity: { 5: 0, 6: 1 },
			},

			// trunk
			"{bridge-street,tunnel-street,street}-trunk:outline": {
				size: { 7: 0, 8: 2, 10: 4, 14: 6, 16: 12, 18: 36, 19: 74, 20: 144 },
			},
			"{bridge-street,tunnel-street,street}-trunk": {
				size: { 7: 0, 8: 1, 10: 3, 14: 5, 16: 10, 18: 34, 19: 70, 20: 140 },
				opacity: { 7: 0, 8: 1 },
			},

			// primary
			"{bridge-street,tunnel-street,street}-primary:outline": {
				size: { 8: 0, 9: 1, 10: 4, 14: 6, 16: 12, 18: 36, 19: 74, 20: 144 },
			},
			"{bridge-street,tunnel-street,street}-primary": {
				size: { 8: 0, 9: 2, 10: 3, 14: 5, 16: 10, 18: 34, 19: 70, 20: 140 },
				opacity: { 8: 0, 9: 1 },
			},

			// secondary
			"{bridge-street,tunnel-street,street}-secondary:outline": {
				size: { 11: 2, 14: 5, 16: 8, 18: 30, 19: 68, 20: 138 },
				opacity: { 11: 0, 12: 1 },
			},
			"{bridge-street,tunnel-street,street}-secondary": {
				size: { 11: 1, 14: 4, 16: 6, 18: 28, 19: 64, 20: 130 },
				opacity: { 11: 0, 12: 1 },
			},

			// links
			"{bridge-street,tunnel-street,street}-motorway-link:outline": {
				minzoom: 12,
				size: { 12: 2, 14: 3, 16: 7, 18: 14, 20: 40 },
				//		opacity: { 12: 0, 13: 1 }, // no fade-in because those are merged in lower zooms
			},
			"{bridge-street,tunnel-street,street}-motorway-link": {
				minzoom: 12,
				size: { 12: 1, 14: 2, 16: 5, 18: 12, 20: 38 },
				//		opacity: { 12: 0, 13: 1 }, // no fade-in because those are merged in lower zooms
			},
			"{bridge-street,tunnel-street,street}-{trunk,primary,secondary}-link:outline": {
				minzoom: 13,
				size: { 12: 2, 14: 3, 16: 7, 18: 14, 20: 40 },
				//		opacity: { 13: 0, 14: 1 }, // no fade-in because those are merged in lower zooms
			},
			"{bridge-street,tunnel-street,street}-{trunk,primary,secondary}-link": {
				minzoom: 13,
				size: { 12: 1, 14: 2, 16: 5, 18: 12, 20: 38 },
				//		opacity: { 13: 0, 14: 1 }, // no fade-in because those are merged in lower zooms
			},

			// minor streets
			"{bridge-street,tunnel-street,street}-{tertiary,tertiary-link,unclassified,residential,livingstreet,pedestrian}*:outline": {
				size: { 12: 2, 14: 3, 16: 6, 18: 26, 19: 64, 20: 128 },
				opacity: { 12: 0, 13: 1 },
			},
			"{bridge-street,tunnel-street,street}-{tertiary,tertiary-link,unclassified,residential,livingstreet,pedestrian}*": {
				size: { 12: 1, 14: 2, 16: 5, 18: 24, 19: 60, 20: 120 },
				opacity: { 12: 0, 13: 1 },
			},

			// service and tracks
			"{bridge-street,tunnel-street,street}-{service,track}:outline": {
				size: { 14: 2, 16: 4, 18: 18, 19: 48, 20: 96 },
				opacity: { 14: 0, 15: 1 },
			},
			"{bridge-street,tunnel-street,street}-{service,track}": {
				size: { 14: 1, 16: 3, 18: 16, 19: 44, 20: 88 },
				opacity: { 14: 0, 15: 1 },
			},

			// ways
			"{bridge-,tunnel-,}way-*:outline": {
				size: { 15: 0, 16: 5, 18: 7, 19: 12, 20: 22 },
				minzoom: 15,
			},
			"{bridge-,tunnel-,}way-*": {
				size: { 15: 0, 16: 4, 18: 6, 19: 10, 20: 20 },
				minzoom: 15,
			},

			// foot
			"{bridge-,}way-{footway,path,steps}:outline": {
				color: getColor('foot', { darken: 0.1 }),
			},
			"{bridge-,}way-{footway,path,steps}": {
				color: getColor('foot', { lighten: 0.02 }),
			},
			"tunnel-way-{footway,path,steps}:outline": {
				color: getColor('foot', { darken: 0.1 }),
			},
			"tunnel-way-{footway,path,steps}": {
				color: getColor('foot', { darken: 0.02 }),
				lineDasharray: [1, 0.2],
			},

			// cycleway
			"{bridge-,}way-cycleway:outline": {
				color: getColor('cycle', { darken: 0.1 }),
			},
			"{bridge-,}way-cycleway": {
				color: getColor('cycle'),
			},
			"tunnel-way-cycleway:outline": {
				color: getColor('cycle', { darken: 0.1 }),
			},
			"tunnel-way-cycleway": {
				color: getColor('cycle', { darken: 0.02 }),
				lineDasharray: [1, 0.2],
			},

			// cycle streets overlay
			"{bridge-street,tunnel-street,street}-{tertiary,tertiary-link,unclassified,residential,livingstreet,pedestrian}-bicycle": {
				lineCap: "butt",
				color: getColor('cycle'),
			},

			// pedestrian
			"street-pedestrian": {
				size: { 12: 1, 14: 2, 16: 5, 18: 24, 19: 60, 20: 120 },
				opacity: { 13: 0, 14: 1 },
				color: getColor('foot'),
			},
			"street-pedestrian-zone": {
				color: getColor('foot', { lighten: 0.02, opacity: 0.75 }), // make 75% opaque
				opacity: { 14: 0, 15: 1 },
			},

			// rail, lightrail
			"{tunnel-,bridge-,}transport-{rail,lightrail}:outline": {
				color: getColor('rail'),
				size: { 8: 1, 13: 1, 15: 3, 16: 4, 18: 8, 19: 11, 20: 14 },
			},
			"{tunnel-,bridge-,}transport-{rail,lightrail}": {
				color: getColor('rail', { lighten: 0.25 }),
				size: { 8: 1, 13: 1, 15: 2, 16: 3, 18: 6, 19: 8, 20: 10 },
				lineDasharray: [2, 2],
			},
			// subway
			"{tunnel-,bridge-,}transport-subway:outline": {
				color: getColor('subway'),
				size: { 11: 0, 12: 1, 15: 3, 16: 3, 18: 6, 19: 8, 20: 10 },
			},
			"{tunnel-,bridge-,}transport-subway": {
				color: getColor('subway', { lighten: 0.25 }),
				size: { 11: 0, 12: 1, 15: 2, 16: 2, 18: 5, 19: 6, 20: 8 },
				lineDasharray: [2, 2],
			},
			// monorail
			"{tunnel-,bridge-,}transport-{tram,narrowgauge,funicular,monorail}:outline": {
				minzoom: 15,
				color: getColor('rail'),
				size: { 15: 0, 16: 5, 18: 7, 20: 20 },
				lineDasharray: [0.1, 0.5],
			},
			"{tunnel-,bridge-,}transport-{tram,narrowgauge,funicular,monorail}": {
				minzoom: 13,
				size: { 13: 0, 16: 1, 17: 2, 18: 3, 20: 5 },
				color: getColor('rail'),
			},

			// bridge
			"{bridge-,}transport-rail:outline": {
				opacity: { 8: 0, 9: 1 },
			},
			"{bridge-,}transport-rail": {
				opacity: { 14: 0, 15: 1 },
			},
			"{bridge-,}transport-{lightrail,subway}:outline": {
				opacity: { 11: 0, 12: 1 },
			},
			"{bridge-,}transport-{lightrail,subway}": {
				opacity: { 14: 0, 15: 1 },
			},

			// tunnel
			"tunnel-transport-rail:outline": {
				opacity: { 8: 0, 9: 0.3 },
			},
			"tunnel-transport-rail": {
				opacity: { 14: 0, 15: 0.3 },
			},
			"tunnel-transport-{lightrail,subway}:outline": {
				opacity: { 11: 0, 12: 0.5 },
			},
			"tunnel-transport-{lightrail,subway}": {
				opacity: { 14: 0, 15: 1 },
			},

			// ferry
			"transport-ferry": {
				minzoom: 10,
				color: getColor('water', { darken: 0.1 }),
				size: { 10: 1, 13: 2, 14: 3, 16: 4, 17: 6 },
				opacity: { 10: 0, 11: 1 },
				lineDasharray: [1, 1],
			},

			// labels
			"label-boundary-*": {
				color: getColor('label'),
				font: getFont('bold'),
				textTransform: "uppercase",
				textHaloColor: getColor('labelHalo'),
				textHaloWidth: 2,
				textHaloBlur: 1,
				textAnchor: "bottom",
			},
			"label-boundary-country-large": {
				minzoom: 2,
				size: { 2: 11, 5: 16 },
			},
			"label-boundary-country-medium": {
				minzoom: 3,
				size: { 3: 11, 5: 15 },
			},
			"label-boundary-country-small": {
				minzoom: 4,
				size: { 4: 11, 5: 14 },
			},
			"label-boundary-*:en": {
				color: getColor('label'),
				font: getFont('regular'),
				textTransform: "uppercase",
				textHaloColor: getColor('labelHalo'),
				textHaloWidth: 2,
				textHaloBlur: 1,
				textAnchor: "top",
				textOffset: [0, 0.2],
				textPadding: 0,
				textOptional: true,
			},
			"label-boundary-country-large:en": {
				minzoom: 2,
				size: { 2: 8, 5: 13 },
			},
			"label-boundary-country-medium:en": {
				minzoom: 3,
				size: { 3: 8, 5: 12 },
			},
			"label-boundary-country-small:en": {
				minzoom: 4,
				size: { 4: 8, 5: 11 },
			},
			"label-boundary-state": {
				minzoom: 5,
				color: getColor('label', { lighten: 0.05 }),
				size: { 5: 8, 8: 12 },
			},
			"label-place-*": {
				color: getColor('label', { darken: 0.05 }),
				font: getFont('regular'),
				textHaloColor: getColor('labelHalo'),
				textHaloWidth: 2,
				textHaloBlur: 1,
			},
			"label-place-capital": {
				minzoom: 5,
				size: { 5: 12, 10: 16 },
			},
			"label-place-statecapital": {
				minzoom: 6,
				size: { 6: 11, 10: 15 },
			},
			"label-place-city": {
				minzoom: 7,
				size: { 7: 11, 10: 14 },
			},
			"label-place-town": {
				minzoom: 9,
				size: { 8: 11, 12: 14 },
			},
			"label-place-village": {
				minzoom: 11,
				size: { 9: 11, 12: 14 },
			},
			"label-place-hamlet": {
				minzoom: 13,
				size: { 10: 11, 12: 14 },
			},
			// all the city things
			"label-place-suburb": {
				minzoom: 11,
				size: { 11: 11, 13: 14 },
				textTransform: "uppercase",
				color: getColor('label', { darken: 0.05 }),
			},
			"label-place-quarter": {
				minzoom: 13,
				size: { 13: 13 },
				textTransform: "uppercase",
				color: getColor('label', { darken: 0.05 }),
			},
			"label-place-neighbourhood": {
				minzoom: 14,
				size: { 14: 12 },
				textTransform: "uppercase",
				color: getColor('label', { darken: 0.05 }),
			},
			"label-motorway-shield": {
				color: "#ffffff",
				font: getFont('bold'),
				textHaloColor: getColor('motorway'),
				textHaloWidth: 0.1,
				textHaloBlur: 1,
				symbolPlacement: "line",
				textAnchor: "center",
				minzoom: 14,
				size: { 14: 10, 18: 12, 20: 16 },
			},
			"label-street-*": {
				color: getColor('label'),
				font: getFont('regular'),
				textHaloColor: getColor('labelHalo'),
				textHaloWidth: 2,
				textHaloBlur: 1,
				symbolPlacement: "line",
				textAnchor: "center",
				minzoom: 12,
				size: { 12: 10, 15: 13 },
			},
		}
	}
}