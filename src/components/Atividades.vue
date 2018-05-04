<template>
	<div class="body">
		<header class="cabecalho">
			<div class="cabecalho__barra">
				<h1 class="cabecalho__barra--titulo">{{ filterActivity.name }}</h1>
				<button class="cabecalho__barra--close material-icons" @click="hideActivity()">close</button>
			</div>
			<img class="cabecalho__barra--imagem" :src="filterActivity.imageDesk">
		</header>
		<div class="info">
			<h2 class="info__tag info__tag--about"
				v-bind:style="{background:bgAbout, color:colorAbout}"
				@click="changeTab('sobre')"
			>
				Sobre
			</h2>
			<h2 class="info__tag info__tag--location"
				v-bind:style="{background:bgLocation, color:colorLocation}"
				@click="changeTab('local')"
			>
				Local
			</h2>
			<section class="info__aba info__aba--about"
				v-bind:style="{display:displayAbout}"
			>
				<div class="infoAba__box">
					<div class="abaBox__item abaBox__item--text">
						<p class="boxItem__paragraph" v-for="text in filterActivity.description">
							{{ text }}
						</p>
					</div>
					<div class="abaBox__item abaBox__item--socialMedia">
						<div class="abaBox__caixa" v-show="filterActivity.email">
							<img class="boxItem__icon" src="../../static/assets/email.svg">
							<p class="boxItem__link">{{ filterActivity.email }}</p>
						</div>
						<div class="abaBox__caixa" v-show="filterActivity.telefone">
							<img class="boxItem__icon" src="../../static/assets/telefone.svg">
							<p class="boxItem__link">{{ filterActivity.telefone }}</p>
						</div>
						<div class="abaBox__caixa" v-show="filterActivity.facebook">
							<img class="boxItem__icon" src="../../static/assets/facebook.svg">
							<a class="boxItem__link" :href="filterActivity.faceLink">{{ filterActivity.facebook }}</a>
						</div>
						<div class="abaBox__caixa" v-show="filterActivity.instagram">
							<img class="boxItem__icon" src="../../static/assets/instagram.svg">
							<a class="boxItem__link" :href="filterActivity.instaLink">{{ filterActivity.instagram }}</a>
						</div>
					</div>
				</div>
			</section>
			<section class="info__aba info__aba--location"
				v-bind:style="{display:displayLocation}"
			>
				<div class="infoAba__box infoAba__box--location">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14705.680773271893!2d-43.28034578841108!3d-22.860931209385143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997c7352b8f01f%3A0xdc43e9597c8e45ad!2sComplexo+do+Alem%C3%A3o%2C+Rio+de+Janeiro+-+RJ!5e0!3m2!1spt-BR!2sbr!4v1523979481426" width="100%" height="280" frameborder="0" style="border:0" allowfullscreen></iframe>
					<p class="boxItem__paragraph">Complexo do Alemão - Rio de janeiro</p>
				</div>
			</section>
		</div>
	</div>
