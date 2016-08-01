var Vue = require("vue");

var todos = new Vue({
	el: '#todos',
	data: {
		info: '',
		todos: [
			{text: '写些什么吧!'}
		]
	},
	methods: {
		addTodo: function () {
			var text = this.info.trim();
			if (text) {
				this.todos.push({text: text});
			}

			this.info = '';
		},
		removeTodo: function (index) {
			this.todos.splice(index, 1);
		}
	}
});


var v_if = new Vue({
	el: '#if',
});

