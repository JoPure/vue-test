<template>
  <div>

    <!--tab面板切换-->
    <ul class="tab nav user-tab-bar">
      <li class="tab-item user-tab" :class="[currentTabIndex == 0 ? 'active': '']">
        <span v-on:click="switchTab(0)">商品</span></li>
      <li class="tab-item user-tab" :class="[currentTabIndex == 1 ? 'active': '']">
        <span v-on:click="switchTab(1)">评论</span>
      </li>
      <li class="tab-item user-tab" :class="[currentTabIndex == 2 ? 'active': '']">
        <span v-on:click="switchTab(2)">商家</span>
      </li>
    </ul>
    <div class="clear"></div>
    <div v-show="currentTabIndex==0">this is 商品 body


    </div>

    <div v-show="currentTabIndex == 1">this is 评论 body</div>

    <div v-show="currentTabIndex == 2">this is 商家 body</div>
  </div>
</template>
<style>
  body {
    background-color: white;
  }
</style>
<script>
  export default{
    data(){
      return {
        msg: 'hello vue',
        currentTabIndex: 0
      }
    },
    methods: {
      switchTab(index){
        this.currentTabIndex = index;
      },
    }
  }
</script>
<style>
  .nav {
    width: 100%;
    height: 40px;
    border-top: 0;
    background-color: #fff;
    text-align: center;
  }

  .user-tab-bar {
    margin-bottom: 1px;
    padding-left: 0;
    list-style: none;
    clear: both;
  }

  .user-tab-bar li {
    width: 33%;
    height: 100%;
    display: inline-block;
  }

  .user-tab-bar li.active span {
    border-bottom: 2px solid #f9752b;
    color: #f9752b;
  }

  .user-tab-bar li span {
    display: block;
    font-size: 16px;
    color: #888;
    margin: 0 8px;
    text-align: center;
    position: relative;
  }

</style>
