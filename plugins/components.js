import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

// ==== ITENS ====
import itens_col2_model1 from '../components/templates/itens-col2-model1'
import itens_col2_model2 from '../components/templates/itens-col2-model2'
import itens_col2_model3 from '../components/templates/itens-col2-model3'
import itens_col3_model1 from '../components/templates/itens-col3-model1'
import itens_col3_model2 from '../components/templates/itens-col3-model2'
import itens_col3_model3 from '../components/templates/itens-col3-model3'
import itens_col3_model4 from '../components/templates/itens-col3-model4'
import itens_col3_model5 from '../components/templates/itens-col3-model5'
// import itens_col3_partners from '../components/templates/itens-col3-partners'
import itens_col4_model1 from '../components/templates/itens-col4-model1'
import itens_col4_model2 from '../components/templates/itens-col4-model2'
import itens_col4_model3 from '../components/templates/itens-col4-model3'
import itens_services from '../components/shared/itens-services'
// import itens_col4_partners from '../components/templates/itens-col4-partners'

// ==== SECTIONS ====
import sectionLeft from '../components/templates/section-left'
import sectionLeft02 from '../components/templates/section-left02'
import sectionLeft_Itens_Model1 from '../components/templates/section-left-itens-model1'
import sectionLeft_Itens_Model2 from '../components/templates/section-left-itens-model2'
import sectionLeft_Itens_Model3 from '../components/templates/section-left-itens-model3'
import sectionRight from '../components/templates/section-right'
import sectionRight_Itens_Model1 from '../components/templates/section-right-itens-model1'
import sectionRight_Itens_Model2 from '../components/templates/section-right-itens-model2'
import sectionRight_Itens_Model3 from '../components/templates/section-right-itens-model3'
import sectionTop from '../components/templates/section-top'
import sectionFull from '../components/templates/section-full'
import sectionFormLeft from '../components/templates/section-form-left'
import sectionFormRight from '../components/templates/section-form-right'
import sectionFormFull from '../components/templates/section-form-full'
import sectionParalax from '../components/templates/section-paralax'
import sectionParalaxScroll from '../components/templates/section-paralax-scroll'
import sectionCtaModel1 from '../components/templates/section-cta-model1'
import sectionCtaModel2 from '../components/templates/section-cta-model2'
import titleSection from '../components/templates/title-section'
import titleSection_02 from '../components/templates/title-section-02'
import portfolioImages from '../components/templates/portfolio-images'
import about_01 from '../components/templates/about-01'
import about_02 from '../components/templates/about-02'

// ==== BUTTONS ====
import button_01 from '../components/shared/buttons/button-01'
import button_02 from '../components/shared/buttons/button-02'
import button_03 from '../components/shared/buttons/button-03'
import button_04 from '../components/shared/buttons/button-04'

// ==== MENUS ====
import menu_01 from '../components/shared/menu-01'
// DEFAULT FOR NAVIGATE ON THE SYSTEM
import navigation from '../components/shared/navigation'
import navigationLeft from '../components/shared/navigation-left'
import navComponents from '../components/shared/nav-components'
import navElements from '../components/shared/nav-elements'

// ==== INPUTS ====
import input_01 from '../components/shared/inputs/input-01'

// ==== FOOTERS ====
import footer from '../components/templates/footer'
import footer_02 from '../components/templates/footer-02'
import footerSimple from '../components/templates/footer-simple'

// ==== MODAL ====
import Modal from '../components/shared/modal'

// ==== CARDINFOS ====
import CardInfo1 from '../components/shared/CardInfo1'
import CardInfo2 from '../components/shared/CardInfo2'
import CardInfo3 from '../components/shared/CardInfo3'
import CardInfo4 from '../components/shared/CardInfo4'

// ==== SLIDESHOW ==== 
import slideshow from '../components/shared/slideshow'
import slideshow_02 from '../components/shared/slideshow-02'

