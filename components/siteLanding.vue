<template lang="html">
  <section class="landing">
    <div v-if="data.background" class="full-bleed background" :style="data.background"/>
    <div v-if="data.foreground" class="full-bleed foreground" :style="data.foreground"/>

    <div class="responsive-container">
      <div class="content">
        <h1 v-if="data.title" class="title--1" v-html="data.title"/>
        <p v-if="data.body" class="body body--3" v-html="data.body"/>
        <site-button v-if="data.link" :to="data.link.href" big>{{data.link.text}}</site-button>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  props:{
    data:{type: Object, default: ()=>({})}
  },
  computed:{
    backgroundColor(){
      return this.data.backgroundColor ? {background: this.data.backgroundColor} : {}
    }
  }
}
</script>

<style lang="scss">
.landing{
  position: relative;
  z-index: 1;

  .background{z-index: -1}
  .foreground{z-index: 0}

  .content{
    position: relative;
    z-index: 1;
    padding: 175px 0px;
    max-width: 500px;

    .body{
      margin-top: 35px;
    }

    .button{
      margin-top: 70px;
    }
  }
}
</style>
