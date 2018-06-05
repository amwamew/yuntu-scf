/*
 * FileName: 首页路由
 * Project: yuntu-scf-vue
 * File Created: Monday, 21st May 2018 4:55:18 pm
 * Author: LiuBing
 */
//总路由
const Index = resolve => {
  import ('@/views/index').then(module => {
    resolve(module)
  })
}

//首页
const Home = resolve => {
  import ('@/views/home/home').then(module => {
    resolve(module)
  })
}

export default [{
  path: '/',
  name: 'Index',
  component: Index,
  redirect: 'home',
  children: [{
    path: 'home',
    name: 'Home',
    component: Home
  }]
}]
