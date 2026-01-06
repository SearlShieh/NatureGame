<template>
  <div class="container">
    <!-- <div class="container_menu">
      <div class="container_menu_item" style="margin-right: 10px;" @click="changeType" >
        <img width="25" src="@/assets/SixGame/icon-1.png"></img>
          切换{{isShengdan? '普通': '圣诞' }}版
      </div>
    </div> -->

    <div class="container_menu">
      <div v-for="item in GameDataSmall" 
      @click="size=item.value"
      :class="{'container_menu_item_active': item.value===size}" class="container_menu_item" :key="item.value">
        <img v-if="item.value===size" width="25" src="@/assets/SixGame/icon-2.png"></img>
        <img v-else  width="25" src="@/assets/SixGame/icon-1.png"></img>
        <span>{{ item.name }}</span>
        <div class="money">
          <img width="12" src="/public/logo.png" style="margin-right: 2px"></img>{{ item.money }}
        </div>
      </div>
    </div>
    <div class="container_menu">
      <div v-for="item in GameData" 
      @click="size=item.value"
      :class="{'container_menu_item_active': item.value===size}" class="container_menu_item" :key="item.value">
        <img v-if="item.value===size" width="25" src="@/assets/SixGame/icon-2.png"></img>
        <img v-else  width="25" src="@/assets/SixGame/icon-1.png"></img>
        <span>{{ item.name }}</span>
        <div class="money">
          <img width="12" src="/public/logo.png" style="margin-right: 2px"></img>{{ item.money }}
        </div>
      </div>
    </div>
    <div class="container_menu">
      <div v-for="item in GameDataBig" 
      @click="size=item.value"
      :class="{'container_menu_item_active': item.value===size}" class="container_menu_item" :key="item.value">
        <img v-if="item.value===size" width="25" src="@/assets/SixGame/icon-2.png"></img>
        <img v-else  width="25" src="@/assets/SixGame/icon-1.png"></img>
        <span>{{ item.name }}</span>
        <div class="money">
          <img width="12" src= "/public/logo.png" style="margin-right: 2px"></img>{{ item.money }}
        </div>
      </div>
    </div>
    <keep-alive>
      <IndexItem ref="IndexItemChild" :key="size" :size="size" :isShengdan="isShengdan"/>
    </keep-alive>
  </div>
</template>

<script setup lang="ts">
  import { GameData, GameDataSmall, GameDataBig } from './data';
  import { onMounted, onActivated, onUnmounted, ref, computed } from 'vue';
  import IndexItem from './IndexItem.vue';
  const size = ref(6);
  const isShengdan = ref(true)
  const IndexItemChild = ref(null)

  onMounted(() => {});
  const changeType = ()=>{
    isShengdan.value = !isShengdan.value
    IndexItemChild.value && IndexItemChild.value.refresh()
  }
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    height: 95vh;
    width: 100vw;
    // background: #90defb;
    background: #fed730;
    background-size: 100% 100%;
  }
</style>
<style lang="scss" >
  body{
    font-size: 12px;
  }
  .container_menu {
    display: flex;
    align-items: center;
    margin: 1vh auto;
    flex-wrap: wrap;
    justify-content: center;
    &_item {
      background: #fdf8d2;
      padding: 2px 10px 2px 4px;
      border-radius: 8px;
      color: #b5590f;
      position: relative;
      border: 2px solid #b5590f;
      display: flex;
      align-items: center;
      justify-content: center;
      & > img{
        margin-right: 2px;
      }
      &:nth-of-type(n + 2) {
        margin-left: 0.5vw;
      }
      & .money{
        position: absolute;
        bottom: -12px;
        font-size: 14px;
        left: 50%;
        transform: translateX(-50%);
        white-space: nowrap;
      }
      &_active{
         background: #fed507;
      }
    }
  }
</style>
