/*
 * FileName: 路由配置
 * Project: yuntu-scf-vue
 * File Created: Tuesday, 15th May 2018 1:49:22 pm
 * Author: LiuBing
 */

import Vue from 'vue'
import Router from 'vue-router'

import Home from './home'//首页
import Setting from './setting'//系统设置
import Bank from './bank'//业务管理
import Statistics from './statistics'//统计分析
import Risk from './risk'//风控引擎

import Enterprise from './enterprise'//企业

Vue.use(Router)

export default new Router({
  routes: [
    ...Home,
    ...Bank,
    ...Setting,
    ...Statistics,
    ...Risk,
    ...Enterprise
  ]
})
