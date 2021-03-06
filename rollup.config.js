import buble from 'rollup-plugin-buble';
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
	entry: 'src/index.js',
	dest: 'js/app.js',
	plugins: [
		buble(),
		resolve({ jsnext: true }),
		commonjs({
			exclude: ['node_modules/symbol-observable/**', 'node_modules/most/**'],
			include: 'node_modules/**'
		})
	],
	format: 'iife'
}
