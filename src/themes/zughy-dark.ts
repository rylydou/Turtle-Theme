import { Theme } from '../types'
import template from '../templates/default'


export default {
	name: 'Zughy Dark',
	id: 'zughy-dark',
	type: 'vs-dark',
	template: template,
	colors: {
		'ui.border': '#302c2e',
		'ui.drop': '#8e478c40',
		'ui.focus': '#cd6093',
		'ui.debug.bg': '#564064',
		'ui.debug.fg': '#cfc6b8',
		'ui.accent.bg': '#564064',
		'ui.accent.bg.hover': '#8e478c',
		'ui.accent': '#cd6093',
		'ui.accent.hover': '#ffaeb6',
		'ui.accent.fg': '#ffffff',
		'ui.bg': '#242022',
		'ui.bg.active': '#302c2e',
		'ui.bg.hover': '#383336',
		'ui.mg.less': '#7d7071',
		'ui.mg': '#a0938e',
		'ui.fg': '#cfc6b8',
		'shadow': '#1f1b1d',
		'editor.bg': '#302c2e',
		'editor.bg.hover': '#383336',
		'editor.border': '#5a5353',
		'editor.mg': '#7d7071',
		'editor.fg': '#cfc6b8',
		'editor.gutter': '#4f546b',
		'editor.gutter.active': '#827094',
		'editor.cursor.fg': '#dff6f5',
		'editor.cursor.bg': '#302c2e',
		'code.comment': '#397b44',
		'code.punctuation': '#a0938e',
		'code.punctuation.less': '#7d7071',
		'code.red': '#e6482e',
		'code.orange': '#f47e1b',
		'code.yellow': '#f4b41b',
		'code.green': '#b6d53c',
		'code.blue': '#28ccdf',
		'code.pink': '#cd6093',
		'editor.selection': '#394778',
		'editor.find.range': '#472d3c',
		'editor.find.match.bg': '#564064',
		'editor.find.match.border': '#8e478c',
	},
} satisfies Theme