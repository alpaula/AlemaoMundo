<template>
	<div class="body">
		<header>
			<aside class="header__aside">
				<img class="header__logo" src="../../static/assets/alemao-para-o-mundo_logo.svg">
				<nav class="header__nav">
					<div class="headerNav__box">
						<input class="navBox__input" type="text" name="pesquisa" placeholder="o que você procura?">
						<button class="navBox__button" @click="">
							<img class="boxButton__logo" src="../../static/assets/Lupa-busca.svg">
						</button>
					</div>
					<div class="headerNav__list">
						<button class="navList__item" @click="">
							alimentação
							<img class="listItem__logo" src="../../static/assets/alimentacao.svg">
						</button>
						<button class="navList__item" @click="">
							arte e cultura
							<img class="listItem__logo" src="../../static/assets/arteEcultura.svg">
						</button>
						<button class="navList__item" @click="">
							beleza e estética
							<img class="listItem__logo" src="../../static/assets/belezaEestetica.svg">
						</button>
						<button class="navList__item" @click="">
							coletivos
							<img class="listItem__logo" src="../../static/assets/coletivos.svg">
						</button>
						<button class="navList__item" @click="">
							educação
							<img class="listItem__logo" src="../../static/assets/educacao.svg">
						</button>
						<button class="navList__item" @click="">
							esportes e atividade física
							<img class="listItem__logo" src="../../static/assets/esportes.svg">
						</button>
						<button class="navList__item" @click="">
							ong's
							<img class="listItem__logo" src="../../static/assets/ongs.svg">
						</button>
						<button class="navList__item" @click="">
							saúde
							<img class="listItem__logo" src="../../static/assets/saude.svg">
						</button>
						<button class="navList__item" @click="">
							serviços
							<img class="listItem__logo" src="../../static/assets/servicos.svg">
						</button>
						<button class="navList__item" @click="">
							transporte
							<img class="listItem__logo" src="../../static/assets/transporte.svg">
						</button>
					</div>
					<div class="headerNav__list--mobile">
						<button class="navList__item--mobile" @click="">
							<img class="listItem__logo--mobile" src="../../static/assets/alimentacao.svg">
							alimentação
						</button>
						<button class="navList__item--mobile" @click="">
							<img class="listItem__logo--mobile" src="../../static/assets/arteEcultura.svg">
							arte e cultura
						</button>
						<button class="navList__item--mobile" @click="">
							<img class="listItem__logo--mobile" src="../../static/assets/belezaEestetica.svg">
							beleza e estética
						</button>
						<button class="navList__item--mobile" @click="">
							<img class="listItem__logo--mobile" src="../../static/assets/coletivos.svg">
							coletivos
						</button>
						<button class="navList__item--mobile" @click="">
							<img class="listItem__logo--mobile" src="../../static/assets/educacao.svg">
							educação
						</button>
						<button class="navList__item--mobile" @click="">
							<img class="listItem__logo--mobile" src="../../static/assets/esportes.svg">
							esportes e atividade física
						</button>
						<button class="navList__item--mobile" @click="">
							<img class="listItem__logo--mobile" src="../../static/assets/ongs.svg">
							ong's
						</button>
						<button class="navList__item--mobile" @click="">
							<img class="listItem__logo--mobile" src="../../static/assets/saude.svg">
							saúde
						</button>
						<button class="navList__item--mobile" @click="">
							<img class="listItem__logo--mobile" src="../../static/assets/servicos.svg">
							serviços
						</button>
						<button class="navList__item--mobile" @click="">
							<img class="listItem__logo--mobile" src="../../static/assets/transporte.svg">
							transporte
						</button>
					</div>
				</nav>
			</aside>
		</header>
		<main>
			<section class="main__section">
				<h1 class="mainSection__title">Como surgiu o Alemão para o mundo?</h1>
				<p class="mainSection__paragraph">
					 O Alemão para o mundo é o resultado do projeto final dos estudantes do curso de programação e desenvolvimento web, Vai Na Web, cujo os quais em sua maioria são residentes desse conjunto de favelas.
				</p>
				<p class="mainSection__paragraph">
					Após três meses de aprendizado técnicos e praticos, eles mapaearam iniciativas sociais, culturais, empreendedoras, para mostrar a potencialidade, talentos, resistência existente no Complexo do Alemão. 
				</p>
			</section>
			<section class="main__section">
				<img class="mainSection__logo" src="../../static/assets/vai-na-web_logo.svg">
				<p class="mainSection__paragraph">
					O Vai na Web é um curso de programação e desenvolvimento web realizado dentro de organizações de base comunitária para jovens de 16 a 29 anos. Atualmente, acontece em dois polos: Complexo do Alemão (Educap) e Morro dos Prazeres (Proa), contando com 53 alunos capacitados até o momento. Dos 12 formados pela turma piloto, 4 foram contratados e já estão trabalhando na área.
				</p>
				<p class="mainSection__paragraph">
					As aulas do programa 100% financiado pela 1STi e realizado em parceria com o Instituto Precisa Ser constituem uma base pedagógica de conteúdos compatíveis com as ferramentas utilizadas pelo mercado de TI – CSS, HTML, design responsivo – e abrangem a preocupação com a formação socioemocional do aluno. Além do aprendizado técnico, o Vai na Web presenta aulas de comunicação não violenta, meditação, liderança, postura profissional e respeito à diversidade.
				</p>
				<button class="mainSection__button">fique por dentro</button>
			</section>
			<footer class="main__footer">
				<img class="mainFooter__logo mainFooter__logo1" src="../../static/assets/1sti_logo.svg">
				<img class="mainFooter__logo mainFooter__logo2" src="../../static/assets/educap_logo.svg">
				<img class="mainFooter__logo mainFooter__logo3" src="../../static/assets/precisa-ser_logo.svg">
			</footer>
		</main>
	</div>
