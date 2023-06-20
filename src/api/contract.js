import request from '@/utils/request'

/**
 * @method addContract 新增合同
 * @param {*} data
 * @returns
 */
export function addContract(data) {
  return request({
    url: '/contract/add',
    method: 'post',
    data
  })
}
/**
 * @method updateContract 编辑合同
 * @param {*} data
 * @returns
 */
export function updateContract(data) {
  return request({
    url: '/contract/update',
    method: 'post',
    data
  })
}
/**
 * @method queryContactList 合同列表
 * @param {*} data
 * @returns
 */
export function queryContactList(data) {
  return request({
    url: '/contract/queryContractList',
    method: 'post',
    data
  })
}
/**
 * @method querySupplierInfo 查询相对方
 * @param {*} data
 * @returns
 */
export function querySupplierInfos(data) {
  return request({
    url: '/supplierInfo/queryContractSupplierResultByContractNums',
    method: 'get',
    data
  })
}
/**
 * @method addPaymentPlan 添加付款条件
 * @param {*} data
 * @returns
 */
export function addPaymentPlan(data) {
  return request({
    url: '/paymentPlan/add',
    method: 'post',
    data
  })
}
/**
 * @method getUnionCode
 * @param {*} data
 * @returns
 */
export function getUnionCode() {
  return request({
    url: '/contract/getUnionCode',
    method: 'get',
    data:{}
  })
}
/**
 * @method queryPaymentplanByContractNum 获取付款条件
 * @param {*} data
 * @returns
 */
export function queryPaymentplanByContractNum(data) {
  return request({
    url: '/paymentPlan/queryPaymentPlanByContractNum',
    method: 'get',
    params:data
  })
}
/**
 * @method queryCostDeptByNature 费用需求部门
 * @param {*} data
 * @returns
 */
export function queryCostDeptByNature(data) {
  return request({
    url: '/supplierInfo/queryCostDeptByNature?nature='+data,
    method: 'get',
  })
}

/**
 * @method addContractSupplierBinding 合同与相对方绑定
 * @param {*} data
 * @returns
 */
export function addContractSupplierBinding(data) {
  return request({
    url: '/supplierInfo/addContractSupplierBinding',
    method: 'get',
    params:data
  })
}
/**
 * @method querySupplierInfoByContractNum 查询合同相对方
 * @param {*} data
 * @returns
 */
export function querySupplierInfoByContractNum(data) {
  return request({
    url: '/supplierInfo/querySupplierInfosByContractNum',
    method: 'get',
    params:data
  })
}
/**
 * @method queryContractDetail 查询合同详情
 * @param {*} data
 * @returns
 */
export function queryContractDetail(unionCode) {
  return request({
    url: '/contract/'+unionCode,
    method: 'get',
  })
}
/**
 * @method querySignCompany 查询签署公司
 * @param {*} data
 * @returns
 */
export function querySignCompany() {
  return request({
    url: '/supplierInfo/querySignCompany',
    method: 'get',
    data:{
      pageSize:1,
      pageNum:1000
    }
  })
}
/**
 * @method queryLine 查询产线
 * @param {*} data
 * @returns
 */
export function queryLine(data) {
  return request({
    url: '/supplierInfo/queryLine',
    method: 'get',
    params:{
      ...data,
      pageSize:1,
      pageNum:1000
    }
  })
}
/**
 * @method addAllocationRule 新增分摊规则
 * @param {*} data
 * @returns
 */
export function addAllocationRule(data) {
  return request({
    url: '/allocationRule/add',
    method: 'post',
    data
  })
}
/**
 * @method queryFeeElement 费用要素
 * @param {*} data
 * @returns
 */
export function queryFeeElement() {
  return request({
    url: '/supplierInfo/queryFeeElement',
    method: 'get',
    params:{
      pageSize:1000,
      pageNum:1
    }
  })
}
/**
 * @method queryFeeElement 产线
 * @param {*} data
 * @returns
 */
export function queryAllocationRuleByContractNum(data) {
  return request({
    url: '/allocationRule/queryAllocationRuleByContractNum',
    method: 'get',
    params:data
  })
}
/**
 * @method queryContractDetailList 明细列表
 * @param {*} data
 * @returns
 */
export function queryContractDetailList(data) {
  return request({
    url: '/contract/queryContractDetailList',
    method: 'post',
    data
  })
}
/**
 * @method uploadFile 文件上传
 * @param {*} data
 * @returns
 */
export function uploadFile(data) {
  return request({
    url: '/contract/uploadFile',
    method: 'post',
    data
  })
}

