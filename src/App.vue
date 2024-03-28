<script setup lang="ts">
import Filter from '@/components/Filtros.vue'
import Tabla from '@/components/Tabla.vue'
import { ref } from 'vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import axios from "axios";

import { toast } from 'vue3-toastify';


const password = ref('explorandoando2020%')
const userName = ref('etraining')
const isLogin = ref(false)

const singIn = () => {

    axios
      .post('https://www.php.engenius.com.co/DatabaseIE.php', {
        User: userName.value,
        Password: password.value,
        option: 'instituciones'
        }
        )
      .then(response => {
        if(response.data.login != 'Fail'){
          isLogin.value = true
          toast.success('Exito!', { rtl: true });
        }else{
          toast.error('El usuario o contraseña no valido!', { rtl: true });
        }
        
      }
      ).catch(
        e => {
          toast.error('Error interno!', { rtl: true })
        }
      )

}

</script>

<template>
  <div v-if="isLogin" class="container">
    <h1>Instituciones en el Tolima - Prueba Tecnica</h1>
    <Filter />
    <Tabla />
  </div>

  <div class="container" style="display: flex; justify-content: center; align-items: center;" v-else>
  <vs-row vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
    <vs-col vs-lg="2" vs-sm="3" vs-xs="9">
    <vs-card style="margin: 0 auto;">
      <template v-slot:header>
        <h3>
          Inicia Sección
        </h3>
      </template>
      <template v-slot>
        <div class="container-inputs">
          <vs-row>
            <vs-col vs-w="12">
              <vs-input size="large" label="Nombre de Usuario"  v-model="userName"/>
            </vs-col>
            <vs-col vs-w="12">
            <vs-input size="large" label="Contraseña"  v-model="password"/>
          </vs-col>
          <vs-col vs-w="12" vs-type="flex" vs-justify="end" vs-align="center">
            <vs-button @click="singIn()" type="line">Entrar</vs-button>
          </vs-col>
          </vs-row>
        </div>
      </template>
    </vs-card>
  </vs-col>
  </vs-row>

  </div>
  
</template>

<style>
.container{
  width: 100vw;
  height: 100vh;
  padding: 3rem;
}

h1{
  font-size: 25px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 3rem
}

</style>