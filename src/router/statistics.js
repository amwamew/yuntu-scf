/*
 * FileName: 统计分析路由
 * Project: yuntu-scf-vue
 * File Created: Monday, 21st May 2018 4:59:13 pm
 * Author: LiuBing
 */
//总路由
const Index = resolve => {
  import ('@/views/index').then(module => {
    resolve(module)
  })
}
//统计分析路由
const StatisticsIndex = resolve => {
  import ('@/views/statistics/index').then(module => {
    resolve(module)
  })
}
export default [{
  path: '/statistics',
  name: 'Statistics',
  component: Index,
  children: [{
    path: '/statistics',
    component: StatisticsIndex,
    children: []
  }]
}]
