import { reactive } from "vue"

export const rules = reactive({
  paymentApplyNo: [{ required: true, message: '请输入付款申请单号', trigger: 'change' }],
  date: [{ required: true, message: '请选择单据日期', trigger: 'change' }],
})