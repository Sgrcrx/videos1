<template>
	<div class="navs">
		<div class="nav">
			<div class="item" v-for="(item,index) in navs">
				<router-link :to="item.to">
					<span v-text="item.title"></span>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				navs:[{
					id:1,
					to:'/',
					title:'首页'
				},{
					id:2,
					to:'/magic',
					title:'魔法玄幻'
				},{
					id:3,
					to:'/swordsman',
					title:'武侠修真'
				},{
					id:4,
					to:'/romance',
					title:'都市言情'
				},{
					id:5,
					to:'/history',
					title:'历史军事'
				},{
					id:6,
					to:'/games',
					title:'网游竞技'
				},{
					id:7,
					to:'/science',
					title:'科幻小说'
				},{
					id:8,
					to:'/terror',
					title:'恐怖异灵'
				},{
					id:9,
					to:'/girls',
					title:'女生小说'
				},{
					id:10,
					to:'/others',
					title:'其他小说'
				},{
					id:11,
					to:'/allss',
					title:'全本小说'
				},{
					id:12,
					to:'/userbooks',
					title:'我的书架'
				}]
			};
		},
	}
</script>

<style>
	.navs{}
	.navs .nav{
		display: flex;
		display: -webkit-flex;
		box-sizing: border-box;
		background-image: linear-gradient(to bottom,#FEFEFE,#F8F8F8,#F2F2F2);
		line-height: 40px;
		text-align: center;
	}
	.navs .nav .item{
		flex: 1;
	}
	.navs .nav .item a{
		text-decoration: none;
		color: #2F469C;
		font-weight: 600;
		font-size: 14px;
	}
	.navs .nav .item a span{}
</style>