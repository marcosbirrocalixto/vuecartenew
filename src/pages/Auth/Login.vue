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
        <h2>Login</h2>

        <div class="row">
            <div class="col-md-12">
                <label for="exampleInputEmail1" class="form-label">E-mail</label>
                <div class="text-danger" v-if="errors.email != ''">
                {{ errors.email[0] || '' }}
                </div>
                <input type="email" id="email" aria-describedby="emailHelp" required v-model="formData.email" name="email"
                :class="['form-control', 'input-user', {'is-invalid': errors.email[0] || ''}]">
                <div id="emailHelp" class="form-text">Nunca compartilharemos seu e-mail.</div>
            </div>
        </div><p></p>

        <div class="row">
            <div class="col-md-12">
                <label for="exampleInputEmail1" class="form-label">Senha</label>
                <div class="text-danger" v-if="errors.password != ''">
                {{ errors.password[0] || '' }}
                </div>
                <input type="password" id="password" aria-describedby="emailHelp" v-model="formData.password" name="password"
                :class="['form-control', 'input-user', {'is-invalid': errors.password[0] || ''}]">
            </div>
        </div>

<hr>
        <div class="row">
        <div class="col-md-6">
            <button type="button" class="btn btn-primary"
              :disabled="loading"
              @click.prevent="auth()">
              <span v-if="loading">Autenticando...</span>
              <span v-else>Login</span>
            </button>    
        </div>
            <div class="col-md-6">
                <router-link class="btn btn-warning" :to="{ name: 'register' }">Cadastrar!</router-link>
            </div>
        </div>

    </div>
  </div>
</div>
</div>


</template>

<script>
import { mapActions } from 'vuex'

export default {

    //computed: {
    //    deviceName () {
    //        return navigator.appCodeName + ' ' + navigator.appName + navigator.plataform.deviceName + this.formData.email
    //    }
    //},

    data() {
        return {
        loading: false,
        status: '',
        formData: {
            email: '',
            password: '', 
            device_name: '111111'
        },
        errors: {
            email: '',
            password: ''
        }
        }
    },
    methods: {
        ...mapActions([
        'login'
        ]),
        
        auth () {
        this.reset()
        this.loading = true

        const params = {
            device_name: '222222222',
            ...this.formData
        }

        this.login(this.formData)
            .then(response => {
                this.$vToastify.success('autenticação realizada com sucesso!!!', 'Bem-vindo!')

                this.$router.push({name: 'home'})
            })
            .catch(error => {
                const errorResponse = error.response

                if (errorResponse.status === 422) {
                this.errors = Object.assign(this.errors, errorResponse.data.errors)

                this.$vToastify.error('Dados de autenticação inválidos, verifique e digite novamente!!!', 'Erro ao autenticar!')

                setTimeout(() => this.reset(), 7000)

                return; 
                }

                this.$vToastify.error('Falha ao autenticar!!!', 'Erro')            
            })
            .finally(() => this.loading = false) 
        },

        reset() {
            this.errors = {
            email: '',
            password: ''
        }
        }
    },
    }
</script>