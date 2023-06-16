<template>
  <el-collapse v-model="activeNames">
    <div class="module-block">
      <el-collapse-item title="基本信息" name="baseInfo">
        <el-row :gutter="15">
          <el-col :span="6">
            <el-form-item label="合同号" required prop="baseInfo.合同号"
              :rules="[{ require: true, message: '请输入合同号', trigger: 'change' }]">
              <el-input v-model="form.baseInfo.合同号" clearable />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="合同名称" required prop="baseInfo.合同名称"
              :rules="[{ require: true, message: '请输入合同名称', trigger: 'change' }]">
              <el-input v-model="form.baseInfo.合同名称" clearable />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="合同签订日期" required prop="baseInfo.合同签订日期">
              <el-date-picker v-model="form.baseInfo.合同签订日期" placeholder="请选择合同签订日期" format="YYYY-MM-DD" clearable
                style="{{width: '100%'}}" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="合同性质" required prop="baseInfo.合同性质">
              <el-select v-model="form.baseInfo.合同性质" placeholder="请选择合同性质">
                <el-option v-for="item in NatureContractOption" :key="item.value" :label="item.label"
                  :value="item.value" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="合同号-对方" required prop="baseInfo['合同号-对方']">
              <el-input v-model="form.baseInfo['合同号-对方']" clearable />
            </el-form-item>
          </el-col>
        </el-row>
      </el-collapse-item>
    </div>
  </el-collapse>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { FormTypeProps } from '../../interface';
import useVMode from '../../useVMode';
import { NatureContractOption } from '../../enum'
const emits = defineEmits(['update:modelValue'])
const activeNames = ref(['baseInfo'])

const props = defineProps<{
  modelValue: FormTypeProps,
}>()
const form = useVMode(props, 'modelValue', emits)
</script>
<style lang="scss">
@import url('../../index.scss');
</style>
