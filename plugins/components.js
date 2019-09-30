import Vue from 'vue'

import CardInfo from '../components/shared/CardInfo'
import item from '../components/templates/item'
import sectionLeft from '../components/templates/section-left'
import button_01 from '../components/shared/buttons/button-01'
import button_02 from '../components/shared/buttons/button-02'
import button_03 from '../components/shared/buttons/button-03'
import menu_01 from '../components/shared/menu-01'
import change from '../components/shared/change'
import footer from '../components/templates/footer'

Vue.component('card-info', CardInfo)
Vue.component('item', item)
Vue.component('section-left', sectionLeft)

Vue.component('button-01', button_01)
Vue.component('button-02', button_02)
Vue.component('button-03', button_03)
Vue.component('menu-01', menu_01)
Vue.component('change', change)
Vue.component('footer-01', footer)