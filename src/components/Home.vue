<template>
	<div class="body">
		<header>
			<aside class="header__aside">
				<img class="header__logo" src="../../Assets/alemao-para-o-mundo_logo.svg">
				<nav class="header__nav">
					<div class="headerNav__box">
						<input class="navBox__input" type="text" name="pesquisa" placeholder="o que você procura?">
						<button class="navBox__button" @click="">
							<img class="boxButton__logo" src="../../Assets/Lupa-busca.svg">
						</button>
					</div>
					<div class="headerNav__list">
						<button class="navList__item" @click="">
							alimentação
							<img class="listItem__logo" src="../../Assets/alimentacao.svg">
						</button>
						<button class="navList__item" @click="">
							arte e cultura
							<img class="listItem__logo" src="../../Assets/arteEcultura.svg">
						</button>
						<button class="navList__item" @click="">
							beleza e estética
							<img class="listItem__logo" src="../../Assets/belezaEestetica.svg">
						</button>
						<button class="navList__item" @click="">
							coletivos
							<img class="listItem__logo" src="../../Assets/coletivos.svg">
						</button>
						<button class="navList__item" @click="">
							educação
							<img class="listItem__logo" src="../../Assets/educacao.svg">
						</button>
						<button class="navList__item" @click="">
							esportes e atividade física
							<img class="listItem__logo" src="../../Assets/esportes.svg">
						</button>
						<button class="navList__item" @click="">
							ong's
							<img class="listItem__logo" src="../../Assets/ongs.svg">
						</button>
						<button class="navList__item" @click="">
							saúde
							<img class="listItem__logo" src="../../Assets/saude.svg">
						</button>
						<button class="navList__item" @click="">
							serviços
							<img class="listItem__logo" src="../../Assets/servicos.svg">
						</button>
						<button class="navList__item" @click="">
							transporte
							<img class="listItem__logo" src="../../Assets/transporte.svg">
						</button>
					</div>
				</nav>
			</aside>
		</header>
		<main>
			<section class="main__section">
				<h1 class="mainSection__title">Como surgiu o Alemão para o mundo?</h1>
				<p class="mainSection__paragraph">Mussum Ipsum, cacilds vidis litro abertis. Paisis, filhis, espiritis santis. Manduma pindureta quium dia nois paga. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.</p>
			</section>
			<section class="main__section">
				<img class="mainSection__logo" src="../../Assets/vai-na-web_logo.svg">
				<p class="mainSection__paragraph">Mussum Ipsum, cacilds vidis litro abertis. Paisis, filhis, espiritis santis. Manduma pindureta quium dia nois paga. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.</p>
				<button class="mainSection__button">fique por dentro</button>
			</section>
			<footer class="main__footer">
				<img class="mainFooter__logo" src="../../Assets/1sti_logo.svg">
				<img class="mainFooter__logo" src="../../Assets/educap_logo.svg">
				<img class="mainFooter__logo" src="../../Assets/precisa-ser_logo.svg">
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
	

img{
	width: 50px;
}
header{
	width: 100%;
	height: 140vh;
	background: url(../../Assets/background.svg) no-repeat, #fcae1b;
	background-size: cover;
}
.header__aside{
	width: 32%;
	height: 110vh;
	padding: 1%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
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
.navBox__input{
	width: 80%;
	border: none;
	font-size: 1.63em;
	color: #2e3192;
}
.navBox__button{
	width: 10%;
	height: 6vh;
	background: #fff;
	text-decoration: none;
	border: none;
}
.boxButton__logo{
	width: 80%;
}
.headerNav__list{

}
.navList__item{
	width: 100%;
	height: 8vh;
	padding: 0 3%;
	border: solid 8px #fcae1b;
	border-radius: 30px;
	background-color: #f26522;
	font-size: 1.3em;
	color: #fff;
	text-decoration: none;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.listItem__logo{
	height: 4vh;
}
main{
	width: 100%;
	height: 50vh;
	background-color: #f26522;
	margin-top: -1%;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.main__section{
	width: 30%;
}
.mainSection__title{

}
.mainSection__paragraph{

}
.mainSection__logo{

}
.mainSection__paragraph{

}
.mainSection__button{

}
.main__footer{

}
.mainFooter__logo{

}
</style>