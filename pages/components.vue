<template lang="pug">
  div.components
    //- NAVEGACAO COMPONENTES
    div.nav-comp
      nav-components
    div.content-comp 
      div.division#itens-col2-model1 
        h3 itens-col2-model1
        itens-col2-model1
      div.division#itens-col2-model2 
        h3 itens-col2-model2
        itens-col2-model2
      div.division#itens-col2-model3 
        h3 itens-col2-model3
        itens-col2-model3
      div.division#itens-col3-model1 
        h3 itens-col3-model1
        itens-col3-model1
      div.division#itens-col3-model2 
        h3 itens-col3-model2
        itens-col3-model2
      div.division#itens-col3-model3 
        h3 itens-col3-model3
        itens-col3-model3
      div.division#itens-col3-model4 
        h3 itens-col3-model4
        itens-col3-model4
      div.division#itens-col3-model5 
        h3 itens-col3-model5
        itens-col3-model5
      div.division#itens-col4-model1 
        h3 itens-col4-model1
        itens-col4-model1
      div.division#itens-col4-model2 
        h3 itens-col4-model2
        itens-col4-model2
      div.division#itens-col4-model3 
        h3 itens-col4-model3
        itens-col4-model3
      div.division#portfolio-images 
        h3 portfolio-images
        portfolio-images
      div.division#title-section
        h3 title-section 
        title-section( title="Services" description="será revertido para impulsionar")
      div.division#section-top 
        h3 Section-Top
        section-top(:images="require('../assets/img/vue.png')")
      div.division#section-full 
        h3 Section-Full
        section-full(:images="require('../assets/img/vue.png')")
      div.division#section-right 
        h3 Section-Right
        section-right(
          :images="require('../assets/img/vue.png')"
          title="Comprando Symma você se torna parte da Etherdam!"
          describe="A Symma trará o primeiro banco mundial de ether, 50% de seu investimento será revertido para impulsionar a usabilidade da moeda, possibilitando futuramente até mesmo saques e investimentos em start-ups!"
          buttonText="Saiba mais"
          linkSaiba="#"
        )
      div.division#section-right-itens-model1
        h3 Section-Right-Itens-model1
        section-right-itens-model1(
          :images="require('../assets/img/vue.png')"
          title="Comprando Symma você se torna parte da Etherdam!"
          describe="A Symma trará o primeiro banco mundial de ether, 50% de seu investimento será revertido para impulsionar a usabilidade da moeda, possibilitando futuramente até mesmo saques e investimentos em start-ups!"
          buttonText="Saiba mais"
          linkSaiba="#"
        )
      div.division#section-right-itens-model2
        h3 Section-Right-Itens-model2
        section-right-itens-model2(
          :images="require('../assets/img/vue.png')"
          title="Comprando Symma você se torna parte da Etherdam!"
          describe="A Symma trará o primeiro banco mundial de ether, 50% de seu investimento será revertido para impulsionar a usabilidade da moeda, possibilitando futuramente até mesmo saques e investimentos em start-ups!"
          buttonText="Saiba mais"
          linkSaiba="#"
        )
      div.division#section-right-itens-model3
        h3 Section-Right-Itens-model3
        section-right-itens-model3(
          :images="require('../assets/img/vue.png')"
          title="Comprando Symma você se torna parte da Etherdam!"
          describe="A Symma trará o primeiro banco mundial de ether, 50% de seu investimento será revertido para impulsionar a usabilidade da moeda, possibilitando futuramente até mesmo saques e investimentos em start-ups!"
          buttonText="Saiba mais"
          linkSaiba="#"
        )
      div.division#section-left
        h3 Section-Left
        section-left(
          :images="require('../assets/img/vue.png')"
          title="Comprando Symma você se torna parte da Etherdam!"
          describe="A Symma trará o primeiro banco mundial de ether, 50% de seu investimento será revertido para impulsionar a usabilidade da moeda, possibilitando futuramente até mesmo saques e investimentos em start-ups!"
          buttonText="Saiba mais"
          linkSaiba="#"
        )
      div.division#section-left-02
        h3 Section-Left-02
        section-left-02(
          :images="require('../assets/img/agency/face.jpg')"
          title="We're a digital agency."
          describe="A Symma trará o primeiro banco mundial de ether, 50% de seu investimento será revertido para impulsionar a usabilidade da moeda, possibilitando futuramente até mesmo saques e investimentos em start-ups!"
          buttonText="Saiba mais"
          linkSaiba="#"
        )
      div.division#section-left-itens-model1
        h3 Section-Left-Itens-Model1
        section-left-itens-model1(
          :images="require('../assets/img/vue.png')"
          title="Comprando Symma você se torna parte da Etherdam!"
          describe="A Symma trará o primeiro banco mundial de ether, 50% de seu investimento será revertido para impulsionar a usabilidade da moeda, possibilitando futuramente até mesmo saques e investimentos em start-ups!"
          buttonText="Saiba mais"
          linkSaiba="#"
        )
      div.division#section-left-itens-model2
        h3 Section-Left-Itens-model2
        section-left-itens-model2(
          :images="require('../assets/img/vue.png')"
          title="Comprando Symma você se torna parte da Etherdam!"
          describe="A Symma trará o primeiro banco mundial de ether, 50% de seu investimento será revertido para impulsionar a usabilidade da moeda, possibilitando futuramente até mesmo saques e investimentos em start-ups!"
          buttonText="Saiba mais"
          linkSaiba="#"
        )
      div.division#section-left-itens-model3
        h3 Section-Left-Itens-model3
        section-left-itens-model3(
          :images="require('../assets/img/vue.png')"
          title="Comprando Symma você se torna parte da Etherdam!"
          describe="A Symma trará o primeiro banco mundial de ether, 50% de seu investimento será revertido para impulsionar a usabilidade da moeda, possibilitando futuramente até mesmo saques e investimentos em start-ups!"
          buttonText="Saiba mais"
          linkSaiba="#"
        )
      div.division#section-form-full
        h3 Section-Form-Full
        section-form-full(
          :images="require('../assets/img/vue.png')"
          title="Comprando Symma você se torna parte da Etherdam!"
          :fields="[{ value: '', valid: true, label: 'Teste do form', type: 'text', id: 'txt_teste' }]"
          buttonText="Enviar"
        )
      div.division#section-form-left
        h3 Section-Form-left
        section-form-left(
          :images="require('../assets/img/vue.png')"
          title="Comprando Symma você se torna parte da Etherdam!"
          :fields="[{ value: '', valid: true, label: 'Teste do form', type: 'text', id: 'txt_teste' }]"
          buttonText="Enviar"
        )
      div.division#section-form-right
        h3 Section-Form-right
        section-form-right(
          :images="require('../assets/img/vue.png')"
          title="Comprando Symma você se torna parte da Etherdam!"
          :fields="[{ value: '', valid: true, label: 'Teste do form', type: 'text', id: 'txt_teste' }]"
          buttonText="Enviar"
        )
      //- div.division#slideshow-01
      //-   slideshow-01( 
      //-     :itemsToShow="1"
      //-     :autoPlay="true"
      //-     :autoPlaySpeed="5000"
      //-     :progressBar="true"
      //-     :pagination="true"
      //-     :navigation="true"
      //-     :transitionSpeed="900"
      //-     :contentSlide="images")
      div.division#slider-02
        h3 Slidershow
        slideshow-02.slide(
          :navegacao="true"
          :paginacao="true"
          :imagesAmount="5"
          :ballsPosition="'leftbottom'"
          :intervalTime="4000"
          :autoPlay="true" )
          template( v-slot:slide1)
            img(src="../assets/img/agency/dev.jpg")
            h2 Um outro titulo super bacana aqui
            p E uma descrição de como esse fundo vermelho é inspirador
            p o que falaremos aqui? Eu não faço a menor ideia
            a( href="#" ) Bora pra outro link
          template( v-slot:slide2)
            img(src="../assets/img/agency/dev_02.jpg")
            h2 Um outro titulo super bacana aqui
            p E uma descrição de como esse fundo vermelho é inspirador
            p o que falaremos aqui? Eu não faço a menor ideia
            a( href="#" ) Bora pra outro link
          template( v-slot:slide3)
            img(src="../assets/img/agency/dev_03.jpg")
            h2 Um outro titulo super bacana aqui
            p E uma descrição de como esse fundo vermelho é inspirador
            p o que falaremos aqui? Eu não faço a menor ideia
            a( href="#" ) Bora pra outro link

          template( v-slot:slide4)
            img(src="../assets/img/agency/plan.jpg")
            h2 Um outro titulo super bacana aqui
            p E uma descrição de como esse fundo vermelho é inspirador
            p o que falaremos aqui? Eu não faço a menor ideia
            a( href="#" ) Bora pra outro link
          template( v-slot:slide5)
            img(src="../assets/img/agency/video.jpg")
            h2 Um outro titulo super bacana aqui
            p E uma descrição de como esse fundo vermelho é inspirador
            p o que falaremos aqui? Eu não faço a menor ideia
            a( href="#" ) Bora pra outro link
</template>

<style lang="sass" scoped>
  .components 
    display: grid
    background-color: $gray
    grid-template-columns: 175px auto
    font-family: $font
    .nav-comp 
      margin-right: 1px
    .division
      margin-bottom: 50px
      padding-bottom: 100px
      border-bottom: 1px solid $grayDark
      h3 
        padding-left: 40px
      .slide 
        overflow: hidden
        width: 100% 
        height: 100vh 
        margin: 0px auto
        img 
          opacity: 0.2
</style>