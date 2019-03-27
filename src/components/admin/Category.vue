<template>
   <div class='categoryInfo'>
      <nav>
         <router-link :to="{name:'htmlLink'}">html</router-link>
         <router-link :to="{name:'jsLink'}">js</router-link>
         <router-link :to="{name:'vueLink'}">vue</router-link>
      </nav>
      <router-view></router-view>
   </div>
</template>

<script>
export default {
   
}
</script>

<style scoped>
.categoryInfo{
   width:300px;
   height:200px;
   background:lightyellow
}
a{
   margin:0 20px;
}

</style>