<template>
  <div>
    <div class="space-left">
      <el-button type="primary" @click="onSaveChild">保存</el-button>
      <el-button type="default">返回列表</el-button>
    </div>
    <el-collapse v-model="shareCollapse.module3">
      <div class="module-block">
        <Demo ref="demoRef" />
      </div>
    </el-collapse>

  </div>
</template>
<script setup name="share">
import { defineComponent, reactive, ref, toRefs, } from 'vue'
import { blankText, formatTime, isBlank } from '../utils';
import Demo from './demo.vue';

defineComponent(
  [
    'Demo'
  ]
)

const demoRef = ref(null)


const onSaveChild = () => {
  demoRef.value.onSaveChild(111)
}

const data = {
  shareCollapse: {
    module1: 'module1',
    module2: 'module2',
    module3: 'module3',
  },
  contractData: [], // 合同数据
  ruleData: [], // 规则数据
  ruleDetail: {
    desc: '',
    example: ''
  },
  shareData: [],
  shareForm: {
    list: []
  },
  shareFormRef: undefined,
}
const contractData = reactive([])
contractData.value
const {
  shareCollapse,
  ruleDetail,
  shareData,
  shareForm,
  shareFormRef,
} = toRefs(data)


const getDetail = () => {
  const desc = `分摊规则年合同 <br>1、分摊规则:年合同 (次月逐月分摊当月金额=不含税合同金额-分摊月份分摊月份=合同结束月份-合同开始月份+1 <br>2、合同分摊完毕后，只能调整当月之后的数据，历史数据不能调整例如6月15日后做下个月的预算，只能调整7月之后的预算`;
  const example = '示例:<br>合同起始日期=2023年2月5日，合同结束日期=2023年11月31日<br>分摊起始月份=2023年3月份，分摊终止月份=2023年12月<br>分摊月份=11-2+1=10个月，合同不含税金额=100万元<br>每月分摊金额=100/10=10万元';
  ruleDetail.value.desc = desc
  ruleDetail.value.example = example
  const rows = [
    {
      id: 990,
      adjustCurrentAmount: null,
      adjustCurrentAmountTax: null,
    },
    {
      id: 983,
      adjustCurrentAmount: null,
      adjustCurrentAmountTax: null,
    },
  ]
  shareData.value = rows;
  shareForm.value.list = rows
}


const test = (scope) => {
  console.log('scope', scope)
}

const onSave = async (formEl) => {
  if (!formEl) return
  formEl.validate((validate) => {
    console.log('validate', validate)
    if (validate) {
      console.log(shareForm.value)
    } else {

    }
  })
}

const validatorAmount = (callback, index, key) => {
  const value = shareForm.value.list[index][key]
  console.log('value', value)
  if (isBlank(value)) {
    callback(new Error(''))
  } else {
    callback()
  }
}


getDetail()

</script>
<style lang="scss" scoped>
@import url('./index.scss');

.space-left {
  margin-bottom: 20px;
}


:deep {
  .el-collapse-item__header {
    font-size: 16px;
  }
}
</style>