export interface FormTypeProps {
  baseInfo: {
    合同号: string,
    合同名称: string,
    合同签订日期: string,
    合同性质: string,
    '合同号-对方': string,
    合同分类: string,
    合同生效日期: string,
    费用需求部门: string,
    单据状态: string,
    合同类型: string,
    合同结束日期: string,
    "是否公共业务（按产线分）": string,
    签署公司: string,
    合同主从: string,
    预计交付时间: string,
    分摊规则: string,
    签署部门: string,
    合同状态: string,
    签署方式: string,
    '合同-内/外部': string,
    签署执行人: string,
    套用范本: string,
    签约类型: string,
    所属集团: string,
    上游单据号: string,
    合同版本: string,
    签署地点: string,
    备注: string,
  },
  // 财务信息
  financialInfo?: {
    '合同金额(含税)大写': string,
    '合同总额（含税）': string,
    结算方式: string,
    产量: string,
    '合同金额(不含税)': string,
    税率: string,
    开票方式: string,
    '单价/吨': string, // 默认0
    税额: string,
    币别: string,
    是否需要付款: string,
    '合同金额(产量合同)': string, //单价*产量=合同金额（2位小数）：默认是0
    备注: string,
  },
  // 台账明细
  ledgerDetailInfo?: {
    付款条件: {
      id: number,
      款项类型: string,
      付款比例: string,
      付款条件: string,
      付款时间: string,
      应付金额: string,
      备注: string,
    }[],
    相对方信息: {
      id: number,
      相对方: string,
      相对方名称: string,
      相对方地址: string,
      法定代表人: string,
      授权代理人: string,
      开户行: string,
      账户: string,
      统一社会信用码: string,
    }[],
    发票信息: {
      发票号: string,
      合同编号: string,
      收票单位: string,
      开票单位: string,
      发票开具日期: string,
      发票金额: string,
      发票状态: string,
      发票类型: string,
    }[]
  },
  // 附件
  attmentFiles?: any[]
  // 制单信息
  preparation?: any[]
}