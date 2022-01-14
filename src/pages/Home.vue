<template>
    <div>
      Home
      <div class="row justify-center" v-for="(company, index) in companies.data" :key="index">
          <ol class="col-6">
            <li data-target="#">
              <img
                v-if="company.image" 
                  :alt="company.name" 
                  :src="company.image">
              <img
                v-else
                  :alt="company.name" 
                  src="@/assets/images/logo-seo-original.png" width="60">              
            </li>
            <li data-target="/">{{ company.name }}</li>
            <li v-if="me.name">Olá {{ me.name }}!</li>
            <li>
              <button @click.prevent="logout">Logout</button>
            </li>
          </ol>
      </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  mounted() {
    this.getCompanies()
          .catch(response => this.$vToastify.error('Falha ao carregar Empresas!!!', 'Erro'))    
  },

  computed: {
    // companies() {
    //   return this.$store.state.companies.items
    // }
    ...mapState({
      companies: state => state.companies.items,
      me: state => state.auth.me.data
    })
  },

  methods: {
    ...mapActions([
      'getCompanies',
      'logout'      
    ])
  }
}
</script>
