function getData(key) {
  if (key)
    return localStorage.getItem(key)
  return false
}

function setData(key, newData) {
  if (!!key) {
    localStorage.setItem(key, newData)
    return true
  }
  return false
}

export {
  getData,
  setData
}
