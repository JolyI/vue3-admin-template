<template>
  <el-form ref="formRef" :model="form" :rules="rules">
    <base-info v-model="form" />
    <el-form-item>
      <el-button type="primary" @click="onSubmit(formRef)">提交</el-button>
    </el-form-item>
  </el-form>
</template>
<script setup lang="ts">
import { defineComponent, ref } from 'vue'
import BaseInfo from '../baseInfo/index.vue'
import { ElMessage, FormInstance } from 'element-plus';
import { FormTypeProps } from '../../interface';
import rules from '../../rules'

defineComponent({
  'BaseInfo': BaseInfo
})
const formRef = ref<FormInstance>()
const form = ref<FormTypeProps>({
  baseInfo: {
    合同号: '',
    合同名称: '',
    合同签订日期: '',
    合同性质: '',
    '合同号-对方': '',
    合同分类: '',
    合同生效日期: '',
    费用需求部门: '',
    单据状态: '',
    合同类型: '',
    合同结束日期: '',
    "是否公共业务（按产线分）": '',
    签署公司: '',
    合同主从: '',
    预计交付时间: '',
    分摊规则: '',
    签署部门: '',
    合同状态: '',
    签署方式: '',
    '合同-内/外部': '',
    签署执行人: '',
    套用范本: '',
    签约类型: '',
    所属集团: '',
    上游单据号: '',
    合同版本: '',
    签署地点: '',
  },
  financialInfo: {
    '合同金额(含税)大写': '',
    '合同总额（含税）': '',
    结算方式: '',
    产量: '',
    '合同金额(不含税)': '',
    税率: '',
    开票方式: '',
    '单价/吨': '', // 默认0
    税额: '',
    币别: '',
    是否需要付款: '',
    '合同金额(产量合同)': '', //单价*产量=合同金额（2位小数）：默认是0
    备注: '',
  }
})
const onSubmit = (formEl: FormInstance) => {
  formEl.validate().then((isValid) => {
    console.log('isValid', isValid)
    if (isValid) {
      console.log('form.modelValue', form.value)
      const params = { ...form.value }
      console.log('params', params)
    } else {
      ElMessage.error('请完善必填项')
    }
  })
}


</script>
<style lang="scss" scoped>
@import url('../../index.scss');
</style>