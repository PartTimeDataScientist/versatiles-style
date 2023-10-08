import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
	input: 'index.js',
	output: {
		dir: 'dist',
		format: 'es'
	},
	plugins: [
		commonjs(),
		nodeResolve(),
	]
}
