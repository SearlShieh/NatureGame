<template>
  <div class="container_box">
    <div class="container">
    <div class="container_menu" style="margin-top: 12vw">
      <div class="container_menu_item container_menu_item-em" style="margin-right: 6px;" :class="{'container_menu_item_active': mapType==='em'}" @click="changeType('em')" >
        <!-- <img v-if="mapType==='em'" width="25" src="@/assets/SixGame/btn/em.png"></img>
        <img v-else width="25" src="@/assets/SixGame/icon-1.png"></img>
        昆仑噩梦版 -->
      </div>
      <div class="container_menu_item container_menu_item-ly" :class="{'container_menu_item_active': mapType==='ly'}" @click="changeType('ly')" >
        <!-- <img v-if="mapType==='ly'" width="25" src="@/assets/SixGame/icon-2.png"></img>
        <img v-else  width="25" src="@/assets/SixGame/icon-1.png"></img>
        秦岭炼狱版 -->
      </div>
    </div>

    <div class="container_menu" style="margin-top: 1vw">
      <div v-for="item in GameData" 
      @click="size=item.value" :key="item.value">
        <img style="width: 8vw;" :style="{'opacity': size===item.value? 1: 0.8}" :src="getNumberImageUrl(String(item.value))"></img>
      </div>
    </div>
    <keep-alive>
      <IndexItem ref="IndexItemChild" :mapType="mapType" :key="size + mapType" :size="size"/>
    </keep-alive>
  </div>
  </div>
</template>

<script setup lang="ts">
  import { GameData } from './data';
  import { onMounted, onActivated, onUnmounted, ref, computed } from 'vue';
  import IndexItem from './IndexItem.vue';
  const size = ref(6);
  const mapType = ref('ly')
  const IndexItemChild = ref(null)

  onMounted(() => {});
  const changeType = (type: string)=>{
    mapType.value = type
  }

  const getNumberImageUrl = (name: string|number) => {
    return new URL(`../../assets/SixGame/btn/${name}.png`, import.meta.url).href;
  }
</script>

<style lang="scss" scoped>
.container_box{
  background: #b3161e;
  height: 100vh;
  width: 100vw;
}
  .container {
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 100vw;
    background: url('../../assets/SixGame/bgV2.png');
    background-size: 100% 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 133.6vw;
    padding-top: 3vw;
  }
</style>
<style lang="scss" >
  body{
    font-size: 12px;
  }
  .container_menu {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    &_item {
      background-size:  100% 100%;
      height: 30px;
      width: 70px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 4px;
      opacity: .8;
      &-em{
        background-image: url('../../assets/SixGame/btn/em.png')
      }
      &-ly{
        background-image: url('../../assets/SixGame/btn/ly.png')
      }
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
        //  background: #fed507;
        opacity: 1;
      }
    }
  }
</style>
