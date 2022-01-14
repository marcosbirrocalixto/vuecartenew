<template>
    <header class="top-navbar">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <div class="navbar-brand">
                <router-link class="nav-link" :to="{name: 'home'}"><img src="@/assets/images/logo-seo-original.png"
                    class="img-fluid" alt="" height="100" width="100" /></router-link>
            </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active"><router-link class="nav-link" :to="{name: 'home'}">home</router-link></li>
                    <li class="nav-item"><router-link class="nav-link" :to="{name: 'register'}">Cadastre-se</router-link></li>
                    <li class="nav-item">             
                        <router-link :to="{name: 'my.projects'}" class="nav-link">
                            Meus Projetos
                        </router-link>
                    </li>
                    <li class="nav-item">             
                        <router-link  :to="{name: 'login'}" class="nav-link"  >
                            Login
                        </router-link>
                    </li>
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