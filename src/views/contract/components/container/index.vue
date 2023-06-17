<template>
  <el-form ref="formRef" :model="form" :rules="rules" label-width="120px" size="default">
    <base-info v-model="form" />
    <financial-info v-model="form" />
    <ledger-detail-info @change-ledger-detail-info="changeRow" />
    <el-form-item>
      <el-button type="primary" @click="onSubmit(formRef)">提交</el-button>
    </el-form-item>
  </el-form>
</template>
<script setup lang="ts">
import { defineComponent, ref } from 'vue'
import { ElMessage, FormInstance } from 'element-plus';
import { FormTypeProps } from '../../interface';
import BaseInfo from '../baseInfo/index.vue'
import FinancialInfo from '../financialInfo/index.vue'
import LedgerDetailInfo from '../ledgerDetailInfo/index.vue'
import rules from '../../rules'

defineComponent({
  'BaseInfo': BaseInfo,
  'FinancialInfo': FinancialInfo,
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
const onSubmit = async (formEl: FormInstance) => {
  console.log('表单数据', form.value)
  formEl.validate().then((isValid) => {
    console.log('isValid', isValid)
    if (isValid) {
      console.log('表单数据', form.value)
      const params = { ...form.value }
      console.log('params', params)
    } else {
      ElMessage.error('请完善必填项')
    }
  }).catch(e => {
    ElMessage.error('请完善必填项')
  })
}

const changeRow = ({ key, data }) => {
  console.log('key', key)
  console.log('data', data)
  form.value[key] = data
}
</script>
<style lang="scss" scoped>
@import url('../../index.scss');

:deep {

  .el-select.el-select--medium,
  .el-date-editor.el-input--medium,
  .el-form-item__content .el-input-number {
    flex: 1
  }

  .el-collapse-item__header {
    font-size: 16px;
  }
}
</style>