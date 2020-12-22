<template lang="html">
  <main id="home">

    <site-landing :data="data.landing"/>

    <div class="services">
      <div class="responsive-container">

      </div>
    </div>



  </main>
</template>

<script>
import data from '@/assets/data/home'
export default {
  data:()=>({data})
}
</script>

<style lang="scss">
#home{
  .services{
    
  }
}
</style>
