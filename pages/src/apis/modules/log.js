import Vue from 'vue'

export default {
    fetch(params) {
        return Vue.axios.get('/apis/log', {
            params: params
        })
    }
}