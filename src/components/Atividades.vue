<template>
	<div class="body">
		<header class="cabecalho">
	<div class="cabecalho__barra">
	<h1 class="cabecalho__barra--titulo">Casa Brota</h1>
	</div>
	<img class="cabecalho__barra--imagem" src="assets/casabrota.png">
</header>

<div class="info">
		<h2 class="infoAba__tag infoAba__tag--about">Sobre</h2>
		<h2 class="infoAba__tag infoAba__tag--location">Local</h2>
	<section class="info__aba info__aba--about">
		<div class="infoAba__box">
			<div class="abaBox__item abaBox__item--text">
				<p class="boxItem__paragraph">
					Coworking de Favela, um espaço de conexão
					com foco na promoção cultural da favela e no
					desenvolvimento econômico das micro empresas.
					 Empreender a partir das criações e subjetividade
					de cada indivíduo, visando expandir e fortalecer as
					redes destes espaços populares para além da
					favela.
				</p>
				<p class="boxItem__paragraph">
					Prestação de serviços: Assessoria de imprensa,
					consultoria para empreendimentos da favela,
					redes, audiovisual, artes e tecnologia.
				</p>
			</div>
			<div class="abaBox__item abaBox__item--socialMedia">
					<img class="boxItem__icon" src="assets/email.svg">
					<p class="boxItem__link">falecom@casabrota.com.br</p>

					<img class="boxItem__icon" src="assets/telefone.svg">
					<p class="boxItem__link">(21) 97264-7819</p>
				
					<img class="boxItem__icon" src="assets/facebook.svg">
					<a class="boxItem__link" href="https://www.facebook.com/casabrota">/comcasabrota</a>
				
					<img class="boxItem__icon" src="assets/instagram.svg">
					<a class="boxItem__link" href="https://www.instagram.com/casabrota/">@casabrota</a>
			</div>
		</div>
	</section>
	<section class="info__aba info__aba--location">
		<div class="infoAba__box infoAba__box--location">
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14705.680773271893!2d-43.28034578841108!3d-22.860931209385143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997c7352b8f01f%3A0xdc43e9597c8e45ad!2sComplexo+do+Alem%C3%A3o%2C+Rio+de+Janeiro+-+RJ!5e0!3m2!1spt-BR!2sbr!4v1523979481426" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
			<p class="boxItem__paragraph">Complexo do Alemão - Rio de janeiro</p>
		</div>
	</section>
	</div>
</div>
	</div>
</template>
<script>
export default{
	name: 'Atividades'
}
</script>
<style scoped>
	.body{
		width: 60%;
		margin: 0 auto;
		background-color: #fcae1b;
	}
	.cabecalho{
		width: 100%;
		margin-bottom: 24px;

	}
	.cabecalho__barra{
		width: 100%;
		height: 10vh;
		background-color: #f26522;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.cabecalho__barra--titulo{
		color: #fff;

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
	}
	.info__aba--location{
		z-index: 1;
	}
	.infoAba__tag,
	.boxItem__paragraph,
	.boxItem__link{
		font-family: Ministry-Medium;
		font-size: 1.13em;
		color: #2e3192;
		text-align: left;
	}
	.infoAba__tag{
		width: 33.5%;
		height: 48px;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.infoAba__tag--about{
		background-color: #FFF;
	}
	.infoAba__tag--location{
		background-color: #f26522;
	}
	.infoAba__box{
		width: 100%;
		padding: 44px;
		border-radius: 0 20px 20px 20px;
		background-color: #fff;

		display: flex;
		justify-content: space-between;
		align-items:flex-start;
	}
	.abaBox__item{
		width: 50%;
		min-height: 35vh;

	}
	.abaBox__item--text{
		/*width: 40%;*/
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
		font-size: 1.4vw;
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
		border-radius: 20px;
	}
	.infoAba__box--location{
		flex-direction: column;
	}
</style>