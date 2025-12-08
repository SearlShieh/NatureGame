<template>
  <div class="flex-center">
    <el-pagination
      v-model:current-page="page.pageNo"
      v-model:page-size="page.pageSize"
      :page-sizes="[10, 20, 30, 50]"
      background
      layout="total, sizes, prev, pager, next"
      :total="page?.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>

<script setup lang="ts">
  import { reactive } from 'vue';
  interface Page {
    pageNo: number;
    pageSize: number;
    total: number;
  }
  const page = defineModel<Page>({
    default: () => ({
      pageNo: 1,
      pageSize: 10,
      total: 0,
    }),
  });
  const emit = defineEmits(['search']);

  const handleSizeChange = (val: number) => {
    emit('search');
  };
  const handleCurrentChange = (val: number) => {
    emit('search');
  };
</script>
