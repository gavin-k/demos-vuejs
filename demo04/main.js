var Vue = require("vue");
var VueResource = require("vue-resource");// Ajax 异步通信

Vue.use(VueResource);

var ajax = new Vue({
	el: "#ajax",
	data: {
		code: 0,
		message: 'api',
		lists: [],
	},
	ready: function () {
		// this.$http.get("http://cors.io/?u=http://api.imuhou.com").then(function (response) {
		this.$http.get("https://api.github.com/").then(function (response) {
			console.log(response);
			this.$set('lists', response.data);
		}, function (response) { // 发生错误时的回调
			console.log("有错误!");
			console.log(response);
		});
	},
// ready() {
//      // GET /someUrl
//      this.$http.get('/someUrl').then((response) => {
//          // success callback
//      }, (response) => {
//          // error callback
//      });
//  }
})
