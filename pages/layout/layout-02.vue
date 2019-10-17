<template lang="pug">
  div.main
    menu-01(:menus="menus")
    section.banner
      div.limit
        section-left-02(
          title="We're a digital agency."
          describe="A Symma trará o primeiro banco mundial de ether, 50% de seu investimento será revertido para impulsionar a usabilidade da moeda, possibilitando futuramente até mesmo saques e investimentos em start-ups!"
          buttonText="Saiba mais"
          linkSaiba="#"
        )
      div.limit
        itens-col3-model4
    div.pd-50.linefix
      div.line
    section.services
      div.limit
        title-section( title="Services" description="será revertido para impulsionar")
        itens-col3-model5
    div.pd-50
      div.line
    section
      div.limit
        title-section( title="Works" description="será revertido para impulsionar")
        portfolio-images
    div.pd-50
      div.line
    section
      div.limit
        title-section( title="About" description="será revertido para impulsionar")
        about-02
    div.pd-50
      div.line
    footer-02
    footer-03
</template>

<script>
export default {
  data(){
    return {
      menus: ['Home','Services','Works','About']
    }
  }
}
</script>

<style lang="sass">
  .main 
    background-color: $bgGray
    min-height: 100vh
    padding-top: 90px
    .line 
      height: 50px
      width: 1px
      margin: auto
      border-left: 2px solid $hoverRed
    .banner 
      background-image: url('../../assets/img/agency/face.jpg')
      background-size: cover
      background-position: top
      background-attachment: fixed
    .limit, header, .head-footer, footer .content-footer 
      max-width: 1024px
      margin: auto
    h2 
      color: $white
    .pd-50 
      padding: 100px 0
    .linefix
      padding-top: 0px
      margin-top: -60px
    .section-03 
      padding: 100px 0px
    #menu .menu-desk li
      &:hover 
        border-bottom: 1px solid $hoverRed
    .btn 
      padding: 15px 30px
</style>