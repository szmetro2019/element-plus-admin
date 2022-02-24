// 校验是否是金额
export function isMoney(money:string | Number) {
  return /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/.test(money)
}
// 数字转化为大写金额
export const digitUppercase = (n:any) => {
  const fraction = ['角', '分']
  const digit = [
    '零', '壹', '贰', '叁', '肆',
    '伍', '陆', '柒', '捌', '玖'
  ]
  const unit = [
    ['元', '万', '亿'],
    ['', '拾', '佰', '仟']
  ]
  n = Math.abs(n)
  let s = ''
  for (let i = 0; i < fraction.length; i++) {
    s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '')
  }
  s = s || '整'
  n = Math.floor(n)
  for (let i = 0; i < unit[0].length && n > 0; i++) {
    let p = ''
    for (let j = 0; j < unit[1].length && n > 0; j++) {
      p = digit[n % 10] + unit[1][j] + p
      n = Math.floor(n / 10)
    }
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s
  }
  return s.replace(/(零.)*零元/, '元')
    .replace(/(零.)+/g, '零')
    .replace(/^整$/, '零元整')
}
// 数字转化为中文数字
export const intToChinese = (value:any) => {
  const str = String(value)
  const len = str.length - 1
  const idxs = ['', '十', '百', '千', '万', '十', '百', '千', '亿', '十', '百', '千', '万', '十', '百', '千', '亿']
  const num = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
  return str.replace(/([1-9]|0+)/g, ($, $1, idx, full) => {
    let pos = 0
    if ($1[0] !== '0') {
      pos = len - idx
      if (idx === 0 && $1[0] === 1 && idxs[len - idx] === '十') {
        return idxs[len - idx]
      }
      return num[$1[0]] + idxs[len - idx]
    } else {
      const left = len - idx
      const right = len - idx + $1.length
      if (Math.floor(right / 4) - Math.floor(left / 4) > 0) {
        pos = left - left % 4
      }
      if (pos) {
        return idxs[pos] + num[$1[0]]
      } else if (idx + $1.length >= len) {
        return ''
      } else {
        return num[$1[0]]
      }
    }
  })
}

// 生成指定范围随机数
export const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

// 数字千分位分隔
export const format = (n) => {
  const num = n.toString()
  const len = num.length
  if (len <= 3) {
    return num
  } else {
    const temp = ''
    const remainder = len % 3
    if (remainder > 0) { // 不是3的整数倍
      return num.slice(0, remainder) + ',' + num.slice(remainder, len).match(/\d{3}/g).join(',') + temp
    } else { // 3的整数倍
      return num.slice(0, len).match(/\d{3}/g).join(',') + temp
    }
  }
}

// 数组乱序

export const arrScrambling = (arr:any) => {
  for (let i = 0; i < arr.length; i++) {
    const randomIndex = Math.round(Math.random() * (arr.length - 1 - i)) + i;
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]]
  }
  return arr
}
// 数组扁平化
export const flatten:any = (arr: any) => {
  let result: any = []

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]))
    } else {
      result.push(arr[i])
    }
  }
  return result
}

// 数组中获取随机数
export const sample = (arr:any) => arr[Math.floor(Math.random() * arr.length)]

// 生成随机字符串
export const randomString = (len: any) => {
  const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789'
  const strLen = chars.length
  let randomStr = ''
  for (let i = 0; i < len; i++) {
    randomStr += chars.charAt(Math.floor(Math.random() * strLen))
  }
  return randomStr
}

// 字符串首字母大写
export const fistLetterUpper = (str: any) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
// 手机号中间四位变成*

export const telFormat = (tel: any) => {
  tel = String(tel)
  return tel.substr(0, 3) + '****' + tel.substr(7)
}
// 驼峰命名转换成短横线命名
export const getKebabCase = (str: any) => {
  return str.replace(/[A-Z]/g, (item: any) => '-' + item.toLowerCase())
}
// 短横线命名转换成驼峰命名
export const getCamelCase = (str: any) => {
  return str.replace(/-([a-z])/g, (i: any, item: any) => item.toUpperCase())
}

