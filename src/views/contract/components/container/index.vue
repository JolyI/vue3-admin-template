<template>
  <div>
    <el-form ref="formRef" :model="form" :rules="rules" label-width="140px" size="default">
      <el-collapse v-model="collapse.baseInfoNames">
        <div class="module-block">
          <el-collapse-item title="基本信息" name="baseInfo">
            <el-row :gutter="15">
              <el-col :span="spanCol">
                <el-form-item label="合同号" prop="number">
                  <el-input v-model="form.number" clearable placeholder="请输入合同号" />
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="合同名称" prop="name">
                  <el-input v-model="form.name" clearable placeholder="请输入合同名称" />
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="合同签订日期" prop="signDate">
                  <el-date-picker v-model="form.signDate" placeholder="请选择合同签订日期" format="YYYY-MM-DD" clearable />
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="合同性质" prop="nature">
                  <el-select v-model="form.nature" placeholder="请选择合同性质">
                    <el-option v-for="item in NatureContractOption" :key="item.value" :label="item.label"
                      :value="item.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="合同号-对方" prop="oppositeNumber">
                  <el-input v-model="form.oppositeNumber" clearable placeholder="请输入合同号-对方" />
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="合同分类" prop="classification">
                  <el-select v-model="form.classification" placeholder="请选择合同分类">
                    <el-option v-for="item in TypeOptions" :key="item.value" :label="item.label" :value="item.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="合同生效日期" prop="effectivenessDate">
                  <el-date-picker v-model="form.effectivenessDate" placeholder="请选择合同生效日期" format="YYYY-MM-DD"
                    clearable />
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="费用需求部门" prop="费用需求部门">
                  <el-select v-model="form.costDeptId" placeholder="请选择费用需求部门">
                    <el-option v-for="item in TypeOptions" :key="item.value" :label="item.label" :value="item.value" />
                  </el-select>
                </el-form-item>
                <el-form-item v-if="false" label="" prop="costDeptName"><el-input v-model="form.costDeptId" placeholder=""
                    hidden /></el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="单据状态" prop="documentStatus">
                  <el-select v-model="form.documentStatus" placeholder="请选择单据状态">
                    <el-option v-for="item in DocumentStatusOptions" :key="item.value" :label="item.label"
                      :value="item.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="合同类型" prop="type">
                  <el-select v-model="form.type" placeholder="请选择合同类型">
                    <el-option v-for="item in ContractTypeOptions" :key="item.value" :label="item.label"
                      :value="item.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="合同结束日期" prop="endDate">
                  <el-date-picker v-model="form.endDate" placeholder="请选择合同结束日期" format="YYYY-MM-DD" clearable />
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="是否公共业务(按产线分)" prop="publicBusiness">
                  <el-select v-model="form.publicBusiness" placeholder="请选择是否公共业务（按产线分）">
                    <el-option v-for="item in PublicServiceOptions" :key="item.value" :label="item.label"
                      :value="item.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="签署公司" prop="signCompanyName">
                  <el-input v-model="form.signCompanyName" clearable placeholder="请输入签署公司" />
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="合同主从" prop="masterSlave">
                  <el-select v-model="form.masterSlave" placeholder="请选择合同主从">
                    <el-option v-for="item in ContractMasterSlaveOptions" :key="item.value" :label="item.label"
                      :value="item.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="预计交付时间" prop="deliverDate">
                  <el-date-picker v-model="form.deliverDate" placeholder="请选择合同结束日期" format="YYYY-MM-DD" clearable />
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="分摊规则" prop="allocationRule">
                  <el-select v-model="form.allocationRule" placeholder="请选择分摊规则">
                    <el-option v-for="item in AllocationRulesOptions" :key="item.value" :label="item.label"
                      :value="item.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="签署部门" prop="signDeptId">
                  <el-select v-model="form.signDeptId" placeholder="请选择签署部门">
                    <el-option v-for="item in AllocationRulesOptions" :key="item.value" :label="item.label"
                      :value="item.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="合同状态" prop="contractStatus">
                  <el-select v-model="form.contractStatus" placeholder="请选择合同状态">
                    <el-option v-for="item in ContractStatusOption" :key="item.value" :label="item.label"
                      :value="item.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="签署方式" prop="signWay">
                  <el-select v-model="form.signWay" placeholder="请选择签署方式">
                    <el-option v-for="item in SignModelOptions" :key="item.value" :label="item.label"
                      :value="item.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="合同-内/外部" prop="insideOutside">
                  <el-select v-model="form.insideOutside" placeholder="请选择合同-内/外部">
                    <el-option v-for="item in ContractSideOptions" :key="item.value" :label="item.label"
                      :value="item.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="签署执行人" prop="signPersonId">
                  <el-select v-model="form.signPersonId" placeholder="请选择签署执行人">
                    <el-option v-for="item in ContractSideOptions" :key="item.value" :label="item.label"
                      :value="item.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="套用范本" prop="template">
                  <el-select v-model="form.template" placeholder="请选择套用范本">
                    <el-option v-for="item in ApplyExampleOptions" :key="item.value" :label="item.label"
                      :value="item.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="签约类型" prop="signType">
                  <el-select v-model="form.signType" placeholder="请选择签约类型">
                    <el-option v-for="item in SignTypelOptions" :key="item.value" :label="item.label"
                      :value="item.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="所属集团" prop="groups">
                  <el-select v-model="form.groups" placeholder="请选择所属集团">
                    <el-option v-for="item in CompanyOptions" :key="item.value" :label="item.label" :value="item.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="上游单据号" prop="documentNumber">
                  <el-input v-model="form.documentNumber" clearable placeholder="请输入上游单据号" />
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="合同版本" prop="version">
                  <el-input v-model="form.version" clearable placeholder="请输入合同版本" />
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="签署地点" prop="signAddress">
                  <el-input v-model="form.signAddress" clearable placeholder="请输入签署地点" />
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="动作" prop="action">
                  <el-input v-model="form.action" clearable placeholder="请输入动作" />
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="备注" prop="remark">
                  <el-input v-model="form.remark" type="textarea" :autosize="{ minRows: 2, maxRows: 10 }" show-word-limit
                    maxlength="500" clearable placeholder="请输入备注" />
                </el-form-item>
              </el-col>
            </el-row>
          </el-collapse-item>
        </div>
      </el-collapse>
      <el-collapse v-model="collapse.finanicalInfo">
        <div class="module-block">
          <el-collapse-item title="财务信息" name="finanicalInfo">
            <el-row :gutter="15">
              <el-col :span="spanCol">
                <el-form-item label="合同金额(含税)大写" prop="totalAmountChn">
                  <el-input disabled v-model="form.totalAmountChn" clearable placeholder="自动转化大写" />
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="合同总额(含税)" prop="totalAmount">
                  <el-input-number controls-position="right" v-model="form.totalAmount" clearable
                    placeholder="请输入合同总额（含税）" :min="0" />
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="结算方式" prop="paymentMethod">
                  <el-select v-model="form.paymentMethod" placeholder="请选择结算方式">
                    <el-option v-for="item in SettlementOptions" :key="item.value" :label="item.label"
                      :value="item.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="产量" prop="yield">
                  <el-input-number controls-position="right" v-model="form.yield" clearable placeholder="请输入产量"
                    :min="0" />
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="合同总额(不含税)" prop="amount">
                  <el-input-number controls-position="right" v-model="form.amount" clearable placeholder="请输入合同总额（不含税）"
                    :min="0" />
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="税率" prop="taxRate">
                  <el-select v-model="form.taxRate" placeholder="请选择税率">
                    <el-option v-for="item in TaxRateOptions" :key="item.value" :label="item.label" :value="item.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="开票方式" prop="billingMethond">
                  <el-select v-model="form.billingMethond" placeholder="请选择开票方式">
                    <el-option v-for="item in InvoiceMethodOptions" :key="item.value" :label="item.label"
                      :value="item.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="单价/吨" prop="unitPrice">
                  <el-input-number controls-position="right" v-model="form.unitPrice" clearable placeholder="请输入单价/吨"
                    :min="0" />
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="税额" prop="taxAmount">
                  <el-input-number controls-position="right" v-model="form.taxAmount" clearable placeholder="请输入税额"
                    :min="0" />
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="币别" prop="currency">
                  <el-select v-model="form.currency" placeholder="请选择币别">
                    <el-option v-for="item in CurrencyOptions" :key="item.value" :label="item.label"
                      :value="item.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="是否需要付款" prop="needPay">
                  <el-select v-model="form.needPay" placeholder="请选择是否需要付款">
                    <el-option v-for="item in ISNeedPaymentOptions" :key="item.value" :label="item.label"
                      :value="item.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="合同金额(产量合同)" prop="totalAmount">
                  <el-input-number controls-position="right" v-model="form.totalAmount" clearable
                    placeholder="请输入合同金额(产量合同)" :min="0" />
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="备注" prop="financeRemark">
                  <el-input v-model="form.financeRemark" type="textarea" :autosize="{ minRows: 2, maxRows: 10 }"
                    show-word-limit maxlength="500" clearable placeholder="请输入备注" />
                </el-form-item>
              </el-col>
            </el-row>
          </el-collapse-item>
        </div>
      </el-collapse>
      <el-collapse v-model="collapse.ledgerInfo">
        <div class="module-block">
          <el-collapse-item title="台账信息" name="ledgerInfo">
            <div class="space-right">
              <el-button type="primary" size="small" @click="addRow">新增</el-button>
            </div>
            <el-tabs v-model="tabName" class="demo-tabs">
              <el-tab-pane label="付款条件" name="paymentPlan">
                <el-table :data="form.paymentPlan">
                  <el-table-column label="#" type="index" width="50" />
                  <el-table-column label="款项类型" prop="款项类型">
                    <template #default="{ row, column, $index }">
                      <el-select v-model="row[column.property]" placeholder="请选择"
                        @change="$event => editRow($index, $event, column.property)">
                        <el-option v-for="item in PaymentTypeOptions" :key="item.label" :label="item.label"
                          :value="item.value" />
                      </el-select>
                    </template>
                  </el-table-column>
                  <el-table-column label="付款比例" prop="付款比例">
                    <template #default="{ row, column, $index }">
                      <el-select v-model="row[column.property]" placeholder="请选择"
                        @change="$event => editRow($index, $event, column.property)">
                        <el-option v-for="item in PaymentRatioOptions" :key="item.label" :label="item.label"
                          :value="item.value" />
                      </el-select>
                    </template>
                  </el-table-column>
                  <el-table-column label="付款条件" prop="付款条件">
                    <template #default="{ row, column, $index }">
                      <el-input v-model="row[column.property]"
                        @input="$event => editRow($index, $event, column.property)" />
                    </template>
                  </el-table-column>
                  <el-table-column label="付款时间" width="200">
                    <template #default="{ row, column, $index }">
                      <el-date-picker v-model="row[column.property]" placeholder="请选择"
                        @change="editRow($index, $event, column.property)" size="small" :width="120" />
                    </template>
                  </el-table-column>
                  <el-table-column label="应付金额" prop="应付金额">
                    <template #default="{ row, column, $index }">
                      <el-input v-model="row[column.property]"
                        @input="$event => editRow($index, $event, column.property)" />
                    </template>
                  </el-table-column>
                  <el-table-column label="备注" prop="备注">
                    <template #default="{ row, column, $index }">
                      <el-input v-model="row[column.property]"
                        @input="$event => editRow($index, $event, column.property)" />
                    </template>
                  </el-table-column>
                  <el-table-column label="操作">
                    <template #default="{ row, $index }">
                      <el-button type="danger" size="small" text @click="deleteRow($index)">删除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </el-tab-pane>
              <el-tab-pane label="相对方" name="supplier">
                <el-table :data="form.supplierDataSource">
                  <el-table-column label="#" type="index" width="50" />
                  <el-table-column label="相对方" prop="相对方" />
                  <el-table-column label="相对方名称" prop="相对方名称" />
                  <el-table-column label="相对方地址" prop="相对方地址" />
                  <el-table-column label="法定代表人" prop="法定代表人" />
                  <el-table-column label="授权代理人" prop="授权代理人" />
                  <el-table-column label="开户行" prop="开户行" />
                  <el-table-column label="账户" prop="账户" />
                  <el-table-column label="统一社会信用码" prop="统一社会信用码" />
                </el-table>
              </el-tab-pane>
              <el-tab-pane label="发票信息" name="invoice"></el-tab-pane>
              <el-tab-pane label="付款申请" name="apply"></el-tab-pane>
            </el-tabs>
          </el-collapse-item>
        </div>
      </el-collapse>
      <el-form-item>
        <el-button type="primary" @click="onSubmit(formRef)">提交</el-button>
      </el-form-item>
    </el-form>
    <!-- 相对方 -->
    <el-dialog title="添加相对方" :visible="supplierDialog.visible">
      <el-table :data="supplierDialog.dataSource">
        <el-table-column label="#" type="index" width="80" />
        <el-table-column label="相对方" prop="相对方"></el-table-column>
        <el-table-column label="相对方名称" prop="相对方名称"></el-table-column>
        <el-table-column label="相对方地址" prop="相对方地址"></el-table-column>
        <el-table-column label="法定代表人" prop="法定代表人"></el-table-column>
        <el-table-column label="授权代理人" prop="授权代理人"></el-table-column>
        <el-table-column label="开户行" prop="开户行"></el-table-column>
        <el-table-column label="账户" prop="账户"></el-table-column>
        <el-table-column label="统一社会信用码" prop="统一社会信用码"></el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>
