import { reactive } from "vue"

export const rules = reactive({
  ['number']: [{ required: true, message: '请输入合同号', trigger: 'change' }],
  ['name']: [{ required: true, message: '请输入合同名称', trigger: 'change' }],
  ['signDate']: [{ required: true, message: '请选择合同签订日期', trigger: 'change' }],
  ['effectivenessDate']: [{ required: true, message: '请选择合同生效日期', trigger: 'change' }],
  ['endDate']: [{ required: true, message: '请选择合同结束日期', trigger: 'change' }],
})

export const paymentPlanDialogRules = reactive({
  paymenyType: [{ required: true, message: '请选择款项类型', trigger: 'change' }],
  paymentRadio: [{ required: true, message: '请选择付款比例', trigger: 'change' }],
  paymentTerms: [{ required: true, message: '请输入付款条件', trigger: 'change' }],
  paymentTime: [{ required: true, message: '请选择付款时间', trigger: 'change' }],
  remark: [{ required: false, message: '请输入备注', trigger: 'change' }],
})
export const linesRules = reactive({
  lineId: [{ required: true, message: '请选择产线名称', trigger: 'change' }],
  elementId: [{ required: true, message: '请选择费用要素', trigger: 'change' }],
  ratio: [{ required: true, message: '请输入公共业务分摊比例（%）', trigger: 'change' }],
})