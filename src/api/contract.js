import { request } from '@/utils/request'

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
 * @method querySupplierInfo 查询相对方
 * @param {*} data
 * @returns
 */
export function querySupplierInfo(data) {
  return request({
    url: '/supplierInfo/querySupplierInfos',
    method: 'get',
    data
  })
}

