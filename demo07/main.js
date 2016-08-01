var Vue = require('vue');

Vue.filter('reverse', function (value){
	return value.split('').reverse().join('');
});

var part1 = new Vue({
	el: '#part1',
	data: {
		message: 'abc'
	}
});


//---------------------  接受任意数量的参数

Vue.filter('wrap', function (value, begin, end) {
	return begin + value + end;
});

var part2 = new Vue({
	el: '#part2',
	data: {
		message: 'hello'
	}
});


//---------------------- 双向过滤器
Vue.filter('currencyDisplay', {
	read: function (val) { // model -> view : 格式化值当更新 input 元素时
		return '$'+val.toFixed(2);
	},
	write: function (val, oldVal) {// view -> model : 格式化值 写入数据
		var number = +val.replace(/[^\d.]/g, '');
		return isNaN(number) ? 0 : parseFloat(number.toFixed(2));
	}
});

var part3 = new Vue({
	el: '#part3',
	data: {
		coins: 0
	}
});
console.log('part3', part3);




