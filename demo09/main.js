import Vue from 'vue';

var  slot_comp = Vue.extend({
	template: "<h1>Hello ! I'm slot_comp!!</h1>",
});

var  child = Vue.extend({
	template: "<h1>Hello ! I'm child</h1>",
});

var  contact = Vue.extend({
	template: "<h1>Hello ! I'm contact</h1>",
});


new Vue({
	el: '#dynamic-comp',
	data: {
		curView: 'slot_comp',
		views: ['slot_comp', 'child', 'contact'],
		viewIdx: 0
	},
	methods: {
		viewCh: function () {
			this.viewIdx = (this.viewIdx+1) %3;
			this.curView = this.views[this.viewIdx];
		}
	},
	components: {
		'slot_comp': slot_comp,
		child: child,
		contact: contact,
	}
});
