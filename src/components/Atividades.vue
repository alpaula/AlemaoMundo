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
				v-bind:style="{background:bgAbout}"
				@click="changeTab('sobre')"
			>
				Sobre
			</h2>
			<h2 class="info__tag info__tag--location"
				v-bind:style="{background:bgLocation}"
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
			displayLocation:'none',
			bgLocation:'#f26522'
		}
	},
	methods:{
		changeTab(value){
			if (value === 'local') {
				this.displayAbout = 'none'
				this.bgAbout = '#f26522'
				this.displayLocation = 'flex'
				this.bgLocation = '#fff'
			}
			else if (value === 'sobre') {
				this.displayAbout = 'flex'
				this.bgAbout = '#fff'
				this.displayLocation = 'none'
				this.bgLocation = '#f26522'
			}
		// this.$emit('change', true)
		},
		// hideActivity(){
		// 	this.hideActivity()
		// }
	}
}
</script>
<style scoped>
	.body{
		width: 45%;
		margin: 0;
		margin-top: 3%;
	}
	.cabecalho{
		width: 100%;
		height: 44vh;
		margin-bottom: 20px;
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
	.cabecalho__barra--imagem{
		width: 100%;
	}
	.info{
		width: 100%;
		position: relative;
		display: flex;
		flex-wrap: wrap;
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
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.info__tag--about{
		/*background-color: #FFF;*/
		color: #2e3192;
	}
	.info__tag--location{
		/*background-color: #f26522;*/
		color: #2e3192;
	}
	.abaBox__item{
		width: 50%;
		min-height: 25vh;
		margin-bottom: 20px;
	}
	.infoAba__box{
		width: 100%;
		padding: 30px;
		border-radius: 0 20px 20px 20px;
		background-color: #fff;
		display: flex;
		justify-content: space-between;
		align-items:flex-start;
	}
	.boxItem__paragraph{
		font-family: ministry, sans-serif;
		font-style: normal;
		font-weight: 400;
		font-size: 1em;
		color: #2e3192;
	}
	.abaBox__caixa{
		width: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.abaBox__item--socialMedia{
		width: 40%;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: flex-start;
		align-content: space-between;
	}
	.boxItem__icon{
		width: 30px;
		margin-right: 8px;
	} 
	.boxItem__link{
		width: 80%;
		font-family: ministry, sans-serif;
		font-style: normal;
		font-weight: 400;
		font-size: 0.9em;
		color: #2e3192;
		text-align: left;
		line-height: 20px;
		text-decoration: none;
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
		.boxItem__link{
			font-size: 1em;
		}
	}
	.infoAba__box--location{
		min-height: 52vh;
		border-radius: 20px;
		border-top-left-radius: 0;
		flex-direction: column;
	}
</style>