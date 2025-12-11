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
        v-for="(item, index) in allCount"
        class="card-item"
        :style="{
          width: itemWidth + 'px',
          height: itemWidth + 'px',
          left: (index % size) * itemWidth + 'px',
          top: Math.floor(index / size) * itemWidth + 'px',
        }"
      >
        {{ item }}
      </div>
    </div>

    <div style="text-align: center">
      <el-button type="primary">重新生成</el-button>
      <el-button>保存图片</el-button>
    </div>

    <!-- 状态提示 -->
    <div style="text-align: center" class="status">您还有 {{ times }} 次机会！</div>
  </div>
</template>

<script lang="ts" setup>
  import { SixData } from './data';
  import { onMounted, onActivated, onUnmounted, ref, computed } from 'vue';
  const times = ref(3);
  const itemWidth = ref(50);
  const size = ref(6);
  const allCount = computed(() => {
    return size.value * size.value;
  });

  onMounted(() => {
    itemWidth.value = (window.innerWidth - 20) / size.value;
  });

  const getData = () => {
    const data = [];
    const otherData = [];
    SixData.forEach((item) => {
      for (let i = 0; i < item.min; i++) {
        data.push({ name: item.name, value: `${item.name}-${i + 1}` });
      }
      for (let i = item.min; i < item.max; i++) {
        otherData.push({ name: item.name, value: `${item.name}-${i + 1}` });
      }
    });
    const resultData = data.concat(getRandomElements(otherData, allCount.value - data.length));
  };

  const getRandomElements = (arr: any[], count: number) => {
    // 深拷贝原数组，避免修改原数据
    const copyArr = [...arr];
    const result = [];

    // 取数次数：取「指定个数」和「数组长度」的较小值（避免数组长度不足3）
    const takeCount = Math.min(count, copyArr.length);

    // Fisher-Yates 洗牌算法（随机打乱数组）
    for (let i = copyArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copyArr[i], copyArr[j]] = [copyArr[j], copyArr[i]];
    }

    // 截取前takeCount个元素
    result.push(...copyArr.slice(0, takeCount));
    return result;
  };

  const getRandomNumberOpt = (min: number, max: number, exclude: number[]) => {
    // 步骤1：构建0-50的所有合法值数组（过滤排除项）
    const validNumbers = [];
    for (let i = min; i <= max; i++) {
      if (!exclude.includes(i)) {
        validNumbers.push(i);
      }
    }

    // 步骤2：从合法数组中随机取一个（数组为空时返回null，避免报错）
    if (validNumbers.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * validNumbers.length);
    return validNumbers[randomIndex];
  };
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
