<template>
   <div id='admin'>
      <ul class='left'>
         <li>
            <router-link :to='{name:"userLink"}'>用户列表</router-link>
         </li>
         <li>
            <router-link :to='{name:"categoryLink"}'>分类列表</router-link>
         </li>
         <li>
            <router-link :to='{name:"contentLink"}'>内容列表</router-link>
         </li>
      </ul>
      <router-view class='right'></router-view>
   </div>
</template>

<script>
export default {
	name:'Admin',
   created() {
      console.log('管理');
   },
}
</script>

<style scoped>
*{
   margin:0;
   padding:0;
}
#admin{
   overflow:hidden;
   background-color:#ccc;
}
.left{
   list-style:none;
   float:left;
   width:300px;
}
.left li{
   margin:20px 0;
   text-align:center;
   line-height:40px;
   background:lightblue
}
.right{
   float:right;
}
</style>    