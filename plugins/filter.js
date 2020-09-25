import Vue from 'vue'
import moment from 'moment'
Vue.filter('timeformat', (val, format = 'YYYY-MM-DD') => moment(val).format(format))
Vue.filter('division', val => val.toLocaleString)