// 全角转换为半角
export const toCDB = (str: any) => {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i)
    if (code >= 65281 && code <= 65374) {
      result += String.fromCharCode(str.charCodeAt(i) - 65248)
    } else if (code === 12288) {
      result += String.fromCharCode(str.charCodeAt(i) - 12288 + 32)
    } else {
      result += str.charAt(i)
    }
  }
  return result
}
// 半角转换为全角
export const toDBC = (str) => {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i)
    if (code >= 33 && code <= 126) {
      result += String.fromCharCode(str.charCodeAt(i) + 65248)
    } else if (code === 32) {
      result += String.fromCharCode(str.charCodeAt(i) + 12288 - 32)
    } else {
      result += str.charAt(i)
    }
  }
  return result
}


// 存储loalStorage
export const loalStorageSet = (key: any, value: any) => {
  if (!key) return
  if (typeof value !== 'string') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

// 获取localStorage
export const loalStorageGet = (key: any) => {
  if (!key) return
  return window.localStorage.getItem(key)
}

// 删除localStorage
export const loalStorageRemove = (key: any) => {
  if (!key) return
  window.localStorage.removeItem(key)
}

// 存储sessionStorage
export const sessionStorageSet = (key: any, value: any) => {
  if (!key) return
  if (typeof value !== 'string') {
    value = JSON.stringify(value)
  }
  window.sessionStorage.setItem(key, value)
}

// 获取sessionStorage
export const sessionStorageGet = (key: any) => {
  if (!key) return
  return window.sessionStorage.getItem(key)
}

// 删除sessionStorage
export const sessionStorageRemove = (key: any) => {
  if (!key) return
  window.sessionStorage.removeItem(key)
}

// 设置cookie
export const setCookie = (key: any, value: any, expire: any) => {
  const d = new Date()
  d.setDate(d.getDate() + expire)
  document.cookie = `${key}=${value};expires=${d.toUTCString()}`
}
// 读取cookie
export const getCookie = (key: any) => {
  const cookieStr = unescape(document.cookie)
  const arr = cookieStr.split('; ')
  let cookieValue = ''
  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i].split('=')
    if (temp[0] === key) {
      cookieValue = temp[1]
      break
    }
  }
  return cookieValue
}

// 删除cookie
export const delCookie = (key: any) => {
  document.cookie = `${encodeURIComponent(key)}=;expires=${new Date()}`
}

// 校验身份证号码
export const checkCardNo = (value: any) => {
  const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
  return reg.test(value)
}

// 校验是否包含中文
export const haveCNChars = (value: any) => {
  return /[\u4e00-\u9fa5]/.test(value)
}

// 校验是否为中国大陆的邮政编码
export const isPostCode = (value: any) => {
  return /^[1-9][0-9]{5}$/.test(value.toString())
}

// 校验是否为IPv6地址
export const isIPv6 = (str: any) => {
  return Boolean(str.match(/:/g) ? str.match(/:/g).length <= 7 : false && /::/.test(str) ? /^([\da-f]{1,4}(:|::)){1,6}[\da-f]{1,4}$/i.test(str) : /^([\da-f]{1,4}:){7}[\da-f]{1,4}$/i.test(str))
}
// 校验是否为邮箱地址
export const isEmail = (value: any) => {
  return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)
}
// 校验是否为中国大陆手机号
export const isTel = (value: any) => {
  return /^1[3,4,5,6,7,8,9][0-9]{9}$/.test(value.toString())
}
// 校验是否包含emoji表情
export const isEmojiCharacter = (value: any) => {
  value = String(value)
  for (let i = 0; i < value.length; i++) {
    const hs = value.charCodeAt(i)
    if (hs >= 0xd800 && hs <= 0xdbff) {
      if (value.length > 1) {
        const ls = value.charCodeAt(i + 1)
        const uc = ((hs - 0xd800) * 0x400) + (ls - 0xdc00) + 0x10000
        if (uc >= 0x1d000 && uc <= 0x1f77f) {
          return true
        }
      }
    } else if (value.length > 1) {
      const ls = value.charCodeAt(i + 1)
      if (ls == 0x20e3) {
        return true
      }
    } else {
      if (hs >= 0x2100 && hs <= 0x27ff) {
        return true
      } else if (hs >= 0x2B05 && hs <= 0x2b07) {
        return true
      } else if (hs >= 0x2934 && hs <= 0x2935) {
        return true
      } else if (hs >= 0x3297 && hs <= 0x3299) {
        return true
      } else if (hs == 0xa9 || hs == 0xae || hs == 0x303d || hs == 0x3030 ||
        hs == 0x2b55 || hs == 0x2b1c || hs == 0x2b1b ||
        hs == 0x2b50) {
        return true
      }
    }
  }
  return false
}

