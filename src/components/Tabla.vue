<script lang="ts" setup>
import {onMounted} from "vue"
import { listMunicipios, titleTable, listInstitutos, listDatos, isSede, listSedes} from "../store/useInstitutos"


const findInstitutos= (code: string, name: string) =>{
  if(!isSede.value){
    listInstitutos(
      {
      "User": "etraining",
      "Password": "explorandoando2020%",
      "option": "instituciones",
      "CodMun": code
    },
    name
    )
  }else{
    listSedes(
      {
      "User": "etraining",
      "Password": "explorandoando2020%",
      "option": "sedes",
      "CodInst": code
    },
    name
    )
  }
}
onMounted(() => {
    listMunicipios(
        {
            "User": "etraining",
            "Password": "explorandoando2020%",
            "option": "municipios"
        }
    )
})
</script>

<template>
<div>
  <vs-row>
  <vs-col >
    <vs-card style="width: 80%; margin: 0 auto; padding: 1rem">
      <template v-slot:header>
        <h3>
          {{ titleTable }}
        </h3>
      </template>
      <template v-slot>
        <vs-table max-items="10" pagination stripe :data="listDatos">
      <template #thead>
        <vs-th>
          ID
        </vs-th>
        <vs-th>
          Nombre
        </vs-th>
        <vs-th>
          Codigo Dane
        </vs-th>
      </template>

      <template v-slot="{data}">
        <vs-tr @click="findInstitutos(data[indextr].dane, data[indextr].nombre)" :key="indextr" v-for="(tr, indextr) in data" >
          <vs-td :data="indextr">
            {{ indextr + 1}}
          </vs-td>

          <vs-td :data="data[indextr].nombre">
            {{data[indextr].nombre}}
          </vs-td>

          <vs-td :data="data[indextr].dane">
            {{data[indextr].dane}}
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
      </template>
    </vs-card>
  </vs-col>
  </vs-row>
  </div>
</template>