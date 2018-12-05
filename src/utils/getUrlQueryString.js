// 获取url指定属性
function getUrlQueryString(name) {
  let reg = new RegExp('(^|&)'+ name +'=([^&]*)(&|$)')
  let str = window.location.hash.split('?')[1]
  if (str) {
    let r = str.match(reg)
    if (r != null) {
      return unescape(r[2])
    }
  }
  return null
}

export default getUrlQueryString
