<template>
  <div>
    <div class="space-left">
      <el-button type="primary">保存</el-button>
      <el-button type="default">返回列表</el-button>
    </div>
    <el-collapse v-model="shareCollapse.module1">
      <div class="module-block">
        <el-collapse-item name="module1" title="合同分摊">
          <div>
            <el-table :data="contractData">
              <el-table-column label="合同编号" width="150">
                <template #default="{ row }">
                  {{ blankText(row?.x) }}
                </template>
              </el-table-column>
              <el-table-column label="合同生效日期" width="150">
                <template #default="{ row }">
                  {{ blankText(row?.x) }}
                </template>
              </el-table-column>
              <el-table-column label="合同结束日期" width="150">
                <template #default="{ row }">
                  {{ blankText(row?.x) }}
                </template>
              </el-table-column>
              <el-table-column label="合同总额(不含税)" width="150">
                <template #default="{ row }">
                  {{ blankText(row?.x) }}
                </template>
              </el-table-column>
              <el-table-column label="合同总额(含税)" flex>
                <template #default="{ row }">
                  {{ blankText(row?.x) }}
                </template>
              </el-table-column>
            </el-table>
            <el-divider />
            <el-table :data="ruleData" class="rule-table">
              <el-table-column label="分摊规则" width="150">
                <template #default="{ row }">
                  {{ blankText(row?.x) }}
                </template>
              </el-table-column>
              <el-table-column label="分摊起始月" width="150">
                <template #default="{ row }">
                  {{ blankText(row?.x) }}
                </template>
              </el-table-column>
              <el-table-column label="分摊结束月" width="150">
                <template #default="{ row }">
                  {{ blankText(row?.x) }}
                </template>
              </el-table-column>
              <el-table-column label="分摊期">
                <template #default="{ row }" width="150">
                  {{ blankText(row?.x) }}
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-collapse-item>
      </div>
    </el-collapse>
    <el-collapse v-model="shareCollapse.module2">
      <div class="module-block">
        <el-collapse-item name="module2" title="分摊规则">
          <el-row gutter="20">
            <el-col :span="12">
              <el-alert type="info" :closable="false" class="rule-info">
                <div v-html="ruleDetail.desc" />
              </el-alert>
            </el-col>
            <el-col :span="12">
              <el-alert type="info" :closable="false" class="rule-info">
                <div v-html="ruleDetail.example" />
              </el-alert>
            </el-col>
          </el-row>
        </el-collapse-item>
      </div>
    </el-collapse>
    <el-collapse v-model="shareCollapse.module3">
      <div class="module-block">
        <el-collapse-item name="module3" title="分摊明细">
          <el-table :data="shareData">
            <el-table-column width="150" label="明细">
              <template #default="{ row }">
                {{ blankText(row?.x) }}
              </template>
            </el-table-column>
            <el-table-column width="150" label="分摊比例% 初始">
              <template #default="{ row }">
                {{ blankText(row?.x) }}
              </template>
            </el-table-column>
            <el-table-column width="150" label="费用要素">
              <template #default="{ row }">
                {{ blankText(row?.x) }}
              </template>
            </el-table-column>
            <el-table-column width="150" label="分摊月份">
              <template #default="{ row }">
                {{ blankText(row?.x) }}
              </template>
            </el-table-column>
            <el-table-column width="150" label="月分摊总额(初始)">
              <template #default="{ row }">
                {{ blankText(row?.x) }}
              </template>
            </el-table-column>
            <el-table-column width="150" label="分摊金额(不含税)">
              <template #default="{ row }">
                {{ blankText(row?.x) }}
              </template>
            </el-table-column>
            <el-table-column width="150" label="分摊金额(含税)">
              <template #default="{ row }">
                {{ blankText(row?.x) }}
              </template>
            </el-table-column>
            <el-table-column width="150" label="分摊比例%(调整)">
              <template #default="{ row }">
                {{ blankText(row?.x) }}
              </template>
            </el-table-column>
            <el-table-column width="150" label="月分摊总额(调整)">
              <template #default="{ row }">
                {{ blankText(row?.x) }}
              </template>
            </el-table-column>
            <el-table-column width="150" label="调整原因">
              <template #default="{ row }">
                {{ blankText(row?.x) }}
              </template>
            </el-table-column>
            <el-table-column width="150" label="分摊金额(不含税)">
              <template #default="{ row }">
                {{ blankText(row?.x) }}
              </template>
            </el-table-column>
            <el-table-column width="150" label="分摊金额(含税)">
              <template #default="{ row }">
                {{ blankText(row?.x) }}
              </template>
            </el-table-column>
            <el-table-column width="150" label="调整时间">
              <template #default="{ row }">
                {{ blankText(row?.x) }}
              </template>
            </el-table-column>
            <el-table-column width="150" label="调整人">
              <template #default="{ row }">
                {{ blankText(row?.x) }}
              </template>
            </el-table-column>
          </el-table>
        </el-collapse-item>
      </div>
    </el-collapse>
  </div>
</template>
<script setup name="share">
import { reactive, toRefs, ref, watch, vue } from 'vue'
import { blankText } from '../contract/utils';

const activeNames = reactive(['module1'])
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
}
const contractData = reactive([])
contractData.value
const {
  shareCollapse,
  // contractData,
  ruleData,
  ruleDetail,
  shareData,
} = toRefs(data)


const getDetail = () => {
  const desc = `分摊规则年合同 <br>1、分摊规则:年合同 (次月逐月分摊当月金额=不含税合同金额-分摊月份分摊月份=合同结束月份-合同开始月份+1 <br>2、合同分摊完毕后，只能调整当月之后的数据，历史数据不能调整例如6月15日后做下个月的预算，只能调整7月之后的预算`;
  const example = '示例:<br>合同起始日期=2023年2月5日，合同结束日期=2023年11月31日<br>分摊起始月份=2023年3月份，分摊终止月份=2023年12月<br>分摊月份=11-2+1=10个月，合同不含税金额=100万元<br>每月分摊金额=100/10=10万元';
  ruleDetail.value.desc = desc
  ruleDetail.value.example = example
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