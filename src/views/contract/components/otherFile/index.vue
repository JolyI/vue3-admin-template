<template>
  <el-collapse v-model="activeNames">
    <div class="module-block">
      <el-collapse-item name="collapse" title="附件">
        <el-upload v-model:file-list="fileList" class="upload-demo"
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" multiple>
          <el-button type="primary">Click to upload</el-button>
          <template #file="{ file }">
            <el-space>
              <span class="file-name">{{ file.name }}</span>
              <el-button type="primary" link>下载</el-button>
              <el-button type="danger" link>删除</el-button>
            </el-space>
          </template>
        </el-upload>
      </el-collapse-item>
    </div>
  </el-collapse>
</template>
<script setup>
import { reactive, defineProps } from 'vue';

const props = defineProps(['mode'])
const activeNames = reactive(['collapse'])
const fileList = reactive([
  {
    name: 'element-plus-logo.svgelement-plus-logo.svgelement-plus-logo.svgelement-plus-logo.svgelement-plus-logo.svg',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  },
  {
    name: 'element-plus-logo2.svg',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  },
])
</script>
<style lang="scss" scoped>
@import url('../../index.scss');


.file-name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 200px;
}
</style>