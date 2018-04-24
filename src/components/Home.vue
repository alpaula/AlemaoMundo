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
					<div class="headerNav__list--mobile" v-show="transition = true">
						<button class="navList__item--mobile" @click="setCategory('Alimentação'), transition=false">
							<div class="listItem__box">
								<img class="listItem__logo--mobile" src="../../static/assets/alimentacao.svg">
							</div>
							alimentação
						</button>
						<button class="navList__item--mobile" @click="setCategory('Arte e Cultura')">
							<div class="listItem__box">
								<img class="listItem__logo--mobile" src="../../static/assets/arteEcultura.svg">
							</div>
							arte e cultura
						</button>
						<button class="navList__item--mobile" @click="setCategory('Beleza e Estética')">
							<div class="listItem__box">
								<img class="listItem__logo--mobile" src="../../static/assets/belezaEestetica.svg">
							</div>
							beleza e estética
						</button>
						<button class="navList__item--mobile" @click="setCategory('Coletivos')">
							<div class="listItem__box">
								<img class="listItem__logo--mobile" src="../../static/assets/coletivos.svg">
							</div>
							coletivos
						</button>
						<button class="navList__item--mobile" @click="setCategory('Educação')">
							<div class="listItem__box">
								<img class="listItem__logo--mobile" src="../../static/assets/educacao.svg">
							</div>
							educação
						</button>
						<button class="navList__item--mobile" @click="setCategory('Esportes e Atividades Físicas')">
							<div class="listItem__box">
								<img class="listItem__logo--mobile" src="../../static/assets/esportes.svg">
							</div>
							esportes e atividade
						</button>
						<button class="navList__item--mobile" @click="setCategory('Ong')">
							<div class="listItem__box">
								<img class="listItem__logo--mobile" src="../../static/assets/ongs.svg">
							</div>
							ong's
						</button>
						<button class="navList__item--mobile" @click="setCategory('Saúde')">
							<div class="listItem__box">
								<img class="listItem__logo--mobile" src="../../static/assets/saude.svg">
							</div>
							saúde
						</button>
						<button class="navList__item--mobile" @click="setCategory('Serviços')">
							<div class="listItem__box">
								<img class="listItem__logo--mobile" src="../../static/assets/servicos.svg">
							</div>
							serviços
						</button>
						<button class="navList__item--mobile" @click="setCategory('Transporte')">
							<div class="listItem__box">
								<img class="listItem__logo--mobile" src="../../static/assets/transporte.svg">
							</div>
							transporte
						</button>
					</div>
				</nav>
			</aside>
			<ListaAtividades
				:filterActivity="filterActivity"
				v-show="transition = false"
			>
			</ListaAtividades>
<!-- 			<Atividades></Atividades>
 -->		</header>
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
import AbaeteD from '../../static/assets/Abaete - D.jpg'
import AbaeteM from '../../static/assets/Abaete - M.jpg'
import AbracoCampeaoD from '../../static/assets/abracocampeao - D.jpg'
import AbracoCampeaoM from '../../static/assets/abracocampeao - M.jpg'
import AfroLajeD from '../../static/assets/afrolaje - D.jpg'
import AfroLajeM from '../../static/assets/afrolaje - M.jpg'
import AlexandreSilvaD from '../../static/assets/AlexandreSilva - D.jpg'
import AlexandreSilvaM from '../../static/assets/AlexandreSilva - M.jpg'
import PelaMisericordia from '../../static/assets/Aliança Pela Misericórdia.jpg'
import AnaMoura from '../../static/assets/Ana Moura.jpg'
import BrigadeiroLiterarioD from '../../static/assets/BrigadeiroLiterario - D.jpg'
import BrigadeiroLiterarioM from '../../static/assets/BrigadeiroLiterario - M.jpg'
import CarolMunizLogo from '../../static/assets/Carol Muniz.jpg'
import CasaBrotaLogo from '../../static/assets/casabrota.png'
import CasaPrimasD from '../../static/assets/casadasPrimas - D.jpg'
import CasaPrimasM from '../../static/assets/casadasPrimas - M.jpg'
import CineCariocaD from '../../static/assets/cinecarioca - D.jpg'
import CineCariocaM from '../../static/assets/cinecarioca - M.jpg'
import ClasseDD from '../../static/assets/classe - D.jpg'
import ClasseDM from '../../static/assets/classe - M.jpg'
import ClubeLutasD from '../../static/assets/clubedelutas - D.jpg'
import ClubeLutasM from '../../static/assets/clubedelutas - M.jpg'
import ContraBandoD from '../../static/assets/contraBando - D.jpg'
import ContraBandoM from '../../static/assets/contraBando - M.jpg'
import CriancasFelizesD from '../../static/assets/criancasfelizes - D.jpg'
import CriancasFelizesM from '../../static/assets/criancasfelizes - M.jpg'
import CRJLogo from '../../static/assets/CRJ Alemão.jpg'
import CRJD from '../../static/assets/CRJ - D.jpg'
import CRJM from '../../static/assets/CRJ - M.jpg'
import DancaCiaLogo from '../../static/assets/dança-cia.jpg'
import DancaArtD from '../../static/assets/DançaArt - D.png'
import DancaArtM from '../../static/assets/DançaArt - M.png'
import DeboraAmorimD from '../../static/assets/deboraAmorim - D.jpg'
import DeboraAmorimM from '../../static/assets/deboraAmorim - M.jpg'
import DescolandoIdeias from '../../static/assets/Descolando Ideias.jpg'
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
import FavelaFashionD from '../../static/assets/favelaFashion - D.jpg'
import FavelaFashionM from '../../static/assets/favelaFashion - M.jpg'
import Favelagrafia from '../../static/assets/Favelagrafia.png'
import FotoClubeD from '../../static/assets/fotoclube - D.jpg'
import FotoClubeM from '../../static/assets/fotoclube - M.jpg'
import FuturoMovimento from '../../static/assets/FuturoMovimento.jpg'
import GasD from '../../static/assets/gas - D.jpg'
import GasM from '../../static/assets/gas - M.jpg'
import GatoMidiaD from '../../static/assets/gatomidia - D.jpg'
import GatoMidiaM from '../../static/assets/gatomidia - M.jpg'
import JogaCriaD from '../../static/assets/jogaecria - D.jpg'
import JogaCriaM from '../../static/assets/jogaecria - M.jpg'
import JoseanaFotoD from '../../static/assets/joseanafoto - D.jpg'
import JoseanaFotoM from '../../static/assets/joseanafoto - M.jpg'
import LMLanchesLogo from '../../static/assets/LM Lanches.jpg'
import MarcosCarolinnoLogo from '../../static/assets/marcos-carolinno.png'
import MarcosCarolinnoD from '../../static/assets/MarcosCarolino - D.jpg'
import MarcosCarolinnoM from '../../static/assets/MarcosCarolino - M.jpg'
import MovimentoVidaLogo from '../../static/assets/Movimento _ Vida.jpg'
import NaveConhecimentoD from '../../static/assets/navedoconhecimento - D.jpg'
import NaveConhecimentoM from '../../static/assets/navedoconhecimento - M.jpg'
import NoixFazD from '../../static/assets/noixqfaz - D.jpg'
import NoixFazM from '../../static/assets/noixqfaz - M.jpg'
import NovosLideresD from '../../static/assets/novosLideres - D.jpg'
import NovosLideresM from '../../static/assets/novosLideres - M.jpg'
import OcaCuruminsD from '../../static/assets/ocacurumins - D.jpg'
import OcaCuruminsM from '../../static/assets/ocacurumins - M.jpg'
import PoetasFaveladosLogo from '../../static/assets/Poetas Favelados.jpg'
import RaizesMovimentoD from '../../static/assets/raizesmovimento - D.jpg'
import RaizesMovimentoM from '../../static/assets/raizesmovimento - M.jpg'
import RecreacaoInfantilD from '../../static/assets/recreacaoinfantil - D.jpg'
import RecreacaoInfantilM from '../../static/assets/recreacaoinfantil - M.png'
import SambaFavelaD from '../../static/assets/sambafavela - D.jpg'
import SambaFavelaM from '../../static/assets/sambafavela - M.jpg'
import SlamLajeD from '../../static/assets/slamLaje - D.jpg'
import SlamLajeM from '../../static/assets/slamlaje - M.jpg'
import ThiaguinhoD from '../../static/assets/thiaguinho - D.jpg'
import ThiaguinhoM from '../../static/assets/thiaguinho - M.jpg'
import TocaLoboD from '../../static/assets/tocadolobo - D.jpg'
import TocaLoboM from '../../static/assets/tocadolobo - M.jpg'
import VidancarD from '../../static/assets/vidancar - D.jpg'
import VidancarM from '../../static/assets/vidancar - M.jpg'

