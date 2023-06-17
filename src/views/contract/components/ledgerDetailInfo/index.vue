<template>
  <el-collapse v-model="activeNames">
    <div class="module-block">
      <el-collapse-item title="台账信息" name="finanicalInfo">
        <div class="space-right">
          <el-button type="primary" size="small" @click="() => addRow('conditionDataSource')">新增</el-button>
        </div>
        <el-tabs v-model="tabName" class="demo-tabs">
          <el-tab-pane label="付款条件" name="condition">
            <el-table :data="conditionDataSource">
              <el-table-column label="#" type="index" width="50" />
              <el-table-column label="款项类型" prop="款项类型">
                <template #default="{ row, column, $index }">
                  <el-select v-model="row[column.property]" placeholder="请选择"
                    @change="$event => editRow('conditionDataSource', $index, $event, column.property)">
                    <el-option v-for="item in PaymentTypeOptions" :key="item.label" :label="item.label"
                      :value="item.value" />
                  </el-select>
                </template>
              </el-table-column>
              <el-table-column label="付款比例" prop="付款比例">
                <template #default="{ row, column, $index }">
                  <el-select v-model="row[column.property]" placeholder="请选择"
                    @change="$event => editRow('conditionDataSource', $index, $event, column.property)">
                    <el-option v-for="item in PaymentRatioOptions" :key="item.label" :label="item.label"
                      :value="item.value" />
                  </el-select>
                </template>
              </el-table-column>
              <el-table-column label="付款条件" prop="付款条件">
                <template #default="{ row, column, $index }">
                  <el-input v-model="row[column.property]"
                    @input="$event => editRow('conditionDataSource', $index, $event, column.property)" />
                </template>
              </el-table-column>
              <el-table-column label="付款时间" width="200">
                <template #default="{ row, column, $index }">
                  <el-date-picker v-model="row[column.property]" placeholder="请选择"
                    @change="editRow('conditionDataSource', $index, $event, column.property)" size="small" :width="120" />
                </template>
              </el-table-column>
              <el-table-column label="应付金额" prop="应付金额">
                <template #default="{ row, column, $index }">
                  <el-input v-model="row[column.property]"
                    @input="$event => editRow('conditionDataSource', $index, $event, column.property)" />
                </template>
              </el-table-column>
              <el-table-column label="备注" prop="备注">
                <template #default="{ row, column, $index }">
                  <el-input v-model="row[column.property]"
                    @input="$event => editRow('conditionDataSource', $index, $event, column.property)" />
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template #default="{ row, $index }">
                  <el-button type="danger" size="small" text
                    @click="deleteRow(conditionDataSource, $index)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="相对方" name="counterpart">
            <el-table :data="counterpartDataSource">
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
    <el-dialog :visible="addModalVisible">

    </el-dialog>
  </el-collapse>
</template>
<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import { FormTypeProps } from '../../interface';
import useVMode from '../../useVMode';
import {
  PaymentTypeOptions,
  PaymentRatioOptions,

} from '../../enum'
const emits = defineEmits(['update:modelValue', 'changeLedgerDetailInfo'])
const activeNames = ref(['finanicalInfo'])
const tabName = ref('condition')


const conditionDataSource = ref<Array<any>>([])
const counterpartDataSource = ref([])
const addModalVisible = ref(false)

const editRow = (type: 'conditionDataSource' | 'counterpartDataSource', index, value, key) => {
  console.log('value', value)
  const tableData = type === 'conditionDataSource' ? conditionDataSource : counterpartDataSource;
  tableData.value[index][key] = value
  tableData.value = tableData.value.map((i, tindex) => {
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

const deleteRow = (tableData, index) => {
  conditionDataSource.value.splice(index, 1);
};

const addRow = (type: 'conditionDataSource' | 'counterpartDataSource') => {
  const tableData = type === 'conditionDataSource' ? conditionDataSource : counterpartDataSource;
  if (type === 'conditionDataSource') {
    const obj = {
      款项类型: '',
      付款比例: '',
      付款条件: '',
      付款时间: '',
      应付金额: '',
      备注: '',
    }
    tableData.value.push(obj);
  } else if (type === 'counterpartDataSource') {
    // 弹窗

  }
};

watch(
  conditionDataSource,
  (newValue) => {
    emits('changeLedgerDetailInfo', { key: 'conditionDataInfo', data: newValue })
  }
)
watch(
  counterpartDataSource,
  (newValue) => {
    emits('changeLedgerDetailInfo', { key: 'counterpartData', data: newValue })
  }
)


</script>
<style lang="scss">
@import url('../../index.scss');
</style>
