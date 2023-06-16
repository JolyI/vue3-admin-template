/**
 * 枚举信息
 */
interface OptionItems {
  label: string,
  value: string | number | object,
  key?: any
}

// 是/否 ，枚举


// 套用范本
export const ApplyExampleOptions: OptionItems[] = [
  {
    label: '工程合同',
    value: '1',
  },
  {
    label: '服务合同',
    value: '2',
  },
]

// 单据状态
export const DocumentStatusOptions: OptionItems[] = [
  {
    label: '保存',
    value: '1',
  },
  {
    label: '提交',
    value: '2',
  },
  {
    label: '审批中',
    value: '3',
  },
  {
    label: '审批完成',
    value: '4',
  },
  {
    label: '关闭',
    value: '5',
  },
]
// 合同分类
export const TypeOptions: OptionItems[] = [
  {
    label: '采购合同',
    value: '1',
  },
  {
    label: '销售合同',
    value: '2',
  },
]
// 合同类型
export const ContractTypeOptions: OptionItems[] = [
  {
    label: '费用合同',
    value: '1',
  },
  {
    label: '服务合同',
    value: '2',
  },
  {
    label: '大宗合同',
    value: '2',
  },
  {
    label: '备用合同',
    value: '2',
  },
]

// 合同性质
export const NatureContractOption: OptionItems[] = [
  {
    label: '制造费用',
    value: '1',
  },
  {
    label: '管理费用',
    value: '2',
  },
  {
    label: '销售费用',
    value: '3',
  },
]

// 是否我方范本
export const OwnerModelOptions: OptionItems[] = [
  {
    label: '是',
    value: '1',
  },
  {
    label: '否',
    value: '0',
  },
]

// 是否公共业务（按产线分）
export const PublicServiceOptions: OptionItems[] = [
  {
    label: '是',
    value: '1',
  },
  {
    label: '否',
    value: '0',
  },
]
// 分摊规则
export const AllocationRulesOptions: OptionItems[] = [
  {
    label: '年合同',
    value: '1',
  },
  {
    label: '吨产品结算',
    value: '2',
  },
  {
    label: '吨产品年合同',
    value: '3',
  },
  {
    label: '结算总价包干',
    value: '4',
  },
  {
    label: '按工作量结算',
    value: '5',
  },
  {
    label: '年修',
    value: '6',
  },
]
// 合同状态
export const ContractStatusOption: OptionItems[] = [
  {
    label: '终止',
    value: '1',
  },
  {
    label: '中止',
    value: '2',
  },
  {
    label: '关闭',
    value: '3',
  },
  {
    label: '执行中',
    value: '4',
  },
  {
    label: '签章中',
    value: '5',
  },
]
// 签署方式
export const SignModelOptions: OptionItems[] = [
  {
    label: '电子签章',
    value: '1',
  },
  {
    label: '线下签章',
    value: '2',
  },
]
// 签约类型
export const SignTypelOptions: OptionItems[] = [
  {
    label: '新签',
    value: '1',
  },
  {
    label: '续签',
    value: '2',
  },
]
// 合同主从
export const ContractMasterSlaveOptions: OptionItems[] = [
  {
    label: '主合同',
    value: '1',
  },
  {
    label: '从合同',
    value: '2',
  },
]
// 结算方式
export const SettlementOptions: OptionItems[] = [
  {
    label: '现金',
    value: '1',
  },
  {
    label: '商业承兑',
    value: '2',
  },
  {
    label: '同步财智云结算方式',
    value: '2',
  },
]
// 税率
export const TaxRateOptions: OptionItems[] = [
  {
    label: '增值税0%',
    value: '1',
  },
  {
    label: '增值税13%',
    value: '2',
  },
  {
    label: '增值税3%',
    value: '3',
  },
  {
    label: '增值税5%',
    value: '4',
  },
  {
    label: '增值税6%',
    value: '5',
  },
  {
    label: '增值税9%',
    value: '6',
  },
]
// 币种
export const CurrencyOptions: OptionItems[] = [
  {
    label: '人民币',
    value: 'CNY',
  },
  {
    label: '欧元',
    value: 'EUR',
  },
  {
    label: '英镑',
    value: 'GBP',
  },
  {
    label: '港币',
    value: 'HKD',
  },
  {
    label: '日元',
    value: 'JPY',
  },
  {
    label: '美元',
    value: 'USD',
  },
]
// 支付性质
export const NaturePaymentOptions: OptionItems[] = [
  {
    label: '是',
    value: '1',
  },
  {
    label: '否',
    value: '0',
  },
]
// 合同-内/外部
export const ContractSideOptions: OptionItems[] = [
  {
    label: '内部',
    value: '1',
  },
  {
    label: '外部',
    value: '2',
  },
]
// 所属集团
export const CompanyOptions: OptionItems[] = [
  {
    label: '唐钢公司',
    value: '1',
  },
  {
    label: '邯钢公司',
    value: '2',
  },
  {
    label: '张宣科技',
    value: '3',
  },
  {
    label: '承德钒钛',
    value: '4',
  },
  {
    label: '舞钢公司',
    value: '5',
  },
  {
    label: '石钢公司',
    value: '6',
  },
]

// 开票方式
export const InvoiceMethodOptions: OptionItems[] = [
  {
    label: '增值税专用发票',
    value: '1',
  },
  {
    label: '增值税普通发票',
    value: '2',
  },
]
// 款项类型
export const PaymentTypeOptions: OptionItems[] = [
  {
    label: '首付款',
    value: '1',
  },
  {
    label: '预付款',
    value: '2',
  },
  {
    label: '进度款',
    value: '3',
  },
  {
    label: '结算款',
    value: '4',
  },
  {
    label: '质保金',
    value: '5',
  },
  {
    label: '履约保证金',
    value: '6',
  },
  {
    label: '投标保证金',
    value: '7',
  },
  {
    label: '押金',
    value: '8',
  },
]
// 付款比例
export const PaymentRatioOptions: OptionItems[] = [
  {
    label: '10%',
    value: '10%',
  },
  {
    label: '20%',
    value: '20%',
  },
  {
    label: '30%',
    value: '30%',
  },
  {
    label: '40%',
    value: '40%',
  },
]
// 相对方
export const CounterpartOptions: OptionItems[] = [
  {
    label: '甲方',
    value: '1',
  },
  {
    label: '乙方',
    value: '2',
  },
]