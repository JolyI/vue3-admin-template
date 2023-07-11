<template>
  <div>
    <el-form :model="shareForm" ref="shareFormRef">
      <el-table :data="shareData" :key="tableKey">
        <el-table-column label="比例%">
          <template #default="{ row }">
            {{ blankText(row?.x) }}
          </template>
        </el-table-column>
        <el-table-column label="月分摊总额(调整)">
          <template #default="{ row }">
            {{ blankText(row?.x) }}
          </template>
        </el-table-column>
        <el-table-column label="暂估金额(不含税)" prop="currentAmount">
          <template #default="{ row, $index }">
            <el-form-item label="" :prop="`shareForm.list[${$index}].currentAmount`" :rules="{
              trigger: 'change',
              validator: (rule, value, callback) => validatorAmount(callback, $index, 'currentAmount')
            }">
              <el-input type="text" v-model="row.currentAmount" :min="0" controls-position="right"
                :formatter="onFormatter" :parser="onParser"
                @blur="(e) => onBlur(e.target.value, $index, 'currentAmount')" />
            </el-form-item>
          </template>
        </el-table-column>
        <el-table-column label="暂估金额(含税)">
          <template #default="{ row, $index }">
            <el-form-item label="" :prop="`shareForm.value.list.${$index}.currentAmountTax`" :rules="{
              trigger: 'change',
              validator: (rule, value, callback) => validatorAmount(callback, $index, 'currentAmountTax')
            }">
              <el-input type="text" v-model="row.currentAmountTax" :min="0" controls-position="right"
                :formatter="onFormatter" :parser="onParser"
                @blur="(e) => onBlur(e.target.value, $index, 'currentAmountTax')" />
            </el-form-item>
          </template>
        </el-table-column>
      </el-table>
    </el-form>
  </div>
</template>
<script setup>
import { toRefs, ref } from 'vue';
import { blankText, formatTime, isBlank } from '../utils';


const tableKey = ref(new Date().getTime())

const data = {
  shareData: [],
  shareForm: {
    list: []
  },
  shareFormRef: undefined,
}

const {
  shareData,
  shareForm,
  shareFormRef,
} = toRefs(data)


const validatorAmount = (callback, index, key) => {
  const value = shareData.value[index][key]
  const newValue = `${value}`?.replace(/\$\s?|(,*)/g, '')
  if (isNaN(Number(newValue))) {
    callback(new Error('请输入数字'))
  } else if (isBlank(value)) {
    const errText = key === 'currentAmountTax' ? '暂估金额(不含税)必填' : '暂估金额(不含税)必填';
    callback(new Error(errText))
  } else {
    callback()
  }
}
const onFormatter = (value) => {
  const newValue = addThousands(value)
  return newValue
}
const onParser = (value) => {
  const newValue = value.replace(/\$\s?|(,*)/g, '')
  return newValue
}

const addThousands = (num) => {
  let reg = /\d{1,3}(?=(\d{3})+$)/g;
  if (num && String(num).indexOf('.') === -1) {
    return String(num).replace(reg, '$&,');
  } else {
    return String(num).replace(/(\d)(?=(\d{3})+\.)/g, ($0, $1) => {
      return $1 + ',';
    });
  }
};
const onBlur = (value, index, key) => {
  let newValue = Number(value?.replace(/\$\s?|(,*)/g, '') || 0)
  if (!isNaN(Number(newValue))) {
    newValue = Number(newValue).toFixed(2);
    newValue = addThousands(newValue)
  }
  const item = {
    ...shareData.value[index],
    [key]: newValue
  }
  shareData.value.splice(index, 1, item)
  // shareData.value = []
  console.log(shareData.value)
  tableKey.value = new Date().getTime()
}

const onSaveChild = async (d) => {
  if (!shareFormRef) return
  shareFormRef.value.validate((validate) => {
    if (validate) {
      const list = shareForm.value.list.map(i => {
        const currentAmount = Number((`${i.currentAmount || 0}`).replace(/,/g, '')).toFixed(2)
        const currentAmountTax = Number((`${i.currentAmountTax || 0}`).replace(/,/g, '')).toFixed(2)
        return {
          ...i,
          currentAmount: Number(currentAmount),
          currentAmountTax: Number(currentAmountTax),
        }
      })
    } else {

    }
  })
}


const getDetail = () => {
  const rows = [
    {
      id: 990,
      currentAmount: null,
      currentAmountTax: null,
    },
    {
      id: 983,
      currentAmount: 1212121.03094,
      currentAmountTax: null,
    },
  ]
  shareData.value = rows;
  shareForm.value.list = rows
}



getDetail()

defineExpose({
  onSaveChild
})
</script>