// 获取URL参数列表

// export const GetRequest = () => {
//   const url = location.search
//   const paramsStr = /.+\?(.+)$/.exec(url)[1] // 将 ? 后面的字符串取出来
//   const paramsArr = paramsStr.split('&') // 将字符串以 & 分割后存到数组中
//   const paramsObj = {}
//   // 将 params 存到对象中
//   paramsArr.forEach(param => {
//     if (/=/.test(param)) { // 处理有 value 的参数
//       let [key, val] = param.split('=') // 分割 key 和 value
//       val = decodeURIComponent(val) // 解码
//       val = /^\d+$/.test(val) ? parseFloat(val) : val // 判断是否转为数字
//       if (paramsObj.hasOwnProperty(key)) { // 如果对象有 key，则添加一个值
//         paramsObj[key] = [].concat(paramsObj[key], val)
//       } else { // 如果对象没有这个 key，创建 key 并设置值
//         paramsObj[key] = val
//       }
//     } else { // 处理没有 value 的参数
//       paramsObj[param] = true
//     }
//   })
//   return paramsObj
// }

// 检测URL是否有效

// export const getUrlState = (URL) => {
//   const xmlhttp = new ActiveXObject('microsoft.xmlhttp')
//   xmlhttp.Open('GET', URL, false)
//   try {
//     xmlhttp.Send()
//   } catch (e) {
//   } finally {
//     const result = xmlhttp.responseText
//     if (result) {
//       if (xmlhttp.Status === 200) {
//         return true
//       } else {
//         return false
//       }
//     } else {
//       return false
//     }
//   }
// }

// 键值对拼接成URL参数
export const params2Url = (obj: any) => {
  const params = []
  for (const key in obj) {
    params.push(`${key}=${obj[key]}`)
  }
  return encodeURIComponent(params.join('&'))
}

// 修改URL中的参数
export const replaceParamVal = (paramName: any, replaceWith: any) => {
  const oUrl = location.href.toString()
  const re = eval('/(' + paramName + '=)([^&]*)/gi')
  location.href = oUrl.replace(re, paramName + '=' + replaceWith)
  return location.href
}
// 删除URL中指定参数

// export const funcUrlDel = (name: any) => {
//   const baseUrl = location.origin + location.pathname + '?'
//   const query = location.search.substr(1)
//   if (query.indexOf(name) > -1) {
//     const obj = {}
//     const arr = query.split('&')
//     for (let i = 0; i < arr.length; i++) {
//       arr[i] = arr[i].split('=')
//       obj[arr[i][0]] = arr[i][1]
//     }
//     delete obj[name]
//     return baseUrl + JSON.stringify(obj).replace(/[\"\{\}]/g, '').replace(/\:/g, '=').replace(/\,/g, '&')
//   }
// }

// 判断是移动还是PC设备
export const isMobile = () => {
  if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i))) {
    return 'mobile'
  }
  return 'desktop'
}

// 判断是否是苹果还是安卓移动设备
export const isAppleMobileDevice = () => {
  const reg = /iphone|ipod|ipad|Macintosh/i
  return reg.test(navigator.userAgent.toLowerCase())
}
// 判断是否是安卓移动设备

