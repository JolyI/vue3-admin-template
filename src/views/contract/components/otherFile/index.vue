<template>
  <el-collapse v-model="activeNames">
    <div class="module-block">
      <el-collapse-item name="collapse" title="附件">

      </el-collapse-item>
    </div>
  </el-collapse>
</template>
<script setup>
import { reactive, defineProps } from 'vue';

const props = defineProps(['mode'])
const activeNames = reactive(['collapse'])

</script>
<style lang="scss" scoped>
@import url('../../index.scss');
</style>