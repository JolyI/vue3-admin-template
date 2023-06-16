import { reactive } from "vue"

const rules = reactive({
  ['baseInfo.合同号']: [{ required: true, message: '请输入合同号', trigger: 'change' }],
  ['baseInfo.合同名称']: [{ required: true, message: '请输入合同名称', trigger: 'change' }],
  ['baseInfo.合同签订日期']: [{ required: true, message: '请选择合同签订日期', trigger: 'change' }],
  ['baseInfo.合同生效日期']: [{ required: true, message: '请选择合同生效日期', trigger: 'change' }],
  ['baseInfo.合同结束日期']: [{ required: true, message: '请选择合同结束日期', trigger: 'change' }],
})
export default rules