// ==== ELEMENTS ====
import tooltip from "../components/shared/tooltip"
import loader01 from "../components/shared/loader01"
import loader02 from "../components/shared/loader02"
import loader03 from "../components/shared/loader03"
import loader04 from "../components/shared/loader04"
import loader05 from "../components/shared/loader05"
import loader06 from "../components/shared/loader06"
import loader07 from "../components/shared/loader07"
import loader08 from "../components/shared/loader08"
import loader09 from "../components/shared/loader09"

import {
  Hooper,
  Slide,
  Navigation as HooperNavigation
  } from 'hooper'

library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('hooper', Hooper)
Vue.component('slide', Slide)
Vue.component('hooper-navigation', HooperNavigation)
Vue.component('card-info1', CardInfo1)
Vue.component('card-info2', CardInfo2)
Vue.component('card-info3', CardInfo3)
Vue.component('card-info4', CardInfo4)
Vue.component('modal', Modal)
Vue.component('itens-col2-model1', itens_col2_model1)
Vue.component('itens-col2-model2', itens_col2_model2)
Vue.component('itens-col2-model3', itens_col2_model3)
Vue.component('itens-col3-model1', itens_col3_model1)
Vue.component('itens-col3-model2', itens_col3_model2)
Vue.component('itens-col3-model3', itens_col3_model3)
Vue.component('itens-col3-model4', itens_col3_model4)
Vue.component('itens-col3-model5', itens_col3_model5)
// Vue.component('itens-col3-partners', itens_col3_partners)
Vue.component('itens-col4-model1', itens_col4_model1)
Vue.component('itens-col4-model2', itens_col4_model2)
Vue.component('itens-col4-model3', itens_col4_model3)
Vue.component('itens-services', itens_services)
// Vue.component('itens-col4-partners', itens_col4_partners)
Vue.component('title-section', titleSection)
Vue.component('title-section-02', titleSection_02)
Vue.component('section-left', sectionLeft)
Vue.component('section-left-02', sectionLeft02)
Vue.component('section-right', sectionRight)
Vue.component('section-left-itens-model1', sectionLeft_Itens_Model1)
Vue.component('section-left-itens-model2', sectionLeft_Itens_Model2)
Vue.component('section-left-itens-model3', sectionLeft_Itens_Model3)
Vue.component('section-right-itens-model1', sectionRight_Itens_Model1)
Vue.component('section-right-itens-model2', sectionRight_Itens_Model2)
Vue.component('section-right-itens-model3', sectionRight_Itens_Model3)
Vue.component('section-top', sectionTop)
Vue.component('section-full', sectionFull)
Vue.component('section-form-left', sectionFormLeft)
Vue.component('section-form-right', sectionFormRight)
Vue.component('section-form-full', sectionFormFull)
Vue.component('section-paralax', sectionParalax)
Vue.component('section-paralax-scroll', sectionParalaxScroll)
Vue.component('section-cta-model1', sectionCtaModel1)
Vue.component('section-cta-model2', sectionCtaModel2)
Vue.component('portfolio-images', portfolioImages)
Vue.component('about-01', about_01)
Vue.component('about-02', about_02)

Vue.component('slideshow-01', slideshow)
Vue.component('slideshow-02', slideshow_02)

Vue.component('button-01', button_01)
Vue.component('button-02', button_02)
Vue.component('button-03', button_03)
Vue.component('button-04', button_04)
Vue.component('menu-01', menu_01)
Vue.component('footer-01', footer)
Vue.component('footer-02', footer_02)
Vue.component("tooltip", tooltip)
Vue.component("loader-01", loader01)
Vue.component("loader-02", loader02)
Vue.component("loader-03", loader03)
Vue.component("loader-04", loader04)
Vue.component("loader-05", loader05)
Vue.component("loader-06", loader06)
Vue.component("loader-07", loader07)
Vue.component("loader-08", loader08)
Vue.component("loader-09", loader09)

Vue.component('input-01', input_01)

Vue.component('navigation', navigation)
Vue.component('navigation-left', navigationLeft)
Vue.component('nav-components', navComponents)
Vue.component('nav-elements', navElements)
