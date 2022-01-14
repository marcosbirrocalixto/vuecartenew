<template>
    <div>


<div class="container" style="display: grid; grid-template-columns: 940px;">
  <div class="row">
    <div class="col-4">
        <div class="card" style="width: 18rem;">
        <img src="https://www.whatcar.com/car-leasing/images/vehicles/medium/100895.jpg" width="200" heigth="200" alt="" class="img-fluid mx-auto d-block">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
        </ul>
        <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
        </div>
    </div>
    
    <div class="col-8">
        <p></p>
        <h2>Cadastro</h2>

       <div class="row">
        <div class="col-md-12">

        <div class="col-9">Meus projetos</div> 
            <div class="row">
                <div class="col-4">Projeto 3</div>
                <div class="col-4">Projeto 1</div>
                <div class="col-4">Projeto 2</div>
            </div>
            <div class="row">
                <div class="col-4">Projeto 3</div>
                <div class="col-4">Projeto 1</div>
                <div class="col-4">Projeto 2</div>
        </div>
       </div>
    </div>
 
</div></div>
</div>
</div>

</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    created() {
        this.getMyProjects()
            .catch(error =>  this.$vToastify.error('Falha ao carregar meus projetos!!!', 'Erro'))
    },

    methods: {
        ...mapActions([
            'getMyProjects'
        ]),

    }
}
</script>