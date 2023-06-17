<template>
  <el-collapse v-model="activeNames">
    <div class="module-block">
      <el-collapse-item title="财务信息" name="finanicalInfo">
        <el-row :gutter="15">
          <el-col :span="6">
            <el-form-item label="合同金额(含税)大写" prop="financialInfo.合同金额(含税)大写">
              <el-input disabled="true" v-model="form.financialInfo.合同金额" clearable placeholder="自动转化大写" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="合同总额(含税)" prop="financialInfo.合同总额（含税）">
              <el-input-number controls-position="right" v-model="form.financialInfo['合同总额（含税）']" clearable
                placeholder="请输入合同总额（含税）" :min="0" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="结算方式" prop="financialInfo.结算方式">
              <el-select v-model="form.financialInfo.结算方式" placeholder="请选择结算方式">
                <el-option v-for="item in SettlementOptions" :key="item.value" :label="item.label" :value="item.value" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="产量" prop="financialInfo.产量">
              <el-input-number controls-position="right" v-model="form.financialInfo.合同号" clearable placeholder="请输入产量"
                :min="0" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="合同总额(不含税)" prop="financialInfo.合同总额（不含税）">
              <el-input-number controls-position="right" v-model="form.financialInfo['合同总额（不含税）']" clearable
                placeholder="请输入合同总额（不含税）" :min="0" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="税率" prop="financialInfo.税率">
              <el-select v-model="form.financialInfo.税率" placeholder="请选择税率">
                <el-option v-for="item in TaxRateOptions" :key="item.value" :label="item.label" :value="item.value" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="开票方式" prop="financialInfo.开票方式">
              <el-select v-model="form.financialInfo.开票方式" placeholder="请选择开票方式">
                <el-option v-for="item in InvoiceMethodOptions" :key="item.value" :label="item.label"
                  :value="item.value" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="单价/吨" prop="financialInfo.单价/吨">
              <el-input-number controls-position="right" v-model="form.financialInfo['单价/吨']" clearable
                placeholder="请输入单价/吨" :min="0" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="税额" prop="financialInfo.税额">
              <el-input-number controls-position="right" v-model="form.financialInfo['税额']" clearable placeholder="请输入税额"
                :min="0" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="币别" prop="financialInfo.币别">
              <el-select v-model="form.financialInfo.币别" placeholder="请选择币别">
                <el-option v-for="item in CurrencyOptions" :key="item.value" :label="item.label" :value="item.value" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="是否需要付款" prop="financialInfo.是否需要付款">
              <el-select v-model="form.financialInfo.是否需要付款" placeholder="请选择是否需要付款">
                <el-option v-for="item in ISNeedPaymentOptions" :key="item.value" :label="item.label"
                  :value="item.value" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="合同金额(产量合同)" prop="financialInfo.合同金额(产量合同)">
              <el-input-number controls-position="right" v-model="form.financialInfo['合同金额(产量合同)']" clearable
                placeholder="请输入合同金额(产量合同)" :min="0" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="备注" prop="financialInfo.备注">
              <el-input v-model="form.financialInfo.备注" type="textarea" :autosize="{ minRows: 2, maxRows: 10 }"
                show-word-limit maxlength="500" clearable placeholder="请输入备注" />
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


} from '../../enum'
const emits = defineEmits(['update:modelValue'])
const activeNames = ref(['finanicalInfo'])

const props = defineProps<{
  modelValue: FormTypeProps,
}>()
const form = useVMode(props, 'modelValue', emits)
</script>
<style lang="scss">
@import url('../../index.scss');
</style>