export const isAndroidMobileDevice = () => {
  return /android/i.test(navigator.userAgent.toLowerCase())
}
// 判断是Windows还是Mac系统

export const osType = () => {
  const agent = navigator.userAgent.toLowerCase()
  const isMac = /macintosh|mac os x/i.test(navigator.userAgent)
  const isWindows = agent.indexOf('win64') >= 0 || agent.indexOf('wow64') >= 0 || agent.indexOf('win32') >= 0 || agent.indexOf('wow32') >= 0
  if (isWindows) {
    return 'windows'
  }
  if (isMac) {
    return 'mac'
  }
}

// 判断是否是微信 / QQ内置浏览器
// export const broswer = () => {
//   const ua = navigator.userAgent.toLowerCase()
//   if (ua.match(/MicroMessenger/i) == 'micromessenger') {
//     return 'weixin'
//   } else if (ua.match(/QQ/i) == 'qq') {
//     return 'QQ'
//   }
//   return false
// }
// 浏览器型号和版本
// export const getExplorerInfo = () => {
//   const t = navigator.userAgent.toLowerCase()
//   return t.indexOf('msie') >= 0 ? { // ie < 11
//     type: 'IE',
//     version: Number(t.match(/msie ([\d]+)/)[1])
//   } : t.match(/trident\/.+?rv:(([\d.]+))/) ? { // ie 11
//     type: 'IE',
//     version: 11
//   } : t.indexOf('edge') >= 0 ? {
//     type: 'Edge',
//     version: Number(t.match(/edge\/([\d]+)/)[1])
//   } : t.indexOf('firefox') >= 0 ? {
//     type: 'Firefox',
//     version: Number(t.match(/firefox\/([\d]+)/)[1])
//   } : t.indexOf('chrome') >= 0 ? {
//     type: 'Chrome',
//     version: Number(t.match(/chrome\/([\d]+)/)[1])
//   } : t.indexOf('opera') >= 0 ? {
//     type: 'Opera',
//     version: Number(t.match(/opera.([\d]+)/)[1])
//   } : t.indexOf('Safari') >= 0 ? {
//     type: 'Safari',
//     version: Number(t.match(/version\/([\d]+)/)[1])
//   } : {
//     type: t,
//     version: -1
//   }
// }

// 滚动到页面顶部
export const scrollToTop = () => {
  const height = document.documentElement.scrollTop || document.body.scrollTop
  if (height > 0) {
    window.requestAnimationFrame(scrollToTop)
    window.scrollTo(0, height - height / 8)
  }
}

// 滚动到页面底部
export const scrollToBottom = () => {
  window.scrollTo(0, document.documentElement.clientHeight)
}

// 滚动到指定元素区域
export const smoothScroll = (element: any) => {
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  })
}
// 获取可视窗口高度

export const getClientHeight = () => {
  let clientHeight = 0
  if (document.body.clientHeight && document.documentElement.clientHeight) {
    clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight
  } else {
    clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight
  }
  return clientHeight
}

// 获取可视窗口宽度
export const getPageViewWidth = () => {
  return (document.compatMode == 'BackCompat' ? document.body : document.documentElement).clientWidth
}
// 打开浏览器全屏
// export const toFullScreen = () => {
//   const element = document.body
//   if (element.requestFullscreen) {
//     element.requestFullscreen()
//   } else if (element.mozRequestFullScreen) {
//     element.mozRequestFullScreen()
//   } else if (element.msRequestFullscreen) {
//     element.msRequestFullscreen()
//   } else if (element.webkitRequestFullscreen) {
//     element.webkitRequestFullScreen()
//   }
// }

// 退出浏览器全屏
// export const exitFullscreen = () => {
//   if (document.exitFullscreen) {
//     document.exitFullscreen()
//   } else if (document.msExitFullscreen) {
//     document.msExitFullscreen()
//   } else if (document.mozCancelFullScreen) {
//     document.mozCancelFullScreen()
//   } else if (document.webkitExitFullscreen) {
//     document.webkitExitFullscreen()
//   }
// }

