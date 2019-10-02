import Vue from 'vue'

// *********** COMPONENTES ***********

import CardInfo from '../components/shared/CardInfo'
import CardSimple from '../components/shared/CardSimple'
import CardSimple2 from '../components/shared/CardSimple2'
import CardSimple3 from '../components/shared/CardSimple3'
import Modal from '../components/shared/modal'

// *********** TEMPLATES ***********

// ==== ITENS ====
import itens_col2_model1 from '../components/templates/itens-col2-model1'
  Vue.component('itens-col2-model1', itens_col2_model1)
import itens_col2_model2 from '../components/templates/itens-col2-model2'
  Vue.component('itens-col2-model2', itens_col2_model2)
import itens_col2_model3 from '../components/templates/itens-col2-model3'
  Vue.component('itens-col2-model3', itens_col2_model3)
import itens_col3_model1 from '../components/templates/itens-col3-model1'
  Vue.component('itens-col3-model1', itens_col3_model1)
import itens_col3_model2 from '../components/templates/itens-col3-model2'
  Vue.component('itens-col3-model2', itens_col3_model2)
import itens_col3_model3 from '../components/templates/itens-col3-model3'
  Vue.component('itens-col3-model3', itens_col3_model3)
import itens_col3_model4 from '../components/templates/itens-col3-model4'
  Vue.component('itens-col3-model4', itens_col3_model4)
import itens_col3_partners from '../components/templates/itens-col3-partners'
  Vue.component('itens-col3-partners', itens_col3_partners)
import itens_col4_model1 from '../components/templates/itens-col4-model1'
  Vue.component('itens-col4-model1', itens_col4_model1)
import itens_col4_model2 from '../components/templates/itens-col4-model2'
  Vue.component('itens-col4-model2', itens_col4_model2)
import itens_col4_model3 from '../components/templates/itens-col4-model3'
  Vue.component('itens-col4-model3', itens_col4_model3)
import itens_col4_partners from '../components/templates/itens-col4-partners'
  Vue.component('itens-col4-partners', itens_col4_partners)

// ==== SECTIONS ====
import sectionLeft from '../components/templates/section-left'
  Vue.component('section-left', sectionLeft)
import sectionLeft_Itens from '../components/templates/section-left-itens'
  Vue.component('section-left-itens', sectionLeft_Itens)
import sectionRight from '../components/templates/section-right'
  Vue.component('section-right', sectionRight)
import sectionRight_Itens from '../components/templates/section-right-itens'
  Vue.component('section-right-itens', sectionRight_Itens)
import sectionTop from '../components/templates/section-top'
  Vue.component('section-top', sectionTop)
import sectionFull from '../components/templates/section-full'
import sectionForm from '../components/templates/section-form'

// ==== BUTTONS ====
import button_01 from '../components/shared/buttons/button-01'
import button_02 from '../components/shared/buttons/button-02'
import button_03 from '../components/shared/buttons/button-03'

// ==== MENUS ====
import menu_01 from '../components/shared/menu-01'
// DEFAULT FOR NAVIGATE ON THE SYSTEM
import navigation from '../components/shared/navigation'
import navigationLeft from '../components/shared/navigation-left'
import navComponents from '../components/shared/nav-components'

// ==== INPUTS ====
import input_01 from '../components/shared/inputs/input-01'

// ==== FOOTERS ====
import footer from '../components/templates/footer'



Vue.component('card-info', CardInfo)
Vue.component('card-simple', CardSimple)
Vue.component('card-simple2', CardSimple2)
Vue.component('card-simple3', CardSimple3)
Vue.component('modal', Modal)



Vue.component('section-full', sectionFull)
Vue.component('section-form', sectionForm)

Vue.component('button-01', button_01)
Vue.component('button-02', button_02)
Vue.component('button-03', button_03)
Vue.component('menu-01', menu_01)
Vue.component('footer-01', footer)

Vue.component('input-01', input_01)

Vue.component('navigation', navigation)
Vue.component('navigation-left', navigationLeft)
Vue.component('nav-components', navComponents)
