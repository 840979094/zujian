<template>
	<div id='app'>
		<ul id='list'></ul>
	</div>
</template>

<script>

export default {
	name : 'app',
	created(){
		// this.$axios.get(`https://route.showapi.com/109-35?
		// channelId=&channelName=&id=&maxResult=20
		// &needAllList=0&needContent=0&needHtml=0
		// &page=1&showapi_appid=90442&showapi_timestamp=${Date.now()}
		// &title=足球&showapi_sign=afd10c722fd7498799cbd34b70810f4f`)
		// .then((res)=>{
		// 	console.log(res)
		// })
		// fetch('http://localhost:3000/admin?username=heaven&age=18',{
		// 	// method:'POST',
		// 	// body:`name=heaven&age=28`,
		// 	// body:'name=heaven&age=28',
		// 	headers:{
		// 		'Content-Type':'application/x-www-form-urlencoded',
		// 		//'Content-Type':'application/json'
		// 	},
		// 	mode:'cors'
		// })

		this.$axios.get('/admin?name=heaven')
		
	}
}


</script>

<style scoped>

</style>