import Vue from 'vue'

// ==== ITENS ====
import itens_col2_model1 from '../components/templates/itens-col2-model1'
import itens_col2_model2 from '../components/templates/itens-col2-model2'
import itens_col2_model3 from '../components/templates/itens-col2-model3'
import itens_col3_model1 from '../components/templates/itens-col3-model1'
import itens_col3_model2 from '../components/templates/itens-col3-model2'
import itens_col3_model3 from '../components/templates/itens-col3-model3'
// import itens_col3_partners from '../components/templates/itens-col3-partners'
import itens_col4_model1 from '../components/templates/itens-col4-model1'
import itens_col4_model2 from '../components/templates/itens-col4-model2'
import itens_col4_model3 from '../components/templates/itens-col4-model3'
// import itens_col4_partners from '../components/templates/itens-col4-partners'

// ==== SECTIONS ====
import sectionLeft from '../components/templates/section-left'
import sectionLeft_Itens from '../components/templates/section-left-itens'
import sectionRight from '../components/templates/section-right'
import sectionRight_Itens from '../components/templates/section-right-itens'
import sectionTop from '../components/templates/section-top'
import sectionFull from '../components/templates/section-full'
import sectionFormLeft from '../components/templates/section-form-left'
import sectionFormRight from '../components/templates/section-form-right'
import sectionFormFull from '../components/templates/section-form-full'

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

// ==== MODAL ====
import Modal from '../components/shared/modal'

// ==== CARDINFOS ====
import CardInfo1 from '../components/shared/CardInfo1'
import CardInfo2 from '../components/shared/CardInfo2'
import CardInfo3 from '../components/shared/CardInfo3'


Vue.component('card-info1', CardInfo1)
Vue.component('card-info2', CardInfo2)
Vue.component('card-info3', CardInfo3)
Vue.component('modal', Modal)
Vue.component('itens-col2-model1', itens_col2_model1)
Vue.component('itens-col2-model2', itens_col2_model2)
Vue.component('itens-col2-model3', itens_col2_model3)
Vue.component('itens-col3-model1', itens_col3_model1)
Vue.component('itens-col3-model2', itens_col3_model2)
Vue.component('itens-col3-model3', itens_col3_model3)
// Vue.component('itens-col3-partners', itens_col3_partners)
Vue.component('itens-col4-model1', itens_col4_model1)
Vue.component('itens-col4-model2', itens_col4_model2)
Vue.component('itens-col4-model3', itens_col4_model3)
// Vue.component('itens-col4-partners', itens_col4_partners)
Vue.component('section-left', sectionLeft)
Vue.component('section-right', sectionRight)
Vue.component('section-left-itens', sectionLeft_Itens)
Vue.component('section-right-itens', sectionRight_Itens)
Vue.component('section-top', sectionTop)
Vue.component('section-full', sectionFull)
Vue.component('section-form-left', sectionFormLeft)
Vue.component('section-form-right', sectionFormRight)
Vue.component('section-form-full', sectionFormFull)


Vue.component('button-01', button_01)
Vue.component('button-02', button_02)
Vue.component('button-03', button_03)
Vue.component('menu-01', menu_01)
Vue.component('footer-01', footer)

Vue.component('input-01', input_01)

Vue.component('navigation', navigation)
Vue.component('navigation-left', navigationLeft)
Vue.component('nav-components', navComponents)
