<template>
	<div>
		<h1>{{ title }}</h1>
		<h2>no = {{ $route.query.no }}</h2>
		<P v-html="dummy"></P>
	</div>
</template>

<script>
module.exports = {
	data: function() {
		return {
			title: 'ここは detail です',
			dummy: '私も毎号たといそんな焦燥児という事のためがありないた。<br>とにかく生涯が見当院は毫もその比較んたばかりが与えてくれありをは発表できるだますて、必ずにはさだなべきます。<br>鉱脈を見つかりた方はようやく結果よりとうていたですた。とうとう大森君の学習自己そう始末へしで状態この人彼らか建設にという肝授業たでましましが、この今日は彼らか素因人格にありて、嘉納さんののと西洋のそれのましてお満足となさるて何他のお乱暴にいうようにすでに同破壊の行っまいなけれと、多分単に発表がいうなけれているでものにしんた。そこでつまり同向うから起しのはそう大変というましから、どんな人がは着けないがという師範に被せるから行くでしょだ。<br>わが上手の時この他人は私末をいんかと岩崎君が踏みたまし、他人の今ませというお濫用ないましんば、引込のためと顔を場合かもの本国を毎日訊いてくれて、こうの事実になるからその中をあに気に入らんうと述べないのですと、なくでたて全くお態度帰っなのますないで。ただ学校か変か教育になるたから、場合中廃墟にしがいない時をお話の時間のしたた。<br>今日がは同時にしてありなかっうですませから、現にとにかく応じから発展もはっきりないうものん。<br>ただお入会から眺めるてもしまいないのでしょが、圏外からも、あにそこかしてするれるないます焼いれれでしょないと暮らしから、否はしていたたい。'
		}
	},
	created: function(){
		console.log('no = ' + this.$route.query.no);
	}
}
</script>

<style scoped>
h1 { color: blue; }
p{ color: blue; }
</style>