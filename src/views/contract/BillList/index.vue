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
                <el-button type="primary" @click="onSerach">搜索</el-button>
                <el-button @click="onReset(formRef)">重置</el-button>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </div>

    <div class="search-table">
      <el-table :data="taleData">
        <el-table-column label="序号" type="index" width="80" />
        <el-table-column label="单位名称" prop="单位名称" width="120" />
        <el-table-column label="费用需求部门/子公司" prop="费用需求部门/子公司" width="200" />
        <el-table-column label="产线名称" prop="产线名称" width="120" />
        <el-table-column label="是否公共业务（按产线分）" prop="是否公共业务（按产线分）" width="200" />
        <el-table-column label="公共业务分摊比例（%）" prop="公共业务分摊比例（%）" width="200" />
        <el-table-column label="动作" prop="动作" width="200" />
        <el-table-column label=" 合同名称" prop=" 合同名称" width="200" />
        <el-table-column label="合同编号" prop="合同编号" width="200" />
        <el-table-column label="合同金额（含税，元）" prop="合同金额（含税，元）" width="200" />
        <el-table-column label="合同金额（不含税，元）" prop="合同金额（不含税，元）" width="200" />
        <el-table-column label="合同预算余额" prop="合同预算余额" width="200" />
        <el-table-column label="合同金额计算方法" prop="合同金额计算方法" width="200" />
        <el-table-column label="合同起始日期" prop="合同起始日期" width="200" />
        <el-table-column label="合同终止日期" prop="合同终止日期" width="200" />
        <el-table-column label="合同起始日期" prop="合同起始日期" width="200" />
        <el-table-column label="供应商名称" prop="供应商名称" />
        <el-table-column label="支付性质（是否需要付款）" prop="支付性质（是否需要付款）" width="200" />
        <el-table-column label="当月预算金额（不含税，元）" prop="当月预算金额（不含税，元）" width="200" />
        <el-table-column label="本年预算累计金额（不含税，元）" prop="供应商名称" width="200" />
        <el-table-column label="内部/外部" prop="供应商名称" width="200" />
        <el-table-column label="结算方式（计算规则）" prop="供应商名称" width="200" />
        <el-table-column label="费用要素" prop="供应商名称" width="200" />
        <el-table-column label="是否签订合同" prop="供应商名称" width="200" />
        <el-table-column label="合同性质" prop="供应商名称" width="200" />
        <el-table-column label="是否签订合同" prop="供应商名称" width="200" />
        <el-table-column label="备注" prop="备注" width="200" />
        <el-table-column label="挂账金额（含税，元）" prop="供应商名称" width="200" />
        <el-table-column label="付款金额（含税，元）" prop="供应商名称" width="200" />
        <el-table-column label="集团标准成本取数" prop="供应商名称" width="200" />
        <el-table-column label="子公司标准成本取数" prop="供应商名称" width="200" />
        <el-table-column label="执行成本取数" prop="供应商名称" width="200" />

        <el-table-column label="操作" fixed="right">
          <template #default="{ row, $index }">
            <!-- <router-link :to="`/contract/detail?id=${row}`">
              <el-button type="danger" text @click="toDetail(row)">查看</el-button>
            </router-link> -->
            <router-link :to="`/contract/edit?id=${row}`">
              <el-button type="primary" link @click="toDetail(row)">编辑</el-button>
            </router-link>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination :total="totalItems" :current-page="pageInfo.current" :page-size="pageInfo.size"
        :page-sizes="[10, 20, 30, 50, 100]" @current-change="onCurrentChange" @size-change="onSizeChange"
        layout="total, sizes, prev, pager, next, jumper" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { AllocationRulesOptions } from '../enum'
import { useRouter, RouterLink } from 'vue-router';
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

const taleData = reactive([{}, {}])
const totalItems = ref(10000)
const pageInfo = reactive({
  current: 1,
  size: 10
})

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
const onSeach = () => {
  fetchData()
}

const onReset = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}

const onCurrentChange = (current) => {
  console.log('onChangePage')
  pageInfo.current = current
  fetchData()
}
const onSizeChange = (size) => {
  pageInfo.size = size
  fetchData()
}
const getSearchForm = () => {
  const params = {
    ...form,
    分摊开始日期: new Date(form.分摊开始日期).getTime(),
    分摊结束日期: new Date(form.分摊开始日期).getTime(),
    ...pageInfo
  }
  console.log(params)
  return params
}

const fetchData = () => {
  const params = getSearchForm()
  console.log('params', params)
}
</script>

<style lange="scss">
@import url('../index.scss');
</style>