<script setup  name="contract">
import { reactive, toRefs, watch } from 'vue'
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router'
import { formatTime, number2text, isBlank, findLabel } from '../../utils'

import { addContract } from '@/api/contract';

import rules from '../../rules'
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

} from '../../enum'

const router = useRouter()
const collapse = reactive({
  baseInfoNames: 'baseInfo',
  finanicalInfo: 'finanicalInfo',
  ledgerInfo: 'ledgerInfo',
})
const data = reactive({
  spanCol: 6,
  form: {
    id: null,
    number: null,
    oppositeNumber: '',
    classification: '',
    name: '',
    documentStatus: '',
    signCompanyName: '',
    signCompanyId: null,
    signDeptName: '',
    signDeptId: null,
    signPerson: '',
    type: null,
    masterSlave: null,
    contractStatus: null,
    template: null,
    version: '',
    signDate: '',
    effectivenessDate: '',
    endDate: '',
    deliverDate: '',
    signWay: null,
    signType: null,
    signAddress: '',
    costDeptName: '',
    costDeptId: null,
    costCompanyName: '',
    costCompanyId: null,
    publicBusiness: null,
    nature: null,
    allocationRule: null,
    insideOutside: null,
    groups: null,
    remark: '',
    totalAmount: null,
    amount: null,
    amountChn: null,
    totalAmountChn: null,
    taxAmount: null,
    taxRate: null,
    currency: '',
    paymentMethod: '',
    billingMethond: '',
    needPay: '',
    yield: null,
    unitPrice: null,
    action: '',
    financeRemark: '',
    signPersonId: null,
    documentNumber: '',
    supplierDataSource: [], // 相对方
    paymentPlan: [], //付款条件
  },
  formRef: undefined,
  tabName: 'paymentPlan',
  supplierDialog: {
    visible: false,
    dataSource: []
  },
})
const { spanCol, form, formRef, tabName, supplierDialog } = toRefs(data)

