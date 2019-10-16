<template lang="pug">
  div.main
    section.banner
      section-left-02(
        title="We're a digital agency."
        describe="A Symma trará o primeiro banco mundial de ether, 50% de seu investimento será revertido para impulsionar a usabilidade da moeda, possibilitando futuramente até mesmo saques e investimentos em start-ups!"
        buttonText="Saiba mais"
        linkSaiba="#"
      )
      div.limit
        itens-col3-model4
    section.pd-50.services
      div.limit
        title-section( title="Services" description="será revertido para impulsionar")
        itens-col3-model5
    section.pd-50
      div.limit
        title-section( title="Works" description="será revertido para impulsionar")
        portfolio-images
    section.pd-50
      div.limit
        title-section( title="About" description="será revertido para impulsionar")
        about-02
</template>

<style lang="sass">
  .main 
    background-color: $bgGray
    min-height: 100vh
    .banner 
      background-image: url('../../assets/img/agency/face.jpg')
      background-size: cover
      background-position: top
      background-attachment: fixed
    .limit
      max-width: 1200px
      margin: auto
    h2 
      color: $white
    .pd-50 
      padding: 100px 0
</style>