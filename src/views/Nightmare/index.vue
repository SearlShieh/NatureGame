<template>
  <div style="padding: 1vh 1vw">
    <el-tabs
      v-model="firstValue"
      type="border-card"
      class="demo-tabs"
      @tab-click="handleClickFirst"
    >
      <el-tab-pane
        v-for="firstItem in NightmareData"
        :key="firstItem.name"
        :label="firstItem.name"
        :name="firstItem.name"
      >
        <div style="height: calc(100vh - 80px); overflow-y: auto; overflow-x: hidden">
          <el-tabs class="second_tab" v-model="secondValue">
            <el-tab-pane
              v-for="secondItem in firstItem.data"
              :key="secondItem.name + 'second'"
              :label="secondItem.name"
              :name="secondItem.name"
            >
              <div style="margin-bottom: 10px">
                <el-tag
                  v-for="(item, tipIndex) in secondItem.size"
                  :key="item + 'tip'"
                  :type="tagType[tipIndex % 5]"
                  style="margin-right: 2px; margin-bottom: 2px"
                  @click="gotoImage(item)"
                >
                  <span style="color: red">{{ item }}</span>
                  . {{ secondItem.tip?.[item] || '-' }}
                </el-tag>
              </div>
              <template v-for="item in secondItem.size" :key="item">
                <div :id="`${firstItem.name}_${secondItem.name}_${item}`" style="font-weight: bold">
                  {{ item }}. {{ secondItem.tip?.[item] || '-' }}
                </div>
                <el-image
                  class="img_item"
                  :src="getImageUrl(firstItem, secondItem, item)"
                  :zoom-rate="1.2"
                  :max-scale="7"
                  :min-scale="0.2"
                  :preview-src-list="[getImageUrl(firstItem, secondItem, item)]"
                  show-progress
                  :initial-index="0"
                  fit="contain"
                  style="margin-bottom: 8px"
                />
              </template>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, onActivated, onUnmounted, ref } from 'vue';
  import { NightmareData } from './data';
  defineOptions({ name: 'Test' });

  const firstValue = ref('上');
  const secondValue = ref('上');
  const tagType = ['primary', 'success', 'info', 'warning', 'danger'];

  const handleClickFirst = (tab: any, event: Event) => {
    window.scrollTo(0, 0);
    secondValue.value = NightmareData[tab.index].data[0].name;
  };

  const getImageUrl = (firstItem: any, secondItem: any, itemIndex: number) => {
    return new URL(
      `../../assets/Nightmare/${firstItem.name}/${secondItem.name}/${itemIndex}.png`,
      import.meta.url
    ).href;
  };

  const gotoImage = (item: number) => {
    const id = `${firstValue.value}_${secondValue.value}_${item}`;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  onMounted(() => {});
</script>

<style>
  .img_item {
    max-width: 100vw;
    max-height: 100vh;
    min-width: 40vw;
  }
  .second_tab .el-tabs__nav {
    display: flex;
    flex-wrap: wrap;
  }
  .second_tab .el-tabs__item {
    border: 1px solid #efefef;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 16px !important;
  }
  .second_tab .el-tabs__item.is-active {
    color: #fff !important;
    border: 1px solid #4f92ff !important;
    background: #4f92ff !important;
  }
  .second_tab .el-tabs__nav-wrap:after,
  .second_tab .el-tabs__active-bar {
    display: none !important;
  }

  .el-tabs--border-card > .el-tabs__content {
    padding: 8px;
  }

  .second_tab .el-tabs__content {
    padding: 0 !important;
  }
</style>