const onSubmit = async (formEl) => {
  console.log('表单数据', form.value)
  formEl.validate().then((isValid) => {
    if (isValid) {
      const params = formatFields()
      console.log('params', params)
      addContract(params).then((res) => {
        console.log('res', res)
        if (res) {
          ElMessage.success('新增合同成功')
          router.replace('/contract/list')
        }
      })
    } else {
      ElMessage.error('请完善必填项')
    }
  }).catch(e => {
    ElMessage.error('请完善必填项')
  })
}

const formatFields = () => {
  const params = {
    ...form.value,
    signDate: formatTime(form.value.signDate),
    effectivenessDate: formatTime(form.value.effectivenessDate),
    endDate: formatTime(form.value.endDate),
    deliverDate: !isBlank(form.value.deliverDate) ? formatTime(form.value.deliverDate) : undefined,
    // mock
    costCompanyId: 1,
    costCompanyName: '1',
    costDeptName: '1',
    costDeptId: 1,
    creator: 'creator',
    creatorPhone: "1212",
    creationTime: formatTime(new Date().getTime()),
    modificator: 'sas',
    modificationTime: formatTime(new Date().getTime()),
    reviewer: '12',
    reviewTime: formatTime(new Date().getTime()),
    signCompanyId: 1,
    signDeptName: '',
    unitPrice: 121,

  }
  delete params.supplierDataSource
  delete params.paymentPlan
  try {
    Object.keys(params || {}).forEach(key => {
      if (isBlank(params[key])) {
        delete params[key]
      }
    })
  } catch (error) {
    console.log(error)
  }
  return params
}

