<template>
  <div>
    <!-- 6x6 卡片网格 -->
    <div
      class="card-box"
      :style="{
        width: itemWidth * size + (size-1) + 'px',
        height: itemWidth * size + (size-1)  + 'px',
      }"
      id="card_container"
    >
      <div
        v-for="(item, index) in dataList"
        class="card-item"
        :key="item.value"
        :style="{
          width: itemWidth + 'px',
          height: itemWidth + 'px',
          left: (index % size) * (itemWidth+1) + 'px',
          top: Math.floor(index / size) * (itemWidth+1) + 'px',
          '--color': (index %2) === ((Math.floor(index / size))%2) ? '#857557' : '#857557'
        }"
      >
        <img :src="ImageData[item.imgIndex || 0]"></img>
      </div>
    </div>

    <div style="text-align: center;margin: 14px 0 0 0 ;" class="container_menu">
      <div class="container_menu_item" style="margin-right: 10px" :loading="loading" v-if="times > 0" @click="refresh" >
        <img width="25" src="@/assets/SixGame/icon-1.png"></img>
        再来一次
      </div>
      <div class="container_menu_item container_menu_item_active" @click="downloadImage">
        <img width="22" src="@/assets/SixGame/icon-4.png"></img>
        保存一下
      </div>
    </div>

    <!-- 状态提示 -->
    <div style="text-align: center" class="status" v-if="times > 0">
      <img style="position: relative;top: 7px;" width="25" src="@/assets/SixGame/icon-3.png"/>
      亲爱的小宝，你还有 {{ times }} 次机会！
    </div>
    <div style="text-align: center" class="status" v-else>小宝实在抱歉，机会用光啦！</div>
  </div>
</template>

<script setup lang="ts">
  import { SixData, SixDataListType, GameData } from './data';
  import { ImageData } from './ImageData.js';
  import { onMounted, onActivated, onUnmounted, ref, computed } from 'vue';
  import html2canvas from 'html2canvas'
  import { useRoute } from 'vue-router'
  import { ElMessage } from 'element-plus'
  defineOptions({ name: 'IndexItem' });
  const times = ref(4);
  const itemWidth = ref(10);
  const props = defineProps<{
    size: number;
  }>();
  const dataList = ref<SixDataListType[]>([]);
  const loading = ref(false);
  const router =  useRoute()
  const allCount = computed(() => {
    return props.size * props.size;
  });

  const getData = () => {
    if(loading.value){
      ElMessage({
        message: '点太快啦！',
        type: 'warning',
      })
      return;
    }
    loading.value=true
    const data: SixDataListType[] = [];
    const otherData: SixDataListType[] = [];
    SixData.forEach((item, index) => {
      if(props.size <6){
        let addCount = 1 + item.add * 2 * props.size;
        for (let i = 0; i < addCount; i++) {
          otherData.push({ name: item.name, value: `${item.name}-${i + 1}`, imgIndex: index });
        }
      }else{
        for (let i = 0; i < item.min; i++) {
          data.push({ name: item.name, value: `${item.name}-${i + 1}`, imgIndex: index });
        }
        let addCount = (item.max - item.min) * (parseInt(String(item.add * (props.size-6)))+1);
        for (let i = item.min; i < addCount; i++) {
          otherData.push({ name: item.name, value: `${item.name}-${i + 1}`, imgIndex: index });
        }
      }
    });
    let resultData = data.concat(getRandomElements(otherData, allCount.value - data.length));
    for (let i = 0; i < 1; i++) {
      setTimeout(() => {
        resultData = getRandomElements(resultData, allCount.value);
        dataList.value = resultData;
        loading.value=false
      }, 300 * i);
    }
  };

  // 排序打乱一遍
  const sortElements = (arr: SixDataListType[]) => {
    const copyArr = [...arr];
    copyArr.forEach((item) => {
      item.sortIndex = Math.floor(Math.random() * ((copyArr.length + 1) * 10));
    });
    copyArr.sort((a, b) => (a.sortIndex || 0) - (b.sortIndex || 0));
    return copyArr;
  };

  // 从数组里随机抽取n个元素
  const getRandomElements = (arr: SixDataListType[], takeCount: number) => {
    const copyArr = [...sortElements(arr)];
    // Fisher-Yates 洗牌算法（随机打乱数组）
    for (let i = copyArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copyArr[i], copyArr[j]] = [copyArr[j], copyArr[i]];
    }

    const result = copyArr.slice(0, takeCount);
    return result;
  };

  const downloadImage = async() => {
      const targetContainer = document.getElementById(`card_container`);
      if(targetContainer){
        const canvas = await html2canvas(targetContainer, {
            useCORS: true,
            scale: window.devicePixelRatio || 2, // 适配Retina屏
            backgroundColor: '#0a192f',
            logging: false
          });

          // 转图片并下载
          const imgUrl = canvas.toDataURL('image/png', 1.0);
          const link = document.createElement('a');
          link.href = imgUrl;
          link.download = `${GameData.find(i=>i.value===props.size)?.name}星连珠.png`;
          // 手机浏览器需触发点击（部分浏览器不支持自动下载，需手动保存）
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          ElMessage({
            message: '保存成功啦~快去找陪陪玩一玩吧！',
            type: 'success',
          })
      }
  
  }

  const refresh = ()=>{
    times.value --;
    localStorage.setItem(`times-${props.size}`, String(times.value))
    getData();
  }

  onMounted(() => {
    itemWidth.value = (window.innerWidth - 20 - (props.size-1)*1) / props.size;
    times.value = localStorage.getItem(`times-${props.size}`) ? parseInt(localStorage.getItem(`times-${props.size}`) as string) : 99;
    if(router.query.zgTiantian){
      times.value = 99
    }
    getData();
  });
</script>

<style lang="scss" scoped>
  .card-box {
    position: relative;
    margin: 10px 10px;
  }
  .card-item {
    position: absolute;
    border: 2px solid var(--color);
    transition: 0.5s;
    border-radius: 4px;
    overflow: hidden;
    box-sizing: border-box;
    & > img {
      height: 100%;
      width: 100%;
    }
  }
  .status {
    color: #fff;
  }
  .btn{
   display: inline-block;
  padding: 8px 20px;
  margin: 10px 8px 0 8px;
  /* 文字样式 */
  font-size: 17px;
  font-weight: bold;
  color: #FFFFFF;
  text-align: center;
  /* 按钮形状+背景（深蓝渐变） */
  border: none;
  border-radius: 12px; /* 胶囊圆角 */
  background: linear-gradient(
        90deg,
        rgba(54, 103, 250, 0.8) 0,
        rgba(184, 160, 244, 0.8) 48.8%,
        rgba(243, 145, 57, 0.8) 100%
      );
  }
</style>
