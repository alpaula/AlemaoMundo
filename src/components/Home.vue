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
							<div class="listItem__box">
								<img class="listItem__logo" src="../../static/assets/alimentacao.svg">
							</div>
						</button>
						<button class="navList__item" @click="">
							arte e cultura
							<div class="listItem__box">
								<img class="listItem__logo" src="../../static/assets/arteEcultura.svg">
							</div>
						</button>
						<button class="navList__item" @click="">
							beleza e estética
							<div class="listItem__box">
								<img class="listItem__logo" src="../../static/assets/belezaEestetica.svg">
							</div>
						</button>
						<button class="navList__item" @click="">
							coletivos
							<div class="listItem__box">
								<img class="listItem__logo" src="../../static/assets/coletivos.svg">
							</div>
						</button>
						<button class="navList__item" @click="">
							educação
							<div class="listItem__box">
								<img class="listItem__logo" src="../../static/assets/educacao.svg">
							</div>
						</button>
						<button class="navList__item" @click="">
							esportes e atividade física
							<div class="listItem__box">
								<img class="listItem__logo" src="../../static/assets/esportes.svg">
							</div>
						</button>
						<button class="navList__item" @click="">
							ong's
							<div class="listItem__box">
								<img class="listItem__logo" src="../../static/assets/ongs.svg">
							</div>
						</button>
						<button class="navList__item" @click="">
							saúde
							<div class="listItem__box">
								<img class="listItem__logo" src="../../static/assets/saude.svg">
							</div>
						</button>
						<button class="navList__item" @click="">
							serviços
							<div class="listItem__box">
								<img class="listItem__logo" src="../../static/assets/servicos.svg">
							</div>
						</button>
						<button class="navList__item" @click="">
							transporte
							<div class="listItem__box">
								<img class="listItem__logo" src="../../static/assets/transporte.svg">
							</div>
						</button>
					</div>
					<div class="headerNav__list--mobile">
						<button class="navList__item--mobile" @click="">
							<div class="listItem__box">
								<img class="listItem__logo--mobile" src="../../static/assets/alimentacao.svg">
							</div>
							alimentação
						</button>
						<button class="navList__item--mobile" @click="">
							<div class="listItem__box">
								<img class="listItem__logo--mobile" src="../../static/assets/arteEcultura.svg">
							</div>
							arte e cultura
						</button>
						<button class="navList__item--mobile" @click="">
							<div class="listItem__box">
								<img class="listItem__logo--mobile" src="../../static/assets/belezaEestetica.svg">
							</div>
							beleza e estética
						</button>
						<button class="navList__item--mobile" @click="">
							<div class="listItem__box">
								<img class="listItem__logo--mobile" src="../../static/assets/coletivos.svg">
							</div>
							coletivos
						</button>
						<button class="navList__item--mobile" @click="">
							<div class="listItem__box">
								<img class="listItem__logo--mobile" src="../../static/assets/educacao.svg">
							</div>
							educação
						</button>
						<button class="navList__item--mobile" @click="">
							<div class="listItem__box">
								<img class="listItem__logo--mobile" src="../../static/assets/esportes.svg">
							</div>
							esportes e atividade
						</button>
						<button class="navList__item--mobile" @click="">
							<div class="listItem__box">
								<img class="listItem__logo--mobile" src="../../static/assets/ongs.svg">
							</div>
							ong's
						</button>
						<button class="navList__item--mobile" @click="">
							<div class="listItem__box">
								<img class="listItem__logo--mobile" src="../../static/assets/saude.svg">
							</div>
							saúde
						</button>
						<button class="navList__item--mobile" @click="">
							<div class="listItem__box">
								<img class="listItem__logo--mobile" src="../../static/assets/servicos.svg">
							</div>
							serviços
						</button>
						<button class="navList__item--mobile" @click="">
							<div class="listItem__box">
								<img class="listItem__logo--mobile" src="../../static/assets/transporte.svg">
							</div>
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
				<div class="main__section--box">
					<img class="mainSection__logo" src="../../static/assets/vai-na-web_logo.svg">
					<button class="mainSection__button--mobile">fique por dentro</button>
				</div>
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
import AbaeteLogo from '../../static/assets/Abaeté.jpg'
import AbaeteD from '../../static/assets/Abaete - D.jpg'
import AbaeteM from '../../static/assets/Abaete - M.jpg'
import AbracoCampeaoLogo from '../../static/assets/Abraço Campeão.jpg'
import AbracoCampeaoD from '../../static/assets/abracocampeao - D.jpg'
import AbracoCampeaoM from '../../static/assets/abracocampeao - M.jpg'
import AfroLajeLogo from '../../static/assets/AfroLaje.jpg'
import AfroLajeD from '../../static/assets/afrolaje - D.jpg'
import AfroLajeM from '../../static/assets/afrolaje - M.jpg'
import AlexandreSilvaD from '../../static/assets/AlexandreSilva - D.jpg'
import AlexandreSilvaM from '../../static/assets/AlexandreSilva - M.jpg'
import PelaMisericordia from '../../static/assets/Aliança Pela Misericórdia.jpg'
import AnaMoura from '../../static/assets/Ana Moura.jpg'
import BrigadeiroLogo from '../../static/assets/Brigadeiros Literários.jpg'
import BrigadeiroLiterarioD from '../../static/assets/BrigadeiroLiterario - D.jpg'
import BrigadeiroLiterarioM from '../../static/assets/BrigadeiroLiterario - M.jpg'
import CarolMunizLogo from '../../static/assets/Carol Muniz.jpg'
import CarolMunizD from '../../static/assets/carolMuniz - D.jpg'
import CarolMunizM from '../../static/assets/carolMuniz - M.jpg'
import CasaBrotaLogo from '../../static/assets/Casa Brota.jpg'
import CasaPrimasLogo from '../../static/assets/Casa Das Primas.jpg'
import CasaPrimasD from '../../static/assets/casadasPrimas - D.jpg'
import CasaPrimasM from '../../static/assets/casadasPrimas - M.jpg'
import CineCariocaD from '../../static/assets/cinecarioca - D.jpg'
import CineCariocaM from '../../static/assets/cinecarioca - M.jpg'
import ClasseDLogo from '../../static/assets/ClasseD.jpg'
import ClasseDD from '../../static/assets/classe - D.jpg'
import ClasseDM from '../../static/assets/classe - M.jpg'
import ClubeLutasD from '../../static/assets/clubedelutas - D.jpg'
import ClubeLutasM from '../../static/assets/clubedelutas - M.jpg'
import ContraBandoLogo from '../../static/assets/Contra Bando Logo.jpg'
import ContraBandoD from '../../static/assets/contrabando - D.jpg'
import ContraBandoM from '../../static/assets/contrabando - M.jpg'
import CriancasFelizesLogo from '../../static/assets/Crianças Felizes.jpg'
import CriancasFelizesD from '../../static/assets/criancasfelizes - D.jpg'
import CRJLogo from '../../static/assets/CRJ Alemão.jpg'
import CRJD from '../../static/assets/CRJ - D.jpg'
import CRJM from '../../static/assets/CRJ - M.jpg'
import DancaCiaLogo from '../../static/assets/dança-cia.jpg'
import DancaArtD from '../../static/assets/DancaArt - D.jpg'
import DancaArtM from '../../static/assets/DancaArt - M.jpg'
import DeboraAmorimD from '../../static/assets/deboraAmorim - D.jpg'
import DeboraAmorimM from '../../static/assets/DeboraAmorim - M.jpg'
import DescolandoIdeias from '../../static/assets/Descolando Ideias.jpg'
import DocesMomentosLogo from '../../static/assets/Doces e Momentos.jpg'
import DocesMomentosD from '../../static/assets/docesMomentos - D.jpg'
import DocesMomentosM from '../../static/assets/docesMomentos - M.jpg'
import DocesTravessuras from '../../static/assets/Doces e Travessuras.jpg'
import EducapLogo from '../../static/assets/EDUCAP.jpg'
import EducapD from '../../static/assets/EDUCAP - D.jpg'
import EducapM from '../../static/assets/EDUCAP - M.jpg'
import EmergenciaLogo from '../../static/assets/Emergência Social.jpg'
import EricaMartinD from '../../static/assets/ericaMartin - D.jpg'
import EricaMartinM from '../../static/assets/ericaMartin - M.jpg'
import FamiliaPerninhaD from '../../static/assets/familiaPerninha - D.jpg'
import FamiliaPerninhaM from '../../static/assets/familiaPerninha - M.jpg'
import FavelaFashionLogo from '../../static/assets/Favela Fashion.jpg'
import FavelaFashionD from '../../static/assets/favelaFeshion - D.jpg'
import FavelaFashionM from '../../static/assets/favelaFeshion - M.jpg'
import Favelagrafia from '../../static/assets/Favelagrafia.jpg'
import FotoClubeLogo from '../../static/assets/Foto Clube.jpg'
import FotoClubeD from '../../static/assets/fotoclube - D.jpg'
import FotoClubeM from '../../static/assets/fotoclube - M.jpg'
import FuturoMovimento from '../../static/assets/FuturoMovimento.jpg'
import GasD from '../../static/assets/gas - D.jpg'
import GasM from '../../static/assets/gas - M.jpg'
import GatoMidiaLogo from '../../static/assets/Gato Midia.png'
import GatoMidiaD from '../../static/assets/gatomidia - D.jpg'
import GatoMidiaM from '../../static/assets/gatomidia - M.jpg'
import JogaCriaLogo from '../../static/assets/Joga Cria.png'
import JogaCriaD from '../../static/assets/jogaecria - D.jpg'
import JogaCriaM from '../../static/assets/jogaecria - M.jpg'
import JoseanaFotoD from '../../static/assets/joseanafoto - D.jpg'
import JoseanaFotoM from '../../static/assets/joseanafoto - M.jpg'
import LMLanchesLogo from '../../static/assets/LM Lanches.jpg'
import MarcosCarolinnoLogo from '../../static/assets/marcos-carolinno.png'
import MarcosCarolinnoD from '../../static/assets/MarcosCarolinno - D.jpg'
import MarcosCarolinnoM from '../../static/assets/MarcosCarolinno - M.jpg'
import MotoTaxiD from '../../static/assets/mototaxi - D.jpg'
import MotoTaxiM from '../../static/assets/mototaxi - M.jpg'
import MovimentoVidaLogo from '../../static/assets/Movimento_Vida.jpg'
import NaveConhecimentoLogo from '../../static/assets/NaveConhecimento.png'
import NaveConhecimentoD from '../../static/assets/navedoconhecimento - D.jpg'
import NaveConhecimentoM from '../../static/assets/navedoconhecimento - M.jpg'
import NoixFazLogo from '../../static/assets/Noixfaz.jpg'
import NoixFazD from '../../static/assets/noixqfaz - D.jpg'
import NoixFazM from '../../static/assets/noixqfaz - M.jpg'
import NovosLideresLogo from '../../static/assets/Novos Líderes.jpg'
import NovosLideresD from '../../static/assets/novosLideres - D.jpg'
import NovosLideresM from '../../static/assets/novosLideres - M.jpg'
import OcaCuruminsLogo from '../../static/assets/OcaCurumins.jpg'
import OcaCuruminsD from '../../static/assets/ocacurumins - D.jpg'
import OcaCuruminsM from '../../static/assets/ocacurumins - M.jpg'
import PoetasFaveladosLogo from '../../static/assets/Poetas Favelados.jpg'
import RaizesMovimentoLogo from '../../static/assets/RaízesMovimento.png'
import RaizesMovimentoD from '../../static/assets/raizesmovimento - D.jpg'
import RaizesMovimentoM from '../../static/assets/raizesmovimento - M.jpg'
import RecreacaoInfantilD from '../../static/assets/recreacaoinfantil - D.jpg'
import RecreacaoInfantilM from '../../static/assets/recreacaoinfantil - M.png'
import SambaFavelaLogo from '../../static/assets/Samba Favela.jpg'
import SambaFavelaD from '../../static/assets/sambafavela - D.jpg'
import SambaFavelaM from '../../static/assets/sambafavela - M.jpg'
import SlamLajeD from '../../static/assets/slamLaje - D.jpg'
import SlamLajeM from '../../static/assets/slamlaje - M.jpg'
import TocaLoboLogo from '../../static/assets/Toca do Lobo.jpg'
import TocaLoboD from '../../static/assets/tocadolobo - D.jpg'
import TocaLoboM from '../../static/assets/tocadolobo - M.jpg'
import Vidancar from '../../static/assets/Vidançar.jpg'
import VidancarD from '../../static/assets/vidancar - D.jpg'
import VidancarM from '../../static/assets/vidancar - M.jpg'

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
		min-height: 165vh;
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
	height: 8vh;
	border-radius: 30px;
	background-color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
}
@media (max-width: 640px){
	.headerNav__box{
		height: 9vh;
	}
}
.navBox__input{
	width: 84%;
	height: 6vh;
	border: none;
	font-size: 1.2em;
	color: #2e3192;
	font-family: ministry, sans-serif;
	font-style: normal;
	font-weight: 400;
}
.navBox__button{
	width: 10%;
	height: 7vh;
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
		margin: 2% 0;
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
	color: #fff;
	font-size: 1em;
	font-family: ministry, sans-serif;
	font-style: normal;
	font-weight: 400;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.navList__item--mobile{
	width: 35%;
	background-color: transparent;
	border: none;
	color: #fff;
	font-size: 1em;
	font-family: ministry, sans-serif;
	font-style: normal;
	font-weight: 400;
	text-align: right;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.listItem__box{
	width: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.listItem__logo{
	height: 4vh;
}
.listItem__logo--mobile{
	height: 6vh;
}
main{
	width: 100%;
	min-height: 70vh;
	margin-top: -1%;
	padding: 2% 0 6% 2%;
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
@media(max-width: 640px){
	.main__section{
		width: 90%;
		margin: 5% 0;
	}
}
.mainSection__title{
	margin-bottom: 3%;
	color: #2e3192;
	font-size: 2.63em;
	font-family: ministry, sans-serif;
	font-style: normal;
	font-weight: 700;
	text-align: left;
	text-transform: uppercase;
}
@media(max-width: 640px){
	.mainSection__title{
		font-size: 1.6em;
	}
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
@media(max-width: 640px){
	.mainSection__paragraph{
		font-size: 1em;
	}
}
.main__section--box{
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.mainSection__logo{
	width: 54%;
	margin-bottom: 3%;
}
@media(max-width: 640px){
	.mainSection__logo{
		width: 41%;
	}
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
@media(max-width: 640px){
	.mainSection__button{
		display: none;
	}
}
.mainSection__button--mobile{
	width: 45%;
	padding: 3% 0;
	margin: 5% 0;
	background-color: #f26522;
	border: solid 5px #fff;
	border-radius: 40px;
	font-family: ministry, sans-serif;
	font-style: normal;
	font-weight: 700;
	font-size: 1.3em;
	color: #fff;
	display: none;
}
@media(max-width: 640px){
	.mainSection__button--mobile{
		display: block;
	}
}
.main__footer{
	width: 20%;
	min-width: 250px;
	height: 90vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
}
@media(max-width: 640px){
	.main__footer{
		width: 100%;
		height: 35vh;
		flex-direction: row;
		justify-content: center;
	}
}
.mainFooter__logo{
	width: 55%;
	margin-top: 40%;
}
@media(max-width: 640px){
	.mainFooter__logo{
		width: 25%;
		margin: 3%;
	}
}
.mainFooter__logo1{
	width: 30%;
}
@media(max-width: 640px){
	.mainFooter__logo1{
		width: 12%;
	}
}
</style>