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
						<button class="navList__item" @click="setCategory('Alimentação')">
							alimentação
							<div class="listItem__box">
								<img class="listItem__logo" src="../../static/assets/alimentacao.svg">
							</div>
						</button>
						<button class="navList__item" @click="setCategory('Arte e Cultura')">
							arte e cultura
							<div class="listItem__box">
								<img class="listItem__logo" src="../../static/assets/arteEcultura.svg">
							</div>
						</button>
						<button class="navList__item" @click="setCategory('Beleza e Estética')">
							beleza e estética
							<div class="listItem__box">
								<img class="listItem__logo" src="../../static/assets/belezaEestetica.svg">
							</div>
						</button>
						<button class="navList__item" @click="setCategory('Coletivos')">
							coletivos
							<div class="listItem__box">
								<img class="listItem__logo" src="../../static/assets/coletivos.svg">
							</div>
						</button>
						<button class="navList__item" @click="setCategory('Educação')">
							educação
							<div class="listItem__box">
								<img class="listItem__logo" src="../../static/assets/educacao.svg">
							</div>
						</button>
						<button class="navList__item" @click="setCategory('Esportes e Atividades Físicas')">
							esportes e atividade física
							<div class="listItem__box">
								<img class="listItem__logo" src="../../static/assets/esportes.svg">
							</div>
						</button>
						<button class="navList__item" @click="setCategory('Ong')">
							ong's
							<div class="listItem__box">
								<img class="listItem__logo" src="../../static/assets/ongs.svg">
							</div>
						</button>
						<button class="navList__item" @click="setCategory('Saúde')">
							saúde
							<div class="listItem__box">
								<img class="listItem__logo" src="../../static/assets/saude.svg">
							</div>
						</button>
						<button class="navList__item" @click="setCategory('Serviços')">
							serviços
							<div class="listItem__box">
								<img class="listItem__logo" src="../../static/assets/servicos.svg">
							</div>
						</button>
						<button class="navList__item" @click="setCategory('Transporte')">
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
import BrigadeiroLogo from '../../static/assets/Brigadeiros Literários.png'
import BrigadeiroLiterarioD from '../../static/assets/BrigadeiroLiterario - D.jpg'
import BrigadeiroLiterarioM from '../../static/assets/BrigadeiroLiterario - M.jpg'
import CarolMunizLogo from '../../static/assets/Carol Muniz.jpg'
import CarolMunizD from '../../static/assets/carolMuniz - D.jpg'
import CarolMunizM from '../../static/assets/carolMuniz - M.jpg'
import CasaBrotaLogo from '../../static/assets/Casa Brota.jpg'
import CasaPrimasLogo from '../../static/assets/Casa Das Primas.png'
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
import ContraBandoD from '../../static/assets/contraBando - D.jpg'
import ContraBandoM from '../../static/assets/contraBando - M.jpg'
import CriancasFelizesLogo from '../../static/assets/Crianças Felizes.jpg'
import CriancasFelizesD from '../../static/assets/criancasfelizes - D.jpg'
import CRJLogo from '../../static/assets/CRJ Alemão.jpg'
import CRJD from '../../static/assets/CRJ - D.jpg'
import CRJM from '../../static/assets/CRJ - M.jpg'
import DancaCiaLogo from '../../static/assets/dança-cia.jpg'
import DancaArtD from '../../static/assets/DançaArt - D.png'
import DancaArtM from '../../static/assets/DançaArt - M.png'
import DeboraAmorimD from '../../static/assets/deboraAmorim - D.jpg'
import DeboraAmorimM from '../../static/assets/deboraAmorim - M.jpg'
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
import FavelaFashionD from '../../static/assets/favelaFashion - D.jpg'
import FavelaFashionM from '../../static/assets/favelaFashion - M.jpg'
import Favelagrafia from '../../static/assets/Favelagrafia.png'
import FotoClubeLogo from '../../static/assets/Foto Clube.jpg'
import FotoClubeD from '../../static/assets/fotoclube - D.jpg'
import FotoClubeM from '../../static/assets/fotoclube - M.jpg'
import FuturoMovimento from '../../static/assets/FuturoMovimento.jpg'
import GasD from '../../static/assets/gas - D.jpg'
import GasM from '../../static/assets/gas - M.jpg'
import GatoMidiaLogo from '../../static/assets/Gato Mídia.png'
import GatoMidiaD from '../../static/assets/gatomidia - D.jpg'
import GatoMidiaM from '../../static/assets/gatomidia - M.jpg'
import JogaCriaLogo from '../../static/assets/Joga Cria.png'
import JogaCriaD from '../../static/assets/jogaecria - D.jpg'
import JogaCriaM from '../../static/assets/jogaecria - M.jpg'
import JoseanaFotoD from '../../static/assets/joseanafoto - D.jpg'
import JoseanaFotoM from '../../static/assets/joseanafoto - M.jpg'
import LMLanchesLogo from '../../static/assets/LM Lanches.jpg'
import MarcosCarolinnoLogo from '../../static/assets/marcos-carolinno.png'
import MarcosCarolinnoD from '../../static/assets/MarcosCarolino - D.jpg'
import MarcosCarolinnoM from '../../static/assets/MarcosCarolino - M.jpg'
import MotoTaxiD from '../../static/assets/mototaxi - D.jpg'
import MotoTaxiM from '../../static/assets/mototaxi - M.jpg'
import MovimentoVidaLogo from '../../static/assets/Movimento _ Vida.jpg'
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
			category:'',
			atividades:[
				{
					name:'Brigadeiros Literários',
					categoria:'Alimentação',
					subcategoria:'Doceria',
					tag:[],
					imageDesk:'',
					imageMob:'',
					facebook:'/brigadeirosliterarios',
					faceLink:'https://www.facebook.com/brigadeirosliterarios',
					instagram:'@brigadeirosliterarios',
					instaLink:'https://www.instagram.com/brigadeirosliterarios/',
					twitter:'null',
					twitLink:'null',
					site:'null',
					email:'brigadeiroslisterarios@gmail.com',
					telefone:'21 96686-2218',
					endereço:'Complexo do Alemão - Rio de janeiro',
					description:[
						'Os Brigadeiros Literários não é só um empreendimento, é um convite para uma experiência gustativa.',
						'Um veículo de divulgação da palavra escrita, uma possibilidade de comunicação, de reflexão, de carinho, trocas que estão em sintonia com o jeito de ser de quem está envolvido neste projeto.'
					],
				},
				{
					name:'Casa das Primas Doceria ',
					categoria:'Alimentação',
					subcategoria:'Doceria',
					tag:[],
					imageDesk:'',
					imageMob:'',
					facebook:'/casadasprimasdoceria',
					faceLink:'https://www.facebook.com/casadasprimasdoceria',
					instagram:'@casadasprimasdoceria',
					instaLink:'https://www.instagram.com/casadasprimasdoceria',
					twitter:'null',
					twitLink:'null',
					site:'null',
					email:'null',
					telefone:'21 97344-1959',
					endereço:'Estrada do Itararé, 341 - Loja 20 ',
					description:[
						'recente point aberto no Complexo do Alemão, onde tem como especialidades brownies, tortas, sorvetes e milk sheik." Aqui você pode se sentir o último brownie do pacote."'
					]
				},
				{
					name:'Festas',
					categoria:'Alimentação',
					subcategoria:'Festas',
					tag:[],
					imageDesk:'',
					imageMob:'',
					facebook:'docesemomentosjoana',
					faceLink:'https://www.facebook.com/docesemomentosjoana',
					instagram:'@docesemomentosjoana',
					instaLink:'https://www.instagram.com/docesemomentosjoana',
					twitter:'null',
					twitLink:'null',
					site:'null',
					email:'null',
					telefone:'21 98062-1818',
					endereço:'Rua da Assembléia - Próximo a Estação do teleférico itararé',
					description:[
						'A confeitaria Doces e Momentos, é da empreendedoa Joana, cuja qual realiza verdadeiras obras de artes em seus bolos, trabalhando há mais de um ano com doces, sonhos, planos e momentos marcantes na vida de nossos clientes.',
						'“Expresse e demonstre seus sentimentos com nossos Doces e Momentos!'
					]
				},
				{
					name:'AfroLaje ',
					categoria:'Arte e Cultura',
					subcategoria:'Dança',
					tag:[],
					imageDesk:'',
					imageMob:'',
					facebook:'afrolaje',
					faceLink:'https://www.facebook.com/afrolaje',
					instagram:'null',
					instaLink:'null',
					twitter:'null',
					twitLink:'null',
					site:'null',
					email:'null',
					telefone:'21 98403-4178',
					endereço:'Travessa São José, n°13 - Oca dos Curumins',
					description:[
						'A Associação Cultural Afrolaje  é um grupo cultural que atua fazendo a disseminação do jongo com quem tem o interesse em aprender esta cultura popular que é oriunda do Rio de Janeiro.',
						'O grupo tem sede no Engenho de dentro e faz uma grande atuação pela Zona Norte.',
						'Consolidou uma grande parceria no Centro Cultural Oca dos Curumins, promovendo a primeira roda de jongo do Complexo do Alemão.'
					]
				},
				{
					name:'Coletivo de Grafite NoixQFaz ',
					categoria:'Arte e Cultura',
					subcategoria:'Graffiti',
					tag:[],
					imageDesk:'',
					imageMob:'',
					facebook:'noixqfazcpx',
					faceLink:'https://www.facebook.com/noixqfazcpx',
					instagram:'@annyvii',
					instaLink:'https://www.instagram.com/annyvii/',
					twitter:'null',
					twitLink:'null',
					site:'null',
					email:'vivianyribeiroart@gmail.com',
					telefone:'21 99958-2597',
					endereço:'Complexo do Alemão - Rio de janeiro ',
					description:[
						'É um grupo de grafiteiros, moradores do Complexo do Alemão cujo os quais resolveram se reunir para revitalizar espaços que precisam de reparos.',
						'Batizado de "Noix Q Faz #Cpx", escolheram a quadra da comunidade do Reservatório para começar o trabalho, tendo todo material de tintas, jets, pincéis custeado pelos próprios moradores.',
						'Uma das missões do coletivo é levar ação à  lugares que estejam precisando de uma transformação e permitir que o grafite se multiplique pela favela.',
						'Realizam oficinas em ações sociais de revitalização de espaços e ambientes usando a arte do graffiti como ferramenta fundamental.',
						'Desenvolvem projetos coletivos como o Arte e Transformação para crianças a partir de 06 anos, adolescentes, jovens e, quem quiser interagir e aprender, nas oficinas, workshop de artistas convidados, e bate papo de conhecimento sobre culturas urbanas e os elementos do hip hop.'
					]
				},
				]
		}
	},
	computed:{
		filterActivity(){
			const list = this.atividades

			if (this.category) {
				console.log('test',list)
				list.filter(atividade => atividade.categoria === this.category)
				return list
			}

			return null
		}
	},
	methods:{
		setCategory(value){
			this.category = value
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
;@media (max-width: 640px){
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