<template>
  <div>
    <v-header></v-header>

    <v-main></v-main>
  </div>
</template>
<script>
  import header from '../header/header.vue'
  import main from '../main.vue'

  export default{
    data(){
      return {
        msg: 'hello vue'
      }
    },
    components: {
      'v-header': header,
      'v-main':main
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin";
  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    // border-bottom: 1px solid rgba(7, 17, 27, 0.1)
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex: 1
      text-align: center
      & > a
        display: block
        font-size: 14px
        color: rgb(77, 85, 93)
        &.active
          color: rgb(240, 20, 20)
</style>

