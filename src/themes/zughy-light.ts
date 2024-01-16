import { Theme } from '../types'
import template from '../templates/default'


export default {
	name: 'Zughy Light',
	id: 'zughy-light',
	type: 'vs',
	template: template,
	colors: {
		'ui.border': '#ded8c5',
		'ui.drop': '#8e478c40',
		'ui.focus': '#cd6093',
		'ui.debug.bg': '#564064',
		'ui.debug.fg': '#cfc6b8',
		'ui.accent.bg': '#f4cca1',
		'ui.accent.bg.hover': '#eea160',
		'ui.accent': '#a93b3b',
		'ui.accent.hover': '#a93b3b',
		'ui.accent.fg': '#000000',
		'ui.bg': '#eee8d5',
		'ui.bg.active': '#fdf6e3',
		'ui.bg.hover': '#fdf6e3',
		'ui.mg.less': '#a0938e',
		'ui.mg': '#7d7071',
		'ui.fg': '#302c2e',
		'shadow': '#ded8c5',
		'editor.bg': '#fdf6e3',
		'editor.bg.hover': '#eee8d5',
		'editor.border': '#ded8c5',
		'editor.mg': '#7d7071',
		'editor.fg': '#302c2e',
		'editor.gutter': '#f4cca1',
		'editor.gutter.active': '#eea160',
		'editor.cursor.fg': '#000000',
		'editor.cursor.bg': '#ffffff',
		'code.comment': '#397b44',
		'code.punctuation': '#bf7958',
		'code.punctuation.less': '#eea160',
		'code.red': '#a93b3b',
		'code.orange': '#e6482e',
		'code.yellow': '#f47e1b',
		'code.green': '#397b44',
		'code.blue': '#3978a8',
		'code.pink': '#8e478c',
		'editor.selection': '#f47e1b40',
		'editor.find.range': '#eea160',
		'editor.find.match.bg': '#ffffff',
		'editor.find.match.border': '#8aebf1',
	},
} satisfies Theme