<template>
	<div id="AppSite">
		<div class="area">
			<h1 class="area__titulo">{{ category }}</h1>
			<button class="area__close material-icons">close</button>
		</div>
		<div class="search">
			<input class="search__input" type="text" name="pesquisa" placeholder="o que você procura?">
			<button class="search__button material-icons" @click="">
				menu
			</button>
		</div>
		<VuePerfectScrollbar class="scroll-area" @ps-scroll-y="scrollHanle">
			<section class="container" v-for="atividade in filterActivity" @click="setActivity(atividade.name)">
				<img class="image" :src="atividade.imageDesk">
				<img class="imageMob" :src="atividade.imageMob">
				<div class="container-texts">
					<h3 class="title">{{ atividade.name }}</h3>
					<p class="caption">{{ atividade.subcategoria }}</p>
				</div>
			</section>
		</VuePerfectScrollbar>
	</div>
</template>
<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default{
	name: 'ListaAtividades',
	props:{
		filterActivity:{
			type: Array
		},
		category:{
			type: String
		},
		
	},
	data(){
		return{
			settings:{
				// maxScrollbarLength: 60
			}
		}
	},
	computed:{

	},
	methods:{
		scrollHanle(evt){
			console.log(evt)
		},
		setActivity(value){
			this.$emit('change')
			this.$emit('', value)
		}
	},	
	components:{
		VuePerfectScrollbar
	}
}

</script>
<style scoped>
#AppSite{
	width: 40%;
	height: 92vh;
	margin-top: 5%;
}
@media(max-width: 640px){
	#AppSite{
		width: 100%;
		margin: 0;
	}
}
.area{
	width: 100%;
	height: 55px;
	background-color: #f26522;
	position: relative;
	display: none;
	align-items: center;
	justify-content: center;
}
@media(max-width: 640px){
	.area{
		display: flex;
	}
}
.area__titulo{
	color: #fff;
	font-size: 1.8em;
	font-family: ministry, sans-serif;
	font-style: normal;
	font-weight: 400;
}
.area__close{
	width: 25px;
	height: 25px;
	background-color: transparent;
	border: none;
	border-radius: 50px;
	font-size: 1.7em;
	color: #fff;
	line-height: 25px;
	position: absolute;
	right: 20px;
	top: 25%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.search{
	width: 98%;
	margin-bottom: 5px;
	background-color: #fff;
	border-radius: 25px;
	display: none;
	justify-content: space-around;
	align-items: center;
}
@media(max-width: 640px){
	.search{
		width: 90%;
		margin: 10px auto;
		display: flex;
	}
}
.search__input{
	width: 75%;
	height: 6vh;
	border: none;
	font-size: 1.2em;
	color: #2e3192;
	font-family: ministry, sans-serif;
	font-style: normal;
	font-weight: 400;
}
.search__button{
	width: 15%;
	background-color: #fff;
	border: none;
	border-radius: 30px;
	font-size: 50px;
	color: #2e3192
}
.scroll-area {
  position: relative;
  margin: auto;
  height: 650px;
}
@media(max-width: 640px){
	.scroll-area{
		width: 90%;
	}
}
.container{
	width: 500px;
	height: 200px;
	margin: 0 auto;
	margin-bottom: 1%;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;	
	position: relative;
	/*overflow: auto;*/
}
.image{
	width: 100%;
	object-fit: cover;
	position: absolute;
}
@media (max-width: 640px){
	.image{
		display: none;
	}
}
.imageMob{
	width: 100%;
	object-fit: cover;
	position: absolute;
	display: none;
}
@media (max-width: 640px){
	.imageMob{
		display: block;
	}
}
.container-texts{
	width: 100%;
	height: 100%;
	padding: 20px;
	background-color: rgba(242, 101, 34,0.6);
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-start;
}
.container-texts:hover{
	background-color:rgba(46, 49, 146, 0.6);
}
.title{
	margin-bottom: 5px;
	font-size: 1.63em;
	font-weight: bold;
	color: white;
}
.caption{
	font-size: 1.63em;
	font-style: italic;
	color: white;
}
</style>