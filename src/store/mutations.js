import * as types from './mutation-types'

const mutations = {
  [types.SET_TOP_MENU](state, data) {
    state.topMenu = data
  },
  [types.SET_BANK_MENU](state, data) {
    state.bankMenu = data
  },
  [types.SET_RISK_MENU](state, data) {
    state.riskMenu = data
  },
  [types.SET_ACTIVE_TOP_INDEX](state, data) {
    state.activeTopIndex = data
  },
  [types.SET_ACTIVE_LEFT_INDEX](state, data) {
    state.activeLeftIndex = data
  },
  [types.SET_BANK_TYPE](state, data) {
    state.bankType = data
  },
  [types.SET_ENTERPRISE_BASIC_INFO](state, data) {
    state.enterpriseBasicInfo = data
  },
  [types.SET_ENTERPRISE_MENUS](state, data) {
    state.enterpriseMeuns = data
  }
}

export default mutations
