var Vue = require("vue");
// 需要些绝对路劲
var list = require("./components/App.vue");

Vue.component('list', list);

var app = new Vue({
	el: '#app',
});