</template>

<script>
export default{
	name: 'Home',
	data(){
		return{

		}
	}
}
</script>

<style scoped>
header{
	width: 100%;
	height: 140vh;
	background: #fcae1b url(../../static/assets/background.svg) no-repeat bottom;
	background-size: 100%;
}
@media (max-width: 640px){
	header{
		display: flex;
		justify-content: center;
	}
}
.header__aside{
	width: 31vw;
	min-width: 350px;
	height: 110vh;
	padding: 1%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
}
@media (max-width: 640px){
	.header__aside{
		width: 90%;
		align-items: center;
	}
}
.header__logo{
	width: 100%;
	margin: 3% 0;
}
.header__nav{
	width: 100%;
}
.headerNav__box{
	width: 100%;
	height: 7vh;
	border-radius: 30px;
	background-color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
}
@media (max-width: 640px){
	
}
.navBox__input{
	width: 84%;
	border: none;
	font-size: 1.2em;
	color: #2e3192;
	font-family: ministry, sans-serif;
	font-style: normal;
	font-weight: 400;
}
.navBox__button{
	width: 10%;
	height: 6vh;
	background: #fff;
	border: none;
}
.boxButton__logo{
	width: 70%;
}
@media (max-width: 640px){
	.headerNav__list{
		width: 90%;
		display: none;
	}
}
.headerNav__list--mobile{
	display: none;
}
@media (max-width: 640px){
	.headerNav__list--mobile{
		width: 100%;
		min-height: 70vh; 
		display: flex;
		justify-content: space-around;
		flex-flow: row wrap;
	}
}
.navList__item{
	width: 100%;
	height: 8vh;
	padding: 0 3%;
	border: solid 8px #fcae1b;
	border-radius: 30px;
	background-color: #f26522;
	font-size: 1em;
	color: #fff;
	font-family: ministry, sans-serif;
	font-style: normal;
	font-weight: 400;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.navList__item--mobile{
	width: 50%;
	background-color: transparent;
	border: none;
	color: #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.listItem__logo{
	height: 4vh;
}
.listItem__logo--mobile{
	height: 5vh;
}
main{
	width: 100%;
	min-height: 70vh;
	margin-top: -1%;
	padding: 2% 0 2% 2%;
	background-color: #f26522;
	display: flex;
	justify-content: space-around;
	align-items: flex-start;
	flex-wrap: wrap;
}
.main__section{
	width: 33%;
	min-width: 350px;
}
.mainSection__title{
	margin-bottom: 3%;
	font-size: 3.1vw;
	color: #2e3192;
	font-family: ministry, sans-serif;
	font-style: normal;
	font-weight: 700;
	text-align: left;
}
.mainSection__paragraph{
	margin-bottom: 3%;
	font-size: .9em;
	color: #fff;
	font-family: ministry, sans-serif;
	font-style: normal;
	font-weight: 300;
	text-align: left;
}
.mainSection__logo{
	width: 54%;
	margin-bottom: 3%;
}
.mainSection__button{
	width: 50%;
	padding: 4% 0;
	margin: 5% 0;
	background-color: #f26522;
	border: solid 5px #fff;
	border-radius: 40px;
	font-family: ministry, sans-serif;
	font-style: normal;
	font-weight: 700;
	font-size: 1.2em;
	color: #fff;
}
.main__footer{
	width: 20%;
	min-width: 250px;
	height: 75vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
}
.mainFooter__logo{
	margin: 7% 0;
}
.mainFooter__logo1{
	width: 30%;
}
.mainFooter__logo2{
	width: 55%;
}
.mainFooter__logo3{
	width: 55%;
}
</style>