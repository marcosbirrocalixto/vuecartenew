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
              <input type="hidden" class="form-control" id="device_name" required v-model="formData.device_name" name="device_name">
              <div class="text-danger" v-if="errors.name != ''">
                {{ errors.name[0] || '' }}
              </div>
                <label class="form-label">Nome</label>
                <input type="text" id="name" required v-model="formData.name" name="name"
                  :class="['form-control', 'input-user', {'is-invalid': errors.name[0] || ''}]">
            </div>
        </div>

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
                <label for="exampleInputEmail1" class="form-label">Tipo de usuário</label>
<div class="form-check">
  <label class="form-check-label" for="flexRadioDefault1">
    Pessoa Física
  </label>
  <input class="form-check-input" type="radio" name="tipouser_id" id="tipouser_id1" value="1" checked><br>
  <label class="form-check-label" for="flexRadioDefault2">
    Pessoa Jurídica
  </label>
  <input class="form-check-input" type="radio" name="tipouser_id" id="tipouser_id2" value="2">
</div>
<div class="form-check">
  
  
</div></div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <label for="exampleInputEmail1" class="form-label">Senha</label>
                <div class="text-danger" v-if="errors.password != ''">
                {{ errors.password[0] || '' }}
                </div>
                <input type="password" id="password" aria-describedby="emailHelp" v-model="formData.password" name="password"
                :class="['form-control', 'input-user', {'is-invalid': errors.password[0] || ''}]">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Conforme sua Senha</label>
                <div class="text-danger" v-if="errors.password_confirmation != ''">
                {{ errors.password_confirmation || '' }}
                </div>
                </div>
                <input type="password" id="password_confirmation" required v-model="formData.password_confirmation" name="password_confirmation"
                :class="['form-control', 'input-user', {'is-invalid': errors.assword_confirmation || ''}]">
            </div> 
        </div>

<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">Leia nosso termo de uso</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Termo de uso</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Texto</label>
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">aceite nosso termo:</label>
          </div>
          <div>
              <input type="checkbox" class="form-check-input" id="deacordo" required> Aceite nosso termo:
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
      </div>
    </div>
  </div>
</div>

        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="deacordo" required>
            <label class="form-check-label" for="exampleCheck1">De acordo com no termo de uso.</label>
        </div>
<hr>
        <div class="row">
        <div class="col-md-6">
            <button type="button" class="btn btn-primary"
              :disabled="loading"
              @click.prevent="registerClient()">
              <span v-if="loading">Cadastrando Cliente...</span>
              <span v-else>Cadastrar</span>
            </button>    
        </div>
            <div class="col-md-6">
            <router-link class="btn btn-warning" to="/login">Já tenho conta!</router-link>
 
            </div>
        </div>

    </div>
  </div>
</div>


</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      loading: false,
      formData: {
        name: '',
        email: '',
        password: '', 
        password_confirmation: '',
        device_name: 'from_vue'
      },
      errors: {
        name: [],
        email: [],
        password: [],
      },
      errors: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'register'
    ]),
    
    registerClient () {
      this.reset()
      this.loading = true
      this.register(this.formData)
          .then(response => {
            this.$vToastify.success('Cadastro realizado com sucesso!!!', 'Bem-vindo!')
            this.router.push( {name: 'login'} )
          })
          .catch(error => {
            //console.log(error.response)
            const errorResponse = error.response

            if (errorResponse.status === 200) {
              this.errors = Object.assign(this.errors, errorResponse.data.errors)

              this.$vToastify.error('Dados inválidos, verifique e digite novamente!!!', 'Erro ao cadastrar!')

            setTimeout(() => this.reset(), 7000)

            return; 
            }

            this.$vToastify.error('Falha ao Registrar!!!', 'Erro')            
          })
          .finally(() => this.loading = false) 
    },

    reset() {
        this.errors = {
          name: '',
          email: '',
          password: ''
      }
    }
  },
}
</script>