<template>
	<div id='app'>
		<app-header></app-header>
		<router-view></router-view>
		<router-view name='user'></router-view>
		<router-view name='content'></router-view>
	</div>
</template>

<script>
import AppHeader from './components/AppHeader'

export default {
	name : 'app',
	components:{
		AppHeader
	}
}
</script>

<style scoped>
#app{
	max-width:1000px;
	height:300px;
	margin:50px auto;
	box-shadow:0 0 10px 0 blue inset;
}

</style>