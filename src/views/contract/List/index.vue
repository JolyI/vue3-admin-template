<template>
  <div>
    <div class="search-form">
      <el-form ref="formRef" :model="form" label-width="100px" class="form">
        <el-row>
          <el-col :span="6">
            <el-form-item label="分摊月份" prop="分摊月份">
              <el-input v-model="form.分摊月份" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="分摊规则" prop="分摊规则">
              <el-select v-model="form.分摊规则" placeholder="请选择">
                <el-option v-for="item in AllocationRulesOptions" :key="item.value" :label="item.label"
                  :value="item.value" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="分摊开始日期" prop="分摊开始日期">
              <el-date-picker v-model="form.分摊开始日期" placeholder="请选择" format="YYYY-MM-DD" clearable />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="分摊结束日期" prop="分摊结束日期">
              <el-date-picker v-model="form.分摊结束日期" placeholder="请选择" format="YYYY-MM-DD" clearable />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="分摊状态" prop="分摊状态">
              <el-select v-model="form.分摊状态" placeholder="请选择">
                <el-option v-for="item in AllocationRulesOptions" :key="item.value" :label="item.label"
                  :value="item.value" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="预算余额" prop="预算余额">
              <el-input v-model="form.预算余额" clearable placeholder="请输入" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="签约方" prop="签约方">
              <el-select v-model="form.签约方" placeholder="请选择">
                <el-option v-for="item in AllocationRulesOptions" :key="item.value" :label="item.label"
                  :value="item.value" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="合同状态" prop="合同状态">
              <el-select v-model="form.合同状态" placeholder="请选择">
                <el-option v-for="item in AllocationRulesOptions" :key="item.value" :label="item.label"
                  :value="item.value" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <div class="space-between">
              <div class="space-start">
                <router-link to="/contract/add">
                  <el-button type="primary">新增</el-button>
                </router-link>
              </div>
              <div class="space-right">
                <el-button type="primary" @click="onSerach()">搜索</el-button>
                <el-button @click="onReset(formRef)">重置</el-button>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </div>

    <div class="search-table">
      <el-table :data="tableData">
        <el-table-column label="序号" type="index" width="80" />
        <el-table-column label="合同号" prop="number" width="120">
          <template #default="{ row }">
            <span>{{ blankText(row.number) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="合同名称" prop="name" width="200">
          <template #default="{ row }">
            <span>{{ blankText(row.name) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="合同签订时间" prop="signDate" width="120">
          <template #default="{ row }">
            <span>{{ blankText(row.signDate) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="价税合计" prop="totalAmount" width="200">
          <template #default="{ row }">
            <span>{{ blankText(row.totalAmount) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="不含税金额" prop="amount" width="200">
          <template #default="{ row }">
            <span>{{ blankText(row.amount) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="合同状态" prop="contractStatus" width="200">
          <template #default="{ row }">
            <span>{{ findLabel(ContractStatusOption, row.contractStatus) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="签章状态" prop="documentStatus" width="200">
          <template #default="{ row }">
            <span>{{ findLabel(DocumentStatusOptions, row.documentStatus) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="合同开始日期" prop="effectivenessDate" width="200">
          <template #default="{ row }">
            <span>{{ blankText(row.effectivenessDate) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="合同结束日期" prop="endDate" width="200">
          <template #default="{ row }">
            <span>{{ blankText(row.endDate) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="分摊月份）" prop="分摊月份" width="200">
          <template #default="{ row }">
            <span>{{ blankText(row['分摊月份']) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="分摊状态" prop="分摊状态" width="200">
          <template #default="{ row }">
            <span>{{ blankText(row['分摊状态']) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="分摊规则" prop="allocationRule" width="200">
          <template #default="{ row }">
            <span>{{ findLabel(AllocationRulesOptions, row.allocationRule) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="合同预算余额" prop="合同预算余额" width="200">
          <template #default="{ row }">
            <span>{{ blankText(row['合同预算余额']) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="合同性质" prop="nature" width="200">
          <template #default="{ row }">
            <span>{{ findLabel(NatureContractOption, row.nature) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="客商信息" prop="客商信息">
          <template #default="{ row }">
            <span>{{ blankText(row['客商信息']) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" fixed="right">
          <template #default="{ row, $index }">
            <router-link :to="`/contract/edit?id=${row.unionCode}`">
              <el-button type="primary" link>编辑</el-button>
            </router-link>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination :total="totalItems" :current-page="pageInfo.pageNum" :page-size="pageInfo.pageSize"
        :page-sizes="[10, 20, 30, 50, 100]" @current-change="onCurrentChange" @size-change="onSizeChange"
        layout="total, sizes, prev, pager, next, jumper" />
    </div>
  </div>
</template>

<script setup >
import { reactive, ref, toRefs } from 'vue';
import { useRouter, RouterLink } from 'vue-router';
import { queryContactList } from '@/api/contract'
import { blankText, isBlank, findLabel } from '../utils'
import {
  NatureContractOption,
  TypeOptions,
  DocumentStatusOptions,
  ContractTypeOptions,
  PublicServiceOptions,
  ContractMasterSlaveOptions,
  AllocationRulesOptions,
  ContractStatusOption,
  SignModelOptions,
  ContractSideOptions,
  ApplyExampleOptions,
  SignTypelOptions,
  CompanyOptions,
  SettlementOptions,
  TaxRateOptions,
  InvoiceMethodOptions,
  CurrencyOptions,
  ISNeedPaymentOptions,
  PaymentTypeOptions,
  PaymentRatioOptions,

} from '../enum'
const router = useRouter()
const formRef = ref()
const form = reactive({
  分摊月份: '',
  分摊规则: '',
  分摊开始日期: '',
  分摊结束日期: '',
  分摊状态: '',
  预算余额: '',
  签约方: '',
  合同状态: '',
})

const data = reactive({
  tableData: [],
  totalItems: 0,
  pageInfo: {
    pageNum: 1,
    pageSize: 10
  }

})
const {
  tableData,
  totalItems,
  pageInfo
} = toRefs(data)
const onSerach = () => {
  pageInfo.value.pageNum = 1
  fetchData()
}

const onReset = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}

const onCurrentChange = (current) => {
  console.log('onChangePage')
  pageInfo.value.pageNum = current
  fetchData()
}
const onSizeChange = (size) => {
  pageInfo.value.pageSize = size
  fetchData()
}
const getSearchForm = () => {
  // const params = {
  //   ...form,
  //   分摊开始日期: new Date(form.分摊开始日期).getTime(),
  //   分摊结束日期: new Date(form.分摊开始日期).getTime(),
  //   ...pageInfo
  // }
  const params = {
    ...pageInfo.value
  }
  console.log(params)
  return params
}

const fetchData = () => {
  const params = getSearchForm()
  console.log('params', params)
  queryContactList(params).then(res => {
    // if (res.code == 200) {
    tableData.value = res.data || []
    totalItems.value = res.total || 0
    // }
  }).catch(() => {
  })
}

fetchData()
</script>

<style lange="scss">
@import url('../index.scss');
</style>