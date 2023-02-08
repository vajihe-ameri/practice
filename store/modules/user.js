import {
  getWallet,
  setWallet,
  removeWallet,
  getInventoryIncrease,
  setInventoryIncrease,
  removeInventoryIncrease
} from '@/utils/cookie_token'

// holds your root state
export const state = () => ({
  wallet: getWallet(),
  inventoryIncrease: getInventoryIncrease(),
})

// contains your actions
export const actions = {
  saveWallet ({ commit, state }, wallet) {
    state.wallet = wallet
    console.log(wallet)
  },
  saveAmount ({ commit, state }, amount) {
    state.inventoryIncrease = amount
    console.log(amount)
  },
}

// contains your mutations
export const mutations = {
  SET_WALLET: (state, wallet) => {
    state.wallet = wallet
  },
  SET_INVENTORY_INCREASE: (state, inventoryIncrease) => {
    state.inventoryIncrease = inventoryIncrease
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
