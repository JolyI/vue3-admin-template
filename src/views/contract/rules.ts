import { reactive } from "vue"

const rules = reactive({
  ['baseInfo.合同号']: [{ required: true, message: '请输入合同号', trigger: 'change' }],
})
export default rules