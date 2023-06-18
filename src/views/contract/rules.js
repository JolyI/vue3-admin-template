import { reactive } from "vue"

const rules = reactive({
  ['number']: [{ required: true, message: '请输入合同号', trigger: 'change' }],
  ['name']: [{ required: true, message: '请输入合同名称', trigger: 'change' }],
  ['signDate']: [{ required: true, message: '请选择合同签订日期', trigger: 'change' }],
  ['effectivenessDate']: [{ required: true, message: '请选择合同生效日期', trigger: 'change' }],
  ['endDate']: [{ required: true, message: '请选择合同结束日期', trigger: 'change' }],
})
export default rules