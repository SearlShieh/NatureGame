<template>
  <div class="container">
    <!-- 6x6 卡片网格 -->
    <div
      class="card-box"
      :style="{
        width: itemWidth * size + 'px',
        height: itemWidth * size + 'px',
      }"
    >
      <div
        v-for="(item, index) in dataList"
        class="card-item"
        :key="item.value"
        :style="{
          width: itemWidth + 'px',
          height: itemWidth + 'px',
          left: (index % size) * itemWidth + 'px',
          top: Math.floor(index / size) * itemWidth + 'px',
        }"
      >
        {{ item.value }}
      </div>
    </div>

    <div style="text-align: center">
      <el-button :loading="loading" v-if="times > 0" @click="getData" type="primary">
        重新生成
      </el-button>
      <el-button :loading="loading">保存图片</el-button>
    </div>

    <!-- 状态提示 -->
    <div style="text-align: center" class="status">您还有 {{ times }} 次机会！</div>
  </div>
</template>

<script lang="ts" setup>
  import { SixData, SixDataListType } from './data';
  import { onMounted, onActivated, onUnmounted, ref, computed } from 'vue';
  const times = ref(4);
  const itemWidth = ref(50);
  const size = ref(6);
  const dataList = ref<SixDataListType[]>([]);
  const loading = ref(false);
  const allCount = computed(() => {
    return size.value * size.value;
  });

  const getData = () => {
    times.value -= 1;
    const data: SixDataListType[] = [];
    const otherData: SixDataListType[] = [];
    SixData.forEach((item) => {
      for (let i = 0; i < item.min; i++) {
        data.push({ name: item.name, value: `${item.name}-${i + 1}` });
      }
      for (let i = item.min; i < item.max; i++) {
        otherData.push({ name: item.name, value: `${item.name}-${i + 1}` });
      }
    });
    let resultData = data.concat(getRandomElements(otherData, allCount.value - data.length));
    for (let i = 0; i < 1; i++) {
      setTimeout(() => {
        resultData = getRandomElements(resultData, allCount.value);
        dataList.value = resultData;
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

  onMounted(() => {
    itemWidth.value = (window.innerWidth - 20) / size.value;
    getData();
  });

  const tip = ref(
    `真是倒反天罡，陪陪让我捡玉扳指？我才不捡，我要去柜子里翻大剑。行吧，小女子能屈能伸，捡就捡……
    别人家都是带老板又出圣杯又开大剑，一个比一个富，你倒好，带老板在昆仑捡垃圾？！一天比一天穷？！
    没错，又是带老板去昆仑捡垃圾的一天。让我们来见证一下老板的非酋之路。
    一个紫，两个紫，三个紫，四个紫，五个紫，六个紫……老板一手紫色东来，主包实在是没眼看了。我说我们在打小胃袋你信吗？
    七个紫，很好，这道金光，成功让我们后面少捡了五万的垃圾哈哈哈哈。
    看到前面两个金棺了吗？我们还有希望！……老板看着自己变出来的尿壶，好像不是很想拿哈哈哈哈。
    老板看着金棺里的小垃圾，还不敢相信，问我变了没有？我说变了还是碎片。
    要不咱们别玩薇薇安了，这变了好像和没变一样？！
    老板别发呆了，快把玉扳指捡了，我们要出不去了哈哈哈哈。
    `
  );
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }
  .card-box {
    position: relative;
    margin: 10px 10px;
  }
  .card-item {
    position: absolute;
    border: 1px solid rgb(250, 255, 151);
    transition: 0.5s;
    & > img {
      height: 100%;
      width: 100%;
    }
  }
  .status {
    margin-top: 20px;
    color: red;
  }
</style>
