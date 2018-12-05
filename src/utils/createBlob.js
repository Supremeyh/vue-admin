//创建blob对象 res为blob对象
function createBlob(res, name) {
  // let blob = new Blob([res.data], {type: "application/vnd.ms-excel"}) //Excel Files 2003-2007 (.xls)
  // let blob = new Blob([res.data], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'"}) //Excel Files 2010 (.xlsx)
  let blob = new Blob([res.data], {type: 'application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'})
  let objectElement = document.createElement('a')
  objectElement.href = window.URL.createObjectURL(blob)
  objectElement.download = name + '.xls'
  document.body.appendChild(objectElement)
  objectElement.click()
  document.body.removeChild(objectElement) //下载完成移除元素
  window.URL.revokeObjectURL(objectElement.href) //释放掉blob对象
}
export default createBlob