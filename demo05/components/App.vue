<template>
	<div class="app-list">
        <div class="inner content-bottom" style="overflow: hidden;">
            <ul>
                <li v-for="item in list"><a href="javascript:;"><img v-bind:src="item.url" v-bind:alt="item.text"></a></li>
            </ul>
        </div>
    </div>
</template>

<script>
// 果然还是要学习 es6 的代码
	export default {// 加载默认的模块,不需要通过花括号来指定输出的模块. 注意: 一个模块只能使用 export default 一次.
		data () {
				return {
					list: [
					{ url:"http://cn.vuejs.org//images/logo.png", text:"vuejs" },
					{ url:"http://cn.vuejs.org//images/logo.png", text:"vuejs" },
					{ url:"http://cn.vuejs.org//images/logo.png", text:"vuejs" },
					{ url:"http://cn.vuejs.org//images/logo.png", text:"vuejs" },
					{ url:"http://cn.vuejs.org//images/logo.png", text:"vuejs" },
					{ url:"http://cn.vuejs.org//images/logo.png", text:"vuejs" },
					{ url:"http://cn.vuejs.org//images/logo.png", text:"vuejs" },
					{ url:"http://cn.vuejs.org//images/logo.png", text:"vuejs" },
					{ url:"http://cn.vuejs.org//images/logo.png", text:"vuejs" },
					{ url:"http://cn.vuejs.org//images/logo.png", text:"vuejs" }
				]
			}
		}
	}

</script>

<!-- 添加 scoped 属性,限制 CSS 只作用于该组件中 -->
<style scoped>
	.inner .content-bottom {
		overflow: hidden;
	}
	.app-list ul {
		float: left;
		width: 1750px;
		transition-property: -webkit-transform;
		transform-origin: 0px 0px 0px;
		transform: translate3d(0px, 0px, 0px) scale(1);
	}
	.app-list img {
		max-height: 50px;
	}
</style>
