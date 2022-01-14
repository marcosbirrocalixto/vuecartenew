<template>

    <header class="top-navbar">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <div class="navbar-brand">
                <a class="nav-link" href="/"><img src="/static/images/logo-seo-original.png"
                    class="img-fluid" alt="" height="100" width="100" /></a>
            </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active"><router-link class="nav-link" to="/">home</router-link></li>
                    <li class="nav-item"><router-link class="nav-link" to="/cadastro">Cadastre-se</router-link></li>
                    <li class="nav-item"><router-link class="nav-link" to="/usuario">Usuário</router-link></li>
                    <li class="nav-item"><router-link class="nav-link" to="/">Serviços</router-link></li>
                    <li class="nav-item"><router-link class="nav-link" to="/perfil">Perfil</router-link></li>
                    <li class="nav-item"><router-link class="nav-link" to="/login">Login</router-link></li>
                    <li class="nav-item"><router-link class="nav-link" to="sair()">Sair</router-link></li>
                </ul>
                </div>
                <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Pesquisar" aria-label="Pesquisar">
                <button class="btn btn-outline-success nav-item" type="submit">Pesquisar</button>
                </form>
            </div>
        </nav>
    </header>

</template>

<script>
export default {
  name: 'NavBarVue',
  data () {
    return {
		usuario: false
    }
  },
  methods:{
    sair(){
		console.log("vai sair");
        sessionStorage.removeItem("usuario");
		sessionStorage.removeItem("projetos"); 
		sessionStorage.removeItem("categorias"); 
		sessionStorage.removeItem("tipoProjetos"); 
        this.usuario = false;       
    }	  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top-navbar .bg-light{
	padding-top: 15px;
	padding-bottom: 15px;
	box-shadow: 0 0 18px 0 rgba(0,0,0,.12);
}
.top-navbar .navbar-expand-lg .navbar-nav{
	background: #94a5bd;
	border-radius: 5px;
}
.top-navbar .navbar-light .navbar-nav .nav-item{
	position: relative;
}
.top-navbar .navbar-light .navbar-nav .nav-link{
	padding: 10px 18px;
	color: #ffffff;
	position: relative;
}
.top-navbar .navbar-light .navbar-nav .nav-item::before{
	position: absolute;
	content: '';
	left: 0px;
	top: 0px;
	width: 100%;
	height: 0%;
	display: block;
	opacity: 0;
	border-radius: 5px;
	background-color: #015778;
	-webkit-transition: all 700ms ease;
	-ms-transition: all 700ms ease;
	-o-transition: all 700ms ease;
	transition: all 700ms ease;
}
.top-navbar .navbar-light .navbar-nav .nav-item.active::before{
	opacity: 1;
	height: 100%;
}
.top-navbar .navbar-light .navbar-nav .nav-item:hover::before{
	opacity: 1;
	height: 100%;
}
.top-navbar .navbar-light .navbar-nav li .dropdown-menu{
	box-shadow: 0 2px 12px 0 rgba(0,0,0,.12);
	border: none;
	border-radius: 5px;
	margin: 0px;
}
.top-navbar.fixed-menu .bg-light{
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 9999;
	visibility: visible;
	transform: translate(0,0) scale(1);
	transition: .3s;
}
.btn-outline-success{
	background: #94a5bd;
	border-radius: 5px;    
}
</style>
