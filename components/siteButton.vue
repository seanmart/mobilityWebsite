<template lang="html">
  <nuxt-link class="button" :class="{small,big,lightblue,lightgreen}" :to="to">
    <p class="text"><slot/></p>
    <div class="tinter full-bleed"></div>
  </nuxt-link>
</template>

<script>
export default {
  props:{
    to: {type: String, default: '/'},
    lightblue: Boolean,
    lightgreen: Boolean,
    small: Boolean,
    big: Boolean
  }
}
</script>

<style lang="scss">
.button{
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;
  display: inline-block;
  position: relative;
  color: white;
  background: linear-gradient(175deg, $blue 0%, darken($blue,10) 100%);
  padding: 12px 20px;
  border-radius: 5px;
  overflow: hidden;

  &.small{
    font-size: 12px;
    padding: 10px 18px;
    border-radius: 3px;
  }

  &.big{
    padding: 16px 24px;
  }

  .text{
    position: relative;
    z-index: 1;
  }

  .tinter{
    opacity: 0;
    background: linear-gradient(175deg, $midnight 0%, darken($midnight,10) 100%);
    transition: opacity .25s, transform .25s;
  }

  &.lightblue{
    background: linear-gradient(175deg, $lightblue 0%, darken($lightblue,10) 100%);
  }

  &.lightgreen{
    background: linear-gradient(175deg, $lightgreen 0%, darken($lightgreen,10) 100%);
  }

  &:hover .tinter{
    opacity: .2;
  }

  &:active .tinter{
    opacity: .5;

  }
}
</style>
