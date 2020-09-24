import ColorMap from '$ui/assets/color.json'
export const isRgb = function (val) {
  const regRgba = /rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3})(,([.\d]+))?\)/
  return !!val.replace(/\s+/g, '').match(regRgba)
}

export const isHex = function (val) {
  return (/^#/g).test(val)
}
export const rgbToHex = function(val) { // RGB(A)颜色转换为HEX十六进制的颜色值
  let r, g, b, a
  const regRgba = /rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3})(,([.\d]+))?\)/, // 判断rgb颜色值格式的正则表达式，如rgba(255,20,10,.54)
  rsa = val.replace(/\s+/g, '').match(regRgba);
  if(!!rsa) {
      r = parseInt(rsa[1]).toString(16);
      r = r.length === 1 ? '0' + r : r;
      g = (+rsa[2]).toString(16);
      g = g.length === 1 ? '0' + g : g;
      b = (+rsa[3]).toString(16);
      b = b.length === 1 ? '0' + b : b;
      a = (+(rsa[5] ? rsa[5] : 1)) * 100;
      return {hex: '#' + r + g + b, alpha: Math.ceil(a)};
  }else{
      return {hex: val, alpha: 100};
  }    
}

export const hexToRgb = function(val) { // HEX十六进制颜色值转换为RGB(A)颜色值
  let a, b, c
  if ((/^#/g).test(val)) {
    a = val.slice(1, 3)
    b = val.slice(3, 5)
    c = val.slice(5, 7)
    return {
      rgba: 'rgb(' + parseInt(a, 16) + ',' + parseInt(b, 16) + ',' + parseInt(c, 16) + ')'
    };
  } else {
    return {rgba: ''};
  }
}
export const getRgb = function (rgba) {
  const match = rgba.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/)
  return match ? `${match[1]},${match[2]},${match[3]}` : ''
}

export const colorData = function (colorStr) {
  if (isRgb(colorStr)) {
    return {
      rgba: colorStr,
      _rgb: getRgb(colorStr),
      hex: rgbToHex(colorStr).hex
    }
  } else if (isHex(colorStr)) {
    const rgba = hexToRgb(colorStr).rgba
    return {
      rgba: hexToRgb(colorStr).rgba,
      _rgb: getRgb(rgba),
      hex: colorStr
    }
  } else { 
    if (ColorMap[colorStr]) {
      return {
        rgba: `rgb(${ColorMap[colorStr].rgb})`,
        _rgb: ColorMap[colorStr].rgb,
        hex: ColorMap[colorStr].hex
      }
    } else {
      return null
    }
  }
}