<template>
     <div class="container justify-content-center">
        <p><p>
        <div class="row justify-center">
            <h3>Profissional ou empresa, tenha o seu portifólio em destaque!</h3>
        </div><div><p></p></div>
   
        <div class="row justify-center">
        <p></p>
            <div class="item-servico ads01"></div>
            <div class="item-servico ads02"></div>
            <div class="item-servico ads03"></div>
            <div class="item-servico ads04"></div>
        </div>
    </div>


</template>

<script>
export default {
  name: 'ServicosVue',
  props: [],
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.servico {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 1000px;
    margin: 0 auto;
    justify-content: space-around;
}

.servico .item-servico {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 200px;
}
.ads-tl{
	width: 1100px;
	height: 30px;
	float: left;
	margin-top: 10px;
	padding-left: 0px;
}
.ads{
	width: 1100px;
	height: 150px;
	float: left;
	margin-top: 0px;
}
.ads01{
	width: 270px;
	height: 150px;
	float: left;
	border: 1px solid #FFFFFF;
	border-radius: 10px;
	background: url('/static/images/ads-01.jpg');
	margin-top: 0px;
}
.ads02{
	width: 270px;
	height: 150px;
	float: left;
	border: 1px solid #FFFFFF;
	border-radius: 10px;
	background: url('/static/images/ads-02.jpg');
	margin-left: 6px;
}
.ads03{
	width: 270px;
	height: 150px;
	float: left;
	border: 1px solid #FFFFFF;
	border-radius: 10px;
	background: url('/static/images/ads-03.jpg');
	margin-left: 6px;
}
.ads04{
	width: 270px;
	height: 150px;
	float: left;
	border: 1px solid #FFFFFF;
	border-radius: 10px;
	background: url('/static/images/ads-04.jpg');
	margin-left: 6px;
}
</style>