<template>
  <div>
    <el-form ref="formRef" :model="form" :rules="rules" label-width="140px" size="default" label-position="right">
      <div class="space-left">
        <el-button type="primary" @click="onSave">保存</el-button>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button type="default">返回列表</el-button>
      </div>
      <el-collapse v-model="collapse.applyBase">
        <div class="module-block">
          <el-collapse-item name="applyBase" title="基础信息">
            <el-row :gutter="15">
              <el-col :span="spanCol">
                <el-form-item label="付款申请单号" prop="paymentApplyNo">
                  <el-input v-model="form.paymentApplyNo" maxlength="50" clearable placeholder="请输入付款申请单号" />
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="公司" prop="companyId">
                  <el-select v-model="form.companyId" placeholder="请选择公司" disabled>
                    <el-option v-for="item in CompanyOptions" :key="item.value" :label="item.label" :value="item.value"
                      clearable />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="单据日期" prop="date">
                  <el-date-picker v-model="form.date" placeholder="请选择单据日期" format="YYYY-MM-DD" clearable disabled />
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="单据状态" prop="billsStatus">
                  <el-select v-model="form.billsStatus" placeholder="请选择单据状态" options disabled>
                    <el-option v-for="item in BillsStatusOptions" :key="item.value" :label="item.label"
                      :value="item.value" clearable />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="申请人" prop="applyUser">
                  <el-input v-model="form.applyUserName" maxlength="50" clearable disabled />
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="联系方式" prop="phone">
                  <el-input v-model="form.phone" maxlength="50" clearable disabled />
                </el-form-item>
              </el-col>
            </el-row>
          </el-collapse-item>
        </div>
      </el-collapse>
      <el-collapse v-model="collapse.applyTable">
        <div class="module-block" v-loading="tableLoading">
          <el-collapse-item name="applyTable" title="明细信息">
            <el-table :data="table">
              <el-table-column label="序号" width="80">
                <template #default="{ $index }">{{ $index }}</template>
              </el-table-column>
              <el-table-column label="付款类型" width="150" prop="paymentType">
                <template #default="{ column, row }">
                  {{ blankText(row[column.property]) }}
                </template>
              </el-table-column>
              <el-table-column label="往来户" width="150" prop="supplierId">
                <template #default="{ column, row }">
                  {{ blankText(row[column.property]) }}
                </template>
              </el-table-column>
              <el-table-column label="合同号" width="150" prop="contractNumber">
                <template #default="{ column, row }">
                  {{ blankText(row[column.property]) }}
                </template>
              </el-table-column>
              <el-table-column label="合同号" width="150" prop="contractNumber">
                <template #default="{ column, row }">
                  {{ blankText(row[column.property]) }}
                </template>
              </el-table-column>
              <el-table-column label="结算单号" width="150" prop="settlementId">
                <template #default="{ column, row }">
                  {{ blankText(row[column.property]) }}
                </template>
              </el-table-column>
              <el-table-column label="结算方式" width="150" prop="settlementMethod">
                <template #default="{ column, row }">
                  {{ blankText(row[column.property]) }}
                </template>
              </el-table-column>
              <el-table-column label="应付日期" width="150" prop="dataForPayment">
                <template #default="{ column, row }">
                  {{ blankText(row[column.property]) }}
                </template>
              </el-table-column>
              <el-table-column label="申请金额" width="150" prop="applyAmount">
                <template #default="{ column, row }">
                  {{ blankText(row[column.property]) }}
                </template>
              </el-table-column>
              <el-table-column label="费用要素" width="150" prop="feeElement">
                <template #default="{ column, row }">
                  {{ blankText(row[column.property]) }}
                </template>
              </el-table-column>
              <el-table-column label="物料编码" width="150" prop="materialId">
                <template #default="{ column, row }">
                  {{ blankText(row[column.property]) }}
                </template>
              </el-table-column>
              <el-table-column label="物料名称" width="150" prop="materialName">
                <template #default="{ column, row }">
                  {{ blankText(row[column.property]) }}
                </template>
              </el-table-column>
            </el-table>
          </el-collapse-item>
        </div>
      </el-collapse>
    </el-form>
  </div>
</template>
<script setup>
import { reactive, ref, toRefs } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { rules } from "./rules";

import {
  CompanyOptions,
  BillsStatusOptions,

} from "./enum.js";

const router = useRouter()
const route = useRoute()
const collapse = reactive({
  applyBase: 'applyBase',
  applyTable: 'applyTable',
})
const data = reactive({
  formRef: undefined,
  form: {
    id: null, //付款申请单ID
    paymentApplyNo: null,//付款申请单号
    companyId: null,//签约公司ID  --companyName:签约公司名字
    billsStatus: null,//单据状态
    applyUser: null,//申请人ID -applyUserName:申请人姓名
    phone: null,//联系方式
    remark: null,//备注
    // 详情的数据
    paymentType: null, //付款类型
    supplierId: null,// 往来户      supplierName:供应商名字
    contractNumber: null,//合同号
    settlementId: null,//结算单号
    settlementMethod: null,//结算方法
    dataForPayment: null,//应付时间
    applyAmount: null,//申请金额
    openAccountBank: null,//开户银行（这个字段后边孙老师说不要了，先不带这个字段把）
    accountNumber: null,//开户银行账号（这个字段后边孙老师说不要了，先不带这个字段把）
    materialId: null,//物料编码
    materialName: null,//物料名字
    feeElement: null,//费用要素
    paymentApplyId: null,//付款申请单ID
  },
  table: [],
  tableLoading: false,
})


const {
  form,
  formRef,
  table,
  tableLoading,
} = toRefs(data)

const spanCol = ref(6)
const onSave = () => { }
const onSubmit = () => { }


const clickTest = (scope) => {
  console.log(scope)
}

const getDetail = () => {
  tableLoading.value = true
  setTimeout(() => {
    table.value = []
    for (let i = 0; i < 20; i++) {
      table.value.push({
        paymentType: i, //付款类型
        supplierId: i + 1,// 往来户      supplierName:供应商名字
        contractNumber: i,//合同号
        settlementId: i,//结算单号
        settlementMethod: i,//结算方法
        dataForPayment: i,//应付时间
        applyAmount: i,//申请金额
        openAccountBank: i,//开户银行（这个字段后边孙老师说不要了，先不带这个字段把）
        accountNumber: i,//开户银行账号（这个字段后边孙老师说不要了，先不带这个字段把）
        materialId: i,//物料编码
        materialName: i,//物料名字
        feeElement: i,//费用要素
        paymentApplyId: i,//付款申请单ID
      })
    }

    tableLoading.value = false
  }, 1000)

}

getDetail()


const isBlank = (str) => {
  return str === null || str === undefined || str === '';
};
const blankText = (str) => {
  return isBlank(str) ? '-' : str;
};
const findLabel = (arr, value, valueKey = 'value', labelKey = 'label') => {
  let _valueKey = valueKey ?? 'value';
  let _labelKey = labelKey ?? 'label';
  if (!Array.isArray(arr)) return null;
  let target = arr.find((i) => i?.[_valueKey] === value);
  return target?.[_labelKey];
};
</script>
<style lange="scss" scope>
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