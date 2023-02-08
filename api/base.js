import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

const base = axios.create({
  baseURL: 'https://63d3de42c1ba499e54cad952.mockapi.io/api/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default base
