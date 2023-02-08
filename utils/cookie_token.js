import Cookies from 'js-cookie'

const InventoryIncrease = '@I' // ? means = inventoryIncrease
const Wallet = '@W' // ? means = wallet

//! InventoryIncrease Methods
export function getInventoryIncrease() {
  return localStorage.getItem(InventoryIncrease)
}
export function setInventoryIncrease(inventoryIncrease) {
  return localStorage.setItem(InventoryIncrease, inventoryIncrease)
}
export function removeInventoryIncrease() {
  return localStorage.removeItem(InventoryIncrease)
}

//! Wallet Methods
export function getWallet() {
  return localStorage.getItem(Wallet)
}
export function setWallet(wallet) {
  return localStorage.setItem(Wallet, wallet)
}
export function removeWallet() {
  return localStorage.removeItem(Wallet)
}
