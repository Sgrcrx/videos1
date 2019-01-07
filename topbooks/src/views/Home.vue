<template>
  <div class="home">
    <navs></navs>
    
    
    
    
    </router-view>
  </div>
</template>

<script>
		import Navs from '../components/Navs'
		export default{
			data(){
				return{};
			},
			components:{
				Navs
			}
		}


</script>

<style>
		.home{
			width: 100%;
			height: 100%;
			margin: 0px auto;
			padding: 0px;
		}
</style>
