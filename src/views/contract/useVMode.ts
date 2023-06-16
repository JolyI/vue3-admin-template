import { computed } from 'vue'
/**
 * 表单处理 父子组件数据
 * @param props 
 * @param propName 
 * @param emits 
 * @returns 
 */
export default function useVMode(props: any, propName: any, emits: any) {
  return computed({
    get() {
      return new Proxy(props[propName], {
        set(obj, name, val) {
          console.log('表单变更-->', name, val);
          emits(`update:${propName}`, {
            ...obj,
            [name]: val
          });
          return true
        }
      })
    },
    set(val) {
      emits(`update:${propName}`, val)
    }
  })
}