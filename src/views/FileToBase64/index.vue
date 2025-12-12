<template>
  <div>
    <el-upload
      v-model:file-list="fileList"
      class="upload-demo"
      action=""
      multiple
      :auto-upload="false"
      :limit="100"
      on-change="fileChange"
    >
      <el-button type="primary">Click to upload</el-button>
      <template #tip>
        <div class="el-upload__tip">jpg/png files with a size less than 500KB.</div>
      </template>
    </el-upload>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { ElMessage, ElMessageBox } from 'element-plus';
  import type { UploadProps, UploadUserFile } from 'element-plus';

  const fileList = ref<UploadUserFile[]>([]);
  const fileChange = (file: UploadUserFile, fileList: UploadUserFile[]) => {
    console.log(file, fileList);
  };
</script>
