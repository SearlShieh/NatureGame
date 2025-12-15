<template>
  <div class="container">
    <div class="container_menu">
      <div v-for="item in GameData" 
      @click="size=item.value"
      :class="{'container_menu_item_active': item.value===size}" class="container_menu_item" :key="item.value">
        <span>{{ item.name }}星连珠</span>
        <div class="money">
          <img width="12" src="@/assets/SixGame/money.png"></img>{{ item.money }}
        </div>
      </div>
    </div>
    <keep-alive>
      <IndexItem :key="size" :size="size" />
    </keep-alive>
  </div>
</template>

<script setup lang="ts">
  import { GameData } from './data';
  import { onMounted, onActivated, onUnmounted, ref, computed } from 'vue';
  import IndexItem from './IndexItem.vue';
  const size = ref(6);

  onMounted(() => {});
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    height: 96vh;
    width: 100vw;
    // background: url('../../assets//SixGame/bg.png');
    background: #90defb;
    background-size: 100% 100%;
  }
  .container_menu {
    display: flex;
    align-items: center;
    margin: 2vh auto;
    flex-wrap: wrap;
    justify-content: center;
    &_item {
      background: linear-gradient(
        90deg,
        rgba(54, 103, 250, 0.1) 0,
        rgba(184, 160, 244, 0.1) 48.8%,
        rgba(243, 145, 57, 0.1) 100%
      );
      padding: 6px 6px;
      border-radius: 8px;
      color: #fff;
      position: relative;
      &:nth-of-type(n + 2) {
        margin-left: 0.5vw;
      }
      & .money{
        position: absolute;
        bottom: -10px;
        font-size: 14px;
        left: 50%;
        transform: translateX(-50%);
        white-space: nowrap;
      }
      &_active{
         background: linear-gradient(
        90deg,
        rgba(54, 103, 250, 0.5) 0,
        rgba(184, 160, 244, 0.5) 48.8%,
        rgba(243, 145, 57, 0.5) 100%
        );
      }
    }
  }
</style>