const editRow = (index, value, key) => {
  form.value.paymentPlan[index][key] = value
  form.value.paymentPlan = form.value.paymentPlan.map((i, tindex) => {
    if (tindex === index) {
      return {
        ...i,
        [key]: value
      }
    } else {
      return i
    }
  })

};

const deleteRow = (index) => {
  form.value.paymentPlan.splice(index, 1);
};

const addRow = () => {
  if (tabName.value === 'paymentPlan') {
    const obj = {
      款项类型: '',
      付款比例: '',
      付款条件: '',
      付款时间: '',
      应付金额: '',
      备注: '',
    }
    form.value.paymentPlan.push(obj);
  } else if (tabName.value === 'supplier') {
    debugger
    // 弹窗
    supplierDialog.value.visible = true
    console.log('supplierDialog', supplierDialog)
  }
};

// 自动转化大写
watch(
  () => form.value.totalAmount,
  (newValue) => {
    if (newValue) {
      const v = number2text(newValue, 'upper')
      form.value.totalAmountChn = v
    } else {
      form.value.totalAmountChn = ''
    }
  },
  {
    immediate: true,
    deep: true
  }
)
watch(
  () => form.value.signPersonId,
  (newValue) => {
    if (newValue) {
      const v = findLabel(ContractSideOptions, newValue)
      form.value.signPerson = v
    } else {
      form.value.signPerson = ''
    }
  },
  {
    immediate: true,
    deep: true
  }
)


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