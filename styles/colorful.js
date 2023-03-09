// colors

const color = require("color");

const $land           = "#f9f4ee";
const $water          = "#beddf3";
const $glacier        = "#ffffff";
const $wood           = "#66aa44";
const $grass          = "#d8e8c8";
const $park           = "#d9d9a5";
const $street         = "#ffffff";
const $streetbg       = "#cfcdca"; // apply everywhere
const $motorway       = "#ffcc88";
const $motorwaybg     = "#e9ac77";
const $trunk          = "#ffeeaa";
const $trunkbg        = "#e9ac77"; // make different?
const $buildingbg     = "#dfdbd7";
const $building       = "#f2eae2";
const $boundary       = "#b5b5c9";
const $disputed       = "#bebccf";
const $residential    = "#eae6e133";
const $commercial     = "#f2caca44";
const $industrial     = "#fff4c255";
const $foot           = "#fbebff";
const $label          = "#333344";
const $labelHalo      = "#ffffffcc";

const $agriculture    = "#f8eeee"; // ←
const $site           = "#ebe8e6";
const $rail           = "#e8d5e0";


exports = module.exports = {
	"background": {
		color: $land,
	},
	"boundary-{country,state}:outline": {
		color: color($land).lighten(0.1).hex(),
		lineBlur: 1,
		lineCap: "round",
		lineJoin: "round",
	},
	"boundary-{country,state}": {
		color: $boundary,
		lineCap: "round",
		lineJoin: "round",
	},
	"boundary-country{-disputed,}:outline": {
		size: { 2: 2, 10: 8, },
		opacity: { 2: 0, 4: 0.75 },
		color: color($land).lighten(0.05).hex(),
	},
	"boundary-country{-disputed,}": {
		size: { 2: 1, 10: 4, },
		opacity: { 2: 0, 4: 1 },
	},
	"boundary-country-disputed": {
		color: $disputed,
		lineDasharray: [ 2, 1 ],
		lineCap: "square",
	},
	"boundary-state:outline": {
		size: { 7: 3, 10: 4, },
		opacity: { 7: 0, 8: 0.75 },
	},
	"boundary-state": {
		size: { 7: 1, 10: 2, },
		opacity: { 7: 0, 8: 1 },
	},
	"water-*": {
		color: $water,
	},
	"water-area": {
		opacity: { 4: 0, 6: 1 },
	},
	"water-area-*": {
		opacity: { 4: 0, 6: 1 },
	},
	"water-{pier,dam}-area": {
		color: $land,
		opacity: { 12: 0, 13: 1 },
	},
	"land-*": {
		color: $land,
	},
	"land-glacier": {
		color: $glacier,
	},
	"land-forest": {
		color: $wood,
		opacity: { 7: 0, 8: 0.1 },
	},
	"land-grass": {
		color: $grass,
		opacity: { 11: 0, 12: 1 },
	},
	"land-{park,garden,vegetation}": {
		color: $park,
		opacity: { 11: 0, 12: 1 },
	},
	"land-agriculture": {
		color: $agriculture,
		opacity: { 10: 0, 11: 1 },
	},

	"land-{residential}": {
		color: $residential,
		opacity: { 10: 0, 11: 1 },
	},
	"land-{commercial}": {
		color: $commercial,
		opacity: { 10: 0, 11: 1 },
	},
	"land-{industrial}": {
		color: $industrial,
		opacity: { 10: 0, 11: 1 },
	},

	"site-{bicycleparking,parking}": {
		color: $site,
	},
	"building:outline": {
		color: $buildingbg,
		opacity: { 14: 0, 15: 1 },
	},
	"building": {
		color: $building,
		opacity: { 14: 0, 15: 1 },
		fillTranslate: [ -2, -2 ],
	},
	"bridge": {
		color: color($land).darken(0.02).hex(),
	},
	"{tunnel-,bridge-,}street-*": {
		color: $street,
		size: 1,
		lineJoin: "round",
		lineCap: "round",
	},
	"{tunnel-,}street-*:outline": {
		color: $streetbg,
		lineJoin: "round",
		lineCap: "round",
	},
	"tunnel-street-*": {
		color: color($street).darken(0.03).hex(),
	},
	"tunnel-street-*:outline": {
		color: color($street).darken(0.13).hex(),
	},
	"bridge-street-*:outline": {
		color: color($street).darken(0.15).hex(),
	},

	// special color: motorway
	"{bridge-,}street-motorway{-link,}:outline": {
		color: $motorwaybg,
	},
	"{bridge-,}street-motorway{-link,}": {
		color: $motorway,
	},
	"{bridge-,}street-{trunk,primary,secondary}{-link,}:outline": {
		color: $trunkbg,
	},
	"{bridge-,}street-{trunk,primary,secondary}{-link,}": {
		color: $trunk,
	},

	"tunnel-street-motorway{-link,}:outline": {
		color: color($motorwaybg).lighten(0.05).hex(),
		lineDasharray: [1, 0.3],
	},
	"tunnel-street-motorway{-link,}": {
		color: color($motorway).lighten(0.1).hex(),
		lineCap: "butt",
	},
	"tunnel-street-{trunk,primary,secondary}{-link,}:outline": {
		color: color($trunkbg).lighten(0.05).hex(),
		lineDasharray: [1, 0.3],
	},
	"tunnel-street-{trunk,primary,secondary}{-link,}": {
		color: color($trunk).lighten(0.1).hex(),
		lineCap: "butt",
	},



	// motorway
	"{bridge-street,tunnel-street,street}-motorway:outline": {
		size: { 5: 2, 10: 5, 14: 5, 16: 14, 18: 38, 19: 84, 20: 168 },
		opacity: { 5: 0, 7: 1 },
	},
	"{bridge-street,tunnel-street,street}-motorway": {
		size: { 5: 1, 10: 4, 14: 4, 16: 12, 18: 36, 19: 80, 20: 160 },
		opacity: { 5: 0, 7: 1 },
	},

	// trunk
	"{bridge-street,tunnel-street,street}-trunk:outline": {
		size: { 7: 2, 10: 4, 14: 6, 16: 12, 18: 36, 19: 74, 20: 144 },
		opacity: { 7: 0, 8: 1 },
	},
	"{bridge-street,tunnel-street,street}-trunk": {
		size: { 7: 1, 10: 3, 14: 5, 16: 10, 18: 34, 19: 70, 20: 140 },
		opacity: { 7: 0, 8: 1 },
	},

	// primary, z8+
	"{bridge-street,tunnel-street,street}-primary:outline": {
		size: { 7: 2, 10: 4, 14: 6, 16: 12, 18: 36, 19: 74, 20: 144 },
		opacity: { 8: 0, 9: 1 },
	},
	"{bridge-street,tunnel-street,street}-primary": {
		size: { 7: 1, 10: 3, 14: 5, 16: 10, 18: 34, 19: 70, 20: 140 },
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
//		opacity: { 12: 0, 13: 1 },
	},
	"{bridge-street,tunnel-street,street}-motorway-link": {
		minzoom: 12,
		size: { 12: 1, 14: 2, 16: 5, 18: 12, 20: 38 },
//		opacity: { 12: 0, 13: 1 },
	},

	"{bridge-street,tunnel-street,street}-{trunk,primary,secondary}-link:outline": {
		minzoom: 13,
		size: { 12: 2, 14: 3, 16: 7, 18: 14, 20: 40 },
//		opacity: { 13: 0, 14: 1 },
	},
	"{bridge-street,tunnel-street,street}-{trunk,primary,secondary}-link": {
		minzoom: 13,
		size: { 12: 1, 14: 2, 16: 5, 18: 12, 20: 38 },
//		opacity: { 13: 0, 14: 1 },
	},

	// minor streets
	"{bridge-street,tunnel-street,street}-{tertiary,tertiary-link,unclassified,residential,livingstreet,pedestrian}:outline": {
		size: { 12: 2, 14: 3, 16: 6, 18: 26, 19: 64, 20: 128 },
		opacity: { 12: 0, 13: 1 },
	},
	"{bridge-street,tunnel-street,street}-{tertiary,tertiary-link,unclassified,residential,livingstreet,pedestrian}": {
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
	// ways, surface only
	"{bridge-,}way-{footway,path,steps}:outline": {
		size: { 15: 0, 16: 5, 18: 7, 19: 12, 20: 22 },
		minzoom: 15,
		color: color($foot).darken(0.1).hex(),
		lineCap: "round",
		lineJoin: "round",
	},
	"{bridge-,}way-{footway,path,steps}": {
		size: { 15: 0, 16: 4, 18: 6, 19: 10, 20: 20 },
		minzoom: 15,
		color: color($foot).lighten(0.02).hex(),
		lineCap: "round",
		lineJoin: "round",
	},
	"tunnel-way-{footway,path,steps}:outline": {
		size: { 15: 0, 16: 5, 18: 7, 19: 12, 20: 22 },
		minzoom: 15,
		color: color($foot).darken(0.1).desaturate(0.5).hex(),
		lineCap: "round",
		lineJoin: "round",
	},
	"tunnel-way-{footway,path,steps}": {
		size: { 15: 0, 16: 4, 18: 6, 19: 10, 20: 20 },
		minzoom: 15,
		color: color($foot).darken(0.02).desaturate(0.5).hex(),
		lineDasharray: [ 1, 0.2 ],
		lineCap: "butt",
		lineJoin: "round",
	},

	"street-pedestrian": {
		size: { 12: 1, 14: 2, 16: 5, 18: 24, 19: 60, 20: 120 },
		opacity: { 13: 0, 14: 1 },
		color: $foot,
	},
	"street-pedestrian-zone": {
		color: color($foot).lighten(0.02).hex(),
		opacity: { 14: 0, 15: 1 },
	},
	// rail
	"{tunnel-,bridge-,}transport-{rail,lightrail}:outline": {
		color: $rail,
		size: { 8: 1, 12: 1, 15: 3 },
	},
	"{tunnel-,bridge-,}transport-{rail,lightrail}": {
		color: color($rail).lighten(0.1).hex(),
		size: { 8: 1, 12: 1, 15: 2 },
		lineDasharray: [ 2, 2 ],
	},
	// bridge
	"{bridge-,}transport-rail:outline": {
		opacity: { 8: 0, 9: 1 },
	},
	"{bridge-,}transport-rail": {
		opacity: { 14: 0, 15: 1 },
	},
	"{bridge-,}transport-lightrail:outline": {
		opacity: { 11: 0, 12: 1 },
	},
	"{bridge-,}transport-lightrail": {
		opacity: { 14: 0, 15: 1 },
	},
	// tunnel
	"tunnel-transport-rail:outline": {
		opacity: { 8: 0, 9: 0.3 },
	},
	"tunnel-transport-rail": {
		opacity: { 14: 0, 15: 0.3 },
	},
	"tunnel-transport-lightrail:outline": {
		opacity: { 11: 0, 12: 0.3 },
	},
	"tunnel-transport-lightrail": {
		opacity: { 14: 0, 15: 0.3 },
	},
	// labels
	"label-boundary-*": {
		color: $label,
		font: "Noto Sans Bold",
		textTransform: "uppercase",
		textHaloColor: $labelHalo,
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
		color: $label,
		font: "Noto Sans Regular",
		textTransform: "uppercase",
		textHaloColor: $labelHalo,
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
		color: color($label).lighten(0.05).hex(),
		size: { 5: 8, 8: 12 },
	},
	"label-place-*": {
		color: color($label).rotate(-15).saturate(1).darken(0.05).hex(),
		font: "Noto Sans Regular",
		textHaloColor: $labelHalo,
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
		color: color($label).rotate(-30).saturate(1).darken(0.05).hex(),
	},
	"label-place-quarter": {
		minzoom: 13,
		size: { 13: 13 },
		textTransform: "uppercase",
		color: color($label).rotate(-40).saturate(1).darken(0.05).hex(),
	},
	"label-place-neighbourhood": {
		minzoom: 14,
		size: { 14: 12 },
		textTransform: "uppercase",
		color: color($label).rotate(-50).saturate(1).darken(0.05).hex(),
	},

	"label-motorway-shield": {
		color: "#ffffff",
		font: "Noto Sans Bold",
		textHaloColor: $motorway,
		textHaloWidth: 0.1,
		textHaloBlur: 1,
		symbolPlacement: "line",
		textAnchor: "center",
		minzoom: 14,
		size: { 14: 10, 18: 12, 20: 16 },
	},

	"label-street-*": {
		color: $label,
		font: "Noto Sans Regular",
		textHaloColor: $labelHalo,
		textHaloWidth: 2,
		textHaloBlur: 1,
		symbolPlacement: "line",
		textAnchor: "center",
		minzoom: 12,
		size: { 12: 10, 15: 13 },
	},

};

/*
{
  "id": "label-boundary-country-any",
  "type": "symbol",
  "filter": [
	 "all",
	 ["in", "admin_level", 2, "2"],
	 ["!has", "land_area"]
  ],
  "layout": {
	 "text-field": "{name}",
	 "text-font": ["Noto Sans Bold"],
	 "text-size": {
		"stops": [[2, 10], [5, 16]]
	 },
	 "text-transform": "uppercase",
	 "text-padding": 3
  },
  "paint": {
	 "text-color": "rgba(203, 183, 183, 1)",
	 "text-halo-width": 0.1,
	 "text-halo-blur": 1,
	 "text-halo-color": "rgba(255, 255, 255, 1)"
  },
  "source-layer": "boundary_labels",
  "source": "versatiles-shortbread"
}
*/