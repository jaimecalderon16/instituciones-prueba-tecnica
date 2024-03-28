import axios from "axios";
import {useLoading} from 'vue-loading-overlay'
import {ref } from 'vue'

const BaseUrl = 'https://www.php.engenius.com.co/DatabaseIE.php'

export const listDatos = ref([] as Datum[])
export const listDatosMain = ref([] as Datum[])
export const titleTable = ref('Lista de Municipios del tolima')

const $loading = useLoading({})
export const isSede = ref(false)

export const listMunicipios = (data: RequestMunicipio) => {
    const loader = $loading.show({
        color: "#1F74FF",
        opacity: 0.8
    });

    titleTable.value = 'Lista de Municipios del tolima'
    axios
      .post(BaseUrl, data)
      .then(response => {
        listDatos.value = response.data.data
        listDatosMain.value = response.data.data
          setTimeout(() => {
              loader.hide()
          }, 2000);
        }
      ).catch(
        e => {
            console.error(e)
            setTimeout(() => {
                loader.hide()
            }, 2000);
        }
      )
}

export const listInstitutos = (data: RequestInstitos, nameMunicipio: string) => {
    const loader = $loading.show({});
    isSede.value = true;
    titleTable.value = `Lista de Instutos del Municipio de ${ nameMunicipio}` 
    axios
      .post(BaseUrl, data)
      .then(response => {
        listDatos.value = response.data.data
        listDatosMain.value = response.data.data
          setTimeout(() => {
            loader.hide()
        }, 2000);
      }
      ).catch(
        e => {
            console.error(e)
            setTimeout(() => {
                loader.hide()
            }, 2000);
        }
      )
}

export const listSedes = (data: RequestSedes, nameInstituto: string) => {
    const loader = $loading.show({});
    isSede.value = false;

    titleTable.value = `Lista de Sedes del Instituto de ${nameInstituto}` 
    axios
      .post(BaseUrl, data)
      .then(response => {
        listDatos.value = response.data.data
        listDatosMain.value = response.data.data
          setTimeout(() => {
            loader.hide()
        }, 2000);
      }
      ).catch(
        e => {
            console.error(e)
            setTimeout(() => {
                loader.hide()
            }, 2000);
        }
      )
}


export interface Response {
    login:  string;
    option: string;
    data:   Datum[];
}

export interface Datum {
    nombre: string;
    dane:   string;
}

export interface RequestMunicipio {
        User: string;
        Password: string;
        option: string;
}

export interface RequestInstitos {
        User: string;
        Password: string;
        option: string;
        CodMun: string;
}

export interface RequestSedes {
        User: string;
        Password: string;
        option: string;
        CodInst: string;
}