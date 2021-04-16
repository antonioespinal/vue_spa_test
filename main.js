/*
 * main.js
 */

const router = new VueRouter({
	//mode: 'history',
	routes: [
		{ path: '/index.html', component: httpVueLoader('./index.vue') },
		{ path: '/', component: httpVueLoader('./index.vue') },
		{ path: '/detail.html', component: httpVueLoader('./detail.vue') },
	]
});

const app = new Vue({
	el: "#app",
	router
});