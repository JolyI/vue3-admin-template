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
        <el-table-column label="单位名称" prop="groups" width="120">
          <template #default="{ row }">
            <span>{{ findLabel(CompanyOptions, row.groups) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="费用需求部门/子公司" prop="costDeptName" width="200">
          <template #default="{ row }">
            <span>{{ blankText(row.costDeptName) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="产线名称" prop="lineName" width="120">
          <template #default="{ row }">
            <span>{{ blankText(row.lineName) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="是否公共业务（按产线分）" prop="publicBusiness" width="200">
          <template #default="{ row }">
            <span>{{ findLabel(PublicServiceOptions, row.publicBusiness) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="公共业务分摊比例（%）" prop="ratio" width="200">
          <template #default="{ row }">
            <span>{{ isBlank(row.ratio) ? '-' : `${row.ratio}%` }}</span>
          </template>
        </el-table-column>
        <el-table-column label="动作" prop="action" width="200">
          <template #default="{ row }">
            <span>{{ blankText(row.action) }}</span>
          </template>
        </el-table-column>
        <el-table-column label=" 合同名称" prop=" name" width="200">
          <template #default="{ row }">
            <span>{{ blankText(row.name) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="合同编号" prop="number" width="200">
          <template #default="{ row }">
            <span>{{ blankText(row.number) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="合同金额（含税，元）" prop="totalAmount" width="200">
          <template #default="{ row }">
            <span>{{ blankText(row.totalAmount) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="合同金额（不含税，元）" prop="amount" width="200">
          <template #default="{ row }">
            <span>{{ blankText(row.amount) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="合同起始日期" prop="effectivenessDate" width="200">
          <template #default="{ row }">
            <span>{{ blankText(row.effectivenessDate) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="合同终止日期" prop="endDate" width="200">
          <template #default="{ row }">
            <span>{{ blankText(row.endDate) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="供应商名称" prop="supplierName">
          <template #default="{ row }">
            <span>{{ blankText(row.supplierName) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="支付性质（是否需要付款）" prop="needPay" width="200">
          <template #default="{ row }">
            <span>{{ findLabel(ISNeedPaymentOptions, row.needPay) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="当月预算金额（不含税，元）" prop="monthAmount" width="200">
          <template #default="{ row }">
            <span>{{ blankText(row.monthAmount) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="本年预算累计金额（不含税，元）" prop="yearAmount" width="200">
          <template #default="{ row }">
            <span>{{ blankText(row.yearAmount) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="内部/外部" prop="insideOutside" width="200">
          <template #default="{ row }">
            <span>{{ findLabel(ContractSideOptions, row.paymentMethod) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="结算方式（计算规则）" prop="paymentMethod" width="200">
          <template #default="{ row }">
            <span>{{ findLabel(SettlementOptions, row.paymentMethod) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="费用要素" prop="elementName" width="200">
          <template #default="{ row }">
            <span>{{ blankText(row.elementName) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="是否签订合同" prop="ifSign" width="200">
          <template #default="{ row }">
            <span>{{ blankText(row.ifSign) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="合同性质" prop="nature" width="200">
          <template #default="{ row }">
            <span>{{ findLabel(NatureContractOption, row.nature) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="备注" prop="remark" width="200">
          <template #default="{ row }">
            <span>{{ blankText(row.remark) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="挂账金额（含税，元）" prop="hangAmount" width="200">
          <template #default="{ row }">
            <span>{{ blankText(row.hangAmount) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="付款金额（含税，元）" prop="payAmount" width="200">
          <template #default="{ row }">
            <span>{{ blankText(row.payAmount) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="集团标准成本取数" prop="groupCostAccess" width="200">
          <template #default="{ row }">
            <span>{{ blankText(row.groupCostAccess) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="子公司标准成本取数" prop="childCostAccess" width="200">
          <template #default="{ row }">
            <span>{{ blankText(row.childCostAccess) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="执行成本取数" prop="executeCostAccess" width="200">
          <template #default="{ row }">
            <span>{{ blankText(row.executeCostAccess) }}</span>
          </template>
        </el-table-column>

        <!-- <el-table-column label="操作" fixed="right">
          <template #default="{ row, $index }">
            <router-link :to="`/contract/edit?id=${row}`">
              <el-button type="primary" link @click="toDetail(row)">编辑</el-button>
            </router-link>
          </template>
        </el-table-column> -->
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
import { queryContractDetailList } from '@/api/contract'
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
const toDetail = (row) => {
  router.push({
    path: '/contract/edit',
    query: {
      id: row
    }
  })
}
const toEdit = (row) => {
  router.push({
    path: '/contract/add',
    query: {
      id: row
    }
  })
}
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
  pageInfo.pageNum = current
  fetchData()
}
const onSizeChange = (size) => {
  pageInfo.pageSize = size
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
    // contractNum: ''
  }
  console.log(params)
  return params
}

const fetchData = () => {
  const params = getSearchForm()
  console.log('params', params)
  queryContractDetailList(params).then(res => {
    if (res.code == 200) {
      tableData.value = res.rows || []
      totalItems.value = res.total || 0
    }
  })
}

fetchData()
</script>

<style lange="scss">
@import url('../index.scss');
</style>