<template>

<div class="container justify-content-center">

    <div class="linha-artigos">     

		<div class="artigo01">
			<div class="artigo-div01"></div>
			<div class="artigo-txt"><p>
			<h6>NBR 15575. Você conhece?</h6>
			<h3>A NBR 15575 é uma norma que trata do desempenho de edificações habitacionais e apresenta características indispensáveis de uma obra para o consumidor, com o objetivo de prezar pelo conforto, acessibilidade, higiene, estabilidade, vida útil da construção, segurança estrutural e contra incêndios. <br><br></h3>
			<a href="artigo001.html"><h3>SAIBA MAIS...</h3></a>
			</div>
		</div>

		<div class="artigo02">
			<div class="artigo-div02"></div>
			<div class="artigo-txt"><p>
				<h6>O que faz um designer de interiores?</h6>
				<h3>Todo ambiente pode ser melhor aproveitado, seja uma sala, um quarto ou um escritório. Isso está relacionado com o que faz um designer de interiores: tornar os espaços mais proveitosos do que são.</h3>
					<br>
				<a href="artigo001.html"><h3>SAIBA MAIS...</h3></a> 
			</div>
		</div>
		
		<div class="artigo02">
			<div class="artigo-div03"></div>
			<div class="artigo-txt"><p>
			<h6>O que é Programa de Necessidades?</h6>
			<h3>O Programa de Necessidades, programa de usos ou briefing é o conjunto de todas as necessidades sociais e funcionais de um determinado espaço. 
			Ele serve como base para o desenvolvimento do projeto, e é umas das etapas que mais requer conversa.  </h3>
			<a href="artigo001.html"><h3>SAIBA MAIS...</h3></a> 
			</div>
		</div>	
	
	</div>	

</div>

</template>

<script>
export default {
  name: 'QueFazVue',
  props: [],
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    font-size: 14px
}
h6 {
    font-size: 15px;
	font-family: 'Archivo Black', sans-serif;
	line-height: 20px;
	margin-top: 10px;
	text-align: center;
	color: #015778;
}
.services-tl{
	width: 1100px;
	height: 30px;
	float: left;
	margin-top: 10px;
	padding-left: 0px;
	background: none;
}
.linha-service{
	width: 270px;
	height: 2px;
	float: left;
	margin-left: 0px;
	padding-left: 0px;
	background: #FDBD02;	
}
.titulo-service{
	width: 560px;
	height: 30px;
	float: left;
	margin-left: 0px;
	padding-left: 20px;
}
.linha-artigos{
	width: 1100px;
	height: 300px;
	float: left;
	margin-top: 20px;
	margin-left: 0px;
	padding-left: 0px;
	background: #FFFFFF;	
}
.artigo01{
	width: 350px;
	height: 250px;
	float: left;
	margin-left: 0px;
	padding-left: 0px;
	background: #FFFFFF;
	border-radius: 10px;
	box-shadow: 5px 5px 5px 5px rgba(0,0,0,0.2);
}
.artigo02{
	width: 350px;
	height: 250px;
	float: left;
	margin-left: 15px;
	padding-left: 0px;
	background: #FFFFFF;
	border-radius: 10px;
	box-shadow: 5px 5px 5px 5px rgba(0,0,0,0.2);
}
.artigo-txt{
	width: 250px;
	height: 250px;
	float: left;
	margin-left: 0px;
	padding-left: 10px;
	padding-right: 5px;
	background:#FFFFFF;
	border-radius: 0px 10px 10px 0px;
}
.artigo-div01{
	width: 100px;
	height: 250px;
	float: left;
	margin-left: 0px;
	padding-left: 0px;
	background: url('/static/images/artigo-01.jpg');
	border-radius: 10px 0px 0px 10px;
}
.artigo-div02{
	width: 100px;
	height: 250px;
	float: left;
	margin-left: 0px;
	padding-left: 0px;
	background: url('/static/images/artigo-02.jpg');
	border-radius: 10px 0px 0px 10px;
}
.artigo-div03{
	width: 100px;
	height: 250px;
	float: left;
	margin-left: 0px;
	padding-left: 0px;
	background: url('/static/images/artigo-03.jpg');
	border-radius: 10px 0px 0px 10px;
}
</style>

	