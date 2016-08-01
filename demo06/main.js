var Vue = require("vue");

Vue.directive('part1',{// 指令为: v-part1
	bind: function ()  {// 只调用一次,在指令第一次绑定到元素上时调用
		console.log("demo bound!");
	},
	update: function (value) {// 在 bind 之后立即以初始值为参数第一次调用,之后每当绑定值变化时调用，参数为新值与旧值
		this.el.innerHTML = 
		'name - ' + this.name + '<br>' +
		'expression - ' + this.expression + '<br>' + 
		'argument - ' + this.arg + '<br>' + 
		'modifiers - ' + JSON.stringify(this.modifiers) + '<br>' +
		'value - ' + value;
		/**
		 * 指令实例属性
		 *
		 *  el: 指令绑定的元素。
			vm: 拥有该指令的上下文 ViewModel。
			expression: 指令的表达式，不包括参数和过滤器。
			arg: 指令的参数。
			name: 指令的名字，不包含前缀。
			modifiers: 一个对象，包含指令的修饰符。
			descriptor: 一个对象，包含指令的解析结果。
		 */
		
		/**
		 *  输出结果
		 *  name - part1
			expression - msg
			argument - hello
			modifiers - {"b":true,"a":true}
			value - hello!
		 */
	},
	unbind: function () {//只调用一次，在指令从元素上解绑时调用。
		// 清理工作
	    // 例如，删除 bind() 添加的事件监听器
		console.log('demo unbond!');
	}
});

var part1 = new Vue({
	el: '#part1',
	data: {
		msg: 'hello!'
	}
});

//--------------------------------------------- 对象字面量
Vue.directive('part2', function (value) {// v-part2  一定要在 Vue 的实例下才能生效
	console.log(value.color);// "white"
	console.log(value.text);// "hello!"
});
var part2 = new Vue({
	el: '#part2'
})


