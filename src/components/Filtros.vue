<script setup lang="ts">
  import { ref } from 'vue';
  import { listDatos, listDatosMain } from "../store/useInstitutos"

  const name = ref('')
  const dane_code = ref('')

  const limpiarFiltros = () => {
    name.value = ''
    dane_code.value = ''
  }

  const filtrar = () => {
    listDatos.value = listDatosMain.value.filter(item => {
  const daneLowerCase = item.dane.toString().toLowerCase();
  const nameILowerCase = item.nombre.toLowerCase();
  const daneCodeLowerCase = dane_code.value.toLowerCase();
  const nameLowerCase = name.value.toLowerCase();

  return daneLowerCase.includes(daneCodeLowerCase) && nameILowerCase.includes(nameLowerCase);
});
  }
</script>

<template>
  <div >
    <vs-row>
  <vs-col vs-w="12">
    <vs-card style="width: 80%; margin: 0 auto;">
      <template v-slot:header>
        <h3>
          Filtros
        </h3>
      </template>
      <template v-slot>
        <div class="container-inputs">
          <vs-input placeholder="Nombre" v-model="name"/>
          <vs-input placeholder="Codigo" v-model="dane_code"/>
          <vs-button @click="limpiarFiltros()" icon="filter_alt_off" type="line">Limpiar</vs-button>
          <vs-button @click="filtrar()" icon="search" line-origin="left" color="success" type="line">Buscar</vs-button>
        </div>
      </template>
    </vs-card>
  </vs-col>
</vs-row>

  </div>
</template>

<style>

.container-inputs{
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>