import Atividades from './Atividades.vue'
import ListaAtividades from './ListaAtividades.vue'

export default{
	name: 'Home',
	data(){
		return{
			category:'',
			transition:true,
			atividades:[
				{
					name:'Brigadeiros Literários',
					categoria:'Alimentação',
					subcategoria:'Doceria',
					tag:[],
					imageDesk:'../../static/assets/BrigadeiroLiterario - D.jpg',
					imageMob:'../../static/assets/BrigadeiroLiterario - M.jpg',
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
					imageDesk:'../../static/assets/casadasPrimas - D.jpg',
					imageMob:'../../static/assets/casadasPrimas - M.jpg',
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
					imageDesk:'../../static/assets/docesMomentos - D.jpg',
					imageMob:'../../static/assets/docesMomentos - M.jpg',
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
					imageDesk:'../../static/assets/afrolaje - D.jpg',
					imageMob:'../../static/assets/afrolaje - M.jpg',
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
					imageDesk:'../../static/assets/noixqfaz - D.jpg',
					imageMob:'../../static/assets/noixqfaz - M.jpg',
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
				{
					name:'Contra Bando de Teatro ',
					categoria:'Arte e Cultura',
					subcategoria:'Teatro',
					tag:[],
					imageDesk:'../../static/assets/contraBando - D.jpg',
					imageMob:'../../static/assets/contraBando - M.jpg',
					facebook:'/ContraBandodeTeatro',
					faceLink:'https://www.facebook.com/Contra-Bando-de-Teatro-1438195543130396',
					instagram:'@contrabandodeteatro',
					instaLink:'https://www.instagram.com/contrabandodeteatro/',
					twitter:'null',
					twitLink:'null',
					site:'http://contra-bando.wixsite.com/',
					email:'contrabandodeteatro@gmail.com',
					telefone:'21 99265-1517',
					endereço:'Complexo do Alemão - Rio de janeiro ',
					description:[
						'O Contra Bando de teatro é um grupo formado em 2013 por jovens moradores com alma artística do Complexo do Alemão.',
						'Com sua arte amplia olhares e o mais importante, faz o público refletir sobre diversos assuntos.',
						'Gera questionamento sobre como vivemos e até que ponto as coisas são justas.'
					]
				},
				{
					name:'CRJ - Alemão ',
					categoria:'Arte e Cultura',
					subcategoria:'Educação',
					tag:[],
					imageDesk:'../../static/assets/CRJ - D.jpg',
					imageMob:'../../static/assets/CRJ - M.jpg',
					facebook:'crj.alemao.50',
					faceLink:'https://www.facebook.com/crj.alemao.50',
					instagram:'@crjalemao',
					instaLink:'https://www.instagram.com/crjalemao/',
					twitter:'null',
					twitLink:'null',
					site:'null',
					email:'alemaocrj@gmail.com',
					telefone:'21 2334-7971',
					endereço:'Estrada do Itararé, 690 - Complexo do Alemão',
					description:[
						'O Centro de Referência para Juventude oferece cursos e atividades GRATUITAS.',
						'Além disso, disponibiliza seus espaços para que projetos e pessoas que não tenha um local para estudar, ensaiar ou acessar a internet utilize-o totalmente em seu horário de funcionamento.',
						'Está aberto de segunda a sexta 09h às 21h e aos sábados de 09h às 13h.'
					]
				},
				{
					name:'Futuro em Movimento ',
					categoria:'Arte e Cultura',
					subcategoria:'Dança',
					tag:[],
					imageDesk:'',
					imageMob:'',
					facebook:'FuturoemMovimento',
					faceLink:'https://www.facebook.com/groups/1740561566261151/about/',
					instagram:'null',
					instaLink:'null',
					twitter:'null',
					twitLink:'null',
					site:'null',
					email:'amamulheresdeatitude@gmailcom',
					telefone:'21 98811-0220',
					endereço:'Rua Sebastião de Carvalho, 33',
					description:[
						'Preocupados com o alto índice de adolescentes grávidas, surgiu a iniciativa de oferecer oficinas de dança para ajudar mais os jovens em situação de vulnerabilidade social.',
						'Além das aulas, também realizam debates com temas sobre: Drogas, violência. Oficinas de artesanatos foi uma maneira encontrada de tornar uma das das suas fonte renda.'
					]
				},
				{
					name:'Projeto Crianças Felizes ',
					categoria:'Arte e Cultura',
					subcategoria:'Eventos',
					tag:[],
					imageDesk:'../../static/assets/criancasfelizes - D.jpg',
					imageMob:'../../static/assets/criancasfelizes - M.jpg',
					facebook:'/Projetocriancasfelizes',
					faceLink:'https://www.facebook.com/Projetocriancasfelizes/',
					instagram:'null',
					instaLink:'null',
					twitter:'null',
					twitLink:'null',
					site:'null',
					email:'lucianoodaniell@gmail.com',
					telefone:'21 99714-3427',
					endereço:'Avenida Central, n° 120',
					description:[
						'Fundada no dia 4 de Maio de 2013 pelo jovem Luciano Daniel que na época tinha 13 anos de idade, o projeto conta com a participação de 15 voluntários para ajudar na arrecadação e na distribuição nos dias de evento.',
						'Nesses 4 anos de existência, utiliza as redes sociais como uma de suas melhores ferramentas de trabalho para a arrecadação das doações, e já são mais de 20 ações que beneficiaram mais de 7 mil crianças, inclusive em 2015 o Projeto expandiu suas festas para o bairro de Santa Cruz, Zona Oeste do Rio.',
						'O Projeto Crianças Felizes foi selecionado para participar do reality show de mobilização social "Click Esperança" da TV Globo, sendo ele finalista e vencedor do reality.',
						'Seu público alvo são as crianças, porém, evolvem toda a comunidade para que juntos possam sonhar com um futuro melhor.'
					]
				},
				{
					name:'Projeto Samba Favela',
					categoria:'Arte e Cultura',
					subcategoria:'Eventos',
					tag:[],
					imageDesk:'../../static/assets/sambafavela - D.jpg',
					imageMob:'../../static/assets/sambafavela - M.jpg',
					facebook:'/projetosambafavela',
					faceLink:'https://www.facebook.com/projetosambafavela',
					instagram:'@projetosambafavela',
					instaLink:'https://www.instagram.com/projetosambafavela/',
					twitter:'null',
					twitLink:'null',
					site:'null',
					email:'lipebth@gmail.com',
					telefone:'21 98750-0896',
					endereço:'Espaço Cultural Maria Madalena (Madá) - Estrada do Iatararé, 320 - Ramos ',
					description:[
						'O Projeto Samba Favela teve início quando integrantes e amigos do antigo Grupo Brincadeira Tem Hora (BTH) se reencontraram pela internet e decidiram se reunir novamente para relembrar os velhos e bons tempos na música.',
						'O (BTH)  foi fundado nos anos 90 e teve várias formações ao longo do tempo e hoje visa trazer para o Alemão a conexão entre o morro e o asfalto através do gênero musical e patrimônio cultural da cidade do Rio de Janeiro.',
						'O evento tem entrada gratuita e promove a campanha de doações de alimentos não perecíveis para serem destinado à moradores da comunidade.'
					]
				},
				{
					name:'Projeto Vidançar ',
					categoria:'Arte e Cultura',
					subcategoria:'Dança',
					tag:[],
					imageDesk:'../../static/assets/vidancar - D.jpg',
					imageMob:'../../static/assets/vidancar - M.jpg',
					facebook:'/projetovidancar',
					faceLink:'https://www.facebook.com/projetovidancar/',
					instagram:'null',
					instaLink:'null',
					twitter:'null',
					twitLink:'null',
					site:'http://projetovidancar.com.br/',
					email:'projetovidacar@gmail.com',
					telefone:'21 98739-4551',
					endereço:'CRJ Alemão - Estrada do Itararé, n°690 ',
					description:[
						'Atuam com aulas de dança, teatro, apoio escolar e atendimento jurídico às famílias.',
						'O projeto iniciou as atividades no ano de 2009 com 14 crianças.',
						'Atualmente são 145 assistidos diretamente e 300 assistidos indiretamente.',
						'O Vidançar conseguiu inserir 2 alunos no balé Bolshoi e 4 no Theatro Municipal.',
						'Além da aprovação de todos os alunos durante 3 anos consecutivos.'
					]
				},
				{
					name:'Slam Laje',
					categoria:'Arte e Cultura',
					subcategoria:'Eventos',
					tag:[],
					imageDesk:'../../static/assets/slamLaje - D.jpg',
					imageMob:'../../static/assets/slamlaje - M.jpg',
					facebook:'/batalhadepoesia',
					faceLink:'https://www.facebook.com/batalhadepoesia',
					instagram:'@slamlaje',
					instaLink:'https://www.instagram.com/slamlaje/',
					twitter:'null',
					twitLink:'null',
					site:'null',
					email:'slamlaje@gmail.com',
					telefone:'21 98622-1392',
					endereço:'Laje da Casa Brota - Rua Ari Barroso, s/n° - Morro do Alemão ',
					description:[
						'Fundado por moradores da região, o Slam Laje é a primeira batalha de poesia do Complexo do Alemão.',
						'O objetivo é incentivar a poesia e a literatura marginal, fortalecendo o movimento cultural dentro da favela com muito passinho, batalhas de rimas, de uma forma sagaz e resistente.',
						'A favela tá passando a mensagem: Slam laje!'
					]
				},
				{
					name:'Debora Amorim - Makeup ',
					categoria:'Beleza e Estética',
					subcategoria:'Maquiagem ',
					tag:[],
					imageDesk:'../../static/assets/deboraAmorim - D.jpg',
					imageMob:'../../static/assets/deboraAmorim - M.jpg',
					facebook:'/debamorimmakeup',
					faceLink:'https://www.facebook.com/debamorimmakeup',
					instagram:'@debamorimm',
					instaLink:'https://www.instagram.com/debamorimm/',
					twitter:'null',
					twitLink:'null',
					site:'null',
					email:'contato.demoraamorim@gmail.com',
					telefone:'21 97145-0779',
					endereço:'Estrada do Itararé, 480',
					description:[
						'Débora Amorim, formada em maquiagem, trabalha a cerca de 2 anos na área.'
					]
				},
				{
					name:'Favela é Fashion',
					categoria:'Coletivo',
					subcategoria:'Moda',
					tag:[],
					imageDesk:'../../static/assets/favelaFashion - D.jpg',
					imageMob:'../../static/assets/favelaFashion - M.jpg',
					facebook:'/FavelaeFashion',
					faceLink:'https://www.facebook.com/FavelaeFashion',
					instagram:'@favelaefashion',
					instaLink:'https://www.instagram.com/favelaefashion/',
					twitter:'@favelaefashion',
					twitLink:'https://twitter.com/Favelaefashion',
					site:'null',
					email:'juhenrik26@gmail.com',
					telefone:'21 98668-3701',
					endereço:'Estrada do iatararé, 690 - Espaço do CRJ Alemão ',
					description:[
						'Favela é fashion é um projeto criado para selecionar jovens de comunidades que não tem chances de pagar um curso de moda.',
						'“ Ajudo esses jovens a encarar o sonho deles... Realizo meus sonhos conquistando os deles!!!!! ”  Ele existe desde 2011 e atualmente sonha em ter seu próprio espaço fixo.'
					]
				},
				{
					name:'Favelagrafia',
					categoria:'Coletivo',
					subcategoria:'Fotografia ',
					tag:[],
					imageDesk:'',
					imageMob:'',
					facebook:'/favelagrafia',
					faceLink:'https://www.facebook.com/favelagrafia',
					instagram:'@favelagrafia',
					instaLink:'https://www.instagram.com/favelagrafia/',
					twitter:'@favelagrafia',
					twitLink:'https://twitter.com/favelagrafia',
					site:'null',
					email:'josianefotografia@gmail.com',
					telefone:'21 97323-7174',
					endereço:'Complexo do Alemão - Rio de janeiro ',
					description:[
						'O Favelagrafia é um coletivo de 9 fotógrafos, sendo os 9 moradores de favelas do Rio de Janeiro, inclusive o Complexo do Alemão.',
						'O projeto tem um pouco mais de um ano de existência e foi idealizado pela a agência de publicidade NBS - a melhor da América Latina.',
						'O objetivo é desconstruir a visão estereotipada e preconceituosa que as pessoas têm das favelas e nada melhor do que os próprios moradores para fazer isso através da fotografia.'
					]
				},
				{
					name:'Foto Clube Alemão',
					categoria:'Coletivo',
					subcategoria:'Fotografia ',
					tag:[],
					imageDesk:'../../static/assets/fotoclube - D.jpg',
					imageMob:'../../static/assets/fotoclube - M.jpg',
					facebook:'/FotoClubeAlemão',
					faceLink:'https://www.facebook.com/Foto-Clube-Alemão-142926802508619',
					instagram:'@fotoclubealemao',
					instaLink:'https://www.instagram.com/fotoclubealemao/',
					twitter:'null',
					twitLink:'null',
					site:'null',
					email:'brunoitan@gmail.com',
					telefone:'21 98021-8721',
					endereço:'Complexo do Alemão - Rio de janeiro ',
					description:[
						'O Foto Clube Alemão nasceu do desejo de promover o intercâmbio entre fotógrafos do Alemão e fora do Alemão, quebrar os paradigmas e preconceitos que existem sobre a fotografia dentro da favela e junto aos próprios moradores, disseminando e fomentando essa cultura de fotografia através de saídas fotográficas, palestras, oficinas e exposiçōes fotográficas, visando também mostrar que a boa fotografia não depende somente de equipamentos profissionais.'
					]
				},
				{
					name:'GAS - Grupo Alemão Solidário ',
					categoria:'Coletivo',
					subcategoria:'Assistência Social',
					tag:[],
					imageDesk:'../../static/assets/gas - D.jpg',
					imageMob:'../../static/assets/gas - M.jpg',
					facebook:'/gasgrupoalemaosolidario',
					faceLink:'https://www.facebook.com/gasgrupoalemaosolidario',
					instagram:'null',
					instaLink:'null',
					twitter:'null',
					twitLink:'null',
					site:'null',
					email:'maysefm@gmail.com',
					telefone:'21 98888-1452',
					endereço:'Rua Sebastião de Carvalho ',
					description:[
						'GAS (Grupo Alemão Solidário) é coordenado por 3 mulheres, conta com o apoio de 15 voluntários, parceria do Conselho Tutelar com o cadastro de crianças em situações vulneráveis, entre outros de diversos bairros da cidade e de fora do país.',
						'São 57 famílias atendidas totalizando 282 crianças beneficiadas direta e indiretamente pelas ações realizadas, sendo procurados também por famílias que necessitam de ajuda e estão fora da comunidade.',
						'Direciona sua principal campanha no Natal, realizando cadastrados para beneficiar crianças  de 0 à 14 anos de idade, das comunidades da Pedra do Sapo, Nova Brasília, Fazendinha, Capão, Adeus, Baiana, Lagoinha, Inferno Verde, Palmeiras, Favela da Skol, Favela da Galinha…'
					]
				},
				{
					name:'Poetas Favelados ',
					categoria:'Coletivo',
					subcategoria:'Poesia ',
					tag:[],
					imageDesk:'',
					imageMob:'',
					facebook:'/PoetasFavelados',
					faceLink:'https://www.facebook.com/PoetasFavelados',
					instagram:'@poetasfavelados',
					instaLink:'https://www.instagram.com/poetasfavelados/',
					twitter:'null',
					twitLink:'null',
					site:'null',
					email:'poetasfavelados@gmail.com',
					telefone:'21 98622-1392',
					endereço:'Complexo do Alemão - Rio de janeiro ',
					description:[
						'O coletivo Poetas Favelados, sente o quanto a poesia inspira, grita e aquece os corações.',
						'Pensando nisso, realizamo saraus itinerantes em transportes e espaços públicos pela cidade com Ataques Poéticos.'
					]
				},
				{
					name:'Gato Mídia',
					categoria:'Educação',
					subcategoria:'Comunicação',
					tag:[],
					imageDesk:'../../static/assets/gatomidia - D.jpg',
					imageMob:'../../static/assets/gatomidia - M.jpg',
					facebook:'/gatomidia',
					faceLink:'https://www.facebook.com/gatomidia',
					instagram:'@gatomidia',
					instaLink:'https://www.instagram.com/gatomidia/',
					twitter:'@gato_midia ',
					twitLink:'https://twitter.com/Gato_MIDIA',
					site:'https://gatomidia.wordpress.com/',
					email:'projetogatomidia@gmail.com',
					telefone:'null',
					endereço:'Complexo do Alemão - Rio de janeiro ',
					description:[
						'Espaço de aprendizado em mídia e tecnologia para jovens negros e moradores de espaços populares.',
						'Criado em 2014 no Complexo do Alemão estimula nesses jovens a produção da sua própria comunicação, rede e conexões.',
						'Possibilitando diferentes narrativas, visibilidade, oportunidades e ideias criativas e coletivas que construam um mundo mais justo, igualitário e afetivo.'
					]
				},
				{
					name:'Joga Cria ',
					categoria:'Educação',
					subcategoria:'Tecnologia',
					tag:[],
					imageDesk:'../../static/assets/jogaecria - D.jpg',
					imageMob:'../../static/assets/jogaecria - M.jpg',
					facebook:'/JogaCria',
					faceLink:'https://www.facebook.com/JogaCria',
					instagram:'null',
					instaLink:'null',
					twitter:'null',
					twitLink:'null',
					site:'null',
					email:'joonasjss@gmail.com',
					telefone:'21 97660-3854',
					endereço:'Complexo do Alemão - Rio de janeiro ',
					description:[
						'Criação de jogos como forma de incentivar o aprendizado projetual e tecnológico. Os encontros têm ocorrido no Complexo do Lins e Alemão.'
					]
				},
				{
					name:'Nave do Conhecimento de Nova Brasília ',
					categoria:'Educação',
					subcategoria:'Tecnologia',
					tag:[],
					imageDesk:'../../static/assets/navedoconhecimento - D.jpg',
					imageMob:'../../static/assets/navedoconhecimento - M.jpg',
					facebook:'/navedoconhecimentonovabrasilia',
					faceLink:'https://www.facebook.com/navedoconhecimentonovabrasilia',
					instagram:'null',
					instaLink:'null',
					twitter:'null',
					twitLink:'null',
					site:'https://navedoconhecimento.rio/',
					email:'luciana.rodrigues@idaco.org.br',
					telefone:'21 4101-1510',
					endereço:'Rua Nova Brasília, s/n° - Praça do Terço - Nova Brasília - Complexo do Alemão',
					description:[
						'Espaço público onde oferecemos cursos nas área de tecnologia, educação e internet grátis a toda população do conjunto de favelas do Complexo do Alemão.',
						'Aberto de Seg a Sábado de 09h às 19h.'
					]
				},
				{
					name:'Recreação Infantil Estrelinha ',
					categoria:'Educação',
					subcategoria:'Infantil ',
					tag:[],
					imageDesk:'../../static/assets/recreacaoinfantil - D.jpg',
					imageMob:'../../static/assets/recreacaoinfantil - M.jpg',
					facebook:'null',
					faceLink:'null',
					instagram:'null',
					instaLink:'null',
					twitter:'null',
					twitLink:'null',
					site:'null',
					email:'jornalista.cmarinho@gmail.com',
					telefone:'21 7985-9026',
					endereço:'Fazendinha, Área 5 e Nova Brasília - Comlexo do Alemão',
					description:[
						'null'
					]
				},
				{
					name:'Vai na web',
					categoria:'Educação',
					subcategoria:'Tecnologia',
					tag:[],
					imageDesk:'',
					imageMob:'',
					facebook:'/vainaweb',
					faceLink:'https://www.facebook.com/vainaweb/',
					instagram:'null',
					instaLink:'null',
					twitter:'null',
					twitLink:'null',
					site:'http://www.vainaweb.com.br/',
					email:'null',
					telefone:'21 96850-2828',
					endereço:'Complexo do Alemão - Rio de janeiro ',
					description:[
						'O Vai Na Web é um programa de educação em tecnologias digitais avançadas que busca democratizar o ensino e aprendizado de tecnologia e ajudar na emancipação dos nossos jovens nos desafios da nova era digital.'
					]
				},
				{
					name:'Clube de Luta do Complexo ',
					categoria:'Esporte e Atividade Física',
					subcategoria:'Artes Marciais ',
					tag:[],
					imageDesk:'../../static/assets/clubedelutas - D.jpg',
					imageMob:'../../static/assets/clubedelutas - M.jpg',
					facebook:'/clubedelutadocomplexo',
					faceLink:'https://www.facebook.com/groups/clubedelutadocomplexo/',
					instagram:'null',
					instaLink:'null',
					twitter:'null',
					twitLink:'null',
					site:'null',
					email:'dr.andreluiz1981@gmail.com',
					telefone:'21 98048-6486',
					endereço:'Estrada do Itararé - Complexo do Alemão ',
					description:[
						'O Clube de Luta atua há 15 anos e oferece atividades esportivas com ênfase nas artes marciais, além de reforço escolar e atividades de lazer e cultura para crianças, jovens e adultos.',
						'Também se destacam no cenário de competições oficiais com dezenas de títulos estaduais e nacionais, inclusive em modalidades olímpicas como o Taekwondo.'
					]
				},
				{
					name:'Perninha Kickboxing ',
					categoria:'Esporte e Atividade Física',
					subcategoria:'Artes Marciais ',
					tag:[],
					imageDesk:'../../static/assets/familiaPerninha - D.jpg',
					imageMob:'../../static/assets/familiaPerninha - M.jpg',
					facebook:'/PerninhaKickboxing',
					faceLink:'https://www.facebook.com/groups/582405115123151/',
					instagram:'null',
					instaLink:'null',
					twitter:'null',
					twitLink:'null',
					site:'null',
					email:'profperninhakick@gmail.com',
					telefone:'21 96820-5972',
					endereço:'Complexo do Alemão - Rio de janeiro ',
					description:[
						'Competidor e invicto há 3 anos, Mestre Perninha dá aulas de kickboxing há mais de 15 anos, já participou de projetos sociais e no momento continua oferecendo aulas gratuitas para crianças e adolescentes.'
					]
				},
				{
					name:'Associação Abraço Campeão ',
					categoria:'ONG',
					subcategoria:'Cidania e Desenvolvimento',
					tag:[],
					imageDesk:'../../static/assets/abracocampeao - D.jpg',
					imageMob:'../../static/assets/abracocampeao - M.jpg',
					facebook:'/alanduarte',
					faceLink:'https://www.facebook.com/alan.duarte.3386',
					instagram:'null',
					instaLink:'null',
					twitter:'null',
					twitLink:'null',
					site:'http://thegoodfightmovie.com/abraco-campeao/',
					email:'null',
					telefone:'21 96892-9016',
					endereço:'Morro do Adeus - Complexo do Alemão',
					description:[
						'A associação Abraço Campeão foi fundada pelo então professor/atleta Alan Duarte que iniciou suas atividades no ano de 2014, atuando na comunidade Morro do Adeus levando uma nova perspectiva para os jovens e adultos através do esporte, despertando novas potencialidades com disciplina através do boxe.'
					]
				},
				{
					name:'Centro Cultural Oca dos Curumins ',
					categoria:'ONG',
					subcategoria:'Educação e Cultura ',
					tag:[],
					imageDesk:'../../static/assets/ocacurumins - D.jpg',
					imageMob:'../../static/assets/ocacurumins - M.jpg',
					facebook:'/CentroCulturalOcadosCurumins',
					faceLink:'https://www.facebook.com/CentroCulturalOcadosCurumins/',
					instagram:'null',
					instaLink:'null',
					twitter:'null',
					twitLink:'null',
					site:'null',
					email:'ccocadoscurumins@hotmail.com',
					telefone:'21 3071-6750',
					endereço:'Estrada do Itararé, n°480 - Travessa São José, n° 13 - Alvorada - Complexo do Alemão ',
					description:[
						'Conhecida como Escolinha da Tia Bete, tendo seu início no mês de Abril de 1977 com alfabetização, o Centro Cultural Ocas dos Curumins atualmente proporciona atividades na área social, cultural, esportivas, ambiental e prepara jovens para o mercado de trabalho.',
						'É um ponto de cultura reconhecido pela secretaria estadual e um ponto de leitura reconhecido também pela prefeitura do Rio.',
						'Realizam intercâmbio em parceria com a ONG Comunidade em Ação com parceiros voluntários de outros países.',
						'Na Oca dos Curumins são oferecidas oficinas de teatro, brincadeiras antigas, exibição de filmes, artesanatos, inclusive o Grupo Sempre Juntos do AA, cujo qual presta atendimento há 15 anos, além de estar desenvolvendo o resgate da cultura afro brasileira, entre outras atividades.',
						'A Oca dos Curumins é uma das instituições mais ativas do Complexo do Alemão com 40 anos de atividades na comunidade da Alvorada.'
					]
				},
				{
					name:'EDUCAP - Espaço Democrático de União, Convivência e Aprendizagem',
					categoria:'ONG',
					subcategoria:'Cidania e Desenvolvimento',
					tag:[],
					imageDesk:'../../static/assets/EDUCAP - D.jpg',
					imageMob:'../../static/assets/EDUCAP - M.jpg',
					facebook:'/educap.org',
					faceLink:'https://www.facebook.com/educap.org/',
					instagram:'@luciaeducap1716',
					instaLink:'https://www.instagram.com/luciaeducap1716/',
					twitter:'null',
					twitLink:'null',
					site:'null',
					email:'luciaeducap@gmail.com',
					telefone:'21 98832-3246',
					endereço:'Rua Canitar - Campo do Sargento, s/n° - Complexo do Alemão ',
					description:[
						'null'
					]
				},
				{
					name:'Instituto Raízes Em Movimento ',
					categoria:'ONG',
					subcategoria:'Educação e Cultura ',
					tag:[],
					imageDesk:'../../static/assets/raizesmovimento - D.jpg',
					imageMob:'../../static/assets/raizesmovimento - M.jpg',
					facebook:'/raizesemmovimento',
					faceLink:'https://www.facebook.com/raizesemmovimento',
					instagram:'null',
					instaLink:'null',
					twitter:'null',
					twitLink:'null',
					site:'http://www.raizesemmovimento.org.br',
					email:'contato@raizesemmovimento.org.br',
					telefone:'21 2260-3998',
					endereço:'Avenida Central, n° 68 - Ramos - Complexo do Alemão ',
					description:[
						'O INSTITUTO RAÍZES EM MOVIMENTO tem como missão promover o desenvolvimento humano, social e cultural do Complexo do Alemão e demais comunidades por meio da participação de atores locais como protagonistas desses processos, tendo como foco o fortalecimento e ampliação do capital social dessas comunidades.'
					]
				},
				{
					name:'Novos Líderes Empreendedores ',
					categoria:'ONG',
					subcategoria:'Educação e Cultura ',
					tag:[],
					imageDesk:'../../static/assets/novosLideres - D.jpg',
					imageMob:'../../static/assets/novosLideres - M.jpg',
					facebook:'/novoslideresempreendedores',
					faceLink:'https://www.facebook.com/novoslideresempreendedores',
					instagram:'@educatethefavela',
					instaLink:'https://www.instagram.com/educatethefavela',
					twitter:'null',
					twitLink:'null',
					site:'http://novoslideresempreendedores.com/',
					email:'lohransanto009@gmail.com',
					telefone:'21 99500-8681',
					endereço:'Complexo do Alemão - Rio de janeiro ',
					description:[
						'Atuando há 3 anos, desde 2014, a ONG usa a educação empreendedora para desenvolver e empoderar jovens e adultos das comunidades cariocas em prol de modificar e melhorar suas comunidades de origem.'
					]
				},
				{
					name:'Instituto Movimento & Vida ',
					categoria:'Saúde',
					subcategoria:'Fisioterapia',
					tag:[],
					imageDesk:'',
					imageMob:'',
					facebook:'/projetopaloma',
					faceLink:'https://www.facebook.com/projetopaloma/',
					instagram:'null',
					instaLink:'null',
					twitter:'null',
					twitLink:'null',
					site:'null',
					email:'monicacirnea@gmail.com',
					telefone:'21 96464-8101',
					endereço:'Rua das Andorinhas, n° 98',
					description:[
						'O Instituto Movimento & Vida é uma organização sem fins lucrativos que realiza atendimento de fisioterapia gratuito aos moradores do conjunto de favelas do Complexo do Alemão.',
						'A melhoria da qualidade de vida e reabilitação dos pacientes é o objetivo principal do trabalho desenvolvido pela instituição que atua 2007, promovendo informações de hábitos saudáveis e de proteção à saúde.',
						'Sua missão é atender com qualidade, dedicação e amor moradores de uma região do Rio de Janeiro que segue marcada com violência, dificuldade, miséria e falta de atenção.',
						'Atualmente precisa de recursos para manter o funcionamento diário e ampliar o número de pessoas atendidas, reduzindo a fila de espera de pacientes.'
					]
				},
				{
					name:'Alexandre Silva Fotografia ',
					categoria:'Serviço',
					subcategoria:'Fotografia',
					tag:[],
					imageDesk:'../../static/assets/AlexandreSilva - D.jpg',
					imageMob:'../../static/assets/AlexandreSilva - M.jpg',
					facebook:'/acsilvafotografia',
					faceLink:'https://www.facebook.com/acsilvafotografia',
					instagram:'@acsilvafotografia ',
					instaLink:'https://www.instagram.com/acsilvafotografia/',
					twitter:'null',
					twitLink:'null',
					site:'null',
					email:'acsilvafotografia@gmail.com',
					telefone:'21 99744-5063',
					endereço:'Complexo do Alemão - Rio de Janeiro ',
					description:[
						'null'
					]
				},
				{
					name:'Casa Brota - Coworking de favela ',
					categoria:'Serviço',
					subcategoria:'Coworking',
					tag:[],
					imageDesk:'',
					imageMob:'',
					facebook:'/casabrota',
					faceLink:'https://www.facebook.com/casabrota',
					instagram:'@casabrota',
					instaLink:'https://www.instagram.com/casabrota/',
					twitter:'null',
					twitLink:'null',
					site:'null',
					email:'falecom@casabrota.com.br',
					telefone:'21 97264-7819',
					endereço:'Rua Ari Barroso, s/n° - ao lado da Estação do teleférico do Alemão ',
					description:[
						'Casa Brota: Coworking de Favela, um espaço de conexão com foco na promoção cultural da favela e no desenvolvimento econômico das micro empresas.',
						'Empreender a partir das criações e subjetividade de cada indivíduo, visando expandir e fortalecer as redes destes espaços populares para além da favela.',
						'Prestação de serviços: Assessoria de imprensa, consultoria para empreendimentos da favela, redes, audiovisual, artes e tecnologia.'
					]
				},
				{
					name:'Classe D - Ateliê de Ideias ',
					categoria:'Serviço',
					subcategoria:'Design',
					tag:[],
					imageDesk:'../../static/assets/classe - D.jpg',
					imageMob:'../../static/assets/classe - M.jpg',
					facebook:'/ClasseDAteliêdeIdeias',
					faceLink:'https://www.facebook.com/Classe-D-Ateliê-de-Ideias-950892308279847',
					instagram:'@classe_d22',
					instaLink:'https://www.instagram.com/classe_d22/',
					twitter:'null',
					twitLink:'null',
					site:'null',
					email:'produto.classed@gmail.com',
					telefone:'21 99311-9672',
					endereço:'Avenida Central, n°55 - Complexo do Alemão ',
					description:[
						'O Coletivo Classe-D é formado por um grupo de amigos que se conheceram pelas ruas do Rio de Janeiro fazendo graffiti por volta do início dos anos 2000.',
						'Mas só em 2012 que parte deste coletivo começou a pensar profissionalmente em suas habilidades com produções de arte e comunicação visual.',
						'A partir de então tem se desenvolvido gradativamente seus aprendizados, trabalhando para oferecer um serviço de qualidade e com características ousadas, com criatividade, segurança e compromisso.'
					]
				},
				{
					name:'Dança e Cia Art ',
					categoria:'Serviço',
					subcategoria:'Dança',
					tag:[],
					imageDesk:'',
					imageMob:'',
					facebook:'/dancaeciaart',
					faceLink:'https://www.facebook.com/dancaeciaart',
					instagram:'@dancaeciaart',
					instaLink:'https://www.instagram.com/dancaeciaart/',
					twitter:'null',
					twitLink:'null',
					site:'null',
					email:'pedro.grh@gmail.com',
					telefone:'21 99417-8279',
					endereço:'Estrada Adhemar Bebiano, 1185',
					description:[
						'Tendo hoje 20 anos de idade, Pedro iniciou sua história com a dança no ano de 2010 com o grupo AfroReggae que com 1 ano se dedicando conseguiu uma bolsa e se aprofundar no que gosta.',
						'A coisa deu tão certo que perto de completar 2 anos ele foi promovido a monitor das aulas, o que o fez ganhar um pouco mais que só uma bolsa.',
						'Com o fechamento do AfroReggae em 2013, Pedro passou a dançar e a ensinar por conta própria, estando hoje à disposição daqueles que queiram aprender a arte da dança criando então a Dança e Cia Art.'
					]
				},
				{
					name:'Erica Martin Fotografia ',
					categoria:'Serviço',
					subcategoria:'Fotografia',
					tag:[],
					imageDesk:'../../static/assets/ericaMartin - D.jpg',
					imageMob:'../../static/assets/ericaMartin - M.jpg',
					facebook:'/photosnpictures',
					faceLink:'https://www.facebook.com/photosnpictures',
					instagram:'null',
					instaLink:'null',
					twitter:'null',
					twitLink:'null',
					site:'null',
					email:'ericamar_irgm@hotmail.com',
					telefone:'21 99645-4187',
					endereço:'Complexo do Alemão - Rio de Janeiro ',
					description:[
						'Iniciou na fotografia há três anos na Nave do Conhecimento (Nova Brasília) e de lá foi encaminhada para cursar fotografia no SENAI.',
						'Foi integrante de um curso audiovisual e um webdoc também dentro do Alemão.',
						'Atualmente é integrante do coletivo Cá Entre Clicks e Fotógrafas Brasileiras.'
					]
				},
				{
					name:'Estúdio Abaeté ',
					categoria:'Serviço',
					subcategoria:'Produção',
					tag:[],
					imageDesk:'../../static/assets/Abaete - D.jpg',
					imageMob:'../../static/assets/Abaete - M.jpg',
					facebook:'/estudioabaete',
					faceLink:'https://www.facebook.com/estudioabaete',
					instagram:'@estudioabaete',
					instaLink:'https://www.instagram.com/estudioabaete/',
					twitter:'null',
					twitLink:'null',
					site:'null',
					email:'estudioabaete@gmail.com',
					telefone:'21 98336-9348',
					endereço:'Complexo do Alemão - Rio de Janeiro ',
					description:[
						'O Estúdio Abaeté é uma produtora de desenvolvimento, criação e produção audiovisual.',
						'Todos os profissionais atuantes na empresa são moradores do Alemão, com formação através de projetos e cursos locais, colocando a juventude recém formada numa atuação direta com o mercado.'
					]
				},
				{
					name:'Gráfica - Agência Carol Muniz ',
					categoria:'Serviço',
					subcategoria:'Gráfica',
					tag:[],
					imageDesk:'',
					imageMob:'',
					facebook:'/contatoagenciamuniz',
					faceLink:'https://www.facebook.com/contatoagenciamuniz',
					instagram:'@contatoagenciamuniz',
					instaLink:'https://www.instagram.com/contatoagenciamuniz/',
					twitter:'null',
					twitLink:'null',
					site:'null',
					email:'contatoagenciamuniz@yahoo.com',
					telefone:'21 97012-0816',
					endereço:'Estrada do Itararé, 480 - Rua Nova, n°1 - Alvorada',
					description:[
						'null'
					]
				},
				{
					name:'Marcos Carolino Art ',
					categoria:'Serviço',
					subcategoria:'Dança',
					tag:[],
					imageDesk:'../../static/assets/MarcosCarolino - D.jpg',
					imageMob:'../../static/assets/MarcosCarolino - M.jpg',
					facebook:'/marcos.carolinoart',
					faceLink:'https://www.facebook.com/marcos.carolinoart',
					instagram:'@carolinnocoreografo',
					instaLink:'https://www.instagram.com/carolinnocoreografo/',
					twitter:'null',
					twitLink:'null',
					site:'null',
					email:'mcarolino20@gmail.com',
					telefone:'21 98027-4304',
					endereço:'Complexo do Alemão - Rio de Janeiro ',
					description:[
						'Dançarino há 9 anos, Marcos Carolinno, sentiu a necessidade de dividir esse dom com outras pessoas que também amam dançar.',
						'Atua como coreógrafo para festas de 15 anos desde 2013 e quer divulgar seu trabalho para além do Complexo do Alemão.'
					]
				},
				{
					name:'Toca do Lobo Produções ',
					categoria:'Serviço',
					subcategoria:'Produção',
					tag:[],
					imageDesk:'../../static/assets/tocadolobo - D.jpg',
					imageMob:'../../static/assets/tocadolobo - M.jpg',
					facebook:'/tdlproducoes',
					faceLink:'https://www.facebook.com/tdlproducoes',
					instagram:'@malhastensionadashelcimarlopes',
					instaLink:'https://www.instagram.com/malhastensionadashelcimarlopes/',
					twitter:'null',
					twitLink:'null',
					site:'null',
					email:'helcimar@gmail.com',
					telefone:'21 97045-3227',
					endereço:'Rua Sebastião de Carvalho, n°193 Fundos - Casa 01',
					description:[
						'Há 6 anos a Toca do Lobo Produções oferece serviços de decorações de festas em Malhas Tensionadas, produção cultural, além de aluguel de equipamentos de som, iluminação e DJ.',
						'Seu proprietário, Helcimar Lopes, também atua e presta seus serviços com produção cultural e drinkeiro. É reconhecido por promover os eventos mais badalados no Complexo do Alemão. '
					]
				},
				{
					name:'Tiaguinho Silva',
					categoria:'Transporte',
					subcategoria:'Moto Táxi',
					tag:[],
					imageDesk:'../../static/assets/thiaguinho - D.jpg',
					imageMob:'../../static/assets/thiaguinho - M.jpg',
					facebook:'',
					faceLink:'https://www.facebook.com/profile.php?id=100013204902709',
					instagram:'@tiaguinhoalvorada',
					instaLink:'https://www.instagram.com/tiaguinhoalvorada/',
					twitter:'null',
					twitLink:'null',
					site:'null',
					email:'tspurificacao@gmail.com',
					telefone:'21 97361-7113',
					endereço:'Complexo do Alemão - Rio de janeiro ',
					description:[
						'Tiago é um dos inúmeros mototaxista que resolveu se incorporar nesta opção de transporte alternativo oriundo da favela.',
						'O Moto Táxi é o transporte de passageiros que possibilita comodidade e agiliza a viagem por conta da flexibilidade sobre duas rodas.'
					]
				},
				{
					name:'Cezar Andrade',
					categoria:'Transporte',
					subcategoria:'Moto Táxi',
					tag:[],
					imageDesk:'',
					imageMob:'',
					facebook:'/cezarandrade',
					faceLink:'https://www.facebook.com/cezar.andrade.7967',
					instagram:'null',
					instaLink:'null',
					twitter:'null',
					twitLink:'null',
					site:'null',
					email:'null',
					telefone:'21985451070',
					endereço:'Complexo do Alemão - Rio de janeiro ',
					description:[
						'Cezar é um dos inúmeros mototaxista que resolveu se incorporar nesta opção de transporte alternativo oriundo da favela.',
						'O Moto Táxi é o transporte de passageiros que possibilita comodidade e agiliza a viagem por conta da flexibilidade sobre duas rodas.'
					]
				},
				{
					name:'Marciele Jesus',
					categoria:'Serviço',
					subcategoria:'Cabelereira e Barbeira',
					tag:[],
					imageDesk:'',
					imageMob:'',
					facebook:'/marcielePerfeito',
					faceLink:'https://www.facebook.com/marciele.Perfeito',
					instagram:'null',
					instaLink:'null',
					twitter:'null',
					twitLink:'null',
					site:'null',
					email:'null',
					telefone:'21 998461817',
					endereço:'Av. Itaoca 1778 Complexo do Alemão - Rio de janeiro ',
					description:[
						'Barbeira e Cabelereira formada e profissional.'
					]
				},
				{
					name:'',
					categoria:'',
					subcategoria:'',
					tag:[],
					imageDesk:'',
					imageMob:'',
					facebook:'',
					faceLink:'',
					instagram:'',
					instaLink:'',
					twitter:'',
					twitLink:'',
					site:'',
					email:'',
					telefone:'',
					endereço:'',
					description:[
						''
					]
				},
			]
		}
	},
	// wacth:{
	// 	mobile(){
	// 		console.log('test',window.screen.availWidth)
	// 		if(window.screen.availWidth > '640'){
	// 			this.transition = false
	// 		}else{
	// 			this.transition = true
	// 		}
	// 	}
	// },
	computed:{
		filterActivity(){
			const list = this.atividades

			if (this.category) {
				return list.filter(atividade => atividade.categoria === this.category)
				 
			}

			return null
		},
		mobile(){
			if(screen.width < '640'){
				console.log(test, screen.width)
				return this.transition = false
			}else{
				return this.transition = true
			}
		}
	},
	methods:{
		setCategory(value){
			this.category = value
		}
	},
	components: {
		Atividades,
		ListaAtividades
	}
}
</script>

<style scoped>
header{
	width: 100%;
	height: 140vh;
	background: #fcae1b url(../../static/assets/background.svg) no-repeat bottom;
	background-size: 100%;
	display: flex;
	justify-content: flex-start;
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
	width: 40%;
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
	height: 5vh;
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
	height: 80vh;
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