// 当前时间
export const nowTime = () => {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth()
  const date = now.getDate() >= 10 ? now.getDate() : ('0' + now.getDate())
  const hour = now.getHours() >= 10 ? now.getHours() : ('0' + now.getHours())
  const miu = now.getMinutes() >= 10 ? now.getMinutes() : ('0' + now.getMinutes())
  const sec = now.getSeconds() >= 10 ? now.getSeconds() : ('0' + now.getSeconds())
  return +year + '年' + (month + 1) + '月' + date + '日 ' + hour + ':' + miu + ':' + sec
}

// 格式化时间
export const dateFormater = (formater: any, time: any) => {
  const date = time ? new Date(time) : new Date()
  const Y = date.getFullYear() + ''
  const M = date.getMonth() + 1
  const D = date.getDate()
  const H = date.getHours()
  const m = date.getMinutes()
  const s = date.getSeconds()
  return formater.replace(/YYYY|yyyy/g, Y)
    .replace(/YY|yy/g, Y.substr(2, 2))
    .replace(/MM/g, (M < 10 ? '0' : '') + M)
    .replace(/DD/g, (D < 10 ? '0' : '') + D)
    .replace(/HH|hh/g, (H < 10 ? '0' : '') + H)
    .replace(/mm/g, (m < 10 ? '0' : '') + m)
    .replace(/ss/g, (s < 10 ? '0' : '') + s)
}
// dateFormater('YYYY-MM-DD HH:mm:ss')
// dateFormater('YYYYMMDDHHmmss')

// 阻止冒泡事件
export const stopPropagation = (e: any) => {
  e = e || window.event
  if (e.stopPropagation) { // W3C阻止冒泡方法
    e.stopPropagation()
  } else {
    e.cancelBubble = true // IE阻止冒泡方法
  }
}

// 防抖函数
// export const debounce = (fn, wait) => {
//   let timer = null

//   return function () {
//     const context = this
//     const args = arguments

//     if (timer) {
//       clearTimeout(timer)
//       timer = null
//     }

//     timer = setTimeout(() => {
//       fn.apply(context, args)
//     }, wait)
//   }
// }

// 节流函数
// export const throttle = (fn: any, delay: any) => {
//   let curTime = Date.now()

//   return function () {
//     const context = this
//     const args = arguments
//     const nowTime = Date.now()

//     if (nowTime - curTime >= delay) {
//       curTime = Date.now()
//       return fn.apply(context, args)
//     }
//   }
// }

// 数据类型判断
export const getType = (value: any) => {
  if (value === null) {
    return value + ''
  }
  // 判断数据是引用类型的情况
  if (typeof value === 'object') {
    const valueClass = Object.prototype.toString.call(value)
    const type = valueClass.split(' ')[1].split('')
    type.pop()
    return type.join('').toLowerCase()
  } else {
    // 判断数据是基本数据类型的情况和函数的情况
    return typeof value
  }
}

// 对象深拷贝
export const deepClone = (obj: any, hash = new WeakMap()) => {
  // 日期对象直接返回一个新的日期对象
  if (obj instanceof Date) {
    return new Date(obj)
  }
  // 正则对象直接返回一个新的正则对象
  if (obj instanceof RegExp) {
    return new RegExp(obj)
  }
  // 如果循环引用,就用 weakMap 来解决
  if (hash.has(obj)) {
    return hash.get(obj)
  }
  // 获取对象所有自身属性的描述
  const allDesc = Object.getOwnPropertyDescriptors(obj)
  // 遍历传入参数所有键的特性
  const cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc)

  hash.set(obj, cloneObj)
  for (const key of Reflect.ownKeys(obj)) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      cloneObj[key] = deepClone(obj[key], hash)
    } else {
      cloneObj[key] = obj[key]
    }
  }
  return cloneObj
}
