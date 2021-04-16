<template>
	<div>
		<h1>{{ title }}</h1>
		<h2>job = {{ $route.query.job }}</h2>
		<h2>si1 = {{ $route.query.si1 }}</h2>
		<h2>si2 = {{ $route.query.si2 }}</h2>
		<P v-html="dummy"></P>
	</div>
</template>

<script>
module.exports = {
	data: function() {
		return {
			title: 'ここは index です',
			dummy: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}
	},
	created: function(){
		console.log('job = ' + this.$route.query.job);
		console.log('si1 = ' + this.$route.query.si1);
		console.log('si2 = ' + this.$route.query.si2);
	}
}
</script>

<style scoped>
h1 { color: red; }
p{ color: green; }
</style>