</template>
<script>
export default{
	name: 'Atividades',
	props:{
		filterActivity:{
			type: Object
		},
		hideActivity:{
			type: Function
		}
	},
	data(){
		return{
			displayAbout:'flex',
			bgAbout:'#fff',
			colorAbout: '#2e3192',
			displayLocation:'none',
			bgLocation:'#f26522',
			colorLocation: '#fff'
		}
	},
	methods:{
		changeTab(value){
			if (value === 'local') {
				this.displayAbout = 'none'
				this.bgAbout = '#f26522'
				this.colorAbout = '#fff'
				this.displayLocation = 'flex'
				this.bgLocation = '#fff'
				this.colorLocation = '#2e3192'
			}
			else if (value === 'sobre') {
				this.displayAbout = 'flex'
				this.bgAbout = '#fff'
				this.colorAbout = '#2e3192'
				this.displayLocation = 'none'
				this.bgLocation = '#f26522'
				this.colorLocation = '#fff'
			}
		},
		
	}
}
</script>
<style scoped>
.body{
	width: 45%;
	margin: 0;
	margin-top: 3%;
}
@media(max-width: 640px){
	.body{
		width: 100%;
		margin-top: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}	
}
.cabecalho{
	width: 100%;
	height: 48vh;
	margin-bottom: 20px;
}
@media(max-width: 640px){
	.cabecalho{
		height: 51vh;
		margin-bottom: 0;
	}	
}
@media(max-width: 360px){
	.cabecalho{
		height: 33.5vh;
	}
}
.cabecalho__barra{
	width: 100%;
	height: 7vh;
	background-color: #f26522;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.cabecalho__barra--titulo{
	color: #fff;
	margin-left: 2%;
	font-size: 1.9em;
	font-family:"ministry";
	font-style:normal;
	font-weight:500;
}
@media(max-width: 360px){
	.cabecalho__barra--titulo{
		font-size: 1.25em;
	}
}
.cabecalho__barra--close{
	width: 25px;
	height: 25px;
	margin-right: 2%;
	background-color: #fff;
	border: none;
	border-radius: 50px;
	font-size: 1.7em;
	color: #f26522;
	line-height: 25px;
	display: flex;
	justify-content: center;
	align-items: center;
}
@media(max-width: 640px){
	.cabecalho__barra--close{
		width: 23px;
		height: 23px;
		font-size: 1.5em;
	}
}
.cabecalho__barra--imagem{
	width: 100%;
}
@media(max-width: 640px){
	.cabecalho__barra--imagem{
		margin-left: 10%;
		width: 80%;
	}	
}
@media(max-width: 360px){
	.cabecalho__barra--imagem{
		margin-left: 7.5%;
		width: 85%;
	}
}
.info{
	width: 100%;
	margin-top: 40px;
	position: relative;
	display: flex;
	flex-wrap: wrap;
}
@media(max-width: 640px){
	.info{
		width: 80%;
		margin-top: 15px;
	}
}
@media(max-width: 360px){
	.info{
		width: 85%;
		margin-top: 15px;
	}
}
.info__aba{
	width: 100%;
	position: absolute;
	top: 48px;
}
.info__aba--about{
	z-index: 2;
	text-align: left;
}
.info__aba--location{
	z-index: 1;
}
.info__tag{
	width: 33.5%;
	height: 48px;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	font-size: 20px;
	font-family:"ministry";
	font-style:normal;
	font-weight:400;
	display: flex;
	justify-content: center;
	align-items: center;
}
@media(max-width: 640px){
	.info__tag{
		font-size: 1.2em;
	}
}
.abaBox__item{
	width: 48%;
	min-height: 25vh;
	margin-bottom: 20px;
}
.infoAba__box{
	width: 100%;
	padding: 20px;
	border-radius: 0 20px 20px 20px;
	background-color: #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
@media(max-width: 640px){
	.infoAba__box{
		padding: 11px;
	}
}
.boxItem__paragraph{
	font-family: ministry, sans-serif;
	font-style: normal;
	font-weight: 400;
	font-size: 0.9em;
	color: #2e3192;
}
@media(max-width: 360px){
	.boxItem__paragraph{
		font-size: .86em;
	}
}
.abaBox__caixa{
	width: 100%;
	margin: 2.5% 0;
	display: flex;
	justify-content: flex-start;
	align-items: center;
}
.abaBox__item--socialMedia{
	width: 50%;
	padding-left: 3%;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: center;
}
@media(max-width: 640px){
	.abaBox__item--socialMedia{
		margin-bottom: 0;
	}
}
.boxItem__icon{
	width: 20px;
	margin-right: 8px;
	margin-bottom: 8px;
}
@media(max-width: 640px){
	.boxItem__icon{
		margin: 0;
		margin-right: 2%;
	}
}
.boxItem__link{
	width: 80%;
	font-family: ministry, sans-serif;
	font-style: normal;
	font-weight: 400;
	font-size: 1em;
	color: #2e3192;
	text-align: left;
	line-height: 20px;
	text-decoration: none;
}
@media(max-width: 360px){
	.boxItem__link{
		font-size: .87em
	}
}
.boxItem__link:hover,
.boxItem__link:active{
	color: #2e3192;
} 
@media(max-width: 950px){
	.infoAba__box{
		flex-direction: column;
	}
	.abaBox__item--text{
		width: 95%;
	}
}
@media(max-width: 640px){
	.abaBox__item{
		width: 95%;
		min-height: 10vh;
		padding: 0;
	}
	.abaBox__item--text{
		margin-bottom: 2%;
	}
}
@media(max-width: 640px){
	.abaBox__item--text{
		margin-bottom: 6%;
	}
}
.infoAba__box--location{
	min-height: 52vh;
	border-radius: 20px;
	border-top-left-radius: 0;
	flex-direction: column;
}
</style>