<template>
	<div id="AppSite">
		<section class="container" v-for="atividade in filterActivity">
			<img class="image" :src="atividade.imageDesk">
			<img class="imageMob" :src="atividade.imageMob">
			<div class="container-texts">
				<h3 class="title">{{ atividade.name }}</h3>
				<p class="caption">{{ atividade.subcategoria }}</p>
			</div>
		</section>
	</div>
</template>
<script>
export default{
	name: 'ListaAtividades',
	props:{
		filterActivity:{
			type: Array
		}
	},
	data(){
		return{

		}
	}
}

</script>
<style scoped>
#AppSite{
	width: 39.5%;
	height: 92vh;
	margin-top: 5%;
	overflow: auto;
}
/*@media (max-width: 640px){
	#AppSite{
		width: 94%;
		margin-left: 2%;
		position: absolute;
		top: 250px;
	}
}*/
.container{
	width: 500px;
	height: 200px;
	margin-bottom: 1%;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;	
	position: relative;
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