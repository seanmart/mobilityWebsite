<template lang="html">
  <header>
    <div class="background full-bleed"/>
    <div class="responsive-container wrapper">
      <nuxt-link to="/"><site-logo class="logo-header"/></nuxt-link>
      <nav>
        <nuxt-link class="page-link" v-html="'Services'" to="/services"/>
        <nuxt-link class="page-link" v-html="'About'" to="/about"/>
        <nuxt-link class="page-link" v-html="'News'" to="/news"/>

        <site-button class="external-link" to="/" small>Dealer Portal</site-button>
        <site-button class="external-link" to="/" lightblue small>Make A Payment</site-button>
        <site-button class="external-link" to="/" lightgreen small>Investors Relations</site-button>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  mounted(){

    let tl = gsap.timeline({
      scrollTrigger:{
        trigger: 'body',
        start: 'top top',
        end: '200px',
        scrub: true
      }
    })

    tl.to('header',1,{y:0,ease: 'Power2.in'},0)
    tl.to('header .logo-header',1,{scale:.9, ease: 'Power2.in'},0)
    tl.to('header .background',1,{opacity: 1,ease: 'Power2.in'},.2)
  }
}
</script>

<style lang="scss">
$headerOffset: 50px;

header{
  position: fixed;
  z-index: 100;
  top: 0px;
  left: 0px;
  right: 0px;
  transform: translateY($headerOffset);

  .background{
    background: white;
    z-index: -1;
    opacity: 0;
    top: -$headerOffset;
    box-shadow: 0px 1px 5px rgba(0,0,0,.05);
  }

  .wrapper{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .logo-header{
    width: 200px;
    transform-origin: left;
  }

  nav{
    display: flex;
    flex-direction: row;
    align-items: center;
    color: $midnight;

    .page-link{
      padding: 5px;
      margin-right: 30px;
    }

    .external-link{
      margin-right: 7px;
      &:last-child{
        margin-right: 0px;
      }
    }
  }
}
</style>
