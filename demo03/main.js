
var Vue = require('vue');

//--------------------------------------------------------part1

var MyComponent = Vue.extend({
	template: '<div>This is a custom component!</div>'
});

Vue.component('my-component', MyComponent);


new Vue({
	el: '#part1',
});

//---------------------------------------------------------part 2

var child = Vue.extend({
	template: '<div>子组件</div>',
});
// 定义组件
var globals = Vue.extend({
	// 模板
	template: '<div>{{msg}}, {{privateMsg}} .. <child></child></div>',
	// 参数
	props: ['msg'],
	data: function () {
		return {
			privateMsg: '私有',
		};
	},
	// data: { // 像这样的话, 就不能取出信息来. 不知道为什么.
	// 	privateMsg: '私有',
	// },
	// 这么做的问题是 globals 所有的实例将共享同一个 data 对象! 这基本不是我们想要的,因此我们应当使用一个函数作为data选项,
	// 让这个函数返回一个新对象
	components: {// 子组件
		'child': child
	}
});

Vue.component('globals', globals);// 绑定组件

var vueModel = new Vue({
	el: '#part2'
});
/**
 * <div id="part2">
		<globals msg="给 props 的信息!"></globals>
	</div>
 */
//--------------------------------------------------------- part3

var children = Vue.extend({
	props: ['myMessage'],// 驼峰的表示变量 会变成 my-message
	template: '<span>{{myMessage}}</span>'
});


new Vue({
	el: '#part3',
	data: {
		parentMsg: 'message from parent'
	},
	components: {
		children: children
	}
});
//components还可以这么写  
// components： {  
//    child: {  
//         props: {               // or  props: ['myMessage']  
//           'myMessage': ''      
//         }  
//         template: '<span>{{ myMessage }}</span>'  
//     }  
// }  
/**
 * <div id="part3">
		<input v-model="parentMsg" />
		<br>
		<!-- v-bind 表示将 my-message 的值与表达式 parentMsg 绑定 -->
		<children v-bind:my-message="parentMsg"></children>
		<!-- v-on 表示 监听 DOM 事件. -->
	</div>
 */





