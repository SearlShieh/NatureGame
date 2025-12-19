<template>
  <div style="padding: 1vh 1vw">
    <el-tabs
      v-model="firstValue"
      type="border-card"
      class="demo-tabs second_tab"
      @tab-click="handleClickFirst"
    >
      <el-tab-pane
        v-for="firstItem in images"
        :key="firstItem.label"
        :label="firstItem.label"
        :name="firstItem.label"
      >
        <div style="height: calc(100vh - 100px); overflow-y: auto; overflow-x: hidden">
          <el-tabs class="second_tab" v-model="secondValue">
            <el-tab-pane
              v-for="secondItem in firstItem.data.filter(i=>i.size>0)"
              :key="secondItem.label + 'second'"
              :label="secondItem.label"
              :name="secondItem.label"
            >
              <template v-for="item in secondItem.size" :key="item">
                <el-image
                  class="img_item"
                  :src="getImageUrl(firstItem, secondItem, item, item<=secondItem.bz)"
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
  import { images } from './data';
  defineOptions({ name: 'Test' });

  const firstValue = ref('■');
  const secondValue = ref('上');

  const getImageUrl = (item: any, child: any, file: any, isBz=false) => {
    if(isBz){
      return new URL(
        `../../assets/GuCheng/${item.label}/${child.label}/宝藏-${file}.webp`,
        import.meta.url
      ).href;
    }
    return new URL(
        `../../assets/GuCheng/${item.label}/${child.label}/${file-child.bz}.webp`,
        import.meta.url
      ).href;
  };

  const handleClickFirst = (tab: any, event: Event) => {
    window.scrollTo(0, 0);
    secondValue.value = (images[tab.index].data).filter(i=>i.size>0)[0].label;
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
