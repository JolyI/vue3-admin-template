<template>
  <div>
    <el-row :gutter="15">
      <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px">
        <el-col :span="6">
          <el-form-item label="合同号" prop="合同号">
            <el-input v-model="formData.合同号" placeholder="请输入合同号" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="合同名称" prop="合同名称">
            <el-input v-model="formData.合同名称" placeholder="请输入合同名称" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="合同签订日期" prop="合同签订日期">
            <el-date-picker v-model="formData.合同签订日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd"
              :style="{width: '100%'}" placeholder="请选择合同签订日期" clearable></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="合同性质" prop="合同性质">
            <el-select v-model="formData.合同性质" placeholder="请选择合同性质" filterable clearable
              :style="{width: '100%'}">
              <el-option v-for="(item, index) in 合同性质Options" :key="index" :label="item.label"
                :value="item.value" :disabled="item.disabled"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item size="large">
            <el-button type="primary" @click="submitForm">提交</el-button>
            <el-button @click="resetForm">重置</el-button>
          </el-form-item>
        </el-col>
      </el-form>
    </el-row>
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data() {
    return {
      formData: {
        合同号: undefined,
        合同名称: undefined,
        合同签订日期: null,
        合同性质: undefined,
      },
      rules: {
        合同号: [{
          required: true,
          message: '请输入合同号',
          trigger: 'blur'
        }],
        合同名称: [{
          required: true,
          message: '请输入合同名称',
          trigger: 'blur'
        }],
        合同签订日期: [{
          required: true,
          message: '请选择合同签订日期',
          trigger: 'change'
        }],
        合同性质: [{
          required: true,
          message: '请选择合同性质',
          trigger: 'change'
        }],
      },
      合同性质Options: [{
        "label": "制造费用",
        "value": 1
      }, {
        "label": "管理费用",
        "value": 2
      }, {
        "label": "销售费用",
        "value": 3
      }],
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    submitForm() {
      this.$refs['elForm'].validate(valid => {
        if (!valid) return
        // TODO 提交表单
      })
    },
    resetForm() {
      this.$refs['elForm'].resetFields()
    },
  }
}

</script>
<style>
</style>
