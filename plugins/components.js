import Vue from 'vue'

import CardInfo from '../components/shared/CardInfo'
import Modal from '../components/shared/modal'
import item from '../components/templates/item'
import itens_col3 from '../components/templates/itens-col3'
import sectionLeft from '../components/templates/section-left'
import sectionRight from '../components/templates/section-right'
import sectionTop from '../components/templates/section-top'
import sectionFull from '../components/templates/section-full'
import sectionForm from '../components/templates/section-form'

import button_01 from '../components/shared/buttons/button-01'
import button_02 from '../components/shared/buttons/button-02'
import button_03 from '../components/shared/buttons/button-03'
import menu_01 from '../components/shared/menu-01'
import change from '../components/shared/change'
import footer from '../components/templates/footer'

import input_01 from '../components/shared/inputs/input-01'


Vue.component('card-info', CardInfo)
Vue.component('modal', Modal)
Vue.component('item', item)
Vue.component('itens-col3', itens_col3)
Vue.component('section-left', sectionLeft)
Vue.component('section-right', sectionRight)
Vue.component('section-top', sectionTop)
Vue.component('section-full', sectionFull)
Vue.component('section-form', sectionForm)

Vue.component('button-01', button_01)
Vue.component('button-02', button_02)
Vue.component('button-03', button_03)
Vue.component('menu-01', menu_01)
Vue.component('change', change)
Vue.component('footer-01', footer)

Vue.component('input-01', input_01)
