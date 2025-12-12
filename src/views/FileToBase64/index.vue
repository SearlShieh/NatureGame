<template>
  <div>
    <el-upload
      v-model:file-list="fileList"
      class="upload-demo"
      action=""
      multiple
      :auto-upload="false"
      :limit="100"
      :on-change="fileChange"
    >
      <el-button type="primary">upload</el-button>
    </el-upload>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { ElMessage, ElMessageBox } from 'element-plus';
  import type { UploadProps, UploadUserFile } from 'element-plus';

  const fileList = ref<UploadUserFile[]>([]);
  const base64List = ref<string[]>([]);
  const fileChange = (file: UploadUserFile, fileList: UploadUserFile[]) => {
    const promiseList: Promise<void>[] = [];
    base64List.value = Array(fileList.length).fill('');
    fileList.forEach((file, index) => {
      promiseList.push(
        new Promise((resolve: any) => {
          const reader = new FileReader();
          reader.onload = (event) => {
            const base64Str = event?.target?.result;
            base64List.value[index] = (base64Str as string) || '';
            resolve();
          };
          file.raw && reader.readAsDataURL(file.raw);
        })
      );
    });
    Promise.all(promiseList).then(() => {
      console.log(base64List.value);
    });
  };
</script>
