<template>
	<nav>
		<router-link :to='{name:"indexLink"}'>主页</router-link>
		<router-link :to='{name:"adminLink"}'>管理</router-link>
		<router-link :to='{name:"menuLink"}'>菜单</router-link>
		<router-link :to='{name:"aboutLink"}'>关于我们</router-link>
		<router-link :to='{name:"loginLink"}'>登录</router-link>
		<router-link :to='{name:"registerLink"}'>注册</router-link>
	</nav>
</template>

<script>
export default {
	name:'AppHeader'
}
</script>

<style scoped>
	nav{
		display:flex;
		height:40px;
	}
	a{
		flex-grow:1;
		text-align:center;
		line-height:40px;
		box-shadow:0 0 10px 0 inset;
	}
</style>    