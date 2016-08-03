
demo01 : 简单的 Hello World

demo02 : v-bind v-pre v-if 等指令的使用

demo03 : vuejs 的组建系统. 子组件以及父组件 之间的传值

demo04 : 利用 vue-resource 插件, ajax 生成数据.

demo05 : 完成 App.vue 组件, 并打包.

demo06 : 自定义指令.

demo07 : 自定义 过滤器(双向过滤器). (应用了 webpack 插件生成相应的 文件.采用 gulp 压缩js 文件)
		 该demo隆重介绍了 gulp 的使用方法. 可以完成绝大多数的 任务了.

demo08 : 自定义事件. Vue 实例实现了一个自定义事件接口, 用于在组件树中通信. 注意: 这个事件系统独立于原生 DOM 事件,做法也不同. 
		 演示 子组件 调用 $dispatch() 派发事件, 事件沿着父链冒泡.

		1. 使用 $on() 监听事件.
		2. 使用 $emit() 在它上面触发事件.
		3. 使用 $dispatch() 派发事件, 事件沿着父链冒泡.
		4. 使用 $broadcast() 广播事件, 事件向下传导给所有后代.

demo09 : 多个组件可以使用一个 挂载点,然后动态的在它们之间切换,使用保留的 `<component>` 元素, 动态地绑到它的 is 特性.


new Vue();
Vue 实例的配置选项: 
	el : 在哪个选定的元素上.
	data : 自定义数据.
	computed : 计算属性.
	methods : 自定义方法.
	components : 组件.
	filters : 自定义的过滤器.
	directives : 自定义的指令.
	elementDirectives : 自定义的元素指令.
	events : 自定义事件.

	#生命周期 开始
	created : 实例创建后调用.
	compiled : 编译模板.
	ready : 
	destroyed : 被卸载后调用.
	#生命周期 结束


Vue.extend(constructor);
Vue.component(tag, constructor);
Vue 组件配置选项:
	template : 组件的模板. 也可以用选择器
		常见的限制: 
			`a` 不能包含其它的交互元素（如按钮，链接）
			`ul` 和 `ol` 只能直接包含 `li`
			`select` 只能包含 `option` 和 `optgroup`
			`table` 只能直接包含 `thead`, `tbody`, `tfoot`, `tr`, `caption`, `col`, `colgroup`
			`tr` 只能直接包含 `th` 和 `td`
	props: 选项.是一个数组或.  注意: 驼峰,使用时 HTML中 驼峰 转成 短横线隔开.
	activate : 只作用于 动态组件切换 或 静态组件初始化渲染 的过程中, 不作用于使用实例方法手工插入的过程中.
	conponents : 子组件.
	data : 一个函数.  避免所有的实例共享同一个 data 对象! 因此使用函数作为 data 选项.
	el : 同理. 参数是一个函数









