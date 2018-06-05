/*
 * FileName: 系统设置路由
 * Project: yuntu-scf-vue
 * File Created: Monday, 21st May 2018 4:57:30 pm
 * Author: LiuBing
 */
//总路由
const Index = resolve => {
  import ('@/views/index').then(module => {
    resolve(module)
  })
}
//系统设置路由
const SettingIndex = resolve => {
  import ('@/views/setting/index').then(module => {
    resolve(module)
  })
}

export default [{
  path: '/setting',
  name: 'Setting',
  component: Index,
  children: [{
    path: '/setting',
    component: SettingIndex,
    children: []
  }]
}]
