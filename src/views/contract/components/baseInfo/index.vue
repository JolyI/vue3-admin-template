<template>
  <el-collapse v-model="activeNames">
    <div class="module-block">
      <el-collapse-item title="基本信息" name="baseInfo">
        <el-row :gutter="15">
          <el-col :span="6">
            <el-form-item label="合同号" prop="baseInfo.合同号">
              <el-input v-model="form.baseInfo.合同号" clearable placeholder="请输入合同号" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="合同名称" prop="baseInfo.合同名称">
              <el-input v-model="form.baseInfo.合同名称" clearable placeholder="请输入合同名称" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="合同签订日期" prop="baseInfo.合同签订日期">
              <el-date-picker v-model="form.baseInfo.合同签订日期" placeholder="请选择合同签订日期" format="YYYY-MM-DD" clearable />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="合同性质" prop="baseInfo.合同性质">
              <el-select v-model="form.baseInfo.合同性质" placeholder="请选择合同性质">
                <el-option v-for="item in NatureContractOption" :key="item.value" :label="item.label"
                  :value="item.value" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="合同号-对方" prop="baseInfo['合同号-对方']">
              <el-input v-model="form.baseInfo['合同号-对方']" clearable placeholder="请输入合同号-对方" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="合同分类" prop="baseInfo.合同分类">
              <el-select v-model="form.baseInfo.合同分类" placeholder="请选择合同分类">
                <el-option v-for="item in TypeOptions" :key="item.value" :label="item.label" :value="item.value" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="合同生效日期" prop="baseInfo.合同生效日期">
              <el-date-picker v-model="form.baseInfo.合同生效日期" placeholder="请选择合同生效日期" format="YYYY-MM-DD" clearable />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="费用需求部门" prop="baseInfo.费用需求部门">
              <el-select v-model="form.baseInfo.费用需求部门" placeholder="请选择费用需求部门">
                <el-option v-for="item in TypeOptions" :key="item.value" :label="item.label" :value="item.value" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="单据状态" prop="baseInfo.单据状态">
              <el-select v-model="form.baseInfo.单据状态" placeholder="请选择单据状态">
                <el-option v-for="item in DocumentStatusOptions" :key="item.value" :label="item.label"
                  :value="item.value" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="合同类型" prop="baseInfo.合同类型">
              <el-select v-model="form.baseInfo.合同类型" placeholder="请选择合同类型">
                <el-option v-for="item in ContractTypeOptions" :key="item.value" :label="item.label"
                  :value="item.value" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="合同结束日期" prop="baseInfo.合同结束日期">
              <el-date-picker v-model="form.baseInfo.合同结束日期" placeholder="请选择合同结束日期" format="YYYY-MM-DD" clearable />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="是否公共业务(按产线分)" prop="baseInfo.是否公共业务（按产线分）">
              <el-select v-model="form.baseInfo.合同类型" placeholder="请选择是否公共业务（按产线分）">
                <el-option v-for="item in PublicServiceOptions" :key="item.value" :label="item.label"
                  :value="item.value" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="签署公司" prop="baseInfo.签署公司">
              <el-input v-model="form.baseInfo.签署公司" clearable placeholder="请输入签署公司" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="合同主从" prop="baseInfo.合同主从">
              <el-select v-model="form.baseInfo.合同主从" placeholder="请选择合同主从">
                <el-option v-for="item in ContractMasterSlaveOptions" :key="item.value" :label="item.label"
                  :value="item.value" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="预计交付时间" prop="baseInfo.预计交付时间">
              <el-date-picker v-model="form.baseInfo.预计交付时间" placeholder="请选择合同结束日期" format="YYYY-MM-DD" clearable />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="分摊规则" prop="baseInfo.分摊规则">
              <el-select v-model="form.baseInfo.合同主从" placeholder="请选择分摊规则">
                <el-option v-for="item in AllocationRulesOptions" :key="item.value" :label="item.label"
                  :value="item.value" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="签署部门" prop="baseInfo.签署部门">
              <el-select v-model="form.baseInfo.签署部门" placeholder="请选择签署部门">
                <el-option v-for="item in AllocationRulesOptions" :key="item.value" :label="item.label"
                  :value="item.value" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="合同状态" prop="baseInfo.合同状态">
              <el-select v-model="form.baseInfo.合同状态" placeholder="请选择合同状态">
                <el-option v-for="item in ContractStatusOption" :key="item.value" :label="item.label"
                  :value="item.value" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="签署方式" prop="baseInfo.签署方式">
              <el-select v-model="form.baseInfo.签署方式" placeholder="请选择签署方式">
                <el-option v-for="item in SignModelOptions" :key="item.value" :label="item.label" :value="item.value" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="合同-内/外部" prop="baseInfo.合同-内/外部">
              <el-select v-model="form.baseInfo['合同-内/外部']" placeholder="请选择合同-内/外部">
                <el-option v-for="item in ContractSideOptions" :key="item.value" :label="item.label"
                  :value="item.value" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="签署执行人" prop="baseInfo.签署执行人">
              <el-select v-model="form.baseInfo.签署执行人" placeholder="请选择签署执行人">
                <el-option v-for="item in ContractSideOptions" :key="item.value" :label="item.label"
                  :value="item.value" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="套用范本" prop="baseInfo.套用范本">
              <el-select v-model="form.baseInfo.套用范本" placeholder="请选择套用范本">
                <el-option v-for="item in ApplyExampleOptions" :key="item.value" :label="item.label"
                  :value="item.value" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="签约类型" prop="baseInfo.签约类型">
              <el-select v-model="form.baseInfo.签约类型" placeholder="请选择签约类型">
                <el-option v-for="item in SignTypelOptions" :key="item.value" :label="item.label" :value="item.value" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="所属集团" prop="baseInfo.所属集团">
              <el-select v-model="form.baseInfo.所属集团" placeholder="请选择所属集团">
                <el-option v-for="item in CompanyOptions" :key="item.value" :label="item.label" :value="item.value" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="上游单据号" prop="baseInfo.上游单据号">
              <el-input v-model="form.baseInfo.上游单据号" clearable placeholder="请输入上游单据号" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="合同版本" prop="baseInfo.合同版本">
              <el-input v-model="form.baseInfo.合同版本" clearable placeholder="请输入合同版本" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="签署地点" prop="baseInfo.签署地点">
              <el-input v-model="form.baseInfo.签署地点" clearable placeholder="请输入签署地点" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="动作" prop="baseInfo.动作">
              <el-input v-model="form.baseInfo.动作" clearable placeholder="请输入动作" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="备注" prop="baseInfo.备注">
              <el-input v-model="form.baseInfo.备注" type="textarea" :autosize="{ minRows: 2, maxRows: 10 }" show-word-limit
                maxlength="500" clearable placeholder="请输入备注" />
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

} from '../../enum'
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
