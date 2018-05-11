<template>
	<div id="AppSite">
		<div class="area">
			<h1 class="area__titulo">{{ category }}</h1>
			<button class="area__close material-icons" @click="hideMenu(), setTransition()">close</button>
		</div>
		<div class="search">
			<input class="search__input" type="text" name="pesquisa" placeholder="o que você procura?">
			<button class="search__button material-icons" @click="hamburguer=!hamburguer">
				menu
			</button>
			<div class="search__quadro" v-show="hamburguer">
				<p class="searchQuadro__subcategoria" v-for="value in filterCategory.subcategory" @click="setSubcategory(value), hamburguer=!hamburguer">
					{{ value }}
				</p>
			</div>
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
		setSubcategory:{
			type: Function
		},
		filterCategory:[Object, Array],
		hideMenu:{
			type: Function
		}
	},
	data(){
		return{
			hamburguer: ''
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
			this.$emit('selectActivity', value)
		},
		setTransition(){
			this.$emit('transition')
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
@media(max-width: 360px){
	.area__titulo{
		font-size: 1.5em;
	}
}
.area__close{
	width: 25px;
	height: 25px;
	margin-right: 2%;
	background-color: transparent;
	border: none;
	border-radius: 50px;
	color: #fff;
	font-size: 1.7em;
	line-height: 25px;
	position: absolute;
	right: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.area__close:hover{
	background-color: #fff;
	color: #f26522;
}
@media(max-width: 360px){
	.area__close{
		right: 5px;
	}
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
		width: 80%;
		margin: 10px auto;
		display: flex;
		flex-wrap: wrap;
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
	width: 10%;
	background-color: #fff;
	border: none;
	border-radius: 30px;
	font-size: 50px;
	color: #2e3192
}
@media(max-width: 640px){
	.search__button{
		font-size: 40px;
	}
}
.search__quadro{
	width: 100%;
	min-height: 100px;
	padding: 0.4%;
	border-radius: 15px;
	background-color: #fff;
	right: 10px;
	top: 150px;
	display: none;
	flex-flow: row wrap;
	justify-content: flex-end;
}
@media (max-width: 640px){
	.search__quadro{
		display: flex;
	}
}
.searchQuadro__subcategoria{
	width: 50%;
	min-height: 30px;
	margin: 1% 0;
	padding: 0 2%;
	border-radius: inherit;
	font-size: 1.2em;
	font-family: ministry, sans-serif;
	font-style: normal;
	font-weight: 400;
	color: #2e3192;
	text-align: left;
	cursor: pointer;
	display: flex;
	align-items: center;
}
.searchQuadro__subcategoria:hover{
	background-color: #f26522;
	color: #fff;
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
	width: 100%;
	height: 38%;
	margin: 0 auto;
	margin-bottom: 1%;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;	
	position: relative;
}
@media(max-width: 360px){
	.container{
		width: 325px;
		margin-bottom: 2%;
	}
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
	height: 100%;
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
	font-size: 1.4em;
	font-family: ministry, sans-serif;
	font-style: normal;
	font-weight: 500;
	color: white;
}
@media(max-width: 640px){
	.title{
		font-size: 1.25em;
	}
}

.caption{
	font-size: 1.2em;
	font-family: ministry, sans-serif;
	font-style: italic;
	font-weight: 300;
	color: white;
}
@media(max-width: 640px){
	.caption{
		font-size: 1.1em;
	}
}

</style>