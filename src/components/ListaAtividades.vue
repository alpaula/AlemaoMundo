<template>
	<div id="AppSite">
		<section class="container">
			<img class="image" src="../../static/assets/casabrota.png">
			<div class="container-texts">
				<h3 class="title">Casa Brota</h3>
				<p class="caption">Coworking</p>
			</div>
		</section>
	</div>
</template>
<script>

</script>
<style scoped>
	#AppSite{
		width: 45%;
		height: 90vh;
		margin:20px 0;
	}
	.container{
		width: 500px;
		height: 200px;
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